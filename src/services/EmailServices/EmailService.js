import axiosInstance from './axiosConfig'

export default {
  bmi_result(data) {
    return axiosInstance.post('/bmi_result/', data)
  },
  post_contact_us_form(data) {
    return axiosInstance.post('/api/contact-us/', data)
  },
  newsletter(data) {
    return axiosInstance.post('/api/newsletter/', data)
  }
}
