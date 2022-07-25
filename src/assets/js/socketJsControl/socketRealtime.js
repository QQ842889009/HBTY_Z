import Vue from "vue"
// import manageDataInDoor from "assets/js/manageData/manageDataInDoor"
import that from "@/main.js"


import SockJS from "sockjs-client"
import Stomp from "stompjs"
let stompClient = ""
let stompTeDog = 0
//连接函数---下面会监听所有来自服务器的消息
let connectJs = (stompClient) => {
  stompClient.connect({}, () => {
    stompTeDog = 1
    Vue.prototype.$stompClientRealtime = stompClient

    socketOnDataRealtime(stompClient)
  }),
    (err) => {}
}
//核实是否连接成功
let connected = function (url) {
  let timer = setInterval(() => {
    if (stompTeDog === 1) {
      stompTeDog = 0
      if (stompClient) {
        stompClient.send("/hbty/heartbeatTeEvent", {}, JSON.stringify())
      }
    } else {
      let socket = new SockJS(url) //创建SockJS连接。
      stompClient = Stomp.over(socket) //创建STOMP客户端实例。实际上封装了SockJS,这样就能在WebSocket连接上发送STOMP消息。
      stompClient.debug = null //去除调试过程中，出现再弹出框内的一大堆信息。
      stompClient.heartbeat.outgoing = 20000 //若使用STOMP 1.1 版本，默认开启了心跳检测机制（默认值都是10000ms）
      stompClient.heartbeat.incoming = 0 //客户端不从服务端接收心跳包
      // //console.log("当前Fa处于断开状态,尝试连接");
      connectJs(stompClient) //连接函数
    }
  }, 5000)
}

let socketOnDataRealtime = (stompClient) => {
  if (stompClient) {
    // stompClient.send("/hbty/fyGetHouseholderInfos", {}, JSON.stringify({})) //室内温度信息
    
    //接受一小时选定站的信息
    stompClient.subscribe("/data/hoursStationData", (msg) => {
      let msgObj=JSON.parse(msg.body)
      that.$store.commit("REALTIMEINFO",msgObj)
    })
   
    stompClient.subscribe("/info/heartbeatTeEvent", (msg) => {
      stompTeDog = 1
    })
  } else {
  }
}

export default { connected }
