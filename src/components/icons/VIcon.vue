<script setup lang="ts">
defineProps(['icon'])
</script>
<template>
  <keep-alive>
    <component :is="icon" />
  </keep-alive>
</template>