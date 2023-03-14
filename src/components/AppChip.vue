<template>
  <div
    @click="$emit('remove', chipElement.id)"
    data-te-chip-init
    data-te-ripple-init
    class="[word-wrap: break-word] my-[5px] mr-4 flex gap-2 h-[32px] cursor-pointer items-center justify-between rounded-[16px] border border-[#9fa6b2] bg-[transparent] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#303030] shadow-sm transition-[opacity] duration-300 ease-linear hover:border-[#9fa6b2] hover:!shadow-none w-max"
    data-te-ripple-color="dark"
  >
    <!-- dark:text-neutral-200 -->
    {{ chipElement.content }}

    <!-- <span
      data-te-chip-close
      class="float-right w-4 cursor-pointer pl-[8px] text-[16px] text-[#afafaf] opacity-[.53] transition-all duration-200 ease-in-out hover:text-[#8b8b8b] dark:text-neutral-400 dark:hover:text-neutral-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-3 w-3"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </span> -->

    <AppIconClose />
  </div>
</template>

<script setup>
import AppIconClose from './AppIconClose.vue'

defineProps({
  chipElement: { type: Object, required: true }
})
defineEmits(['remove'])
</script>
