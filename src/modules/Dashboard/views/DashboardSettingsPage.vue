<script setup lang="ts">
import { inject, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useDashboardStore } from "../stores/dashboard";

import PageLayout from "../components/PageLayout.vue";

const dashboardStore = useDashboardStore();

const { toggleRunOrientation } = inject('runOrientationManually') as any;
const router = useRouter();

function triggerRunOrientation() {
  router.push({ name: 'DashboardHome' });
  toggleRunOrientation(true);
}

function dashboardModal() {
  dashboardStore.toggleModal("passwordReset");
}

const items = [
  {
    name: 'Change Password',
    description:
      'To ensure your account remains secure, we advice that you periodically change your password.',
    ids: ['change-password'],
    actionBtn: {
      name: 'Change password',
      action: dashboardModal,
    }
  },
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

const { toggleIsReady } = inject('isComponentReady') as any;
onMounted(() => {
  toggleIsReady(true)
})
</script>

<template>
  <PageLayout :is-dashboard="false">
    <div class="h-full w-full text-[#303030]">
      <div class="settings-content h-fit w-full pt-10 lg:pt-0">
        <!-- heading section -->
        <div class="border-b border-gray-200 p-3 min-h-fit">
          <h1 class="font-inter font-bold text-2xl text-start">Settings</h1>
        </div>
        <!-- main section -->
        <div class="items min-h-fit w-full border-b border-gray-200">
          <div
            v-for="(item, index) in items"
            :key="'item' + index + 1"
            class="item first:border-t border-b border-gray-200 py-2 lg:flex justify-between align-start"
            :id="(item.ids.map(id => {return id})).join(' ')"
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
                class="py-1 px-2 lg:px-4 mb-1 lg:mb-0 text-xs lg:text-sm border border-black hover:bg-gray-50 transition-color rounded-sm"
                @click="item.actionBtn.action()"
              >
                {{ item.actionBtn.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<style lang="scss" scoped>
@import '../../../assets/styles/base';

.settings-content {
  @include responsive('lg') {
    padding-top: 2.5rem;
  }
}
.items {
  padding: 0.75rem 2.5rem;
  @include responsive('lg') {
    padding: 0.75rem 1.25rem;
  }
}
</style>
