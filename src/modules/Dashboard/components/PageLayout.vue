<script setup lang="ts">
import AlertBanner from './AlertBanner.vue'
import DashboardDivider from '../components/DashboardDivider.vue'
import TheSidebar from './TheSidebar.vue';

interface Props {
  showTitle?: boolean;
  title?: string;
  isDashboard?: boolean;
}
withDefaults(defineProps<Props>(), {showTitle: true, title: "Heading", isDashboard: true });
</script>

<template>
  <div class="dashboard-container font-quicksand disable-scroll">
    <!-- navbar/sidebar -->
    <div class="sidebar-panel">
      <TheSidebar />
    </div>
    <!-- main page -->
    <div v-if="isDashboard" class="main-container w-full">
      <div class="h-max flex flex-col md:block md:h-full">
        <div class="main h-full w-full p-3">
          <!-- main-body -->
          <div
            class="main-body lg:max-h-screen lg:w-full lg:overflow-y-scroll pb-4 lg:pb-0 lg:pt-3 lg:pr-20"
          >
            <AlertBanner />
            <slot name="welcome-section"></slot>
            <slot name="default"></slot>
          </div>
          <!-- inner side bar -->
          <!-- main-sidebar -->
          <div
            class="main-sidebar bg-zinc-900 md:w-full rounded-xl py-10 lg:py-16 px-3 text-white"
          >
            <div>
              <slot name="display-image"></slot>
              <div v-if="showTitle" class="mb-8 md:mb-16 py-2 pb-3 md:py-0">
                <DashboardDivider
                  class="text-base md:text-xl font-semibold"
                  :name="title"
                  textBackColor="bg-zinc-900"
                  textColor="text-white"
                />
              </div>
              <slot name="inner-side-bar"></slot>
            </div>
            <!-- footer -->
            <div
              class="hidden md:flex flex-col items-center text-zinc-200 text-opacity-80 font-thin text-xs"
            >
              <div class="flex items-center gap-3 mb-3 imgs opacity-20">
                <div class="border border-[#d4d4d4] w-16 md:w-32 rounded-full" />
                <img src="@/assets/footer-logo.svg" alt="dumbbell" class="w-16" />
                <div class="border border-[#d4d4d4] w-16 md:w-32 rounded-full" />
              </div>
              <span>Powered by JAS FITNESS</span>
            </div>
          </div>
        </div>
        <!-- footer for sm screen only -->
        <div
          class="md:hidden h-max flex flex-col items-center my-8 text-opacity-80 font-thin text-xs"
        >
          <div class="flex items-center gap-3 mb-3 imgs">
            <div class="border border-[#d4d4d4] w-44 rounded-full opacity-70"></div>
            <!-- <AppIconFooterIcon /> -->
            <img
              src="@/assets/footer-logo-black.svg"
              alt="dumbbell"
              class="w-16 opacity-20"
            />
            <div class="border border-[#d4d4d4] w-44 rounded-full opacity-70"></div>
          </div>
          <span>Powered by JAS FITNESS</span>
        </div>
      </div>
    </div>
    <div v-else class="main-container w-full">
      <slot>Main Section</slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../assets/styles/base';

// layout styles
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

// dashboard styles
.main {
  display: grid;
  grid-template-columns: minmax(400px, 1fr) minmax(200px, 300px);
  grid-template-areas: 'main side';
  gap: 1rem;

  @include responsive('tablet-width') {
    grid-template-columns: minmax(100%, 1fr);
    grid-template-areas: initial;
    // height: 100%;
  }
}
div.main-body {
  grid-area: 'main';

  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;

  @include responsive('tablet-width') {
    height: max-content;
    grid-area: initial !important;
  }
}
.main-sidebar {
  grid-area: 'side';

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;

  @include responsive('tablet-width') {
    grid-area: initial !important;

    padding: 10px 0;
  }
}
div.main-body::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
@media screen and (max-width: 1000px) {
  div.main-body {
    padding-top: 2.5rem;
  }
}
</style>
