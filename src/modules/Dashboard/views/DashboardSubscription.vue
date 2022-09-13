<template>
  <div class="container">
    <app-go-back />
    <p>I am Subscription page {{ topic }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppGoBack from '@/components/AppGoBack.vue'

const topic = ref('Main Event')
</script>
