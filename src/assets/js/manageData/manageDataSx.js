import that from "@/main.js"
import moment from "moment"

//引入that是因为，js文件不认识总系统的Vue也就是那个this

//气象的
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
    that.$store.commit("WEATHER", msg) //把msg放入仓库
  })
}

export default {
  ///
  weather
}
