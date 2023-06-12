import type { AxiosResponse } from "axios";
import { ref } from "vue";

/**NOTE:
This composable assumes that there is a service that uses the axios AJAX api. If the AJAX api isn't axios, please refactor this to suite the usecase.
 */

const data = ref<null | {}>(null);
const response = ref<null | {}>(null);
const statusText = ref<string>();
const statusCode = ref<number>();
const headers = ref();
const request = ref();
const errorData = ref<null | {}>(null);

const success = ref<boolean>(false);
const isFetching = ref<boolean>(false);
const error = ref<boolean>(false);

export async function useFetchData(service: (args?: any) => Promise<AxiosResponse<any, any>>, args: null | any = null) {
  isFetching.value = true;
  let res;
  try {
    if (args !== null) {
      res = await service(args);
    } else {
      res = await service();
    }

    response.value = res;
    data.value = res.data;
    statusCode.value = res.status;
    statusText.value = res.statusText;
    headers.value = res.headers;

    isFetching.value = false;
    success.value = true;

    // console.log("Response from 'fetch.ts': ", res)
  } catch (err: any) {
    alert(`useFetchData error: ${err}`);
    console.log("useFetchData error: ", err);
    if (err.response) {
      errorData.value = err.response.data;
      statusCode.value = err.response.status;
      headers.value = err.response.headers;
      statusText.value = err.response.data;
    } else if (err.request) {
      // request was made but no response was received.
      statusCode.value = err.request.status;
      request.value = err.request;
      statusText.value = err.request.responseText;
    } else {
      statusCode.value = 400; // TODO: change the default error code
    }
    statusText.value = err.message;

    isFetching.value = false;
    error.value = true;

    console.log("Error from 'fetch.ts': ", err);
  } finally {
    setTimeout(() => {
      success.value = false;
      error.value = false;
      errorData.value = null;
    }, 10000);
  }

  return { data, response, success, isFetching, error, errorData, statusCode, };
}