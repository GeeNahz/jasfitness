import { ref, onMounted } from 'vue'
import { useTimeConverter } from './useConverter'

export function useGymAttendance(rawData, chartData = {}) {
  const {
    timestampToDate,
    timestampToFullDate,
    timestampToTime,
    timestampToMinutes
  } = useTimeConverter()

  const loading = ref(true)
  const preparedData = ref({
    timeIn: [],
    timeOut: [],
    date: [],
    data: [],
    labels: []
  })

  const prepareChartData = (values) => {
    for (let item of values) {
      preparedData.value.timeIn.push(timestampToTime(item.time_in))
      preparedData.value.timeOut.push(timestampToTime(item.time_out))
      preparedData.value.date.push(timestampToFullDate(item.time_in))
      preparedData.value.data.push(timestampToMinutes(item.duration))
      preparedData.value.labels.push(timestampToDate(item.time_in))
    }
  }

  onMounted(() => {
    loading.value = true
    prepareChartData(rawData)
    if (chartData) {
      chartData.value.labels = preparedData.value.labels
      chartData.value.datasets[0].data = preparedData.value.data
    }
  })

  return { preparedData, chartData }
}
