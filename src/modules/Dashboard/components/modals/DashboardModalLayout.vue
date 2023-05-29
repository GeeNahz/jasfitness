<script setup lang="ts">
import AppIconClose from '@/components/icons/IconClose.vue'

const emit = defineEmits(['close'])
interface Props {
  uid: string;
}
defineProps<Props>()

const close = (id: string) => {
  emit('close', id)
}
</script>

<template>
  <div class="backdrop">
    <div class="wrapper h-full w-full flex flex-col justify-center">
      <div
        class="z-10 mx-auto max-w-lg w-[300px] lg:w-[400px] bg-white rounded shadow-sm overflow-hidden"
      >
        <!-- modal header -->
        <div
          class="header container flex justify-between items-start pt-3 pb-2 lg:pb-3"
        >
          <div>
            <h2
              class="font-semibold font-inter text-sm md:text-base xl:text-lg tracking-wide capitalize"
            >
              <slot name="header">Modal Header</slot>
            </h2>
            <p
              class="font-medium text-xs xl:text-sm tracking-tight text-gray-400"
            >
              <slot name="header-description"></slot>
            </p>
          </div>
          <div
            @click="close(uid)"
            class="close-btn border-[1px] border-slate-600 w-max rounded-full hover:bg-slate-200 duration-200 ease-out hover:cursor-pointer"
          >
            <AppIconClose />
          </div>
        </div>
        <!-- modal content -->
        <div
          class="body container pb-2 lg:pb-3 border-b max-h-[796px] sm:max-h-max overflow-y-auto overscroll-auto"
        >
          <slot name="content">
            <p>Modal Content</p>
          </slot>
        </div>
        <!-- modal actions -->
        <div class="actions container pb-2 lg:pb-3">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

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
