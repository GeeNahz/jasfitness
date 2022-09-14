<template>
  <div class="h-full">
    <LayoutView>
      <template #welcome-section>
        <!-- welcome text -->
        <div
          class="welcome-container container py-3 flex justify-between items-center"
        >
          <div class="welcome">
            <p class="text-2xl font-semibold">My <span>Subscription</span>,</p>
            <p class="text-sm">
              Nobody who ever gave his best ever regretted it
            </p>
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
          <p class="absolute -top-4 left-4 bg-white px-2 py-1">Summary</p>
          <div
            class="flex w-full justify-between capitalize text-center px-10 py-4"
          >
            <div class="item">
              <p>Subscription type</p>
              <p class="text-3xl font-semibold">Odogwu</p>
            </div>
            <div class="item">
              <p>Subscription status</p>
              <p class="text-3xl font-semibold">46</p>
              <p>days</p>
            </div>
            <div class="item">
              <p>start date</p>
              <p class="text-3xl font-semibold">15</p>
              <p>sept</p>
            </div>
          </div>
        </div>
        <!-- fitness record -->
        <div class="mx-10">
          <!-- divider -->
          <DashboardDivider name="Members Features" />
          <div class="features-container flex gap-4 justify-center">
            <DashboardSubscriptionCard>
              <template #icon
                ><i class="fa-solid fa-clock fa-2xl"></i
              ></template>
              <template #title>
                <h4 class="mt-0 capitalize text-xl font-semibold">
                  Freeze your sub
                </h4>
              </template>
              <template #description>
                <p class="text-sm font-light">
                  You can freeze your sub for as long as <span>4</span> days
                </p>
              </template>
              <template #button>
                <button class="btn btn-primary">Freeze</button>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard>
              <template #icon
                ><i class="fa-solid fa-paper-plane fa-2xl"></i
              ></template>
              <template #title>
                <p class="capitalize text-xl font-semibold">Share your sub</p>
              </template>
              <template #description>
                <p class="text-sm font-light">
                  Share your subscription with a family member, friend or gym
                  buddy <span>4</span> days
                </p>
              </template>
              <template #button>
                <button class="btn btn-primary">Freeze</button>
              </template>
            </DashboardSubscriptionCard>
          </div>
          <!-- divider -->
          <DashboardDivider name="Explore plans suited for you" />
          <div
            class="features-container flex flex-wrap gap-4 justify-center mb-4"
          >
            <DashboardSubscriptionCard>
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <h4 class="mt-0 capitalize text-xl font-semibold">
                  Freeze your sub
                </h4>
              </template>
              <template #description>
                <p class="text-sm font-light">
                  You can freeze your sub for as long as <span>4</span> days
                </p>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard>
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <p class="capitalize text-xl font-semibold">Share your sub</p>
              </template>
              <template #description>
                <p class="text-sm font-light">
                  Share your subscription with a family member, friend or gym
                  buddy <span>4</span> days
                </p>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard>
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <p class="capitalize text-xl font-semibold">Share your sub</p>
              </template>
              <template #description>
                <p class="text-sm font-light">
                  Share your subscription with a family member, friend or gym
                  buddy <span>4</span> days
                </p>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard>
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <p class="capitalize text-xl font-semibold">Share your sub</p>
              </template>
              <template #description>
                <p class="text-sm font-light">
                  Share your subscription with a family member, friend or gym
                  buddy <span>4</span> days
                </p>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard>
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <p class="capitalize text-xl font-semibold">Share your sub</p>
              </template>
              <template #description>
                <p class="text-sm font-light">
                  Share your subscription with a family member, friend or gym
                  buddy <span>4</span> days
                </p>
              </template>
            </DashboardSubscriptionCard>
            <DashboardSubscriptionCard>
              <template #icon
                ><i class="fa-regular fa-calendar-minus fa-2xl"></i
              ></template>
              <template #title>
                <p class="capitalize text-xl font-semibold">Share your sub</p>
              </template>
              <template #description>
                <p class="text-sm font-light">
                  Share your subscription with a family member, friend or gym
                  buddy <span>4</span> days
                </p>
              </template>
            </DashboardSubscriptionCard>
          </div>
        </div>
      </template>
      <template #inner-side-bar>
        <!-- top -->
        <div>
          <div class="relative border mt-4 mb-16 mx-auto w-11/12">
            <p
              class="absolute -top-3 left-[50%] -translate-x-[50%] bg-zinc-900 rounded-full px-3 text-xl font-semibold"
            >
              Summary
            </p>
          </div>
          <DashboardSubscriptionCard>
            <template #title>
              <p class="capitalize text-lg text-center">Subscription wheel</p>
            </template>
            <template #description>
              <p class="text-xs text-center font-light">
                Your health account and your bank account are the same thing.
                The more you put in, the more you can take out.
              </p>
            </template>
            <template #button>
              <div class="bg-gray-500 h-32 w-full"></div>
            </template>
          </DashboardSubscriptionCard>
          <ul class="space-y-10 mt-4 pl-10">
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
      </template>
    </LayoutView>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import LayoutView from '../components/LayoutView.vue'
import DashboardSubscriptionCard from '../components/DashboardSubscriptionCard.vue'
import DashboardDivider from '../components/DashboardDivider.vue'

const resubscribeHandler = () => {
  try {
    console.log('Resubscribe')
  } catch (err) {
    console.log('error:', err)
  }
}
</script>
