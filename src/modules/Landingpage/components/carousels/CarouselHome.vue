<script setup lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

interface Item {
  imageName: string;
  linkUrl: string;
  linkText: string;
}
interface Props {
  items: Item[]
}
defineProps<Props>()

defineComponent({
  name: 'HomeCarousel',
  components: {
    Carousel,
    Slide,
    Pagination
  }
})

// const getImageUrl = (image) => require(`@/assets/${image}`)
</script>
<template>
  <div class="w-full">
    <Carousel :autoplay="5000" :transition="1200" :wrap-around="true" dir="ltr">
      <Slide v-for="(slide, i) in items" :key="i">
        <div
          class="carousel__item relative bg-cover bg-no-repeat bg-center"
          :style="`background-image: url(${slide.imageName})`"
        >
          <div
            class="carousel-pop-up text-[#171717] font-inter bg-white rounded-t-2xl p-3 h-[50%]"
          >
            <h1 class="font-medium text-xl">Promo! Promo!! Promo!!!</h1>
            <p class="text-sm font-light">
              Subscibe to any of our fitness plans at 50% discount!!! Offer
              lasts for a month
            </p>
            <a
              :href="slide.linkUrl"
              class="flex items-center gap-1 ml-3 mt-2 py-2 text-sm font-quicksand font-semibold"
              ><img
                src="@/assets/icons/GooglereviewlinkIcon.svg"
                alt="get start"
              />
              <p class="mb-2">{{ slide.linkText }}</p></a
            >
          </div>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>
<style scoped>
.carousel__item {
  min-height: 200px;
  height: 300px;
  width: 300px;
  background-color: blueviolet;
  color: #e2e2e2;
  font-size: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.carousel__slide {
  padding: 0.6rem;
}

.carousel-pop-up {
  position: absolute;
  bottom: -50%;
  transition: all 0.5s ease-out 0.2s;
}
.carousel__item:hover .module-pop-up {
  bottom: 0px;
}
.carousel__item:focus .module-pop-up {
  bottom: 0px;
}
</style>
