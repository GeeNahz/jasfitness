<template>
  <div class="flex gap-4 h-full w-full p-4">
    <div class="main-body bg-white h-full w-4/5 rounded overflow-scroll">
      <slot name="welcome-section"></slot>
    </div>
    <!-- inner side bar -->
    <div class="bg-zinc-900 w-1/5 rounded relative py-16 px-3 text-white">
      <div v-if="showTitle" class="mb-16">
        <DashboardDivider
          class="text-xl font-semibold"
          :name="title"
          textBackColor="bg-zinc-900"
          textColor="text-white"
        />
      </div>
      <slot name="inner-side-bar"></slot>
      <!-- footer -->
      <div
        class="flex flex-col items-center md:absolute md:bottom-8 md:left-[50%] md:-translate-x-[50%] text-zinc-200 text-opacity-80 font-thin text-xs"
      >
        <div class="flex items-center gap-3 mb-3 imgs">
          <div class="border border-[#d4d4d4] w-16 md:w-32 rounded-full" />
          <img src="@/assets/joint-dumbells.svg" alt="dumbbell" class="w-16" />
          <div class="border border-[#d4d4d4] w-16 md:w-32 rounded-full" />
        </div>
        <span>Powered by JAS FITNESS</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// import DashboardRightSidebar from '../components/DashboardRightSidebar.vue'
import DashboardDivider from '../components/DashboardDivider.vue'

defineProps({
  showTitle: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: 'Heading'
  }
})
</script>

<style scoped></style>
