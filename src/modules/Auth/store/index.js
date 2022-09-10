export default {
  namespaced: true,
  state: {
    notification: []
  },
  getters: {},
  mutations: {
    setNotification(state, payload) {
      state.notification.push(payload)
    },
    clearNotification(state) {
      state.notification = []
    }
  },
  actions: {
    setNotifications({ commit }, payload) {
      commit('auth/SET_NOTIFICATION', payload, { root: true })
      setTimeout(() => {
        commit('auth/CLEAR_NOTIFICATION', null, { root: true })
      }, 5000)
    }
  }
}
