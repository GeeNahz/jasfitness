<script setup lang="ts">
interface Props {
  review: {
    review: string;
    imageUrl: string;
    name: string;
    imageAlt: string;
  }
}
defineProps<Props>()
</script>
<template>
  <div class="testimonial col-10-center">
    <div class="testimonial-text regular-text-16">{{ review.review }}</div>
    <div class="testimonial-details">
      <div
        class="testimonial-img text-gray-100 flex justify-center items-center overflow-hidden"
      >
        <img v-if="review.imageUrl" :src="review.imageUrl" :alt="review.name" />
        <div
          v-else
          class="bg-fuchsia-700 h-full w-full flex justify-center items-center"
        >
          {{ review.imageAlt }}
        </div>
      </div>
      <div class="testimonial-name light-text-12">{{ review.name }}</div>
    </div>
  </div>
</template>
<style scoped>
.col-10-center {
  grid-column: 2 / span 10;
}
.regular-text-16 {
  font-weight: 400;
  font-size: 16px;
}
.light-text-12 {
  font-weight: 300;
  font-size: 12px;
}
.testimonial-details {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
}
.testimonial-img {
  background: #d9d9d9;
  height: 35px;
  width: 35px;
  border-radius: 50%;
}
</style>
