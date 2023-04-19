import { useStore } from 'vuex'
import { ref } from 'vue'

export function useTriggerFreezeAlert({ freezeObject }) {
  const store = useStore()
  const isTriggered = ref(false)

  if (freezeObject.frozen) {
    store.dispatch('dashboard/freezed_sub_toggle', {
      is_freezed: true,
      details: {
        message: `Your subscription has is frozen`
      }
    })
    isTriggered.value = true
  }

  return { isTriggered }
}