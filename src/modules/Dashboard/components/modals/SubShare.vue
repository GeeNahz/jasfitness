<template>
  <!-- share subscription -->
  <DashboardModalLayout :uid="shareSubscriptionModal.id" @close="closeModal">
    <template #header> Share your subscription </template>
    <template #header-description>
      Share your current subscription with another member of the gym
    </template>
    <template #content>
      <form id="shareSub" @submit.prevent="shareYourSub">
        <label for="freeze-sub" class="font-semibold text-xs lg:text-sm"
          >Member username:</label
        >
        <input
          id="freeze-sub"
          class="w-full h-8 lg:h-10 rounded mb-2 lg:mb-3 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-yellow-500 border border-slate-500 px-2 text-xs lg:text-sm font-inter font-regular"
          type="text"
          v-model="shareSubUsername"
          required
        />
        <label for="freeze-sub" class="font-semibold text-xs lg:text-sm"
          >Duration (days):
        </label>
        <input
          id="freeze-sub"
          class="w-full h-8 lg:h-10 rounded mb-2 lg:mb-3 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-yellow-500 border border-slate-500 px-2 text-xs lg:text-sm font-inter font-regular"
          type="number"
          max="28"
          min="1"
          v-model="shareSubDuration"
        />
      </form>
    </template>
    <template #actions>
      <div class="w-full flex gap-2 pt-2 lg:pt-3 justify-end btns">
        <button
          @click="closeModal(shareSubscriptionModal.id)"
          class="duration-200 rounded-md hover:text-yellow-500 font-semibold text-sm lg:text-base text-gray-700 py-1 px-3 lg:py-2 lg:px-4"
        >
          Close
        </button>
        <button
          @click="shareYourSub"
          class="duration-200 bg-yellow-500 rounded-md hover:bg-yellow-600 font-semibold text-sm lg:text-base text-gray-50 py-1 px-3 lg:py-2 lg:px-4"
        >
          Send
        </button>
      </div>
    </template>
  </DashboardModalLayout>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

import DashboardModalLayout from '../DashboardModalLayout.vue'

const closeModal = (modalId) => {
  store.dispatch('dashboard/toggle_modal', modalId)
}
const shareSubUsername = ref('')
const shareSubDuration = ref('')
async function shareYourSub() {
  try {
    const res = await store.dispatch('dashboard/dashboard_share_subscription', {
      username: shareSubUsername.value,
      duration: shareSubDuration.value
    })
    console.log(res)
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
    document.querySelector('#shareSub').reset()
    shareSubUsername.value = ''
    shareSubDuration.value = ''
  }
}

const store = useStore()
const shareSubscriptionModal = computed(
  () => store.state.dashboard.modals.shareSub
)
</script>
