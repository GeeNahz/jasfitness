<template>
  <Line
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
  <div class="bg-[#ffbb00]"></div>
</template>

<script setup>
import { ref } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
  // Plugin
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
)

defineProps({
  chartData: {
    type: Object,
    default: () => {}
  },
  chartId: {
    type: String,
    default: 'line-chart'
  },
  datasetIdKey: {
    type: String,
    default: 'label'
  },
  width: {
    type: Number,
    default: 400
  },
  height: {
    type: Number,
    default: 400
  },
  cssClasses: {
    type: String,
    default: ''
  },
  styles: {
    type: Object,
    default: () => {}
  },
  plugins: {
    type: Object,
    default: () => {}
  }
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    // x: {
    //   title: {
    //     display: true,
    //     text: 'Days at the gym'
    //   }
    // },
    y: {
      suggestedMin: 30,
      suggestedMax: 120,
      ticks: {
        callback: (value) => {
          return value + ' mins'
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped></style>
