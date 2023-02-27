<template>
  <Carousel
    :autoplay="5000"
    :transition="1200"
    :pause-autoplay-on-hover="true"
    :items-to-scroll="1"
    :breakpoints="breakpoints"
    :settings="settings"
    :wrap-around="true"
    dir="ltr"
  >
    <Slide v-for="item in carouselItems" :key="item.id">
      <TheCard :details="item" />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import TheCard from './cards/CardHmo.vue'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'HmoCarousel',
  components: { Carousel, Slide, Navigation, TheCard },
  setup() {
    const carouselItems = [
      {
        id: 1,
        name: 'Leadway',
        imageUrl: 'leadway.jpg'
      },
      {
        id: 2,
        name: 'Bastion Health',
        imageUrl: 'bastion.png'
      },
      {
        id: 3,
        name: 'Total Health Trust',
        imageUrl: 'tht.jpg'
      },
      {
        id: 4,
        name: 'Axa Mastard',
        imageUrl: 'axa.png'
      }
    ]
    // corousel config
    const settings = {
      itemsToShow: 1,
      wrapAround: true,
      snapAlign: 'center'
    }
    const breakpoints = {
      300: { itemsToShow: 1 },
      700: { itemsToShow: 1 }
    }
    return { carouselItems, breakpoints, settings }
  }
})
</script>

<style lang="scss">
@import '../../../assets/styles/base';

.carousel__prev,
.carousel__next {
  background-color: #fba500;
}

.carousel__slide {
  padding: 20px 0;

  @include responsive('lg') {
    padding: 10px 0;
  }
}
</style>
