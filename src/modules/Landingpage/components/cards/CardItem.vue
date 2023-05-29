<script setup lang="ts"></script>
<template>
  <div class="w-full shadow-md">
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div class="middle">
      <slot></slot>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
