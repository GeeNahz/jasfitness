<script setup lang="ts">
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

import AppIconSetting from '@/components/icons/AppIconSetting.vue'
import AppIconClasses from '@/components/icons/AppIconClasses.vue'
import AppIconDashboard from '@/components/icons/AppIconDashboard.vue'
import AppIconSubscription from '@/components/icons/AppIconSubscription.vue'
import AppIconRecord from '@/components/icons/AppIconRecord.vue'
import AppIconLogout from '@/components/icons/AppIconLogout.vue'
import { useAuthStore } from '@/modules/Authentication/stores/auth'

const router = useRouter()
const authStore = useAuthStore();

function logout() {
  // make a call to the auth store logout mutation
  authStore.logout();
  router.push({ name: 'LoginPage' })
}

const showSideBarNav = ref(false)

const navbar: any = inject('navbar')
const toggleSideBar = () => {
  showSideBarNav.value = !showSideBarNav.value
  navbar.toggleIsNavbarOpen(showSideBarNav.value)
  document.querySelector('#app')!.classList.toggle('overflow-y-hidden')
}
</script>

<template>
  <div
    class="hidden lg:flex flex-col items-center relative min-w-full h-full md:px-4 md:float-left md:border-r-2 border-gray-300 bg-white rounded-br-xl md:rounded-br-none"
  >
    <!-- logo -->
    <div class="logo flex items-center space-x-4 px-3 my-8 font-semibold">
      <div class="navbar-brand">
        <img
          src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/JasFitnessLogo_v2_POR6uaqVw?updatedAt=1683730306530"
          alt="logo"
          width="50"
          height=""
        />
      </div>
    </div>
    <!-- outer side bar -->
    <div
      id="sidebar"
      class="burger-menu w-max flex-1 flex flex-col py-4 justify-between"
    >
      <div class="flex-1 bg-emerald-300">
        <ul class="space-y-1 md:space-y-3 text-md md:text-base w-52">
          <li id="home">
            <router-link
              :to="{ name: 'DashboardHome' }"
              class="p-2 flex items-center gap-3"
            >
              <div class="icon">
                <AppIconDashboard />
              </div>
              <p>Home</p>
            </router-link>
          </li>
          <li id="fitnessrecord-link">
            <router-link
              :to="{ name: 'DashboardFitnessRecord' }"
              class="p-2 flex items-center gap-3"
            >
              <div class="icon">
                <AppIconRecord />
              </div>
              <p>Fitness Record</p>
            </router-link>
          </li>
          <li id="mysubscription-link">
            <router-link
              :to="{ name: 'DashboardSubscription' }"
              class="p-2 flex items-center gap-3"
            >
              <div class="icon">
                <AppIconSubscription />
              </div>
              <p>My Subscription</p>
            </router-link>
          </li>
        </ul>

        <hr class="my-4" />

        <ul class="space-y-1 md:space-y-3 text-md md:text-base w-full">
          <li id="classes-link">
            <router-link
              to="/classes"
              class="p-2 flex items-center gap-3 disabled"
            >
              <div class="icon">
                <AppIconClasses fillColor="gray" />
              </div>
              <p>Classes</p>
            </router-link>
          </li>
          <li id="settings-link">
            <router-link
              :to="{ name: 'DashboardSettings' }"
              class="p-2 flex items-center gap-3"
            >
              <div class="icon">
                <AppIconSetting />
              </div>
              <p>Settings</p>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- logout button -->
      <div
        @click="logout"
        class="link flex items-center gap-3 font-bold"
      >
        <div class="icon">
          <AppIconLogout />
        </div>
        <p>Logout</p>
      </div>
    </div>
  </div>

  <!-- nav bar on small screen -->
  <div
    id="navbar"
    class="z-10 flex justify-between items-center lg:hidden w-full p-4 bg-white fixed shadow"
  >
    <div class="logo flex items-center space-x-4 font-semibold">
      <router-link class="navbar-brand" :to="{ name: 'LandingPageHome' }">
        <img
          src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/JasFitnessLogo_v2_POR6uaqVw?updatedAt=1683730306530"
          alt="logo"
          width="50"
          height=""
        />
      </router-link>
    </div>
    <svg
      @click="toggleSideBar"
      id="navbar-toggle"
      class="h-full"
      width="37"
      height="40"
      viewBox="0 0 37 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 32L32 32"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
      <ellipse
        cx="5"
        cy="31.6667"
        rx="4"
        ry="4"
        transform="rotate(90 5 31.6667)"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M2 42L23 42"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
      <ellipse
        cx="27.6667"
        cy="42.3334"
        rx="4"
        ry="4"
        transform="rotate(90 27.6667 42.3334)"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M9 11L32 11"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
      <ellipse
        cx="5"
        cy="10.6667"
        rx="4"
        ry="4"
        transform="rotate(90 5 10.6667)"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M2 21L23 21"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
      <ellipse
        cx="27.6667"
        cy="21.3334"
        rx="4"
        ry="4"
        transform="rotate(90 27.6667 21.3334)"
        stroke="#969696"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </div>
  <!-- hamburger menu on small screen -->
  <div
    @click.self="toggleSideBar"
    v-if="showSideBarNav"
    class="lg:hidden fixed lg:fixed top-0 left-0 h-full w-full bg-gray-500 bg-opacity-50 z-20"
  >
    <div
      class="relative w-3/5 md:w-2/5 h-max md:px-4 pt-4 pb-24 md:float-left md:border-r-2 border-gray-300 bg-white rounded-br-xl md:rounded-br-none"
    >
      <div
        class="logo flex items-center w-full justify-center space-x-4 px-3 mt-8 md:mt-10 mb-10 md:mb-20 font-semibold"
      >
        <div class="navbar-brand">
          <img
            src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/JasFitnessLogo_v2_POR6uaqVw?updatedAt=1683730306530"
            alt="logo"
            width="50"
            height=""
          />
        </div>
      </div>
      <!-- outer side bar -->
      <div class="burger-menu">
        <ul class="space-y-1 pl-2 pr-2 text-sm">
          <li id="home">
            <router-link
              @click="toggleSideBar"
              :to="{ name: 'DashboardHome' }"
              class="p-2 flex items-center gap-2"
            >
              <div class="icon">
                <AppIconDashboard />
              </div>
              <p>Home</p>
            </router-link>
          </li>
          <li id="fitnessrecord-link-mobile">
            <router-link
              @click="toggleSideBar"
              :to="{ name: 'DashboardFitnessRecord' }"
              class="p-2 flex items-center gap-2"
            >
              <div class="icon">
                <AppIconRecord />
              </div>
              <p>Fitness Record</p>
            </router-link>
          </li>
          <li id="mysubscription-link-mobile">
            <router-link
              @click="toggleSideBar"
              :to="{ name: 'DashboardSubscription' }"
              class="p-2 flex items-center gap-2"
            >
              <div class="icon">
                <AppIconSubscription />
              </div>
              <p>My Subscription</p>
            </router-link>
          </li>
        </ul>

        <hr class="my-4" />

        <ul class="space-y-1 pl-2 pr-2 text-sm">
          <li id="classes-link-mobile">
            <router-link
              to="/classes"
              class="p-2 flex items-center gap-2 disabled"
            >
              <div class="icon">
                <AppIconClasses />
              </div>
              <p>Classes</p>
            </router-link>
          </li>
          <li id="settings-link-mobile">
            <router-link
              @click="toggleSideBar"
              :to="{ name: 'DashboardSettings' }"
              class="p-2 flex items-center gap-2"
            >
              <div class="icon">
                <AppIconSetting />
              </div>
              <p>Settings</p>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- logout button -->
      <div
        @click="logout"
        class="link flex items-center text-sm font-semibold mt-5 py-8 space-x-4"
        style="font-weight: 600"
      >
        <div class="icon">
          <AppIconLogout />
        </div>
        <p>Logout</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
div.link {
  padding: 0.5rem;
}
a,
div.link {
  border-radius: 8px;
  font-weight: 500;
  color: #2c3e50;
  transition: all 0.2s ease-in-out, border 0.1s ease-in-out;
}
a .icon,
div.link .icon {
  color: #adadad;
  transition: fill 0.2s ease-in-out;
}

a:hover,
div.link:hover {
  cursor: pointer;

  background: #ca9b4225;
  border-radius: 8px;
}

a.router-link-exact-active {
  color: #fba500;
  background: #ca9b4225;
  border-radius: 8px;
  font-weight: 600;
}
a.router-link-exact-active .icon {
  color: #fba500;
}

.disabled {
  color: #b4b4b495;
  pointer-events: none;
}

.onboarding-active {
  background-color: #ececec;
}
</style>
