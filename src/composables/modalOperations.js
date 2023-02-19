import { useStore } from 'vuex'

export function useModalOperations() {
  const store = useStore()
  function toggleModal(modalId) {
    store.dispatch('dashboard/toggle_modal', modalId)
  }
  function toggleLandingpageModal(modalId) {
    store.dispatch('landingpage/toggle_modal', modalId)
  }
  return { toggleModal, toggleLandingpageModal }
}
