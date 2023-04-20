import axios from 'axios'
import { useRouter } from 'vue-router'
import { useState } from '@/composables/useState.js'
import { validateToken } from '@/services/utils/ValidateTokenUtility'
// import { useAxios } from '@/composables/UseDashboardAxios'
// const { axiosInstance: axiosconf } = useAxios()
// console.log(axiosconf)

const router = useRouter()
const { AuthToken } = useState()

const axiosInstance = axios.create({
  baseURL: 'https://api.staging.jasfitnessng.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${AuthToken?.value}`
  }
})

// only set the header if it exists in the localStorage
axiosInstance.interceptors.request.use(async (req) => {
  if (!req.headers.Authorization) {
    req.headers.Authorization = `Bearer ${AuthToken?.value}`
  }

  if (
    validateToken(req.headers.Authorization.slice(7)) ||
    (AuthToken.value && validateToken(AuthToken.value))
  )
    return req

  // if there's a refresh token, use it here to
  // refresh the token and save the new access token
  // instead of logging the user out unless the
  // refresh token is expired too
  router.push({ name: 'LoginPage' })
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
