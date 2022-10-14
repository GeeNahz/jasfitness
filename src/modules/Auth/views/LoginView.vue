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
          <div class="w-[70%] mx-auto">
            <FormKit
              type="submit"
              label="Login"
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
            Forgot your Password?
            <router-link
              :to="{ name: 'PasswordResetEmailPage' }"
              class="ml-1 underline hover:text-yellow-500"
              >Reset</router-link
            >
          </p>
          <p v-if="error" class="text-xs text-red-500">
            Username of password is incorrect
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
// import AuthTemplate from '../components/AuthTemplate.vue'
import AuthLayout from '../components/AuthLayout.vue'
// import AuthInputField from '../components/AuthInputField.vue'

// const firstName = ref('')
const userIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471" stroke="#969696" stroke-width="2" stroke-linecap="round"/>
<circle cx="12" cy="8" r="4" stroke="#969696" stroke-width="2" stroke-linecap="round"/>
</svg>`
const user = ref({})

const error = ref(false)

const store = useStore()
// const notify = {
//   message: 'You have been logged in successfully'
// }
// const errorMsg = {
//   message: 'Incorrect login details',
//   alertType: 'Warning'
// }

const router = useRouter()
const handleSubmit = (credentials) => {
  // perform authentication async-ly
  try {
    if (
      credentials.username === 'testAdmin' &&
      credentials.password === 'secret1'
    ) {
      store.commit('auth/setNotification', {
        message: 'Login details are correct'
      })
      router.push({ name: 'DashboardHome' })
    } else {
      throw error
    }
  } catch (err) {
    error.value = true
    setTimeout(() => {
      error.value = false
    }, 3000)
    console.log(err)
    store.commit('auth/setNotification', {
      message: 'Login details are incorrect'
    })
  } finally {
    // clear values
    reset('login-form')
    setTimeout(() => {
      store.commit('auth/clearNotification')
    }, 5000)
  }
}

const handleIconClick = (node) => {
  node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
  node.props.type = node.props.type === 'password' ? 'text' : 'password'
}
</script>
