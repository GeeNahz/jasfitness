<template>
  <div class="backdrop">
    <div class="wrapper h-full w-full flex flex-col justify-center">
      <div
        class="z-10 mx-auto max-w-lg min-w-[300px] bg-white border-t-4 border-yellow-500 rounded shadow-sm overflow-hidden"
      >
        <div
          class="header container flex justify-between items-center border-b py-3"
        >
          <h2 class="font-semibold font-inter text-2xl tracking-wide uppercase">
            <slot name="header">Modal Header</slot>
          </h2>
          <div
            @click="close(uid)"
            class="close-btn border-[1px] border-slate-600 w-max rounded-full hover:bg-slate-200 duration-200 ease-out hover:cursor-pointer"
          >
            <AppIconClose />
          </div>
        </div>
        <div class="body container py-3">
          <slot name="content">
            <p>Modal Content</p>
          </slot>
        </div>
        <div class="default-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import AppIconClose from '@/components/AppIconClose.vue'

const emit = defineEmits(['close'])
defineProps({
  uid: {
    type: [String, Number],
    default: 0
  }
})

const close = (id) => {
  emit('close', id)
}
</script>

<style scoped>
.backdrop {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 100;
}
.backdrop::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  filter: blur(2px) grayscale(0.6);
}
.wrapper {
  position: fixed;
  z-index: 100;
}
</style>
