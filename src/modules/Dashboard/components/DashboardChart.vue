<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from "vue";
import { useWindowSize } from "@vueuse/core";
// import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  LineElement,
  LineController,
  LinearScale,
  PointElement,
  CategoryScale
} from "chart.js";
import type { ChartData, ChartOptions, ChartTypeRegistry } from "chart.js";

interface Props {
  chartData: ChartData;
  chartId?: string;
  datasetIdKey?: string;
  width?: number;
  height?: number;
  cssClasses?: string;
  styles?: {};
  type?: keyof ChartTypeRegistry;
}

const props = withDefaults(defineProps<Props>(), {
  chartId: "line-chart",
  datasetIdKey: "label",
  width: 400,
  height: 400,
  cssClasses: "",
  styles: function(){ return {} },
  type: "line",
});

const chartOptions = ref<ChartOptions>({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      // title: {
      //   display: true,
      //   text: 'Days at the gym'
      // }
    },
    y: {
      suggestedMin: 0,
      suggestedMax: 2,
      ticks: {
        callback: (value: any) => {
          return value + ' hr(s)'
        }
      }
    }
  }
})

const { width } = useWindowSize()
function changeChartFontSize() {
  if (width.value < 740) {
    ChartJS.defaults.font.size = 8
  } else {
    ChartJS.defaults.font.size = 10
  }
}
watch(width, () => {
  changeChartFontSize()
})

function renderChart() {
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LineController,
    BarElement,
    BarController,
    LinearScale,
    PointElement,
    CategoryScale
  );
  const canvas = document.getElementById("line-chart-canvas") as HTMLCanvasElement;
  new ChartJS(canvas, {
    type: props.type,
    data: props.chartData,
    options: chartOptions.value
  });
}
onMounted(() => {
  changeChartFontSize()
  nextTick(() => {
    renderChart();
  });
});
</script>

<template>
  <!-- <Line
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  /> -->
  <canvas :style="`height: ${height}; width: ${width}`" :class="cssClasses" id="line-chart-canvas"></canvas>
  <div class="bg-[#ffbb00]"></div>
</template>