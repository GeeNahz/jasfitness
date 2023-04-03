<template>
  <div class="card-member-container">
    <div class="card-wrapper px-3 pb-3 mb-4 min-h-fit w-64 sm:w-96">
      <div
        :title="profile.name"
        class="card-header h-52 w-full mb-2 bg-gray-400 rounded overflow-hidden"
      >
        <!-- https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg -->
        <img
          :src="profile.imageUrl"
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
        <hr class="my-2 md:my-3" />
        <div class="relative transition text-slate-500 rounded-sm">
          <div class="lbl-container flex gap-2 text-sm py-1">
            <p v-if="!checkboxToggle">+</p>
            <p v-else>-</p>
            <label for="toggle" class="lbl-toggle">Read more</label>
          </div>
          <input
            type="checkbox"
            name="toggle"
            v-model="checkboxToggle"
            id="toggle"
            @blur="toggleCheckbox({ value: false })"
            class="toggle w-full opacity-0 absolute top-0 left-0 right-0 bottom-0"
          />
          <div
            class="card-content-description bg-white text-gray-900 pt-2 text-xs"
          >
            <p class="desc-content">
              {{ profile.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'CardMember',
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  setup() {
    const checkboxToggle = ref(false)
    function toggleCheckbox({ value }) {
      checkboxToggle.value = value
    }
    return { checkboxToggle, toggleCheckbox }
  }
})
</script>

<style scoped lang="scss">
.card-content-description {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.45s ease-in-out;
}
.toggle:checked + .card-content-description {
  max-height: 1000px;
}
</style>
