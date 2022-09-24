// import * as io from "socket.io-client"
import Vue from "vue"
import manageDataSx from "assets/js/manageData/manageDataSx"
// import manageDataMeterMore from "assets/js/manageDataMeterMore" ////*/
// import manageDataMeter from "assets/js/manageDataMeter"
// import manageDataMeterFa from "assets/js/manageDataMeterFa"
// import manageDataMeterinquire from "assets/js/manageDataMeterinquire"
// import manageAlarm from "assets/js/manageAlarm"
import that from "@/main.js"

// import manageMeterData from "assets/js/wtMeter/manageMeterData";
import SockJS from "sockjs-client"
import Stomp from "stompjs"
let stompClient = ""
let stompSxDog = 0

//连接函数---下面会监听所有来自服务器的消息
let connectJs = (stompClient) => {
  stompClient.connect({}, () => {
    // socketOnInfoData(stompClient);
    // //console.log("socketJs连接成功");
    stompSxDog = 1
    Vue.prototype.$stompClientSx = stompClient
    // stompClient.send("/hbty/valveInfos", {}, JSON.stringify({}));
    // stompClient.send("/hbty/valveInfos", {}, JSON.stringify({}));

    //调用的是下面的函数，开始监听仪表数据
    // socketOnData(stompClient);
    //**************************************************//****周11月1日创建三网表的数据
    socketOnDataSx(stompClient)
    // socketOnInfoDataMerer(stompClient);
    // socketOnDataMeterFa(stompClient);
    // socketOnDataMeter02(stompClient);
    //******************************************************周11月1日创建三网表的信息数据
    // socketOnInfoDataMeter(stompClient);
    // //console.log("2020年11月1日新建socketJs连接成功");
  }),
    (err) => {
      // 连接发生错误时的处理函数
      //console.log("socketJs连接发生错误");
      //console.log(err);
    }
}
//核实是否连接成功
let connected = function (url) {
  //自带心跳功能，每隔5秒自己连接一次，用socket.close();可以关闭这个连接
  let timer = setInterval(() => {
    // //console.log(stompSxDog);
    if (stompSxDog === 1) {
      stompSxDog = 0
      if (stompClient) {
        stompClient.send("/hbty/heartbeatSxEvent", {}, JSON.stringify())
      }
    } else {
      let socket = new SockJS(url) //创建SockJS连接。
      stompClient = Stomp.over(socket) //创建STOMP客户端实例。实际上封装了SockJS,这样就能在WebSocket连接上发送STOMP消息。
      stompClient.debug = null //去除调试过程中，出现再弹出框内的一大堆信息。
      stompClient.heartbeat.outgoing = 20000 //若使用STOMP 1.1 版本，默认开启了心跳检测机制（默认值都是10000ms）
      stompClient.heartbeat.incoming = 0 //客户端不从服务端接收心跳包
      // //console.log("当前Fa处于断开状态,尝试连接");
      connectJs(stompClient) ///连接函数
    }
  }, 5000)
}

//************************************************************************************************************************* * **建立三网表数据的连接
let socketOnDataSx = (stompClient) => {
  ////热源四信的请求
  stompClient.send("/hbty/aiHotDataInfos", {}, JSON.stringify({})) //热源四信的请求
  //四新热源
  stompClient.subscribe("/data/wtOnAiHotData", (msg) => {
    // console.log("热源de********？四芯", msg)
    //console.log(msg);
    //console.log("热源de********？四芯-----");
    //console.log(msg.body);
    manageDataSx.aiHot(JSON.parse(msg.body))
    // manageDataAiUnitSx.aiHot(JSON.parse(msg.body));
  })
  stompClient.subscribe("/data/wtOnAiWeatherData", (msg) => {
    //四信气象
    // console.log("四信的气象")
    //  console.log("来的数据是什么？qqqqqqqqqqqqqqqqqqqqqqq");
    // console.log(msg);
    // console.log("四信的气象22");
    // console.log(msg.body);
    manageDataSx.weather(JSON.parse(msg.body))
  })
  if (stompClient) {
    stompClient.subscribe("/info/heartbeatSxEvent", (msg) => {
      stompSxDog = 1
    })
    stompClient.send("/hbty/aiHotDataInfos", {}, JSON.stringify({})) //热源四信的请求
    stompClient.subscribe("/data/wtOnAiHotData", (msg) => {
      // console.log("热源de********？四芯")
      //console.log(msg);
      //console.log("热源de********？四芯-----");
      // console.log(msg.body)
      //manageDataMeter.manageDataLinKouSxreyuan(JSON.parse(msg.body))
    })
  } else {
  }
}
//*****************************************************************************************************************三网表信息 */

export default { connected }
