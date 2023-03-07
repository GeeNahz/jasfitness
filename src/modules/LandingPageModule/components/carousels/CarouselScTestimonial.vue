<template>
  <Carousel
    :wrap-around="true"
    :transition="1500"
    :autoplay="5000"
    :pause-autoplay-on-hover="true"
  >
    <Slide v-for="review in reviews" :key="review.name">
      <div class="carousel__item">
        <CardTestimonials :review="review" />
      </div>
    </Slide>
  </Carousel>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import CardTestimonials from '../cards/CardTestimonials.vue'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'CarouselScTestimonial',
  components: { Carousel, Slide, CardTestimonials },
  setup() {
    const reviews = ref([
      {
        name: 'Anna Orefi',
        reviewUrl: 'https://g.co/kgs/HGNLV5',
        imageUrl: '',
        imageAlt: 'A',
        review:
          'Once you stop by Jas Gym. You shall get hooked Excellent Customer Service.',
        stars: 5
      },
      {
        name: 'Afolalu Oluyemisi',
        reviewUrl: 'https://g.co/kgs/kFqo4m',
        imageUrl: '',
        imageAlt: 'A',
        review:
          'Friendly environment and instructors. Most importantly, I really appreciate the checking up on clients.',
        stars: 5
      },
      {
        name: 'Ijeoma Jennifer',
        reviewUrl: 'https://g.co/kgs/DK1KnL',
        imageUrl:
          'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/IjeomaJennifer_2tYEBbcHS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984852584',
        imageAlt: 'I',
        review:
          'Spending my post partum moment @jasfitness is one of the best decision I have made in life. I love what getting 💯💯💯💯',
        stars: 5
      }
    ])
    return { reviews }
  }
})
</script>

<style scoped>
.carousel {
  grid-column: 3 / span 8;
}
.carousel__item {
  text-align: start;
  padding: 3px;
}
</style>
