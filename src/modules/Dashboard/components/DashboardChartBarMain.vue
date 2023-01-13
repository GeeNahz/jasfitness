<script>
import { defineComponent, h, onMounted, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default defineComponent({
  name: 'BarChart',
  components: {
    Bar
  },
  props: {
    chartData: {
      type: Object,
      default: () => {}
    },
    chartId: {
      type: String,
      default: 'bar-chart'
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
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          suggestedMax: 120,
          ticks: {
            callback: (value) => {
              return value + ' mins'
            }
          }
        }
      }
    }

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

    onMounted(() => {
      changeChartFontSize()
    })

    return () =>
      h(Bar, {
        chartData: props.chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins
      })
  }
})
</script>
