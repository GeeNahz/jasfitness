<template>
  <div class="h-full relative">
    <div class="lg:h-full overflow-hidden relative">
      <HeroSection @showBmiCalculator="toggleBmi" />
    </div>
    <!-- bmi calculator -->
    <div
      v-if="showBmi"
      class="z-50 bg-gray-200 fixed top-0 left-0 h-full w-full bg-opacity-40 flex justify-center items-center"
    >
      <div class="relative">
        <div
          @click="toggleBmi"
          class="absolute right-0 -top-10 border-2 border-white h-8 w-8 rounded-full text-base flex justify-center text-white hover:cursor-pointer"
        >
          <p>x</p>
        </div>
        <BmiCalculator />
      </div>
    </div>
    <main>
      <!-- why jas fitness section -->
      <section
        class="py-12 mx-8 md:mx-16 flex flex-col lg:flex-row justify-center items-center gap-x-0 gap-y-8 lg:gap-x-8 lg:gap-y-0"
      >
        <!-- left card -->
        <div class="relative w-[366px] h-max lg:h-[400px]">
          <h4
            class="lg:absolute -top-20 left-[50%] lg:-translate-x-[50%] text-3xl text-gray-400 font-medium font-inter capitalize w-max mx-auto mb-8"
          >
            Why jas fitness?
          </h4>
          <CardItem
            class="mx-auto w-[310px] lg:w-[310px] h-[280px] lg:h-full card-item flex flex-col justify-between lg:justify-evenly px-12 py-8"
          >
            <template #top>
              <h4 class="pb-3 lg:pb-7 text-2xl lg:text-3xl font-semibold">
                You're not Alone
              </h4>
            </template>
            <div class="relative mb-7">
              <p class="text-sm lg:text-base">
                Consistency over motivation. You don’t have to face your fitness
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
                  class="btn-default bg-[#1f1f1f] hover:bg-white hover:border border-[#1f1f1f] w-[130px] h-[45px] lg:w-[193px] lg:h-[54px] text-sm lg:text-base transition-all"
                >
                  Join Community
                </router-link>
              </div>
            </template>
          </CardItem>
        </div>
        <!-- center image -->
        <div class="relative center-img bg-gray-200 lg:w-[369px] h-[527px]">
          <p
            class="absolute h-full w-full bg-gradient-to-b from-transparent to-[#1f1f1f] bg-opacity-90"
          />
          <img
            class="h-full w-full"
            height="300"
            width="300"
            src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/feellove_5EIs7sCWK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984853920"
            alt="in love"
          />
          <h4
            class="absolute bottom-32 left-0 text-4xl text-white z-10 font-bold w-full text-center"
          >
            Feel the Love
          </h4>
        </div>
        <!-- right cards -->
        <div class="flex flex-col gap-9 w-[320px] lg:w-[349px]">
          <CardItem class="h-64 card-item card-set">
            <template #top>
              <div class="relative">
                <h4 class="text-2xl lg:text-3xl font-semibold mb-1">
                  Get Inspired
                </h4>
                <p
                  class="absolute -top-6 -left-9 text-6xl -z-10 text-[#FEDF9A] text-opacity-50 font-semibold font-inter"
                >
                  02
                </p>
              </div>
            </template>
            <p class="card-item-body text-sm lg:text-base font-normal">
              Network and grow with like mind. Meet FitFam with similar goals
              who are committed to a life of healthy living and more.
            </p>
            <template #bottom>
              <router-link :to="{ name: 'PlansPage' }" class="card-item-btns">
                <img
                  src="@/assets/icons/GetstartedblackIcon.svg"
                  alt="get started"
                />
                <p class="font-inter text-[13px] lg:text-[15px] mb-2 ml-1">
                  Get Started
                </p>
              </router-link>
            </template>
          </CardItem>
          <CardItem class="h-64 card-item card-set">
            <template #top>
              <div class="relative">
                <h4 class="text-2xl lg:text-3xl font-semibold mb-1">
                  Result Oriented
                </h4>
                <p
                  class="absolute -top-6 -left-9 text-6xl -z-10 text-[#FEDF9A] text-opacity-50 font-semibold font-inter"
                >
                  03
                </p>
              </div>
            </template>
            <p class="card-item-body text-sm lg:text-base">
              Regardless of your fitness level, we've got the equipment and
              professionals to get you the results you desire.
            </p>
            <template #bottom>
              <router-link :to="{ name: 'PlansPage' }" class="card-item-btns">
                <img
                  src="@/assets/icons/GetstartedblackIcon.svg"
                  alt="get started"
                />
                <p class="font-inter text-[13px] lg:text-[15px] mb-2 ml-1">
                  Get Started
                </p>
              </router-link>
            </template>
          </CardItem>
        </div>
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
        class="bg-gray-100 w-full h-max lg:h-[735px] px-8 lg:px-28 py-8 md:py-14"
      >
        <!-- latest events title -->
        <h4
          class="capitalize mb-7 lg:mb-14 w-max mx-auto md:w-full font-medium font-inter text-2xl lg:text-4xl text-[#171717]"
        >
          Latest Events & News
        </h4>
        <!-- latest events cards destop -->
        <div
          class="modules hidden md:flex md:flex-col lg:flex-row gap-3 justify-between items-center"
        >
          <div class="single-module w-[412px] h-[431px] bg-white">
            <div
              class="module relative h-full bg-[url('https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/paintball_IRcYqdHks.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984852844')] bg-cover bg-center"
            >
              <div
                class="module-pop-up text-[#171717] font-inter bg-white rounded-t-2xl p-8 h-[50%]"
              >
                <h1 class="font-medium text-3xl">Promo! Promo!! Promo!!!</h1>
                <p class="text-base font-light">
                  Subscibe to any of our fitness plans at 50% discount!!! Offer
                  lasts for a month
                </p>
                <router-link
                  :to="{ name: 'LoginPage' }"
                  class="flex gap-2 py-6 text-2xl font-quicksand font-semibold"
                  ><img
                    src="@/assets/icons/GooglereviewlinkIcon.svg"
                    alt="get start"
                  />
                  <p>Get Started</p></router-link
                >
              </div>
            </div>
          </div>
          <div
            class="single-module w-[412px] h-[431px] hidden lg:block bg-white"
          >
            <div
              class="module relative h-full bg-[url('https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/roadwalk_4PSK72Uwa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984852621')] bg-cover bg-center"
            >
              <div
                class="module-pop-up text-[#171717] font-inter bg-white rounded-t-2xl p-8 h-[50%]"
              >
                <h1 class="font-medium text-3xl">Promo! Promo!! Promo!!!</h1>
                <p class="text-base font-light">
                  Subscibe to any of our fitness plans at 50% discount!!! Offer
                  lasts for a month
                </p>
                <router-link
                  :to="{ name: 'LoginPage' }"
                  class="flex gap-2 py-6 text-2xl font-quicksand font-semibold"
                  ><img
                    src="@/assets/icons/GooglereviewlinkIcon.svg"
                    alt="get start"
                  />
                  <p>Get Started</p></router-link
                >
              </div>
            </div>
          </div>
          <div
            class="single-module w-[412px] hidden lg:block h-[431px] bg-white"
          >
            <div
              class="module relative h-full bg-[url('https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/promo_h_38XOR_K.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984888971')] bg-cover bg-center"
            >
              <div
                class="module-pop-up text-[#171717] font-inter bg-white rounded-t-2xl p-8 h-[50%]"
              >
                <h1 class="font-medium text-3xl">Promo! Promo!! Promo!!!</h1>
                <p class="text-base font-light">
                  Subscibe to any of our fitness plans at 50% discount!!! Offer
                  lasts for a month
                </p>
                <router-link
                  :to="{ name: 'LoginPage' }"
                  class="flex gap-2 py-6 text-2xl font-quicksand font-semibold"
                  ><img
                    src="@/assets/icons/GooglereviewlinkIcon.svg"
                    alt="get start"
                  />
                  <p>Get Started</p></router-link
                >
              </div>
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
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import CardItem from '../components/CardItem.vue'
import TheFooter from '@/components/TheFooter.vue'
import HomeCarousel from '../components/HomeCarousel.vue'
import ReviewCardStarsRatingComponent from '../components/ReviewCardStarsRatingComponent.vue'
import BmiCalculator from '../components/BmiCalculator.vue'

