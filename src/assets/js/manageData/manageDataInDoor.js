import that from "@/main.js"
import moment from "moment"

//汉腾室内温度信息
let inDoorInfo = (msg) => {
  that.$store.commit("INDOORINFO", msg) //
}

//汉腾室内温度数据
let inDoorData = (msg) => {
  new Promise((resolve, reject) => {
    let msgJsObj = msg
    let msgJsObjFormat = {
      Sid: "000",
      TE: 0
    }
    msgJsObjFormat.Sid = msgJsObj.sid
    msgJsObjFormat.SdateTE = moment(msgJsObj.map.roomTeData.eventTime).format(
      "YYYY-MM-DD HH:mm:ss"
    )
    msgJsObjFormat.TE = msgJsObj.map.roomTeData.temp //温度
    resolve(msgJsObjFormat)
  }).then((msg) => {
    that.$store.commit("INDOORDATA", msg) //把msg放入仓库
  })
}

export default {
  ///
  inDoorInfo,
  inDoorData
}
