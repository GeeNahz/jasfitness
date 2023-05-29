<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({ name: 'PlanSubscribeBtn' })

interface Props {
  linkName: string;
  linkClass?: string;
  planName?: string;
  isNewClient?: string | 'true';
}
defineProps<Props>()
</script>
<template>
  <router-link
    :to="{ name: linkName, query: { planName, isNewClient } }"
    class="card-btn"
    :class="linkClass"
    target="_blank"
  >
    <slot />
  </router-link>
</template>
<style scoped lang="scss">
@import '../../../assets/styles/base';

.card-btn {
  box-shadow: 0 4px 15px 2px rgba(0, 0, 0, 0.1);
  width: max-content;
  height: 100%;
  padding: 0.5rem 2rem;
  margin: 0.5rem auto;
  border-radius: 1.25rem;
  color: #303030;

  @include transition-ease();
  @include hover-state {
    background-color: darken(rgba(0, 0, 0, 0.1), 5%);
  }
}
</style>