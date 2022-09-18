<template>
  <div
    :class="[addMinWidth && minWidth, addIcon && 'gap-4']"
    class="sub-card flex flex-col md:flex-row items-center md:items-start justify-start max-w-sm border border-gray-500 p-3 rounded-xl"
  >
    <div v-if="addIcon" id="icon" class="mt-2">
      <slot name="icon"></slot>
    </div>
    <div id="texts" class="space-y-2 w-full">
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

<style scoped>
div.sub-card {
  transition: transform 0.2s ease-out;
}
div.sub-card:hover {
  transform: translateY(-0.16rem);
}
</style>
