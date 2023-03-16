import axiosInstance from './axiosConfig'

export default {
  bmi_result(data) {
    return axiosInstance.post('api/v1/bmi_result/', data)
  },
  post_contact_us_form(data) {
    return axiosInstance.post('/api/v1/contact-us/', data)
  },
  newsletter(data) {
    return axiosInstance.post('/api/v1/newsletter/', data)
  },
  enquiry(data) {
    return axiosInstance.post('/api/v1/enquiry/', data)
  },
  medical_conditions_list() {
    return axiosInstance.get('/api/v1/medical_condition/')
  },
  hmos_list() {
    return axiosInstance.get('/api/v1/hmos/')
  }
}
