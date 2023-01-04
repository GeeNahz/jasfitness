import axiosInstance from './axiosConfig.js'

export default {
  dashboard_home() {
    return axiosInstance.get('dashboard/home')
  },
  get_users() {
    return axiosInstance.get('/user')
  },
  get_members_assessments() {
    return axiosInstance.get('/gym_member_assessments/')
  }
}
