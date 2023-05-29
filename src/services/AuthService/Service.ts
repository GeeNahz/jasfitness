import apiClient from './axiosConfig'

export default {
  async login_user(data: any) {
    return await apiClient.post('login/', data)
  },
  logout_user() {
    localStorage.removeItem('jf-usr-tkn')
  },
  async password_reset_request(email: { email: string; }) {
    return await apiClient.post('reset/', email)
  },
  async password_reset_confirm(data: any) {
    return await apiClient.post('reset/confirm/', data)
  },
  async membership_setup(data: {}) {
    return await apiClient.post('membership_setup/', data)
  }
}
