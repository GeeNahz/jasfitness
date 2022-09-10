<template>
  <AuthTemplate>
    <template #motivation-section>
      You'll only get what you
      <span class="text-yellow-600 font-bold">work</span> for
    </template>
    <template #header-section>Reset your password...</template>
    <template #form-section>
      <formKit
        type="form"
        :submit-attrs="{ inputId: 'new-password-reset-form' }"
        submit-label="Change Password"
        @submit="handleSubmit"
        v-model="newPassword"
      >
        <formKit
          type="password"
          name="password"
          label="*New Password"
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
          label="*Confirm Password"
          suffix-icon="eyeClosed"
          @suffix-icon-click="handleIconClick"
          placeholder="Enter password again"
          validation="password|confirm"
        />
        <p class="text-xs mb-6">
          Remembered your Password?
          <router-link
            :to="{ name: 'LoginPage' }"
            class="ml-1 underline hover:text-yellow-500"
            >Login</router-link
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
// import AppGoBack from '@/components/AppGoBack.vue'
import AuthTemplate from '../../components/AuthTemplate.vue'

const newPassword = ref({})

const store = useStore()

const handleSubmit = (credentials) => {
  try {
    console.log(credentials)
    store.commit('auth/setNotification', {
      message: 'Your password has been successfully updated',
      alertType: 'Success'
    })
  } catch (err) {
    confirm.log(err)
    store.commit('auth/setNotification', {
      message: 'An error occured while creating new password. Please try again',
      alertType: 'Warning'
    })
  } finally {
    reset('new-password-reset-form')
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
