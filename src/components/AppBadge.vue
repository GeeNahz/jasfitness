<script setup lang="ts">
type ColorCode = "red" | "green" | "blue" | "gray";
interface Props {
  msg?: string;
  active?: boolean;
  color: ColorCode,
}

withDefaults(defineProps<Props>(), {
  active: false,
});

const colorCodes = {
  red: "bg-red-400",
  green: "bg-green-400",
  blue: "bg-blue-400",
  gray: "bg-slate-400",
};
</script>

<template>
  <span
    class="badge badge-pill bg-opacity-80 grid place-content-center max-w-fit p-1 text-xs"
    :class="colorCodes[color]"
  >
    <p v-if="msg">{{ msg }}</p>
    <p v-else>
      <slot></slot>
    </p>
  </span>
</template>