<template>
  <div class="success">
    <h2 class="pt-32">Successful</h2>
    <p>{{ toggleShowNotification }}</p>
  </div>
</template>

<script>
export default {
  name: 'SuccessView',
  data() {
    return {}
  },
  methods: {},
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

<style lang="scss" scoped>
.success {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
