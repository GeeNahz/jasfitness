import axios from 'axios'

const baseUrl = 'https://api.staging.jasfitnessng.com'

const axiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default axiosInstance
