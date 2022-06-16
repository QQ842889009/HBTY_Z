import _ from "lodash"
function inDoor(data, len) {
  if (data.length == 0) {
    for (let i = 0; i < len; i++) {
      let obj = _.cloneDeep({
        Sid: i,
        station: "还未定义",
        branch: "还未定义",
        housing: "还未定义",
        tower: "还未定义",
        unit: "还未定义",
        num: "还未定义",

        community: "还未定义",
        sn: "还未定义", //用户编号
        phone: "还未定义", //电话
        householderName: "还未定义", //用户姓名
        wayHeating: "还未定义", //方式  地暖还是片暖
        sort: 0,
        TE: "",
        SdateTE: "还未上传"
      })

      data.push(obj)
    }
  }
}
export default {
  inDoor
}
