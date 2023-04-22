<template>
  <div>
    <AppButton
      :button-class="'bg-yellow-600 px-3 md:px-4 py-2 text-white font-semibold flex flex-col-reverse md:flex-row items-center justify-center md:space-x-2 rounded-xl hover:bg-yellow-500 active:bg-yellow-700 transition'"
      :on-click="resubscribeHandler"
    >
      <p class="hidden md:block">Resubscribe</p>
      <p class="text-[10px] md:hidden">Re-sub</p>
      <AppIconRenew />
    </AppButton>
  </div>
</template>

<script setup>
import AppButton from '@/components/AppButton.vue'
import AppIconRenew from '@/components/icons/AppIconRenew.vue'
import { useStore } from 'vuex' // remove comment for new resub
import { computed } from 'vue' // remove comment for new resub
import { useRouter } from 'vue-router' // remove comment for new resub
import { useResubscribe } from '../composables/resubscribe.js' // remove comment for new resub

const store = useStore() // remove comment for new resub
const userId = computed(() => store.state.auth.user.user_id) // remove comment for new resub
const dashboardHomeState = computed(() => store.state.dashboard.dashboardBase) // remove comment for new resub
const router = useRouter() // remove comment for new resub
const resubscribeHandler = async () => {
  let profile = {} // remove comment for new resub
  try {
    profile = await store.dispatch('dashboard/dashboard_profile', userId.value)
  } catch (err) {
    console.log(err.message)
  }
  useResubscribe({
    router: router,
    email: profile.email,
    planName: dashboardHomeState.value.plan_sub
  })
  // window.open(
  //   'https://app.jasfitnessng.com/new-members/re-subscription/',
  //   '_blank'
  // )
  // window.focus()
}
</script>
