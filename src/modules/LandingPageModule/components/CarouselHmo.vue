<template>
  <Carousel
    :autoplay="5000"
    :breakpoints="breakpoints"
    :settings="settings"
    :items-to-scroll="1"
    :wrap-around="true"
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
        name: 'Bastion Health',
        imageUrl: 'bastion.png'
      },
      {
        id: 2,
        name: 'Leadway',
        imageUrl: 'leadway.png'
      },
      {
        id: 3,
        name: 'Total Health Trust',
        imageUrl: 'tht.jpg'
      }
    ]
    // corousel config
    const settings = {
      itemsToShow: 1.5,
      wrapAround: true,
      snapAlign: 'center'
    }
    const breakpoints = {
      300: { itemsToShow: 1 },
      700: { itemsToShow: 1.5 }
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
