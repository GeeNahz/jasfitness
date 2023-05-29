<script setup lang="ts">
import FormContainer from "@/modules/Payment/components/FormContainer.vue";

interface ResubQuery {
  email: string;
  name: string;
  userId: string | number;
  planName: string;
  isNewClient: boolean;
}

interface Props {
  query: ResubQuery;
}
defineProps<Props>();

defineEmits<{
  (event: "close"): void;
}>();
</script>

<template>
  <div class="backdrop">
    <button @click="$emit('close')" class="btn btn-primay focus:">Close Modal</button>
    <teleport to='body'>
      <FormContainer
        :is-prop-available="true"
        :email="query.email"
        :is-new-client="query.isNewClient"
        :name="query.name"
        :plan-name="query.planName"
        :user-id="query.userId"
      />
    </teleport>
  </div>
</template>

<style scoped>
.backdrop {
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
}
</style>