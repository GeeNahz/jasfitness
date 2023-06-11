<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import { useMeta } from 'vue-meta'
import { storeToRefs } from 'pinia'

import { useCompileChartjsData } from "@/composables/compileChartData";
import { useDashboardStore } from '../stores/dashboard'
import { useAuthStore } from '@/modules/Authentication/stores/auth'

import SpinningLoader from "@/components/SpinningLoader.vue";
import AppLoader from '@/components/AppLoader.vue'
import AppIconComplete from '@/components/icons/AppIconComplete.vue'
import AppIconPlan from '@/components/icons/AppIconPlan.vue'
import AppIconTimer from '@/components/icons/AppIconTimer.vue'
import AppIconSend from '@/components/icons/AppIconSend.vue'
import AppIconMessage from '@/components/icons/AppIconMessage.vue'

import LayoutView from '../components/PageLayout.vue'
import DashboardChart from '../components/DashboardChart.vue'
import DashboardDivider from '../components/DashboardDivider.vue'
import DashboardSummarySkeletonLoader from '../components/SummarySkeletonLoader.vue'
import DashboardHomePageSummary from '../components/HomePageSummary.vue'
import ResubButton from '../components/ResubButton.vue'
import AppModal from '@/components/AppModal.vue';

useMeta({ title: 'Dashboard' });

const viewType = ref('');

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const dashboardStore = useDashboardStore();
const { dashboardBase: creds, gymAttendance: gym_attendance, onboardingModal } = storeToRefs(dashboardStore);

const isLoadingAttendance = ref<boolean>(false);

async function fetchGymAttendance() {
  if (!gym_attendance.value) {
    try {
      isLoadingAttendance.value = false;
      await dashboardStore.dashboard_gym_attendance(user.value?.user_id as number);
    } finally {
      isLoadingAttendance.value = false;
    }
  }
  if (gym_attendance.value) {
    prepareData()
  }
}

onMounted(() => {
  nextTick(async () => {
    await fetchGymAttendance()
  })
});

const chartData = ref({
  labels: [] as any[],
  datasets: [
    {
      label: 'Time spent (hours)',
      backgroundColor: '#ffbb00',
      data: [] as any[]
    }
  ]
})

const { prepareChartData, preparingChartData } = useCompileChartjsData();

watch(gym_attendance, () => {
  if (gym_attendance.value !== null) {
    prepareData()
  }
})

function prepareData() {
  if (gym_attendance.value?.results) {
    const { preparedChartData } = prepareChartData(gym_attendance.value.results);

    chartData.value.labels = preparedChartData.value.labels.reverse()
    chartData.value.datasets[0].data = preparedChartData.value.data.reverse()
  }
}

function openModal(modalId: string) {
  dashboardStore.toggleModal(modalId);
}
</script>

