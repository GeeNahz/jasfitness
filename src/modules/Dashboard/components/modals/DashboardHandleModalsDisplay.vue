<script setup lang="ts">
import ProfileUser from './ProfileUser.vue'
import SubFreeze from './SubFreeze.vue'
import ProfileFitness from './ProfileFitness.vue'
import SubShare from './SubShare.vue'
import PasswordReset from './PasswordReset.vue'
import { useDashboardStore } from '../../stores/dashboard'
import { storeToRefs } from 'pinia'

const dashboardStore = useDashboardStore();
const { profileModal, freezeSubscriptionModal, assessmentRecordModal, shareSubscriptionModal, passwordResetModal } = storeToRefs(dashboardStore);
</script>

<template>
  <div
    v-if="
      profileModal.open ||
      assessmentRecordModal.open ||
      freezeSubscriptionModal.open ||
      shareSubscriptionModal.open ||
      passwordResetModal.open
    "
    class="z-30 h-full w-full"
  >
    <div class="modals fixed w-full h-full z-30">
      <!-- profile -->
      <ProfileUser v-if="profileModal.open" />
      <!-- fitness profile (accessment record) -->
      <ProfileFitness v-if="assessmentRecordModal.open" />
      <!-- freeze subscription -->
      <SubFreeze v-if="freezeSubscriptionModal.open" />
      <!-- share subscription -->
      <SubShare v-if="shareSubscriptionModal.open" />
      <!-- settings password reset -->
      <PasswordReset v-if="passwordResetModal.open" />
    </div>
  </div>
</template>
