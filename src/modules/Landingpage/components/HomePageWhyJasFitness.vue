<script setup lang="ts">
import { defineComponent } from "vue";

import CardItem from "./cards/CardItem.vue";

defineComponent({ name: "WhyJasFitness" });
</script>
<template>
  <div
    class="py-12 mx-8 md:mx-16 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-x-0 lg:gap-x-8 gap-y-8 lg:gap-y-0">
    <!-- left card -->
    <div class="relative w-[366px] h-max lg:h-[400px]">
      <h4 class="text-center lg:text-start text-3xl text-gray-400 font-medium font-inter capitalize mx-auto mb-8">
        Why jas fitness?
      </h4>
      <div class="mx-auto w-[320px] lg:w-[349px]">
        <CardItem
          class="card-item card-set">
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
              class="absolute -right-8 top-12 lg:-right-10 lg:top-20 -z-10 text-[100px] lg:text-9xl text-[#FEDF9A] text-opacity-40 font-bold font-inter">
              01
            </p>
          </div>
          <template #bottom>
            <div>
              <router-link :to="{ name: 'PlansPage' }"
                class="btn-default bg-[#1f1f1f] hover:bg-white hover:border border-[#1f1f1f] w-[130px] h-[45px] md:w-[193px] md:h-[54px] text-sm md:text-base transition-all">
                Join Community
              </router-link>
            </div>
          </template>
        </CardItem>
      </div>
    </div>
    <!-- center image -->
    <div class="relative center-img bg-gray-200 w-full lg:w-[369px] h-[527px]">
      <p class="absolute h-full w-full bg-gradient-to-b from-transparent to-[#1f1f1f] bg-opacity-90" />
      <img class="h-full w-full"
        src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/feellove_5EIs7sCWK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984853920"
        alt="feel the love" />
      <h4 class="absolute bottom-32 left-0 text-3xl xl:text-4xl text-white z-10 font-bold w-full text-center">
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
            <p class="absolute -top-6 -left-9 text-6xl -z-10 text-[#FEDF9A] text-opacity-50 font-semibold font-inter">
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
            <img src="../assets/GetstartedblackIcon.svg" alt="get started" />
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
            <p class="absolute -top-6 -left-9 text-6xl -z-10 text-[#FEDF9A] text-opacity-50 font-semibold font-inter">
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
            <img src="../assets/GetstartedblackIcon.svg" alt="get started" />
            <p class="font-inter text-[14px] xl:text-[16px] mb-2 ml-1">
              Get Started
            </p>
          </router-link>
        </template>
      </CardItem>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
}
</style>