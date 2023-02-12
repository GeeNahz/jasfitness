<template>
  <div class="h-full w-full text-[#303030]">
    <div class="h-fit w-full pt-10 lg:pt-0">
      <!-- heading section -->
      <div class="border-b border-gray-200 p-3 min-h-fit">
        <h1 class="font-inter font-bold text-2xl text-start">Settings</h1>
      </div>
      <!-- main section -->
      <div class="min-h-fit w-full border-b border-gray-200 px-2 lg:px-5 py-3">
        <div
          v-for="(item, index) in items"
          :key="'item' + index + 1"
          class="item border-y border-gray-200 py-2 lg:flex justify-between align-start"
          :id="item.ids.length && item.ids"
        >
          <div class="item__text text-start">
            <div
              class="main mb-1 font-inter font-semibold text-base ;g:text-lg"
            >
              {{ item.name }}
            </div>
            <div
              v-if="item.description"
              class="sub text-xs lg:text-sm mb-1 lg:mb-0"
            >
              {{ item.description }}
            </div>
          </div>
          <div class="item__action">
            <button
              class="py-1 px-2 lg:px-4 text-xs lg:text-sm border border-black hover:bg-gray-50 transition-color rounded-sm"
              @click="item.actionBtn.action()"
            >
              {{ item.actionBtn.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const { toggleRunOrientation } = inject('runOrientationManually')
const router = useRouter()
function triggerRunOrientation() {
  router.push({ name: 'DashboardHome' })
  toggleRunOrientation(true)
}
const items = [
  {
    name: 'Orientation',
    description:
      'You can go through the orientation again to familiarize with the application.',
    ids: ['orientation-setting'],
    actionBtn: {
      name: 'Re-orientation',
      action: triggerRunOrientation
    }
  }
]

const { toggleIsReady } = inject('isComponentReady')
onMounted(() => {
  toggleIsReady(true)
})
</script>

<style lang="scss" scoped></style>
