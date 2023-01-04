import DashboardService from '@/services/DashboardServices/DashboardService'
/**What i need
 *
 * user profile
 * attendance
 */

export default {
  namespaced: true,
  state: {
    status: { isLoading: false, error: false },
    profile: null,
    dashboardBase: {}
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
    }
  },
  modules: {}
}
