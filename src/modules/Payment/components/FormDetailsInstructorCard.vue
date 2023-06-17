<script setup lang="ts">
import { defineComponent } from "vue";
import type { Instructor } from "../types";

defineComponent({
  name: "FormDetailsInstructorCard",
});

interface Props {
  instructor: Instructor;
}

defineProps<Props>();

defineEmits<{
  (event: "onSelect", payload: Instructor): void;
}>();
</script>

<template>
  <div @click="$emit('onSelect', instructor)" class="wrapper transition-shadow shadow-md hover:shadow-lg min-w-[140px] w-[140px] p-3 rounded focus:shadow-2xl" tabindex="0">
    <div class="profile-img p-5 rounded-full bg-neutral-400 w-20 h-20 mx-auto mb-3">
      <img :src="instructor.avatar" :alt="instructor.name" class="h-full w-full object-cover" />
    </div>

    <div class="profile-details text-center">
      <div class="name text-xs mb-2 font-medium">
        <p>{{ instructor.name }}</p>
      </div>

      <div class="specialty text-xs text-slate-400">
        <p>{{ instructor.specialty }}</p>
      </div>
    </div>
  </div>
</template>