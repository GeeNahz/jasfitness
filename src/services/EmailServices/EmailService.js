import axiosInstance from './axiosConfig'

export default {
  bmi_result(data) {
    return axiosInstance.post('/bmi_result/', data)
  },
  post_contact_us_form(data) {
    return axiosInstance.post('/api/contact-us/', data)
  },
  newsletter(data) {
    // https://app.jasfitnessng.com/api/newsletter/
    return axiosInstance.post('/api/newsletter/', data)
  }
}
