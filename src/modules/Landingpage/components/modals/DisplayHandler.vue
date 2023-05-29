<script setup lang="ts">
import { useAlertStore } from '@/stores/alerts';

import SearchUsername from './SearchUsername.vue'

const store = useAlertStore()
</script>
<template>
  <div
    v-if="store.modals.open"
    class="backdrop fixed h-full w-full bg-gray-800 bg-opacity-70 z-30"
  >
    <SearchUsername v-if="store.modals.usernameSearch.open" />
  </div>
</template>
<style></style>
