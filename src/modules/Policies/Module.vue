<script setup lang="ts">
import { defineComponent } from "vue";

import NavTab from "./components/NavTabs.vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";

defineComponent({
  name: "PoliciesModule",
});
</script>

<template>
  <div class="policies-wrapper relative">
    <div class="sticky top-0 z-50">
      <TheNavbar />
    </div>
    <NavTab />
    <div class="pt-36 sm:pt-44">
      <router-view :key="$route.path" />
    </div>
    <TheFooter />
  </div>
</template>