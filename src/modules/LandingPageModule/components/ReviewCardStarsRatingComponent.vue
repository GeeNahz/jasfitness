<template>
  <div class="stars-review">
    <span
      v-for="(star, index) in StarCount"
      :key="index"
      class="star"
      :class="index <= stars - 1 && 'text-[#fe902d]'"
      >&#9733;
    </span>
  </div>
</template>

<script>
export default {
  name: 'StarsRatingComponent',
  props: {
    stars: {
      type: Number,
      default: 0
    }
  },
  methods: {},
  computed: {
    StarCount() {
      return [...Array(5)]
    }
  }
}
</script>
