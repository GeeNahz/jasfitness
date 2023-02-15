<template>
  <div>
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
          <p class="text-xs mb-6">
            Remembered your Password?
            <router-link
              :to="{ name: 'LoginPage' }"
              class="ml-1 underline hover:text-yellow-500 transition-colors duration-150"
              >Login</router-link
            >
          </p>
          <p v-if="error" class="text-xs text-red-500">
            An error occured. Please try again.
          </p>
        </formKit>
      </template>
    </DashboardModalLayout>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { useModalOperations } from '@/composables/modalOperations.js'

import DashboardModalLayout from '../DashboardModalLayout.vue'

const store = useStore()

const { toggleModal } = useModalOperations()

const passwordResetModal = computed(
  () => store.state.dashboard.modals.passwordReset
)

function handleSubmit(credentials) {
  try {
    console.log(credentials)
  } catch (err) {
    console.log(err)
  }
}

const handleIconClick = (node) => {
  node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
  node.props.type = node.props.type === 'password' ? 'text' : 'password'
}
// import { reset } from '@formkit/core'
// reset('password-reset-form')
</script>
