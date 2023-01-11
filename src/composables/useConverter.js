export function useTimeConverter() {
  const currentMonth = (monthNumber) => {
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

  const timestampToDate = (value) => {
    let date = new Date(Date.parse(value))
    let day = date.getDate()
    let month = currentMonth(date.getMonth())
    let dayAndMonth = `${day} ${month.slice(0, 3)}`
    return dayAndMonth
  }

  const timestampToFullDate = (value) => {
    let timestampString = new Date(Date.parse(value))
    let day = timestampString.getDate()
    let month = currentMonth(timestampString.getMonth())
    let year = timestampString.getFullYear()

    let date = `${day} ${month} ${year}`
    return date
  }

  const timestampToTime = (value) => {
    let timestampString = new Date(Date.parse(value))
    let sec = timestampString.getSeconds()
    let min = timestampString.getMinutes()
    let hour = timestampString.getHours()

    let time = `${hour}:${min}:${sec}`
    return time
  }

  const timestampToMinutes = (value) => {
    let parsedValues = value.split(':').map((value) => parseFloat(value))
    let hoursToMin = parsedValues[0] * 60
    let min = parsedValues[1]
    let secToMin = parsedValues[2] / 60

    let totalMin = hoursToMin + min + secToMin
    return totalMin
  }

  return {
    timestampToDate,
    timestampToFullDate,
    timestampToTime,
    timestampToMinutes
  }
}
