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
import { useMeta } from 'vue-meta'
import TheAlerts from './components/TheAlerts.vue'

export default {
  setup() {
    useMeta({
      title: '',
      htmlAttrs: { lang: 'en', amp: true }
    })
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
