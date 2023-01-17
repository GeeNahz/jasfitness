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
            <button
              @click="resubscribeHandler"
              class="bg-yellow-600 px-3 md:px-4 py-2 text-white font-semibold flex flex-col-reverse md:flex-row items-center justify-center md:space-x-2 rounded-xl hover:bg-yellow-500 active:bg-yellow-700"
            >
              <p class="hidden md:block">Resubscribe</p>
              <p class="block md:hidden text-[10px]">Re-Sub</p>
              <i>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4165 19.7917L9.7094 19.0846L9.00229 19.7917L9.7094 20.4988L10.4165 19.7917ZM13.8761 14.9179L9.7094 19.0846L11.1236 20.4988L15.2903 16.3321L13.8761 14.9179ZM9.7094 20.4988L13.8761 24.6654L15.2903 23.2512L11.1236 19.0846L9.7094 20.4988Z"
                    fill="white"
                  />
                  <path
                    d="M18.8146 8.85409C19.4546 9.96256 19.7915 11.22 19.7915 12.4999C19.7915 13.7799 19.4546 15.0373 18.8146 16.1458C18.1746 17.2542 17.2541 18.1747 16.1457 18.8147C15.0372 19.4547 13.7798 19.7916 12.4998 19.7916"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M14.5835 5.20833L15.2906 5.91544L15.9977 5.20833L15.2906 4.50123L14.5835 5.20833ZM11.1239 10.0821L15.2906 5.91544L13.8764 4.50123L9.70972 8.66789L11.1239 10.0821ZM15.2906 4.50123L11.1239 0.33456L9.70972 1.74877L13.8764 5.91544L15.2906 4.50123Z"
                    fill="white"
                  />
                  <path
                    d="M6.18539 16.1459C5.54542 15.0374 5.2085 13.78 5.2085 12.5001C5.2085 11.2201 5.54542 9.96272 6.18539 8.85425C6.82537 7.74577 7.74586 6.82529 8.85433 6.18531C9.9628 5.54533 11.2202 5.20841 12.5002 5.20841"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </i>
            </button>
          </div>
        </div>
        <br />
        <!-- attendance summary -->
        <div
          class="relative attendance-summary-container border border-gray-300 rounded-xl w-full md:p-6"
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
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <ul
            class="grid grid-cols-2 gap-x-16 lg:gap-x-0 gap-y-10 lg:gap-y-4 lg:flex lg:flex-col items-center lg:items-start lg:justify-start space-y-0 lg:space-y-10 mt-2 lg:mt-4 pl-0 lg:pl-10"
            v-if="creds"
          >
            <li>
              <router-link :to="{ name: 'DashboardSubscription' }">
                <div class="flex lg:pl-2 items-center gap-3 lg:gap-4">
                  <div class="icon">
                    <i
                      ><svg
                        width="30"
                        height="30"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="path"
                          d="M13.136 20.4C13.2847 20.55 13.4617 20.669 13.6567 20.7502C13.8517 20.8315 14.0608 20.8733 14.272 20.8733C14.4832 20.8733 14.6923 20.8315 14.8873 20.7502C15.0823 20.669 15.2593 20.55 15.408 20.4L21.936 13.872C22.2373 13.5707 22.4065 13.1621 22.4065 12.736C22.4065 12.3099 22.2373 11.9013 21.936 11.6C21.6347 11.2987 21.2261 11.1295 20.8 11.1295C20.3739 11.1295 19.9653 11.2987 19.664 11.6L14.272 17.008L12.336 15.056C12.0347 14.7547 11.6261 14.5855 11.2 14.5855C10.7739 14.5855 10.3653 14.7547 10.064 15.056C9.76271 15.3573 9.59345 15.7659 9.59345 16.192C9.59345 16.6181 9.76271 17.0267 10.064 17.328L13.136 20.4ZM30.4 0H1.6C1.17565 0 0.768687 0.168571 0.468629 0.468629C0.168571 0.768687 0 1.17565 0 1.6V30.4C0 30.8243 0.168571 31.2313 0.468629 31.5314C0.768687 31.8314 1.17565 32 1.6 32H30.4C30.8243 32 31.2313 31.8314 31.5314 31.5314C31.8314 31.2313 32 30.8243 32 30.4V1.6C32 1.17565 31.8314 0.768687 31.5314 0.468629C31.2313 0.168571 30.8243 0 30.4 0ZM28.8 28.8H3.2V3.2H28.8V28.8Z"
                          fill="white"
                        />
                      </svg>
                    </i>
                  </div>
                  <div class="">
                    <p
                      class="text-xs sm:text-sm md:text-base font-semibold py-0"
                    >
                      Sub Status
                    </p>
                    <p class="text-xs sm:text-sm font-light py-0">
                      {{ creds.sub_status }}
                    </p>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'DashboardSubscription' }">
                <div class="flex items-center justify-start gap-2 lg:gap-4">
                  <div class="icon">
                    <i>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          id="stroke"
                          x="6.66675"
                          y="8.33325"
                          width="26.6667"
                          height="26.6667"
                          rx="2"
                          stroke="white"
                          stroke-width="3"
                        />
                        <path
                          id="stroke"
                          d="M26.6667 3.33325L26.6667 11.3332C26.6667 12.2761 26.6667 12.7475 26.3739 13.0404C26.081 13.3332 25.6096 13.3332 24.6667 13.3332L15.3334 13.3333C14.3906 13.3333 13.9192 13.3333 13.6263 13.0404C13.3334 12.7475 13.3334 12.2761 13.3334 11.3333L13.3334 3.33326"
                          stroke="white"
                          stroke-width="3"
                          stroke-linecap="round"
                        />
                        <path
                          id="stroke"
                          d="M15 23.3333L25 23.3333"
                          stroke="white"
                          stroke-width="3"
                          stroke-linecap="round"
                        />
                      </svg>
                    </i>
                  </div>
                  <div class="">
                    <p
                      class="text-xs sm:text-sm md:text-base font-semibold py-0"
                    >
                      Sub Plan
                    </p>
                    <p class="text-xs sm:text-sm font-light py-0">
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
                <div class="flex items-center gap-2 lg:gap-4">
                  <div class="icon">
                    <i>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 55 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          id="stroke"
                          cx="27.4998"
                          cy="32.0833"
                          r="18.3333"
                          stroke="white"
                          stroke-width="3.5"
                        />
                        <path
                          id="stroke"
                          d="M27.5 32.0835L27.5 25.2085"
                          stroke="white"
                          stroke-width="3.5"
                          stroke-linecap="round"
                        />
                        <path
                          id="stroke"
                          d="M40.104 17.1875L43.5415 13.75"
                          stroke="white"
                          stroke-width="3.5"
                          stroke-linecap="round"
                        />
                        <path
                          id="stroke"
                          d="M23.073 5.43277C23.3341 5.18912 23.9096 4.97383 24.71 4.82028C25.5105 4.66673 26.4912 4.5835 27.5002 4.5835C28.5091 4.5835 29.4899 4.66673 30.2903 4.82028C31.0908 4.97383 31.6662 5.18912 31.9273 5.43277"
                          stroke="white"
                          stroke-width="3.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </i>
                  </div>
                  <div class="">
                    <p
                      class="text-xs sm:text-sm md:text-base font-semibold py-0"
                    >
                      Freeze Your Sub
                    </p>
                    <p class="text-xs sm:text-sm font-light py-0">
                      {{ creds.freeze.value }}
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div @click="openModal('shareSub')" class="link">
                <div class="flex md:pl-1 items-center gap-3 lg:gap-4">
                  <div class="icon">
                    <i>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 51 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="path"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M24.0227 25.5633L4.52543 19.0642C2.17221 18.2798 0.995605 17.8876 0.995605 17.1668C0.995605 16.4461 2.17221 16.0539 4.52543 15.2695L47.5386 0.931755C49.1944 0.379825 50.0223 0.10386 50.4593 0.540876C50.8963 0.977892 50.6203 1.80579 50.0684 3.46158L35.7307 46.4747C34.9463 48.828 34.5541 50.0046 33.8333 50.0046C33.1126 50.0046 32.7204 48.828 31.936 46.4747L25.4369 26.9775L37.4571 14.9573C37.8476 14.5668 37.8476 13.9336 37.4571 13.5431C37.0666 13.1525 36.4334 13.1525 36.0429 13.5431L24.0227 25.5633Z"
                          fill="white"
                        />
                      </svg>
                    </i>
                  </div>
                  <div class="">
                    <p
                      class="text-xs sm:text-sm md:text-base font-semibold py-0"
                    >
                      Share Your Plan
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="link">
                <div class="flex md:pl-2 items-center gap-3 md:gap-4">
                  <div class="icon">
                    <i>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="path"
                          d="M7 7C6.72311 7 6.45243 7.08211 6.2222 7.23594C5.99197 7.38978 5.81253 7.60843 5.70657 7.86424C5.60061 8.12006 5.57288 8.40155 5.6269 8.67313C5.68092 8.9447 5.81426 9.19416 6.01005 9.38995C6.20584 9.58574 6.4553 9.71908 6.72687 9.7731C6.99845 9.82712 7.27994 9.79939 7.53576 9.69343C7.79157 9.58747 8.01022 9.40803 8.16406 9.1778C8.31789 8.94757 8.4 8.67689 8.4 8.4C8.4 8.0287 8.2525 7.6726 7.98995 7.41005C7.7274 7.1475 7.3713 7 7 7ZM7 12.6C6.72311 12.6 6.45243 12.6821 6.2222 12.8359C5.99197 12.9898 5.81253 13.2084 5.70657 13.4642C5.60061 13.7201 5.57288 14.0016 5.6269 14.2731C5.68092 14.5447 5.81426 14.7942 6.01005 14.9899C6.20584 15.1857 6.4553 15.3191 6.72687 15.3731C6.99845 15.4271 7.27994 15.3994 7.53576 15.2934C7.79157 15.1875 8.01022 15.008 8.16406 14.7778C8.31789 14.5476 8.4 14.2769 8.4 14C8.4 13.6287 8.2525 13.2726 7.98995 13.0101C7.7274 12.7475 7.3713 12.6 7 12.6ZM21 12.6H12.6C12.2287 12.6 11.8726 12.7475 11.6101 13.0101C11.3475 13.2726 11.2 13.6287 11.2 14C11.2 14.3713 11.3475 14.7274 11.6101 14.9899C11.8726 15.2525 12.2287 15.4 12.6 15.4H21C21.3713 15.4 21.7274 15.2525 21.99 14.9899C22.2525 14.7274 22.4 14.3713 22.4 14C22.4 13.6287 22.2525 13.2726 21.99 13.0101C21.7274 12.7475 21.3713 12.6 21 12.6ZM21 7H12.6C12.2287 7 11.8726 7.1475 11.6101 7.41005C11.3475 7.6726 11.2 8.0287 11.2 8.4C11.2 8.7713 11.3475 9.1274 11.6101 9.38995C11.8726 9.6525 12.2287 9.8 12.6 9.8H21C21.3713 9.8 21.7274 9.6525 21.99 9.38995C22.2525 9.1274 22.4 8.7713 22.4 8.4C22.4 8.0287 22.2525 7.6726 21.99 7.41005C21.7274 7.1475 21.3713 7 21 7ZM23.8 0H4.2C3.08609 0 2.0178 0.442499 1.23015 1.23015C0.442499 2.0178 0 3.08609 0 4.2V18.2C0 19.3139 0.442499 20.3822 1.23015 21.1698C2.0178 21.9575 3.08609 22.4 4.2 22.4H20.426L25.606 27.594C25.7368 27.7238 25.892 27.8264 26.0625 27.8961C26.2331 27.9657 26.4158 28.0011 26.6 28C26.7836 28.0047 26.9658 27.9664 27.132 27.888C27.3877 27.783 27.6065 27.6046 27.761 27.3754C27.9155 27.1462 27.9986 26.8764 28 26.6V4.2C28 3.08609 27.5575 2.0178 26.7698 1.23015C25.9822 0.442499 24.9139 0 23.8 0ZM25.2 23.226L21.994 20.006C21.8632 19.8762 21.708 19.7736 21.5375 19.7039C21.3669 19.6342 21.1842 19.5989 21 19.6H4.2C3.8287 19.6 3.4726 19.4525 3.21005 19.1899C2.9475 18.9274 2.8 18.5713 2.8 18.2V4.2C2.8 3.8287 2.9475 3.4726 3.21005 3.21005C3.4726 2.9475 3.8287 2.8 4.2 2.8H23.8C24.1713 2.8 24.5274 2.9475 24.7899 3.21005C25.0525 3.4726 25.2 3.8287 25.2 4.2V23.226Z"
                          fill="white"
                        />
                      </svg>
                    </i>
                  </div>
                  <div class="">
                    <p
                      class="text-xs sm:text-sm md:text-base font-semibold py-0"
                    >
                      Feedback
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
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

const resubscribeHandler = () => {
  try {
    console.log('Resubscribe')
  } catch (err) {
    console.log('error:', err)
  }
}

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
a.disabled {
  color: gray;
  cursor: no-drop;
}
a.disabled #stroke {
  stroke: gray;
}
a.disabled #path {
  fill: gray;
}
</style>
