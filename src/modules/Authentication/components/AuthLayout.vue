<script setup lang="ts">
import AppGoBack from '@/components/AppGoBack.vue'
</script>

<template>
  <div
    class="relative bg-[url('https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/auth-gym_su-qgIhMP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665865172721')] bg-cover bg-origin-border lg:bg-none lg:flex h-full pt-24 lg:pt-72 pb-[276px] lg:py-48 items-center"
  >
    <!-- main section -->
    <div
      id="div-container"
      class="relative lg:w-[1000px] lg:mx-auto flex rounded-xl h-[65vh]"
    >
      <!-- back button on sm and lg screen -->
      <div
        class="absolute left-6 top-1 lg:left-4 lg:top-4 z-30 hover:cursor-pointer"
      >
        <AppGoBack />
      </div>
      <!-- main section 1 on lg screen only -->
      <div
        class="hidden lg:block relative flex-1 bg-[url('https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/auth-gym_su-qgIhMP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665865172721')] bg-cover bg-center lg:rounded-l-xl overflow-hidden"
      >
        <p
          class="absolute bg-gradient-to-b from-zinc-800 to-black opacity-70 h-full w-full"
        ></p>
        <div class="lg:w-[430px] h-[397px] my-[74px] mx-[35px]"></div>
        <div
          class="absolute top-40 left-[50%] -translate-x-[50%] flex flex-col items-center justify-center"
        >
          <div
            class="text-white font-bold font-quicksand w-full text-center text-2xl lg:text-4xl mb-32"
          >
            <slot name="motivation-section">
              <p>When you</p>
              <p>see results it</p>
              <p>
                becomes an
                <span class="text-yellow-500 font-semibold">Addiction</span>
              </p>
            </slot>
          </div>
          <div class="text-white text-sm text-center">
            <div class="flex items-center gap-3 mb-3 imgs">
              <div class="border border-[#d4d4d4] w-48 lg:w-44 rounded-full" />
              <img src="@/assets/footer-logo.svg" alt="dumbbell" class="w-20" />
              <div class="border border-[#d4d4d4] w-48 lg:w-44 rounded-full" />
            </div>
            <p>Powered By JAS FITNESS</p>
          </div>
        </div>
      </div>
      <!-- main section 2 on sm and lg screen -->
      <div
        class="flex-1 lg:bg-none lg:bg-gray-100 z-10 lg:z-0 rounded-r-xl lg:flex lg:justify-center lg:items-center"
      >
        <div
          id="form-container"
          class="flex flex-col px-7 lg:px-14 justify-center items-center lg:w-[430px] h-max md:h-max py-7 lg:py-7 lg:min-h-[80%] lg:h-max my-[84px] lg:my-0 mx-4 lg:mx-[35px] bg-white rounded-xl"
        >
          <!-- lg:my-[74px] -->
          <span
            class="mb-3 lg:mb-8 block text-start w-full font-semibold font-quicksand text-md lg:text-xl"
            ><slot name="header-section"></slot
          ></span>
          <slot name="form-section"></slot>
        </div>
      </div>
    </div>
    <div class="absolute lg:hidden top-0 left-0 h-full w-full">
      <p
        class="bg-gradient-to-b from-zinc-800 to-black opacity-70 h-full w-full"
      ></p>
    </div>
    <!-- footer on sm screen only -->
    <div>
      <div
        class="absolute lg:hidden bottom-32 text-white w-full text-center font-quicksand text-lg font-light px-4 lg:text-4xl"
      >
        <slot name="motivation-section">
          <p>When you</p>
          <p>see results it</p>
          <p>
            becomes an
            <span class="text-yellow-500 font-semibold">Addiction</span>
          </p>
        </slot>
      </div>
      <div
        class="absolute lg:hidden w-full px-8 text-white left-[50%] -translate-x-[50%] bottom-6 text-sm text-center text-opacity-50"
      >
        <div class="flex items-center gap-3 mb-2 imgs">
          <div class="border border-[#d4d4d4] w-full lg:w-44 rounded-full" />
          <img src="@/assets/footer-logo.svg" alt="dumbbell" class="w-14" />
          <div class="border border-[#d4d4d4] w-full lg:w-44 rounded-full" />
        </div>
        <p class="text-xs">Powered By JAS FITNESS</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#form-container {
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.25);
}
#div-container {
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 0.1);
}

@media screen and (max-width: 600px) {
  #form-container,
  #div-container {
    box-shadow: none;
  }
}
</style>
