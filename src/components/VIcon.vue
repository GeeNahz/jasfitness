<template>
  <keep-alive>
    <component :is="icon" />
  </keep-alive>
</template>

<script setup>
defineProps(['icon'])
</script>
