<template>
  <TheNavbar class="" />

  <router-view class="-z-10" :key="$route.path" />
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  name: 'DashboardView',
  components: { TheNavbar }
}
</script>
