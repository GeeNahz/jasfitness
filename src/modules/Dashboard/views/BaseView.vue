<template>
  <div class="h-full">
    <LayoutView title="Members">
      <template #welcome-section>
        <!-- welcome text -->
        <div
          class="welcome-container container py-3 flex justify-between items-center"
        >
          <div class="welcome">
            <p class="text-2xl font-semibold">Hello <span>Bemshima</span>,</p>
            <p class="text-sm">Welcome back!</p>
          </div>
          <div>
            <button
              @click="resubscribeHandler"
              class="bg-yellow-600 px-3 md:px-4 py-2 text-white font-semibold md:w-full flex flex-col-reverse md:flex-row items-center md:space-x-2 rounded-xl hover:bg-yellow-500 active:bg-yellow-700"
            >
              <p class="hidden md:block">Resubscribe</p>
              <p class="block md:hidden text-xs">Re-Sub</p>
              <i class="fa-solid fa-arrows-rotate"></i>
            </button>
          </div>
        </div>
        <br />
        <!-- attendance summary -->
        <div
          class="relative attendance-summary-container border border-gray-300 rounded-xl md:mx-10 p-2 md:p-6"
        >
          <p
            class="absolute -top-4 left-4 text-sm md:text-base bg-white px-2 py-1"
          >
            Attendance Summary
          </p>
          <div
            class="flex w-full justify-between capitalize text-center md:px-10 py-4"
          >
            <div class="item">
              <p class="text-xs md:text-base">total in 2022</p>
              <p class="text-xl md:text-3xl font-semibold">195</p>
              <p class="text-xs md:text-base">days at the gym</p>
            </div>
            <div class="item">
              <p class="text-xs md:text-base">total in september</p>
              <p class="text-xl md:text-3xl font-semibold">13</p>
              <p class="text-xs md:text-base">days at the gym</p>
            </div>
            <div class="item">
              <p class="text-xs md:text-base">average</p>
              <p class="text-xl md:text-3xl font-semibold">95%</p>
              <p class="text-xs md:text-base">attendance</p>
            </div>
          </div>
        </div>
        <br />
        <!-- fitness record -->
        <div class="md:mx-10">
          <!-- divider -->
          <DashboardDivider
            class="text-sm md:text-base"
            name="My Fitness Record"
          />
          <div
            class="chart-container hover:scale-105 transition-transform duration-150 overflow-clip"
          >
            <div class="hidden md:block chart bg-gray-50 p-2 mt-4 rounded">
              <p class="float-right">{{ viewType }}</p>
              <!-- Insert toggle button here -->
              <DashboardChart />
            </div>
            <div class="md:hidden chart bg-gray-50 p-2 mt-4 rounded">
              <DashboardChart :height="200" />
            </div>
          </div>
        </div>
      </template>
      <template #inner-side-bar>
        <div>
          <ul
            class="grid grid-cols-2 gap-x-4 md:gap-x-0 gap-y-10 md:gap-y-4 md:flex md:flex-col items-center md:items-start space-y-0 md:space-y-10 mt-2 md:mt-4 pl-0 md:pl-10"
          >
            <li>
              <router-link :to="{ name: 'DashboardSubscription' }">
                <div class="flex items-center gap-2 md:gap-4">
                  <div class="icon">
                    <i class="fa-regular fa-square-check fa-2xl"></i>
                  </div>
                  <div class="">
                    <p class="text-xs md:text-lg font-semibold py-0">
                      Sub Status
                    </p>
                    <p class="text-xs md:text-sm font-light py-0">
                      3 Months 3 Days left
                    </p>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'DashboardSubscription' }">
                <div class="flex items-center gap-2 md:gap-4">
                  <div class="icon">
                    <i class="fa-regular fa-calendar-minus fa-2xl"></i>
                  </div>
                  <div class="">
                    <p class="text-xs md:text-lg font-semibold py-0">
                      Sub Plan
                    </p>
                    <p class="text-xs md:text-sm font-light py-0">
                      Odogwu (1 Year)
                    </p>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'DashboardSubscription' }">
                <div class="flex items-center gap-2 md:gap-4">
                  <div class="icon">
                    <i class="fa-regular fa-clock fa-2xl"></i>
                  </div>
                  <div class="">
                    <p class="text-xs md:text-lg font-semibold py-0">
                      Freeze Your Sub
                    </p>
                    <p class="text-xs md:text-sm font-light py-0">
                      4 Days Left
                    </p>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'DashboardSubscription' }">
                <div class="flex items-center gap-2 md:gap-4">
                  <div class="icon">
                    <i class="fa-regular fa-paper-plane fa-2xl"></i>
                  </div>
                  <div class="">
                    <p class="text-xs md:text-lg font-semibold py-0">
                      Share Your Plan
                    </p>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'DashboardSubscription' }">
                <div class="flex items-center gap-2 md:gap-4">
                  <div class="icon">
                    <i class="fa-regular fa-message fa-2xl"></i>
                  </div>
                  <div class="">
                    <p class="text-xs md:text-lg font-semibold py-0">
                      Feedback
                    </p>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </template>
    </LayoutView>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LayoutView from '../components/LayoutView.vue'
import DashboardChart from '../components/DashboardChartLine.vue'
import DashboardDivider from '../components/DashboardDivider.vue'

const viewType = ref('')

const resubscribeHandler = () => {
  try {
    console.log('Resubscribe')
  } catch (err) {
    console.log('error:', err)
  }
}
</script>

<style scoped>
a {
  transition: color 0.15s ease-in-out, border 0.15s ease-in-out;
}
a:hover {
  color: #ca9b42;
}

a.router-link-exact-active {
  color: #ca9b42;
  border-left: solid #ca9b42;
}
</style>
