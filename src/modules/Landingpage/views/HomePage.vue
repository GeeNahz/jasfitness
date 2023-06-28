<script setup lang="ts">
import { ref } from 'vue'

import { useMeta } from "vue-meta";
import { useReviews } from "@/composables/reviews";

import TheFooter from '@/components/TheFooter.vue'

import HeroSection from '../components/HeroSection.vue'
import HomeCarousel from '../components/carousels/CarouselHome.vue'
import BmiCalculator from '../components/BmiCalculator.vue'
import NewsLetter from '../components/NewsLetter.vue'
import HmoCarousel from '../components/carousels/CarouselHmo.vue'
import EventCard from "../components/cards/EventCard.vue";
import ReviewCard from "../components/cards/ReviewCard.vue";
import HomePageWhyJasFitness from "../components/HomePageWhyJasFitness.vue";

useMeta({
  title: 'Jas Fitness Center - Building a Community of Fitness Minded People'
});

const eventsAndNews = ref([
  // {
  //   imageName:
  //     'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/stay_fit_and_vote_Gt2abs_kx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676915237020',
  //   title: 'Promo! Promo!! Promo!!!',
  //   description:
  //     'Be fit as you vote with JasFitness Stay Fit & Vote election promo! This 25% election promo discount starts from now till 5th March. Get started by calling the number below.',
  //   linkText: '07034644002',
  //   linkUrl: ''
  // },
  {
    imageName:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/c2dcec0f-51bb-4c86-af09-0c2761d20af3_mGujDYX0p.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675755171041',
    title: 'Jas Multipitch Center',
    description: `Champions need the best pitch and that is what we have. With our Multi Pitch center you get to play your favourite sports right here at Jas Fitness.`,
    linkText: '07034644002',
    linkUrl: ''
  },
  {
    imageName:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/Red_Bold_Car_Wash_Instagram_Post_1__7V-jOr2QO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669189583665',
    title: 'Jas Auto Wash',
    description:
      'Get your car washed while at the gym. Achieve 2 goals at once.',
    linkText: 'Book Wash',
    linkUrl: 'https://app.jasfitnessng.com/auto-wash/'
  },
  {
    imageName:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/Sarah_bon_s_class_1_-4PD3HRir.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669397195662',
    title: 'Special Classes',
    description:
      'Special classes at Jas Fitness get you to your goal as our skilled instructor is directly responsible for your goals. Join Sarah Bon today.',
    linkText: '07034644002',
    linkUrl: ''
  }
]);

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
]);

const showBmi = ref(false);
const toggleBmi = () => (showBmi.value = !showBmi.value);

