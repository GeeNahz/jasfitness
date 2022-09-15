<template>
  <div class="h-full">
    <LayoutView :showTitle="false">
      <template #welcome-section>
        <!-- welcome text -->
        <div
          class="welcome-container container py-3 flex justify-between items-center"
        >
          <div class="welcome">
            <p class="text-2xl font-semibold">Fitness Record...</p>
            <p class="text-sm">Consistency over motivation!!!</p>
          </div>
        </div>
        <br />
        <!-- goals -->
        <div
          class="relative goals-container border border-gray-300 rounded-xl w-96 ml-10 p-6"
        >
          <p class="absolute -top-4 left-4 bg-white px-2 py-1">Goals</p>
          <p class="text-gray-500 font-light text-xl">
            My Goal is simple, I want to loose weight and turn this Fat into
            muscles.
          </p>
        </div>
        <!-- fitness report & activities -->
        <div class="mx-10">
          <!-- divider -->
          <DashboardDivider name="Fitness Report" />
          <div class="chart-container">
            <div class="chart bg-gray-50 p-2 mt-4 rounded-xl">
              <DashboardChartBar />
            </div>
          </div>
          <DashboardDivider name="Fitness Activities" />
          <!-- fitness activities -->
          <table class="table table-striped table-auto">
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
        <button
          class="flex gap-4 justify-center items-center bg-transparent px-4 py-2 mb-8 w-full border border-gray-600 text-yellow-600 font-semibold rounded-xl"
        >
          <p>Resubscribe</p>
          <i class="fa-solid fa-arrows-rotate"></i>
        </button>
        <div class="mb-4">
          <DashboardSubscriptionCard :addIcon="false">
            <template #title>
              <h4 class="font-semibold text-lg text-center pb-4 block w-full">
                My Record
              </h4>
            </template>
            <template #description>
              <ul class="space-y-4 w-full">
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
              </ul>
            </template>
          </DashboardSubscriptionCard>
        </div>
        <div class="mb-4">
          <DashboardSubscriptionCard :addIcon="false">
            <template #title>
              <h4 class="font-semibold text-lg text-center block w-full">
                Weekly Performance
              </h4>
            </template>
            <template #description>
              <p class="text-xs font-light">
                Based on your goal, you should go to the gym at least 4 times
                weekly
              </p>
            </template>
            <template #button>
              <div class="flex items-center justify-center w-full text-center">
                <DashboardRadialProgressBar :completedSteps="87.5" />
              </div>
            </template>
          </DashboardSubscriptionCard>
        </div>
        <button class="bg-green-500 font-semibold w-full px-4 py-2 rounded-xl">
          Download Record
        </button>
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
