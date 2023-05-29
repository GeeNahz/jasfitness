<script setup lang="ts">
import { computed } from "vue"
import { storeToRefs } from "pinia";

import { useTriggerFreezeAlert } from "@/composables/triggerFreezedAlert"
import { useDashboardStore } from "../stores/dashboard";

const currentYear = computed(() => new Date().getFullYear())
const currentMonth = computed(() => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  return months[new Date().getMonth()]
})

const dashboardStore = useDashboardStore();
const { dashboardBase: dashboardHome } = storeToRefs(dashboardStore);


let res = await dashboardStore.dashboard_home();
useTriggerFreezeAlert({
  freezeObject: res
})
</script>

<template>
  <div
    class="flex gap-1 xl:gap-0 w-full justify-between capitalize text-center px-3 py-3 xl:px-10 md:py-4"
  >
    <div class="item">
      <p class="text-xs md:text-base">
        <span class="hidden xl:inline">total</span> in {{ currentYear }}
      </p>
      <p class="text-base md:text-lg xl:text-3xl font-semibold">
        {{ dashboardHome?.year_total }}
        <span class="text-xs xl:text-base text-gray-400"> days </span>
      </p>
      <!-- <p class="text-xs md:text-base">days at the gym</p> -->
    </div>
    <div class="item">
      <p class="text-xs md:text-base">
        <span class="hidden xl:inline">total</span> in {{ currentMonth }}
      </p>
      <p class="text-base md:text-lg xl:text-3xl font-semibold">
        {{ dashboardHome?.month_total }}
        <span class="text-xs xl:text-base text-gray-400"> days </span>
      </p>
      <!-- <p class="text-xs md:text-base">days at the gym</p> -->
    </div>
    <div class="item">
      <p class="text-xs md:text-base flex justify-center items-center gap-2">
        average <span class="hidden xl:inline">engagement</span> time
      </p>
      <p class="text-base md:text-lg xl:text-3xl font-semibold">
        {{ dashboardHome?.average }}
        <span class="lowercase text-sm xl:text-lg">hr(s)</span>
        <span class="hidden xl:inline xl:text-base text-gray-400">
          attendance
        </span>
      </p>
      <!-- <p class="text-xs md:text-base">attendance</p> -->
    </div>
  </div>
</template>
