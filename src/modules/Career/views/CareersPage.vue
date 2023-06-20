<script setup lang="ts">
import { ref, watch } from "vue";

import type { SearchFilter } from "../types";

import AppChip from "@/components/AppChip.vue";
import CareerJobs from "../components/CareerJobs.vue";


const searchFilters = ref<SearchFilter[]>([
  { id: 1, content: "View all", isActive: true, },
  { id: 2, content: "Management", isActive: false, },
  { id: 3, content: "Design", isActive: false, },
  { id: 4, content: "Customer service", isActive: false, },
  { id: 5, content: "Marketing", isActive: false, },
  { id: 6, content: "Finance", isActive: false, },
  { id: 7, content: "Operations", isActive: false, },
]);
const activeSearchFilter = ref<SearchFilter>(); // use this to set the filter query on the endpoint
watch(searchFilters, () => {
  for (const filter of searchFilters.value) {
    if (filter.isActive === true) activeSearchFilter.value = filter;
  }
}, { immediate: true, deep: true, });

function deActivate() {
  for (const searchFilter of searchFilters.value) {
    searchFilter.isActive = false;
  }
}
function setActive(id: number) {
  deActivate();
  let search = searchFilters.value.find(searchFilter => searchFilter.id === id);
  if (search) search.isActive = true;
}

const jobAvailable = ref([
  {
    id: 1,
    title: "Content creator",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolor incidunt et magnam nam provident commodi vero deserunt officia cupiditate.",
    location: "Abuja, Nigeria",
    type: "Full time",
  },
  {
    id: 1,
    title: "Content creator",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolor incidunt et magnam nam provident commodi vero deserunt officia cupiditate.",
    location: "Abuja, Nigeria",
    type: "Full time",
  },
  {
    id: 2,
    title: "Content creator",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolor incidunt et magnam nam provident commodi vero deserunt officia cupiditate.",
    location: "Abuja, Nigeria",
    type: "Part time",
  },
  {
    id: 3,
    title: "Content creator",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolor incidunt et magnam nam provident commodi vero deserunt officia cupiditate.",
    location: "Abuja, Nigeria",
    type: "Full time",
  },
  {
    id: 4,
    title: "Content creator",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolor incidunt et magnam nam provident commodi vero deserunt officia cupiditate.",
    location: "Abuja, Nigeria",
    type: "Full time",
  },
  {
    id: 5,
    title: "Content creator",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolor incidunt et magnam nam provident commodi vero deserunt officia cupiditate.",
    location: "Abuja, Nigeria",
    type: "Full time",
  },
]);
</script>

<template>
  <div class="container">
    <header class="mb-8">
      <div class="pre-title-chip mb-8">
        <AppChip :chip-element="{ id: 'pre-title', content: `We're hiring!` }" :show-close-btn="false" />
      </div>
      <div class="title font-bold text-3xl mb-3">
        <h1>Find the perfect career</h1>
      </div>
      <div class="sub-title text-xs max-w-md">
        We’re looking for like-minded, passionate people to join our mission. We value clear communication, full ownership and responsibility.
      </div>
    </header>

    <div class="search-filters mb-6">
      <nav class="flex gap-1">
        <AppChip @click="setActive(searchFilter.id)" :show-close-btn="false" v-for="searchFilter in searchFilters" :key="searchFilter.id" :chip-element="searchFilter" />
      </nav>
    </div>

    <div class="jobs mb-44">
      <CareerJobs v-for="(career) in jobAvailable" :key="career.id" :career="career" />
    </div>
  </div>
</template>