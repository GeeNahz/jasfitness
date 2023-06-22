<script setup lang="ts">
import IconClose from "@/components/icons/IconClose.vue";
import FormContainer from "@/modules/Payment/components/FormContainer.vue";
import { onBeforeUnmount } from "vue";
import { useDashboardStore } from "../stores/dashboard";

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

const emit = defineEmits<{
  (event: "close"): void;
}>();

const body = document.querySelector("body");

function toggleScroll(value: "hidden" | "auto") {
  if (body) {
    body.style.overflowY = value;
  }
}

toggleScroll("hidden");
onBeforeUnmount(() => {
  toggleScroll("auto");
});

const dashboardStore = useDashboardStore();
async function closeModal() {
  await dashboardStore.dashboard_home();
  await dashboardStore.dashboard_subscription();
  emit("close");
}
</script>

<template>
  <teleport to='body'>
    <div class="backdrop">
      <div class="wrapper">
        <div @click="closeModal" class="close-toggle">
          <IconClose />
        </div>
        <FormContainer
          :is-prop-available="true"
          :email="query.email"
          :is-new-client="query.isNewClient"
          :name="query.name"
          :plan-name="query.planName"
          :user-id="query.userId"
          @close="closeModal"
        />
      </div>
    </div>
  </teleport>
</template>

<style scoped lang="scss">
.backdrop {
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  /* padding: 2rem; */
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
}

.wrapper {
  position: relative;
  height: fit-content;
  margin: 0 auto;
}
.close-toggle {
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  background-color: rgba(#fff, 0.5);
  border-radius: 50%;
  padding: 0.2rem;
  top: 2%;
  right: 2%;
  z-index: 999;
  transition: background-color 0.2s ease-out;

  @media screen and (min-width: 768px) {
    padding: 0.5rem;
    top: 2%;
    right: 1%;
  }

  &:hover {
    background-color: rgba(#fff, 0.7);
  }
}
</style>