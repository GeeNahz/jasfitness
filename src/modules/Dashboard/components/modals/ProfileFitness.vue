<script setup lang="ts">
import { onMounted } from 'vue'

import { useObjectValidator } from '@/composables/objectCheck'
import { useDashboardStore } from '../../stores/dashboard'

import DashboardModalLayout from './DashboardModalLayout.vue'
import { storeToRefs } from 'pinia'

const dashboardStore = useDashboardStore();
const { assessmentRecordModal, assessmentState } = storeToRefs(dashboardStore);

const closeModal = (modalId: string) => {
  dashboardStore.toggleModal(modalId);
}

onMounted(async () => {
  const { isEmpty: assessmentCheck } = useObjectValidator(assessmentState.value)
  if (!assessmentState.value || assessmentCheck.value) {
    await dashboardStore.dashboard_fitness_profile();
  }
})
</script>

<template>
  <!-- fitness profile (accessment record) -->
  <DashboardModalLayout :uid="assessmentRecordModal.id" @close="closeModal">
    <template #header> Fitness Profile </template>
    <template #content>
      <div v-if="assessmentState">
        <div class="items font-inter">
          <div class="item">
            <h4 class="item__title">Height:</h4>
            <p class="item__content">{{ assessmentState.height }} cm</p>
          </div>
          <div class="item">
            <h4 class="item__title">Weight:</h4>
            <p class="item__content">{{ assessmentState.weight }} cm</p>
          </div>
          <div class="item">
            <h4 class="item__title">Arm size:</h4>
            <p class="item__content">{{ assessmentState.arm_size }} cm</p>
          </div>
          <div class="item">
            <h4 class="item__title">Thigh size:</h4>
            <p class="item__content">
              {{ assessmentState.thigh_size || 'NA' }} cm
            </p>
          </div>
          <div class="item">
            <h4 class="item__title">Waist size:</h4>
            <p class="item__content">
              {{ assessmentState.waist_size || 'NA' }} cm
            </p>
          </div>
          <div class="item">
            <h4 class="item__title">Strength:</h4>
            <p class="item__content">
              {{ assessmentState.strength || 'NA' }}
            </p>
          </div>
          <div class="item">
            <h4 class="item__title">Endurance:</h4>
            <p class="item__content">
              {{ assessmentState.endurance || 'NA' }}
            </p>
          </div>
          <div class="item">
            <h4 class="item__title">Flexibility:</h4>
            <p class="item__content">
              {{ assessmentState.flexibility || 'NA' }}
            </p>
          </div>
          <!-- <div class="item">
            <h4 class="item__title">Comment:</h4>
            <p class="item__content">
              {{ assessmentState.comment || 'NA' }}
            </p>
          </div> 
          <div class="item">
            <h4 class="item__title">images:</h4>
            <p class="item__content">
              {{ assessmentState || 'NA' }}
            </p>
          </div> -->
        </div>
      </div>
      <div v-else>
        <h4 class="text-sm font-normal text-gray-400 text-center">
          Sorry, your fitness profile is not available at the moment
        </h4>
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
      padding: 1rem 0;
      text-align: start;
      // text-transform: capitalize;
    }
  }
}
</style>
