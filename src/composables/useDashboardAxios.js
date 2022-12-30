import { ref } from 'vue'
import axios from 'axios'

// interface Options {
//   data?: {};
//   headers?: {};
//   method?: string;
//   params?: {};
//   skip?: boolean;
// }

export function useFetch(url, options = {}) {
  const data = ref(null)
  const response = ref(null)
  const error = ref(null)
  const isLoading = ref(null)

  const baseURL = 'https://api.staging.jasfitnessng.com/api/'

  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  const fetch = async () => {
    isLoading.value = true
    try {
      const result = await axiosInstance.request({
        url,
        ...options
      })
      response.value = result
      data.value = result.data
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  !options.skip && fetch()

  return { response, error, data, isLoading, fetch }
}
