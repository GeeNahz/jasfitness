import { ref } from 'vue'

export function useRadialBar() {
  const color = ref({
    danger: "#f00",
    warning: "#fa0",
    success: "#70e000",
  })
  // danger: 'red',
  // warning: 'orange',
  // success: '#70e000',

  function statusColorCode(value: number) {
    if (value < 20) {
      return color.value.danger
    } else if (value < 50) {
      return color.value.warning
    } else {
      return color.value.success
    }
  }

  function statusColorCodeHalf(value: number) {
    const halfValue = value / 2
    if (halfValue < 10) {
      return color.value.danger
    } else if (halfValue < 25) {
      return color.value.warning
    } else {
      return color.value.success
    }
  }

  function percentageBoundary(value: number) {
    if (value < 0) return 0
    if (value > 100) return 100
    return value
  }

  function colorCode(value: number) {
    if (value < 0.3) {
      return color.value.danger;
    } else if (value < 0.6) {
      return color.value.warning;
    } else {
      return color.value.success;
    }
  }

  return { color, colorCode, statusColorCode, statusColorCodeHalf, percentageBoundary }
}
