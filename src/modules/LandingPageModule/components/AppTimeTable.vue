<template>
  <div class="table-responsive">
    <table class="w-60 table-auto table table-striped">
      <caption class="text-xs">
        Upcoming event
      </caption>
      <thead class="table-dark">
        <tr>
          <th
            scope="col"
            class="inline-flex justify-center items-end gap-3 w-full capitalize text-2xl py-3 px-6"
          >
            <i class="fa-regular fa-calendar-days fa-2x"></i> Whats next
          </th>
        </tr>
      </thead>
      <tbody class="text-[#fe902d] text-sm">
        <tr>
          <td scope="row" class="flex space-x-6 items-center py-3 px-4">
            <span
              class="flex flex-col items-center text-lg font-semibold text-gray-500"
              ><span>{{ dateToday.date }}</span
              ><span>{{ dateToday.month }}</span>
            </span>
            <span>{{ item }}</span>
          </td>
        </tr>
        <tr>
          <td scope="row" class="py-3 px-4">
            <a href="https://" class="hover:text-[#e97510]">
              Check full list of events &gt;
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const item = ref('Fitness class')
const monthRepresentations = ref([
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
])

const dateToday = computed(() => {
  var today = new Date()
  var date = today.getDate()
  var month = monthRepresentations.value[today.getMonth()]
  return { date, month }
})
</script>
