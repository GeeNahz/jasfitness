<template>
  <div class="h-full font-quicksand" :key="$route.path">
    <TheNavbar />
    <div class="h-full">
      <router-view :key="$route.path" />
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  name: 'LandingPageModule',
  components: {
    TheNavbar
  }
}
</script>
