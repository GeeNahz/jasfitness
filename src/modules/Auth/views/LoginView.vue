<template>
  <AuthTemplate>
    <template #motivation-section>
      When you see results it becomes an
      <span class="text-yellow-600 font-bold">Addiction</span>
    </template>
    <template #header-section>Hello JasFitFam 😁</template>
    <template #form-section>
      <formKit
        id="login-form"
        type="form"
        :config="{ validationVisibility: 'blur' }"
        :submit-attrs="{ inputId: 'login-form' }"
        submit-label="Login"
        v-model="user"
        @submit="handleSubmit"
      >
        <formKit
          type="text"
          label="*Username"
          name="username"
          placeholder="Enter your username"
          validation="required|length:3"
          suffix-icon="avatarMan"
        />
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
        <p class="text-xs mb-6">
          Forgot your Password?
          <router-link
            :to="{ name: 'PasswordResetEmailPage' }"
            class="ml-1 underline hover:text-yellow-500"
            >Reset</router-link
          >
        </p>
      </formKit>
    </template>
  </AuthTemplate>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { reset } from '@formkit/core'
import AuthTemplate from '../components/AuthTemplate.vue'

const user = ref({})

const store = useStore()
const notify = {
  message: 'You have been logged in successfully',
  alertType: 'Success'
}
const handleSubmit = (credentials) => {
  // perform authentication async-ly
  try {
    store.commit('auth/setNotification', notify)
    console.log('Login creds:', credentials)
  } catch (error) {
    console.log(error)
    store.commit('auth/setNotification', notify)
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
