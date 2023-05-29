import { ref } from "vue";
import { useDashboardStore } from '@/modules/Dashboard/stores/dashboard';

export function useTriggerFreezeAlert({ freezeObject, customStore = null }: { freezeObject: any; customStore?: any | null }) {
  const dasboardStore = useDashboardStore();
  const isTriggered = ref(false);

  function triggerCustomStore() {
    customStore;
  }
  if (freezeObject?.frozen) {
    if (customStore !== null) {
      triggerCustomStore();
    } else {
      dasboardStore.freezed_sub_toggle({
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