<script setup lang="ts">
import AppIconSuccess from '@/components/icons/IconSuccess.vue';
import { onMounted, ref, computed } from 'vue'
import { useRouter } from "vue-router";
import AppButton from "@/components/Button.vue"
import { useDynamicRoute } from '@/composables/dynamicRouteWrapper'
import type { PaymentFormData } from '../types'

interface Props {
  wizard: PaymentFormData[]
}
const props = defineProps<Props>();

const router = useRouter()
function goToHomepage() {
  router.push('/')
}
function goToDashboard() {
  useDynamicRoute({ router: router, routeName: 'DashboardSubscription' })
}

const emit = defineEmits(['update'])
const data = ref()
onMounted(() => {
  data.value = props.wizard[1]
  data.value.step.status = 'complete'
  emit('update', data.value, data.value?.id)
})

const isNew = computed(
  () => props.wizard[0]?.isNewClient
)
</script>

<template>
  <div>
    <div class="success text-center w-full px-3">
      <div
        class="success__icon text-9xl md:text-[250px] grid place-items-center"
      >
        <AppIconSuccess />
      </div>
      <div class="success__message mb-3 md:mb-4">
        <div class="main">
          <p class="text-xl md:text-3xl text-slate-700 font-bold mb-3 md:mb-4">
            Your payment was successful!
          </p>
        </div>
        <div v-if="isNew" class="sub text-slate-500 text-sm md:text-base">
          <p class="mb-1 md:mb-2">
            A comfirmation e-mail has been sent to you.
          </p>
          <p>
            Use the link provided in the e-mail to complete your registration.
          </p>
        </div>
      </div>
      <AppButton
        v-if="isNew"
        :button-class="'w-full md:w-max rounded-md bg-green-500 hover:bg-green-600 text-white py-2 px-4 transition'"
        :on-click="goToHomepage"
      >
        Explore our Homepage
      </AppButton>
    </div>
    <!-- <h3>Success Form</h3> -->
  </div>
</template>