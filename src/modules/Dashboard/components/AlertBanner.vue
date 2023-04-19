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

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import AppIconSnowflake from '@/components/icons/AppIconSnowflake.vue'

const store = useStore()
const freezedSubDetail = computed(() => store.state.dashboard.freezedSubStatus)

async function unfreezeSubscripttion() {
  try {
    await store.dispatch('dashboard/unfreeze_subscription')
    store.dispatch('landingpage/success', {
      message: 'You have successfully unfreezed your subscription.',
      timeout: 7000
    })
    store.dispatch('dashboard/freezed_sub_toggle', {
      is_freezed: false,
      details: {}
    })
  } catch (error) {
    store.dispatch('landingpage/error', {
      message: 'Something went wrong. Please try again.',
      timeout: 7000
    })
  }
}
</script>
