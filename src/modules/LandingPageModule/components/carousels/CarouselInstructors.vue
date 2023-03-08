<template>
  <Carousel
    :items-to-show="2"
    :items-to-scroll="1"
    :wrap-around="true"
    snap-align="center"
    :transition="1500"
    :autoplay="5000"
    :pause-autoplay-on-hover="true"
  >
    <Slide v-for="trainer in trainers" :key="trainer.id">
      <div class="carousel__item">
        <CardTrainer :trainer="trainer" />
      </div>
    </Slide>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import CardTrainer from '../cards/CardTrainer.vue'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'CarouselInstructors',
  components: { Carousel, Slide, CardTrainer },
  setup() {
    const trainers = [
      {
        id: 1,
        name: 'Sara Joe',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ducimus vero, illo officia repudiandae atque.'
      },
      {
        id: 2,
        name: 'Dan Saul',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, neque?'
      },
      {
        id: 3,
        name: 'Pan Lionel',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, quam mollitia voluptatem alias consectetur quia, tempora atque unde beatae repellat perspiciatis, omnis provident nemo iste.'
      },
      {
        id: 4,
        name: 'Joan James',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ducimus vero, illo officia repudiandae atque.'
      },
      {
        id: 5,
        name: 'Samuel Licon',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, neque?'
      },
      {
        id: 6,
        name: 'Hannah Patrick',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, quam mollitia voluptatem alias consectetur quia, tempora atque unde beatae repellat perspiciatis, omnis provident nemo iste.'
      }
    ]
    return { trainers }
  }
})
</script>

<style scoped>
.carousel__item {
  min-height: 200px;
  /* width: 300px; */
  /* background-color: var(--vc-clr-primary); */
  /* color: var(--vc-clr-white); */
  /* font-size: 20px; */
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 5s;
}

.carousel__slide {
  width: 500px;
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
  transition: transform 2s;
}

.carousel__slide--visible {
  width: 200px;
}
.carousel__slide--active {
  padding: 0;
  width: min-content;
}
.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
  padding: 0;
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
  padding: 0;
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
