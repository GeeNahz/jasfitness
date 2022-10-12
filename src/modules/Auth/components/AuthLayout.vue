<template>
  <div
    class="relative bg-[url('/src/modules/Auth/assets/auth-gym.jpg')] bg-cover bg-origin-border md:bg-none md:flex h-full pt-24 lg:pt-36 pb-[276px] md:py-48 items-center"
  >
    <!-- main section -->
    <div
      id="div-container"
      class="relative md:w-[1000px] md:mx-auto flex rounded-xl"
    >
      <!-- back button on sm and lg screen -->
      <div
        class="absolute left-6 top-1 md:left-4 md:top-4 z-30 hover:cursor-pointer"
      >
        <AppGoBack />
      </div>
      <!-- main section 1 on lg screen only -->
      <div
        class="hidden md:block relative flex-1 bg-[url('/src/modules/Auth/assets/auth-gym.jpg')] bg-cover bg-center md:rounded-l-xl overflow-hidden"
      >
        <p
          class="absolute bg-gradient-to-b from-zinc-800 to-black opacity-70 h-full w-full"
        ></p>
        <div class="md:w-[430px] h-[397px] my-[74px] mx-[35px]"></div>
        <div
          class="absolute top-40 left-[50%] -translate-x-[50%] flex flex-col items-center justify-center"
        >
          <div
            class="text-white font-bold font-quicksand w-full text-center text-2xl md:text-4xl mb-32"
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
              <div class="border border-[#d4d4d4] w-48 md:w-44 rounded-full" />
              <img src="@/assets/footer-logo.svg" alt="dumbbell" class="w-20" />
              <div class="border border-[#d4d4d4] w-48 md:w-44 rounded-full" />
            </div>
            <p>Powered By JAS FITNESS</p>
          </div>
        </div>
      </div>
      <!-- main section 2 on sm and lg screen -->
      <div class="flex-1 md:bg-none md:bg-gray-100 z-10 md:z-0 rounded-r-xl">
        <div
          id="form-container"
          class="flex flex-col px-7 md:px-14 justify-center items-center md:w-[430px] h-[397px] my-[44px] md:my-[74px] mx-4 md:mx-[35px] bg-white rounded-xl"
        >
          <span
            class="mb-3 md:mb-8 block text-start w-full font-semibold font-quicksand text-md md:text-xl"
            ><slot name="header-section"></slot
          ></span>
          <slot name="form-section"></slot>
        </div>
      </div>
    </div>
    <div class="absolute md:hidden top-0 left-0 h-full w-full">
      <p
        class="bg-gradient-to-b from-zinc-800 to-black opacity-70 h-full w-full"
      ></p>
    </div>
    <!-- footer on sm screen only -->
    <div>
      <div
        class="absolute md:hidden bottom-20 text-white w-full text-center font-quicksand text-lg font-light px-4 md:text-4xl"
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
        class="absolute md:hidden w-full px-8 text-white left-[50%] -translate-x-[50%] bottom-3 text-sm text-center text-opacity-50"
      >
        <div class="flex items-center gap-3 mb-2 imgs">
          <div class="border border-[#d4d4d4] w-full md:w-44 rounded-full" />
          <img src="@/assets/footer-logo.svg" alt="dumbbell" class="w-14" />
          <div class="border border-[#d4d4d4] w-full md:w-44 rounded-full" />
        </div>
        <p class="text-xs">Powered By JAS FITNESS</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppGoBack from '@/components/AppGoBack.vue'
</script>

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
