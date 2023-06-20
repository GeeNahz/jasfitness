<script setup lang="ts">
import AppIconClose from './icons/IconClose.vue'

interface ChipObject {
  id: string | number;
  content: string;
  isActive?: boolean;
}

interface Props {
  chipElement: ChipObject;
  showCloseBtn?: boolean;
}

withDefaults(defineProps<Props>(), {
  showCloseBtn: true,
});
defineEmits(['remove'])
</script>

<template>
  <div
    @click="$emit('remove', chipElement.id)"
    data-te-chip-init
    data-te-ripple-init
    class="[word-wrap: break-word] my-[5px] mr-4 flex gap-2 h-[32px] cursor-pointer items-center justify-between rounded-[16px] border border-[#9fa6b2] bg-none py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#303030] shadow-sm transition-all duration-300 ease-linear hover:border-[#9fa6b2] hover:!shadow-none w-max"
    :class="{
      'bg-none bg-[#B48B4D] border-[#B48B4D] hover:border-[#B48B4D] text-white': chipElement.isActive,
    }"
    data-te-ripple-color="dark"
  >
    <!-- dark:text-neutral-200 -->
    {{ chipElement.content }}

    <AppIconClose v-if="showCloseBtn" />
  </div>
</template>