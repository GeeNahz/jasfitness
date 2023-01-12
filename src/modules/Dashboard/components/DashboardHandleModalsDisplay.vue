<template>
  <div>
    <div class="modals fixed w-full h-full z-50">
      <DashboardModalLayout
        :uid="profileModal.id"
        v-if="profileModal.open"
        @close="closeModal"
      >
        <template #header> Profile </template>
        <template #content>
          <div class="items font-inter">
            <div class="item">
              <h4 class="item__title">Name:</h4>
              <p class="item__content">{{ profileState.name }}</p>
            </div>
            <div class="item">
              <h4 class="item__title">Username:</h4>
              <p class="item__content">{{ profileState.username }}</p>
            </div>
            <div class="item">
              <h4 class="item__title">Email:</h4>
              <p class="item__content">{{ profileState.email }}</p>
            </div>
            <div class="item">
              <h4 class="item__title">Date of birth:</h4>
              <p class="item__content">
                {{ profileState.date_of_birth || 'NA' }}
              </p>
            </div>
            <div class="item">
              <h4 class="item__title">Gender:</h4>
              <p class="item__content">
                {{ profileState.gender || 'NA' }}
              </p>
            </div>
            <div class="item">
              <h4 class="item__title">Phone number:</h4>
              <p class="item__content">
                {{ profileState.phone_number || 'NA' }}
              </p>
            </div>
            <div class="item">
              <h4 class="item__title">Address:</h4>
              <p class="item__content">
                {{ profileState.address || 'NA' }}
              </p>
            </div>
            <div class="item">
              <h4 class="item__title">Next of kin's name:</h4>
              <p class="item__content">
                {{ profileState.emergency_person || 'NA' }}
              </p>
            </div>
            <div class="item">
              <h4 class="item__title">Next of kin's phone number:</h4>
              <p class="item__content">
                {{ profileState.emergency_contact || 'NA' }}
              </p>
            </div>
            <div class="item">
              <h4 class="item__title">Referal code:</h4>
              <p class="item__content">
                {{ profileState.referal_code || 'NA' }}
              </p>
            </div>
            <div class="item">
              <h4 class="item__title">Referal:</h4>
              <p class="item__content">
                {{ profileState.referal || 'NA' }}
              </p>
            </div>
            <div class="item">
              <h4 class="item__title">Occupation:</h4>
              <p class="item__content">
                {{ profileState.occupation || 'NA' }}
              </p>
            </div>
          </div>
        </template>
      </DashboardModalLayout>
      <DashboardModalLayout
        :uid="healthRecordModal.id"
        v-if="healthRecordModal.open"
        @close="closeModal"
      >
        <template #header> fitness & health record </template>
      </DashboardModalLayout>
      <DashboardModalLayout
        :uid="accessmentRecordModal.id"
        v-if="accessmentRecordModal.open"
        @close="closeModal"
      >
        <template #header> accessment record </template>
      </DashboardModalLayout>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import DashboardModalLayout from '../components/DashboardModalLayout.vue'

const closeModal = (modalId) => {
  store.dispatch('dashboard/toggle_modal', modalId)
}

const store = useStore()

const userId = computed(() => store.state.auth.user.id)

const profileModal = computed(() => store.state.dashboard.modals.profile)
const healthRecordModal = computed(
  () => store.state.dashboard.modals.healthRecord
)
const accessmentRecordModal = computed(
  () => store.state.dashboard.modals.accessmentRecord
)

onMounted(() => {
  store.dispatch('dashboard/dashboard_profile', userId.value).then(
    () => {},
    (error) => {
      console.log(error)
    }
  )
})

const profileState = computed(() =>
  store.state.dashboard.profile ? store.state.dashboard.profile : {}
)
</script>

<style lang="scss" scoped>
.items {
  & .item {
    // background-color: pink;
    display: grid;
    grid-template-columns: 1fr 2fr;
    place-items: center;
    gap: 0.5rem;
    border-bottom: 1px rgba(215, 215, 215, 0.5) solid;

    &:last-child {
      border-bottom: none;
    }

    & .item__title {
      width: 100%;
      font-weight: 600;
      text-align: start;
    }
    & .item__content {
      width: 100%;
      padding: 1rem 0;
      text-align: start;
      text-transform: capitalize;
    }
  }
}
</style>
