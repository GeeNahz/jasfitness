<template>
  <div
    class="flex items-start justify-start gap-2 max-w-sm border border-gray-500 p-4 rounded-xl"
  >
    <div id="icon" class="mt-2">
      <slot name="icon"></slot>
    </div>
    <div id="texts" class="space-y-2">
      <slot name="title"></slot>
      <slot name="description"></slot>
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
