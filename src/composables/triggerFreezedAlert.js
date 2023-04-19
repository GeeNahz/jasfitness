import { useStore } from 'vuex'
import { ref } from 'vue'

export function useTriggerFreezeAlert({ freezeObject, customStore = null }) {
  const store = useStore()
  const isTriggered = ref(false)

  if (freezeObject?.frozen) {
    if (customStore !== null) {
      customStore.dispatch('dashboard/freezed_sub_toggle', {
        is_freezed: true,
        details: {
          message: `Your subscription is frozen`
        }
      })
    } else {
      store.dispatch('dashboard/freezed_sub_toggle', {
        is_freezed: true,
        details: {
          message: `Your subscription is frozen`
        }
      })
    }
    isTriggered.value = true
  }

  return { isTriggered }
}
