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
            <button
              @click="resubscribeHandler"
              class="bg-yellow-600 px-3 md:px-4 py-2 text-white font-semibold flex flex-col-reverse md:flex-row items-center justify-center md:space-x-2 rounded-xl hover:bg-yellow-500 active:bg-yellow-700"
            >
              <p class="hidden md:block">Resubscribe</p>
              <p class="block md:hidden text-[10px]">Re-Sub</p>
              <i
                ><svg
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
        <!-- goals -->
        <div
          class="relative goals-container border border-gray-300 rounded-xl md:w-96 p-6"
        >
          <p
            class="absolute -top-4 left-4 text-sm md:text-base bg-white px-2 py-1"
          >
            Goals
          </p>
          <p class="text-gray-500 font-light text-base md:text-xl">
            My Goal is simple, I want to loose weight and turn this Fat into
            muscles.
          </p>
        </div>
        <!-- fitness report & activities -->
        <div class="">
          <!-- divider -->
          <div class="text-sm md:text-base my-5 md:my-4 font-semibold">
            <h4>Fitness Report</h4>
          </div>
          <div class="chart-container">
            <div class="chart bg-gray-50 p-2 mt-4 rounded-xl">
              <DashboardChartBar :chartData="chartData" />
            </div>
          </div>
          <div
            class="hidden md:block text-sm md:text-base my-5 md:my-4 font-semibold"
          >
            <h4>Fitness Activites</h4>
          </div>
          <DashboardDivider
            class="block md:hidden text-sm md:text-base my-5 md:my-4"
            name="Fitness Activities"
          />
          <!-- fitness activities -->
          <table class="table table-striped table-auto text-sm md:text-base">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Date</th>
                <th>Time IN</th>
                <th>Time OUT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>24</td>
                <td>20 August 2022</td>
                <td>7:15:23</td>
                <td>8:45:34</td>
              </tr>
              <tr>
                <td>23</td>
                <td>20 August 2022</td>
                <td>7:15:23</td>
                <td>8:45:34</td>
              </tr>
              <tr>
                <td>22</td>
                <td>20 August 2022</td>
                <td>7:15:23</td>
                <td>8:45:34</td>
              </tr>
              <tr>
                <td>21</td>
                <td>20 August 2022</td>
                <td>7:15:23</td>
                <td>8:45:34</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
      <template #inner-side-bar>
        <div class="w-full">
          <div class="flex flex-col items-center md:block mb-4 w-full">
            <DashboardSubscriptionCard :addIcon="false">
              <template #title>
                <h4
                  class="font-semibold text-sm md:text-lg text-center py-1 md:py-3 block w-full"
                >
                  My Record
                </h4>
              </template>
              <template #description>
                <ul
                  class="grid grid-cols-2 gap-3 md:gap-0 md:flex flex-col items-start md:space-y-1 w-full text-xs md:text-base"
                >
                  <li class="w-full pl-1">
                    <router-link
                      :to="{ name: 'DashboardHome' }"
                      class="w-full flex items-center gap-3"
                    >
                      <i
                        ><svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            id="stroke"
                            cx="12"
                            cy="10"
                            r="3"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                          <circle
                            id="stroke"
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="white"
                            stroke-width="2"
                          />
                          <path
                            id="stroke"
                            d="M18 18.7059C17.6461 17.6427 16.8662 16.7033 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.13375 16.7033 6.35391 17.6427 6 18.7059"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                        </svg>
                      </i>
                      Profile
                    </router-link>
                  </li>
                  <li class="w-full">
                    <router-link
                      :to="{ name: 'DashboardHome' }"
                      class="w-full flex justify-start items-center gap-3"
                    >
                      <i
                        ><svg
                          class="m-0 p-0"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="path"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.9924 7.17502L16.4772 4.3828C15.5339 3.97852 14.4661 3.97852 13.5228 4.3828L7.0076 7.17502C6.548 7.372 6.25 7.82392 6.25 8.32396V14.8901C6.25 17.3122 7.41974 19.5852 9.39071 20.9931L13.5469 23.9618C14.4161 24.5827 15.5839 24.5827 16.4531 23.9618L20.6093 20.9931C22.5803 19.5852 23.75 17.3122 23.75 14.8901V8.32396C23.75 7.82392 23.452 7.372 22.9924 7.17502ZM19.5309 11.8747C19.8759 11.4434 19.806 10.8141 19.3747 10.4691C18.9434 10.1241 18.3141 10.194 17.9691 10.6253L13.6671 16.0029L11.9571 14.2929C11.5666 13.9024 10.9334 13.9024 10.5429 14.2929C10.1524 14.6834 10.1524 15.3166 10.5429 15.7071L12.6479 17.8121C13.28 18.4443 14.3214 18.3866 14.8798 17.6885L19.5309 11.8747Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                      Fitness & Health Record</router-link
                    >
                  </li>
                  <li class="w-full pl-1">
                    <router-link
                      :to="{ name: 'DashboardHome' }"
                      class="w-full flex items-center gap-3"
                    >
                      <i
                        ><svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="stroke"
                            d="M18.9689 15.8853C19.2964 14.6629 19.3384 13.3816 19.0915 12.1405C18.8446 10.8994 18.3155 9.73167 17.5452 8.72772C16.7748 7.72377 15.7838 6.91049 14.6489 6.3508C13.5139 5.79111 12.2654 5.5 11 5.5C9.73455 5.5 8.48606 5.79111 7.35112 6.3508C6.21617 6.91049 5.22519 7.72377 4.45483 8.72772C3.68448 9.73167 3.1554 10.8994 2.90852 12.1405C2.66164 13.3816 2.70359 14.6629 3.03111 15.8853"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                          <path
                            id="stroke"
                            d="M11.7018 14.2839C12.1486 14.9342 11.8344 15.9262 10.9999 16.4996C10.1654 17.0731 9.12671 17.0108 8.67987 16.3606C8.21499 15.6841 6.63731 11.9547 5.6338 9.53523C5.42844 9.04012 6.03346 8.62435 6.42205 8.99355C8.32094 10.7977 11.2369 13.6074 11.7018 14.2839Z"
                            stroke="white"
                            stroke-width="2"
                          />
                          <path
                            id="stroke"
                            d="M11 5.5V7.33333"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                          <path
                            id="stroke"
                            d="M5.16626 7.91602L6.46262 9.21238"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                          <path
                            id="stroke"
                            d="M16.8337 7.91602L15.5374 9.21238"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                          <path
                            id="stroke"
                            d="M18.969 15.8848L17.1981 15.4103"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                          <path
                            id="stroke"
                            d="M3.03101 15.8848L4.80187 15.4103"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                        </svg>
                      </i>
                      Assessment Record
                    </router-link>
                  </li>
                  <li class="w-full pl-1">
                    <router-link
                      :to="{ name: 'DashboardHome' }"
                      class="w-full flex items-center gap-3"
                    >
                      <i
                        ><svg
                          width="20"
                          height="20"
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
                      Feedback
                    </router-link>
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
                  <div class="grid justify-center w-full">
                    <DashboardRadialProgressBar
                      :completedSteps="87.5"
                      class="hidden md:block"
                    />
                    <DashboardRadialProgressBar
                      :strokeWidth="10"
                      :diameter="120"
                      :completedSteps="87.5"
                      class="md:hidden"
                    />
                  </div>
                </div>
              </template>
            </DashboardSubscriptionCard>
            <button
              class="bg-[#70e000] font-semibold w-full mt-4 px-4 py-2 rounded-xl"
            >
              Download Record
            </button>
          </div>
        </div>
      </template>
    </LayoutView>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import DashboardService from '@/services/DashboardServices/DashboardService.js'

import LayoutView from '../components/LayoutView.vue'
import DashboardDivider from '../components/DashboardDivider.vue'
import DashboardSubscriptionCard from '../components/DashboardSubscriptionCard.vue'
import DashboardChartBar from '../components/DashboardChartBarMain.vue'
import DashboardRadialProgressBar from '../components/DashboardRadialProgressBar.vue'
import { useMeta } from 'vue-meta'

useMeta({ title: 'Fitness Record' })

onMounted(() => {
  DashboardService.get_members_assessments()
    .then((response) => {
      console.log(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
})

const chartData = ref({
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  datasets: [
    {
      label: 'Activity',
      backgroundColor: '#ca9b42',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
    }
  ]
})
</script>

<style scoped>
a {
  transition: color 0.15s ease-in-out, border 0.15s ease-in-out;
}
a #stroke,
a #path {
  transition: all 0.2s ease-in-out;
}
a:hover {
  color: #ca9b42;
}
a:hover #stroke {
  stroke: #ca9b42;
}
a:hover #path {
  fill: #ca9b42;
}
a.router-link-exact-active {
  color: #ca9b42;
  border-left: solid #ca9b42;
}
</style>
