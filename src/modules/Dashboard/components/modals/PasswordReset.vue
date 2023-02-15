<template>
  <DashboardModalLayout :uid="passwordResetModal.id" @close="toggleModal">
    <template #header>Password Reset</template>
    <template #content>
      <formKit
        type="form"
        :submit-attrs="{ inputId: 'password-reset-form' }"
        submit-label="Change Password"
        :actions="false"
        @submit="handleSubmit"
      >
        <formKit
          type="password"
          name="password"
          label="New Password"
          v-model="password"
          suffix-icon="eyeClosed"
          @suffix-icon-click="handleIconClick"
          placeholder="Enter your new password"
          validation="required|length:6|matches:/[^a-zA-Z]/"
          :validation-messages="{
            matches: 'Please include at least one symbol'
          }"
        />
        <formKit
          type="password"
          name="password_confirm"
          label="Confirm Password"
          suffix-icon="eyeClosed"
          @suffix-icon-click="handleIconClick"
          placeholder="Enter password again"
          validation="password|confirm"
        />
      </formKit>
    </template>
    <template #actions>
      <div class="w-[70%] mx-auto">
        <FormKit
          type="submit"
          label="Change Password"
          :classes="{
            label: 'block mb-1 font-bold text-sm',
            inner:
              'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
            input:
              'h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
            help: 'text-xs text-gray-500'
          }"
        />
      </div>
    </template>
  </DashboardModalLayout>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { reset } from '@formkit/core'

import { useModalOperations } from '@/composables/modalOperations.js'

import DashboardModalLayout from '../DashboardModalLayout.vue'

const store = useStore()

const { toggleModal } = useModalOperations()

const passwordResetModal = computed(
  () => store.state.dashboard.modals.passwordReset
)

const password = ref('')
function handleSubmit(credentials) {
  try {
    console.log(credentials)
  } catch (err) {
    console.log(err)
  } finally {
    reset('password-reset-form')
  }
}

const handleIconClick = (node) => {
  node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
  node.props.type = node.props.type === 'password' ? 'text' : 'password'
}
</script>
