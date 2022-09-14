<template>
  <div class="h-full">
    <LayoutView :showTitle="false">
      <template #welcome-section>
        <!-- welcome text -->
        <div
          class="welcome-container container py-3 flex justify-between items-center"
        >
          <div class="welcome">
            <p class="text-2xl font-semibold">Fitness Record...</p>
            <p class="text-sm">Consistency over motivation!!!</p>
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
        <!-- goals -->
        <div
          class="relative goals-container border border-gray-300 rounded-xl w-96 ml-10 p-6"
        >
          <p class="absolute -top-4 left-4 bg-white px-2 py-1">Goals</p>
          <p class="text-gray-500 font-light text-xl">
            My Goal is simple, I want to loose weight and turn this Fat into
            muscles.
          </p>
        </div>
        <!-- fitness record -->
        <div class="mx-10">
          <!-- divider -->
          <DashboardDivider name="Fitness Report" />
          <div class="chart-container">
            <div class="chart bg-gray-50 p-2 mt-4 rounded">
              <DashboardChart />
            </div>
          </div>
          <DashboardDivider name="Fitness Activities" />
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
import DashboardDivider from '../components/DashboardDivider.vue'
import LayoutView from '../components/LayoutView.vue'
</script>

<style scoped></style>
