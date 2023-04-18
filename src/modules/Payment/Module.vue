<template>
  <div class="min-h-[100vh] font-inter" :key="$route.path">
    <router-view :key="$route.path" />
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
defineComponent({
  name: 'PaymentModule'
})
</script>
