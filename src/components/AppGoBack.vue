<script setup lang="ts">
import { useRouter } from "vue-router";

import AppIconArrowLeft from "./icons/AppIconArrowLeft.vue";

const router = useRouter();
const goBack = () => router.back();
</script>
<template>
  <div>
    <span
      @click="goBack"
      class="flex items-center gap-2 font-inter h-10 font-medium text-sm text-gray-100 hover:text-gray-400 hover:cursor-pointer transition duration-75 ease-out"
      ><AppIconArrowLeft /> Back</span
    >
  </div>
</template>