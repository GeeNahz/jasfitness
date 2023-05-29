<script setup lang="ts">
import { defineComponent } from "vue";

import CardItem from "./CardItem.vue";
import ReviewCardRating from "../ReviewCardRating.vue";

defineComponent({ name: "ReviewCard" });
interface Review {
  name: string;
  reviewUrl: string;
  imageUrl: string;
  imageAlt: string;
  review: string;
  stars: number;
}
interface Props {
  review: Review;
  index: number;
}
defineProps<Props>();

const reviewPosition = (index: number) => index % 2 === 0;
</script>

<template>
  <div class="single-review flex items-center justify-center"
    :class="{
        'translate-x-8 lg:translate-x-10': reviewPosition(index),
        'md:-translate-x-16 lg:-translate-x-10': !reviewPosition(index)
      }">
    <div v-if="review.imageUrl"
      class="shadow img w-[80px] h-[80px] md:w-[104px] md:h-[104px] rounded-full overflow-hidden">
      <img :src="review.imageUrl" :alt="review.name" />
    </div>
    <div v-else
      class="shadow img w-[80px] md:w-[104px] h-[80px] md:h-[104px] flex items-center justify-center rounded-full overflow-hidden"
      :class="{
          'bg-[#2b2b2b]': reviewPosition(index),
          'bg-[#ff7d00]': !reviewPosition(index)
        }">
      <p class="z-20 text-white text-5xl md:text-7xl font-medium">
        {{ review.imageAlt }}
      </p>
    </div>
    <CardItem class="item">
      <template #top>
        <div>
          <p class="text-xs md:text-lg font-medium">
            “{{ review.review }}”
          </p>
        </div>
      </template>
      <a class="flex gap-1 items-center md:gap-2 mt-2 mb-0 hover:cursor-pointer hover:text-yellow-500"
        :href="review.reviewUrl">
        <p class="font-inter font-bold text-sm md:text-xl mb-2">
          {{ review.name }}
        </p>
        <img src="@/assets/icons/GooglereviewlinkIcon.svg" alt="google review" />
      </a>
      <div class="space-x-1 mb-1">
        <ReviewCardRating :stars="review.stars" />
      </div>
    </CardItem>
  </div>
</template>

<style lang="scss" scoped>
.single-review {
  width: 583px;
  height: 204px;
  position: relative;
  border-radius: 15px;
  background-color: #f9f9f9;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  padding: 20px 55px;
}
.img {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  left: -60px;
}

@media screen and (max-width: 767px) {
  .single-review {
    width: 470px;
    height: max-content;
  }
  .item {
    width: 100%;
    height: 100%;
  }
}

@media screen and (max-width: 639px) {
  .single-review {
    width: 270px;
    height: max-content;
  }
  .item {
    padding: 20px 40px;
  }
  .img {
    top: 30%;
    transform: translateY(-50%);
    left: -50px;
  }
}
</style>