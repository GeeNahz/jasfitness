import axiosInstance from './axiosConfig.js'

export default {
  dashboard_home() {
    return axiosInstance.get('dashboard/home')
  },
  dashboard_fitness_record() {
    return axiosInstance.get('dashboard/fitness_record/')
  }
}

// https://api.staging.jasfitnessng.com/
