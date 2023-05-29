<script setup lang="ts">
import { nextTick, onMounted } from "vue";
import { Chart, Tooltip, Legend, Title, LineElement, LineController, LinearScale, PointElement, CategoryScale, } from "chart.js";

const raw = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

const labels = raw.map(row => row.year);
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: raw.map(row => row.count),
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

function renderChart() {
  Chart.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LineController,
    LinearScale,
    PointElement,
    CategoryScale,
  );
  const ctx = document.getElementById("line-chart") as HTMLCanvasElement;
  const chart = new Chart(ctx, {
    type: "line",
    data: data,
  })
  console.log(chart);
}

onMounted(() => {
  nextTick(() => {
    renderChart();
  });
});
</script>
<template>
  <canvas id="line-chart"></canvas>
</template>