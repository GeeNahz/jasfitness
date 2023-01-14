import { ref } from 'vue'

export function useRadialBar() {
  const color = ref({
    danger: 'red',
    warning: 'orange',
    success: '#70e000'
  })

  function statusColorCode(value) {
    if (value < 20) {
      return color.value.danger
    } else if (value < 50) {
      return color.value.warning
    } else {
      return color.value.success
    }
  }

  function statusColorCodeHalf(value) {
    let halfValue = value / 2
    if (halfValue < 10) {
      return color.value.danger
    } else if (halfValue < 25) {
      return color.value.warning
    } else {
      return color.value.success
    }
  }

  function percentageBoundary(value) {
    if (value < 0) return 0
    if (value > 100) return 100
    return value
  }

  return { color, statusColorCode, statusColorCodeHalf, percentageBoundary }
}
