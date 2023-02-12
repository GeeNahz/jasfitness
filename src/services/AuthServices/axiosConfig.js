import axios from 'axios'

const baseURL = 'https://api.staging.jasfitnessng.com/api/auth/'

const apiClient = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  }
)

export default apiClient

// 'https://local.fusionauth.io/api/login'
// {
//   "loginId": "example@fusionauth.io",
//   "password": "password",
//   "applicationId": "10000000-0000-0002-0000-000000000001",
//   "noJWT" : false,
//   "ipAddress": "192.168.1.42"
// }
