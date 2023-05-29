<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { reset } from '@formkit/core'
import { useMeta } from 'vue-meta'

import { useAuthStore } from '../../stores/auth'

import AuthLayout from '../../components/AuthLayout.vue'

useMeta({ title: 'Password Reset Email' })

const error = ref(false)
const router = useRouter()
const authStore = useAuthStore()
async function handleSubmit(credentials: any) {
  try {
    let data = { email: credentials.email }
    await authStore.password_reset_request_email(data)

    // on successful request route to success page
    router.push({ name: 'Success', query: { next: 'LoginPage' } })
  } catch (err) {
    error.value = true
    setTimeout(() => {
      error.value = false
    }, 3000)
  } finally {
    // clear input values
    reset('password-reset-form')
  }
}
</script>

<template>
  <AuthLayout>
    <template #motivation-section>
      Being Fit is Hard. &nbsp; Being Obese is Hard.
      <span class="text-yellow-600 font-bold">Choose</span> your Hard.
    </template>
    <template #header-section>Reset your password...</template>
    <template #form-section>
      <div class="w-full text-center">
        <formKit
          type="form"
          :submit-attrs="{
            inputId: 'password-reset-form'
          }"
          :actions="false"
          submit-label="Send Request"
          @submit="handleSubmit"
        >
          <formKit
            type="email"
            label="Email"
            name="email"
            suffixIcon="email"
            placeholder="ben_crusoe@email.com"
            validation="(500)required:trim|email|length:5"
          />
          <div class="w-[70%] mx-auto">
            <FormKit
              type="submit"
              label="Reset Password"
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