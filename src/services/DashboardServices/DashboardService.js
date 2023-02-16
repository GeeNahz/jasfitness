import axiosInstance from './axiosConfig.js'

export default {
  dashboard_home() {
    return axiosInstance.get('dashboard/home')
  },
  dashboard_gym_attendance(id) {
    return axiosInstance.get(`gym_attendance/?member__id=${id}`)
  },
  dashboard_fitness_record() {
    return axiosInstance.get('dashboard/fitness_record/')
  },
  dashboard_subscription() {
    return axiosInstance.get('dashboard/subscription/')
  },
  dashboard_profile(id) {
    return axiosInstance.get(`profile/${id}`)
  },
  dashboard_freeze_subscription(duration) {
    return axiosInstance.post('dashboard/freeze_subscription/', duration)
  },
  dashboard_share_subscription(data) {
    return axiosInstance.post('dashboard/share_subscription/', data)
  },
  dashboard_assessments(id) {
    return axiosInstance.get(`fitness_assessments/${id}/`)
  },
  dashboard_fitness_profile() {
    return axiosInstance.get('dashboard/fitness_profile/')
  },
  orientation_completed() {
    return axiosInstance.get('api/auth/orientation/')
  },
  change_password(data) {
    return axiosInstance.post('api/auth/change_password/', data)
  }
}
