<template>
  <DashboardModalLayout :uid="passwordResetModal.id" @close="closeModal">
    <template #header>Change Password</template>
    <template #content>
      <form id="form" @submit="handleSubmit">
        <FormKit type="form" :actions="false" @submit="handleSubmit">
          <formKit
            type="password"
            name="old_password"
            label="Old Password"
            v-model="oldPassword"
            suffix-icon="eyeClosed"
            @suffix-icon-click="handleIconClick"
            placeholder="Your old password"
            validation="required|length:6|matches:/[^a-zA-Z]/"
            :validation-messages="{
              matches: 'Please include at least one symbol'
            }"
          />
          <formKit
            type="password"
            name="password"
            label="New Password"
            v-model="newPassword"
            suffix-icon="eyeClosed"
            @suffix-icon-click="handleIconClick"
            placeholder="Your new password"
            validation="required|length:6|matches:/[^a-zA-Z]/"
            :validation-messages="{
              matches: 'Please include at least one symbol'
            }"
          />
          <formKit
            type="password"
            name="password_confirm"
            label="Confirm Password"
            v-model="password_confirm"
            suffix-icon="eyeClosed"
            @suffix-icon-click="handleIconClick"
            placeholder="Confirm new password"
            validation="password|confirm"
            validation-label="Password confirmation"
          />
        </FormKit>
      </form>
    </template>
    <template #actions>
      <div
        class="w-full mb-2 mt-3 flex gap-2 text-[#303030] text-xs lg:text-sm"
      >
        <button
          @click="closeModal(passwordResetModal.id)"
          class="py-2 px-4 w-1/2 rounded-md font-inter font-medium border text-gray-500 bg-gray-100 hover:text-inherit transition-all"
        >
          Cancel
        </button>
        <button
          @click="handleSubmit"
          :class="{ 'disabled ': !activeFields || isLoading }"
          class="py-2 px-4 w-1/2 rounded-md font-inter font-medium bg-yellow-400 hover:bg-yellow-300 transition-all"
        >
          {{ isLoading ? 'Please wait...' : 'Change password' }}
        </button>
      </div>
    </template>
  </DashboardModalLayout>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

import { useModalOperations } from '@/composables/modalOperations.js'
import { validation } from '@/composables/validation.js'

import DashboardModalLayout from '../DashboardModalLayout.vue'

const store = useStore()

const passwordResetModal = computed(
  () => store.state.dashboard.modals.passwordReset
)

const { useValidateInputs, useIsPasswordConfirmed } = validation()

const oldPassword = ref('')
const newPassword = ref('')
const password_confirm = ref('')
const activeFields = computed(
  () =>
    useValidateInputs([
      oldPassword.value,
      newPassword.value,
      password_confirm.value
    ]) && useIsPasswordConfirmed(newPassword.value, password_confirm.value)
)

const isLoading = computed(() => store.state.dashboard.status.isLoading)
const userId = computed(() => store.state.auth.user.user_id)
async function handleSubmit() {
  if (!useIsPasswordConfirmed(newPassword.value, password_confirm.value)) return
  if (
    !useValidateInputs([
      oldPassword.value,
      newPassword.value,
      password_confirm.value
    ])
  )
    return
  try {
    let data = {
      old_password: oldPassword.value,
      new_password: newPassword.value,
      user_id: userId.value
    }
    await store.dispatch('dashboard/change_password', data)

    store.dispatch('landingpage/success', {
      message: 'Your password has been successfully change.'
    })
    closeModal(passwordResetModal.value.id)
  } catch {
    store.dispatch('landingpage/error', {
      message: 'Unable to complete your request. Please try again later.'
    })
  } finally {
    resetForm()
  }
}

function resetForm() {
  document.querySelector('#form').reset()
  oldPassword.value = ''
  newPassword.value = ''
  password_confirm.value = ''
}

const { toggleModal } = useModalOperations()

function closeModal(modalId) {
  toggleModal(modalId)
  resetForm()
}

const handleIconClick = (node) => {
  node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
  node.props.type = node.props.type === 'password' ? 'text' : 'password'
}
</script>

<style scoped>
.disabled {
  pointer-events: none;
  opacity: 70%;
}
</style>
