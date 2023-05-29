<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { reset } from '@formkit/core'
import { useMeta } from 'vue-meta'

import { useRevealPassword } from "@/composables/formKitAction"
import { useAuthStore } from '../../stores/auth'

import AuthLayout from '../../components/AuthLayout.vue'

useMeta({ title: 'Reset Password' })

const error = ref(false)
const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
async function handleSubmit(credentials: any) {
  try {
    let data: { password: string; token: string; } = { password: credentials.password, token: route.query.token as string }
    await authStore.password_reset(data)
    // on successful request route to success page
    router.push({ name: 'Success', query: { next: 'LoginPage' } })
  } catch (error: any) {
    error.value = true
    setTimeout(() => {
      error.value = false
    }, 3000)
  } finally {
    reset('new-password-reset-form')
  }
}
</script>

<template>
  <AuthLayout>
    <template #motivation-section>
      <p>You'll only get</p>
      <p>what you <span class="text-yellow-600 font-bold">work</span> for</p>
    </template>
    <template #header-section>Reset your password...</template>
    <template #form-section>
      <div class="w-full text-center">
        <formKit
          type="form"
          :submit-attrs="{ inputId: 'new-password-reset-form' }"
          submit-label="Change Password"
          :actions="false"
          @submit="handleSubmit"
        >
          <formKit
            type="password"
            name="password"
            label="New Password"
            suffix-icon="eyeClosed"
            @suffix-icon-click="useRevealPassword"
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
            @suffix-icon-click="useRevealPassword"
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
      </div>
    </template>
  </AuthLayout>
</template>