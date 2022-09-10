<template>
  <AuthTemplate>
    <template #motivation-section>
      When you see results it becomes an
      <span class="text-yellow-600 font-bold">Addiction</span>
    </template>
    <template #header-section>Welcome to JasFitFam 😁</template>
    <template #form-section>
      <formKit
        id="registration-form"
        type="form"
        :config="{ validationVisibility: 'blur' }"
        submit-label="Register"
        @submit="handleSubmit"
        v-model="userCredentials"
      >
        <formKit
          type="text"
          label="*Username"
          name="username"
          validation="required"
          suffixIcon="avatarMan"
        />
        <formKit
          type="email"
          label="*Email"
          name="email"
          validation="required|email"
          suffixIcon="email"
        />
        <formKit
          type="password"
          label="*Password"
          name="password"
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
          suffix-icon="eyeClosed"
          @suffix-icon-click="handleIconClick"
        />
        <p class="text-xs mb-6">
          Already have an account?
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
import AuthTemplate from '../components/AuthTemplate.vue'

const userCredentials = ref({
  username: '',
  email: '',
  password: ''
})

const store = useStore()

const handleSubmit = (credentials) => {
  try {
    console.log(credentials)
    store.commit('auth/setNotification', {
      message: 'You have been registered successfully',
      alertType: 'Success'
    })
  } catch (err) {
    console.log(err)
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
