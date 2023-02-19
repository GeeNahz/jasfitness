import { v4 as uuid } from 'uuid'

/**Notification types
 * success
 * danger
 * warning
 * info
 *
 ** Notification options
 * id
 * message
 * style
 * timeout
 * ...options
 */

const defaultOptions = {
  timeout: 5000,
  style: 'info'
}

export default {
  namespaced: true,
  state: {
    items: [],
    modals: {
      usernameSearch: { id: 'usernameJF', open: false }
    }
  },
  getters: {},
  mutations: {
    NOTIFY(state, payload) {
      state.items.push({
        ...payload
      })
    },
    REMOVE(state, id) {
      const index = state.items.findIndex((item) => item.id === id)
      if (index > -1) {
        state.items.splice(index, 1)
      }
    },
    TOGGLE_MODAL(state, id) {
      for (let key in state.modals) {
        if (state.modals[key].id === id) {
          state.modals[key].open = !state.modals[key].open
        }
      }
    }
  },
  actions: {
    notify({ commit, dispatch }, payload) {
      const options = { ...defaultOptions, ...payload }

      const id = uuid()
      const details = {
        id,
        ...options
      }
      commit('NOTIFY', details)
      if (options.timeout !== false) {
        setTimeout(() => {
          dispatch('remove', id)
        }, options.timeout)
      }
    },

    success({ dispatch }, payload) {
      const data = { ...payload, style: 'success' }
      dispatch('notify', data)
    },

    error({ dispatch }, payload) {
      const data = { ...payload, style: 'danger' }
      dispatch('notify', data)
    },

    warning({ dispatch }, payload) {
      const data = { ...payload, style: 'warning' }
      dispatch('notify', data)
    },

    info({ dispatch }, payload) {
      const data = { ...payload, style: 'info' }
      dispatch('notify', data)
    },

    remove({ commit }, id) {
      commit('REMOVE', id)
    },

    toggle_modal({ commit }, id) {
      commit('TOGGLE_MODAL', id)
    }
  },
  modules: {}
}
