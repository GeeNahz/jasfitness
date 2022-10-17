<template>
  <div>
    <nav
      class="w-[100vw] h-20 md:h-24 py-7 pr-6 lg:px-16 fixed z-50 transition-all duration-300"
      :class="{ 'bg-white shadow-md': showWhiteBackground }"
    >
      <div class="flex justify-between h-full items-center capitalize">
        <!-- logo -->
        <router-link class="navbar-brand" :to="{ name: 'LandingPageHome' }">
          <img
            src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/JasFitnessCenter_CsBC8awdj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984852958"
            alt="logo"
            width="116"
            height="144"
          />
        </router-link>
        <!-- links -->
        <div
          class="hidden md:block"
          :class="{ 'text-white': !showWhiteBackground }"
        >
          <ul class="flex space-x-8 font-semibold text-xl">
            <li class="nav-item">
              <router-link class="nav-link" to="/about"
                >About us
                <div class="underline"></div>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/plans"
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
            class="capitalize"
            :to="{ name: 'LoginPage' }"
            :class="{ 'text-white': !showWhiteBackground }"
            >login</router-link
          >
          <router-link
            class="capitalize bg-zinc-900 text-white rounded-xl px-4 py-2"
            :to="{ name: 'SignupPage' }"
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
        class="fixed top-0 left-0 z-50 h-full w-full bg-[#1f1f1f] bg-opacity-50 rounded-br-xl shadow overflow-hidden"
      >
        <div class="inner bg-white h-full w-[75%] px-10 py-4">
          <!-- logo -->
          <div class="h-32 flex items-center justify-center">
            <router-link class="navbar-brand" :to="{ name: 'LandingPageHome' }">
              <img
                src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/JasFitnessCenter_CsBC8awdj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664984852958"
                alt="logo"
                width="146"
                height="144"
              />
            </router-link>
          </div>
          <!-- links -->
          <div class="my-10">
            <ul
              class="flex flex-col gap-10 items-center justify-center capitalize font-semibold text-xl"
            >
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'LandingPageHome' }"
                  >About us
                  <div class="underline"></div>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'LandingPageHome' }"
                  >plans
                  <div class="underline"></div>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'LandingPageHome' }">
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
              class="capitalize flex items-center justify-center rounded-xl w-full px-4 py-2"
              :to="{ name: 'LoginPage' }"
              >login</router-link
            >
            <router-link
              class="capitalize bg-zinc-900 flex items-center justify-center text-white rounded-xl w-full px-4 py-2"
              :to="{ name: 'SignupPage' }"
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

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const showNavbar = ref(false)

const hideOverflow = () => {
  document.querySelector('body').classList.toggle('overflow-y-hidden')
}
const toggleNavbar = () => {
  showNavbar.value = !showNavbar.value
  hideOverflow()
}
watch(showNavbar, () => {
  if (showNavbar.value) {
    hideOverflow()
  }
})

const route = useRoute()
const showWhiteBackground = ref(false)
onMounted(() => {
  showNavbar.value = false
  if (route.path !== '/' || document.body.getBoundingClientRect().top < -150) {
    showWhiteBackground.value = true
  } else {
    showWhiteBackground.value = false
  }
})

document.addEventListener('scroll', () => {
  let pageScrollPosition = document.body.getBoundingClientRect().top

  if (pageScrollPosition < -150) {
    showWhiteBackground.value = true
  } else {
    showWhiteBackground.value = false
  }
})
</script>

<style scoped>
nav ul a {
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
  transition: opacity 0.3s ease 0.3s;
}

.outer-navbar-enter-from,
.outer-navbar-leave-to {
  opacity: 0;
}

.outer-navbar-enter-active .inner,
.outer-navbar-leave-active .inner {
  transition: transform 0.5s ease 0.1s;
}
.outer-navbar-enter-from .inner,
.outer-navbar-leave-to .inner {
  transform: translateX(-300px);
}
</style>
