<template>
  <div
    class="dashboard-container w-full mt-[200px] md:mt-0 font-quicksand disable-scroll"
  >
    <DashboardHandleModalsDisplay />
    <TheSidebar class="sidebar" />
    <div class="main-container w-full">
      <div class="z-50">
        <Onboarding />
      </div>
      <router-view :key="$route.path" class="h-full w-full" />
    </div>
  </div>
</template>

<script>
import { computed, provide, ref } from 'vue'
import { useStore } from 'vuex'

import DashboardHandleModalsDisplay from './components/DashboardHandleModalsDisplay.vue'
import TheSidebar from './components/TheSidebar.vue'
import Onboarding from './components/OnBoarding.vue'

export default {
  name: 'DashboardView',
  components: {
    TheSidebar,
    DashboardHandleModalsDisplay,
    Onboarding
  },
  setup() {
    const store = useStore()

    const runOnrientation = ref(false)
    function toggleRunOrientation(newState) {
      runOnrientation.value = newState
    }
    provide('runOrientationManually', { runOnrientation, toggleRunOrientation })

    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/base';

.dashboard-container {
  height: 100%;
  display: grid;
  grid-template-columns: minmax(100px, 280px) 1fr;
  grid-template-areas: 'side main';

  @include responsive('tablet-width') {
    height: max-content;
    grid-template-columns: minmax(256px, 1fr);
    grid-template-areas: initial;
  }
}

.sidebar {
  grid-area: 'side';

  @include responsive('tablet-width') {
    grid-area: initial;
  }
}

.main-container {
  grid-area: 'main';

  height: 100vh;
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
