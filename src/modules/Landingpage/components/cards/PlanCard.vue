<script setup lang="ts">
import type { Plan } from '../../types';


interface Prop {
  plan: Plan;
}

defineProps<Prop>();
function displayName(planName: string) {
  return planName.split("-")[0];
}
</script>
<template>
  <div class="card-container text-[#1f1f1f] transition-all duration-200 hover:text-white hover:bg-[#1f1f1f] w-full sm:w-80 p-4 sm:p-5 rounded-xl font-inter outline outline-2 hover:outline-none">
    <div class="card-wrapper">
      <div class="card-body flex flex-col mb-4 min-h-[350px]">
        <div class="title font-medium text-lg sm:text-xl mb-2">
          <p>{{ displayName(plan.title) }}</p>
        </div>
        <div class="amount mb-2">
          <p class="font-medium text-4xl sm:text-5xl">N{{ plan.amount }}<span class="gray-text font-normal text-xs sm:text-sm text-[#555555]">/monthly</span></p>
        </div>
        <div class="desc mb-4 gray-text font-light text-xs text-[#555555]">
          Membership setup fee - {{ plan.setup }}
        </div>
        <div class="offers">
          <ul>
            <li v-for="(offer, index) in plan.offers" :key="index + 1" class="flex items-baseline gap-3 mb-2">
              <div class="bullet p-1 rounded-full bg-[#555555]"></div>
              <p class="font-light text-xs gray-text text-[#555]">{{ offer }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-button mt-auto">
        <div class="action-btn h-10 w-full bg-[#1f1f1f] text-[#fff] font-semibold rounded-md overflow-hidden text-center">
          <router-link
            :to="{ name: 'SubscriptionPage', query: { planName: plan.title, isNewClient: 'true' } }"
            class="action-link h-full w-full flex justify-center items-center text-center"
            target="_blank"
          >
            <p>
              Choose Plan
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card-container {
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover .gray-text {
    color: #aaaaaa;
  }

  &:hover .bullet {
    background-color: #aaaaaa;
  }

  &:hover .action-link {
    background-color: #fff;
    color: #1f1f1f;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background-color: #f8f8f8;
    }
    &:active {
      background-color: #cecece;
    }
  }
}
</style>