import axiosInstance from '@/services/DashboardServices/axiosConfig'
import AuthService from '@/services/AuthServices/AuthService.js'
import { validateToken } from '@/services/helpers/ValidateTokenHelper.js'
import { useState } from '@/composables/useState.js'

const { User, AuthToken } = useState()

const varifyUser = (user) => {
  if (user && validateToken(AuthToken.value)) return true
  return false
}
const defaultState = varifyUser(User.value)
  ? { user: JSON.parse(User.value), isLoggedIn: true }
  : { user: null, isLoggedIn: false }

export default {
  namespaced: true,
  state: {
    status: {
      isLoading: false,
      success: false,
      error: false
    },
    ...defaultState,
    notification: []
  },
  getters: {},
  mutations: {
    setNotification(state, payload) {
      state.notification.push(payload)
    },
    clearNotification(state) {
      state.notification = []
    },
    DEFAULT_STATUS(state) {
      state.status.success = false
      state.status.error = false
      state.status.isLoading = false
    },
    LOADING(state) {
      state.status.isLoading = true
    },
    LOGIN_SUCCESS(state, data) {
      state.user = data
      state.isLoggedIn = true
      state.status.success = true
      state.status.isLoading = false
    },
    LOGIN_FAILURE(state) {
      state.user = null
      state.isLoggedIn = false
      state.status.error = true
      state.status.isLoading = false
    }
  },
  actions: {
    login({ commit }, payload) {
      commit('LOADING')
      return AuthService.login_user(payload)
        .then(
          (response) => {
            const user_details = {
              id: response.data.user_id,
              username: response.data.username,
              avatar: response.data.avatar
            }
            User.value = JSON.stringify({ ...user_details })
            AuthToken.value = response.data.token
            axiosInstance.defaults.headers = {
              Authorization: `Bearer ${response.data.token}`
            }
            commit('LOGIN_SUCCESS', user_details)

            return Promise.resolve(response.data)
          },
          (error) => {
            User.value = null
            AuthToken.value = null
            delete axiosInstance.defaults.headers.Authorization
            commit('LOGIN_FAILURE')
            return Promise.reject(error.message)
          }
        )
        .finally(() => {
          // reset auth status
          setTimeout(() => {
            commit('DEFAULT_STATUS')
          }, 5000)
        })
    },
    logout({ commit }) {
      User.value = null
      AuthToken.value = null

      commit('LOGIN_FAILURE')
    }
    // setNotifications({ commit }, payload) {
    //   commit('auth/SET_NOTIFICATION', payload, { root: true })
    //   setTimeout(() => {
    //     commit('auth/CLEAR_NOTIFICATION', null, { root: true })
    //   }, 5000)
    // }
  }
}
