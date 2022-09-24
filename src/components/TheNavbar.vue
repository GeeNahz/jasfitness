<template>
  <nav
    class="w-full h-24 py-7 px-16 fixed z-50 transition-all duration-300"
    :class="{ 'bg-white shadow-md': showWhiteBackground }"
  >
    <div class="flex justify-between h-full items-center capitalize">
      <!-- logo -->
      <router-link class="navbar-brand" :to="{ name: 'LandingPageHome' }">
        <img
          src="@/assets/icons/company-logo-medium.png"
          alt="logo"
          width="60"
          height="59"
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
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </nav>

  <!-- dropdown menu -->
  <div class="collapse fixed mt-24" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">Collapsed content</h5>
      <span class="text-muted">Toggleable via the navbar brand.</span>
      <!-- links -->
      <div class="my-4" :class="{ 'text-white': !showWhiteBackground }">
        <ul
          class="flex flex-col items-center justify-center gap-2 font-semibold text-xl"
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
          class="capitalize text-white flex items-center justify-center rounded-xl w-full px-4 py-2"
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
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showWhiteBackground = ref(false)

onMounted(() => {
  if (route.path.includes('auth')) {
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
nav a.router-link-exact-active .underline {
  width: 50%;
  margin: 0.16rem auto;
  border-bottom: 2px solid #daa520;
}

.btn-default {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
</style>
