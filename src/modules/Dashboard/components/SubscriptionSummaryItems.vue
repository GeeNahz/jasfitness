<script setup lang="ts">
import { useTimeConverter } from '@/composables/converter.js'
import { useTriggerFreezeAlert } from '@/composables/triggerFreezedAlert.js'
import { useDashboardStore } from '../stores/dashboard'
import { storeToRefs } from 'pinia'

const { timestampToFullDate } = useTimeConverter()
const startDateConverter = (timestamp: string) => timestampToFullDate(timestamp);

const dashboardStore = useDashboardStore();
const { dashboardSub } = storeToRefs(dashboardStore);

if (!dashboardSub.value) {
  const { success, data } = await dashboardStore.dashboard_subscription();
  if (success.value) {
    useTriggerFreezeAlert({
      freezeObject: data.value
    });
  }
}
</script>

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
          {{ dashboardSub?.sub_plan }}
        </p>
      </div>
      <div class="item">
        <p class="text-xs">start date</p>
        <p
          class="text-sm md:text-lg font-semibold"
          :class="{
            'text-red-400': dashboardSub?.is_expired,
            'text-amber-500': dashboardSub?.start_date === 'Pending'
          }"
        >
          {{
            dashboardSub?.is_expired
              ? 'Expired'
              : dashboardSub?.start_date === 'Pending'
              ? 'Pending'
              : startDateConverter(dashboardSub?.start_date as string)
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
          {{ dashboardSub && dashboardSub.end_date }}
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
          {{ dashboardSub?.sub_status }}
          <span class="text-xs xl:text-base text-gray-400 lowercase">
            month(s)
          </span>
        </p>
      </div>
      <div class="item">
        <p class="text-xs">
          <!-- <span class="hidden xl:inline">Subscription</span> -->
          Freeze status
        </p>
        <p
          class="text-sm md:text-lg font-semibold"
          :class="{ 'text-blue-600': dashboardSub?.frozen }"
        >
          {{ dashboardSub && dashboardSub.frozen ? 'Frozen' : 'Not Frozen' }}
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
            'text-red-400': dashboardSub?.is_expired,
            'text-amber-500': dashboardSub?.start_date === 'Pending'
          }"
        >
          {{
            dashboardSub &&
            dashboardSub.freeze?.value + ' of ' + dashboardSub.freeze?.total
          }}
          <!-- <span class="text-xs text-gray-400 md:text-base">sept</span> -->
        </p>
      </div>
    </div>
  </div>
</template>