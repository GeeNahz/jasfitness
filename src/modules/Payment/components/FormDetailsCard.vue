<template>
  <div
    @click="(e) => $emit('selected', item)"
    class="wrapper p-3 rounded min-w-fit w-full sm:w-56 min-h-min max-h-max shadow-sm"
  >
    <!-- <div>{{ item }}</div> -->
    <div class="flex gap-2 justify-between items-center mb-1 md:mb-2">
      <div>
        <p class="text-sm md:text-base text-[#303030]">
          {{ item.name }}
          <span class="text-[10px] md:text-xs text-[#AAAAAA]">
            ({{ item.billing }})
          </span>
        </p>
      </div>
      <FormDetailsCardIndicator :selected="item.selected" />
    </div>
    <div class="price">
      <p class="text-base md:text-xl font-semibold">₦{{ item.price }}</p>
    </div>
  </div>
</template>

<script setup>
import FormDetailsCardIndicator from './FormDetailsCardIndicator.vue'

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
