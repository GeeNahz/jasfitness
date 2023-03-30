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
            <a
              href="https://app.jasfitnessng.com/new-members/re-subscription/"
              target="_blank"
              class="bg-yellow-600 px-3 md:px-4 py-2 text-white font-semibold flex flex-col-reverse md:flex-row items-center justify-center md:space-x-2 rounded-xl hover:bg-yellow-500 active:bg-yellow-700"
            >
              <!-- @click="resubscribeHandler" -->
              <p class="hidden md:block">Resubscribe</p>
              <p class="text-[10px] md:hidden">Re-sub</p>
              <AppIconRenew />
            </a>
          </div>
        </div>
        <br />
        <!-- subscription summary -->
        <div
          id="subscription-summary"
          class="relative subscription-summary-container border border-gray-300 rounded-xl w-full pt-[1px] md:p-6"
        >
          <p
            class="absolute -top-4 left-4 text-sm xl:text-base bg-white px-2 py-1"
          >
            Summary
          </p>

          <Suspense>
            <DashboardSubscriptionSummaryItems />
            <template #fallback>
              <DashboardSummarySkeletonLoader />
            </template>
          </Suspense>
        </div>
        <!-- members features -->
        <div>
          <!-- divider -->
          <DashboardDivider
            class="text-sm xl:text-base my-5 xl:my-4"
            name="Members Features"
          />
          <div
            id="members-features"
            class="features-container w-fit sm:w-full mx-auto grid grid-cols-1 gap-4 sm:flex sm:flex-wrap justify-center mb-2 md:mb-4"
          >
            <!-- freeze sub -->
            <DashboardSubscriptionCard
              :addMinWidth="true"
              class="flex-1"
              :addIcon="addIconSection"
            >
              <template #icon>
                <AppIconTimer class="text-4xl" />
              </template>
              <template #title>
                <div
                  class="flex flex-col md:flex-row items-center md:space-x-2"
                >
                  <p class="mt-0 capitalize text-sm xl:text-lg font-semibold">
                    Freeze your sub
                  </p>
                </div>
              </template>
              <template #description>
                <p class="plans-des text-xs xl:text-sm font-light">
                  You can freeze your sub for as long as <span>4</span> days
                </p>
              </template>
              <template #button>
                <div
                  v-if="dashboardSub && dashboardHomeState"
                  class="flex flex-col md:flex-row items-center xl:space-x-2"
                >
                  <button
                    @click="openModal('freezeSub')"
                    class="px-3 py-1 xl:px-4 xl:py-2 rounded text-yellow-400 text-sm xl:text-base font-semibold"
                    :class="[
                      !dashboardSub.is_expired &&
                      dashboardSub.freezeable &&
                      dashboardHomeState.freeze.value < 4
                        ? 'bg-[#1f1f1f] active:bg-[#303030] hover:bg-[#333333]'
                        : 'bg-gray-500 disabled'
                    ]"
                  >
                    Freeze
                  </button>
                </div>
              </template>
            </DashboardSubscriptionCard>
            <!-- share sub -->
            <DashboardSubscriptionCard
              :addMinWidth="true"
              class="flex-1"
              :addIcon="addIconSection"
            >
              <template #icon>
                <AppIconSend class="text-4xl" />
              </template>
              <template #title>
                <div
                  class="flex flex-col md:flex-row items-center xl:space-x-2"
                >
                  <p class="mt-0 capitalize text-sm xl:text-lg font-semibold">
                    Share your sub
                  </p>
                </div>
              </template>
              <template #description>
                <p class="plans-des text-xs xl:text-sm font-light">
                  Share your subscription for as much as 4 days with a family
                  member, friend or gym buddy
                </p>
              </template>
              <template #button>
                <div class="flex flex-col md:flex-row items-center">
                  <button
                    @click="openModal('shareSub')"
                    class="px-3 py-1 xl:px-4 xl:py-2 rounded text-yellow-400 text-sm xl:text-base font-semibold"
                    :class="[
                      !dashboardSub.is_expired
                        ? 'bg-[#1f1f1f] active:bg-[#303030] hover:bg-[#333333]'
                        : 'bg-gray-500 disabled'
                    ]"
                  >
                    Share
                  </button>
                </div>
              </template>
            </DashboardSubscriptionCard>
          </div>
          <!-- divider -->
          <DashboardDivider
            class="text-sm text-center xlmd:text-base my-5 xl:my-4"
            name="Explore plans suited for you"
          />
          <div
            id="our-plans"
            class="features-container gap-4 flex flex-wrap justify-center mb-2 md:mb-4"
          >
            <DashboardSubscriptionCard
              v-for="plan in plans"
              :key="plan.id"
              :addMinWidth="true"
            >
              <template #icon>
                <AppIconPlan class="text-4xl" />
              </template>
              <template #title>
                <div
                  class="flex flex-col md:flex-row items-center md:space-x-2"
                >
                  <p class="mt-0 capitalize text-sm xl:text-base font-semibold">
                    {{ plan.slug }}
                  </p>
                  <p class="text-gray-500 text-xs xl:text-sm">
                    {{ plan.billing }}
                  </p>
                </div>
              </template>
              <template #description>
                <div class="plans-des">
                  <ul class="list-disc pl-3 text-xs xl:text-sm">
                    <li v-for="(offer, index) in plan.offers" :key="index">
                      {{ offer }}
                    </li>
                  </ul>
                </div>
              </template>
            </DashboardSubscriptionCard>
          </div>
        </div>
      </template>
      <template #inner-side-bar>
        <div class="flex flex-col items-center lg:block mb-4 px-1 w-full">
          <DashboardSubscriptionCard :addIcon="false" class="w-full">
            <template #title>
              <div class="flex md:flex-col gap-2">
                <div class="md:text-center">
                  <p class="capitalize text-sm md:text-base">
                    Subscription wheel
                  </p>
                  <!--  -->
                  <p class="text-xs text-gray-300 mt-1 md:mt-3 font-light">
                    Your health account and your bank account are the same
                    thing. The more you put in, the more you can take out.
                  </p>
                </div>
                <div
                  v-if="dashboardSub"
                  class="mt-2 md:mt-0 h-16 md:h-32 w-[30rem] md:w-full overflow-hidden"
                >
                  <div class="grid justify-center w-full">
                    <DashboardRadialProgressBar
                      :completedSteps="dashboardSub.sub_wheel"
                      :full-circle="false"
                      :stroke-color="
                        statusColorCodeHalf(dashboardSub.sub_wheel)
                      "
                      class="hidden md:block relative mt-3 -rotate-90"
                    >
                      <div
                        class="rotate-90 absolute right-3 uppercase flex flex-col items-center justify-center font-semibold"
                      >
                        <p class="text-4xl">{{ dashboardSub.sub_wheel }}%</p>
                        <p class="text-sm font-normal">Completed</p>
                      </div>
                    </DashboardRadialProgressBar>
                    <DashboardRadialProgressBar
                      :strokeWidth="10"
                      :diameter="110"
                      :completedSteps="dashboardSub.sub_wheel"
                      :full-circle="false"
                      :stroke-color="
                        statusColorCodeHalf(dashboardSub.sub_wheel)
                      "
                      class="md:hidden relative mt-1 -rotate-90"
                    >
                      <div
                        class="rotate-90 absolute -right-0 uppercase flex flex-col items-center justify-center font-semibold"
                      >
                        <p class="text-xl leading-none">
                          {{ dashboardSub.sub_wheel }}%
                        </p>
                        <p class="text-xs font-light leading-none">Completed</p>
                      </div>
                    </DashboardRadialProgressBar>
                  </div>
                </div>
              </div>
            </template>
          </DashboardSubscriptionCard>
          <ul class="-translate-x-5 lg:translate-x-5 space-y-10 mt-4 pl-10">
            <li>
              <router-link :to="{ name: 'DashboardHome' }" class="links">
                <div class="flex items-center gap-4">
                  <div class="icon">
                    <AppIconMessage />
                  </div>
                  <div>
                    <p class="text-xs md:text-sm font-semibold py-0 w-full">
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
import { computed, onMounted, inject } from 'vue'
import { useMeta } from 'vue-meta'
import { useStore } from 'vuex'

