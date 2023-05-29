<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'CardSubscription'
})
interface Props {
  backgroundColor: string;
}
withDefaults(defineProps<Props>(),{ backgroundColor: 'bg-white' })
</script>
<template>
  <div
    class="card-container rounded-xl shadow drop-shadow-2xl"
    :class="[backgroundColor]"
    style="padding: 1rem;"
  >
    <div class="top">
      <p>
        <slot name="top">Card title</slot>
      </p>
    </div>
    <slot>Default Content</slot>
    <div class="bottom">
      <slot name="bottom">Card footer</slot>
    </div>
  </div>
</template>