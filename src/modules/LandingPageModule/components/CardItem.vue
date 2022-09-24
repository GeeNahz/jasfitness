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

<script setup></script>

<style lang="scss" scoped></style>
