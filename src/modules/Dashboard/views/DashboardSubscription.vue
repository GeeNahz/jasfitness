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
              href="https://www.jasfitnessng.com/members/payments/"
              class="bg-yellow-600 px-3 md:px-4 py-2 text-white font-semibold flex flex-col-reverse md:flex-row items-center justify-center md:space-x-2 rounded-xl hover:bg-yellow-500 active:bg-yellow-700"
            >
              <!-- @click="resubscribeHandler" -->
              <p class="hidden md:block">Resubscribe</p>
              <p class="block md:hidden text-[10px]">Re-Sub</p>
              <i>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4165 19.7917L9.7094 19.0846L9.00229 19.7917L9.7094 20.4988L10.4165 19.7917ZM13.8761 14.9179L9.7094 19.0846L11.1236 20.4988L15.2903 16.3321L13.8761 14.9179ZM9.7094 20.4988L13.8761 24.6654L15.2903 23.2512L11.1236 19.0846L9.7094 20.4988Z"
                    fill="white"
                  />
                  <path
                    d="M18.8146 8.85409C19.4546 9.96256 19.7915 11.22 19.7915 12.4999C19.7915 13.7799 19.4546 15.0373 18.8146 16.1458C18.1746 17.2542 17.2541 18.1747 16.1457 18.8147C15.0372 19.4547 13.7798 19.7916 12.4998 19.7916"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M14.5835 5.20833L15.2906 5.91544L15.9977 5.20833L15.2906 4.50123L14.5835 5.20833ZM11.1239 10.0821L15.2906 5.91544L13.8764 4.50123L9.70972 8.66789L11.1239 10.0821ZM15.2906 4.50123L11.1239 0.33456L9.70972 1.74877L13.8764 5.91544L15.2906 4.50123Z"
                    fill="white"
                  />
                  <path
                    d="M6.18539 16.1459C5.54542 15.0374 5.2085 13.78 5.2085 12.5001C5.2085 11.2201 5.54542 9.96272 6.18539 8.85425C6.82537 7.74577 7.74586 6.82529 8.85433 6.18531C9.9628 5.54533 11.2202 5.20841 12.5002 5.20841"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </i>
            </a>
          </div>
        </div>
        <br />
        <!-- subscription summary -->
        <div
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
            class="features-container grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center mb-2 md:mb-4"
          >
            <DashboardSubscriptionCard
              :addMinWidth="true"
              class="flex-1"
              :addIcon="addIconSection"
            >
              <template #icon>
                <i>
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="23.0001"
                      cy="26.8333"
                      r="15.3333"
                      stroke="black"
                      stroke-width="3.5"
                    />
                    <path
                      d="M23 26.8333L23 21.0833"
                      stroke="black"
                      stroke-width="3.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M33.5417 14.375L36.4168 11.5"
                      stroke="black"
                      stroke-width="3.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M19.2972 4.54355C19.5156 4.33978 19.9969 4.15971 20.6663 4.03129C21.3358 3.90286 22.1561 3.83325 22.9999 3.83325C23.8438 3.83325 24.664 3.90286 25.3335 4.03129C26.003 4.15971 26.4842 4.33978 26.7026 4.54355"
                      stroke="black"
                      stroke-width="3.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </i>
              </template>
              <template #title>
                <div
                  class="flex flex-col md:flex-row items-center md:space-x-2"
                >
                  <p class="mt-0 capitalize text-base xl:text-xl font-semibold">
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
                  v-if="dashboardSub"
                  class="flex flex-col md:flex-row items-center xl:space-x-2"
                >
                  <button
                    @click="openModal('freezeSub')"
                    class="px-4 py-1 xl:px-4 xl:py-2 rounded text-yellow-600 text-sm xl:text-base font-semibold"
                    :class="[
                      dashboardSub.freezeable
                        ? 'bg-[#1f1f1f] active:bg-[#303030] hover:bg-[#333333]'
                        : 'bg-gray-500 disabled'
                    ]"
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
              <template #icon>
                <i>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1894 15.3965L4.19218 12.3975C1.83896 11.6131 0.662354 11.2209 0.662354 10.5001C0.662354 9.77934 1.83896 9.38713 4.19218 8.60273L26.2053 1.26501C27.8611 0.713077 28.689 0.437112 29.126 0.874128C29.5631 1.31114 29.2871 2.13904 28.7352 3.79483L21.3974 25.808C20.613 28.1612 20.2208 29.3378 19.5001 29.3378C18.7793 29.3378 18.3871 28.1612 17.6027 25.808L14.6036 16.8108L21.9572 9.4572C22.3477 9.06668 22.3477 8.43351 21.9572 8.04299C21.5667 7.65247 20.9335 7.65247 20.543 8.04299L13.1894 15.3965Z"
                      fill="black"
                    />
                  </svg>
                </i>
              </template>
              <template #title>
                <div
                  class="flex flex-col md:flex-row items-center xl:space-x-2"
                >
                  <p class="mt-0 capitalize text-base xl:text-xl font-semibold">
                    Share your sub
                  </p>
                </div>
              </template>
              <template #description>
                <p class="plans-des text-xs xl:text-sm font-light">
                  Share your subscription with a family member, friend or gym
                  buddy <span>4</span> days
                </p>
              </template>
              <template #button>
                <div class="flex flex-col md:flex-row items-center">
                  <button
                    @click="openModal('shareSub')"
                    class="px-4 py-1 xl:px-4 xl:py-2 bg-[#1f1f1f] active:bg-[#303030] hover:bg-[#333333] rounded text-yellow-600 text-sm xl:text-base font-semibold"
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
            class="features-container grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center mb-2 md:mb-4"
          >
            <DashboardSubscriptionCard
              v-for="plan in plans"
              :key="plan.id"
              :addMinWidth="true"
            >
              <template #icon>
                <i>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="6.66675"
                      y="8.33325"
                      width="26.6667"
                      height="26.6667"
                      rx="2"
                      stroke="black"
                      stroke-width="3"
                    />
                    <path
                      d="M26.6667 3.33325L26.6667 11.3332C26.6667 12.2761 26.6667 12.7475 26.3739 13.0404C26.081 13.3332 25.6096 13.3332 24.6667 13.3332L15.3334 13.3333C14.3906 13.3333 13.9192 13.3333 13.6263 13.0404C13.3334 12.7475 13.3334 12.2761 13.3334 11.3333L13.3334 3.33326"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <path
                      d="M15 23.3333L25 23.3333"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                </i>
              </template>
              <template #title>
                <div
                  class="flex flex-col md:flex-row items-center md:space-x-2"
                >
                  <p class="mt-0 capitalize text-base xl:text-xl font-semibold">
                    {{ plan.slug }}
                  </p>
                  <p class="text-gray-500 text-xs xl:text-base">
                    {{ plan.billing }}
                  </p>
                </div>
              </template>
              <template #description>
                <div class="plans-des">
                  <ul class="list-disc pl-3 text-xs xl:text-base">
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
                  <p class="capitalize text-sm md:text-lg">
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
                    <i>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="path"
                          d="M7 7C6.72311 7 6.45243 7.08211 6.2222 7.23594C5.99197 7.38978 5.81253 7.60843 5.70657 7.86424C5.60061 8.12006 5.57288 8.40155 5.6269 8.67313C5.68092 8.9447 5.81426 9.19416 6.01005 9.38995C6.20584 9.58574 6.4553 9.71908 6.72687 9.7731C6.99845 9.82712 7.27994 9.79939 7.53576 9.69343C7.79157 9.58747 8.01022 9.40803 8.16406 9.1778C8.31789 8.94757 8.4 8.67689 8.4 8.4C8.4 8.0287 8.2525 7.6726 7.98995 7.41005C7.7274 7.1475 7.3713 7 7 7ZM7 12.6C6.72311 12.6 6.45243 12.6821 6.2222 12.8359C5.99197 12.9898 5.81253 13.2084 5.70657 13.4642C5.60061 13.7201 5.57288 14.0016 5.6269 14.2731C5.68092 14.5447 5.81426 14.7942 6.01005 14.9899C6.20584 15.1857 6.4553 15.3191 6.72687 15.3731C6.99845 15.4271 7.27994 15.3994 7.53576 15.2934C7.79157 15.1875 8.01022 15.008 8.16406 14.7778C8.31789 14.5476 8.4 14.2769 8.4 14C8.4 13.6287 8.2525 13.2726 7.98995 13.0101C7.7274 12.7475 7.3713 12.6 7 12.6ZM21 12.6H12.6C12.2287 12.6 11.8726 12.7475 11.6101 13.0101C11.3475 13.2726 11.2 13.6287 11.2 14C11.2 14.3713 11.3475 14.7274 11.6101 14.9899C11.8726 15.2525 12.2287 15.4 12.6 15.4H21C21.3713 15.4 21.7274 15.2525 21.99 14.9899C22.2525 14.7274 22.4 14.3713 22.4 14C22.4 13.6287 22.2525 13.2726 21.99 13.0101C21.7274 12.7475 21.3713 12.6 21 12.6ZM21 7H12.6C12.2287 7 11.8726 7.1475 11.6101 7.41005C11.3475 7.6726 11.2 8.0287 11.2 8.4C11.2 8.7713 11.3475 9.1274 11.6101 9.38995C11.8726 9.6525 12.2287 9.8 12.6 9.8H21C21.3713 9.8 21.7274 9.6525 21.99 9.38995C22.2525 9.1274 22.4 8.7713 22.4 8.4C22.4 8.0287 22.2525 7.6726 21.99 7.41005C21.7274 7.1475 21.3713 7 21 7ZM23.8 0H4.2C3.08609 0 2.0178 0.442499 1.23015 1.23015C0.442499 2.0178 0 3.08609 0 4.2V18.2C0 19.3139 0.442499 20.3822 1.23015 21.1698C2.0178 21.9575 3.08609 22.4 4.2 22.4H20.426L25.606 27.594C25.7368 27.7238 25.892 27.8264 26.0625 27.8961C26.2331 27.9657 26.4158 28.0011 26.6 28C26.7836 28.0047 26.9658 27.9664 27.132 27.888C27.3877 27.783 27.6065 27.6046 27.761 27.3754C27.9155 27.1462 27.9986 26.8764 28 26.6V4.2C28 3.08609 27.5575 2.0178 26.7698 1.23015C25.9822 0.442499 24.9139 0 23.8 0ZM25.2 23.226L21.994 20.006C21.8632 19.8762 21.708 19.7736 21.5375 19.7039C21.3669 19.6342 21.1842 19.5989 21 19.6H4.2C3.8287 19.6 3.4726 19.4525 3.21005 19.1899C2.9475 18.9274 2.8 18.5713 2.8 18.2V4.2C2.8 3.8287 2.9475 3.4726 3.21005 3.21005C3.4726 2.9475 3.8287 2.8 4.2 2.8H23.8C24.1713 2.8 24.5274 2.9475 24.7899 3.21005C25.0525 3.4726 25.2 3.8287 25.2 4.2V23.226Z"
                          fill="white"
                        />
                      </svg>
                    </i>
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
import { computed, onMounted } from 'vue'
import { useMeta } from 'vue-meta'
import { useStore } from 'vuex'

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
    : {}
)

onMounted(async () => {
  store.dispatch('dashboard/dashboard_fitness').then(
    () => {},
    () => {
      const message =
        'Something went wrong while fetching fitness records. Refresh the browser to try fix it.'
      store.dispatch('landingpage/error', { message, timeout: 3000 })
    }
  )
  try {
    await store.dispatch('dashboard/dashboard_subscription')
  } catch {
    const message =
      'Something went wrong while fetching fitness records. Refresh the browser to try fix it.'
    store.dispatch('landingpage/error', { message, timeout: 3000 })
  }
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
