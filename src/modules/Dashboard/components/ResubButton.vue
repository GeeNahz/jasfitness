<template>
  <div>
    <RouterLink
      :to="{ name: 'SubscriptionPage', query: queryOptions }"
      target="_blank"
      class="bg-yellow-600 px-3 md:px-4 py-2 text-white font-semibold flex flex-col-reverse md:flex-row items-center justify-center md:space-x-2 rounded-xl hover:bg-yellow-500 active:bg-yellow-700 transition"
    >
      <!-- :on-click="resubscribeHandler" -->
      <p class="hidden md:block">Resubscribe</p>
      <p class="text-[10px] md:hidden">Re-sub</p>
      <AppIconRenew />
    </RouterLink>
  </div>
</template>

<script setup>
// import AppButton from '@/components/AppButton.vue'
import AppIconRenew from '@/components/icons/AppIconRenew.vue'
import { useStore } from 'vuex' // remove comment for new resub
import { computed, ref, onMounted, nextTick } from 'vue' // remove comment for new resub
// import { useRouter } from 'vue-router' // remove comment for new resub
// import { useResubscribe } from '../composables/resubscribe.js' // remove comment for new resub

const store = useStore() // remove comment for new resub
const userId = computed(() => store.state.auth.user.user_id) // remove comment for new resub
const dashboardHomeState = computed(() => store.state.dashboard.dashboardBase) // remove comment for new resub
// const router = useRouter() // remove comment for new resub
const profile = ref()
const queryOptions = ref()
function setQueryOptions(profile) {
  queryOptions.value = {
    email: profile?.email,
    name: profile?.name,
    userId: userId.value,
    planName: dashboardHomeState.value?.sub_plan,
    isNewClient: false
  }
}
async function getClientProfile() {
  try {
    profile.value = await store.dispatch(
      'dashboard/dashboard_profile',
      userId.value
    )
    setQueryOptions(profile.value)
  } catch (err) {
    store.dispatch('landingpage/error', {
      message: 'Unable to retrieve user profile'
    })
  }
}

onMounted(async () => {
  nextTick(() => {
    getClientProfile()
  })
})

// const resubscribeHandler = async () => {
//   let profile = {} // remove comment for new resub
//   useResubscribe({
//     router: router,
//     email: profile.email,
//     name: profile.name,
//     userId: userId.value,
//     planName: dashboardHomeState.value.sub_plan
//   })
// }
</script>
