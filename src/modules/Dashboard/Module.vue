<template>
  <div
    class="flex flex-col md:flex-row items-center w-full h-full font-quicksand"
  >
    <TheSidebar class="hidden md:block" />
    <div class="h-full w-full">
      <router-view :key="$route.path" class="h-full" />
    </div>
  </div>
</template>

<script>
import TheSidebar from './components/TheSidebar.vue'
export default {
  name: 'DashboardView',
  components: {
    TheSidebar
  }
}
</script>

<style scoped></style>
