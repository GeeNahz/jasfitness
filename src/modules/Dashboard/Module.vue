<template>
  <div
    class="flex flex-col md:flex-row md:items-center w-full h-full font-quicksand disable-scroll"
  >
    <div
      v-if="
        profileModal ||
        healthRecordModal ||
        accessmentRecordModal ||
        freezeSubscriptionModal ||
        shareSubscriptionModal
      "
      class="fixed z-50 h-full w-full"
    >
      <DashboardHandleModalsDisplay />
    </div>
    <TheSidebar />
    <div class="mt-12 md:mt-0 h-full w-full">
      <router-view :key="$route.path" class="h-full" />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import DashboardHandleModalsDisplay from './components/DashboardHandleModalsDisplay.vue'
import TheSidebar from './components/TheSidebar.vue'
export default {
  name: 'DashboardView',
  components: {
    TheSidebar,
    DashboardHandleModalsDisplay
  }
}
</script>
<script setup>
const store = useStore()
const profileModal = computed(() => store.state.dashboard.modals.profile.open)
const healthRecordModal = computed(
  () => store.state.dashboard.modals.healthRecord.open
)
const accessmentRecordModal = computed(
  () => store.state.dashboard.modals.accessmentRecord.open
)
const freezeSubscriptionModal = computed(
  () => store.state.dashboard.modals.freezeSub.open
)
const shareSubscriptionModal = computed(
  () => store.state.dashboard.modals.shareSub.open
)
</script>

<style scoped></style>
