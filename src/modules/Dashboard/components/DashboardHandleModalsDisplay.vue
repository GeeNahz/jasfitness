<template>
  <div>
    <div class="modals fixed w-full h-full z-50">
      <!-- profile -->
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
      <!-- fitness and health -->
      <DashboardModalLayout
        :uid="healthRecordModal.id"
        v-if="healthRecordModal.open"
        @close="closeModal"
      >
        <template #header> fitness & health record </template>
      </DashboardModalLayout>
      <!-- accessment record -->
      <DashboardModalLayout
        :uid="accessmentRecordModal.id"
        v-if="accessmentRecordModal.open"
        @close="closeModal"
      >
        <template #header> assessment record </template>
        <template #content>
          <div v-if="fitnessProfileIsAvailable">
            <div class="items font-inter">
              <div class="item">
                <h4 class="item__title">Height:</h4>
                <p class="item__content">{{ assessmentState.height }}</p>
              </div>
              <div class="item">
                <h4 class="item__title">Weight:</h4>
                <p class="item__content">{{ assessmentState.weight }}</p>
              </div>
              <div class="item">
                <h4 class="item__title">Arm size:</h4>
                <p class="item__content">{{ assessmentState.arm_size }}</p>
              </div>
              <div class="item">
                <h4 class="item__title">Thigh size:</h4>
                <p class="item__content">
                  {{ assessmentState.thigh_size || 'NA' }}
                </p>
              </div>
              <div class="item">
                <h4 class="item__title">Waist size:</h4>
                <p class="item__content">
                  {{ assessmentState.waist_size || 'NA' }}
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
              <div class="item">
                <h4 class="item__title">Comment:</h4>
                <p class="item__content">
                  {{ assessmentState.comment || 'NA' }}
                </p>
              </div>
              <!-- <div class="item">
                <h4 class="item__title">images:</h4>
                <p class="item__content">
                  {{ assessmentState || 'NA' }}
                </p>
              </div> -->
            </div>
          </div>
          <div v-else>
            <h4 class="text-sm font-normal text-gray-400 text-center">
              Sorry, your assessment records are not available at the moment
            </h4>
          </div>
        </template>
      </DashboardModalLayout>
      <!-- freeze subscription -->
      <DashboardModalLayout
        :uid="freezeSubscriptionModal.id"
        v-if="freezeSubscriptionModal.open"
        @close="closeModal"
      >
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
      <!-- share subscription -->
      <DashboardModalLayout
        :uid="shareSubscriptionModal.id"
        v-if="shareSubscriptionModal.open"
        @close="closeModal"
      >
        <template #header> Share your subscription </template>
        <template #header-description>
          Share your current subscription with another member of the gym
        </template>
        <template #content>
          <form @submit.prevent="shareYourSub">
            <label for="freeze-sub" class="font-semibold text-xs lg:text-sm"
              >Member username:</label
            >
            <input
              id="freeze-sub"
              class="form-control mb-2 lg:mb-3"
              type="text"
              v-model="shareSubUsername"
              required
            />
            <label for="freeze-sub" class="font-semibold text-xs lg:text-sm"
              >Duration (months):
            </label>
            <input
              id="freeze-sub"
              class="form-control"
              type="number"
              max="12"
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
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

import { useObjectValidator } from '@/composables/useObjectCheck'

import DashboardModalLayout from '../components/DashboardModalLayout.vue'

const closeModal = (modalId) => {
  store.dispatch('dashboard/toggle_modal', modalId)
}

const freezeDuration = ref('')
const freezeYourSub = () => {
  console.log(Number(freezeDuration.value))
}

const shareSubUsername = ref('')
const shareSubDuration = ref('')
const shareYourSub = () => {
  console.log(shareSubUsername.value, Number(shareSubDuration.value))
}

const store = useStore()

const userId = computed(() => store.state.auth.user.user_id)

const profileModal = computed(() => store.state.dashboard.modals.profile)
const healthRecordModal = computed(
  () => store.state.dashboard.modals.healthRecord
)
const accessmentRecordModal = computed(
  () => store.state.dashboard.modals.accessmentRecord
)
const freezeSubscriptionModal = computed(
  () => store.state.dashboard.modals.freezeSub
)
const shareSubscriptionModal = computed(
  () => store.state.dashboard.modals.shareSub
)

const profileState = computed(() =>
  store.state.dashboard.profile ? store.state.dashboard.profile : {}
)
const assessmentState = computed(() =>
  store.state.dashboard.dashboardFitnessAssessment
    ? store.state.dashboard.dashboardFitnessAssessment
    : {}
)

const fitnessProfileIsAvailable = ref(false)

onMounted(() => {
  const { isEmpty: profileCheck } = useObjectValidator(profileState.value)
  if (!profileState.value || profileCheck.value) {
    store.dispatch('dashboard/dashboard_profile', userId.value).then(
      () => {},
      (error) => {
        store.dispatch('landingpage/error', {
          message: `${error}. Unable to retrieve your profile.`,
          style: 'error'
        })
      }
    )
  }

  const { isEmpty: assessmentCheck } = useObjectValidator(assessmentState.value)
  if (!assessmentState.value || assessmentCheck) {
    store.dispatch('dashboard/dashboard_fitness_profile').then(
      () => {
        fitnessProfileIsAvailable.value = true
      },
      (error) => {
        fitnessProfileIsAvailable.value = false
        store.dispatch('landingpage/error', {
          message: `${error}. Unable to retrieve your assessment records.`,
          style: 'error'
        })
      }
    )
  }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/base';

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
      text-transform: capitalize;
    }
  }
}
</style>
