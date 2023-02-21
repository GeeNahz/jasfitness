<template>
  <div class="h-full relative">
    <div class="lg:h-full overflow-hidden relative">
      <HeroSection @scrollTo="goToSection" @showBmiCalculator="toggleBmi" />
    </div>
    <!-- bmi calculator -->
    <Transition>
      <div
        v-if="showBmi"
        class="z-50 bg-black/75 fixed top-0 left-0 h-full w-full bg-opacity-40 flex justify-center items-center"
      >
        <BmiCalculator class="bmi-calc" @closeBmi="toggleBmi" />
      </div>
    </Transition>
    <main>
      <!-- why jas fitness section -->
      <section
        id="why-jasfitness"
        class="py-12 mx-8 md:mx-16 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-x-0 lg:gap-x-8 gap-y-8 lg:gap-y-0"
      >
        <!-- left card -->
        <div class="relative w-[366px] h-max lg:h-[400px]">
          <h4
            class="text-center lg:text-start text-3xl text-gray-400 font-medium font-inter capitalize mx-auto mb-8"
          >
            Why jas fitness?
          </h4>
          <CardItem
            class="mx-auto w-[310px] h-[280px] lg:h-full card-item flex flex-col justify-between lg:justify-evenly px-12 py-8"
          >
            <template #top>
              <h4 class="pb-3 xl:pb-7 text-2xl xl:text-3xl font-semibold">
                You're not Alone
              </h4>
            </template>
            <div class="relative mb-7">
              <p class="text-sm xl:text-base">
                Consistency over motivation. You don't have to face your fitness
                goals alone. Let's do it TOGETHER.
              </p>
              <p
                class="absolute -right-4 top-16 lg:-right-10 lg:top-32 -z-10 text-[100px] lg:text-9xl text-[#FEDF9A] text-opacity-40 font-bold font-inter"
              >
                01
              </p>
            </div>
            <template #bottom>
              <div>
                <router-link
                  :to="{ name: 'PlansPage' }"
                  class="btn-default bg-[#1f1f1f] hover:bg-white hover:border border-[#1f1f1f] w-[130px] h-[45px] md:w-[193px] md:h-[54px] text-sm md:text-base transition-all"
                >
                  Join Community
                </router-link>
              </div>
            </template>
          </CardItem>
        </div>
        <!-- center image -->
        <div
          class="relative center-img bg-gray-200 w-full lg:w-[369px] h-[527px]"
        >
          <p
            class="absolute h-full w-full bg-gradient-to-b from-transparent to-[#1f1f1f] bg-opacity-90"
          />
          <img
            class="h-full w-full"
            src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/feellove_5EIs7sCWK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984853920"
            alt="feel the love"
          />
          <h4
            class="absolute bottom-32 left-0 text-3xl xl:text-4xl text-white z-10 font-bold w-full text-center"
          >
            Feel the Love 💛
          </h4>
        </div>
        <!-- right cards -->
        <div class="flex flex-col gap-9 w-[320px] lg:w-[349px]">
          <CardItem class="min-h-max card-item card-set">
            <template #top>
              <div class="relative">
                <h4 class="text-2xl xl:text-3xl font-semibold mb-1">
                  Get Inspired
                </h4>
                <p
                  class="absolute -top-6 -left-9 text-6xl -z-10 text-[#FEDF9A] text-opacity-50 font-semibold font-inter"
                >
                  02
                </p>
              </div>
            </template>
            <p class="card-item-body mb-3 text-sm xl:text-base font-normal">
              Network and grow with like mind. Meet FitFam with similar goals
              who are committed to a life of healthy living and more.
            </p>
            <template #bottom>
              <router-link :to="{ name: 'PlansPage' }" class="card-item-btns">
                <img
                  src="@/assets/icons/GetstartedblackIcon.svg"
                  alt="get started"
                />
                <p class="font-inter text-[14px] xl:text-[16px] mb-2 ml-1">
                  Get Started
                </p>
              </router-link>
            </template>
          </CardItem>
          <CardItem class="min-h-max card-item card-set">
            <template #top>
              <div class="relative">
                <h4 class="text-2xl xl:text-3xl font-semibold mb-1">
                  Result Oriented
                </h4>
                <p
                  class="absolute -top-6 -left-9 text-6xl -z-10 text-[#FEDF9A] text-opacity-50 font-semibold font-inter"
                >
                  03
                </p>
              </div>
            </template>
            <p class="card-item-body mb-3 text-sm xl:text-base">
              Regardless of your fitness level, we've got the equipment and
              professionals to get you the results you desire.
            </p>
            <template #bottom>
              <router-link :to="{ name: 'PlansPage' }" class="card-item-btns">
                <img
                  src="@/assets/icons/GetstartedblackIcon.svg"
                  alt="get started"
                />
                <p class="font-inter text-[14px] xl:text-[16px] mb-2 ml-1">
                  Get Started
                </p>
              </router-link>
            </template>
          </CardItem>
        </div>
      </section>
      <!-- hmo partners -->
      <section class="py-5 lg:py-8 px-4 lg:px-20">
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
          <div
            v-for="(review, index) in reviews"
            :key="review.name"
            class="single-review flex items-center justify-center"
            :class="{
              'translate-x-8 lg:translate-x-10': reviewPosition(index),
              'md:-translate-x-16 lg:-translate-x-10': !reviewPosition(index)
            }"
          >
            <div
              v-if="review.imageUrl"
              class="shadow img w-[80px] h-[80px] md:w-[104px] md:h-[104px] rounded-full overflow-hidden"
            >
              <img :src="review.imageUrl" :alt="review.name" />
            </div>
            <div
              v-else
              class="shadow img w-[80px] md:w-[104px] h-[80px] md:h-[104px] flex items-center justify-center rounded-full overflow-hidden"
              :class="{
                'bg-[#2b2b2b]': reviewPosition(index),
                'bg-[#ff7d00]': !reviewPosition(index)
              }"
            >
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
              <a
                class="flex gap-1 items-center md:gap-2 mt-2 mb-0 hover:cursor-pointer hover:text-yellow-500"
                :href="review.reviewUrl"
              >
                <p class="font-inter font-bold text-sm md:text-xl mb-2">
                  {{ review.name }}
                </p>
                <img
                  src="@/assets/icons/GooglereviewlinkIcon.svg"
                  alt="google review"
                />
              </a>
              <div class="space-x-1 mb-1">
                <ReviewCardStarsRatingComponent :stars="review.stars" />
              </div>
            </CardItem>
          </div>
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
          <div
            v-for="(event, i) in eventsAndNews"
            :key="i"
            class="single-module relative w-[412px] lg:w-full xl:w-[412px] min-w-[300px] h-[431px] bg-white"
          >
            <div
              class="module h-full bg-cover bg-center"
              :style="`background-image: url(${event.imageName})`"
            ></div>
            <div
              class="module-pop-up text-[#171717] font-inter bg-white rounded-t-2xl p-4 h-[60%]"
            >
              <h1 class="font-medium text-xl mb-2">{{ event.title }}</h1>
              <p class="text-sm leading-1 font-light">
                {{ event.description }}
              </p>
              <a
                v-if="event.linkUrl"
                :href="event.linkUrl"
                class="flex gap-2 py-4 text-lg font-quicksand font-semibold"
                target="_blank"
                ><img
                  src="@/assets/icons/GooglereviewlinkIcon.svg"
                  alt="get start"
                />
                <p>{{ event.linkText }}</p>
              </a>
              <a
                v-else
                @click.prevent="copyToClipboard(event.linkText)"
                href="https://"
                class="flex flex-nowrap gap-2 py-4 text-lg font-quicksand font-semibold"
                ><img
                  src="@/assets/icons/GooglereviewlinkIcon.svg"
                  alt="get start"
                />
                <p>Call {{ event.linkText }}</p>
              </a>
            </div>
          </div>
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

