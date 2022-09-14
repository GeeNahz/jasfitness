<template>
  <div class="flex gap-4 h-full w-full p-4">
    <div class="main-body bg-white h-full w-4/5 rounded overflow-scroll">
      <slot name="welcome-section"></slot>
    </div>
    <!-- inner side bar -->
    <div class="bg-zinc-900 w-1/5 rounded relative py-16 px-3 text-white">
      <DashboardDivider
        class="text-xl font-semibold"
        :name="title"
        textBackColor="bg-zinc-900"
        textColor="text-white"
      />
      <slot name="inner-side-bar"></slot>
    </div>
  </div>
</template>

<script setup>
// import DashboardRightSidebar from '../components/DashboardRightSidebar.vue'
import DashboardDivider from '../components/DashboardDivider.vue'

defineProps({
  title: {
    type: String,
    default: 'Heading'
  }
})
</script>

<style scoped></style>
