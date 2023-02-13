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
            <span aria-hidden="true"><AppIconCloseAlert /></span>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import AppIconCloseAlert from './AppIconCloseAlert.vue'

const store = useStore()

const alerts = computed(() =>
  store.state.landingpage.items ? store.state.landingpage.items : []
)

function closeAlert(id) {
  store.dispatch('landingpage/remove', id)
}
</script>

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
  transform: translateY(30px);
}
</style>
