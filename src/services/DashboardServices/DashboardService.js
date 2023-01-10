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
  }
}
