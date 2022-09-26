import that from "@/main.js"
import moment from "moment"
////////////////////////////////////////////////////
//引入that是因为，js文件不认识总系统的Vue也就是那个this

//Ai单元信息**
let doorInfos = (msg) => {
  // that.$store.commit("DOORINFO", msg)
}

//Ai单元数据的处理

let doorData = (msg) => {
  new Promise((resolve, reject) => {
    let datasLen = that.$store.getters.wtMeterDatasLen

    let msgJsObj = msg
    let msgJsObjFormat = {
      Sid: 0,
      FVSP: 0,
      FVFB: 0,
      TE: 0
    }

    msgJsObjFormat.Sid = msgJsObj.sid

    msgJsObjFormat.SdateTE = msgJsObj.map.valveData.sdate
    msgJsObjFormat.StimeTE = msgJsObj.map.valveData.stime

    msgJsObjFormat.TE = msgJsObj.map.valveData.returnWaterTe //温度
    msgJsObjFormat.FVFB = msgJsObj.map.valveData.valveOpening //反馈
    msgJsObjFormat.FVSP = msgJsObj.map.valveData.valveSetOpening //反馈
    //信息

    resolve(msgJsObjFormat)
  }).then((msg) => {
    // that.$store.commit("DOORDATA", msg) //把msg放入仓库
  })
}

export default {
  ///
  doorInfos,
  doorData
}
