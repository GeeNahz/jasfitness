<template>
  <!-- freeze subscription -->
  <DashboardModalLayout :uid="freezeSubscriptionModal.id" @close="closeModal">
    <template #header> Freeze your subscription </template>
    <template #header-description>
      You can freeze your subscription for as long as 4 days
    </template>
    <template #content>
      <form @submit.prevent="freezeYourSub">
        <label for="freeze-sub" class="font-semibold text-sm"
          >Freeze duration:</label
        >
        <input
          id="freeze-sub"
          class="form-control"
          type="number"
          max="4"
          min="1"
          v-model="freezeDuration"
        />
      </form>
    </template>
    <template #actions>
      <div class="w-full flex gap-2 mt-1 lg:mt-3 justify-end btns">
        <button
          @click="closeModal(freezeSubscriptionModal.id)"
          class="duration-200 rounded-md hover:text-yellow-500 font-semibold text-gray-700 py-1 px-2 lg:py-2 lg:px-4"
        >
          Close
        </button>
        <button
          @click="freezeYourSub"
          class="duration-200 bg-yellow-500 rounded-md hover:bg-yellow-600 font-semibold text-gray-50 py-1 px-2 lg:py-2 lg:px-4"
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

const store = useStore()
const closeModal = (modalId) => {
  store.dispatch('dashboard/toggle_modal', modalId)
}
const freezeDuration = ref('')
const freezeYourSub = () => {
  console.log(Number(freezeDuration.value))
}

const freezeSubscriptionModal = computed(
  () => store.state.dashboard.modals.freezeSub
)
</script>
