<script setup lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";

defineComponent({
  name: "CareerModule",
});

const route = useRoute();
</script>

<template>
  <div class="career-wrapper h-full w-full">
    <div class="sticky top-0 z-50">
      <TheNavbar />
    </div>
    <div class="content pt-8 sm:pt-16 font-inter">
      <router-view :key="route.path"></router-view>
    </div>
    <TheFooter />
  </div>
</template>