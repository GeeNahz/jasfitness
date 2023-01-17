<template>
  <div v-if="alerts.length" class="fixed bottom-10 right-10">
    <TransitionGroup name="alerts">
      <div
        v-for="alert in alerts"
        :key="alert.id"
        class="fade show"
        role="alert"
        :class="`alert alert-${alert.style} min-w-[200px] max-w-[400px]`"
      >
        <p class="inline alert-dismissible">
          {{ alert.message }}
        </p>
        <button
          @click="closeAlert(alert.id)"
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const alerts = computed(() =>
  store.state.landingpage.items ? store.state.landingpage.items : []
)

function closeAlert(id) {
  store.dispatch('landingpage/remove', id)
}
console.log(alerts.value)
// const alerts = useAlertsStore();
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
</style>
