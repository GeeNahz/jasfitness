<template>
  <div class="relative border my-2 md:my-4 w-full" :class="[lineColor]">
    <p
      class="absolute -top-3 left-[50%] -translate-x-[50%] rounded-full px-3"
      :class="[textColor, textBackColor]"
    >
      {{ name }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: 'Divider'
  },
  textColor: {
    type: String,
    default: 'text-black'
  },
  textBackColor: {
    type: String,
    default: 'bg-white'
  },
  lineColor: {
    type: String,
    default: 'border-black'
  }
})
</script>

<style lang="scss" scoped></style>
