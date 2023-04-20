<template>
  <div>
    <div class="success text-center w-full px-3">
      <div
        class="success__icon text-9xl md:text-[250px] text-emerald-500 grid place-items-center"
      >
        <AppIconCheck />
      </div>
      <div class="success__message mb-3 md:mb-4">
        <div class="main">
          <p class="text-xl md:text-3xl text-slate-700 font-bold mb-3 md:mb-4">
            Your payment was successful!
          </p>
        </div>
        <div class="sub text-slate-500 text-sm md:text-base">
          <p class="mb-1 md:mb-2">
            A comfirmation e-mail has been sent to you.
          </p>
          <p v-if="wizard[0].isNewClient === 'true'">
            Use the link provided in the e-mail to complete your registration.
          </p>
        </div>
      </div>
      <CustomButton
        :button-class="'w-full md:w-max rounded-md bg-emerald-400 hover:bg-emerald-500 text-white py-2 px-4 transition'"
        :button-text="'Explore our Homepage'"
        :on-click="goToHomepage"
      />
    </div>
    <!-- <h3>Success Form</h3> -->
  </div>
</template>

<script setup>
import AppIconCheck from '@/components/icons/AppIconCheck.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import CustomButton from './CustomButton.vue'

const props = defineProps({
  wizard: { type: Array, required: true }
})

const router = useRouter()
function goToHomepage() {
  router.push('/')
}

const emit = defineEmits(['update'])
const data = ref()
onMounted(() => {
  data.value = props.wizard[1]
  data.value.step.status = 'complete'
  emit('update', data.value, data.value?.id)
})
</script>
