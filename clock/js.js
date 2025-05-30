let date = new Date(Date.now())
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
let ms = date.getMilliseconds()
const sixhourtimes = [
  "SR",
  "DT",
  "SS",
  "NT"
]
const twelvehourtimes = [
  "AM",
  "PM"
]
// (hours - (4 * (Math.ceil(hours / 6)))).toString() + ":" + (minutes).toString() + ":" + (seconds).toString()  + " " + getSixHourTime()
function get6hourTime(timestamp, mode) {
  if (!mode || mode == 0) {
    if (!timestamp) {
      return (hours - (4 * (Math.ceil(hours / 6)))).toString() + ":" + (minutes).toString() + ":" + (seconds).toString() + "." + ms.toString() + " " + sixhourtimes[Math.ceil(hours / 6) - 1]
    } else {
      return (new Date(timestamp).getHours() - (4 * (Math.ceil(new Date(timestamp).getHours() / 6)))).toString() + ":" + (new Date(timestamp).getMinutes()).toString() + ":" + (new Date(timestamp).getSeconds()).toString() + "." + new Date(timestamp).getSeconds().toString() + " " + sixhourtimes[Math.ceil(new Date(timestamp).getHours() / 6) - 1]
    }
  } else if (mode == 1) {
    if (!timestamp) {
      return sixhourtimes[Math.ceil(hours / 6) - 1]
    } else {
      return sixhourtimes[Math.ceil(new Date(timestamp) / 6) - 1]
    }
  } else if (mode != 0 && mode != 1) {
    throw "ValueError: Invalid mode"
  }
}
function get12hourTime(timestamp, mode) {
    if (!mode || mode == 0) {
      if (!timestamp) {
        return hours > 12 ? (hours - 12).toString() + ":" + minutes.toString() + ":" + seconds.toString() + "." + ms.toString() + " " + twelvehourtimes[Math.ceil(hours / 12) - 1] : (hours).toString() + ":" + minutes.toString() + ":" + seconds.toString() + "." + ms.toString() + " " + twelvehourtimes[Math.ceil(hours / 12) - 1]
      } else {
        return hours > 12 ? (new Date().getHours() - 12).toString() + ":" + new Date().getMinutes().toString() + ":" + new Date().getSeconds().toString() + "." + new Date(timestamp).getSeconds.toString() + " " + twelvehourtimes[Math.ceil(new Date(timestamp).getHours() / 12) - 1] : (new Date().getHours()).toString() + ":" + new Date().getMinutes().toString() + ":" + new Date().getSeconds().toString() + "." + new Date(timestamp).getSeconds().toString() + " " + twelvehourtimes[Math.ceil(new Date(timestamp).getHours() / 12) - 1]
      }
    } else if (mode == 1) {
      if (!timestamp) {
        return twelvehourtimes[Math.ceil(hours / 12) - 1]
      } else {
        return twelvehourtimes[Math.ceil(new Date(timestamp).getHours() / 12) - 1]
      }
    } else if (mode != 0 && mode != 1) {
      throw "ValueError: Invalid mode"
    }
}
function get24hourTime(timestamp) {
  if (!timestamp) {
    return (hours).toString() + ":" + (minutes).toString() + ":" + (seconds).toString() + "." + ms.toString()
  } else {
    return (new Date(timestamp).getHours()).toString() + ":" + (new Date(timestamp).getMinutes()).toString() + ":" + (new Date(timestamp).getSeconds()).toString() + "." + new Date(timestamp).getSeconds.toString()
  }
}
function updateTime() {
  let date = new Date(Date.now())
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  let ms = date.getMilliseconds()
  document.getElementById('time').text = get12hourTime()
  document.getElementById('24-hour-time').text = get24hourTime()
  document.getElementById('6-hour-time').text = get6hourTime()
}
let clockInterval = setInterval(()=>{
  updateTime()
},37)
