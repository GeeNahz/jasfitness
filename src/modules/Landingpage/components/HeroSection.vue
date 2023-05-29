<template>
  <div
    class="flex justify-between items-center gap-x-64 bg-none lg:bg-[url('https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/hero_YUAGwWov_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665864648815')] lg:h-full w-full lg:pl-32"
  >
    <div class="hidden lg:block bg-none font-inter text-white md:w-[40%]">
      <p class="text-3xl font-normal mb-8">
        No one else got your chest, shoulder, back, abs, and leg like we do
      </p>
      <div class="btns flex space-x-7">
        <a
          @click.prevent="scrollTo('#why-jasfitness')"
          class="text-xl font-bold text-zinc-900 bg-slate-50 hover:text-zinc-900 hover:bg-slate-200 hover:cursor-pointer transition w-52 h-14 btn-default"
        >
          Get Started
        </a>
        <button
          @click="openBmiCalculator"
          class="text-xl font-bold text-white bg-[#FFB628] hover:bg-[#fca800] transition w-52 h-14 btn-default"
        >
          What's Your BMI?
        </button>
      </div>
    </div>
    <div
      class="lg:flex justify-end items-center overflow-hidden font-inter rounded-b-xl h-[100vh] lg:h-full w-full lg:w-auto lg:mb-10"
    >
      <figure>
        <video
          autoplay
          muted
          loop
          class="w-full h-full video mac iphone object-fill"
        >
          <source
            src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/JasFitnessCenterMain_VVwGnmuC8.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1664997283633"
            type="video/mp4"
          />
          <source
            src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/JasFitnessCenterMain_VVwGnmuC8.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1664997283633"
            type="video/webm"
          />
          Sorry, your bowser doesn't support HTML5 <code>video</code>
        </video>
        <div
          class="mac iphone lg:hidden absolute bottom-20 left-[50%] -translate-x-[50%] px-2 pb-4 text-white"
        >
          <p class="text-xl text-center font-semibold mb-8">
            No one else got your chest, shoulder, back, abs, and leg like we do
          </p>
          <div class="btns flex space-x-7 justify-center">
            <router-link
              class="text-sm font-bold text-zinc-900 bg-white hover:text-zinc-900 px-4 py-2 whitespace-nowrap btn-default"
              :to="{ name: 'PlansPage' }"
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
      </figure>
    </div>
  </div>
</template>

<script setup  lang="ts">
const emit = defineEmits(['showBmiCalculator', 'scrollTo'])
const openBmiCalculator = () => {
  emit('showBmiCalculator')
}

function scrollTo(selector: string) {
  emit('scrollTo', selector)
}
</script>

<style scoped>
figure {
  position: relative;
  height: 100%;
  /* color: #fca800; */
}

@media screen and (max-width: 414px) {
  figure::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-image: linear-gradient(to bottom, #1f1f1f00, #1f1f1f);
  }
}
.btn-default {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.to-black.mac,
.to-black.iphone,
.video.mac,
.video.iphone {
  background-image: linear-gradient(to bottom, rgba(0 0 0 0), rgba(0 0 0 1));
}
.text-white.mac,
.text-white.iphone {
  z-index: 20;
}
</style>
