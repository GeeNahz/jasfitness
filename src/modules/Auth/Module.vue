<template>
  <div class="h-full" :key="$route.path">
    <TheNavbar />
    <AppNotificationPanel
      class="mt-24"
      v-if="!isNotificationEmpty"
      :notifyObject="toggleShowNotification"
    />
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import AppNotificationPanel from '@/components/AppNotificationPanel.vue'

export default {
  name: 'AuthView',
  components: { TheNavbar, AppNotificationPanel },
  data() {
    return {
      showNotification: ''
    }
  },
  computed: {
    toggleShowNotification() {
      return this.$store.state.auth.notification
    },
    isNotificationEmpty() {
      return this.toggleShowNotification.length === 0
    }
  }
}
</script>
