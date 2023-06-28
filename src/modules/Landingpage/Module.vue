<script setup lang="ts">
import { defineComponent } from 'vue';
import TheNavbar from "@/components/TheNavbar.vue";
import DisplayHandler from "./components/modals/DisplayHandler.vue"
defineComponent({
  name: "LandingpageModule",
});
</script>
<template>
  <div class="font-quicksand">
    <div class="fixed z-50">
      <TheNavbar />
    </div>
    <div>
      <DisplayHandler />
      <router-view :key="$route.path" />
    </div>
  </div>
</template>