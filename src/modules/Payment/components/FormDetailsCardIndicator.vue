<script setup lang="ts">
defineProps({
  selected: {
    type: Boolean,
    defualt: false
  }
})
</script>

<template>
  <div
    class="h-5 md:h-6 w-5 md:w-6 rounded-full bg-amber-400 grid place-items-center"
  >
    <div
      class="h-4 md:h-5 w-4 md:w-5 rounded-full border-2 border-white"
      :class="{ 'bg-amber-400': selected, 'bg-white': !selected }"
    ></div>
  </div>
</template>