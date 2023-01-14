<template>
  <div class="w-full">
    <RadialProgressBar
      :diameter="diameter"
      :completed-steps="percentageBoundary(Number(completedSteps))"
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
        <div class="uppercase text-center">
          <div class="text-lg sm:text-xl lg:text-2xl font-semibold">
            {{ percentageBoundary(Number(completedSteps)) }}%
          </div>
          <div class="text-xs lg:text-sm font-light md:font-normal">
            Completed
          </div>
        </div>
      </slot>
    </RadialProgressBar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RadialProgressBar from 'vue3-radial-progress'
import { useRadialBar } from '@/composables/useRadialbarSettings'

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

const { percentageBoundary } = useRadialBar()
</script>

<style scoped></style>
