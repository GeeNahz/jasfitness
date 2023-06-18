<script setup lang="ts">
import { defineComponent } from "vue";
import type { Instructor } from "../types";

import FormDetailsInstructorCard from "./FormDetailsInstructorCard.vue";

defineComponent({
  name: "FormDetailsInstructorContainer",
});

interface Prop {
  instructors?: Instructor[];
  selectedInstructor?: number | string;
}

defineProps<Prop>();

const emit = defineEmits<{
  (event: "instructorSelected", payload: number): void;
}>();

function handleSelect(id: number) {
  emit("instructorSelected", id);
}
</script>

<template>
  <div class="my-3">
    <div class="heading text-center font-semibold text-lg mb-4">
      <p class="title text-center">Choose an Instructor</p>
    </div>
    
    <div class="instructors-card flex gap-4 flex-wrap">
      <FormDetailsInstructorCard
        @on-select="handleSelect"
        v-for="instructor in instructors"
        :key="instructor.id"
        :instructor="instructor"
        :selected="selectedInstructor"
      />
    </div>
  </div>
</template>