<script setup>
import HeroSection from '../components/HeroSection.vue'
import CardItem from '../components/CardItem.vue'
import TheFooter from '@/components/TheFooter.vue'
import HomeCarousel from '../components/CarouselHome.vue'
import ReviewCardStarsRatingComponent from '../components/ReviewCardStarsRatingComponent.vue'
import BmiCalculator from '../components/BmiCalculator.vue'
import NewsLetter from '../components/NewsLetter.vue'
import HmoCarousel from '../components/CarouselHmo.vue'

import { ref } from 'vue'
import { useStore } from 'vuex'
import { useMeta } from 'vue-meta'
import { toClipboard } from '@soerenmartius/vue3-clipboard'

useMeta({
  title: 'Jas Fitness Center - Building a Community of Fitness Minded People'
})

const eventsAndNews = ref([
  {
    imageName:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/stay_fit_and_vote_Gt2abs_kx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676915237020',
    title: 'Promo! Promo!! Promo!!!',
    description:
      'Be fit as you vote with JasFitness Stay Fit & Vote election promo! This 25% election promo discount starts from now till 5th March. Get started by calling the number below.',
    linkText: '07034644002',
    linkUrl: ''
  },
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
    linkUrl: 'https://www.jasfitnessng.com/auto-wash/'
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
])

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

