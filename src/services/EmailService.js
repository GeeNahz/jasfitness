import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://www.jasfitnessng.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    withCredentials: true
  }
})

export default {
  post_bmi_result(data) {
    return apiClient.post('/enquiry/', data)
  },
  post_contact_us_form(data) {
    return apiClient.post('/api/contact-us/', data)
  }
}
