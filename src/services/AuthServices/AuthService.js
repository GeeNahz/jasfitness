import apiClient from './axiosConfig'

export default {
  async login_user(data) {
    return await apiClient.post('api/auth/login/', data)
  },
  logout_user() {
    localStorage.removeItem('jf-usr-tkn')
  },
  async password_change(email) {
    return await apiClient.post('api/auth/change_pass/', email)
  },
  async password_confirm(data) {
    return await apiClient.post('api/auth/change_pass/confirm/', data)
  },
  async password_validate(token) {
    return await apiClient.post('api/auth/change_pass/validate_token/', token)
  },
  async membership_setup(data) {
    return await apiClient.post('api/auth/membership_setup/', data)
  }
}
