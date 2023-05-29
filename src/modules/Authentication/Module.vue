<script setup lang="ts">
import { defineComponent } from 'vue';
import TheNavbar from '@/components/TheNavbar.vue'

defineComponent({ name: 'AuthenticationModule' });
</script>
<template>
  <div :key="$route.path">
    <TheNavbar />
    <router-view :key="$route.path" />
  </div>
</template>