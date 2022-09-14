<template>
  <div
    class="flex items-start justify-start max-w-sm border border-gray-500 p-4 rounded-xl hover:scale-105 transition-transform"
    :class="[addMinWidth && minWidth, addIcon && 'gap-4']"
  >
    <div v-if="addIcon" id="icon" class="mt-2">
      <slot name="icon"></slot>
    </div>
    <div id="texts" class="space-y-2">
      <slot name="title"></slot>
      <slot name="description"></slot>
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script setup>
let minWidth = 'lg:min-w-[27rem]'
defineProps({
  addMinWidth: {
    type: Boolean,
    default: false
  },
  addIcon: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped></style>
