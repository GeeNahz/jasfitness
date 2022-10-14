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
          v-model="formData"
          submit-label="Send Request"
          @submit="handleSubmit"
        >
          <formKit
            type="email"
            label="Email"
            name="email"
            suffixIcon="email"
            placeholder="example@email.com"
            validation="email|length:5"
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
        </formKit>
      </div>
    </template>
  </AuthLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { reset } from '@formkit/core'
import AuthLayout from '../../components/AuthLayout.vue'

const formData = ref('')

const router = useRouter()
const store = useStore()

const handleSubmit = (credentials) => {
  // make async request
  try {
    console.log(credentials)
    store.commit('auth/setNotification', {
      message: 'A password reset mail has been sent to your email',
      route: 'PasswordResetEmailPage'
    })
    // on successful request route to success page
    router.push({ name: 'Success' })
  } catch (err) {
    console.log(err)
    store.commit('auth/setNotification', {
      message: 'An error occured while perfoming this action. Please try again',
      alertType: 'Warning'
    })
  } finally {
    // clear input values
    reset('password-reset-form')
    setTimeout(() => {
      store.commit('auth/clearNotification')
    }, 5000)
  }
}
</script>
