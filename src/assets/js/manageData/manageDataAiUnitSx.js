import that from "@/main.js"
import moment from "moment"
////////////////////////////////////////////////////
//引入that是因为，js文件不认识总系统的Vue也就是那个this

//四新的气象数据管理**
let weather = (msg) => {
  new Promise((resolve, reject) => {
    let msgJsObj = msg
    let msgJsObjFormat = {
      Sid: "000",
      timestamp: 0,
      createdTime: 0,
      windSp: 0,
      windPo: 0,
      windDir: 0,
      te: 0,
      humidity: 0,
      beam: 0
    }
    msgJsObjFormat.Sid = msgJsObj.map.aiWeatherData.sid
    msgJsObjFormat.timestamp = msgJsObj.map.aiWeatherData.timestamp
    msgJsObjFormat.createdTime = msgJsObj.map.aiWeatherData.createdTime
    msgJsObjFormat.windSp = msgJsObj.map.aiWeatherData.windSp
    msgJsObjFormat.windPo = msgJsObj.map.aiWeatherData.windPo
    if (msgJsObj.map.aiWeatherData.windDir === 0) {
      msgJsObjFormat.windDir = "北风"
    }
    if (msgJsObj.map.aiWeatherData.windDir === 1) {
      msgJsObjFormat.windDir = "东北风"
    }
    if (msgJsObj.map.aiWeatherData.windDir === 2) {
      msgJsObjFormat.windDir = "东风"
    }
    if (msgJsObj.map.aiWeatherData.windDir === 3) {
      msgJsObjFormat.windDir = "东南风"
    }
    if (msgJsObj.map.aiWeatherData.windDir === 4) {
      msgJsObjFormat.windDir = "南风"
    }
    if (msgJsObj.map.aiWeatherData.windDir === 5) {
      msgJsObjFormat.windDir = "西南风"
    }
    if (msgJsObj.map.aiWeatherData.windDir === 6) {
      msgJsObjFormat.windDir = "西风"
    }
    if (msgJsObj.map.aiWeatherData.windDir === 7) {
      msgJsObjFormat.windDir = "西北风"
    }
    msgJsObjFormat.te = msgJsObj.map.aiWeatherData.te
    msgJsObjFormat.humidity = msgJsObj.map.aiWeatherData.humidity
    msgJsObjFormat.beam = msgJsObj.map.aiWeatherData.beam
    resolve(msgJsObjFormat)
  }).then((msg) => {
    that.$store.commit("weather", msg) //把msg放入仓库
  })
}
let aiUnitSxInfos = (msg) => {
  that.$store.commit("aiUnitSxInfos", msg) //
}
let aiUnitSxData = (msg) => {
  new Promise((resolve, reject) => {
    let msgJsObj = msg
    let msgJsObjFormat = {
      Sid: "000",
      TE1: 0,
      TE2: 0,
      TE3: 0,
      TE4: 0,
      PT1: 0,
      PT2: 0,
      PT3: 0,
      PT4: 0,
      FV1FB: 0,
      FV2FB: 0,
      FVSP: 0,
      FVFB: 0,
      TE: 0
    }

    msgJsObjFormat.Sid = msgJsObj.sid

    msgJsObjFormat.SdateTE = msgJsObj.map.aiData.sdate
    msgJsObjFormat.StimeTE = msgJsObj.map.aiData.stime

    // msgJsObjFormat.TE1 =
    //   msgJsObj.map.aiData.te1 > msgJsObj.map.aiData.te2
    //     ? msgJsObj.map.aiData.te1.toFixed(1)
    //     : msgJsObj.map.aiData.te2.toFixed(1);
    // msgJsObjFormat.TE2 =
    //   msgJsObj.map.aiData.te1 > msgJsObj.map.aiData.te2
    //     ? msgJsObj.map.aiData.te2.toFixed(1)
    //     : msgJsObj.map.aiData.te1.toFixed(1);

    // msgJsObjFormat.TE3 =
    //   msgJsObj.map.aiData.te3 > msgJsObj.map.aiData.te4
    //     ? msgJsObj.map.aiData.te3.toFixed(1)
    //     : msgJsObj.map.aiData.te4.toFixed(1);

    // msgJsObjFormat.TE4 =
    //   msgJsObj.map.aiData.te3 > msgJsObj.map.aiData.te4
    //     ? msgJsObj.map.aiData.te4.toFixed(1)
    //     : msgJsObj.map.aiData.te3.toFixed(1);
    // msgJsObjFormat.PT1 =
    //   msgJsObj.map.aiData.pt1 > msgJsObj.map.aiData.pt2
    //     ? msgJsObj.map.aiData.pt1.toFixed(2)
    //     : msgJsObj.map.aiData.pt2.toFixed(2);
    // msgJsObjFormat.PT2 =
    //   msgJsObj.map.aiData.pt1 > msgJsObj.map.aiData.pt2
    //     ? msgJsObj.map.aiData.pt2.toFixed(2)
    //     : msgJsObj.map.aiData.pt1.toFixed(2);

    // msgJsObjFormat.PT3 =
    //   msgJsObj.map.aiData.pt3 > msgJsObj.map.aiData.pt4
    //     ? msgJsObj.map.aiData.pt3.toFixed(2)
    //     : msgJsObj.map.aiData.pt4.toFixed(2);

    // msgJsObjFormat.PT4 =
    //   msgJsObj.map.aiData.pt3 > msgJsObj.map.aiData.pt4
    //     ? msgJsObj.map.aiData.pt4.toFixed(2)
    //     : msgJsObj.map.aiData.pt3.toFixed(2);
    msgJsObjFormat.PT1 = msgJsObj.map.aiData.pt1.toFixed(2)
    msgJsObjFormat.PT2 = msgJsObj.map.aiData.pt2.toFixed(2)
    msgJsObjFormat.PT3 = msgJsObj.map.aiData.pt3.toFixed(2)
    msgJsObjFormat.PT4 = msgJsObj.map.aiData.pt4.toFixed(2)

    msgJsObjFormat.TE1 = msgJsObj.map.aiData.te1.toFixed(1)
    msgJsObjFormat.TE2 = msgJsObj.map.aiData.te2.toFixed(1)
    msgJsObjFormat.TE3 = msgJsObj.map.aiData.te3.toFixed(1)
    msgJsObjFormat.TE4 = msgJsObj.map.aiData.te4.toFixed(1)
    msgJsObjFormat.FV1FB = msgJsObj.map.aiData.fv1fb
    msgJsObjFormat.FV2FB = msgJsObj.map.aiData.fv2fb

    resolve(msgJsObjFormat)
  }).then((msg) => {
    that.$store.commit("aiUnitSxData", msg) //把msg放入仓库
  })
}
let aiHoty = (msg) => {
  //
  console.log("aaaaaaa999999", msg)
  new Promise((resolve, reject) => {
    // let msgJsObj = msg
    // let msgJsObjFormat = {
    //   Sid: "000",
    //   TE1: 0,
    //   TE2: 0,
    //   TE3: 0,
    //   TE4: 0,
    //   PT1: 0,
    //   PT2: 0,
    //   PT3: 0,
    //   PT4: 0,
    //   FT1: 0,
    //   FT2: 0,
    //   Sdate: "2001-2-3",
    //   Stime: "12:50:43"
    // }
    // msgJsObjFormat.Sid = msgJsObj.map.aiHotData.sid
    // /////************************************************************************
    // msgJsObjFormat.Sdate = msgJsObj.map.aiHotData.sdate
    // msgJsObjFormat.Stime = msgJsObj.map.aiHotData.stime
    // msgJsObjFormat.TE1 = msgJsObj.map.aiHotData.te1.toFixed(1)
    // msgJsObjFormat.TE2 = msgJsObj.map.aiHotData.te2.toFixed(1)
    // msgJsObjFormat.TE3 = msgJsObj.map.aiHotData.te3.toFixed(1)
    // msgJsObjFormat.TE4 = msgJsObj.map.aiHotData.te4.toFixed(1)
    // msgJsObjFormat.PT1 = msgJsObj.map.aiHotData.pt1.toFixed(2)
    // msgJsObjFormat.PT2 = msgJsObj.map.aiHotData.pt2.toFixed(2)
    // msgJsObjFormat.PT3 = msgJsObj.map.aiHotData.pt3.toFixed(2)
    // msgJsObjFormat.PT4 = msgJsObj.map.aiHotData.pt4.toFixed(2)
    // msgJsObjFormat.FT1 = msgJsObj.map.aiHotData.ft1
    // msgJsObjFormat.FT2 = msgJsObj.map.aiHotData.ft2
    // resolve(msgJsObjFormat)
  }).then((msg) => {
    // that.$store.commit("HOT", msg) //把msg放入仓库
  })
}
//Ai单元数据的处理

export default {
  ///
  weather,
  aiUnitSxInfos,
  aiUnitSxData,
  aiHoty
}
