//此处接收AI单元的数据 和信息  也接收户阀的数据和信息
//因为户阀是靠集中器（Ai）传递数据了

//理解

import Vue from "vue"
import that from "@/main.js"

// import manageDataAiUnit from 'assets/js/manageData/manageDataAiUnit'
import manageDataDoor from "assets/js/manageData/manageDataDoor"
//$z安装
//npm install sockjs-client
//npm install stompjs
//$z安装完后引入
import SockJS from "sockjs-client" //npm install sockjs-client --save

import Stomp from "stompjs" //npm install stompjs --save
//$z建立一个变量接收
let stompClient = ""
//$z建立一个狗的变量
let stompFaDog = 0

//核实是否连接成功
//$z第一步main中用了这个函数并且给了地址
let connected = function (url) {
  console.log("url", url)
  let timer = setInterval(() => {
    if (stompFaDog === 1) {
      stompFaDog = 0

      if (stompClient) {
        stompClient.send("/hbty/heartbeatFaEvent", {}, JSON.stringify())
      }
    } else {
      let socket = new SockJS(url) //创建SockJS连接。$z连接服务端提供的通信接口，连接以后才可以订阅广播消息和个人消息*****第一步

      stompClient = Stomp.over(socket) //创建STOMP客户端实例。实际上封装了SockJS,这样就能在WebSocket连接上发送STOMP消息。$z获取STOMP子协议的客户端对象*****第二步
      stompClient.debug = null //去除调试过程中，出现再弹出框内的一大堆信息。
      stompClient.heartbeat.outgoing = 20000 //若使用STOMP 1.1 版本，默认开启了心跳检测机制（默认值都是10000ms）
      stompClient.heartbeat.incoming = 0 //客户端不从服务端接收心跳包
      //$z这是第三步向服务器发起websocket连接
      connectJs(stompClient) //连接函数
    }
  }, 5000)
}
//$z 这是来在第三步的连接函数
//连接函数---下面会监听所有来自服务器的消息
let connectJs = (stompClient) => {
  stompClient.connect({}, () => {
    stompFaDog = 1
    Vue.prototype.$stompClientAiUnit = stompClient

    socketOnDataAiUnit(stompClient)
  }),
    (err) => {}
}
//************************************************************************************************************************* * **建立三网表数据的连接
let socketOnDataAiUnit = (stompClient) => {
  //
  if (stompClient) {
    stompClient.send("/hbty/aiUnitInfos", {}, JSON.stringify({})) //AI模块信息的发送事件
    stompClient.send("/hbty/householdValveInfos", {}, JSON.stringify({})) //户阀信息的发送事件
    stompClient.send("/hbty/signalInfos", {}, JSON.stringify({})) //连接时获得最后一次信号强度
    //狗的回复
    stompClient.subscribe("/info/heartbeatFaEvent", (msg) => {
      // 收到数据后进行处理
      stompFaDog = 1
    })

    //AI模块信息的接收事件**
    stompClient.subscribe("/data/wtOnAiUnitInfos", (msg) => {
      // console.log("fff", msg.body)
      //  manageDataAiUnit.aiUnitInfos(JSON.parse(msg.body))
    })

    //AI单元的数据事件接收
    stompClient.subscribe("/data/wtOnAiData", (msg) => {
      // manageDataAiUnit.aiUnitData(JSON.parse(msg.body))
    })

    //Ai单元  集中器信号强度的事件接收
    stompClient.subscribe("/data/wtOnSignalInfo", (msg) => {
      //  manageDataAiUnit.SignalInfo(JSON.parse(msg.body))
    })

    //户阀的数据事件接收和户阀的信息接收
    // 户阀的数据  事件接收
    stompClient.subscribe("/data/wtOnValveData", (msg) => {
      // console.log("户阀的数据", msg)
      manageDataDoor.doorData(JSON.parse(msg.body))
    })
    //接收所有户阀所有信息;
    stompClient.subscribe("/data/wtOnHouseholdValveInfos", (msg) => {
      manageDataDoor.doorInfos(JSON.parse(msg.body))
    })
  } else {
    console.log("AI模块和户阀的stompClient没有连接上!")
  }
}

export default { connected }
