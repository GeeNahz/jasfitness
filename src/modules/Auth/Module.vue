<template>
  <div class="h-full" :key="$route.path">
    <TheNavbar />
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  name: 'AuthView',
  components: { TheNavbar },
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
