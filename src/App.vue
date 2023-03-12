<template>
  <metainfo>
    <template v-slot:title="{ content }">
      {{ content ? `${content} | Jas-Fitness` : `Jas-Fitness` }}
    </template>
  </metainfo>
  <transition name="slide">
    <div class="banner-container">
      <p>
        We use 🍪 for more details check our policy
        <router-link to="cookiesPolicy">here</router-link>
      </p>
      <button @click="okBannerClicked">OK</button>
    </div>
  </transition>
  <div class="h-full">
    <router-view />
    <TheAlerts />
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import { inject } from 'vue'

import useCookies from './composables/cookies.js'

import TheAlerts from './components/TheAlerts.vue'

export default {
  setup() {
    useMeta({
      title: '',
      htmlAttrs: { lang: 'en', amp: true }
    })

    const gtag = inject('gtag')
    const { showBanner, okClicked } = useCookies({ gtag: gtag })
    const okBannerClicked = () => okClicked()

    return { showBanner, okBannerClicked }
  },
  components: { TheAlerts }
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
