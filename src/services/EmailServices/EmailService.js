import axiosInstance from './axiosConfig'

export default {
  post_bmi_result(data) {
    return axiosInstance.post('/enquiry/', data)
  },
  post_contact_us_form(data) {
    return axiosInstance.post('/api/contact-us/', data)
  }
}
