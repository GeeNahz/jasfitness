<template>
  <div
    class="flex gap-1 xl:gap-0 w-full justify-between capitalize text-center px-3 py-2 xl:px-10 md:py-4"
  >
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
      <p
        class="text-base md:text-lg xl:text-3xl font-semibold"
        :class="{ 'text-red-400': dashboardSub.is_expired }"
      >
        {{
          dashboardSub.is_expired
            ? 'Expired'
            : startDateConverter(dashboardSub.start_date)
        }}
        <!-- <span class="text-xs text-gray-400 md:text-base">sept</span> -->
      </p>
    </div>
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
    : false
)

if (!dashboardSub.value) {
  try {
    await store.dispatch('dashboard/dashboard_subscription')
  } catch {
    const message =
      'Something went wrong while fetching subscription records. Refresh the browser to try fix it.'
    store.dispatch('landingpage/error', { message, timeout: 3000 })
  }
}
</script>