function goToSection(selector: string) {
  const yOffset = -10
  const element = document.querySelector(selector)!
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset

  window.scrollTo({ top: y, left: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="h-full relative">
    <div class="lg:h-full overflow-hidden relative">
      <HeroSection @scrollTo="goToSection" @showBmiCalculator="toggleBmi" />
    </div>
    <!-- bmi calculator -->
    <teleport to="body">
      <Transition>
        <div
          v-if="showBmi"
          class="z-50 bg-black/75 fixed top-0 left-0 h-full w-full bg-opacity-40 flex justify-center items-center"
          style="position: fixed; top: 0; left: 0; right: 0; bottom: 0;"
        >
          <BmiCalculator class="bmi-calc" @closeBmi="toggleBmi" />
        </div>
      </Transition>
    </teleport>
    <main>
      <!-- why jas fitness section -->
      <section
        id="why-jasfitness"
      >
        <HomePageWhyJasFitness />
      </section>
      <!-- hmo partners -->
      <section class="px-8 lg:px-28 py-10 lg:py-16">
        <h4
          class="capitalize mb-3 lg:mb-10 w-max mx-auto md:w-full font-medium font-inter text-2xl lg:text-4xl text-[#171717]"
        >
          Our HMO partners
        </h4>
        <HmoCarousel />
      </section>
      <!-- reviews -->
      <section
        class="relative flex flex-col lg:flex-row items-center md:gap-8 lg:gap-16 justify-center w-full overflow-hidden lg:mb-6 py-10 lg:py-20 px-3 md:px-8 lg:px-16"
      >
        <!-- partial black design -->
        <div
          class="absolute -left-[1090px] md:-left-[799px] lg:-left-[589px] -top-[127px] bg-[#1f1f1f] rounded-[150px] -rotate-[21.45deg] w-[1230px] h-[963px] -z-10"
        ></div>
        <!-- section title -->
        <div
          class="capitalize flex flex-col items-center justify-center text-xl md:text-3xl lg:text-4xl text-[#1f1f1f] lg:text-white font-medium pr-0 lg:pr-48"
        >
          <div class="hidden lg:block">
            <h4>Here's what our</h4>
            <h4>members think...</h4>
          </div>
          <div class="block lg:hidden w-full md:text-center mb-10">
            <h4 class="reviews__title">Here's what our members think...</h4>
          </div>
        </div>
        <!-- section cards -->
        <div class="reviews gap-6 md:gap-14 flex flex-col">
          <ReviewCard
            v-for="(review, index) in useReviews().splice(-3)"
            :key="review.name"
            :review="review"
            :index="index"
          />
        </div>
      </section>
      <!-- events and news section -->
      <section
        class="bg-gray-100 w-full h-max lg:h-min px-8 lg:px-28 py-10 lg:py-16"
      >
        <!-- latest events title -->
        <h4
          class="capitalize mb-7 lg:mb-14 w-max mx-auto md:w-full font-medium font-inter text-2xl lg:text-4xl text-[#171717]"
        >
          Latest Events & News
        </h4>
        <!-- latest events cards destop -->
        <div
          class="modules hidden sm:flex sm:flex-col lg:grid lg:grid-cols-2 xl:flex xl:flex-row xl:flex-wrap gap-3 justify-center items-center"
        >
          <EventCard
            v-for="(event, i) in eventsAndNews"
            :key="i"
            :event="event"
          />
        </div>
        <!-- latest events cards mobile -->
        <div class="modules md:hidden">
          <div class="h-full">
            <HomeCarousel :items="eventsAndNews" />
          </div>
        </div>
      </section>
      <!-- newsletter -->
      <section class="w-full bg-gray-100 lg:px-5">
        <!-- <div class="newsletter-cover sm:overflow-x-clip my-1 mx-auto"> -->
        <div class="newsletter-cover sm:overflow-x-clip mx-auto">
          <div class="newsletter__rotated-bg"></div>
          <NewsLetter class="newsletter__main" />
        </div>
      </section>
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
.reviews__title {
  color: #fff;
  mix-blend-mode: difference;
}

.newsletter-cover {
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.125);
  background-color: white;
  position: relative;
  z-index: 1;
  border: 1px solid transparent;
  max-width: 967px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 0;
    left: 0;
    z-index: 0;
  }

  &::before {
    top: -10em;
    left: -4em;
    border-bottom: 5em solid white;
    border-left: 55em solid transparent;
    border-right: 10em solid transparent;
    border-top: 5em solid transparent;
  }
  &::after {
    bottom: -10em;
    left: -4em;
    border-bottom: 5em solid transparent;
    border-left: 20em solid transparent;
    border-right: 50em solid transparent;
    border-top: 5em solid white;
  }
}

@media screen and (max-width: 767px) {
  .newsletter-cover {
    max-width: 640px;

    &::before {
      top: -8em;
      left: -8em;
      border-top: 4em solid transparent;
      border-right: 15em solid transparent;
      border-left: 40em solid transparent;
      border-bottom: 4em solid white;
    }
    &::after {
      bottom: -8em;
      left: -2em;
      border-bottom: 5em solid transparent;
      border-left: 15em solid transparent;
      border-right: 30em solid transparent;
      border-top: 3em solid white;
    }
  }
}

@media screen and (max-width: 639px) {
  .newsletter-cover {
    width: 100%;

    &::before {
      top: -8em;
      left: -4em;
      height: 0;
      border-top: 5em solid transparent;
      border-right: 4.3em solid transparent;
      border-left: 22em solid transparent;
      border-bottom: 3em solid white;
    }
    &::after {
      bottom: -8em;
      left: -2em;
      height: 0;
      border-bottom: 5em solid transparent;
      border-left: 6em solid transparent;
      border-right: 18.4em solid transparent;
      border-top: 3em solid white;
    }
  }
}
</style>