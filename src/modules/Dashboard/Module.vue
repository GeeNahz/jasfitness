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
import { computed } from 'vue'
import { useStore } from 'vuex'
import TheSidebar from './components/TheSidebar.vue'
export default {
  setup() {
    const store = useStore()
    const loggedIn = computed(() => store.state.auth.isLoggedIn)
    return { loggedIn }
  },
  name: 'DashboardView',
  components: {
    TheSidebar
  },
  beforeRouteEnter(to, from, next) {
    next((comp) => {
      if (to.fullPath.includes('/dashboard') && !comp.loggedIn) {
        comp.$router.push({ name: 'LoginPage' })
      }
    })
  }
}
</script>

<style scoped></style>
