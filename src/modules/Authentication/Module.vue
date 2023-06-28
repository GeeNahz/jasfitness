<script setup lang="ts">
import { defineComponent } from 'vue';
import TheNavbar from '@/components/TheNavbar.vue'

defineComponent({ name: 'AuthenticationModule' });
</script>
<template>
  <div :key="$route.path" class="h-full w-full">
    <div class="sticky top-0 z-50">
      <TheNavbar />
    </div>
    <router-view :key="$route.path" />
  </div>
</template>