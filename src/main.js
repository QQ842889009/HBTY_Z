import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import "@/styles/index.scss"
import "./assets/fonts/iconfont.css" //引入阿里图标
import "./assets/fonts/iconfont.js" //要使用svg图标时要引入这个
//新通讯加的开始
import wsConnect from "./assets/js/wsConnect.js"
wsConnect.wsInit("ws://182.61.54.22:6510") //模拟数据
// 引入全局自定义组件
import "./components/global"
// 引入全局自定义filters
import "./filters/index"

import "./permission" //路由拦截
import animated from "animate.css" //引入移动动画库
Vue.use(animated) //注册移动动画库
import { plcdataType, echartdataType } from "assets/js/storeBox/dataType.js";
import socketAiUnit from "assets/js/socketJsControl/socketAiUnit" //改版后的楼宇单元和户阀的连接
import socketAiInDoor from "assets/js/socketJsControl/socketAiInDoor" //改版后的楼宇单元和户阀的连接
import socketStation from "assets/js/socketJsControl/socketStation" //改版后的楼宇单元和户阀的连接
new Promise((resolve, reject) => {
  store.commit("plcS7/mutaPlcDataInit", plcdataType);
  store.commit("plcS7/mutaEchartDataInit", echartdataType);
  // //10.30穆棱福通热力***这是初始化数据，去仓库执行wtS7InitDatas，干啥的？装每一个站的数据，不能往空数组中装，先把设定的值假（初始值）值装进去
  // store.commit("wtS7InitDatas", "数据和信息数据的初始化");

  // store.commit("wtMeterInitDatasHuFa", "数据和信息数据的初始化");

  // //装载挂载数据********************三网表的数据挂载
  // store.commit("wtMeterInitDatas", "数据和信息数据的初始化");
  // store.commit("aiUnit", "单元AI的初始化") //*****改造新加
  // store.commit("aiUnitSx", "单元AI的初始化"); //*****改造新加四新Ai的初始化
  // store.commit("door", "户阀的初始化"); //*****改造新加
  // store.commit("inDoor", "室内温度的初始化"); //*****改造新加
  // store.commit("STATION", "换热站的初始化") //*****改造新加
  store.commit("AIUNIT", "单元AI的初始化") //*****改造新加
  // store.commit("wtMeterInitDatassp", "数据和信息数据的初始化");

  // store.commit("wtMeterInitDatasspsave", "数据和信息数据的初始化");

  // store.commit(" wtsnwdchushi", "数据和信息数据的初始化");
  // //先对所要装载数据的数组store.state.wtS7.datas进行初始化

  // store.commit("wtS7InitAlarmDatas", "报警数据的初始化");

  resolve()
}).then(() => {
  ////生产环境的连接开始
  socketAiUnit.connected(
    "http://221.206.242.116:1668/endpoint-websocket-tlgw" //生产环境户阀//
  )
  socketAiInDoor.connected(
    "http://221.206.242.116:2060/hbty/endpoint-websocket-te" //室内温度的2022生产//生产环境室内温度
  )
  // socketAiUnitSx.connected(
  //   "http://221.206.242.116:1868/endpoint-websocket-sixin-ml" //生产环境四信单元阀门
  // );
  // socketJsControlInDoor.connected(
  //   "http://221.206.242.116:2060/hbty/endpoint-websocket-te" //室内温度的2022生产//生产环境室内温度
  // );
  socketStation.connected("http://221.206.242.116:1666/endpoint-websocket") //生产和开发环境的PLC换热站连接不包括热源
  ///生产环境的连接结束
  //开发环境开始
  // socketAiUnit.connected(
  //   'http://192.168.100.201:1668/endpoint-websocket-tlgw' //生产环境户阀
  // )
  //开发环境结束
})

import moment from "moment" //导入时间插件npm install moment –save
Vue.prototype.$moment = moment //全局注册时间插件

Vue.use(ElementUI)

Vue.config.productionTip = false

let vue = new Vue({
  router,
  store,

  render: (h) => h(App)
}).$mount("#app")

export default vue
