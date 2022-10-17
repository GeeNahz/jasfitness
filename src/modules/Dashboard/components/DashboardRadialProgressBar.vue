<template>
  <div class="w-full">
    <RadialProgressBar
      :diameter="diameter"
      :completed-steps="completedSteps"
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
          <p class="text-3xl md:text-5xl">{{ completedSteps }}%</p>
          <p class="text-xs md:text-sm font-light md:font-semibold">
            Completed
          </p>
        </div>
      </slot>
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
  },
  strokeWidth: {
    type: Number,
    default: 20
  },
  diameter: {
    type: Number,
    default: 200
  }
})

const strokeColor = ref('')
const totalSteps = ref(100)
// const strokeWidth = ref(20)
// const diameter = ref(200)

// const onSmallScreen = computed(() => window.innerWidth < 1000)

// const changeScreenSize = (smallScreen) => {
//   if (smallScreen) {
//     strokeWidth.value = 10
//     diameter.value = 120
//   } else {
//     strokeWidth.value = 20
//     diameter.value = 200
//   }
// }

// watch(onSmallScreen, () => {
//   window.addEventListener('resize', changeScreenSize(onSmallScreen.value))
// })

onMounted(() => {
  if (props.completedSteps < 20) {
    strokeColor.value = 'red'
  } else if (props.completedSteps < 50) {
    strokeColor.value = 'orange'
  } else {
    strokeColor.value = '#70e000'
  }
})
</script>

<style scoped></style>
