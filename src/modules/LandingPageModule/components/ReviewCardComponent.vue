<template>
  <div class="review">
    <p class="capitalize text-gray-400 text-sm">{{ review.title }}</p>
    <p class="uppercase font-bold">{{ review.name }}</p>
    <div class="stars space-x-1 mb-3">
      <ReviewCardStarsRatingComponent :stars="review.stars" />
    </div>
    <p class="text-gray-800 text-sm">{{ review.review }}</p>
    <i
      class="fa fa-quote-right absolute top-16 -right-5 fa fa-8x opacity-5"
      aria-hidden="true"
    ></i>
  </div>
</template>

<script>
import ReviewCardStarsRatingComponent from './ReviewCardStarsRatingComponent.vue'

export default {
  name: 'ReviewCardComponent',
  components: {
    ReviewCardStarsRatingComponent
  },
  props: {
    review: {
      type: Object,
      required: true
    }
  }
}
</script>
