import axios from 'axios'
import { useRouter } from 'vue-router'
import { useState } from '@/composables/useState.js'
import { validateToken } from '@/services/helpers/ValidateTokenHelper'
// import { useAxios } from '@/composables/UseDashboardAxios'
// const { axiosInstance: axiosconf } = useAxios()
// console.log(axiosconf)

const router = useRouter()
const { AuthToken } = useState()

const axiosInstance = axios.create({
  baseURL: 'https://jas-fitness-api-service.onrender.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${AuthToken?.value}`
  }
})

// only set the header if it exists in the localStorage
axiosInstance.interceptors.request.use(async (req) => {
  req.headers.Authorization = `Bearer ${AuthToken?.value}`

  if (validateToken(AuthToken.value)) return req

  // if there's a refresh token, use it here to
  // refresh the token and save the new access token
  // instead of logging the user out unless the
  // refresh token is expired too
  router.push({ name: 'LoginPage' })
})

export default axiosInstance
