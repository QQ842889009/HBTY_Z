import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import ElementUI from "element-ui"
import isAuth from "assets/js/isAuth/isAuth.js"
import dayjs from "dayjs"
import "element-ui/lib/theme-chalk/index.css"
import "@/styles/index.scss"
import "./assets/fonts/iconfont.css" //引入阿里图标
import "./assets/fonts/iconfont.js" //要使用svg图标时要引入这个
//新通讯加的开始
import wsConnect from "./assets/js/wsNode/wsConnect.js"
import wsConnectTe from "./assets/js/wsNode/wsConnectTe.js"
//测试温度控制的开始
import wsConnectTeCon from "./assets/js/wsNode/wsConnectTeCon.js"
wsConnectTeCon.wsInit("ws://221.206.242.116:6501") //生产环境2022
//测试温度控制的结束
wsConnect.wsInit("ws://182.61.54.22:6510") //模拟数据

wsConnectTe.wsInit("ws://221.206.242.116:6500") //室内温度最后一次上数据  生产环境
// 引入全局自定义组件
import "./components/global"
// 引入全局自定义filters
import "./filters/index"

import "./permission" //路由拦截
import animated from "animate.css" //引入移动动画库
import "assets/font/font.css"
Vue.use(animated) //注册移动动画库

Vue.prototype.$dayjs = dayjs //引入时间处理

Vue.prototype.ISAUTH = isAuth
import { plcdataType, echartdataType } from "assets/js/storeBox/dataType.js"
import {
  inDoorDataInitTemplate,
  stationDataInitTemplate,
  stationDataInitTemplateReal,
  doorDataInitTemplate,
  alarmsettings,
  alaH
} from "assets/js/storeDataInitTemplate" //初始化模板
// console.log("alarmsettings", alarmsettings)
import socketAiUnit from "assets/js/socketJsControl/socketAiUnit" //改版后的楼宇单元和户阀的连接
import socketAiInDoor from "assets/js/socketJsControl/socketAiInDoor" //改版后的楼宇单元和户阀的连接
import socketStation from "assets/js/socketJsControl/socketStation" //改版后的楼宇单元和户阀的连接
import socketStationAlarm from "assets/js/socketJsControl/socketStationAlarm" //换热站的报警
import socketStationAlarmSet from "assets/js/socketJsControl/socketStationAlarmSet" //换热站的报警
import socketJsControlSx from "assets/js/socketJsControl/socketJsControlSx" //改版后的楼宇单元和户阀的连接
new Promise((resolve, reject) => {
  store.commit("plcS7/mutaPlcDataInit", plcdataType)
  store.commit("plcS7/mutaEchartDataInit", echartdataType)

  // store.commit("AIUNIT", "单元AI的初始化") //*****改造新加

  //store.commit("MUINDOORDATAINIT", inDoorDataInitTemplate) //
  //store.commit("MUDOORDATAINIT", doorDataInitTemplate) //
  store.commit("STATION", stationDataInitTemplate)
  store.commit("STATIONREAL", stationDataInitTemplateReal)
  store.commit("ALAH", alaH)
  store.commit("STATIONALARMSET", alarmsettings)

  resolve()
}).then(() => {
  ////生产环境的连接开始
  socketAiUnit.connected(
    "http://221.206.242.116:1668/endpoint-websocket-tlgw" //生产环境户阀//
  )
  //换热站的报警
  socketStationAlarm.connected(
    "http://221.206.242.116:9001/endpointOyzc" //换热站报警
  )
  //换热站的报警设置
  // socketStationAlarmSet.connected(
  //   "http://221.206.242.116:9000/tems/publicTagServer" //换热站报警设置
  // )
  // socketStationAlarmSet.connected(
  //   "http://10.168.1.176:9000/tems/publicTagServer" //换热站报警设置
  // )
  // socketAiInDoor.connected(
  //   "http://221.206.242.116:2060/hbty/endpoint-websocket-te" //室内温度的2022生产//生产环境室内温度
  // )

  socketJsControlSx.connected(
    "http://221.206.242.116:1868/endpoint-websocket-sixin-ml" //四新的气象和热源
  )

  socketStation.connected("http://221.206.242.116:1666/endpoint-websocket") //生产和开发环境的PLC换热站连接不包括热源
})

import moment from "moment" //导入时间插件npm install moment –save
Vue.prototype.$moment = moment //全局注册时间插件
import "./utils/axios"

Vue.prototype.$http
  .get("plcdata/tems/plc/stationInfoForBraName")
  .then((res) => {
    // console.log('stationBranch---------',res);
    store.commit("stationBranch/BRANCHINFOS", res)
  })
Vue.use(ElementUI)

Vue.config.productionTip = false

let vue = new Vue({
  router,
  store,

  render: (h) => h(App)
}).$mount("#app")

export default vue
