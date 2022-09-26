import _ from "lodash"

function station(data, len, dataInitArray) {
  if (data.length == 0) {
    for (let i = 0; i < len; i++) {
      // console.log("c", dataInitArray)
      dataInitArray.Sid = i
      let obj = _.cloneDeep(dataInitArray)

      data.push(obj)
    }
  }
}
function stationreal(data, len, dataInitArray) {
  if (data.length == 0) {
    for (let i = 0; i < len; i++) {
      // console.log("c", dataInitArray)
      dataInitArray.sid = i
      let obj = _.cloneDeep(dataInitArray)

      data.push(obj)
    }
  }
}
//报警变灰的
function stationalah(data, len, dataInitArray) {
  if (data.length == 0) {
    for (let i = 0; i < len; i++) {
      // console.log("c", dataInitArray)
      dataInitArray.sid = i
      let obj = _.cloneDeep(dataInitArray)

      data.push(obj)
    }
  }
}
function stations(data, len) {
  if (data.length == 0) {
    for (let i = 0; i < len; i++) {
      let obj = _.cloneDeep({
        Sid: i,
        Station: i
      })

      data.push(obj)
    }
  }
}
function alarm(data, len) {
  if (data.length == 0) {
    for (let i = 0; i < len; i++) {
      data.push(0)
    }
  }
}
function alarmsettings(data, len, dataInitArray) {
  if (data.length == 0) {
    for (let i = 0; i < len; i++) {
      // console.log("c", dataInitArray)
      dataInitArray.sid = i
      let obj = _.cloneDeep(dataInitArray)

      data.push(obj)
    }
  }
}
export default {
  station,
  stations,
  alarm,
  alarmsettings,
  stationreal,
  stationalah
}
