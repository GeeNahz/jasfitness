<script setup lang="ts">
import AppChip from "@/components/AppChip.vue";
import ArrowTopRight from "@/components/icons/ArrowTopRight.vue";
import type { Career } from "../types";

interface Props {
  career: Career;
}

defineProps<Props>();
</script>

<template>
  <div class="career-jobs-container mb-1 border-b-2 py-4 first:border-t-2">
    <div class="title w-full flex justify-between mb-2">
      <div class="text-lg font-semibold flex gap-4 items-center">
        <p>{{ career.title }}</p>
        <span class="badge badge-pill badge-success bg-opacity-80" :class="[career.active ? 'bg-green-400' : 'bg-red-400']">{{ career.active ? 'Active' : 'Inactive' }}</span>
      </div>

      <div class="details-link">
        <router-link class="text-[#B48B4D] text-sm font-bold transition-colors hover:text-[#e4b164] flex gap-1 items-center" :to="{ name: 'detail', params: { id: career.id } }">
          <span>Details</span>
          <ArrowTopRight class="text-lg" />
        </router-link>
      </div>
    </div>

    <div class="description mb-3 max-w-3xl">
      <p class="text-xs font-light">{{ career.description }}</p>
    </div>

    <div class="info flex gap-px">
      <AppChip :chip-element="{ id: career.id, content: `${career.details.full_time ? 'Full time' : 'Part time'}` }" :show-close-btn="false" />
      <AppChip :chip-element="{ id: career.id, content: career.details.type }" :show-close-btn="false" />
    </div>
  </div>
</template>
