<template>
  <div class="card-member-container">
    <div class="card-wrapper px-3 pb-3 mb-4 min-h-fit w-52 sm:w-96">
      <div
        :title="profile.name"
        class="card-header h-52 max-w-44 mb-2 bg-gray-400 rounded overflow-hidden"
      >
        <!-- https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg -->
        <!-- :src="profile.imageUrl" -->
        <img
          src="https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"
          :alt="profile.name"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="card-content">
        <div class="card-content-name font-bold text-base mb-1 text-[#31302c]">
          {{ profile.name }}
        </div>
        <div class="card-content-title text-xs sm:text-sm text-slate-500">
          {{ profile.title }}
        </div>
        <hr class="my-3 hidden md:block" />
        <div
          class="card-content-description bg-white text-gray-900 text-xs hidden md:block"
        >
          {{ profile.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CardMember',
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>
