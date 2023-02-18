<template>
  <div class="h-full font-quicksand" :key="$route.path">
    <TheNavbar />
    <div class="h-full">
      <DisplayHandler />
      <router-view :key="$route.path" />
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import DisplayHandler from './components/modals/DisplayHandler.vue'

export default {
  name: 'LandingPageModule',
  components: {
    TheNavbar,
    DisplayHandler
  }
}
</script>
