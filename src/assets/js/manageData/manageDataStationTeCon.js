import that from "@/main.js"
// import alarmShow from "./alarm/index.js";
////////////////////////////////////////////////////
//引入that是因为，js文件不认识总系统的Vue也就是那个this
//主要思想是：见说明
//////////////////////////////////////////////////////////////////////////////
//import data from "assets/js/stationCommon/data.js"; //公共的换热站所有数据
//import station from "assets/js/storeDataInit/station" //

let manageDataTeCon = (msg) => {
  console.log("温度控制从这里放进仓库")
  // that.$store.commit("SetTeConData", msg) //
  that.$store.commit("SETTECONDATA", msg) //
}
export default {
  manageDataTeCon
}
