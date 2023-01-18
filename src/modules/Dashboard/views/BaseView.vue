<template>
  <div class="h-full w-full">
    <LayoutView title="Members">
      <template #welcome-section>
        <!-- welcome text -->
        <div
          class="welcome-container container py-3 flex justify-between items-center"
        >
          <div class="welcome md:mt-10">
            <p class="text-xl md:text-2xl font-semibold">
              Hello
              <span v-if="user" class="capitalize">{{ user.username }}</span
              >,
            </p>
            <p class="w-52 md:w-fit text-xs md:text-sm text-gray-400">
              Welcome back!
            </p>
          </div>
          <div>
            <a
              href="https://www.jasfitnessng.com/members/payments/"
              class="bg-yellow-600 px-3 md:px-4 py-2 text-white font-semibold flex flex-col-reverse md:flex-row items-center justify-center md:space-x-2 rounded-xl hover:bg-yellow-500 active:bg-yellow-700"
            >
              <!-- @click="resubscribeHandler" -->
              <p class="hidden md:block">Resubscribe</p>
              <p class="block md:hidden text-[10px]">Re-Sub</p>
              <AppIconRenew />
            </a>
          </div>
        </div>
        <br />
        <!-- attendance summary -->
        <div
          class="relative attendance-summary-container border border-gray-300 rounded-xl w-full pt-[2px] md:p-6"
        >
          <p
            class="absolute -top-4 left-4 text-sm xl:text-base bg-white px-2 py-1"
          >
            Attendance Summary <span class="xl:hidden">Total</span>
          </p>
          <Suspense>
            <DashboardBaseViewSummary />
            <template #fallback>
              <DashboardSummarySkeletonLoader />
            </template>
          </Suspense>
        </div>
        <!-- fitness record -->
        <div class="md:h-96">
          <!-- divider -->
          <DashboardDivider
            class="text-sm xl:text-base my-5 xl:my-4"
            name="My Fitness Record"
          />
          <div
            v-if="!preparingChartData"
            class="chart-container md:hover:scale-100 md:scale-95 transition-transform duration-300 overflow-clip"
          >
            <div class="hidden md:block chart bg-gray-50 p-2 mt-4 rounded">
              <p class="float-right">{{ viewType }}</p>
              <!-- Insert toggle button here -->
              <DashboardChart :chartData="chartData" />
            </div>
            <div class="md:hidden chart bg-gray-50 p-2 mt-4 rounded">
              <DashboardChart :height="200" :chartData="chartData" />
            </div>
          </div>
          <div v-if="preparingChartData" class="loader h-full">
            <AppLoader />
          </div>
        </div>
      </template>
      <template #display-image>
        <div class="image hidden lg:block h-16 w-16 mx-auto mb-10">
          <img
            v-if="user.avatar"
            :src="user.avatar"
            :alt="'avatar-' + user.username"
            class="rounded-full h-full w-full object-center"
          />
          <img
            v-else
            src="https://ams3.digitaloceanspaces.com/jasfitness-object-storage/media/avatar/default.png?AWSAccessKeyId=DO003ZB6CQJQTT4JTU63&Signature=qZcbkq4x%2BfTEyN0W0jybn%2BkW4S4%3D&Expires=1672852097"
            alt="avatar-defualt"
            class="rounded-full h-full w-full object-center"
          />
        </div>
      </template>
      <template #inner-side-bar>
        <div class="flex items-center justify-center pb-3 lg:pt-6 lg:pb-0">
          <div>
            <ul
              class="grid grid-cols-2 gap-x-16 lg:gap-x-0 gap-y-10 lg:gap-y-3 lg:flex lg:flex-col items-center lg:items-start lg:justify-start space-y-0 lg:space-y-5 mt-2 lg:mt-4"
              v-if="creds"
            >
              <li>
                <router-link :to="{ name: 'DashboardSubscription' }">
                  <div class="flex items-start gap-3 lg:gap-4">
                    <div class="icon pt-1">
                      <AppIconComplete />
                    </div>
                    <div class="">
                      <p class="text-xs sm:text-sm font-semibold">Sub Status</p>
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
                <div
                  @click="openModal('freezeSub')"
                  class="link"
                  :class="{
                    'disabled ': !creds.freeze.is_active
                  }"
                >
                  <div class="flex items-start gap-x-3 lg:gap-x-4">
                    <div class="icon pt-1">
                      <AppIconTimer />
                    </div>
                    <div class="">
                      <p class="text-xs sm:text-sm font-semibold">
                        Freeze Your Sub
                      </p>
                      <p class="text-xs sm:text-sm font-light">
                        {{ creds.freeze.value }}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div @click="openModal('shareSub')" class="link">
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
                <div class="link">
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

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useMeta } from 'vue-meta'

