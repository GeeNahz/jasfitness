<script setup lang="ts">
import { ref } from 'vue'
// import RadialProgressBar from 'vue3-radial-progress'
import { useRadialBar } from '@/composables/radialbarSettings'

const props = defineProps({
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

function halfOrFullCirlce(value: any) {
  if (!props.fullCircle) {
    return value / 2
  }
  return value
}
</script>

<template>
  <div class="w-full">
    <!-- <RadialProgressBar
      :diameter="diameter"
      :completed-steps="
        halfOrFullCirlce(percentageBoundary(Number(completedSteps)))
      "
      :total-steps="totalSteps"
      :strokeWidth="strokeWidth"
      :innerStrokeWidth="strokeWidth"
      innerStrokeColor="white"
      :startColor="strokeColor"
      :stopColor="strokeColor"
      :animateSpeed="0"
    >
      // comment this out Your inner content here
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
    </RadialProgressBar> -->
  </div>
</template>