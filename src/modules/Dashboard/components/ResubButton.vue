<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref, onMounted, nextTick } from "vue";

import { useAuthStore } from "@/modules/Authentication/stores/auth";
import { useDashboardStore } from "../stores/dashboard";

import AppIconRenew from "@/components/icons/AppIconRenew.vue";
import ResubModal from './ResubModal.vue';

const authStore = useAuthStore();
const { userId } = storeToRefs(authStore);

const dashboardStore = useDashboardStore();
const { dashboardBase: dashboardHomeState } = storeToRefs(dashboardStore);

const queryOptions = ref()
function setQueryOptions(profile: any) {
  queryOptions.value = {
    email: profile?.email,
    name: profile?.name,
    userId: userId.value,
    planName: dashboardHomeState.value?.sub_plan,
    isNewClient: false,
  };
}
async function getClientProfile() {
  const { success, data } = await dashboardStore.dashboard_profile(userId.value as number);
  if (success.value) {
    setQueryOptions(data.value);
  }
}

onMounted(async () => {
  nextTick(() => {
    getClientProfile();
  });
});

const showModal = ref<boolean>(false);
function toggleModal() {
  showModal.value ? showModal.value = false : showModal.value = true;
}
</script>

<template>
  <div>
    <!-- :to="{ name: 'SubscriptionPage', query: queryOptions }"
    target="_blank" -->
    <button
      class="bg-yellow-600 px-3 md:px-4 py-2 text-white font-semibold flex flex-col-reverse md:flex-row items-center justify-center md:space-x-2 rounded-xl hover:bg-yellow-500 active:bg-yellow-700 transition"
    >
      <p class="hidden md:block">Resubscribe</p>
      <p class="text-[10px] md:hidden">Re-sub</p>
      <AppIconRenew />
    </button>

    <div v-if="showModal">
      <ResubModal @close="toggleModal" :query="queryOptions" />
    </div>
  </div>
</template>