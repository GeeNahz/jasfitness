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
              class="bg-yellow-600 px-3 md:px-4 py-2 text-white font-semibold md:w-full flex flex-col-reverse md:flex-row items-center md:space-x-2 rounded-xl hover:bg-yellow-500 active:bg-yellow-700"
            >
              <p class="hidden md:block">Resubscribe</p>
              <p class="block md:hidden text-xs">Re-Sub</p>
              <i class="fa-solid fa-arrows-rotate"></i>
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
              <DashboardChartBar />
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
                  class="font-semibold text-sm md:text-lg text-center pb-4 block w-full"
                >
                  My Record
                </h4>
              </template>
              <template #description>
                <ul
                  class="grid grid-cols-2 gap-3 md:block md:space-y-4 w-full text-xs md:text-base"
                >
                  <li class="w-full">
                    <router-link :to="{ name: 'DashboardHome' }" class="w-full"
                      >Profile</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'DashboardHome' }"
                      >Fitness & Health Record</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'DashboardHome' }"
                      >Assessment Record</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'DashboardHome' }"
                      >Feedback</router-link
                    >
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
                    <p class="md:text-center text-xs font-light">
                      Based on your goal, you should go to the gym at least 4
                      times weekly
                    </p>
                  </div>
                  <div class="grid justify-center w-full">
                    <DashboardRadialProgressBar :completedSteps="87.5" />
                  </div>
                </div>
              </template>
            </DashboardSubscriptionCard>
            <button
              class="bg-green-500 font-semibold w-full mt-4 px-4 py-2 rounded-xl"
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
import LayoutView from '../components/LayoutView.vue'
import DashboardDivider from '../components/DashboardDivider.vue'
import DashboardSubscriptionCard from '../components/DashboardSubscriptionCard.vue'
import DashboardChartBar from '../components/DashboardChartBar.vue'
import DashboardRadialProgressBar from '../components/DashboardRadialProgressBar.vue'
</script>

<style scoped>
a {
  transition: color 0.15s ease-in-out, border 0.15s ease-in-out;
}
a:hover {
  color: #ca9b42;
}

a.router-link-exact-active {
  color: #ca9b42;
  border-left: solid #ca9b42;
}
</style>

<style scoped></style>
