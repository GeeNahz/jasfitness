<script setup lang="ts">
import AppProgressbar from "@/components/custom/AppProgressbar.vue";

</script>
<template>
  <div>
    <AppProgressbar :progress="0.8" :height="150" :width="300" :is-full-circle="false" />
  </div>
</template>
<style scoped></style>