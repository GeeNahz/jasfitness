<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { useMeta } from 'vue-meta'
import { useAlertStore } from "@/stores/alerts";

import Service from "@/services/GenericService/Service";

import TheFooter from "@/components/TheFooter.vue";
// import PlanSubscribeBtn from "../components/PlanSubscribeBtn.vue"; // delete this component
import type { Plan } from "../types";
import PlanCard from '../components/cards/PlanCard.vue';

useMeta({
  title: "Plans",
});

const plans = ref<Plan[]>([
  {
    id: 1,
    amount: '20000',
    billing: 'BILLED MONTHLY',
    setup: 'N3,000',
    title: 'Premium',
    vat: 23,
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
    amount: '40000',
    billing: 'BILLED MONTHLY',
    setup: 'N3,000',
    title: 'VIP',
    vat: 33,
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
]); // get plans from endpoint

/**For stagger effect */
// function animatePlanCards() {
//   gsap.fromTo(
//     '.plan',
//     {
//       opacity: 0,
//       y: -50
//     },
//     {
//       duration: 1.5,
//       opacity: 1,
//       y: 0,
//       delay: 0.5,
//       ease: 'power3.inOut',
//       stagger: 0.3
//     }
//   )
// }

const alertStore = useAlertStore();

async function getPlans() {
  try {
    const res = await Service.fitness_plan();
    // plans.value = res.data.results;
    console.log(res);
    // animatePlanCards();
  } catch (error) {
    alertStore.error("Unable to get plans. Please refresh your brower to try again.");
  }
}

onMounted(() => {
  getPlans();
});
</script>

<template>
  <section class="section">
    <div class="container">
      <header class="text-center mb-5 font-inter">
        <h3 class="text-5xl font-bold">We have a plan for everyone</h3>
        <p>Pick a plan suitable for you 💪🏽</p>
      </header>
      <div class="plans">
        <PlanCard v-for="plan in plans" :key="plan.id" :plan="plan" />
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
      // align-items: flex-start;
      gap: 1.5rem;
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
