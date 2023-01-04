import DashboardService from '@/services/DashboardServices/DashboardService'
// import { useState } from '@/composables/useState'
/**What i need
 *
 * user profile
 * attendance
 */

// const { User } = useState()

export default {
  namespaced: true,
  state: {
    status: { isLoading: false, error: false },
    profile: null,
    dashboardBase: null,
    dashboardFitness: null
  },
  getters: {},
  mutations: {
    STATUS_LOADING(state) {
      state.status.isLoading = true
    },
    STATUS_RESET(state) {
      state.status.isLoading = false
      state.status.error = false
    },
    SET_DASHBOARD_BASE_STATE(state, payload) {
      state.dashboardBase = payload
    },
    SET_DASHBOARD_FITNESS_STATE(state, payload) {
      state.dashboardFitness = payload
    }
  },
  actions: {
    dashboard_home({ commit }) {
      commit('STATUS_LOADING')
      return DashboardService.dashboard_home()
        .then(
          (response) => {
            commit('SET_DASHBOARD_BASE_STATE', response.data)
            return Promise.resolve(response.data)
          },
          (error) => {
            commit('SET_DASHBOARD_BASE_STATE', {})
            return Promise.reject(error)
          }
        )
        .finally(() => {
          commit('STATUS_RESET')
        })
    },
    dashboard_fitness({ commit }) {
      commit('STATUS_LOADING')
      return DashboardService.dashboard_fitness_record().then(
        (response) => {
          commit('SET_DASHBOARD_FITNESS_STATE', response.data)
          return Promise.resolve(response.data)
        },
        (error) => {
          commit('SET_DASHBOARD_FITNESS_STATE', {})
          return Promise.reject(error.message)
        }
      )
    }
  },
  modules: {}
}
