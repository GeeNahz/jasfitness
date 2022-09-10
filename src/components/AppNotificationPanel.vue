<template>
  <div
    class="absolute left-[50%] -translate-x-[50%] z-30 p-3 shadow rounded flex flex-col justify-center border"
    :class="classAttrs"
  >
    <div class="header flex items-center mb-2">
      <AppNotificationPanelSvg :svgType="iconType.toLowerCase()" class="w-5" />
      <h4 class="font-semibold text-md ml-4">
        {{ notificationData.alertType }}!
      </h4>
    </div>
    <p class="text-sm font-light mx-9">{{ notificationData.message }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppNotificationPanelSvg from '@/components/AppNotificationPanelSvg.vue'

const props = defineProps({
  notifyObject: {
    type: Object,
    required: false
  }
})

const classAttrs = ref('')
const iconType = ref('')
const notificationData = ref({})

const classStyles = ref({
  Success: 'bg-teal-50 text-teal-800',
  Warning: 'bg-red-50 text-red-700',
  Info: 'bg-blue-100 text-blue-700'
})

onMounted(() => {
  notificationData.value = props.notifyObject[0]
  iconType.value = props.notifyObject[0].alertType
  classAttrs.value = classStyles.value[props.notifyObject[0].alertType]
})
</script>
