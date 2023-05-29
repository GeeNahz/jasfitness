<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useObjectValidator } from '@/composables/objectCheck'
import { useAuthStore } from '@/modules/Authentication/stores/auth'
import { useDashboardStore } from '../../stores/dashboard'

import DashboardModalLayout from './DashboardModalLayout.vue'

const dashboardStore = useDashboardStore();
const { profileModal, profileState } = storeToRefs(dashboardStore);

function closeModal(modalId: string) {
  dashboardStore.toggleModal(modalId);
}

const authStore = useAuthStore();
const { userId } = storeToRefs(authStore);
onMounted(async () => {
  const { isEmpty: profileCheck } = useObjectValidator(profileState.value)
  if (!profileState.value || profileCheck.value) {
    await dashboardStore.dashboard_profile(userId.value as number)
  }
})
</script>

<template>
  <!-- profile -->
  <DashboardModalLayout :uid="profileModal.id" @close="closeModal">
    <template #header> Profile </template>
    <template #content>
      <div class="items font-inter">
        <div class="item">
          <h4 class="item__title">Name:</h4>
          <p class="item__content">{{ profileState?.name }}</p>
        </div>
        <div class="item">
          <h4 class="item__title">Username:</h4>
          <p class="item__content">{{ profileState?.username }}</p>
        </div>
        <div class="item">
          <h4 class="item__title">Email:</h4>
          <p class="item__content email">{{ profileState?.email }}</p>
        </div>
        <div class="item">
          <h4 class="item__title">Date of birth:</h4>
          <p class="item__content">
            {{ profileState?.date_of_birth || 'NA' }}
          </p>
        </div>
        <div class="item">
          <h4 class="item__title">Gender:</h4>
          <p class="item__content">
            {{ profileState?.gender || 'NA' }}
          </p>
        </div>
        <div class="item">
          <h4 class="item__title">Phone number:</h4>
          <p class="item__content">
            {{ profileState?.phone_number || 'NA' }}
          </p>
        </div>
        <div class="item">
          <h4 class="item__title">Address:</h4>
          <p class="item__content">
            {{ profileState?.address || 'NA' }}
          </p>
        </div>
        <div class="item">
          <h4 class="item__title">Emergency contact name:</h4>
          <p class="item__content">
            {{ profileState?.emergency_person || 'NA' }}
          </p>
        </div>
        <div class="item">
          <h4 class="item__title">Emergency contact number:</h4>
          <p class="item__content">
            {{ profileState?.emergency_contact || 'NA' }}
          </p>
        </div>
        <div class="item">
          <h4 class="item__title">Referal code:</h4>
          <p class="item__content">
            {{ profileState?.referal_code || 'NA' }}
          </p>
        </div>
        <div class="item">
          <h4 class="item__title">Referal:</h4>
          <p class="item__content">
            {{ profileState?.referred || 'NA' }}
          </p>
        </div>
        <div class="item">
          <h4 class="item__title">Occupation:</h4>
          <p class="item__content">
            {{ profileState?.occupation || 'NA' }}
          </p>
        </div>
      </div>
    </template>
  </DashboardModalLayout>
</template>

<style lang="scss" scoped>
@import '../../../../assets/styles/base';

.items {
  & .item {
    display: grid;
    grid-template-columns: 1fr 2fr;
    place-items: center;
    gap: 0.5rem;
    border-bottom: 1px rgba(215, 215, 215, 0.5) solid;
    font-size: font-size('small');

    @include responsive('mobile-landscape-width') {
      font-size: font-size('x-small');
    }

    &:last-child {
      border-bottom: none;
    }

    & .item__title {
      width: 100%;
      font-size: inherit;
      font-weight: font-weight('semibold');
      text-align: start;
    }
    & .item__content {
      width: 100%;
      font-size: inherit;
      padding: 1rem 0.75rem;
      text-align: start;
      text-transform: capitalize;

      &.email {
        text-transform: lowercase;
      }
    }
  }
}
</style>