import AppIconRenew from '@/components/icons/AppIconRenew.vue'
import AppIconTimer from '@/components/icons/AppIconTimer.vue'
import AppIconSend from '@/components/icons/AppIconSend.vue'
import AppIconPlan from '@/components/icons/AppIconPlan.vue'
import AppIconMessage from '@/components/icons/AppIconMessage.vue'
import { useRadialBar } from '@/composables/useRadialbarSettings.js'

import LayoutView from '../components/LayoutView.vue'
import DashboardSubscriptionCard from '../components/DashboardSubscriptionCard.vue'
import DashboardDivider from '../components/DashboardDivider.vue'
import DashboardRadialProgressBar from '../components/DashboardRadialProgressBar.vue'
import DashboardSubscriptionSummaryItems from '../components/DashboardSubscriptionSummaryItems.vue'
import DashboardSummarySkeletonLoader from '../components/DashboardSummarySkeletonLoader.vue'

useMeta({ title: 'Subscription' })

const { statusColorCodeHalf } = useRadialBar()
const addIconSection = computed(() => (window.innerWidth > 400 ? true : false))

const store = useStore()

const dashboardSub = computed(() =>
  store.state.dashboard.dashboardSubscription
    ? store.state.dashboard.dashboardSubscription
    : false
)

// const isLoggedIn = computed(() => store.state.auth.isLoggedIn)
const dashboardHomeState = computed(() =>
  store.state.dashboard.dashboardBase
    ? store.state.dashboard.dashboardBase
    : false
)

