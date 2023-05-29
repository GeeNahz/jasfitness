<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import { validation } from '@/composables/validation.js'
import { useTriggerFreezeAlert } from '@/composables/triggerFreezedAlert';
import { useDashboardStore } from "../../stores/dashboard";

import DashboardModalLayout from './DashboardModalLayout.vue'
import { storeToRefs } from 'pinia';

const dashboardStore = useDashboardStore();

function closeModal(modalId: string) {
  clearFormValues()
  dashboardStore.toggleModal(modalId);
}

const { useIsValidNumericInputs, useIsWithinRange } = validation()

const { isLoading, dashboardBase, freezeSubscriptionModal } = storeToRefs(dashboardStore);

const freezeDuration = ref(0)
const activeFields = computed(
  () =>
    useIsValidNumericInputs([freezeDuration.value]) &&
    useIsWithinRange({
      value: freezeDuration.value,
      minRange: 1,
      maxRange: dashboardBase.value?.freeze?.total
    })
)
async function freezeYourSub() {
  const { success } = await dashboardStore.dashboard_freeze_subscription(Number(freezeDuration.value));

  
  if (success.value) {
    await dashboardStore.dashboard_home();
    await dashboardStore.dashboard_subscription();
    
    closeModal(freezeSubscriptionModal.value.id)
    clearFormValues()
  }
}

function clearFormValues() {
  (document.querySelector('#freeze-sub-form') as HTMLFormElement).reset()
  freezeDuration.value = 0
}

watch(dashboardBase, () => {
  if (dashboardBase.value?.frozen)
    // if it is, then trigger the frozen sub modal then.
    useTriggerFreezeAlert({
      freezeObject: dashboardBase.value,
      customStore: dashboardStore.freezed_sub_toggle({
        is_freezed: true,
        details: {
          message: `Your subscription is frozen`
        }
      })
    })
})
</script>

<template>
  <!-- freeze subscription -->
  <DashboardModalLayout :uid="freezeSubscriptionModal.id" @close="closeModal">
    <template #header> Freeze your subscription </template>
    <template #header-description>
      You can freeze your subscription for as long as
      <span>{{ dashboardBase?.freeze?.total }}</span> days
    </template>
    <template #content>
      <form id="freeze-sub-form" @submit.prevent="freezeYourSub">
        <label for="freeze-sub" class="font-semibold text-sm"
          >Freeze duration:</label
        >
        <input
          id="freeze-sub"
          class="w-full h-8 lg:h-10 rounded mb-2 lg:mb-3 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-yellow-500 border border-slate-500 px-2 text-base font-inter font-regular"
          type="number"
          :max="dashboardBase?.freeze?.total"
          min="1"
          v-model="freezeDuration"
        />
      </form>
    </template>
    <template #actions>
      <div
        class="w-full mb-2 mt-3 flex gap-2 text-[#303030] text-xs lg:text-sm"
      >
        <button
          @click="closeModal(freezeSubscriptionModal.id)"
          class="py-2 px-4 w-1/2 rounded-md font-inter font-medium border text-gray-500 bg-gray-100 hover:text-inherit transition-all"
        >
          Cancel
        </button>
        <button
          @click="freezeYourSub"
          :class="{ 'disabled ': !activeFields || isLoading }"
          class="py-2 px-4 w-1/2 rounded-md font-inter font-medium bg-yellow-400 hover:bg-yellow-300 transition-all"
        >
          {{ isLoading ? 'Please wait...' : 'Freeze sub' }}
        </button>
      </div>
    </template>
  </DashboardModalLayout>
</template>

<style scope>
.disabled {
  pointer-events: none;
  opacity: 70%;
}
</style>