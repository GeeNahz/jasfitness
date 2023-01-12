<template>
  <div class="w-full">
    <RadialProgressBar
      :diameter="diameter"
      :completed-steps="Number(completedSteps)"
      :total-steps="totalSteps"
      :strokeWidth="strokeWidth"
      :innerStrokeWidth="strokeWidth"
      innerStrokeColor="white"
      :startColor="strokeColor"
      :stopColor="strokeColor"
      :animateSpeed="0"
    >
      <!-- Your inner content here -->
      <slot>
        <div
          class="uppercase flex flex-col items-center justify-center font-semibold"
        >
          <p class="text-2xl md:text-4xl">{{ completedSteps }}%</p>
          <p class="text-xs md:text-sm font-light md:font-semibold">
            Completed
          </p>
        </div>
      </slot>
    </RadialProgressBar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RadialProgressBar from 'vue3-radial-progress'

defineProps({
  completedSteps: {
    type: Number,
    default: 0
  },
  strokeWidth: {
    type: Number,
    default: 20
  },
  strokeColor: {
    type: String,
    required: true
  },
  diameter: {
    type: Number,
    default: 200
  },
  fullCircle: {
    type: Boolean,
    default: true
  }
})
const totalSteps = ref(100)
</script>

<style scoped></style>
