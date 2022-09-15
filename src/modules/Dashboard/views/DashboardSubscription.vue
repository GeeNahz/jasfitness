<template>
  <div class="h-full">
    <LayoutView title="Summary">
      <template #welcome-section>
        <!-- welcome text -->
        <div
          class="welcome-container container py-3 flex justify-between items-center"
        >
          <div class="welcome">
            <p class="text-2xl font-semibold">My <span>Subscription</span>,</p>
            <p class="w-52 md:w-fit text-sm">
              Nobody who ever gave his best ever regretted it
            </p>
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
          class="relative attendance-summary-container border border-gray-300 rounded-xl md:mx-10 md:p-6"
        >
          <p
            class="absolute -top-4 left-4 text-sm md:text-base bg-white px-2 py-1"
          >
            Summary
          </p>
          <div
            class="flex w-full justify-between capitalize text-center p-3 md:px-10 md:py-4"
          >
            <div class="item">
              <p class="text-xs md:text-base">Subscription type</p>
              <p class="text-xl md:text-3xl font-semibold">Odogwu</p>
            </div>
            <div class="item">
              <p class="text-xs md:text-base">Subscription status</p>
              <p class="text-xl md:text-3xl font-semibold">
                46<span class="text-xs md:text-base text-gray-500"> days</span>
              </p>
            </div>
            <div class="item">
              <p class="text-xs md:text-base">start date</p>
              <p class="text-xl md:text-3xl font-semibold">
                15<span class="text-xs text-gray-500 md:text-base"> sept</span>
              </p>
            </div>
          </div>
        </div>
        <!-- fitness record -->
        <div class="md:mx-10">
          <!-- divider -->
          <DashboardDivider
            class="text-sm md:text-base my-4"
            name="Members Features"
          />
          <div class="features-container flex gap-2 md:gap-4 justify-center">
            <DashboardSubscriptionCard class="flex-1" :addIcon="addIconSection">
              <template #icon
                ><i class="fa-solid fa-clock fa-2xl"></i
              ></template>
              <template #title>
                <h4 class="mt-0 capitalize text-base md:text-xl font-semibold">
                  Freeze your sub
                </h4>
              </template>
              <template #description>
                <p class="text-xs md:text-sm font-light">
                  You can freeze your sub for as long as <span>4</span> days
                </p>
              </template>
              <template #button>
                <button
                  class="px-2 py-1 md:px-4 md:py-2 bg-yellow-600 active:bg-yellow-700 hover:bg-yellow-500 rounded text-white text-sm md:text-base font-semibold"
                >
                  Freeze
                </button>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard class="flex-1" :addIcon="addIconSection">
              <template #icon
                ><i class="fa-solid fa-paper-plane fa-2xl"></i
              ></template>
              <template #title>
                <p class="capitalize text-base md:text-xl font-semibold">
                  Share your sub
                </p>
              </template>
              <template #description>
                <p class="text-xs md:text-sm font-light">
                  Share your subscription with a family member, friend or gym
                  buddy <span>4</span> days
                </p>
              </template>
              <template #button>
                <button
                  class="px-2 py-1 md:px-4 md:py-2 bg-yellow-600 active:bg-yellow-700 hover:bg-yellow-500 rounded text-white text-sm md:text-base font-semibold"
                >
                  Share
                </button>
              </template>
            </DashboardSubscriptionCard>
          </div>
          <!-- divider -->
          <DashboardDivider
            class="text-sm text-center md:text-base my-5 md:my-4"
            name="Explore plans suited for you"
          />
          <div
            class="features-container grid grid-cols-2 gap-4 justify-center mb-2 md:mb-4"
          >
            <DashboardSubscriptionCard :addMinWidth="true">
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <div class="flex flex-col md:flex-row items-center space-x-2">
                  <p class="mt-0 capitalize text-base md:text-xl font-semibold">
                    Busy-Bee
                  </p>
                  <p class="text-gray-500 text-xs md:text-base">Monthly plan</p>
                </div>
              </template>
              <template #description>
                <ul class="list-disc pl-3 text-xs md:text-base">
                  <li>No Price discount</li>
                  <li>3 Days per week access</li>
                  <li>No Guest pass per Month</li>
                  <li>No Subscription Freeze</li>
                </ul>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard :addMinWidth="true">
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <div class="flex flex-col md:flex-row items-center space-x-2">
                  <p class="mt-0 capitalize text-base md:text-xl font-semibold">
                    Passer-By
                  </p>
                  <p class="text-gray-500 text-xs md:text-base">Monthly plan</p>
                </div>
              </template>
              <template #description>
                <ul class="list-disc pl-3 text-xs md:text-base">
                  <li>No Price discount</li>
                  <li>Access once daily</li>
                  <li>No Guest pass per Month</li>
                  <li>No Subscription Freeze</li>
                </ul>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard :addMinWidth="true">
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <div class="flex flex-col md:flex-row items-center space-x-2">
                  <p class="mt-0 capitalize text-base md:text-xl font-semibold">
                    Too-Sure
                  </p>
                  <p class="text-gray-500 text-xs md:text-base">
                    Quarterly plan
                  </p>
                </div>
              </template>
              <template #description>
                <ul class="list-disc pl-3 text-xs md:text-base">
                  <li>15% Price discount</li>
                  <li>All day access</li>
                  <li>1 Guest pass per Month</li>
                  <li>4 days Subscription Freeze</li>
                </ul>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard :addMinWidth="true">
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <div class="flex flex-col md:flex-row items-center space-x-2">
                  <p class="mt-0 capitalize text-base md:text-xl font-semibold">
                    Real-Deal
                  </p>
                  <p class="text-gray-500 text-xs md:text-base">
                    Bi-Yearly plan
                  </p>
                </div>
              </template>
              <template #description>
                <ul class="list-disc pl-3 text-xs md:text-base">
                  <li>20% Price discount</li>
                  <li>All day access</li>
                  <li>2 Guest pass per Month</li>
                  <li>8 Days Subscription Freeze</li>
                </ul>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard :addMinWidth="true">
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <div class="flex flex-col md:flex-row items-center space-x-2">
                  <p class="mt-0 capitalize text-base md:text-xl font-semibold">
                    Odogwu
                  </p>
                  <p class="text-gray-500 text-xs md:text-base">Yearly plan</p>
                </div>
              </template>
              <template #description>
                <ul class="list-disc pl-3 text-xs md:text-base">
                  <li>30% Price discount</li>
                  <li>All day access</li>
                  <li>3 Guest pass per Month</li>
                  <li>14 Days Subscription Freeze</li>
                </ul>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard :addMinWidth="true">
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <div class="flex flex-col md:flex-row items-center space-x-2">
                  <p class="mt-0 capitalize text-base md:text-xl font-semibold">
                    V-I-P
                  </p>
                  <p class="text-gray-500 text-xs md:text-base">Monthly plan</p>
                </div>
              </template>
              <template #description>
                <ul class="list-disc pl-3 text-xs md:text-base">
                  <li>20% Price discount</li>
                  <li>All day access</li>
                  <li>5 persons per session</li>
                  <li>Personal Trainer</li>
                  <li>2 Guest pass per Month</li>
                  <li>5 Days Subscription Freeze</li>
                </ul>
              </template>
            </DashboardSubscriptionCard>
          </div>
        </div>
      </template>
      <template #inner-side-bar>
        <div>
          <DashboardSubscriptionCard :addIcon="false">
            <template #title>
              <div class="flex md:flex-col gap-2">
                <div class="md:text-center">
                  <p class="capitalize text-base md:text-lg">
                    Subscription wheel
                  </p>
                  <p class="text-xs text-gray-300 font-light">
                    Your health account and your bank account are the same
                    thing. The more you put in, the more you can take out.
                  </p>
                </div>
                <div class="bg-gray-500 md:h-32 w-full"></div>
              </div>
            </template>
          </DashboardSubscriptionCard>
          <ul class="space-y-10 mt-4 pl-10">
            <li>
              <router-link :to="{ name: 'DashboardHome' }" class="links">
                <div class="flex items-center gap-4">
                  <div class="icon">
                    <i class="fa-regular fa-message fa-2xl"></i>
                  </div>
                  <div>
                    <p class="text-lg font-semibold py-0 w-full">Feedback</p>
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
import { computed } from 'vue'
import LayoutView from '../components/LayoutView.vue'
import DashboardSubscriptionCard from '../components/DashboardSubscriptionCard.vue'
import DashboardDivider from '../components/DashboardDivider.vue'

const addIconSection = computed(() => (window.innerWidth > 400 ? true : false))

const resubscribeHandler = () => {
  try {
    console.log('Resubscribe')
  } catch (err) {
    console.log('error:', err)
  }
}
</script>

<style scoped>
a.links {
  transition: color 0.15s ease-in-out, border 0.15s ease-in-out;
}
a.links:hover {
  color: #ca9b42;
}

a.links.router-link-exact-active {
  color: #ca9b42;
  border-left: solid #ca9b42;
}
</style>
