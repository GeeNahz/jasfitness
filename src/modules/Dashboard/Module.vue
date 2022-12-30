<template>
  <div
    class="flex flex-col md:flex-row md:items-center w-full h-full font-quicksand disable-scroll"
  >
    <TheSidebar />
    <div class="mt-12 md:mt-0 h-full w-full">
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
