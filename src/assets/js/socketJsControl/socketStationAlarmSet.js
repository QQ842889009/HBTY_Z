// import * as io from "socket.io-client"
import Vue from "vue"
// import that from '@/main.js'

//import manageDataStation from "assets/js/manageData/manageDataStation.js"
import that from "@/main.js"

// import manageMeterData from "assets/js/wtMeter/manageMeterData";//
import SockJS from "sockjs-client"
import Stomp from "stompjs"
//连接函数---下面会监听所有来自服务器的消息
// let aaa = 0;
// let timer01 = setInterval(() => {
//   aaa = !aaa;
// }, 90000);
let heartDog = 0
let stompClient = ""
let connectJs = (stompClient) => {
  stompClient.connect({}, () => {
    // socketOnInfoData(stompClient);
    // //console.log("socketJs连接成功");
    Vue.prototype.$stompClientStationAlarmSet = stompClient

    //调用的是下面的函数，开始监听仪表数据
    socketOnDataStationAlarmSet(stompClient)
  }),
    (err) => {
      // 连接发生错误时的处理函数
      console.log(
        "socketJs连接发生错误---换热站设置----------------///////////////"
      )

      heartDog = 0
    }
}
function connected(url) {
  console.log("aaa-----", url)
  let timer = setInterval(() => {
    if (heartDog === 1) {
      heartDog = 0
    } else {
      let socket = new SockJS(url) //创建SockJS连接。

      stompClient = Stomp.over(socket) //创建STOMP客户端实例。实际上封装了SockJS,这样就能在WebSocket连接上发送STOMP消息。
      stompClient.debug = null //去除调试过程中，出现再弹出框内的一大堆信息。
      stompClient.heartbeat.outgoing = 20000 //若使用STOMP 1.1 版本，默认开启了心跳检测机制（默认值都是10000ms）
      stompClient.heartbeat.incoming = 0 //客户端不从服务端接收心跳包
      // //console.log("当前处于断开状态,尝试连接");
      connectJs(stompClient)
    }
  }, 5000)
}

let socketOnDataStationAlarmSet = (stompClient) => {
  if (stompClient) {
    stompClient.subscribe("/topic/getResponse", (msg) => {
      // console.log("换热站的报警数据", JSON.parse(msg.body).warning.length)
      // console.log("换热站的报设置----AAA", msg)
      //  console.log("换热站的报设置----BBB", JSON.parse(msg.body).warningtag)
      // that.$store.commit("STATIONAlARMARRAY", JSON.parse(msg.body).warningtag) //////留着
      // console.log("换热站的报警数据", JSON.parse(msg.body).message)
      // console.log("java-----我是换热站的数据", msg)
      // console.log("1****msg");
      // console.log(msg);
      // console.log(msg.body);
      // //console.log(JSON.parse(msg.body).map);
      //  msg.body存放的是服务端发送json字符串的形式，需要转化为json对象的形式，然后拿到里面的map对象，直接点是不行的
      // //console.log(JSON.parse(msg.body).map); // msg.body存放的是服务端发送给我们的信息

      // manageDataStation.stationData(JSON.parse(msg.body).map) //数据的展示
      //manageDataStation.stationAlarmData(JSON.parse(msg.body).map) //需要给报警数组几个数据

      heartDog = 1
    })
  } else {
    console.log("没有监听上监听PLC数据")
  }
}

//监听PLC设备的信息数据，会把此函数用在连接完成的回调函数中
// let socketOnInfoData = (stompClient) => {
//   if (stompClient) {
//     // //console.log("我正在监听PLC模拟数据");
//     // //console.log("我正在监听PL读到的信息C模拟数据");
//     //***stompClient.send         是说，相当于向服务器发送
//     //***stompClient.subscribe    是听，相当于接受服务器的东西
//     //  stompClient.send("/hbty/stationInfo", {}, JSON.stringify({}));
//     // stompClient.subscribe("/info/wtOnStationInfo", (msg) => {
//     //   //  msg.body存放的是服务端发送json字符串的形式，需要转化为json对象的形式，然后拿到里面的map对象，直接点是不行的
//     //   // //console.log(JSON.parse(msg.body).map); // msg.body存放的是服务端发送给我们的信息
//     //   //console.log("我正在监听更改后的信息数据");
//     //   //console.log(JSON.parse(msg.body));
//     //   manageData.manageInfoData(JSON.parse(msg.body));
//     // });
//   } else {
//     //console.log("没有监听上监听信息数据");
//   }
// };

export default { connected }
