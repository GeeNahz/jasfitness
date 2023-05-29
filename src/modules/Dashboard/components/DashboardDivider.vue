<script setup lang="ts">

interface Props {
  name?: string;
  textColor?: string;
  textBackColor?: string;
  lineColor?: string;
}
withDefaults(defineProps<Props>(), {
  name: "Divider",
  textColor: "text-black",
  textBackColor: "bg-white",
  lineColor: "border-black",
});
</script>

<template>
  <div class="relative border my-2 md:my-4 w-full" :class="[lineColor]">
    <p
      class="absolute -top-3 left-[50%] -translate-x-[50%] rounded-full px-3"
      :class="[textColor, textBackColor]"
    >
      {{ name }}
    </p>
  </div>
</template>