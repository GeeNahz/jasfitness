import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://www.jasfitnessng.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default axiosInstance
