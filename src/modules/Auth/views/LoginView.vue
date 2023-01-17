<template>
  <AuthLayout>
    <template #motivation-section>
      <div class="hidden md:block">
        <p>When you</p>
        <p>see results it</p>
        <p>
          becomes an <span class="text-yellow-600 font-bold">Addiction</span>
        </p>
      </div>
      <div class="md:hidden">
        <p>When you see results it</p>
        <p>
          becomes an <span class="text-yellow-600 font-bold">Addiction</span>
        </p>
      </div>
      <!-- <AuthInputField v-model="firstName" label="First Name" /> -->
    </template>
    <template #header-section>Hello JasFitFam 😁</template>
    <template #form-section>
      <div class="w-full text-center">
        <formKit
          id="login-form"
          type="form"
          :config="{ validationVisibility: 'blur' }"
          :submit-attrs="{ inputId: 'login-form' }"
          submit-label="Login"
          :actions="false"
          v-model="user"
          @submit="handleSubmit"
        >
          <formKit
            type="text"
            label="Username"
            name="username"
            placeholder="Enter your username"
            validation="required|length:3"
            :validation-messages="{
              length: 'Username must be at least 3 characters'
            }"
            :suffix-icon="userIcon"
            :classes="{
              message: 'pl-2'
            }"
          />
          <formKit
            type="password"
            label="Password"
            name="password"
            placeholder="Enter your password"
            validation="required|length:6|matches:/[^a-zA-Z]/"
            :validation-messages="{
              matches: 'Please include at least one number'
            }"
            suffix-icon="eyeClosed"
            @suffix-icon-click="handleIconClick"
            :classes="{
              message: 'pl-2'
            }"
          />
          <div class="w-[70%] mx-auto" :class="{ 'opacity-50': isLoading }">
            <FormKit
              type="submit"
              label="Login"
              :disabled="isLoading"
              :classes="{
                label: 'block mb-1 font-bold text-sm',
                inner:
                  'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
                input:
                  'h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
                help: 'text-xs text-gray-500'
              }"
            >
            </FormKit>
          </div>
          <p class="text-xs mb-6">
            Forgot your Password?
            <router-link
              :to="{ name: 'PasswordResetEmailPage' }"
              class="ml-1 underline hover:text-yellow-500"
              >Reset</router-link
            >
          </p>
          <p v-if="error" class="text-xs text-red-500">
            <!-- Username of password is incorrect -->
            {{ errorMessage }}
          </p>
        </formKit>
      </div>
    </template>
  </AuthLayout>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { reset } from '@formkit/core'
import { useMeta } from 'vue-meta'
import { useStore } from 'vuex'

import { useState } from '@/composables/useState.js'
import AuthLayout from '../components/AuthLayout.vue'

useMeta({ title: 'Login' })

const userIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471" stroke="#969696" stroke-width="2" stroke-linecap="round"/>
<circle cx="12" cy="8" r="4" stroke="#969696" stroke-width="2" stroke-linecap="round"/>
</svg>`
const user = ref({})

const store = useStore()
const error = computed(() => store.state.auth.status.error)
const isLoading = computed(() => store.state.auth.status.isLoading)

const router = useRouter()
const { AuthToken } = useState()

onMounted(() => {
  if (AuthToken.value) {
    router.push({ name: 'DashboardHome' })
  }
})

const err = ref(null)
const errorMessage = computed(() => {
  if (!err.value) return
  if (err.value.includes('401')) {
    return 'Username or password is incorrect'
  } else {
    return 'Something went wrong. Please try again later'
  }
})
const handleSubmit = (credentials) => {
  // perform authentication async-ly
  store
    .dispatch('auth/login', credentials)
    .then(
      () => {
        router.push({ name: 'DashboardHome' })
      },
      (error) => {
        err.value = error
        const message = errorMessage.value
        store.dispatch('landingpage/error', { message, timeout: 3000 })
      }
    )
    .finally(() => {
      // clear values
      reset('login-form')
    })
  // store.commit('auth/LOGIN', credentials)
  // router.push({ name: 'DashboardHome' })
}

const handleIconClick = (node) => {
  node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
  node.props.type = node.props.type === 'password' ? 'text' : 'password'
}
</script>
