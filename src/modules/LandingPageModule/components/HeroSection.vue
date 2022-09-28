<template>
  <div
    class="flex justify-start items-center lg:space-x-48 bg-[url(/src/modules/LandingPageModule/assets/hero.png)] h-[95%] lg:h-full w-full lg:pl-32"
  >
    <div class="hidden lg:block bg-none font-inter text-white">
      <p class="text-3xl font-semibold mb-8">
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
    <div
      class="relative overflow-hidden font-inter rounded-b-xl h-[90%] lg:h-full w-full mb-10"
    >
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
      <div
        class="lg:hidden absolute bottom-0 left-[50%] -translate-x-[50%] px-2 text-white"
      >
        <p class="text-xl text-center font-semibold mb-8">
          No one else got your chest, shoulder, back, abs, and leg like we do
        </p>
        <div class="btns flex space-x-7 justify-center">
          <router-link
            class="text-sm font-bold text-zinc-900 bg-white hover:text-zinc-900 px-4 py-2 whitespace-nowrap btn-default"
            :to="{ name: 'LandingPageHome' }"
            >Get Started</router-link
          >
          <router-link
            class="text-sm text-center font-bold text-white bg-[#FFB628] px-4 py-2 whitespace-nowrap btn-default"
            :to="{ name: 'LandingPageHome' }"
            >What's Your BMI?</router-link
          >
        </div>
      </div>
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
