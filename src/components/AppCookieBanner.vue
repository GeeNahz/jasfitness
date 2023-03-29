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
        <button class="btn btn-warning" @click="okBannerClicked">OK</button>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, inject, defineComponent } from 'vue'
import useCookies from '@/composables/cookies.js'

export default defineComponent({
  setup() {
    const gtag = inject('gtag')

    const { showBanner, okClicked } = useCookies({ gtag: gtag })

    const displayBanner = ref(false)
    const okBannerClicked = () => {
      displayBanner.value = false
      okClicked()
    }

    if (showBanner.value) {
      setTimeout(() => {
        displayBanner.value = true
      }, 10000)
    }

    return { displayBanner, okBannerClicked, showBanner }
  }
})
</script>

<style scoped lang="scss">
// cookies banner template
.banner-container {
  @apply fixed bottom-0 left-0 right-0 text-sm font-normal p-4 bg-[#fefefe] w-full shadow z-20 border-t flex justify-center;

  & .banner-wrapper {
    @apply flex items-start md:items-center gap-3;
    & .btn {
      @apply py-1 px-3 md:px-5 text-sm md:text-base font-inter font-medium rounded-sm text-white;
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
