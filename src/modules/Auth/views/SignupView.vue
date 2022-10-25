<template>
  <AuthLayout>
    <template #motivation-section>
      When you see results it becomes an
      <span class="text-yellow-600 font-bold">Addiction</span>
    </template>
    <template #header-section>Welcome to JasFitFam 😁</template>
    <template #form-section>
      <div class="w-full text-center">
        <formKit
          id="registration-form"
          type="form"
          :config="{ validationVisibility: 'blur' }"
          submit-label="Register"
          :actions="false"
          @submit="handleSubmit"
          v-model="userCredentials"
        >
          <Formkit type="group" name="info" class="flex gap-2">
            <formKit
              type="text"
              label="*Username"
              name="username"
              validation="required"
              :suffixIcon="userIcon"
              placeholder="Enter your username"
              :classes="{
                outer: '$reset my-0',
                wrapper: '$reset relative my-2'
              }"
            />
            <formKit
              type="email"
              label="*Email"
              name="email"
              placeholder="example@email.com"
              validation="required|email"
              suffixIcon="email"
              :classes="{
                outer: '$reset my-0',
                wrapper: '$reset relative my-2'
              }"
            />
          </Formkit>
          <formKit
            type="password"
            label="*Password"
            name="password"
            placeholder="Enter your password"
            validation="required|length:6|matches:/[^a-zA-Z]/"
            :validation-messages="{
              matches: 'Please include at least one symbol'
            }"
            suffix-icon="eyeClosed"
            @suffix-icon-click="handleIconClick"
          />
          <formKit
            type="password"
            label="*Confirm Password"
            name="password_confirm"
            validation="required|confirm"
            placeholder="Confirm your password"
            suffix-icon="eyeClosed"
            @suffix-icon-click="handleIconClick"
          />
          <div class="w-[70%] mx-auto">
            <FormKit
              type="submit"
              label="Register"
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
            Already have an account?
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
import { useStore } from 'vuex'
import { reset } from '@formkit/core'
import AuthLayout from '../components/AuthLayout.vue'
import { useMeta } from 'vue-meta'

useMeta({ title: 'Sign up' })

const userIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471" stroke="#969696" stroke-width="2" stroke-linecap="round"/>
<circle cx="12" cy="8" r="4" stroke="#969696" stroke-width="2" stroke-linecap="round"/>
</svg>`

const userCredentials = ref({
  username: '',
  email: '',
  password: ''
})

const store = useStore()

const handleSubmit = (credentials) => {
  try {
    userCredentials.value = credentials
    store.commit('auth/setNotification', {
      message: 'You have been registered successfully',
      alertType: 'Success'
    })
  } catch (err) {
    store.commit('auth/setNotification', {
      message: 'An error occured while registering. Please try again',
      alertType: 'Warning'
    })
  } finally {
    // clear values
    reset('registration-form')
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
