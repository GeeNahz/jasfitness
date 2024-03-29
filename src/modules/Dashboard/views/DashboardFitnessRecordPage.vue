<script setup lang="ts">
import { ref, onMounted, watch, inject } from 'vue'
import { useMeta } from 'vue-meta'

import AppLoader from '@/components/AppLoader.vue'
import AppIconMessage from '@/components/icons/AppIconMessage.vue'
import AppIconProfile from '@/components/icons/AppIconProfile.vue'
import AppIconAssessment from '@/components/icons/AppIconAssessment.vue'

import PageLayout from '../components/PageLayout.vue'
import DashboardDivider from '../components/DashboardDivider.vue'
import DashboardCard from '../components/DashboardCard.vue'
import DashboardChart from "../components/DashboardChart.vue";
import AppProgressbar from "@/components/custom/AppProgressbar.vue";
import ResubButton from '../components/ResubButton.vue'
import { useAuthStore } from '@/modules/Authentication/stores/auth'
import { storeToRefs } from 'pinia'
import { useDashboardStore } from '../stores/dashboard'
import { useCompileChartjsData } from '@/composables/compileChartData'

useMeta({ title: 'Fitness Record' })

function openModal(modalId: string) {
  dashboardStore.toggleModal(modalId);
}

const dashboardStore = useDashboardStore();
const { dashboardFitness: fitness_target, gymAttendance: gym_attendance } = storeToRefs(dashboardStore);

const authStore = useAuthStore();
const { userId } = storeToRefs(authStore);

const scheduleItems = ref<any>();
const { prepareChartData, preparingChartData } = useCompileChartjsData();
function prepareData() {
  if (gym_attendance.value?.results) {
    const { preparedChartData } = prepareChartData(gym_attendance.value.results);

    scheduleItems.value = preparedChartData.value;
    chartData.value.labels = preparedChartData.value.labels.reverse();
    chartData.value.datasets[0].data = preparedChartData.value.data.reverse();
  }
}
const chartData = ref({
  labels: [] as any[],
  datasets: [
    {
      label: 'Time spent (hours)',
      backgroundColor: '#ca9b42',
      data: [] as any[]
    }
  ]
})
watch(gym_attendance, () => {
  if (gym_attendance.value) {
    prepareData()
  }
})

const isReady = inject('isComponentReady') as any;
onMounted( async () => {
  if (!fitness_target.value) {
    await dashboardStore.dashboard_fitness();
  }
  if (!gym_attendance.value) {
    await dashboardStore.dashboard_gym_attendance(userId.value as number);
  }
  if (gym_attendance.value) {
    prepareData();
  }
  isReady.toggleIsReady(true);
})
</script>

<template>
  <div class="h-full">
    <PageLayout :showTitle="false">
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
            <ResubButton />
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
            <div v-if="preparingChartData" class="h-full w-full">
              <AppLoader />
            </div>
            <div
              v-if="!preparingChartData && chartData.datasets[0].data.length"
              class="chart bg-gray-50 p-2 mt-4 rounded-xl"
            >
              <DashboardChart type="bar" :chart-data="chartData" css-classes="h-full w-full" />
              <!-- <DashboardChartBar :chartData="chartData" /> -->
            </div>
            <div
              v-else
              class="h-[400px] rounded-lg bg-gray-200 text-gray-400 flex justify-center items-center font-semibold text-sm lg:text-lg"
            >
              <p>
                No gym session yet. Start a gym session to view your progress.
              </p>
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
            <tbody v-if="gym_attendance?.results">
              <tr
                v-for="(date, index) in scheduleItems?.date"
                :key="date + '-data'"
              >
                <td>{{ index + 1 }}</td>
                <td>{{ date }}</td>
                <td>{{ scheduleItems?.timeIn[index] }}</td>
                <td>{{ scheduleItems?.timeOut[index] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
      <template #inner-side-bar>
        <div class="w-full">
          <div
            id="fitnessrecord-panel"
            class="flex flex-col items-center lg:block mb-4 w-full"
          >
            <DashboardCard class="w-full" :addIcon="false">
              <template #title>
                <h4
                  class="font-semibold text-sm lg:text-lg text-center py-1 lg:py-3 block w-full"
                >
                  My Record
                </h4>
              </template>
              <template #description>
                <div class="flex justify-center">
                  <ul
                    class="grid grid-cols-2 gap-3 lg:gap-0 md:flex flex-col items-start lg:space-y-1 w-max text-xs sm:text-sm"
                  >
                    <li class="w-full">
                      <p
                        @click="openModal('profile')"
                        class="link w-full flex items-center gap-3"
                      >
                        <AppIconProfile />
                        Profile
                      </p>
                    </li>
                    <!-- <li class="w-full opacity-30">
                      <p
                        class="link w-full flex justify-start items-center gap-3 disabled"
                      >
                        <AppIconRecord />
                        Fitness & Health Record
                      </p>
                    </li> -->
                    <li class="w-full">
                      <p
                        @click="openModal('accessmentRecord')"
                        class="link w-full flex items-center gap-3 whitespace-nowrap"
                      >
                        <AppIconAssessment />
                        Fitness Record
                      </p>
                    </li>
                    <li class="w-full disabled">
                      <p
                        @click="openModal('feedback')"
                        class="link w-full flex items-center gap-3"
                      >
                        <AppIconMessage />
                        Feedback
                      </p>
                    </li>
                  </ul>
                </div>
              </template>
            </DashboardCard>
          </div>
          <div class="flex flex-col items-center w-full">
            <DashboardCard :addIcon="false">
              <template #title>
                <div class="flex justify-between md:block">
                  <div class="texts">
                    <h4
                      class="font-semibold text-sm md:text-lg md:text-center block w-full"
                    >
                      Fitness Performance
                    </h4>
                    <p class="md:text-center text-xs my-3 font-light">
                      Based on your goal, you should go to the gym at least 4
                      times weekly
                    </p>
                  </div>
                  <div v-if="fitness_target" class="grid justify-center w-full">
                    <AppProgressbar :progress="fitness_target.average / 100" class="" />
                  </div>
                </div>
              </template>
            </DashboardCard>
            <!-- <button
              class="bg-[#70e000] font-semibold w-full mt-4 px-4 py-2 rounded-xl"
            >
              Download Record
            </button> -->
          </div>
        </div>
      </template>
    </PageLayout>
  </div>
</template>

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
  color: gray;
  pointer-events: none;
}
.disabled #stroke {
  stroke: gray;
}
.disabled #path {
  fill: gray;
}
</style>