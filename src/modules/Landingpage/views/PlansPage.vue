<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { useMeta } from 'vue-meta'

import CardSubscription from '../components/cards/CardSubscription.vue'
import TheFooter from '@/components/TheFooter.vue'
// import { useDynamicRoute } from '@/composables/dynamicRouteWrapper'
// import { useRouter } from 'vue-router'
import PlanSubscribeBtn from '../components/PlanSubscribeBtn.vue'
import type { Plan } from '@/types'

// import AppButton from '@/components/AppButton.vue'

useMeta({
  title: 'Plans'
})

// const router = useRouter()
// function handleGetStarted(queryParams: any) {
//   useDynamicRoute({
//     routeName: 'SubscriptionPage',
//     openInNewTap: true,
//     query: queryParams,
//     router: router
//   })
// }

const plans = ref<Plan[]>([
  // {
  //   id: 0,
  //   slug: 'regular',
  //   price: 'N12,000',
  //   setup: 'N3,000',
  //   billing: 'BILLED MONTHLY',
  //   offers: [
  //     'No Price Discount',
  //     'Access Once Daily',
  //     'Personal Dashboard for Tracking Fitness Records',
  //     'No Fitness Instructor',
  //     'No Guest Pass Per Month',
  //     'No Subscription Pause Request'
  //   ]
  // },
  {
    id: 1,
    slug: 'Premium',
    price: 'N20,000',
    setup: 'N3,000',
    billing: 'BILLED MONTHLY',
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
    id: 2,
    slug: 'VIP',
    price: 'N40,000',
    setup: 'N3,000',
    billing: 'BILLED MONTHLY',
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
]) // get plans from endpoint

const evenNumber = (number: number) => number % 2 === 0

/**For stagger effect */
function animatePlanCards() {
  gsap.fromTo(
    '.plan',
    {
      opacity: 0,
      y: -50
    },
    {
      duration: 1.5,
      opacity: 1,
      y: 0,
      delay: 0.5,
      ease: 'power3.inOut',
      stagger: 0.3
    }
  )
}
onMounted(() => {
  animatePlanCards()
})
</script>

<template>
  <section class="section">
    <div class="container">
      <header class="text-center mb-5 font-inter">
        <h3 class="text-2xl font-bold">We have a plan for everyone</h3>
        <p>Pick a plan suitable for you 💪🏽</p>
      </header>
      <div class="plans">
        <CardSubscription
          v-for="plan in plans"
          :key="plan.slug"
          :backgroundColor="
            evenNumber(plan.id) ? 'bg-[#ffdb58]' : 'bg-[#c0c0c0]'
          "
          class="plan"
        >
          <template #top>
            <div class="card-title text-center">
              <h3 class="text-3xl uppercase font-bold">
                {{ plan.slug }}
              </h3>
              <p class="text-sm font-medium">
                Membership Setup Fee - {{ plan.setup }}
              </p>
            </div>
          </template>
          <div class="default-content">
            <div class="card-body-wrapper">
              <div class="card-pricing text-center">
                <h3 class="text-3xl font-bold text-red-500">
                  {{ plan.price }}
                </h3>
                <p class="text-sm font-semibold">{{ plan.billing }}</p>
              </div>
              <div class="card-offers-lists-wrapper">
                <p
                  v-for="(offer, index) in plan.offers"
                  :key="index"
                  class="card-offers-lists text-sm"
                  :class="
                    evenNumber(plan.id)
                      ? evenNumber(index)
                        ? 'bg-[#f4c777]'
                        : 'bg-[#e9e9e9]'
                      : evenNumber(index)
                      ? 'bg-[#dcdcdc]'
                      : 'bg-[#ecf0f1]'
                  "
                >
                  <i>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.5 14.625C11.435 14.625 14.625 11.435 14.625 7.5C14.625 6.12593 14.236 4.84271 13.5622 3.75443L8.06336 9.86426C7.37069 10.6339 6.20513 10.7476 5.37677 10.1263L2.94167 8.3C2.49984 7.96863 2.4103 7.34183 2.74167 6.9C3.07304 6.45817 3.69984 6.36863 4.14167 6.7L6.57677 8.52633L12.2667 2.20422C11.0042 1.0671 9.3329 0.375 7.5 0.375C3.56497 0.375 0.375 3.56497 0.375 7.5C0.375 11.435 3.56497 14.625 7.5 14.625Z"
                        fill="white"
                      />
                    </svg>
                  </i>
                  {{ offer }}
                </p>
              </div>
            </div>
          </div>
          <template #bottom>
            <div class="button-wrapper">
              <!-- <AppButton
                class="card-btn"
                :button-class="'font-semibold uppercase card-btn'"
                :on-click="
                  () =>
                    handleGetStarted({
                      planName: plan.slug,
                      isNewClient: 'true'
                    })
                "
              >
                Get started
              </AppButton>
                target="_blank"
              href="https://app.jasfitnessng.com/new-members/subscription/"
             -->
              <PlanSubscribeBtn
                class="card-btn"
                :class="evenNumber(plan.id) ? 'bg-[#fcedba]' : 'bg-[#e5e5e5]'"
                :link-class="'font-semibold uppercase'"
                link-name="SubscriptionPage"
                :plan-name="plan.slug"
                is-new-client="true"
              >
                Get started
              </PlanSubscribeBtn>
            </div>
          </template>
        </CardSubscription>
      </div>
    </div>
  </section>
  <TheFooter />
</template>

<style lang="scss" scoped>
@import '../../../assets/styles/base';

.section {
  width: 100%;
  & .container {
    @include container {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }

    & .plans {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 2.5rem;
      width: 100%;

      @include responsive(tablet-width) {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        align-items: flex-start;
      }
      @include responsive(mobile-width) {
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      & .plan {
        min-width: 10rem;
        width: 20rem;
        height: 40rem;

        @include responsive(mobile-width) {
          min-width: 100%;
          height: max-content;
        }

        & .card-title {
          margin-bottom: 3rem;
        }

        & .default-content {
          position: relative;
          & .card-body-wrapper {
            position: relative;
            background-color: #fff;
            border-radius: 0.625rem;
            padding: 1.5rem 0;
            margin-bottom: 1rem;
            padding-top: 2.5rem;

            & .card-pricing {
              background-color: #fff;
              box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
              border-radius: 2rem;
              padding: 0.5rem 2.5rem;
              padding-top: 0.8rem;
              position: absolute;
              top: -2rem;
              left: 50%;
              transform: translateX(-50%);

              & h3,
              & p {
                line-height: 1.4rem;
                white-space: nowrap;
              }
            }

            & .card-offers-lists-wrapper {
              & .card-offers-lists {
                display: flex;
                gap: 1rem;
                align-items: center;
                line-height: 1rem;
                padding: 0.5rem 1rem;

                & i svg {
                  border-radius: 9999px;
                  box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.3);
                }
              }
            }
          }
        }

        & .button-wrapper {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: max-content;
          display: flex;
          justify-content: center;

          @include responsive(mobile-width) {
            position: relative;
            bottom: 0;
            left: 0;
            transform: translateX(0);
          }

          & button.card-btn {
            box-shadow: 0 4px 15px 2px rgba(0, 0, 0, 0.1);
            width: max-content;
            height: 100%;
            padding: 0.5rem 2rem;
            margin: 0.5rem auto;
            border-radius: 1.25rem;
            color: #303030;

            @include transition-ease();
            @include hover-state {
              background-color: darken(rgba(0, 0, 0, 0.1), 5%);
            }
          }
        }
      }
    }
  }
}
</style>
