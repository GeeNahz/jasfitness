<script setup lang="ts">
import { defineComponent } from "vue";

defineComponent({
  name: "AppButton",
});

interface Props {
  buttonClass?: string;
  buttonDisabled?: boolean;
  onClick?: () => any;
}

withDefaults(defineProps<Props>(), {
  buttonClass: "btn btn-primary hover:",
  buttonDisabled: false,
  onClick: () => console.log('Custon Btn Clicked'),
});
</script>

<template>
  <div>
    <button @click="onClick" :class="buttonClass" :disabled="buttonDisabled">
      <slot />
    </button>
  </div>
</template>