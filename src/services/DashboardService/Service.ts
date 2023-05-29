import type { ChangePassword } from '@/modules/Dashboard/types/index.js'
import axiosInstance from './axiosConfig.js'

export default {
  dashboard_home() {
    return axiosInstance.get('dashboard/home')
  },
  dashboard_gym_attendance(id: number) {
    return axiosInstance.get(`gym_attendance/?member__id=${id}`)
  },
  dashboard_fitness_record() {
    return axiosInstance.get('dashboard/fitness_record/')
  },
  dashboard_subscription() {
    return axiosInstance.get('dashboard/subscription/')
  },
  dashboard_profile(id: number) {
    return axiosInstance.get(`profile/${id}`)
  },
  dashboard_freeze_subscription(duration: any) {
    return axiosInstance.post('dashboard/freeze_subscription/', duration)
  },
  dashboard_share_subscription(data: any) {
    return axiosInstance.post('dashboard/share_subscription/', data)
  },
  dashboard_assessments(id: number) {
    return axiosInstance.get(`fitness_assessments/${id}/`)
  },
  dashboard_fitness_profile() {
    return axiosInstance.get('dashboard/fitness_profile/')
  },
  orientation_completed() {
    return axiosInstance.get('api/auth/orientation/')
  },
  change_password(data: ChangePassword) {
    return axiosInstance.post('api/auth/change_password/', data)
  },
  unfreeze_subscription() {
    return axiosInstance.get('api/v1/dashboard/unfreeze_subscription/')
  } // unfreeze subscription service template
}
