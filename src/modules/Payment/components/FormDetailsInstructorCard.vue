<script setup lang="ts">
import { defineComponent } from "vue";
import type { Instructor } from "../types";

defineComponent({
  name: "FormDetailsInstructorCard",
});

interface Props {
  instructor: Instructor;
  selected?: number | string;
}

defineProps<Props>();

defineEmits<{
  (event: "onSelect", id: number): void;
}>();
</script>

<template>
  <div
    class="cursor-pointer wrapper transition-shadow shadow-md hover:shadow-lg focus:shadow-2xl sm:min-w-[140px] w-full sm:w-[140px] p-3 rounded"
    :class="{ 'shadow-2xl': selected === instructor.id }"
    @focus="$emit('onSelect', instructor.id)"
    tabindex="0"
  >
    <div class="profile-img rounded-full bg-neutral-400 w-20 h-20 mx-auto mb-3 overflow-hidden">
      <img :src="instructor.others.avatar" :alt="instructor.name" class="h-full w-full object-cover" />
    </div>

    <div class="profile-details text-center">
      <div class="name text-xs mb-2 font-medium">
        <p>{{ instructor.name }}</p>
      </div>

      <div class="specialty text-xs text-slate-400">
        <p>{{ instructor.others.specialty }}</p>
      </div>
    </div>
  </div>
</template>