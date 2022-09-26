<template>
  <div class="h-full">
    <div class="h-full overflow-hidden">
      <HeroSection />
    </div>
    <main>
      <section
        class="py-12 flex flex-col md:flex-row justify-center items-center gap-11"
      >
        <div class="relative flex flex-col w-[366px] h-[421px]">
          <h4
            class="lg:absolute -top-28 left-[50%] lg:-translate-x-[50%] text-3xl text-gray-400 font-medium font-inter capitalize w-max mx-auto mb-8"
          >
            Why jas fitness?
          </h4>
          <CardItem
            class="w-[320px] mx-auto lg:w-[370px] h-[400px] lg:h-full py-16 px-3 card-item"
          >
            <template #top>
              <h4 class="pb-7 text-3xl lg:text-4xl font-semibold">
                You're not Alone
              </h4>
            </template>
            <div class="relative mb-7">
              <p class="text-lg lg:text-xl">
                Consistency Over Motivation. You don’t have to face your fitness
                goals alone. Let us do it TOGETHER.
              </p>
              <p
                class="absolute right-16 top-32 lg:right-8 lg:top-28 -z-10 text-[100px] lg:text-9xl text-[#FEDF9A] text-opacity-40 font-bold font-inter"
              >
                01
              </p>
            </div>
            <template #bottom>
              <div>
                <button
                  class="btn-default bg-[#1f1f1f] w-[130px] h-[45px] lg:w-[193px] lg:h-[54px] text-sm lg:text-base text-white"
                >
                  Join Community
                </button>
              </div>
            </template>
          </CardItem>
        </div>
        <div class="relative center-img bg-gray-200 w-[489px] h-[647px]">
          <p
            class="absolute h-full w-full bg-gradient-to-b from-transparent to-[#1f1f1f] bg-opacity-90"
          />
          <img
            class="h-full w-full"
            height="300"
            width="300"
            src="@/assets/feellove.png"
            alt="in love"
          />
          <h4
            class="absolute bottom-32 left-0 text-4xl text-white z-10 font-bold w-full text-center"
          >
            Feel the Love
          </h4>
        </div>
        <div class="flex flex-col gap-9 w-[320px] lg:w-[419px]">
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
            <p class="card-item-body text-sm lg:text-lg font-normal">
              Consistencty over motiveation. Meet like minded FitFam, who are
              committed to a life of healthy living and more.
            </p>
            <template #bottom>
              <div class="card-item-btns">
                <img
                  src="@/assets/icons/GetstartedblackIcon.svg"
                  alt="get started"
                />
                <p class="font-inter text-[13px] lg:text-[15px] mb-2 ml-1">
                  Get Started
                </p>
              </div>
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
            <p class="card-item-body text-sm lg:text-lg">
              Regardless of your fitness level, we’ve got the equipment and
              professionals to get you the results you desire.
            </p>
            <template #bottom>
              <div class="card-item-btns">
                <img
                  src="@/assets/icons/GetstartedblackIcon.svg"
                  alt="get started"
                />
                <p class="font-inter text-[13px] lg:text-[15px] mb-2 ml-1">
                  Get Started
                </p>
              </div>
            </template>
          </CardItem>
        </div>
      </section>
      <!-- reviews -->
      <section
        class="relative flex flex-col md:flex-row items-center md:gap-16 lg:gap-8 justify-center w-full h-[] border-t border-gray-400 overflow-hidden lg:mb-6 py-10 lg:py-20 px-6 lg:px-16"
      >
        <!-- partial black design -->
        <div
          class="absolute -left-[1090px] md:-left-[799px] lg:-left-[589px] -top-[127px] bg-[#1f1f1f] rounded-[150px] -rotate-[21.45deg] w-[1230px] h-[963px] -z-10"
        ></div>
        <!-- section title -->
        <div
          class="capitalize flex flex-col items-center justify-center w-full text-xl lg:text-5xl text-[#1f1f1f] lg:text-white font-medium pr-0 lg:pr-96"
        >
          <div class="hidden lg:block">
            <h4>Here's what our</h4>
            <h4>members think...</h4>
          </div>
          <div class="block lg:hidden w-full mb-10">
            <h4>
              <span class="white-text">Here</span>'s what our members think...
            </h4>
          </div>
        </div>
        <!-- section cards -->
        <div class="reviews gap-6 lg:gap-14 flex flex-col">
          <div class="single-review ml-12 lg:ml-28">
            <div
              class="shadow img bg-[#2b2b2b] w-[80px] lg:w-[104px] h-[80px] lg:h-[104px] flex items-center justify-center rounded-full overflow-hidden"
            >
              <p class="z-20 text-white text-5xl lg:text-7xl font-medium">A</p>
            </div>
            <CardItem class="item">
              <template #top>
                <p class="text-sm lg:text-xl font-medium">
                  “Once you stop by Jas Gym. You shall get hooked. Excellent
                  Customer Service.”
                </p>
              </template>
              <template #default>
                <div class="flex gap-1 lg:gap-2 mt-1 lg:mt-3">
                  <p class="font-inter font-bold text-sm lg:text-2xl">
                    Anna Orefi
                  </p>
                  <img
                    src="@/assets/icons/GooglereviewlinkIcon.svg"
                    alt="google review"
                  />
                </div>
              </template>
            </CardItem>
          </div>
          <div class="single-review mr-12 lg:mr-28">
            <div
              class="shadow img bg-[#ff7d00] w-[80px] lg:w-[104px] h-[80px] lg:h-[104px] flex items-center justify-center rounded-full overflow-hidden"
            >
              <p class="z-20 text-white text-5xl lg:text-7xl font-medium">A</p>
            </div>
            <CardItem class="item">
              <template #top>
                <p class="text-sm lg:text-xl font-medium">
                  “Friendly environment and instructors. Most importantly, I
                  really appreciate the checking up on clients.”
                </p>
              </template>
              <template #default>
                <div class="flex gap-1 lg:gap-2 mt-1 lg:mt-3">
                  <p class="font-inter font-bold text-sm lg:text-2xl">
                    Afolalu Oluyemisi
                  </p>
                  <img
                    src="@/assets/icons/GooglereviewlinkIcon.svg"
                    alt="google review"
                  />
                </div>
              </template>
            </CardItem>
          </div>
          <div class="single-review ml-12 lg:ml-28">
            <div
              class="shadow img w-[80px] h-[80px] lg:w-[104px] lg:h-[104px] rounded-full overflow-hidden"
            >
              <img src="@/assets/IjeomaJennifer.png" alt="ppic" />
            </div>
            <CardItem class="item">
              <template #top>
                <p class="text-sm lg:text-xl font-medium">
                  “Spending my post partum moment @jasfitness is one of the best
                  decision I have made in life. I love what I’m getting
                  💯💯💯💯”
                </p>
              </template>
              <template #default>
                <div class="flex gap-1 lg:gap-2 mt-1 lg:mt-3">
                  <p class="font-inter font-bold text-sm lg:text-2xl">
                    Ijeoma Jennifer
                  </p>
                  <img
                    src="@/assets/icons/GooglereviewlinkIcon.svg"
                    alt="google review"
                  />
                </div>
              </template>
            </CardItem>
          </div>
        </div>
      </section>
      <section class="bg-gray-100 w-full h-[735px] px-8 lg:px-32 py-8 lg:py-14">
        <h4
          class="capitalize mb-7 lg:mb-14 font-medium font-inter text-2xl lg:text-6xl text-[#171717]"
        >
          Latest Events & News
        </h4>
        <div class="modules hidden lg:flex justify-between items-center">
          <div class="single-module w-[412px] h-[431px] bg-white">
            <div
              class="module relative h-full bg-[url('/src/assets/paintball.png')] bg-cover bg-center"
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
          <div class="single-module w-[412px] h-[431px] bg-white">
            <div
              class="module relative h-full bg-[url('/src/assets/roadwalk.png')] bg-cover bg-center"
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
          <div class="single-module w-[412px] h-[431px] bg-white">
            <div
              class="module relative h-full bg-[url('/src/assets/promo.png')] bg-cover bg-center"
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
        <div class="modules">
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
import { ref } from 'vue'

