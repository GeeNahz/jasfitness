import axiosInstance from '@/services/DashboardServices/axiosConfig'
import AuthService from '@/services/AuthServices/AuthService.js'
import DashboardService from '@/services/DashboardServices/DashboardService'
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
    STATUS_RESET(state) {
      state.status.success = false
      state.status.error = false
      state.status.isLoading = false
    },
    STATUS_LOADING(state) {
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
    },
    TOGGLE_IS_ORIENTED(state, payload) {
      state.user.is_oriented = payload
    }
  },
  actions: {
    login({ commit }, payload) {
      commit('STATUS_LOADING')
      return AuthService.login_user(payload)
        .then(
          (response) => {
            const user_details = { ...response.data }
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
            commit('STATUS_RESET')
          }, 5000)
        })
    },
    logout({ commit }) {
      User.value = null
      AuthToken.value = null

      commit('LOGIN_FAILURE')
    },
    // password_reset_request_email({ commit }, email) {
    //   commit('STATUS_LOADING')
    //   return AuthService.password_reset_request(email)
    // },
    toggle_is_oriented({ commit }, value = false) {
      commit('TOGGLE_IS_ORIENTED', value)
    },
    completed_orientation({ commit, dispatch }) {
      commit('STATUS_LOADING')
      return DashboardService.orientation_completed()
        .then(
          (response) => {
            return Promise.resolve(response)
          },
          (error) => {
            return Promise.reject(error.message)
          }
        )
        .finally(() => {
          dispatch('toggle_is_oriented', true) // ensure that either ways, it is registered locally that onboarding has been completed
          commit('STATUS_RESET')
        })
    }
  }
}
