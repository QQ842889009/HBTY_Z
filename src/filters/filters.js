export function Sid(value) {
  var a = parseInt(value, 16)
  // console.log("aaarr", a)
  return a
}

export function getDate(time) {
  // console.log("time", time)
  if (time == undefined) {
    return
  }
  var d = new Date(time)
  var times =
    d.getFullYear() +
    "-" +
    (d.getMonth() + 1) +
    "-" +
    d.getDate() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes() +
    ":" +
    d.getSeconds()
  return times

  // let myyear = new Date(time).getFullYear()
  // let mymonth = new Date(time).getMonth() + 1
  // let mydate = new Date(time).getDate()
  // let mydatef = new Date(time).getDate() - 1
  // //                 let myhh = new Date().getHours();

  // let myhh =
  //   new Date().getHours() < 10
  //     ? "0" + new Date().getHours()
  //     : new Date().getHours()
  // let mymm =
  //   new Date().getMinutes() < 10
  //     ? "0" + new Date().getMinutes()
  //     : new Date().getMinutes()

  // let myss =
  //   new Date().getSeconds() < 10
  //     ? "0" + new Date().getSeconds()
  //     : new Date().getSeconds()
  // let mynowTime =
  //   myyear +
  //   "-" +
  //   mymonth +
  //   "-" +
  //   mydatef +
  //   " " +
  //   myhh +
  //   ":" +
  //   mymm +
  //   ":" +
  //   myss

  // return mynowTime
}
