<template>
  <div class="min-h-[100vh] font-inter" :key="$route.path">
    <TheNavbar />
    <router-view :key="$route.path" />
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

import TheNavbar from '@/components/TheNavbar.vue'

defineComponent({
  name: 'PaymentModule'
})
</script>
