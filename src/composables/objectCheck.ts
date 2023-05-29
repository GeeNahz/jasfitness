import { ref } from "vue";

export function useObjectValidator(obj: any) {
  const isEmpty = ref<boolean>(true);
  isEmpty.value = Object.keys(obj).length === 0;

  return { isEmpty };
}
