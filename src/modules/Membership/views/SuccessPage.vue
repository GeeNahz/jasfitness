<template>
  <div class="h-full w-full flex items-center justify-center">
    <div
      class="h-max w-full mx-3 md:w-[40rem] rounded-md shadow-sm border-t-4 border-t-green-400 p-3 md:p-5"
    >
      <div
        class="icon text-5xl md:text-8xl text-teal-400 text-center flex justify-center"
      >
        <AppIconCheckOutline />
      </div>
      <div class="text-content my-2 md:my-4 font-inter">
        <div
          class="title font-semibold text-2xl md:text-3xl text-center text-[#303030] mb-2"
        >
          <p>Success!</p>
        </div>
        <div
          class="sub-title font-light text-sm md:text-base text-center text-[#555]"
        >
          <p>{{ message }}</p>
        </div>
      </div>
      <div class="action flex flex-col justify-center items-center my-4 gap-3">
        <button
          @click="goToHomePage"
          class="w-full md:w-max rounded-md bg-green-400 hover:bg-green-500 text-white py-2 px-4 transition"
        >
          Explore our Homepage
        </button>
        <button
          @click="returnToForm"
          class="w-full md:w-max underline underline-offset-2 text-blue-600 hover:text-blue-700 visited:text-purple-600 transition"
        >
          Fill for a friend
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import AppIconCheckOutline from '@/components/icons/AppIconCheckOutline.vue'

const router = useRouter()
const route = useRoute()

const message = ref('')

onMounted(() => {
  message.value = route.query.message
})

function goToHomePage() {
  router.push({ name: 'LandingPageHome' })
}
function returnToForm() {
  router.back()
}
</script>
