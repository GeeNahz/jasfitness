<template>
  <FormContainer />
</template>

<script setup>
import FormContainer from '../components/FormContainer.vue'
</script>

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
