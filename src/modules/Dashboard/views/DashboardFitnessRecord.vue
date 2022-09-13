<template>
  <div>
    <AppGoBack />
    I am Fitness Record page
    <div id="body" class="flex flex-row items-center w-full h-full">
      <div
        class="w-80 bg-gray-300 h-full flex flex-col items-center p-4 float-left"
      >
        <div class="logo mb-10 py-5">Logo</div>
        <div class="burder-menu">
          <ul class="space-y-16">
            <li class="flex gap-4 text-lg">
              <router-link :to="{ name: 'DashboardHome' }">
                <div class="icon"><i class="fa-solid fa-house fa-xl"></i></div>
                <p>Home</p>
              </router-link>
            </li>
            <li class="flex gap-4 text-lg">
              <div class="icon">
                <i class="fa-solid fa-file-waveform fa-xl"></i>
              </div>
              <p>Fiteness Record</p>
            </li>
            <li class="flex gap-4 text-lg">
              <div class="icon">
                <i class="fa-regular fa-credit-card fa-xl"></i>
              </div>
              <p>Subscription</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex gap-4 bg-green-600 h-full w-full p-4">
        <div class="main-body bg-white h-full w-4/5 rounded">
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
            class="relative attendance-summary-container border border-gray-300 rounded mx-10 p-6"
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
        </div>
        <!-- inner right side bar -->
        <div class="bg-zinc-900 w-1/5 rounded relative py-16 px-3 text-white">
          <!-- top -->
          <div>
            <p class="block text-center text-lg font-semibold">Members</p>
            <div class="border border-white" />
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
          <!-- footer -->
          <div
            class="flex flex-col items-center md:absolute md:bottom-8 md:left-[50%] md:-translate-x-[50%] text-zinc-200 text-opacity-80 font-thin text-xs"
          >
            <div class="flex items-center gap-3 mb-3 imgs">
              <div class="border border-[#d4d4d4] w-16 md:w-32 rounded-full" />
              <img
                src="@/assets/joint-dumbells.svg"
                alt="dumbbell"
                class="w-16"
              />
              <div class="border border-[#d4d4d4] w-16 md:w-32 rounded-full" />
            </div>
            <span>Powered by JAS FITNESS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppGoBack from '@/components/AppGoBack.vue'
</script>

<style scoped></style>
