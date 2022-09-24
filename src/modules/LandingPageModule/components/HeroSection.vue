<template>
  <div
    class="flex justify-start items-center space-x-28 bg-[url(/src/modules/LandingPageModule/assets/hero.png)] h-full w-full pl-40"
  >
    <div class="bg-none text-white pr-10">
      <p class="w-[715px] text-4xl font-semibold mb-8">
        No one else got your chest, shoulder, back, abs, and leg like we do
      </p>
      <div class="btns flex space-x-7">
        <router-link
          class="text-xl font-bold text-zinc-900 bg-white hover:text-zinc-900 w-52 h-14 btn-default"
          :to="{ name: 'LandingPageHome' }"
          >Get Started</router-link
        >
        <router-link
          class="text-xl font-bold text-white bg-[#FFB628] w-52 h-14 btn-default"
          :to="{ name: 'LandingPageHome' }"
          >What's Your BMI?</router-link
        >
      </div>
    </div>
    <div class="relative overflow-hidden rounded-bl-xl h-full w-full mb-10">
      <div
        class="absolute h-full w-full bg-gradient-to-b from-transparent to-black bg-opacity-80"
      ></div>
      <video
        autoplay
        muted
        loop
        class="h-full w-full"
        width="1920"
        height="778"
        src="https://assets.mixkit.co/videos/preview/mixkit-muscular-man-doing-crossfit-exercises-23353-large.mp4"
      ></video>
      <!-- src="https://www.w3schools.com/html/mov_bbb.mp4" -->
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.btn-default {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
</style>
