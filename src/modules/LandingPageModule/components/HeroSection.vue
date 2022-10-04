<template>
  <div
    class="flex justify-between items-center gap-x-64 bg-none lg:bg-[url(/src/modules/LandingPageModule/assets/hero.png)] lg:h-full w-full lg:pl-32"
  >
    <div class="hidden lg:block bg-none font-inter text-white md:w-[40%]">
      <p class="text-3xl font-normal mb-8">
        No one else got your chest, shoulder, back, abs, and leg like we do
      </p>
      <div class="btns flex space-x-7">
        <router-link
          class="text-xl font-bold text-zinc-900 bg-white hover:text-zinc-900 w-52 h-14 btn-default"
          :to="{ name: 'LandingPageHome' }"
          >Get Started</router-link
        >
        <button
          @click="openBmiCalculator"
          class="text-xl font-bold text-white bg-[#FFB628] w-52 h-14 btn-default"
        >
          What's Your BMI?
        </button>
      </div>
    </div>
    <div
      class="relative lg:flex justify-end items-center overflow-hidden font-inter rounded-b-xl h-[100vh] lg:h-full w-full lg:w-auto lg:mb-10"
    >
      <div
        class="absolute h-full w-full bg-gradient-to-b lg:bg-none from-transparent to-black bg-opacity-80"
      ></div>
      <video autoplay muted loop class="w-full h-full object-fill">
        <source
          src="https://ik.imagekit.io/m0adxj6it/Landing-page-video_Ztbe-tue0.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1664916192001"
          type="video/mp4"
        />
        <source
          src="https://ik.imagekit.io/m0adxj6it/Landing-page-video_Ztbe-tue0.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1664916192001"
          type="video/webm"
        />
        Sorry, your bowser doesn't support HTML5 <code>video</code>
      </video>
      <div
        class="lg:hidden absolute bottom-0 left-[50%] -translate-x-[50%] px-2 pb-4 text-white"
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
          <button
            @click="openBmiCalculator"
            class="text-sm text-center font-bold text-white bg-[#FFB628] px-4 py-2 whitespace-nowrap btn-default"
          >
            What's Your BMI?
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['showBmiCalculator'])
const openBmiCalculator = () => {
  emit('showBmiCalculator')
}
</script>

<style scoped>
.btn-default {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
</style>
