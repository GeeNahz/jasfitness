import apiClient from './axiosConfig'

export default {
  async login_user(data) {
    return await apiClient.post('login/', data)
  },
  logout_user() {
    localStorage.removeItem('jf-usr-tkn')
  },
  async password_change(email) {
    return await apiClient.post('change_pass/', email)
  },
  async password_confirm(data) {
    return await apiClient.post('change_pass/confirm/', data)
  },
  async password_validate(token) {
    return await apiClient.post('change_pass/validate_token/', token)
  },
  async membership_setup(data) {
    return await apiClient.post('membership_setup/', data)
  },
  async orientation_complete() {
    return await apiClient.get('orientation/')
  }
}
