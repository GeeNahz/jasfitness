import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://jas-fitness-api-service.onrender.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  get_users() {
    return apiClient.get('/user')
  },
  get_members_assessments() {
    return apiClient('/gym_member_assessments/')
  }
}
