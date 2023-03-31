<template>
  <metainfo>
    <template v-slot:title="{ content }">
      {{ content ? `${content} | Jas-Fitness` : `Jas-Fitness` }}
    </template>
  </metainfo>
  <div class="h-full relative">
    <router-view />
    <AppCookieBanner />
    <AppPersonalizeCookies v-if="showCookiesPreferences" />
    <TheAlerts />
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import { provide, inject, ref } from 'vue'

import useCookies from './composables/cookies.js'

import TheAlerts from './components/TheAlerts.vue'
import AppCookieBanner from './components/AppCookieBanner.vue'
import AppPersonalizeCookies from './components/AppPersonalizeCookies.vue'

export default {
  setup() {
    useMeta({
      title: '',
      htmlAttrs: { lang: 'en', amp: true }
    })

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

    const showCookiesPreferences = ref(false)
    function toggleShowCookiesPreferences() {
      showCookiesPreferences.value = !showCookiesPreferences.value
    }
    provide('cookiesPreferences', { toggleShowCookiesPreferences })

    return { displayBanner, okBannerClicked, showCookiesPreferences }
  },
  components: { TheAlerts, AppCookieBanner, AppPersonalizeCookies }
}
</script>

<style>
html,
body {
  height: 100%;
  font-size: 16px;
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
.banner-container {
  position: fixed;
  padding: 1rem;
  margin: 0 auto;
  background: #fefefe;
  border-radius: 0.2rem;
  box-shadow: 0 4px 5px 5px rgba(0, 0, 0, 0.05),
    0 4px 10px 5px rgba(150, 150, 150, 0.1);
  width: max-content;

  bottom: 5px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 20;
}

.slide-enter-active,
.slide-leave-active {
  transition: 1s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}

@media screen and (min-width: 640px) {
  .banner-container {
    width: 500px;
  }
}
</style>
