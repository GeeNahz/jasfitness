import axiosInstance from './axiosConfig'

export default {
  enquiry(data) {
    return axiosInstance.post('/enquiry/', data)
  },
  post_contact_us_form(data) {
    return axiosInstance.post('/api/contact-us/', data)
  }
}