<template>
  <div class="h-full w-full">
    <AppModal
      v-if="onboardingModal.open"
      :show-btn="false"
      :show-title="false"
    >
      <div class="text-gray-50">
        <SpinningLoader class="text-5xl" />
      </div>
    </AppModal>
    <LayoutView title="Members">
      <template #welcome-section>
        <!-- welcome text -->
        <div class="welcome-container container py-3 flex justify-between items-center">
          <div id="user-welcome" class="welcome md:mt-10">
            <p class="text-xl md:text-2xl font-semibold">
              Hello
              <span v-if="user" class="capitalize">{{ user.username }}</span>,
            </p>
            <p class="w-52 md:w-fit text-xs md:text-sm text-gray-400">
              Welcome back!
            </p>
          </div>
          <div id="resubscription-btn">
            <ResubButton />
          </div>
        </div>
        <br />
        <!-- attendance summary -->
        <div id="home-summary"
          class="relative attendance-summary-container border border-gray-300 rounded-xl w-full pt-[2px] md:p-6">
          <p class="absolute -top-4 left-4 text-sm xl:text-base bg-white px-2 py-1">
            Attendance Summary <span class="hidden lg:inline">Total</span>
          </p>
          <Suspense>
            <DashboardHomePageSummary />
            <template #fallback>
              <DashboardSummarySkeletonLoader />
            </template>
          </Suspense>
        </div>
        <!-- fitness record -->
        <div class="md:h-96">
          <!-- divider -->
          <DashboardDivider class="text-sm xl:text-base my-5 xl:my-4" name="My Fitness Record" />
          <div v-if="preparingChartData" class="loader h-full">
            <AppLoader />
          </div>
          <div v-if="!preparingChartData && chartData.datasets[0].data.length"
            class="chart-container md:hover:scale-100 md:scale-95 transition-transform duration-300 overflow-clip">
            <div class="chart bg-gray-50 p-2 mt-4 rounded">
              <p class="float-right">{{ viewType }}</p>
              <!-- Insert toggle button here -->
              <DashboardChart :chartData="chartData" css-classes="h-full w-full" />
            </div>
            <!-- <div class="md:hidden chart bg-gray-50 p-2 mt-4 rounded">
              <DashboardChart css-classes="h-[200px]" :chartData="chartData" />
            </div> -->
          </div>
          <div v-if="!preparingChartData && !chartData.datasets[0].data.length"
            class="w-full h-[400px] bg-gray-200 flex justify-center items-center rounded-lg px-3">
            <p class="text-gray-500 font-semibold text-lg text-center">
              No gym session yet. Start a gym session to view your progress.
            </p>
          </div>
        </div>
      </template>
      <template #display-image>
        <div class="image rounded-full overflow-hidden hidden lg:block h-20 w-20 mx-auto mb-10">
          <img v-if="user?.avatar" :src="user?.avatar" :alt="'avatar-' + user?.username"
            class="h-full w-full object-center" />
          <img v-else
            src="https://ik.imagekit.io/m0adxj6it/Jas_Fitness_Content/profile-pic-default_ECmpM6T-I.jpeg?updatedAt=1680537583502"
            alt="avatar-defualt" class="h-full w-full object-center" />
        </div>
      </template>
      <template #inner-side-bar>
        <div id="home-panel" class="flex items-center justify-center pb-3 lg:pt-6 lg:pb-0 w-full">
          <div>
            <ul
              class="grid grid-cols-2 gap-x-16 lg:gap-x-0 gap-y-10 lg:gap-y-3 lg:flex lg:flex-col items-center lg:items-start lg:justify-start space-y-0 lg:space-y-5 mt-2 lg:mt-4"
              v-if="creds">
              <li>
                <router-link :to="{ name: 'DashboardSubscription' }">
                  <div class="flex items-start gap-3 lg:gap-4">
                    <div class="icon pt-1">
                      <AppIconComplete />
                    </div>
                    <div class="">
                      <p class="text-xs sm:text-sm font-semibold">Sub End</p>
                      <p class="text-xs sm:text-sm font-light">
                        {{ creds.sub_status }}
                      </p>
                    </div>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'DashboardSubscription' }">
                  <div class="flex items-start justify-start gap-3 lg:gap-4">
                    <div class="icon pt-1">
                      <AppIconPlan />
                    </div>
                    <div class="">
                      <p class="text-xs sm:text-sm font-semibold">Sub Plan</p>
                      <p class="text-xs sm:text-sm font-light">
                        {{ creds.sub_plan }}
                      </p>
                    </div>
                  </div>
                </router-link>
              </li>
              <li v-if="creds.freeze">
                <div @click="openModal('freezeSub')" class="link" :class="{
                  'disabled ':
                    !creds.freeze.is_active ||
                    creds.freeze.value > Number(creds.freeze.total) - 1 ||
                    creds.is_expired
                }">
                  <div class="flex items-start gap-x-3 lg:gap-x-4">
                    <div class="icon pt-1">
                      <AppIconTimer />
                    </div>
                    <div class="">
                      <p class="text-xs sm:text-sm font-semibold">
                        Freeze Your Sub
                      </p>
                      <p class="text-xs sm:text-sm font-light">
                        {{ creds.freeze.value }} of {{ creds.freeze.total }}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div @click="openModal('shareSub')" class="link" :class="{
                  'disabled ': creds.is_expired
                }">
                  <div class="flex items-start gap-3 lg:gap-4">
                    <div class="icon">
                      <AppIconSend />
                    </div>
                    <div class="">
                      <p class="text-xs sm:text-sm font-semibold py-0">
                        Share Your Plan
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="link disabled">
                  <div class="flex items-center gap-3 md:gap-4">
                    <div class="icon">
                      <AppIconMessage />
                    </div>
                    <div class="">
                      <p class="text-xs sm:text-sm font-semibold py-0">
                        Feedback
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </LayoutView>
  </div>
</template>

<style scoped>
a,
div.link {
  transition: all 0.15s ease-in-out;
}

a:hover,
div.link:hover {
  cursor: pointer;
  color: #ca9b42;
}

a :where(#stroke, #path),
div.link :where(#stroke, #path) {
  transition: all 0.2s ease-in-out;
}

a:hover :where(#stroke),
div.link:hover :where(#stroke) {
  stroke: #ca9b42;
}

a:hover :where(#path),
div.link:hover :where(#path) {
  fill: #ca9b42;
}

a.router-link-exact-active,
div.link.router-exact-active {
  color: #ca9b42;
  border-left: solid #ca9b42;
}

div.disabled {
  color: gray;
  pointer-events: none;
}

div.disabled #stroke {
  stroke: gray;
}

div.disabled #path {
  fill: gray;
}
</style>
