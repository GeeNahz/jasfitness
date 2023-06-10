<script setup lang="ts">
import { computed, ref } from 'vue'

import { validation } from '@/composables/validation'
import { useRevealPassword } from '@/composables/formKitAction'

import DashboardModalLayout from './DashboardModalLayout.vue'
import { useAuthStore } from '@/modules/Authentication/stores/auth'
import { storeToRefs } from 'pinia'
import { useDashboardStore } from '../../stores/dashboard'

const authStore = useAuthStore();
const dashboardStore = useDashboardStore();

const { userId } = storeToRefs(authStore);
const { passwordResetModal, isLoading } = storeToRefs(dashboardStore);

const { useIsValidTextInputs, useIsPasswordConfirmed } = validation()

const oldPassword = ref('')
const newPassword = ref('')
const password_confirm = ref('')
const activeFields = computed(
  () =>
    useIsValidTextInputs([
      oldPassword.value,
      newPassword.value,
      password_confirm.value
    ]) && useIsPasswordConfirmed(newPassword.value, password_confirm.value)
)

async function handleSubmit() {
  if (!useIsPasswordConfirmed(newPassword.value, password_confirm.value)) return
  if (
    !useIsValidTextInputs([
      oldPassword.value,
      newPassword.value,
      password_confirm.value
    ])
  ) return
  
  let data = {
    old_password: oldPassword.value,
    new_password: newPassword.value,
    user_id: userId.value as number
  }
  const { success } = await dashboardStore.change_password(data);
  if (success.value) {
    closeModal(passwordResetModal.value.id)
    resetForm()
  }
}

function resetForm() {
  (document.querySelector('#form') as HTMLFormElement).reset()
  oldPassword.value = ''
  newPassword.value = ''
  password_confirm.value = ''
}

function closeModal(modalId: string) {
  dashboardStore.toggleModal(modalId)
  resetForm()
}

const handleIconClick = (node: any) => {
  useRevealPassword(node)
}
</script>

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

<style scoped>
.disabled {
  pointer-events: none;
  opacity: 70%;
}
</style>
