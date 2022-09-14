<template>
  <div class="flex items-center w-full h-full">
    <DashboardSidebar />
    <div class="h-full w-full">
      <router-view :key="$route.path" class="h-full" />
    </div>
  </div>
</template>

<script>
import DashboardSidebar from './components/DashboardSidebar.vue'
export default {
  name: 'DashboardView',
  components: {
    DashboardSidebar
  }
}
</script>

<style scoped></style>