import { ref } from 'vue'
import { useMeta } from 'vue-meta'

useMeta({
  title: 'Health is Wealth'
})

const eventsAndNews = ref([
  {
    imageName:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/paintball_IRcYqdHks.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984852844',
    title: 'Paint-Ball!!!',
    description:
      'Subscibe to any of our fitness plans at 50% discount!!! Offer lasts for a month'
  },
  {
    imageName:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/roadwalk_4PSK72Uwa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984852621',
    title: 'Road Walk!!!',
    description:
      'Subscibe to any of our fitness plans at 50% discount!!! Offer lasts for a month'
  },
  {
    imageName:
      'https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/promo_h_38XOR_K.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984888971',
    title: 'Promo! Promo!! Promo!!!',
    description:
      'Subscibe to any of our fitness plans at 50% discount!!! Offer lasts for a month'
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

const reviewPosition = (index) => index % 2 === 0
// const getImageUrl = (imageName) => require(`${imageName}`)

// const showBmi = ref(false)
// const toggleBmi = () => (showBmi.value = !showBmi.value)
</script>

<style scoped>
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
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
}
.module-pop-up {
  position: absolute;
  bottom: -50%;
  transition: all 0.5s ease-out 0.2s;
}
.module:hover .module-pop-up {
  bottom: 0px;
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

@media screen and (max-width: 815px) {
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
}

@media screen and (max-width: 640px) {
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
}
</style>
