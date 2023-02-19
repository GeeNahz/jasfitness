<template>
  <div
    v-if="usernameSearchModal"
    class="backdrop fixed h-full w-full bg-gray-800 bg-opacity-70 z-30"
  >
    <SearchUsername v-if="usernameSearchModal" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import SearchUsername from './SearchUsername.vue'

const store = useStore()
const usernameSearchModal = computed(
  () => store.state.landingpage.modals.usernameSearch.open
)
</script>

<style></style>
