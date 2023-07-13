<script setup lang="ts">
import { defineComponent, watch } from "vue";

import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

import DashboardDivider from '../components/DashboardDivider.vue'
import DashboardBaseLogo from "../components/DashboardBaseLogo.vue";
import AlertBanner from "./AlertBanner.vue";
import AppIconSetting from '@/components/icons/AppIconSetting.vue'
import AppIconClasses from '@/components/icons/AppIconClasses.vue'
import AppIconDashboard from '@/components/icons/AppIconDashboard.vue'
import AppIconSubscription from '@/components/icons/AppIconSubscription.vue'
import AppIconRecord from '@/components/icons/AppIconRecord.vue'
import AppIconLogout from '@/components/icons/AppIconLogout.vue'

import { useAuthStore } from '@/modules/Authentication/stores/auth'
import { onClickOutside } from "@vueuse/core";
import { storeToRefs } from "pinia";

defineComponent({
  name: "DashboardLayout",
});

interface Props {
  showTitle?: boolean;
  title?: string;
  isDashboard?: boolean;
}

withDefaults(defineProps<Props>(), {
  showTitle: true,
  title: "Heading",
  isDashboard: true
});

const router = useRouter()
const authStore = useAuthStore();

const showSideBarNav = ref(false)

const navbar: any = inject('navbar')

function closeSideBarNav() {
  showSideBarNav.value = false;
}

watch(showSideBarNav, () => {
  navbar.toggleIsNavbarOpen(showSideBarNav.value);
});

const { isOriented } = storeToRefs(authStore);

const sidebar = ref<HTMLElement>();

onClickOutside(sidebar, () => {
  if (isOriented.value) {
    closeSideBarNav();
  }
});

function logout() {
  authStore.logout();
  router.push({ name: 'LoginPage' })
}
</script>

<template>
  <div class="layout flex flex-col lg:flex-row relative font-quicksand">
    <!-- navbar -->
    <div class="sidebar-nav sticky top-0 bg-white shadow-sm lg:hidden flex justify-between h-20 items-center px-4 z-10">
      <div class="logo flex justify-center items-center">
        <img
          src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/JasFitnessLogo_v2_POR6uaqVw?updatedAt=1683730306530"
          alt="logo"
          width="50"
          height=""
        />
      </div>
      <div class="menu-toggle border rounded-sm h-10 w-10 flex justify-center items-center">
        <svg
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
    </div>
    <!-- sidebar toggle -->
    <input class="cursor-pointer peer fixed top-5 opacity-0 right-6 h-10 w-10 lg:hidden z-20" v-model="showSideBarNav" type="checkbox" name="toggle" id="toggle" />

    <!-- sidebar -->
    <div ref="sidebar" class="transition-all -translate-x-64 peer-checked:translate-x-0 peer-checked:z-30 fixed lg:static sidebar bg-[#f7f7f7] border-r border-r-[#e3e3e3] px-8 w-64 lg:w-72 xl:w-80 h-[100vh] flex lg:translate-x-0 flex-col py-10">
      <div class="logo flex justify-center items-center">
        <img
          src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/JasFitnessLogo_v2_POR6uaqVw?updatedAt=1683730306530"
          alt="logo"
          width="50"
          height=""
        />
      </div>
      <!-- nav btns -->
      <nav id="sidebar" class="flex-1 overflow-auto pt-4">
        <ul>
          <li @click="closeSideBarNav" id="home" class="my-1">
            <router-link class="flex items-center overflow-hidden whitespace-pre p-2 rounded-lg text-slate-500 gap-3 transition-all hover:text-amber-500 hover:bg-[#e3e3e3] active:text-white active:bg-[hsl(224, 98%, 58%)]" :to="{ name: 'DashboardHome' }">
              <AppIconDashboard />
              Home
            </router-link>
          </li>
          <li @click="closeSideBarNav" id="fitnessrecord-link-mobile" class="my-1">
            <router-link class="flex items-center overflow-hidden whitespace-pre p-2 rounded-lg text-slate-500 gap-3 transition-all hover:text-amber-500 hover:bg-[#e3e3e3] active:text-white active:bg-[hsl(224, 98%, 58%)]" :to="{ name: 'DashboardFitnessRecord' }">
              <AppIconRecord />
              Fitness record
            </router-link>
          </li>
          <li @click="closeSideBarNav" id="mysubscription-link-mobile" class="my-1">
            <router-link class="flex items-center overflow-hidden whitespace-pre p-2 rounded-lg text-slate-500 gap-3 transition-all hover:text-amber-500 hover:bg-[#e3e3e3] active:text-white active:bg-[hsl(224, 98%, 58%)]" :to="{ name: 'DashboardSubscription' }">
              <AppIconSubscription />
              My Subscription
            </router-link>
          </li>
        </ul>
        <hr class="my-3" />
        <ul>
          <li @click="closeSideBarNav" id="classes-link-mobile" class="my-1">
            <router-link class="flex items-center overflow-hidden whitespace-pre p-2 rounded-lg text-slate-500 gap-3 transition-all hover:text-amber-500 hover:bg-[#e3e3e3] active:text-white active:bg-[hsl(224, 98%, 58%)] disabled" to="/classes">
              <AppIconClasses />
              Classes
            </router-link>
          </li>
          <li @click="closeSideBarNav" id="settings-link-mobile" class="my-1">
            <router-link class="flex items-center overflow-hidden whitespace-pre p-2 rounded-lg text-slate-500 gap-3 transition-all hover:text-amber-500 hover:bg-[#e3e3e3] active:text-white active:bg-[hsl(224, 98%, 58%)]" :to="{ name: 'DashboardSettings' }">
              <AppIconSetting />
              Settings
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- logout -->
      <div class="logout-btn">
        <div @click="logout" class="link my-1 hover:cursor-pointer">
          <p class="flex items-center overflow-hidden whitespace-pre p-2 rounded-lg text-slate-500 gap-3 transition-all hover:text-amber-500 hover:bg-[#e3e3e3] active:text-white active:bg-[hsl(224, 98%, 58%)]">
            <AppIconLogout />
            Logout
          </p>
        </div>
      </div>
    </div>
    
    <!-- main page -->
    <div v-if="isDashboard" class="page p-6 flex-1 flex flex-col lg:flex-row gap-4 max-h-screen">
      <div class="main flex-1 overflow-y-visible lg:overflow-y-scroll">
        <AlertBanner />
        <slot></slot>
      </div>

      <div class="sub-main flex flex-col w-full lg:w-64 text-white bg-zinc-800 rounded-xl p-3">
        <div class="flex-1">
          <slot name="display-image"></slot>
          <div v-if="showTitle" class="mb-2 md:mb-4 py-2 pb-3 md:py-0">
            <DashboardDivider
              class="text-base md:text-xl font-semibold"
              :name="title"
              textBackColor="bg-zinc-800"
              textColor="text-white"
            />
          </div>
          <slot name="inner-side-bar">Default content</slot>
        </div>

        <div class="hidden md:block">
          <!-- bottom logo -->
          <DashboardBaseLogo />
        </div>
      </div>

      <div class="block md:hidden">
        <!-- bottom logo -->
        <DashboardBaseLogo />
      </div>
    </div>

    <div v-else class="page p-6 flex-1 max-h-screen">
      <slot>Main Section</slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
}

.main::-webkit-scrollbar {
  display: none;
}

.disabled {
  color: #b4b4b495;
  pointer-events: none;
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
</style>