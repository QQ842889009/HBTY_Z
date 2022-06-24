import _ from "lodash"

function inDoor(data, len, dataInitArray) {
  if (data.length == 0) {
    for (let i = 0; i < len; i++) {
      dataInitArray.Sid = i
      let obj = _.cloneDeep(dataInitArray)

      data.push(obj)
    }
  }
}

export default {
  inDoor
}