const store = useStore()

const reviewPosition = (index) => index % 2 === 0
// const getImageUrl = (imageName) => require(`${imageName}`)

const showBmi = ref(false)
const toggleBmi = () => (showBmi.value = !showBmi.value)

const copyToClipboard = async (value) => {
  toClipboard(value)
  let alertData = {
    message: 'Number successfully copied to clipboard',
    timeout: false
  }
  store.dispatch('landingpage/success', alertData)
}

function goToSection(selector) {
  const yOffset = -10
  const element = document.querySelector(selector)
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset

  window.scrollTo({ top: y, left: 0, behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
.newsletter {
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  place-items: center;
  padding: 10px 5px;

  #{&}__main,
  #{&}__rotated-bg {
    grid-row-start: 1;
    grid-column-start: 1;
  }
  #{&}__main {
    z-index: 1;
  }
  #{&}__rotated-bg {
    background: #ffffff;
    margin: 0 auto;
    height: 90%;
    width: 85%;
    top: 60%;
    left: 50%;
    transform: rotate(6deg);
    border-radius: 50px;
    box-shadow: 0 4px 15px 5px #d9d9d950;
    z-index: 0;

    @media screen and (max-width: 1023px) {
      & {
        height: 95%;
        width: 100%;
        border-radius: 15px;
        transform: rotate(4deg);
      }
    }
  }
}

.btn-default {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f9f9f9;
  border-radius: 10px;
}

.btn-default:hover {
  color: #1f1f1f;
}

.card-item {
  border-radius: 10px;
  background: rgba(224, 224, 224, 0.24);
}

.card-item.card-set {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 50px;
}

.card-item .card-item-btns {
  display: flex;
  align-items: center;
}

.card-item .card-item-btns:hover {
  color: goldenrod;
  cursor: pointer;
}

.center-img {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
}

.single-module {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
}

.single-module:hover .module-pop-up {
  bottom: 0px;
}

.single-module:hover .module {
  filter: brightness(0.5) blur(2px);
}

.module {
  transition: all 0.5s ease-out;
}

.module-pop-up {
  position: absolute;
  bottom: -60%;
  transition: all 0.5s ease-out 0.1s;
}

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
    width: 100%;
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
  .white-text {
    color: white;
  }

  .single-review {
    width: 470px;
    height: max-content;
  }

  .item {
    width: 100%;
    height: 100%;
  }

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
  .center-img {
    width: 320px;
    height: 455px;
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
  }

  .card-item .card-item-btns {
    padding-top: 15px;
  }

  .white-text {
    color: white;
  }

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

  .newsletter-cover {
    width: 100%;

    &::before {
      top: -8em;
      left: -4em;
      height: 0;
      border-top: 5em solid transparent;
      border-right: 6em solid transparent;
      border-left: 22em solid transparent;
      border-bottom: 3em solid white;
    }
    &::after {
      bottom: -8em;
      left: -2em;
      height: 0;
      border-bottom: 5em solid transparent;
      border-left: 6em solid transparent;
      border-right: 22em solid transparent;
      border-top: 3em solid white;
    }
  }
}
</style>
