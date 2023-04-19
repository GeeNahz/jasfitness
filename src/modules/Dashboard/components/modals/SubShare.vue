<template>
  <!-- share subscription -->
  <DashboardModalLayout :uid="shareSubscriptionModal.id" @close="closeModal">
    <template #header> Share your subscription </template>
    <template #header-description>
      Share your current subscription with another member of the gym
    </template>
    <template #content>
      <form id="shareSub" @submit.prevent="shareYourSub">
        <label for="share-sub-username" class="font-semibold text-xs lg:text-sm"
          >Member username:</label
        >
        <input
          id="share-sub-username"
          class="w-full h-8 lg:h-10 rounded mb-2 lg:mb-3 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-yellow-500 border border-slate-500 px-2 text-base font-inter font-regular"
          type="text"
          v-model="username"
          required
        />
        <label for="share-sub-duration" class="font-semibold text-xs lg:text-sm"
          >Duration (days):
        </label>
        <input
          id="share-sub-duration"
          class="w-full h-8 lg:h-10 rounded mb-2 lg:mb-3 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-yellow-500 border border-slate-500 px-2 text-base font-inter font-regular"
          type="number"
          max="28"
          min="1"
          v-model="duration"
        />
      </form>
    </template>
    <template #actions>
      <div
        class="w-full mb-2 mt-3 flex gap-2 text-[#303030] text-xs lg:text-sm"
      >
        <button
          @click="closeModal(shareSubscriptionModal.id)"
          class="py-2 px-4 w-1/2 rounded-md font-inter font-medium border text-gray-500 bg-gray-100 hover:text-inherit transition-all"
        >
          Cancel
        </button>
        <button
          @click="shareYourSub"
          :class="{ 'disabled ': !activeFields || isLoading }"
          class="py-2 px-4 w-1/2 rounded-md font-inter font-medium bg-yellow-400 hover:bg-yellow-300 transition-all"
        >
          {{ isLoading ? 'Please wait...' : 'Share sub' }}
        </button>
      </div>
    </template>
  </DashboardModalLayout>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

import { validation } from '@/composables/validation.js'

import DashboardModalLayout from '../DashboardModalLayout.vue'

const { useIsValidHybridInputs, useIsWithinRange } = validation()
const store = useStore()

const closeModal = (modalId) => {
  clearFormValues()
  store.dispatch('dashboard/toggle_modal', modalId)
}
const username = ref('')
const duration = ref(0)
const isLoading = computed(() => store.state.dashboard.status.isLoading)
const activeFields = computed(
  () =>
    useIsValidHybridInputs([username.value, duration.value]) &&
    useIsWithinRange({ value: duration.value, minRange: 1, maxRange: 4 })
)
async function shareYourSub() {
  try {
    await store.dispatch('dashboard/dashboard_share_subscription', {
      username: username.value,
      duration: duration.value
    })

    store.dispatch('landingpage/success', {
      message: `You have successfully shared your subscription with ${username.value}`
    })
    closeModal(shareSubscriptionModal.value.id)
  } catch (error) {
    if (error.includes('400')) {
      store.dispatch('landingpage/error', {
        message: 'Sorry, there is no user using this username.'
      })
    } else {
      store.dispatch('landingpage/error', {
        message: 'Could not complete the request. Please try again later.'
      })
    }
  } finally {
    clearFormValues()
  }
}

function clearFormValues() {
  document.querySelector('#shareSub').reset()
  username.value = ''
  duration.value = ''
}

const shareSubscriptionModal = computed(
  () => store.state.dashboard.modals.shareSub
)
</script>

<style scope>
.disabled {
  pointer-events: none;
  opacity: 70%;
}
</style>
