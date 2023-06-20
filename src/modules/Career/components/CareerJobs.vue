<script setup lang="ts">
import AppChip from "@/components/AppChip.vue";

interface Props {
  career: Career;
}

defineProps<Props>();
</script>

<template>
  <div class="career-jobs-container mb-1 border-b-2 py-4 first:border-t-2">
    <div class="title w-full flex justify-between mb-2">
      <div class="text-lg font-semibold">
        <p>{{ career.title }}</p>
      </div>

      <div class="details-link">
        <router-link class="text-[#B48B4D] text-sm font-bold transition-colors hover:text-[#e4b164]" :to="{ name: 'detail', params: { id: career.id } }">Details</router-link>
      </div>
    </div>

    <div class="description mb-3 max-w-3xl">
      <p class="text-xs font-light">{{ career.description }}</p>
    </div>

    <div class="info flex gap-px">
      <AppChip :chip-element="{ id: career.id, content: career.location }" :show-close-btn="false" />
      <AppChip :chip-element="{ id: career.id, content: career.type }" :show-close-btn="false" />
    </div>
  </div>
</template>
