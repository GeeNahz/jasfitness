import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://www.jasfitnessng.com/api/v1/enquiry/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    withCredentials: true
  }
})

export default {
  post_bmi_result(email) {
    return apiClient.post('', email)
  }
}
