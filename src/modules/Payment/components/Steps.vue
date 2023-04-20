<template>
  <div class="flex">
    <div v-for="(item, index) in steps" :key="index" class="flex items-center">
      <div class="flex flex-col items-center">
        <div
          @click="$emit('switchPage', index)"
          class="circle h-7 md:h-10 w-7 md:w-10 rounded-full grid place-items-center hover:cursor-pointer"
          :class="statusColorScheme(item.step.status)"
        >
          <p class="font-semibold text-sm md:text-xl">{{ index + 1 }}</p>
        </div>
        <p
          class="text-gray-400 text-[10px] md:text-xs text-center mt-1 md:mt-2 w-16 md:w-20"
          :class="statusColorSchemeText(item.step.status)"
        >
          {{ item.step.name }}
        </p>
      </div>
      <hr
        v-if="showDivider(index)"
        class="divider w-16 md:w-24 h-1 mx-0 md:mx-2 border-2 border-gray-500 -translate-y-2 md:-translate-y-3"
      />
    </div>
  </div>
</template>

<script setup>
import { defineComponent, computed } from 'vue'
const props = defineProps({
  steps: {
    type: Array,
    default: () => []
  }
})

const showDivider = computed(() => {
  return (index) => props.steps.length > 1 && index !== props.steps.length - 1
})

const statusColorScheme = computed(() => {
  return (status) => {
    if (status === 'current') {
      return 'bg-slate-300 text-slate-700 shadow-sm'
    } else if (status === 'pending') {
      return 'bg-slate-300 text-slate-400'
    } else if (status === 'complete') {
      return 'bg-teal-400 text-gray-100'
    }
    // bg-[#BF9128] // JF gold
  }
})

const statusColorSchemeText = computed(() => {
  return (status) => {
    if (status === 'current') {
      return 'text-slate-700'
    } else if (status === 'pending') {
      return 'text-gray-300'
    } else if (status === 'complete') {
      return 'text-slate-500'
    }
  }
})

defineComponent({
  name: 'StepsComponent'
})
</script>