<template>
  <div class="success font-quicksand">
    <div class="success__box">
      <h2 class="success__box__title">Successful!!!</h2>
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
      <div class="success__box__body">
        <p>{{ toggleShowNotification[0].message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessView',
  data() {
    return {}
  },
  computed: {
    toggleShowNotification() {
      return this.$store.state.auth.notification
    },
    isNotificationEmpty() {
      return this.toggleShowNotification.length === 0
    }
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: this.toggleShowNotification[0].route })
    }, 4000)
  }
}
</script>

<style lang="scss" scoped>
$all-colors: (
  'primary': #ffc453,
  'secondary': #42c12d,
  'text': #969696
);
$font-weights: (
  'regular': 400,
  'medium': 500,
  'semibold': 600,
  'bold': 700
);
$font-sizes: (
  'xx-small': 9px,
  'x-small': 10px,
  'small': 13px,
  'medium': 16px,
  'large': 18px,
  'x-large': 24px,
  'xx-large': 32px
);

@function color($color) {
  @return map-get($all-colors, $color);
}
@function font-weight($weight) {
  @return map-get($font-weights, $weight);
}
@function font-size($size) {
  @return map-get($font-sizes, $size);
}

@mixin flexCenter($direction: row) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-items: center;
}

.success {
  @include flexCenter();
  color: color(text);
  height: 100%;
}
.success__box {
  @include flexCenter(column);
  padding: 60px 90px;
  border-radius: 10px;
  box-shadow: 0 4px 4px;

  #{&}__title {
    font-size: font-size(x-large);
    font-weight: font-weight(semibold);
  }

  #{&}__body {
    width: 243px;
    text-align: center;
    font-size: font-size(medium);
    font-weight: font-weight(semibold);
  }
}
</style>
