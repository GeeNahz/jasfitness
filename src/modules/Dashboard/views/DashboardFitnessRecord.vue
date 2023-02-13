<template>
  <div class="h-full">
    <LayoutView :showTitle="false">
      <template #welcome-section>
        <!-- welcome text -->
        <div
          class="welcome-container container py-3 flex justify-between items-center"
        >
          <div class="welcome md:mt-10">
            <p class="text-xl md:text-2xl font-semibold">Fitness Record...</p>
            <p class="w-52 md:w-fit text-xs md:text-sm text-gray-400">
              Consistency over motivation!!!
            </p>
          </div>
          <div>
            <a
              href="https://app.jasfitnessng.com/new-members/re-subscription/"
              target="_blank"
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
        <!-- goals -->
        <div
          id="goals"
          class="relative goals-container border border-gray-300 rounded-xl md:w-96 p-6"
        >
          <p
            class="absolute -top-4 left-4 text-sm xl:text-base bg-white px-2 py-1"
          >
            Goals
          </p>
          <p
            v-if="fitness_target"
            class="text-gray-500 font-light text-base xl:text-xl"
          >
            {{ fitness_target.goal }}
          </p>
        </div>
        <!-- fitness report & activities -->
        <div class="">
          <!-- divider -->
          <div class="text-sm xl:text-base my-5 xl:my-4 font-semibold">
            <h4>Fitness Report</h4>
          </div>
          <div class="chart-container h-96 w-full">
            <div
              v-if="!preparingChartData"
              class="chart bg-gray-50 p-2 mt-4 rounded-xl"
            >
              <DashboardChartBar :chartData="chartData" />
            </div>
            <div v-if="preparingChartData" class="h-full w-full">
              <AppLoader />
            </div>
          </div>
          <div
            class="hidden xl:block text-sm xl:text-base my-5 xl:my-4 font-semibold"
          >
            <h4>Fitness Activites</h4>
          </div>
          <DashboardDivider
            class="block xl:hidden text-sm xl:text-base my-5 xl:my-4"
            name="Fitness Activities"
          />
          <!-- fitness activities -->
          <table class="table table-striped table-auto text-sm xl:text-base">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Date</th>
                <th>Time IN</th>
                <th>Time OUT</th>
              </tr>
            </thead>
            <tbody v-if="gym_attendance.results">
              <tr
                v-for="(date, index) in preparedChartData.date"
                :key="date + '-data'"
              >
                <td>{{ index + 1 }}</td>
                <td>{{ date }}</td>
                <td>{{ preparedChartData.timeIn[index] }}</td>
                <td>{{ preparedChartData.timeOut[index] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
      <template #inner-side-bar>
        <div id="fitnessrecord-panel" class="w-full">
          <div class="flex flex-col items-center lg:block mb-4 w-full">
            <DashboardSubscriptionCard class="w-full" :addIcon="false">
              <template #title>
                <h4
                  class="font-semibold text-sm lg:text-lg text-center py-1 lg:py-3 block w-full"
                >
                  My Record
                </h4>
              </template>
              <template #description>
                <ul
                  class="grid grid-cols-2 gap-3 lg:gap-0 md:flex flex-col items-start lg:space-y-1 w-full text-xs sm:text-sm lg:text-base"
                >
                  <li class="w-full">
                    <p
                      @click="openModal('profile')"
                      class="link w-full flex items-center gap-3 text-sm md:text-base"
                    >
                      <AppIconProfile />
                      Profile
                    </p>
                  </li>
                  <!-- <li class="w-full opacity-30">
                    <p
                      class="link w-full flex justify-start items-center gap-3 text-sm md:text-base disabled"
                    >
                      <AppIconRecord />
                      Fitness & Health Record
                    </p>
                  </li> -->
                  <li class="w-full">
                    <p
                      @click="openModal('accessmentRecord')"
                      class="link w-full flex items-center gap-3 text-sm md:text-base whitespace-nowrap"
                    >
                      <AppIconAccessment />
                      Fitness Record
                    </p>
                  </li>
                  <li class="w-full">
                    <p
                      @click="openModal('feedback')"
                      class="link w-full flex items-center gap-3 text-sm md:text-base"
                    >
                      <AppIconMessage />
                      Feedback
                    </p>
                  </li>
                </ul>
              </template>
            </DashboardSubscriptionCard>
          </div>
          <div class="flex flex-col items-center w-full">
            <DashboardSubscriptionCard :addIcon="false">
              <template #title>
                <div class="flex justify-between md:block">
                  <div class="texts">
                    <h4
                      class="font-semibold text-sm md:text-lg md:text-center block w-full"
                    >
                      Weekly Performance
                    </h4>
                    <p class="md:text-center text-xs my-3 font-light">
                      Based on your goal, you should go to the gym at least 4
                      times weekly
                    </p>
                  </div>
                  <div v-if="fitness_target" class="grid justify-center w-full">
                    <DashboardRadialProgressBar
                      :completedSteps="fitness_target.average"
                      :stroke-color="statusColorCode(fitness_target.average)"
                      class="hidden md:block"
                    />
                    <DashboardRadialProgressBar
                      :strokeWidth="10"
                      :diameter="120"
                      :completedSteps="fitness_target.average"
                      :stroke-color="statusColorCode(fitness_target.average)"
                      class="md:hidden"
                    />
                  </div>
                </div>
              </template>
            </DashboardSubscriptionCard>
            <!-- <button
              class="bg-[#70e000] font-semibold w-full mt-4 px-4 py-2 rounded-xl"
            >
              Download Record
            </button> -->
          </div>
        </div>
      </template>
    </LayoutView>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, inject } from 'vue'
import { useStore } from 'vuex'
import { useMeta } from 'vue-meta'

import AppLoader from '@/components/AppLoader.vue'
import AppIconRenew from '@/components/AppIconRenew.vue'
import AppIconMessage from '@/components/AppIconMessage.vue'
import AppIconProfile from '@/components/AppIconProfile.vue'
import AppIconAccessment from '@/components/AppIconAccessment.vue'
import { useTimeConverter } from '@/composables/useConverter.js'
import { useRadialBar } from '@/composables/useRadialbarSettings.js'

import LayoutView from '../components/LayoutView.vue'
import DashboardDivider from '../components/DashboardDivider.vue'
import DashboardSubscriptionCard from '../components/DashboardSubscriptionCard.vue'
import DashboardChartBar from '../components/DashboardChartBarMain.vue'
import DashboardRadialProgressBar from '../components/DashboardRadialProgressBar.vue'

useMeta({ title: 'Fitness Record' })

const store = useStore()
const { statusColorCode } = useRadialBar()

const openModal = (modalId) => {
  store.dispatch('dashboard/toggle_modal', modalId)
}

const fitness_target = computed(() =>
  store.state.dashboard.dashboardFitness
    ? store.state.dashboard.dashboardFitness
    : {}
)

const userId = computed(() => store.state.auth.user.user_id)
const gym_attendance = computed(() =>
  store.state.dashboard.dashboardGymnAttendance
    ? store.state.dashboard.dashboardGymnAttendance
    : {}
)

const { toggleIsReady } = inject('isComponentReady')
onMounted(() => {
  store.dispatch('dashboard/dashboard_fitness').then(
    () => {},
    () => {
      const message =
        'Something went wrong while fetching fitness records. Refresh the browser to try fix it.'
      store.dispatch('error', { message, timeout: 3000 })
    }
  )
  store.dispatch('dashboard/dashboard_gym_attendance', userId.value).then(
    () => {},
    () => {
      const message =
        'Something went wrong while fetching gym attendance records. Refresh the browser to try fix it.'
      store.dispatch('error', { message, timeout: 3000 })
    }
  )
  toggleIsReady(true)
})

const {
  timestampToDate,
  timestampToFullDate,
  timestampToTime,
  timestampToMinutes
} = useTimeConverter()

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
      backgroundColor: '#ca9b42',
      data: []
    }
  ]
})
watch(gym_attendance, () => {
  if (gym_attendance.value !== null) {
    preparingChartData.value = true
    prepareChartData(gym_attendance.value.results)
    chartData.value.labels = preparedChartData.value.labels.reverse()
    chartData.value.datasets[0].data = preparedChartData.value.data.reverse()
  }
  preparingChartData.value = false
})
</script>

<style scoped>
a,
p.link {
  cursor: pointer;
  transition: color 0.15s ease-in-out, border 0.15s ease-in-out;
}
a #stroke,
a #path,
p.link :where(#stroke, #path) {
  transition: all 0.2s ease-in-out;
}
a:hover,
p.link:hover {
  color: #ca9b42;
}
a:hover :where(#stroke, #path),
p.link:hover :where(#stroke, #path) {
  stroke: #ca9b42;
}
a:hover #path,
p.link:hover #path {
  fill: #ca9b42;
}
a:focus,
p.link:focus {
  border: none;
}
a.router-link-exact-active {
  color: #ca9b42;
  border-left: solid #ca9b42;
}
.disabled {
  cursor: not-allowed !important;
}
</style>
