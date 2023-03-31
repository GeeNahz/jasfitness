<template>
  <div
    class="indicator-container fixed top-5 md:top-12 left-[30%] md:left-[63%] z-20"
  >
    <SnowFlakesEffect />
    <div
      class="indicator-wrapper w-max h-fit bg-blue-300 shadow-lg rounded p-3"
    >
      <p class="text-base font-semibold capitalize text-slate-700 mb-2">
        subscription freezed
      </p>
      <button
        class="w-full py-2 font-semibold rounded bg-blue-600 hover:bg-blue-700 transition text-white"
      >
        Unfreeze
      </button>
    </div>
  </div>
</template>

<script setup>
import SnowFlakesEffect from './SnowFlakesEffect.vue'
</script>

<style lang="scss" scoped>
.indicator-wrapper {
  background: inherit;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
    filter: blur(10px);
    background: inherit;
  }
}
</style>
