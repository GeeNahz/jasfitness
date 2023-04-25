<template>
  <div
    class="dashboard-container w-full mt-[200px] md:mt-0 font-quicksand disable-scroll"
  >
    <DashboardHandleModalsDisplay class="fixed" />
    <div class="sidebar-panel">
      <TheSidebar />
    </div>
    <div class="main-container w-full">
      <!-- <SnowFlakes /> -->
      <div class="z-50">
        <Onboarding />
      </div>
      <router-view :key="$route.path" class="h-full w-full" />
    </div>
  </div>
</template>

<script>
import { provide, ref } from 'vue'

import DashboardHandleModalsDisplay from './components/DashboardHandleModalsDisplay.vue'
import TheSidebar from './components/TheSidebar.vue'
import Onboarding from './components/OnBoarding.vue'
// import SnowFlakes from './components/SnowFlakesEffect.vue'

export default {
  name: 'DashboardView',
  components: {
    TheSidebar,
    DashboardHandleModalsDisplay,
    Onboarding
    // SnowFlakes
  },
  setup() {
    const isReady = ref(false)
    function toggleIsReady(newState) {
      setTimeout(() => {
        isReady.value = newState
      }, 0)
    }
    provide('isComponentReady', { isReady, toggleIsReady })
    const isNavbarOpen = ref(false)
    function toggleIsNavbarOpen(newState) {
      isNavbarOpen.value = newState
    }
    provide('navbar', { isNavbarOpen, toggleIsNavbarOpen })

    const runOnrientation = ref(false)
    function toggleRunOrientation(newState) {
      runOnrientation.value = newState
    }
    provide('runOrientationManually', { runOnrientation, toggleRunOrientation })
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/base';

.dashboard-container {
  // height: 100%;
  display: grid;
  grid-template-columns: minmax(100px, 280px) 1fr;
  grid-template-areas: 'side main';

  @include responsive('tablet-width') {
    height: max-content;
    grid-template-columns: minmax(256px, 1fr);
    grid-template-areas: initial;
  }
}

.sidebar-panel {
  grid-area: 'side';

  @include responsive('tablet-width') {
    grid-area: initial;
  }
}

.main-container {
  grid-area: 'main';

  min-height: 100vh;
  padding: 0;
  margin: 0;

  @include responsive('tablet-width') {
    padding: 85px 0;
    grid-area: initial;
  }

  @include responsive('mobile-landscape-width') {
    padding: 70px 0;
    grid-area: initial;
  }
}
</style>
