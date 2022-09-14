<template>
  <div class="fixed w-full bg-white z-40">
    <div class="relative">
      <nav
        class="flex justify-between items-center px-4 md:px-20 py-3 h-20 shadow"
      >
        <router-link
          to="/dashboard"
          class="logo h-9 w-9 bg-yellow-600 rounded text-white flex justify-center items-center"
        >
          JF
        </router-link>
        <button
          @click="toggleMenu"
          class="menu-btn p-0 lg:hidden float-right z-10 hover:scale-105 transition duration-100 ease-linear"
        >
          <i class="fa-solid fa-bars fa-2xl"></i>
        </button>
        <div class="hidden buttons lg:flex items-center space-x-6 uppercase">
          <ul class="flex items-center space-x-6 text-sm">
            <li
              class="flex items-center hover:-translate-y-1 h-10 transition duration-75 ease-out"
            >
              <router-link
                :to="{ name: 'LandingPageHome' }"
                class="h-full hover:text-yellow-500 flex items-center"
                >the community</router-link
              >
            </li>
            <li
              class="hover:-translate-y-1 h-10 transition duration-75 ease-out"
            >
              <router-link
                :to="{ name: 'DashboardHome' }"
                class="h-full hover:text-yellow-500 flex items-center"
                >dashboard</router-link
              >
            </li>
            <li
              class="hover:-translate-y-1 h-10 transition duration-75 ease-out"
            >
              <router-link
                :to="{ path: '/BaseView' }"
                class="h-full hover:text-yellow-500 flex items-center"
                >Fitness plans</router-link
              >
            </li>
            <li
              class="hover:-translate-y-1 h-10 transition duration-75 ease-out"
            >
              <router-link
                :to="{ path: '/BaseView' }"
                class="h-full hover:text-yellow-500 flex items-center"
                >classes</router-link
              >
            </li>
          </ul>
          <router-link
            :to="{ name: 'LoginPage' }"
            class="font-medium text-sm h-9 text-yellow-600 hover:text-yellow-500 border-t border-r border-b border-l border-yellow-600 hover:border-yellow-500 hover:-translate-y-1 transition duration-150 ease-out rounded px-4 py-2"
          >
            Login
          </router-link>
          <router-link
            :to="{ name: 'SignupPage' }"
            class="font-medium text-sm h-9 text-white bg-yellow-600 hover:bg-yellow-500 hover:-translate-y-1 transition duration-150 ease-out rounded px-4 py-2"
          >
            Join Today
          </router-link>
        </div>
      </nav>
    </div>
    <!-- sm menu -->
    <div
      v-if="showMenu"
      @click.self="toggleMenu"
      class="absolute h-[100vh] w-[100vw] bg-zinc-400 bg-opacity-70 z-20"
    >
      <div
        class="lex flex-col bg-white shadow float-left mb-2 px-4 py-4 space-y-2 md:justify-center text-center w-72 md:w-full capitalize rounded-b"
      >
        <ul class="flex flex-col items-center space-y-2 text-base text-start">
          <li
            class="flex md:justify-center w-full hover:text-yellow-500 h-12 transition duration-75 ease-linear"
          >
            <router-link
              :to="{ name: 'LandingPageHome' }"
              @click.self="toggleMenu"
              class="h-full hover:text-yellow-500 flex items-center"
              ><i class="fa-solid fa-users"></i>&nbsp;&nbsp;
              <p>the community</p></router-link
            >
          </li>
          <li
            class="flex md:justify-center w-full hover:text-yellow-500 h-12 transition duration-100 ease-linear"
          >
            <router-link
              :to="{ name: 'DashboardHome' }"
              @click.self="toggleMenu"
              class="h-full hover:text-yellow-500 flex items-center"
              ><i class="fa-solid fa-gauge"></i>&nbsp;&nbsp;
              <p>dashboard</p></router-link
            >
          </li>
          <li
            class="flex md:justify-center w-full hover:text-yellow-500 h-12 transition duration-100 ease-linear"
          >
            <router-link
              :to="{ path: '/BaseView' }"
              @click.self="toggleMenu"
              class="h-full hover:text-yellow-500 flex items-center"
              ><i class="fa-solid fa-newspaper"></i>&nbsp;&nbsp;
              <p>Fitness plans</p></router-link
            >
          </li>
          <li
            class="flex md:justify-center w-full hover:text-yellow-500 h-12 transition duration-100 ease-linear"
          >
            <router-link
              :to="{ path: '/BaseView' }"
              @click.self="toggleMenu"
              class="h-full hover:text-yellow-500 flex items-center"
              ><i class="fa-solid fa-chalkboard-user"></i>&nbsp;&nbsp;
              <p>classes</p></router-link
            >
          </li>
        </ul>
        <div class="btns flex flex-col md:items-center space-y-2">
          <router-link
            :to="{ name: 'LoginPage' }"
            @click.self="toggleMenu"
            class="font-medium text-base h-10 w-full md:w-44 text-yellow-600 hover:text-yellow-500 border-t border-r border-b border-l border-yellow-600 hover:border-yellow-500 transition duration-150 ease-out rounded px-4 py-2"
          >
            Login
          </router-link>
          <router-link
            :to="{ name: 'SignupPage' }"
            @click.self="toggleMenu"
            class="font-medium text-base h-10 w-full md:w-44 text-white bg-yellow-600 hover:bg-yellow-500 transition duration-150 ease-out rounded px-4 py-2"
          >
            Join Today
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>
