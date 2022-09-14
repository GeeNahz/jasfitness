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
          <div class="rounded">
            <FormKit
              @click.self="resubscribeHandler"
              type="button"
              label="Resubscribe"
              class="w-full flex"
            >
              <p class="inline mr-3">Resubscribe</p>
              <i class="fa-solid fa-arrows-rotate"></i>
            </FormKit>
          </div>
        </div>
        <br />
        <!-- attendance summary -->
        <div
          class="relative attendance-summary-container border border-gray-300 rounded-xl mx-10 p-6"
        >
          <p class="absolute -top-4 left-4 bg-white px-2 py-1">
            Attendance Summary
          </p>
          <div
            class="flex w-full justify-between capitalize text-center px-10 py-4"
          >
            <div class="item">
              <p>total in 2022</p>
              <p class="text-3xl font-semibold">195</p>
              <p>days at the gym</p>
            </div>
            <div class="item">
              <p>total in september</p>
              <p class="text-3xl font-semibold">13</p>
              <p>days at the gym</p>
            </div>
            <div class="item">
              <p>average</p>
              <p class="text-3xl font-semibold">95%</p>
              <p>attendance</p>
            </div>
          </div>
        </div>
        <br />
        <!-- fitness record -->
        <div class="mx-10">
          <!-- divider -->
          <div class="relative border mb-4 mx-auto w-11/12">
            <p
              class="absolute -top-3 left-[50%] -translate-x-[50%] bg-white rounded-full px-3"
            >
              My Fitness Record
            </p>
          </div>
          <div class="chart-container">
            <div class="chart bg-gray-50 p-2 mt-4 rounded">
              <DashboardChart />
            </div>
          </div>
        </div>
      </template>
      <template #inner-side-bar>
        <div>
          <ul class="space-y-10 mt-4 pl-10">
            <li>
              <div class="flex items-center gap-4">
                <div class="icon">
                  <i class="fa-regular fa-square-check fa-2xl"></i>
                </div>
                <div class="">
                  <p class="text-lg font-semibold py-0">Sub Status</p>
                  <p class="text-sm font-light py-0">3 Months 3 Days left</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-4">
                <div class="icon">
                  <i class="fa-regular fa-calendar-minus fa-2xl"></i>
                </div>
                <div class="">
                  <p class="text-lg font-semibold py-0">Sub Plan</p>
                  <p class="text-sm font-light py-0">Odogwu (1 Year)</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-4">
                <div class="icon">
                  <i class="fa-regular fa-clock fa-2xl"></i>
                </div>
                <div class="">
                  <p class="text-lg font-semibold py-0">Freeze Your Sub</p>
                  <p class="text-sm font-light py-0">4 Days Left</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-4">
                <div class="icon">
                  <i class="fa-regular fa-paper-plane fa-2xl"></i>
                </div>
                <div class="">
                  <p class="text-lg font-semibold py-0">Share Your Plan</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center gap-4">
                <div class="icon">
                  <i class="fa-regular fa-message fa-2xl"></i>
                </div>
                <div class="">
                  <p class="text-lg font-semibold py-0">Feedback</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </template>
    </LayoutView>
  </div>
</template>

<script setup>
import LayoutView from '../components/LayoutView.vue'
import DashboardChart from '../components/DashboardChart.vue'

const resubscribeHandler = () => {
  try {
    console.log('Resubscribe')
  } catch (err) {
    console.log('error:', err)
  }
}
</script>

<style scoped></style>
