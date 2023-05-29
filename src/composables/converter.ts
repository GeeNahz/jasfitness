export function useTimeConverter() {
  function currentMonth(monthNumber: number) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    return months[monthNumber]
  }

  function timestampToDate(value: string) {
    const date = new Date(Date.parse(value))
    const day = date.getDate()
    const month = currentMonth(date.getMonth())
    const dayAndMonth = `${day} ${month.slice(0, 3)}`
    return dayAndMonth
  }

  function timestampToFullDate(value: string) {
    const timestampString = new Date(Date.parse(value))
    const day = timestampString.getDate()
    const month = currentMonth(timestampString.getMonth())
    const year = timestampString.getFullYear()

    const date = `${day} ${month} ${year}`
    return date
  }

  function timestampToTime(value: string) {
    const timestampString = new Date(Date.parse(value))
    const sec = timestampString.getSeconds()
    const min = timestampString.getMinutes()
    const hour = timestampString.getHours()

    const time = `${hour}:${min}:${sec}`
    return time
  }

  function timestampToMinutes(value: string) {
    const parsedValues = value.split(':').map((value) => parseFloat(value))
    const hoursToMin = parsedValues[0] * 60
    const min = parsedValues[1]
    const secToMin = parsedValues[2] / 60

    const totalMin = hoursToMin + min + secToMin
    return totalMin
  }

  type Difference = "hours" | "minutes" | "seconds";
  function differenceBetweenTimestamps({
    subtract,
    from,
    differenceOf = 'hours'
  }: {subtract: number; from: number; differenceOf: Difference; }) {
    const difference = from - subtract
    let output
    switch (differenceOf) {
      case 'hours':
        output = Math.floor(difference / 1000 / 60 / 60)
        break
      case 'minutes':
        output = Math.floor(difference / 1000 / 60)
        break
      case 'seconds':
        output = Math.floor(difference / 1000)
        break
      default:
        throw Error(
          'Unexpected "differenceOf" argument. Accepted values are "hours", "minutes" and "seconds".'
        )
    }

    return output
  }

  return {
    timestampToDate,
    timestampToFullDate,
    timestampToTime,
    timestampToMinutes,
    differenceBetweenTimestamps
  }
}
