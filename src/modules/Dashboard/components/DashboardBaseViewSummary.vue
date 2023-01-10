<template>
  <div
    class="flex w-full justify-between capitalize text-center px-4 py-3 md:px-10 md:py-4"
  >
    <div class="item">
      <p class="text-xs md:text-base">total in {{ currentYear }}</p>
      <p class="text-xl md:text-3xl font-semibold">
        {{ dashboardHome.year_total }}
      </p>
      <p class="text-xs md:text-base">days at the gym</p>
    </div>
    <div class="item">
      <p class="text-xs md:text-base">total in {{ currentMonth }}</p>
      <p class="text-xl md:text-3xl font-semibold">
        {{ dashboardHome.month_total }}
      </p>
      <p class="text-xs md:text-base">days at the gym</p>
    </div>
    <div class="item">
      <p class="text-xs md:text-base flex justify-center items-center gap-2">
        average engagement time
        <AppIconInfo
          class="hover:cursor-pointer hover:bg-gray-300 duration-300 ease-in-out rounded-full"
        />
      </p>
      <p class="text-xl md:text-3xl font-semibold">
        {{ dashboardHome.average }}%
      </p>
      <p class="text-xs md:text-base">attendance</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import AppIconInfo from '@/components/AppIconInfo.vue'

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

const store = useStore()

const dashboardHome = computed(() =>
  store.state.dashboard.dashboardBase ? store.state.dashboard.dashboardBase : {}
)

try {
  await store.dispatch('dashboard/dashboard_home')
} catch (error) {
  console.log(error)
}
</script>
