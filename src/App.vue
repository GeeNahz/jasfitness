<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | Jas-Fitness` : `Jas-Fitness`
    }}</template>
  </metainfo>
  <div class="h-full">
    <router-view />
    <TheAlerts />
  </div>
</template>

<script>
import { provide, ref } from 'vue'
import { useMeta } from 'vue-meta'
import TheAlerts from './components/TheAlerts.vue'

export default {
  setup() {
    useMeta({
      title: '',
      htmlAttrs: { lang: 'en', amp: true }
    })

    const isReady = ref(false)
    function toggleIsReady(newState) {
      setTimeout(() => {
        isReady.value = newState
      }, 0)
    }
    provide('isComponentReady', { isReady, toggleIsReady })
    const isNavbarOpen = ref(false)
    function toggleIsNavbarOpen(newState) {
      isNavbarOpen.value = newState
    }
    provide('navbar', { isNavbarOpen, toggleIsNavbarOpen })
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
