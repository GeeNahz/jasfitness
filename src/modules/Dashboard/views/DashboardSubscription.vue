<template>
  <div class="h-full">
    <LayoutView title="Summary">
      <template #welcome-section>
        <!-- welcome text -->
        <div
          class="welcome-container container py-3 flex justify-between items-center"
        >
          <div class="welcome md:mt-10">
            <p class="text-xl md:text-2xl font-semibold">
              My <span>Subscription</span>,
            </p>
            <p class="w-52 md:w-fit text-xs md:text-sm text-gray-400">
              Replace I wish by I WILL
            </p>
          </div>
          <div>
            <button
              @click="resubscribeHandler"
              class="bg-yellow-600 px-3 md:px-4 py-2 text-white font-semibold flex flex-col-reverse md:flex-row items-center justify-center md:space-x-2 rounded-xl hover:bg-yellow-500 active:bg-yellow-700"
            >
              <p class="hidden md:block">Resubscribe</p>
              <p class="block md:hidden text-[10px]">Re-Sub</p>
              <i class="fa-solid fa-arrows-rotate"></i>
            </button>
          </div>
        </div>
        <br />
        <!-- subscription summary -->
        <div
          class="relative subscription-summary-container border border-gray-300 rounded-xl w-full md:p-6"
        >
          <p
            class="absolute -top-4 left-4 text-sm md:text-base bg-white px-2 py-1"
          >
            Summary
          </p>
          <div
            class="flex w-full justify-between capitalize text-center px-4 py-3 md:px-10 md:py-4"
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
        <!-- members features -->
        <div>
          <!-- divider -->
          <DashboardDivider
            class="text-sm md:text-base my-5 md:my-4"
            name="Members Features"
          />
          <div class="features-container flex gap-4 justify-center">
            <DashboardSubscriptionCard
              :addMinWidth="true"
              class="flex-1"
              :addIcon="addIconSection"
            >
              <template #icon
                ><i class="fa-solid fa-clock fa-2xl"></i
              ></template>
              <template #title>
                <div
                  class="flex flex-col md:flex-row items-center md:space-x-2"
                >
                  <p class="mt-0 capitalize text-base md:text-xl font-semibold">
                    Freeze your sub
                  </p>
                </div>
              </template>
              <template #description>
                <p class="plans-des text-xs md:text-sm font-light">
                  You can freeze your sub for as long as <span>4</span> days
                </p>
              </template>
              <template #button>
                <div
                  class="flex flex-col md:flex-row items-center md:space-x-2"
                >
                  <button
                    class="px-2 py-1 md:px-4 md:py-2 bg-yellow-600 active:bg-yellow-700 hover:bg-yellow-500 rounded text-white text-sm md:text-base font-semibold"
                  >
                    Freeze
                  </button>
                </div>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard
              :addMinWidth="true"
              class="flex-1"
              :addIcon="addIconSection"
            >
              <template #icon
                ><i class="fa-solid fa-paper-plane fa-2xl"></i
              ></template>
              <template #title>
                <div
                  class="flex flex-col md:flex-row items-center md:space-x-2"
                >
                  <p class="mt-0 capitalize text-base md:text-xl font-semibold">
                    Share your sub
                  </p>
                </div>
              </template>
              <template #description>
                <p class="plans-des text-xs md:text-sm font-light">
                  Share your subscription with a family member, friend or gym
                  buddy <span>4</span> days
                </p>
              </template>
              <template #button>
                <div class="flex flex-col md:flex-row items-center">
                  <button
                    class="px-2 py-1 md:px-4 md:py-2 bg-yellow-600 active:bg-yellow-700 hover:bg-yellow-500 rounded text-white text-sm md:text-base font-semibold"
                  >
                    Share
                  </button>
                </div>
              </template>
            </DashboardSubscriptionCard>
          </div>
          <!-- divider -->
          <DashboardDivider
            class="text-sm text-center md:text-base my-5 md:my-4"
            name="Explore plans suited for you"
          />
          <div
            class="features-container grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center mb-2 md:mb-4"
          >
            <DashboardSubscriptionCard :addMinWidth="true">
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <div
                  class="flex flex-col md:flex-row items-center md:space-x-2"
                >
                  <p class="mt-0 capitalize text-base md:text-xl font-semibold">
                    Busy-Bee
                  </p>
                  <p class="text-gray-500 text-xs md:text-base">Monthly plan</p>
                </div>
              </template>
              <template #description>
                <div class="plans-des">
                  <ul class="list-disc pl-3 text-xs md:text-base">
                    <li>No Price discount</li>
                    <li>3 Days per week access</li>
                    <li>No Guest pass per Month</li>
                    <li>No Subscription Freeze</li>
                  </ul>
                </div>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard :addMinWidth="true">
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <div
                  class="flex flex-col md:flex-row items-center md:space-x-2"
                >
                  <p class="mt-0 capitalize text-base md:text-xl font-semibold">
                    Passer-By
                  </p>
                  <p class="text-gray-500 text-xs md:text-base">Monthly plan</p>
                </div>
              </template>
              <template #description>
                <div class="plans-des">
                  <ul class="list-disc pl-3 text-xs md:text-base">
                    <li>No Price discount</li>
                    <li>Access once daily</li>
                    <li>No Guest pass per Month</li>
                    <li>No Subscription Freeze</li>
                  </ul>
                </div>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard :addMinWidth="true">
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <div
                  class="flex flex-col md:flex-row items-center md:space-x-2"
                >
                  <p class="mt-0 capitalize text-base md:text-xl font-semibold">
                    Too-Sure
                  </p>
                  <p class="text-gray-500 text-xs md:text-base">
                    Quarterly plan
                  </p>
                </div>
              </template>
              <template #description>
                <div class="plans-des">
                  <ul class="list-disc pl-3 text-xs md:text-base">
                    <li>15% Price discount</li>
                    <li>All day access</li>
                    <li>1 Guest pass per Month</li>
                    <li>4 days Subscription Freeze</li>
                  </ul>
                </div>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard :addMinWidth="true">
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <div
                  class="flex flex-col md:flex-row items-center md:space-x-2"
                >
                  <p class="mt-0 capitalize text-base md:text-xl font-semibold">
                    Real-Deal
                  </p>
                  <p class="text-gray-500 text-xs md:text-base">
                    Bi-Yearly plan
                  </p>
                </div>
              </template>
              <template #description>
                <div class="plans-des">
                  <ul class="list-disc pl-3 text-xs md:text-base">
                    <li>20% Price discount</li>
                    <li>All day access</li>
                    <li>2 Guest pass per Month</li>
                    <li>8 Days Subscription Freeze</li>
                  </ul>
                </div>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard :addMinWidth="true">
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <div
                  class="flex flex-col md:flex-row items-center md:space-x-2"
                >
                  <p class="mt-0 capitalize text-base md:text-xl font-semibold">
                    Odogwu
                  </p>
                  <p class="text-gray-500 text-xs md:text-base">Yearly plan</p>
                </div>
              </template>
              <template #description>
                <div class="plans-des">
                  <ul class="list-disc pl-3 text-xs md:text-base">
                    <li>30% Price discount</li>
                    <li>All day access</li>
                    <li>3 Guest pass per Month</li>
                    <li>14 Days Subscription Freeze</li>
                  </ul>
                </div>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard :addMinWidth="true">
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <div
                  class="flex flex-col md:flex-row items-center md:space-x-2"
                >
                  <p class="mt-0 capitalize text-base md:text-xl font-semibold">
                    V-I-P
                  </p>
                  <p class="text-gray-500 text-xs md:text-base">Monthly plan</p>
                </div>
              </template>
              <template #description>
                <div class="plans-des">
                  <ul class="list-disc pl-3 text-xs md:text-base">
                    <li>20% Price discount</li>
                    <li>All day access</li>
                    <li>5 persons per session</li>
                    <li>Personal Trainer</li>
                    <li>2 Guest pass per Month</li>
                    <li>5 Days Subscription Freeze</li>
                  </ul>
                </div>
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

@media screen and (max-width: 1000px) {
  .plans-des {
    text-align: center;
  }
}
</style>
