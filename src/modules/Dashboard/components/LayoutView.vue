<template>
  <div class="flex flex-col md:flex-row gap-4 md:h-full md:w-full p-4">
    <div
      class="main-body bg-white md:h-full md:w-4/5 overflow-y-scroll pb-4 md:pb-0 md:pt-3 md:pr-20"
    >
      <slot name="welcome-section"></slot>
    </div>
    <!-- inner side bar -->
    <div
      class="bg-zinc-900 md:w-1/5 rounded-xl relative py-8 md:py-16 px-3 text-white"
    >
      <slot name="display-image"></slot>
      <div v-if="showTitle" class="mb-8 md:mb-16">
        <DashboardDivider
          class="text-base md:text-xl font-semibold"
          :name="title"
          textBackColor="bg-zinc-900"
          textColor="text-white"
        />
      </div>
      <slot name="inner-side-bar"></slot>
      <slot name="default"></slot>
      <!-- footer -->
      <div
        class="hidden md:flex flex-col items-center md:absolute md:bottom-8 md:left-[50%] md:-translate-x-[50%] text-zinc-200 text-opacity-80 font-thin text-xs"
      >
        <div class="flex items-center gap-3 mb-3 imgs">
          <div class="border border-[#d4d4d4] w-16 md:w-32 rounded-full" />
          <img src="@/assets/footer-logo.svg" alt="dumbbell" class="w-16" />
          <div class="border border-[#d4d4d4] w-16 md:w-32 rounded-full" />
        </div>
        <span>Powered by JAS FITNESS</span>
      </div>
    </div>
  </div>
  <!-- footer for sm screen only -->
  <div
    class="md:hidden flex flex-col items-center my-8 md:absolute md:bottom-8 md:left-[50%] md:-translate-x-[50%] text-opacity-80 font-thin text-xs"
  >
    <div class="flex items-center gap-3 mb-3 imgs">
      <div class="border border-[#d4d4d4] w-44 rounded-full" />
      <img src="@/assets/footer-logo-black.svg" alt="dumbbell" class="w-16" />
      <div class="border border-[#d4d4d4] w-44 rounded-full" />
    </div>
    <span>Powered by JAS FITNESS</span>
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

<style scoped>
.nothing {
  color: #212933;
  /* color: #009789; */
}

div.main-body {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}

div.main-body::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

@media screen and (max-width: 1000px) {
  div.main-body {
    padding-top: 2.5rem;
  }
}
</style>
