<template>
  <div class="pt-20 h-full">
    <div
      class="relative md:mt-20 flex md:justify-between items-center h-full w-full md:h-fit md:w-max mx-auto md:rounded-lg overflow-hidden shadow-md bg-[url('/src/modules/Auth/assets/auth-gym.jpg')] bg-cover bg-center bg-no-repeat md:bg-none md:bg-zinc-100"
    >
      <!-- bg gradient for sm -->
      <div
        class="md:hidden main-bg-cover-hue absolute h-full w-full top-0 left-0"
      >
        <p
          class="bg-gradient-to-b from-zinc-800 to-black opacity-70 h-full w-full"
        ></p>
      </div>
      <!-- back button -->
      <div class="absolute top-3 left-3 z-10">
        <AppGoBack />
      </div>
      <!-- left side -->
      <div
        class="absolute bottom-16 md:bottom-0 md:px-0 md:relative flex flex-col md:flex-row side-image text-center"
      >
        <!-- bg gradient for left side -->
        <div class="md:absolute h-full w-full left-0 top-0">
          <p
            class="bg-gradient-to-b from-zinc-800 to-black opacity-70 h-full w-full"
          ></p>
        </div>
        <!-- motivations -->
        <p
          class="text-white text-xl mb-6 md:text-4xl lg:text-5xl px-10 md:px-0 lg:w-96 font-normal md:absolute md:top-[50%] md:-translate-y-[50%] md:left-[50%] md:-translate-x-[50%]"
        >
          <slot name="motivation-section"></slot>
        </p>
        <!-- footer -->
        <div
          class="flex flex-col items-center md:absolute md:bottom-8 md:left-[50%] md:-translate-x-[50%] text-zinc-200 text-opacity-40 font-thin text-xs"
        >
          <div class="flex items-center gap-3 mb-3 imgs">
            <div class="border border-[#d4d4d4] w-24 md:w-44 rounded-full" />
            <img
              src="../assets/joint-dumbells.svg"
              alt="dumbbell"
              class="w-20"
            />
            <div class="border border-[#d4d4d4] w-24 md:w-44 rounded-full" />
          </div>
          <span>Powered by JAS FITNESS</span>
        </div>
        <img
          src="../assets/auth-gym.jpg"
          alt="side image"
          class="hidden md:block w-[420px] lg:w-[23vw] bg-gradient-to-r from-neutral-700 to-neutral-900"
        />
      </div>
      <!-- right side -->
      <div
        id="form"
        class="absolute left-[50%] md:left-0 -translate-x-[50%] md:-translate-x-0 top-[40%] -translate-y-[50%] md:-translate-y-0 md:top-0 md:relative md:block w-64 md:w-96 md:mx-12 lg:mx-20 p-4 md:p-10 z-10 bg-white rounded shadow-md md:shadow-[#e7e7e7]"
      >
        <span class="mb-3 md:mb-8 block font-semibold text-md md:text-2xl"
          ><slot name="header-section"></slot
        ></span>
        <slot name="form-section"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppGoBack from '@/components/AppGoBack.vue'
</script>
