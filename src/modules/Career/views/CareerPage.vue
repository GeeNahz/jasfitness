<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import type { Career } from "../types";
import Service from "@/services/GenericService/Service";

import ArrowTopRight from "@/components/icons/ArrowTopRight.vue";
import AppIconTimer from "@/components/icons/AppIconTimer.vue";
import GoogleMaps from "@/components/icons/GoogleMaps.vue";
import SpinningLoader from "@/components/SpinningLoader.vue";

const careerJob = ref<Career>();

const route = useRoute();

onMounted(async () => {
  try {
    const res = await Service.career(Number(route.params.id));
    careerJob.value = res.data;
  } catch (error) {
    console.log("Career err: ", error);
  }
});

function displayType(isFullTime: boolean) {
  return isFullTime ? "Full time" : "Part time";
}
</script>

<template>
  <div class="container px-8 mb-36 sm:mb-44">
    <div v-if="careerJob" class="career-wrapper font-quicksand">
      <header class="mb-5">
        <div class="title flex justify-between gap-2 items-start font-inter">
          <p class="font-bold text-2xl sm:text-4xl mb-5">{{ careerJob!.title }}</p>

          <div class="link">
            <router-link
              :to="{ name: 'apply', params: { career_id: careerJob!.id, career_title: careerJob!.title } }"
              class="whitespace-nowrap btn btn-warning text-white flex gap-1 items-center"
            >
              Apply now
              <ArrowTopRight />
            </router-link>
          </div>
        </div>
  

        <div class="info flex gap-4 whitespace-nowrap">
          <div class="type text-sm font-medium text-gray-400 flex items-center gap-1">
            <AppIconTimer class="text-2xl" />
            <p>{{ displayType((careerJob!.details.full_time as unknown) as boolean) }}</p>
          </div>
          <div class="location text-sm font-medium text-gray-400 flex items-center gap-1">
            <GoogleMaps class="text-2xl" />
            <p>{{ careerJob!.details.type }}</p>
          </div>
          <span class="badge badge-pill badge-success bg-opacity-80 grid place-content-center" :class="[careerJob.active ? 'bg-green-400' : 'bg-red-400']">{{ careerJob.active ? 'Active' : 'Inactive' }}</span>
        </div>
      </header>
  
      <div class="desc text-sm md:text-base mb-10">
        <p>{{ careerJob!.description }}</p>
      </div>
  
      <div class="you-do">
        <div class="section-title">
          <p class="font-inter">What you'll do:</p>
          <ul>
            <li v-for="(duty, index) in careerJob.details.responsibility" :key="index" class="list-disc">
              {{ duty }}
            </li>
          </ul>
        </div>
      </div>
  
      <div class="looking-for">
        <div class="section-title">
          <p class="font-inter">What we're looking for:</p>
          <ul>
            <li v-for="(qualification, index) in careerJob.details.qualifications" :key="index" class="list-disc">
              {{ qualification }}
            </li>
          </ul>
        </div>
      </div>
  
      <div class="haves">
        <div class="section-title">
          <p class="font-inter">Nice to haves:</p>
          <ul>
            <li v-for="(have, index) in careerJob.details.preferred" :key="index" class="list-disc">
              {{ have }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="flex flex-col items-center justify-center h-96 w-full bg-gray-100 text-gray-500">
        <SpinningLoader class="text-4xl" />
        <p class="text-sm">Please wait...</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-title {
  @apply mb-10;

  & p {
    @apply font-medium text-base sm:text-xl mb-2;
  }
  
  & ul {
    @apply ml-5;

    & li {
      @apply text-xs md:text-sm mb-2;
    }
  }
}
</style>