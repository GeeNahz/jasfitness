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
    dashboardFitness: null,
    dashboardGymnAttendance: null,
    dashboardSubscription: null,
    dashboardFitnessAssessment: null,
    modals: {
      profile: { id: 'profile', open: false },
      healthRecord: { id: 'healthRecord', open: false },
      accessmentRecord: { id: 'accessmentRecord', open: false },
      freezeSub: { id: 'freezeSub', open: false },
      shareSub: { id: 'shareSub', open: false },
      feedback: { id: 'feedback', open: false }
    }
  },
  getters: {},
  mutations: {
    TOGGLE_MODAL(state, modal_id) {
      for (let key in state.modals) {
        if (state.modals[key].id === modal_id) {
          state.modals[key].open
            ? (state.modals[key].open = false)
            : (state.modals[key].open = true)
        }
      }
    },
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
    },
    SET_DASHBOARD_GYMN_ATTENDANCE_STATE(state, payload) {
      state.dashboardGymnAttendance = payload
    },
    SET_DASHBOARD_PROFILE_STATE(state, payload) {
      state.profile = payload
    },
    SET_DASHBOARD_SUBSCRIPTION_STATE(state, payload) {
      state.dashboardSubscription = payload
    },
    SET_DASHBOARD_FITNESS_ASSESSMENT_STATE(state, payload) {
      state.dashboardFitnessAssessment = payload
    }
  },
  actions: {
    toggle_modal({ commit }, modal_id) {
      // commit('CLOSE_ALL_MODALS')
      commit('TOGGLE_MODAL', modal_id)
    },
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
            return Promise.reject(error.message)
          }
        )
        .finally(() => {
          commit('STATUS_RESET')
        })
    },
    dashboard_fitness({ commit }) {
      commit('STATUS_LOADING')
      return DashboardService.dashboard_fitness_record()
        .then(
          (response) => {
            commit('SET_DASHBOARD_FITNESS_STATE', response.data)
            return Promise.resolve(response.data)
          },
          (error) => {
            commit('SET_DASHBOARD_FITNESS_STATE', {})
            return Promise.reject(error.message)
          }
        )
        .finally(() => {
          commit('STATUS_RESET')
        })
    },
    dashboard_gym_attendance({ commit }, user_id) {
      commit('STATUS_LOADING')
      return DashboardService.dashboard_gym_attendance(user_id)
        .then(
          (response) => {
            commit('SET_DASHBOARD_GYMN_ATTENDANCE_STATE', response.data)
            return Promise.resolve(response.data)
          },
          (error) => {
            commit('SET_DASHBOARD_GYMN_ATTENDANCE_STATE', {})
            return Promise.reject(error.message)
          }
        )
        .finally(() => {
          commit('STATUS_RESET')
        })
    },
    dashboard_profile({ commit }, user_id) {
      commit('STATUS_LOADING')
      return DashboardService.dashboard_profile(user_id)
        .then(
          (response) => {
            commit('SET_DASHBOARD_PROFILE_STATE', response.data)
            return Promise.resolve(response.data)
          },
          (error) => {
            commit('SET_DASHBOARD_PROFILE_STATE', {})
            return Promise.reject(error.message)
          }
        )
        .finally(() => {
          commit('STATUS_RESET')
        })
    },
    dashboard_subscription({ commit }) {
      commit('STATUS_LOADING')
      return DashboardService.dashboard_subscription()
        .then(
          (response) => {
            commit('SET_DASHBOARD_SUBSCRIPTION_STATE', response.data)
            return Promise.resolve(response.data)
          },
          (error) => {
            commit('SET_DASHBOARD_SUBSCRIPTION_STATE', {})
            return Promise.reject(error.message)
          }
        )
        .finally(() => {
          commit('STATUS_RESET')
        })
    },
    dashboard_freeze_subscription({ commit }, duration) {
      commit('STATUS_LOADING')
      return DashboardService.dashboard_freeze_subscription(duration)
        .then(
          (response) => {
            return Promise.resolve(response.data)
          },
          (error) => {
            return Promise.reject(error.message)
          }
        )
        .finally(() => {
          commit('STATUS_RESET')
        })
    },
    dashboard_share_subscription({ commit }, data) {
      commit('STATUS_LOADING')
      return DashboardService.dashboard_share_subscription(data)
        .then(
          (response) => {
            return Promise.resolve(response.data)
          },
          (error) => {
            return Promise.reject(error.message)
          }
        )
        .finally(() => {
          commit('STATUS_RESET')
        })
    },
    dashboard_fitness_assessment({ commit }, user_id) {
      commit('STATUS_LOADING')
      return DashboardService.dashboard_assessments(user_id)
        .then(
          (response) => {
            commit('SET_DASHBOARD_FITNESS_ASSESSMENT_STATE', response.data)
            return Promise.resolve(response.data)
          },
          (error) => {
            commit('SET_DASHBOARD_FITNESS_ASSESSMENT_STATE', {})
            return Promise.reject(error.message)
          }
        )
        .finally(() => {
          commit('STATUS_RESET')
        })
    },
    dashboard_fitness_profile({ commit }) {
      commit('STATUS_LOADING')
      return DashboardService.dashboard_fitness_profile()
        .then(
          (response) => {
            commit('SET_DASHBOARD_FITNESS_ASSESSMENT_STATE', response.data)
            return Promise.resolve(response.data)
          },
          (error) => {
            commit('SET_DASHBOARD_FITNESS_ASSESSMENT_STATE', {})
            return Promise.reject(error.message)
          }
        )
        .finally(() => {
          commit('STATUS_RESET')
        })
    }
  },
  modules: {}
}
