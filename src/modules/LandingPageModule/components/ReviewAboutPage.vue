<template>
  <div class="review__container">
    <div
      class="display__image"
      :class="{
        'shadow img w-[80px] md:w-[104px] h-[80px] md:h-[104px] flex items-center justify-center rounded-full overflow-hidden':
          !review.imageUrl
      }"
    >
      <img v-if="review.imageUrl" :src="review.imageUrl" alt="reviewer" />
      <p v-else class="z-20 text-[#303030] text-5xl md:text-7xl font-medium">
        {{ review.imageAlt }}
      </p>
    </div>
    <div class="review__contents">
      <p class="contents">{{ review.review }}</p>
    </div>
    <div class="review__name">
      <h4 class="name">- {{ review.name }}</h4>
    </div>
    <div class="review__stars">
      <ReviewCardStarsRatingComponent :stars="review.stars" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

import ReviewCardStarsRatingComponent from '../components/ReviewCardStarsRatingComponent.vue'

defineProps({
  review: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/base';
.review__container {
  background-color: #fff;
  width: 430px;
  height: 200px;
  box-shadow: 0 4px 15px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display: grid;
  row-gap: 1rem;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(3, minmax(2rem, min-content));
  align-items: start;
  padding: 1rem;

  & .display__image {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #ececec;

    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  & .review__contents {
    & .contents {
      font-size: font-size('small');
      font-weight: font-weight('light');
      color: rgb(94, 94, 94);
    }
  }
  & .review__name {
    grid-column: 2;
    & .name {
      font-size: font-size('large');
      font-weight: font-weight('semibold');
    }
  }
  & .review__stars {
    grid-row: 3;
    grid-column: 2;
  }
}
</style>
