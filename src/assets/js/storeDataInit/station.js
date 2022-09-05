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
export default {
  station,
  stations
}