const eventsAndNews = ref([
  {
    imageName: 'paintball.png',
    title: 'Promo! Promo!! Promo!!!',
    description:
      'Subscibe to any of our fitness plans at 50% discount!!! Offer lasts for a month'
  },
  {
    imageName: 'roadwalk.png',
    title: 'Promo! Promo!! Promo!!!',
    description:
      'Subscibe to any of our fitness plans at 50% discount!!! Offer lasts for a month'
  },
  {
    imageName: 'promo.png',
    title: 'Promo! Promo!! Promo!!!',
    description:
      'Subscibe to any of our fitness plans at 50% discount!!! Offer lasts for a month'
  }
])
</script>

<style scoped>
.btn-default {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.card-item {
  border-radius: 10px;
  background: rgba(224, 224, 224, 0.24);
}
.card-item.card-set {
  padding: 30px 50px;
}
.card-item .card-item-btns {
  display: flex;
  align-items: center;
  padding-top: 10px;
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

@media screen and (max-width: 640px) {
  .center-img {
    width: 340px;
    height: 495px;
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
    position: relative;
    border-radius: 15px;
    background-color: #f9f9f9;
  }
  .item {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    padding: 20px 35px;
  }
  .img {
    top: 30%;
    transform: translateY(-50%);
    left: -50px;
  }
}
</style>
