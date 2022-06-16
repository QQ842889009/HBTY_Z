import _ from "lodash"
function aiUnit(data, len) {
  if (data.length == 0) {
    for (let i = 0; i < len; i++) {
      let obj = _.cloneDeep({
        Sid: i,
        station: "",
        branch: "",
        housing: "",
        tower: "",
        unit: "",
        Signa: "",
        num: "",
        versions: "",
        Doorvalve: "",
        jizhongqi: "",
        value: ""
      })

      data.push(obj)
    }
  }
}
export default {
  aiUnit
}
