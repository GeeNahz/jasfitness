import { useStore } from 'vuex'
import { ref } from 'vue'

export function useTriggerFreezeAlert({ storeDashboardBaseValue }) {
  const store = useStore()
  const isTriggered = ref(false)

  if (storeDashboardBaseValue.freeze.value > 0) {
    let freezedDate = new Date().toLocaleString() // replace this with the actual date of freeze request
    store.dispatch('dashboard/freezed_sub_toggle', {
      is_freezed: true,
      details: {
        message: `Your subscription was paused on the ${freezedDate}`
      }
    })
    isTriggered.value = true
  }

  return { isTriggered }
}
