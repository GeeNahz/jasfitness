<script setup lang="ts">
import { computed, onMounted, inject } from 'vue'
import { useMeta } from 'vue-meta'

import AppIconTimer from '@/components/icons/AppIconTimer.vue'
import AppIconSend from '@/components/icons/AppIconSend.vue'
import AppIconPlan from '@/components/icons/AppIconPlan.vue'
import AppIconMessage from '@/components/icons/AppIconMessage.vue'
// import { useRadialBar } from '@/composables/radialbarSettings.js'

import PageLayout from '../components/PageLayout.vue'
import DashboardSubscriptionCard from '../components/DashboardCard.vue'
import DashboardDivider from '../components/DashboardDivider.vue'
import AppProgressbar from "@/components/custom/AppProgressbar.vue";
// import DashboardRadialProgressBar from '../components/DashboardRadialProgressBar.vue'
import DashboardSubscriptionSummaryItems from '../components/SubscriptionSummaryItems.vue'
import DashboardSummarySkeletonLoader from '../components/SummarySkeletonLoader.vue'
import ResubButton from '../components/ResubButton.vue'
import { useDashboardStore } from '../stores/dashboard'
import { storeToRefs } from 'pinia'

useMeta({ title: 'Subscription' })

// const { statusColorCodeHalf, percentageBoundary } = useRadialBar()
const addIconSection = computed(() => (window.innerWidth > 400 ? true : false))

const dashboardStore = useDashboardStore();
const { dashboardSub, dashboardBase: dashboardHomeState } = storeToRefs(dashboardStore);

// const isLoggedIn = computed(() => store.state.auth.isLoggedIn)

const isReady = inject('isComponentReady') as any;
onMounted(async () => {
  await dashboardStore.dashboard_subscription();
  if (!dashboardHomeState.value) {
    await dashboardStore.dashboard_home();
  }
  isReady.toggleIsReady(true)
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
    slug: 'VIP',
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
] // get plans from endpoint

function openModal (modalId: string) {
  dashboardStore.toggleModal(modalId);
}
</script>

<template>
  <div class="h-full">
    <PageLayout title="Summary">
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
              Replace I wish by I WILL 💯
            </p>
          </div>
          <div>
            <ResubButton />
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
              <DashboardSummarySkeletonLoader :has-two-rows="true" />
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
                  You can freeze your sub for as long as
                  <!-- <span>{{
                    dashboardSub?.freeze?.total - dashboardSub?.freeze?.value ||
                    0
                  }}</span> -->
                  <span>{{ dashboardSub?.freeze?.total }}</span>
                  days
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
                      !dashboardSub?.is_expired &&
                      dashboardSub?.freezeable &&
                      (dashboardSub.freeze?.value! < dashboardSub.freeze?.total!) &&
                      !dashboardSub.frozen
                        ? 'bg-[#1f1f1f] active:bg-[#303030] hover:bg-[#333333]'
                        : 'bg-gray-500 disabled'
                    ]"
                  >
                    {{
                      !dashboardSub.is_expired &&
                      dashboardSub.freezeable &&
                      (dashboardSub?.freeze?.value! < dashboardSub?.freeze?.total!) &&
                      !dashboardSub.frozen
                        ? 'Freeze'
                        : 'Not available'
                    }}
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
                      !dashboardSub?.is_expired
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
                    <AppProgressbar :progress="dashboardSub.sub_wheel / 100" :is-full-circle="false" :width="200" :height="100" class="relative mt-3" />

                    <!-- <DashboardRadialProgressBar
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
                          {{
                            percentageBoundary(Number(dashboardSub.sub_wheel))
                          }}%
                        </p>
                        <p class="text-xs font-light leading-none">Completed</p>
                      </div>
                    </DashboardRadialProgressBar> -->
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
    </PageLayout>
  </div>
</template>

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