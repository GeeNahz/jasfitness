<template>
  <AuthTemplate>
    <template #motivation-section>
      Being Fit is Hard. &nbsp; Being Obese is Hard.
      <span class="text-yellow-600 font-bold">Choose</span> your Hard.
    </template>
    <template #header-section>Reset your password...</template>
    <template #form-section>
      <formKit
        type="form"
        :submit-attrs="{
          inputId: 'password-reset-form'
        }"
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
import AuthTemplate from '../../components/AuthTemplate.vue'

const formData = ref('')

const store = useStore()

const handleSubmit = (credentials) => {
  // make async request
  try {
    console.log(credentials)
    store.commit('auth/setNotification', {
      message: 'A password reset mail has been sent to your email',
      alertType: 'Success'
    })
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
