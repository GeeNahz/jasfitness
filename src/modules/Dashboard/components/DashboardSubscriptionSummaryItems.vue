<template>
  <div class="item">
    <p class="text-xs md:text-base">
      <span class="hidden xl:inline">Subscription</span> type
    </p>
    <p class="text-base md:text-lg xl:text-3xl font-semibold">
      {{ dashboardSub.sub_plan }}
    </p>
  </div>
  <div class="item">
    <p class="text-xs md:text-base">
      <span class="hidden xl:inline">Subscription</span> duration
    </p>
    <p class="text-base md:text-lg xl:text-3xl font-semibold">
      {{ dashboardSub.sub_status }}
      <span class="text-xs xl:text-base text-gray-400 lowercase">
        month(s)
      </span>
    </p>
  </div>
  <div class="item">
    <p class="text-xs md:text-base">start date</p>
    <p class="text-base md:text-lg xl:text-3xl font-semibold">
      {{ startDateConverter(dashboardSub.start_date) }}
      <!-- <span class="text-xs text-gray-400 md:text-base">sept</span> -->
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { useTimeConverter } from '@/composables/useConverter.js'

const { timestampToFullDate } = useTimeConverter()
const startDateConverter = (timestamp) => {
  return timestampToFullDate(timestamp)
}

const store = useStore()
const dashboardSub = computed(() =>
  store.state.dashboard.dashboardSubscription
    ? store.state.dashboard.dashboardSubscription
    : {}
)

try {
  await store.dispatch('dashboard/dashboard_subscription')
} catch (error) {
  console.log(error)
}
</script>
