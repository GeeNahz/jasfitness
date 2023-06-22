import type { CareerPayload } from '@/modules/Career/types'
import axiosInstance from './axiosConfig'

export default {
  bmi_result(data: any) {
    return axiosInstance.post('api/v1/bmi_result/', data)
  },
  post_contact_us_form(data: any) {
    return axiosInstance.post('/api/v1/contact-us/', data)
  },
  newsletter(data: any) {
    return axiosInstance.post('/api/v1/newsletter/', data)
  },
  enquiry(data: any) {
    return axiosInstance.post('/api/v1/enquiry/', data)
  },
  medical_conditions_list() {
    return axiosInstance.get('/api/v1/medical_condition/')
  },
  hmos_list() {
    return axiosInstance.get('/api/v1/hmos/')
  },
  fitness_plan() {
    return axiosInstance.get('/fitness_plan/')
  },
  instructors() {
    return axiosInstance.get("/api/v1/instructors/");
  },
  careers() {
    return axiosInstance.get("/api/v1/careers/");
  },
  career(id: number) {
    return axiosInstance.get(`/api/v1/careers/${id}/`);
  },
  career_application(data: CareerPayload) {
    return axiosInstance.post("/api/v1/career-application/", data);
  },
}
