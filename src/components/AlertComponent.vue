<template>
  <div :class="alertColor" class="rounded-b px-4 py-3 shadow-md" role="alert">
    <div class="flex">
      <div class="py-1">
        <svg
          :class="iconColor"
          class="fill-current h-6 w-6 mr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
          />
        </svg>
      </div>
      <div>
        <p class="font-bold capitalize">{{ alertType }}</p>
        <p class="text-sm">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'

import { computed } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: 'Information Center'
  },
  alertType: {
    type: String,
    default: 'Info'
  }
})

const types = {
  warning: {
    body: ['bg-red-100', 'border-t-4', 'border-red-400', 'text-red-700'],
    icon: ['text-red-500']
  },
  success: {
    body: ['bg-teal-100 border-t-4 border-teal-500 text-teal-900'],
    icon: ['text-teal-500']
  },
  info: {
    body: ['bg-blue-100', 'border-t-4', 'border-blue-500', 'text-blue-700'],
    icon: ['text-blue-500']
  }
}

const alertColor = computed(() => {
  return types[props.alertType].body
})
const iconColor = computed(() => {
  return types[props.alertType].icon
})
</script>
