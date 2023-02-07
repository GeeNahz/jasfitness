import { ref } from 'vue'

export function useObjectValidator(obj) {
  const isEmpty = ref(true)
  isEmpty.value = Object.keys(obj).length === 0

  return { isEmpty }
}
