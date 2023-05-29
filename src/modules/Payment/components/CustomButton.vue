<script setup lang="ts">
interface Props {
  buttonClass?: string;
  buttonText?: string;
  buttonDisabled?: boolean;
  onClick?: () => any;
}

withDefaults(defineProps<Props>(), {
  buttonClass: "btn btn-primary hover:",
  buttonText: "Click me!",
  buttonDisabled: false,
  onClick: () => {
    console.log("Custom button clicked");
  }
});
</script>

<template>
  <div>
    <button @click="onClick" :class="buttonClass" :disabled="buttonDisabled">
      {{ buttonText }}
    </button>
  </div>
</template>
