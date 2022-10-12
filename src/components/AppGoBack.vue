<template>
  <div>
    <span
      @click="goBack"
      class="h-10 font-medium text-sm text-gray-100 hover:text-gray-400 hover:cursor-pointer transition duration-75 ease-out"
      ><i class="far fa-arrow-alt-circle-left fa-xl"></i> Back</span
    >
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => router.back()
</script>
