<script setup lang="ts">
import AppIconClose from '@/components/icons/AppIconClose.vue'

import { useAlertStore } from '@/stores/alerts'
import type { ID } from "@/types"

const store = useAlertStore()
const alerts = store.alerts
function closeAlert(id: ID) {
  store.removeAlert(id)
}
</script>
<template>
  <Transition name="alerts-container">
    <div
      v-if="alerts.length"
      class="fixed bottom-1 right-1 sm:bottom-10 sm:right-10 z-50"
    >
      <TransitionGroup name="alerts">
        <div
          v-for="alert in alerts"
          :key="alert.id"
          class="fade show"
          role="alert"
          :class="`grid grid-cols-12 justify-start alert alert-${alert.style} min-w-[300px]`"
        >
          <p class="inline alert-dismissible col-span-11 text-xs sm:text-sm">
            {{ alert.message }}
          </p>
          <button
            @click="closeAlert(alert.id)"
            type="button"
            class="close col-spal-1 place-self-center"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true"><AppIconClose /></span>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Transition>
</template>
<style scoped>
.alerts-enter-active,
.alerts-leave-active {
  transition: all 0.5s ease;
}
.alerts-enter-from,
.alerts-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.alerts-container-enter-active,
.alerts-container-leave-active {
  transition: all 0.3s ease;
}
.alerts-container-enter-from,
.alerts-container-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
