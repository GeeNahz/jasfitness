<template>
  <div
    class="hidden md:block relative w-72 h-full md:px-4 md:float-left md:border-r-2 border-gray-300 bg-white rounded-br-xl md:rounded-br-none"
  >
    <!-- logo -->
    <div
      class="logo flex items-center space-x-4 px-3 mt-8 md:mt-10 mb-10 md:mb-20 font-semibold"
    >
      <div
        class="h-10 w-10 p-2 rounded bg-yellow-500 flex items-center justify-center"
      >
        JF
      </div>
      <p class="text-inherit">Jas Fitness</p>
    </div>
    <!-- outer side bar -->
    <div class="burger-menu">
      <ul class="space-y-4 md:space-y-10 text-base md:text-lg">
        <li>
          <router-link :to="{ name: 'DashboardHome' }" class="p-3 flex gap-3">
            <div class="icon"><i class="fa-solid fa-house fa-xl"></i></div>
            <p>Home</p>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'DashboardFitnessRecord' }"
            class="p-3 flex gap-3"
          >
            <div class="icon">
              <i class="fa-solid fa-file-waveform fa-xl"></i>
            </div>
            <p>Fiteness Record</p>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'DashboardSubscription' }"
            class="p-3 flex gap-3"
          >
            <div class="icon">
              <i class="fa-regular fa-credit-card fa-xl"></i>
            </div>
            <p>Subscription</p>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- logout button -->
    <router-link
      :to="{ name: 'LoginPage' }"
      class="md:absolute bottom-10 flex items-center ml-4 md:ml-0 py-8 md:py-0 space-x-4"
      ><div class="icon">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
      </div>
      <p>Logout</p></router-link
    >
  </div>
  <!-- nav bar on small screen -->
  <div class="z-30 flex justify-between md:hidden w-full p-4 bg-white fixed">
    <div class="logo flex items-center space-x-4 font-semibold">
      <div
        class="h-10 w-10 p-2 rounded bg-yellow-500 flex items-center justify-center"
      >
        JF
      </div>
      <p class="text-inherit">Jas Fitness</p>
    </div>
    <button
      @click="toggleSideBar"
      class="btn btn-warning text-white font-semibold"
    >
      navCtrl
    </button>
  </div>
  <!-- hamburger menu on small screen -->
  <div
    @click.self="toggleSideBar"
    v-if="showSideBarNav"
    class="md:hidden absolute md:fixed z-10 top-0 left-0 h-full w-full bg-gray-500 bg-opacity-50"
  >
    <div
      class="relative w-1/2 h-max md:px-4 py-5 md:float-left md:border-r-2 border-gray-300 bg-white rounded-br-xl md:rounded-br-none"
    >
      <div
        class="logo flex items-center space-x-4 px-3 mt-8 md:mt-10 mb-10 md:mb-20 font-semibold"
      ></div>
      <!-- outer side bar -->
      <div class="burger-menu">
        <ul class="space-y-4 md:space-y-10 text-sm md:text-lg">
          <li>
            <router-link :to="{ name: 'DashboardHome' }" class="p-3 flex gap-3">
              <div class="icon"><i class="fa-solid fa-house fa-xl"></i></div>
              <p>Home</p>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'DashboardFitnessRecord' }"
              class="p-3 flex gap-3"
            >
              <div class="icon">
                <i class="fa-solid fa-file-waveform fa-xl"></i>
              </div>
              <p>Fiteness Record</p>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'DashboardSubscription' }"
              class="p-3 flex gap-3"
            >
              <div class="icon">
                <i class="fa-regular fa-credit-card fa-xl"></i>
              </div>
              <p>Subscription</p>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- logout button -->
      <router-link
        :to="{ name: 'LoginPage' }"
        class="md:absolute bottom-10 flex items-center ml-4 md:ml-0 py-8 md:py-0 space-x-4"
        ><div class="icon">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </div>
        <p>Logout</p></router-link
      >
      <button
        @click="toggleSideBar"
        class="flex justify-center items-center mx-auto h-7 w-7 border-2 border-zinc-900 rounded-full font-bold hover:scale-105 hover:bg-slate-100 hover:cursor-pointer"
      >
        X
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showSideBarNav = ref(false)

const toggleSideBar = () => {
  showSideBarNav.value = !showSideBarNav.value
}
</script>

<style scoped>
a {
  color: #2c3e50;
  transition: color 0.15s ease-in-out, border 0.15s ease-in-out;
}
a:hover {
  /* color: #745031; */
  color: #ca9b42;
  /* transition: color 0.2s ease-in-out; */
}

a.router-link-exact-active {
  color: #ca9b42;
  border-left: solid #ca9b42;
}
</style>
