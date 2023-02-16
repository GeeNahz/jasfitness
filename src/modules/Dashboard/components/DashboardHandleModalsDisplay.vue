<template>
  <div>
    <div class="modals fixed w-full h-full z-30">
      <!-- profile -->
      <ProfileUser v-if="profileModal.open" />
      <!-- fitness profile (accessment record) -->
      <ProfileFitness v-if="accessmentRecordModal.open" />
      <!-- freeze subscription -->
      <SubFreeze v-if="freezeSubscriptionModal.open" />
      <!-- share subscription -->
      <SubShare v-if="shareSubscriptionModal.open" />
      <!-- settings password reset -->
      <PasswordReset v-if="passwordResetModal.open" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import ProfileUser from './modals/ProfileUser.vue'
import SubFreeze from './modals/SubFreeze.vue'
import ProfileFitness from './modals/ProfileFitness.vue'
import SubShare from './modals/SubShare.vue'
import PasswordReset from './modals/PasswordReset.vue'

const store = useStore()

const profileModal = computed(() => store.state.dashboard.modals.profile)
const freezeSubscriptionModal = computed(
  () => store.state.dashboard.modals.freezeSub
)
const accessmentRecordModal = computed(
  () => store.state.dashboard.modals.accessmentRecord
)
const shareSubscriptionModal = computed(
  () => store.state.dashboard.modals.shareSub
)
const passwordResetModal = computed(
  () => store.state.dashboard.modals.passwordReset
)
</script>
