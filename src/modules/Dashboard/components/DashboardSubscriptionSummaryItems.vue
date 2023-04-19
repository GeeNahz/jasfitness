<template>
  <div class="wrapper px-3 py-2 xl:px-10 md:py-4">
    <div
      class="grid grid-cols-3 gap-1 xl:gap-0 w-full justify-between capitalize text-center px-0 py-2 xl:px-10 md:py-4"
    >
      <div class="item">
        <p class="text-xs">
          <span class="hidden xl:inline">Subscription</span> type
        </p>
        <p class="text-sm md:text-lg font-semibold">
          {{ dashboardSub.sub_plan }}
        </p>
      </div>
      <div class="item">
        <p class="text-xs">
          <!-- <span class="hidden xl:inline">Subscription</span> -->
          Freeze status
        </p>
        <p
          class="text-sm md:text-lg font-semibold"
          :class="{ 'text-blue-600': dashboardBase.freeze.value > 0 }"
        >
          {{
            dashboardBase && dashboardBase.freeze.value > 0
              ? 'Frozen'
              : 'Not Frozen'
          }}
          <!-- <span class="text-xs xl:text-base text-gray-400 lowercase">
            month(s)
          </span> -->
        </p>
      </div>
      <div class="item">
        <p class="text-xs">freeze duration</p>
        <p
          class="text-sm md:text-lg font-semibold"
          :class="{
            'text-red-400': dashboardSub.is_expired,
            'text-amber-500': dashboardSub.start_date === 'Pending'
          }"
        >
          {{
            dashboardBase &&
            dashboardBase.freeze.value + ' of ' + dashboardBase.freeze.total
          }}
          <!-- <span class="text-xs text-gray-400 md:text-base">sept</span> -->
        </p>
      </div>
    </div>
    <hr class="border-2 border-gray-400 my-2" />
    <div
      class="grid grid-cols-3 gap-1 xl:gap-0 w-full justify-between capitalize text-center px-0 py-2 xl:px-10 md:py-4"
    >
      <div class="item">
        <p class="text-xs">
          <span class="hidden xl:inline">Sub</span> Duration
        </p>
        <p class="text-sm md:text-lg font-semibold">
          {{ dashboardSub.sub_status }}
          <span class="text-xs xl:text-base text-gray-400 lowercase">
            month(s)
          </span>
        </p>
      </div>
      <div class="item">
        <p class="text-xs">start date</p>
        <p
          class="text-sm md:text-lg font-semibold"
          :class="{
            'text-red-400': dashboardSub.is_expired,
            'text-amber-500': dashboardSub.start_date === 'Pending'
          }"
        >
          {{
            dashboardSub.is_expired
              ? 'Expired'
              : dashboardSub.start_date === 'Pending'
              ? 'Pending'
              : startDateConverter(dashboardSub.start_date)
          }}
          <!-- <span class="text-xs text-gray-400 md:text-base">sept</span> -->
        </p>
      </div>
      <div class="item">
        <p class="text-xs">
          <!-- <span class="hidden xl:inline">Subscription</span> -->
          End Date
        </p>
        <p class="text-sm md:text-lg font-semibold">
          {{ dashboardBase && dashboardBase.sub_status }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { useTimeConverter } from '@/composables/useConverter.js'
import { useTriggerFreezeAlert } from '@/composables/triggerFreezedAlert.js'

const { timestampToFullDate } = useTimeConverter()
const startDateConverter = (timestamp) => {
  return timestampToFullDate(timestamp)
}

const store = useStore()
const dashboardBase = computed(() =>
  store.state.dashboard.dashboardBase
    ? store.state.dashboard.dashboardBase
    : false
)

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
if (!dashboardBase.value) {
  try {
    let res = await store.dispatch('dashboard/dashboard_home')
    useTriggerFreezeAlert({
      freezeObject: res
    })
  } catch (err) {
    store.dispatch('landingpage/error', {
      message: 'Unable to fetch user data'
    })
  }
}
</script>
