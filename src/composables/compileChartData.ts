import { ref } from "vue";

import { useTimeConverter } from "./converter";

const {
  timestampToDate,
  timestampToFullDate,
  timestampToTime,
  timestampToMinutes,
  differenceBetweenTimestamps
} = useTimeConverter();

export function useCompileChartjsData() {
  const preparingChartData = ref(false);

  function togglePreparingChartData(value: boolean) {
    preparingChartData.value = value;
  }
  function prepareChartData(rawData: any[]) {
    togglePreparingChartData(true);

    const preparedChartData = ref<{
      timeIn: any[];
      timeOut: any[];
      date: any[];
      data: any[];
      labels: any[];
    }>({
      timeIn: [],
      timeOut: [],
      date: [],
      data: [],
      labels: []
    })
    
    for (const item of rawData) {
      let timeInHours = 0;
      if (!item.duration) {
        if (item.time_out) {
          // time out is available
          const timeIn = new Date(Date.parse(item.time_in));
          const timeOut = new Date(Date.parse(item.time_out));
  
          timeInHours = differenceBetweenTimestamps({
            subtract: Number(timeIn),
            from: Number(timeOut),
            differenceOf: 'hours'
          });
        } else if (!item.time_out) {
          const currentTime = timestampToMinutes(new Date().toTimeString());
          const timestampIn = timestampToMinutes(item.time_in);
          timeInHours = differenceBetweenTimestamps({
            subtract: timestampIn,
            from: currentTime,
            differenceOf: 'hours',
          });
        }
      } else {
        timeInHours = timestampToMinutes(item.duration) / 60;
      }
      const roundedTimeInHours =
        Math.round((timeInHours + Number.EPSILON) * 100) / 100;
      preparedChartData.value.timeIn.push(timestampToTime(item.time_in));
      preparedChartData.value.timeOut.push(timestampToTime(item.time_out));
      preparedChartData.value.date.push(timestampToFullDate(item.time_in));
      preparedChartData.value.data.push(roundedTimeInHours)
      preparedChartData.value.labels.push(timestampToDate(item.time_in));
    }
    togglePreparingChartData(false);
    
    return { preparedChartData };
  }
  
  return {
    prepareChartData,
    togglePreparingChartData,
    preparingChartData,
  };
}