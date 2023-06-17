<script setup lang="ts">
import { defineComponent } from "vue";
import type { Instructor } from "../types";

import FormDetailsInstructorCard from "./FormDetailsInstructorCard.vue";

defineComponent({
  name: "FormDetailsInstructorContainer",
});

interface Prop {
  instructors: Instructor[];
}

defineProps<Prop>();

function handleSelect(payload: any) {
  console.log(payload);
}
</script>

<template>
  <div class="">
    <div class="heading text-center font-semibold text-lg my-3">
      <p class="title text-center">Choose an Instructor</p>
    </div>
    
    <div class="instructors-card flex gap-4 flex-wrap">
      <FormDetailsInstructorCard
        @on-select="handleSelect"
        v-for="instructor in instructors"
        :key="instructor.id"
        :instructor="instructor"
      />
    </div>
  </div>
</template>