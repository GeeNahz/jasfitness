<template>
  <div class="flex gap-4 h-full w-full p-4">
    <div class="main-body bg-white h-full w-4/5 rounded overflow-scroll">
      <slot name="welcome-section"></slot>
    </div>
    <!-- inner side bar -->
    <div class="bg-zinc-900 w-1/5 rounded relative py-16 px-3 text-white">
      <slot name="inner-side-bar"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
