<template>
  <div>
    <RadialProgressBar
      :diameter="200"
      :completed-steps="completedSteps"
      :total-steps="totalSteps"
      :strokeWidth="20"
      :innerStrokeWidth="20"
      :startColor="strokeColor"
      :stopColor="strokeColor"
      :animateSpeed="0"
    >
      <!-- Your inner content here -->
      <div
        class="uppercase flex flex-col items-center justify-center font-semibold"
      >
        <p class="text-5xl">{{ completedSteps }}%</p>
        <p class="text-sm">Completed</p>
      </div>
    </RadialProgressBar>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import RadialProgressBar from 'vue3-radial-progress'

const props = defineProps({
  completedSteps: {
    type: Number,
    default: 100
  }
})

const strokeColor = ref('')
const totalSteps = ref(100)

onMounted(() => {
  if (props.completedSteps < 20) {
    strokeColor.value = 'red'
  } else if (props.completedSteps < 50) {
    strokeColor.value = 'orange'
  } else {
    strokeColor.value = 'lime'
  }
})
</script>

<style scoped></style>
