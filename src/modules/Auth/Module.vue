<template>
  <TheNavbar />
  <AppNotificationPanel
    v-if="!isNotificationEmpty"
    :notifyObject="toggleShowNotification"
  />
  <!-- Create a template for authentication * use the router api to check what
  route in currently being redered * for every route type, a curresponding
  motivation message be attached * when the route changes, the message that
  should be rendered should change to its corresponding route * do that for all
  pages -->
  <router-view :key="$route.path" />
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
