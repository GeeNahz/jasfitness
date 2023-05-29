<script setup lang="ts">
import { ref, inject, defineComponent, watch } from 'vue'
import useCookies from '@/composables/cookies.js'

const gtag = inject('gtag')

const { showBanner, okClicked, allowCookies } = useCookies({ gtag: gtag })

const displayBanner = ref(false)
const okBannerClicked = () => {
  displayBanner.value = false
  okClicked()
}

if (showBanner.value) {
  setTimeout(() => {
    displayBanner.value = true
  }, 2000)
}

// const { toggleShowCookiesPreferences } = inject('cookiesPreferences')
watch(allowCookies, () => {
  if (allowCookies.value) {
    displayBanner.value = false
  }
})

defineComponent({ name: "AppCookieBanner" })
</script>

<template>
  <transition name="slide">
    <div v-if="displayBanner" class="banner-container" style="width: 100%">
      <div class="banner-wrapper">
        <p class="mb-3">
          We use cookies🍪 to enhance your browsing experience and analyze our
          traffic.
          <!-- <router-link
            class="link text-blue-600 visited:text-purple-600 underline underline-offset-4"
            to="/cookiesPolicy"
            target="_blank"
            >For more details check our policy here</router-link
          > -->
        </p>
        <button
          class="btn btn-warning text-white px-12"
          @click="okBannerClicked"
        >
          OK
        </button>
        <!-- <button
          class="btn btn-outline-dark whitespace-nowrap px-1"
          @click="toggleShowCookiesPreferences"
        >
          Cookie Settings
        </button> -->
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
// cookies banner template
.banner-container {
  @apply fixed bottom-0 left-0 right-0 text-sm font-normal p-4 bg-[#fefefe] w-full shadow z-20 border-t flex justify-center;

  & .banner-wrapper {
    @apply flex flex-col sm:flex-row items-start md:items-center gap-3;
    & .btn {
      @apply py-1 text-sm md:text-base font-inter font-medium rounded-sm;
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: 1s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
