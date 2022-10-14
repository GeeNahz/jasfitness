<template>
  <div class="success">
    <div class="success__box">
      <h2 class="">Successful</h2>
      <div>
        <svg
          width="117"
          height="118"
          viewBox="0 0 117 118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.7606 97.3893C46.6951 102.154 57.0051 103.673 66.9341 101.688C76.863 99.703 85.7966 94.3367 92.2125 86.5034C98.6284 78.6702 102.13 68.8546 102.12 58.7292C102.11 48.6038 98.5899 38.795 92.1589 30.9741C85.7278 23.1533 76.7839 17.8042 66.8512 15.8385C56.9184 13.8727 46.6113 15.4118 37.6861 20.1935C28.7608 24.9752 21.7697 32.7037 17.9039 42.0621C14.0381 51.4205 13.5368 61.8298 16.4854 71.5164"
            stroke="#42C12D"
            stroke-width="5"
            stroke-linecap="round"
          />
          <path
            d="M33.7587 66.97L49.4507 78.9059C49.889 79.2393 50.5145 79.1555 50.8496 78.7185L79.0918 41.8921"
            stroke="#42C12D"
            stroke-width="5"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <p>{{ toggleShowNotification }}</p>
    </div>
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
$primary-color: #ffc453;
$secondary-color: #42c12d;
$text-color: #1f1f1f;

@mixin flexCenter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.success {
  @include flexCenter();
  color: $text-color;
  height: 100%;
}
.success__box {
  @include flexCenter();
  padding: 60px 90px;
  border-radius: 10px;
  box-shadow: 0 4px 4px;
}
</style>