import AppLoader from '@/components/AppLoader.vue'
import AppIconComplete from '@/components/AppIconComplete.vue'
import AppIconPlan from '@/components/AppIconPlan.vue'
import AppIconTimer from '@/components/AppIconTimer.vue'
import AppIconSend from '@/components/AppIconSend.vue'
import AppIconMessage from '@/components/AppIconMessage.vue'
import AppIconRenew from '@/components/AppIconRenew.vue'
import { useTimeConverter } from '@/composables/useConverter.js'

import LayoutView from '../components/LayoutView.vue'
import DashboardChart from '../components/DashboardChartLine.vue'
import DashboardDivider from '../components/DashboardDivider.vue'
import DashboardSummarySkeletonLoader from '../components/DashboardSummarySkeletonLoader.vue'
import DashboardBaseViewSummary from '../components/DashboardBaseViewSummary.vue'

useMeta({ title: 'Dashboard' })

const viewType = ref('')

const store = useStore()
const user = computed(() =>
  store.state.auth.user ? store.state.auth.user : {}
)
const creds = computed(() =>
  store.state.dashboard.dashboardBase ? store.state.dashboard.dashboardBase : {}
)

onMounted(() => {
  store.dispatch('dashboard/dashboard_gym_attendance', user.value.id).then(
    () => {},
    () => {
      const message =
        'Something went wrong while fetching gym attendance records. Refresh the browser to try fix it.'
      store.dispatch('landingpage/error', { message, timeout: 3000 })
    }
  )
})

const {
  timestampToDate,
  timestampToFullDate,
  timestampToTime,
  timestampToMinutes
} = useTimeConverter()
const gym_attendance = computed(() =>
  store.state.dashboard.dashboardGymnAttendance
    ? store.state.dashboard.dashboardGymnAttendance
    : {}
)
const preparedChartData = ref({
  timeIn: [],
  timeOut: [],
  date: [],
  data: [],
  labels: []
})
const prepareChartData = (values) => {
  for (let item of values) {
    preparedChartData.value.timeIn.push(timestampToTime(item.time_in))
    preparedChartData.value.timeOut.push(timestampToTime(item.time_out))
    preparedChartData.value.date.push(timestampToFullDate(item.time_in))
    preparedChartData.value.data.push(timestampToMinutes(item.duration))
    preparedChartData.value.labels.push(timestampToDate(item.time_in))
  }
}
const preparingChartData = ref(true)
const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Time spent (minutes)',
      backgroundColor: '#ffbb00',
      data: []
    }
  ]
})
watch(gym_attendance, () => {
  if (gym_attendance.value !== null) {
    preparingChartData.value = true
    prepareChartData(gym_attendance.value.results)
    chartData.value.labels = preparedChartData.value.labels
    chartData.value.datasets[0].data = preparedChartData.value.data
  }
  preparingChartData.value = false
})

// const resubscribeHandler = () => {
//   try {
//     console.log('Resubscribe')
//   } catch (err) {
//     console.log('error:', err)
//   }
// }

const openModal = (modalId) => {
  store.dispatch('dashboard/toggle_modal', modalId)
}
</script>

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
