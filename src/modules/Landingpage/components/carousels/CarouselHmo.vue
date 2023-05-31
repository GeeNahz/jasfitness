<script setup lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import CardHmo from '../cards/CardHmo.vue'

import 'vue3-carousel/dist/carousel.css'

const carouselItems = [
  {
    id: 1,
    name: 'Leadway',
    imageUrl: 'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/hmo_pictures/leadway__5sN4BNkq.jpg?updatedAt=1685550214917'
  },
  {
    id: 2,
    name: 'Bastion Health',
    imageUrl: 'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/hmo_pictures/bastion_FiYFTBnIl.png?updatedAt=1685550214830'
  },
  {
    id: 3,
    name: 'Total Health Trust',
    imageUrl: 'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/hmo_pictures/tht_IX-G48mTz.jpg?updatedAt=1685550214354'
  },
  {
    id: 4,
    name: 'Axa Mastard',
    imageUrl: 'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/hmo_pictures/axa_uL9hjbEEX.png?updatedAt=1685550214172'
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

defineComponent({
  name: 'HmoCarousel',
})
</script>
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
      <CardHmo :details="item" />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
<style lang="scss">
@import '../../../../assets/styles/base';

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
