<template>
  <!-- freeze subscription -->
  <DashboardModalLayout :uid="freezeSubscriptionModal.id" @close="closeModal">
    <template #header> Freeze your subscription </template>
    <template #header-description>
      You can freeze your subscription for as long as 4 days
    </template>
    <template #content>
      <form id="freeze-sub-form" @submit.prevent="freezeYourSub">
        <label for="freeze-sub" class="font-semibold text-sm"
          >Freeze duration:</label
        >
        <input
          id="freeze-sub"
          class="w-full h-8 lg:h-10 rounded mb-2 lg:mb-3 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-yellow-500 border border-slate-500 px-2 text-xs lg:text-sm font-inter font-regular"
          type="number"
          max="4"
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

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

import DashboardModalLayout from '../DashboardModalLayout.vue'

const store = useStore()
const closeModal = (modalId) => {
  store.dispatch('dashboard/toggle_modal', modalId)
}
const freezeDuration = ref('')
async function freezeYourSub() {
  try {
    await store.dispatch('dashboard/dashboard_freeze_subscription', {
      duration: Number(freezeDuration.value)
    })

    store.dispatch('dashboard/dashboard_home')
    store.dispatch('landingpage/success', {
      message: `You have successfully frozen your sub for ${freezeDuration.value} days`
    })
    closeModal(freezeSubscriptionModal.value.id)
  } catch (error) {
    store.dispatch('landingpage/error', {
      message: 'Unable to process your request. Please try again'
    })
  } finally {
    document.querySelector('#freeze-sub-form').reset()
    freezeDuration.value = ''
  }
}

const freezeSubscriptionModal = computed(
  () => store.state.dashboard.modals.freezeSub
)
</script>
