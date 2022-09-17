export function Sid(value) {
  var a = parseInt(value, 16)
  // console.log("aaarr", a)
  return a
}
export function kong(value) {
  if (value < 0) {
    return
  } else {
    return value
  }
  // console.log("aaarr", a)
}

export function getDate(time) {
  if (time == undefined) {
    return
  }
  var d = new Date(time)
  var times =
    formatNumber(d.getFullYear()) +
    "-" +
    formatNumber(d.getMonth() + 1) +
    "-" +
    formatNumber(d.getDate()) +
    " " +
    formatNumber(d.getHours()) +
    ":" +
    formatNumber(d.getMinutes()) +
    ":" +
    formatNumber(d.getSeconds())
  return times
}
//在各位前面加0
function formatNumber(num) {
  num = num.toString()
  return num[1] ? num : "0" + num
}
