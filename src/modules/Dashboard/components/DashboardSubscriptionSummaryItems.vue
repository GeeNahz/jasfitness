<template>
  <div class="item">
    <p class="text-xs md:text-base">Subscription type</p>
    <p class="text-xl md:text-3xl font-semibold">
      {{ dashboardHome.sub_plan }}
    </p>
  </div>
  <div class="item">
    <p class="text-xs md:text-base">Subscription status</p>
    <p class="text-xl md:text-3xl font-semibold">
      {{ dashboardHome.sub_status }}
      <!-- <span class="text-xs md:text-base text-gray-500"> days</span> -->
    </p>
  </div>
  <div class="item">
    <p class="text-xs md:text-base">start date</p>
    <p class="text-xl md:text-3xl font-semibold">
      15<span class="text-xs text-gray-500 md:text-base">sept</span>
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

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
