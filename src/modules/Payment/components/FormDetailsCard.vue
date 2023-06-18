<script setup lang="ts">
import FormDetailsCardIndicator from './FormDetailsCardIndicator.vue'

defineProps({
  plan: {
    type: Object,
    required: true
  }
})

function displayName(planName: string) {
  const name = planName.split("-");
  return name[0];
}
</script>

<template>
  <div
    @click="(e) => $emit('selected', plan)"
    class="wrapper p-3 rounded min-w-fit w-full sm:w-56 min-h-min max-h-max shadow-sm"
  >
    <!-- <div>{{ item }}</div> -->
    <div class="flex gap-2 justify-between items-center mb-2 md:mb-4">
      <div>
        <p class="text-sm md:text-base text-[#303030]">
          {{ displayName(plan.name) }}
          <span class="text-[10px] md:text-xs text-[#AAAAAA] block">
            ({{ plan.properties.instructor ? 'With instructor' : 'Without instructor' }})
          </span>
        </p>
      </div>
      <FormDetailsCardIndicator :selected="plan.selected" />
    </div>
    <div class="price">
      <p class="text-base md:text-xl font-semibold">
        ₦{{ plan.amount }}
        <span class="text-[10px] md:text-xs text-[#AAAAAA] font-light">
          ({{ plan.properties.duration }} month)
        </span>
      </p>
    </div>
  </div>
</template>