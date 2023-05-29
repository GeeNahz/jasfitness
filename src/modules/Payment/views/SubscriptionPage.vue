<script setup lang="ts">
import FormContainer from '../components/FormContainer.vue'
</script>

<template>
  <FormContainer />
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>