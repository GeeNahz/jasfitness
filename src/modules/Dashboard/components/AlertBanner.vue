<script setup lang="ts">
import { defineComponent } from "vue";

import AppIconSnowflake from '@/components/icons/AppIconSnowflake.vue'
import { useDashboardStore } from '../stores/dashboard';
import { storeToRefs } from 'pinia';

defineComponent({ name: "AlertBanner" })

const dashboardStore = useDashboardStore();
const { freezedSubDetail } = storeToRefs(dashboardStore);

async function unfreezeSubscripttion() {
  const { success } = await dashboardStore.unfreeze_subscription();

  if (success.value) {
    await dashboardStore.dashboard_home();
    await dashboardStore.dashboard_subscription();

    dashboardStore.freezed_sub_toggle({
      is_freezed: false,
      details: { message: "" }
    });
  }
}
</script>

<template>
  <div
    v-if="freezedSubDetail.is_freezed"
    class="w-full h-fit px-3 py-2 md:px-2 bg-blue-50 border-2 border-blue-100 rounded-md flex gap-3 md:gap-4 justify-center items-center"
  >
    <div class="icon-container w-max text-blue-500 text-base md:text-xl">
      <div class="icon">
        <AppIconSnowflake />
      </div>
    </div>
    <div class="content">
      <p class="text-xs md:text-sm text-blue-800 font-medium">
        {{ freezedSubDetail.details.message }}
      </p>
    </div>
    <div class="action">
      <button
        @click="unfreezeSubscripttion"
        class="py-2 px-2 bg-blue-500 font-semibold text-xs text-white rounded"
      >
        Unfreeze
      </button>
    </div>
  </div>
</template>
