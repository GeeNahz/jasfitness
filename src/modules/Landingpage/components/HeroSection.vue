<script setup  lang="ts">
const emit = defineEmits(['showBmiCalculator', 'scrollTo'])
const openBmiCalculator = () => {
  emit('showBmiCalculator')
}

function scrollTo(selector: string) {
  emit('scrollTo', selector)
}
</script>

<template>
  <div
    class="flex justify-between items-center gap-x-64 bg-none lg:bg-[url('https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/hero_YUAGwWov_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665864648815')] lg:h-full w-full lg:pl-32"
  >
    <div class="hidden lg:block bg-none font-inter text-white md:w-[40%]">
      <p class="mb-8 text-3xl font-normal">
        No one else got your chest, shoulder, back, abs, and leg like we do
      </p>
      <div class="flex btns space-x-7">
        <a
          @click.prevent="scrollTo('#why-jasfitness')"
          class="text-xl font-bold transition text-zinc-900 bg-slate-50 hover:text-zinc-900 hover:bg-slate-200 hover:cursor-pointer w-52 h-14 btn-default"
        >
          Get Started -
        </a>
        <button
          @click="openBmiCalculator"
          class="text-xl font-bold text-white bg-[#FFB628] hover:bg-[#fca800] transition w-52 h-14 btn-default"
        >
          What's Your BMI?
        </button>
      </div>
      <div class="mt-3 text-sm enquiry">
        <span class="text-gray-400">Which plan to choose? <router-link class="text-gray-100 transition-colors hover:text-amber-400 link" :to="{ name: 'EnquiryPage' }">Contact Us.</router-link></span>
      </div>
    </div>
    <div
      class="lg:flex justify-end items-center font-inter h-[100vh] w-full lg:w-auto lg:pb-10"
    >
      <figure>
        <video
          autoplay
          muted
          loop
          class="object-fill w-full h-full video mac iphone rounded-b-xl"
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
          <p class="mb-8 text-xl font-semibold text-center">
            No one else got your chest, shoulder, back, abs, and leg like we do
          </p>
          <div class="flex flex-col items-center">
            <div class="flex justify-center btns space-x-7">
              <router-link
                class="px-4 py-2 text-sm font-bold bg-white text-zinc-900 hover:text-zinc-900 whitespace-nowrap btn-default"
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
            <div class="mt-3 text-sm enquiry">
              <span class="text-gray-50">
                Which plan to choose? <router-link class="underline transition-colors text-amber-300 underline-offset-2 hover:text-amber-400 link" :to="{ name: 'EnquiryPage' }">
                  Contact Us.
                </router-link>
              </span>
            </div>
          </div>
        </div>
      </figure>
    </div>
  </div>
</template>

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
