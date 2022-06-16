import _ from "lodash"
function aiUnitSx(data, len) {
  if (data.length == 0) {
    for (let i = 0; i < len; i++) {
      let obj = _.cloneDeep({
        Sid: i,
        station: "",
        branch: "",
        housing: "",
        tower: "",
        unit: "",
        num: "",
        Signa: 0,
        versions: 0,
        Doorvalve: 0,
        jizhongqi: 0
      })

      data.push(obj)
    }
  }
}
export default {
  aiUnitSx
}
