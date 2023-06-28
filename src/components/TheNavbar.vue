<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const showNavbar = ref<boolean>(false)

function toggleNavbar() {
  showNavbar.value = !showNavbar.value
}
watch(showNavbar, () => {
  if (showNavbar.value) {
    document.querySelector('body')?.classList.add('overflow-y-hidden')
  } else {
    document.querySelector('body')?.classList.remove('overflow-y-hidden')
  }
})

function changeNavbarColor() {
  if (route.name !== 'LandingPageHome' || isWhiteBg()) {
    showWhiteBackground.value = true
  } else {
    showWhiteBackground.value = false
  }
}
const route = useRoute();
watch(route, () => {
  changeNavbarColor();
}, { deep: true });

const isWhiteBg = () => document.body.getBoundingClientRect().top < -150
document.addEventListener('scroll', () => {
  if (route.name === 'LandingPageHome') {
    if (isWhiteBg()) {
      showWhiteBackground.value = true
    } else {
      showWhiteBackground.value = false
    }
  }
})

const showWhiteBackground = ref(false)

onMounted(() => {
  changeNavbarColor();
});
</script>

<template>
  <div>
    <nav
      class="w-[100vw] h-20 py-7 px-6 lg:px-16 z-50 transition-all duration-300 font-quicksand"
      :class="{ 'bg-white shadow-md': showWhiteBackground }"
    >
      <div class="flex justify-between h-full items-center capitalize">
        <!-- logo -->
        <router-link
          class="navbar-brand"
          :to="{ name: 'LandingPageHome' }"
        >
          <img
            src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/JasFitnessLogo_v2_POR6uaqVw?updatedAt=1683730306530"
            alt="logo"
            width="40"
            height=""
          />
        </router-link>
        <!-- links -->
        <div
          class="hidden md:block"
          :class="{ 'text-white': !showWhiteBackground }"
        >
          <ul class="flex space-x-8 font-semibold text-xl">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'AboutPage' }"
                >About us
                <div class="underline"></div>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'PlansPage' }"
                >plans
                <div class="underline"></div>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/community">
                our community
                <div class="underline"></div>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- login and signup -->
        <div
          class="auth-btns hidden md:flex items-center space-x-8 font-semibold text-xl"
        >
          <router-link
            class="capitalize hover:text-zinc-900"
            :to="{ name: 'LoginPage' }"
            :class="{ 'text-white': !showWhiteBackground }"
          >
            login
            <div class="underline"></div>
          </router-link>
          <router-link
            class="capitalize bg-[#ffb628] text-white rounded-xl px-4 py-2 hover:bg-[#fcad0f] transition"
            :to="{ name: 'PlansPage' }"
          >
            sign up
          </router-link>
        </div>
        <div class="md:hidden">
          <button @click="toggleNavbar" class="navbar-toggler" type="button">
            <svg
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
          </button>
        </div>
      </div>
    </nav>

    <!-- dropdown menu -->
    <transition name="outer-navbar">
      <div
        v-if="showNavbar"
        @click.self="toggleNavbar"
        class="fixed top-0 left-0 z-50 h-full w-full bg-[#1f1f1f] bg-opacity-50 rounded-br-xl shadow overflow-hidden font-quicksand"
      >
        <div class="inner bg-white h-full w-[75%] px-10 py-4">
          <!-- logo -->
          <div class="h-32 flex items-center justify-center">
            <router-link
              @click="toggleNavbar"
              class="navbar-brand"
              :to="{ name: 'LandingPageHome' }"
            >
              <img
                src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/JasFitnessLogo_v2_POR6uaqVw?updatedAt=1683730306530"
                alt="logo"
                width="50"
                height=""
              />
            </router-link>
          </div>
          <!-- links -->
          <div class="my-10">
            <ul
              class="flex flex-col gap-10 items-center justify-center capitalize font-semibold text-xl"
            >
              <li class="nav-item">
                <router-link
                  @click="toggleNavbar"
                  class="nav-link"
                  :to="{ name: 'AboutPage' }"
                >
                  About us
                  <div class="underline"></div>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  @click="toggleNavbar"
                  class="nav-link"
                  :to="{ name: 'PlansPage' }"
                >
                  plans
                  <div class="underline"></div>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  @click="toggleNavbar"
                  class="nav-link"
                  :to="{ name: 'CommunityPage' }"
                >
                  our community
                  <div class="underline"></div>
                </router-link>
              </li>
            </ul>
          </div>
          <div
            class="auth-btns flex flex-col items-start justify-center gap-2 font-semibold text-base"
          >
            <router-link
              @click="toggleNavbar"
              class="capitalize flex items-center justify-center rounded-xl w-full px-4 py-2"
              :to="{ name: 'LoginPage' }"
              >login</router-link
            >
            <router-link
              @click="toggleNavbar"
              class="capitalize bg-[#ffb628] flex items-center justify-center text-white rounded-xl w-full px-4 py-2"
              :to="{ name: 'PlansPage' }"
            >
              sign up
            </router-link>
          </div>

          <div
            @click="toggleNavbar"
            class="w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#1f1f1f] mx-auto my-16 font-bold hover:cursor-pointer"
          >
            X
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
nav a {
  position: relative;
}
nav a .underline {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  margin: 0.16rem auto;
}
nav a.router-link-exact-active .underline {
  border-bottom: 2px solid #daa520;
}
nav a:hover .underline {
  border-bottom: 2px solid #daa520;
}

.btn-default {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.outer-navbar-enter-active {
  transition: opacity 0.3s ease;
}
.outer-navbar-leave-active {
  transition: opacity 0.3s ease 0.1s;
}

.outer-navbar-enter-from,
.outer-navbar-leave-to {
  opacity: 0;
}

.outer-navbar-enter-active .inner,
.outer-navbar-leave-active .inner {
  transition: transform 0.3s ease-out;
}
.outer-navbar-enter-from .inner,
.outer-navbar-leave-to .inner {
  transform: translateX(-300px);
}
</style>