const { toggleIsReady } = inject('isComponentReady')
onMounted(async () => {
  if (!dashboardSub.value) {
    try {
      await store.dispatch('dashboard/dashboard_subscription')
    } catch {
      const message =
        'Something went wrong while fetching fitness records. Refresh the browser to try fix it.'
      store.dispatch('landingpage/error', { message, timeout: 3000 })
    }
  }
  if (!dashboardHomeState.value) {
    try {
      store.dispatch('dashboard/dashboard_home')
    } catch (err) {
      store.dispatch('landingpage/error', {
        message: 'Unable to fetch user data'
      })
    }
  }
  toggleIsReady(true)
})

const plans = [
  {
    id: 0,
    slug: 'PREMIUM',
    price: 'N20,000',
    setup: 'N3,000',
    billing: 'Billed Monthly',
    offers: [
      'No Price Discount',
      'Access Once Daily',
      'Access to multi pitch and games',
      'Personal Dashboard For Tracking Fitness Records',
      'Fitness Instructor Available',
      '1 Guest Pass Per Month',
      'No Subscription Pause Request'
    ]
  },
  {
    id: 1,
    slug: 'V-I-P',
    price: 'N40,000',
    setup: 'N3,000',
    billing: 'Billed Monthly',
    offers: [
      'No Price Discount',
      'All Day Access',
      'Access to multi pitch and games',
      'Personal Dashboard For Tracking Fitness Records',
      'Personal Fitness Instructor Available',
      '2 Guest Pass Per Month',
      '7 Days Subscription Pause Request',
      '1 Free Car Wash Weekly (4 Monthly)'
    ]
  }
]

// const resubscribeHandler = () => {
//   try {
//     console.log('Resubscribe')
//   } catch (err) {
//     console.log('error:', err)
//   }
// }
const openModal = (modalId) => {
  store.dispatch('dashboard/toggle_modal', modalId)
}
</script>

<style scoped>
a.links {
  transition: color 0.15s ease-in-out, border 0.15s ease-in-out;
}
a.links:hover {
  color: #ca9b42;
}
a #path {
  transition: fill 0.2s ease-in-out;
}
a:hover #path {
  fill: #ca9b42;
}
a.links.router-link-exact-active {
  color: #ca9b42;
  border-left: solid #ca9b42;
}
.disabled {
  pointer-events: none;
  cursor: not-allowed !important;
}

@media screen and (max-width: 767px) {
  .plans-des {
    text-align: center;
  }
}
</style>
