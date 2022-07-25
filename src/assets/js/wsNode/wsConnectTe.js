import Vue from "vue"
import that from "@/main.js"

//温控函数导入
//import teConJs from "views/home/mainGYKZ/TeCon/child/TeConJs"
// import manageDataZhaninquire from "assets/js/manageDataZhaninquire";
// PATH = "ws://localhost:3000";
//PATH是需要连接的node的地址，当前测试vue和node在同一个电脑，采用上面的地址模式，
//这个函数一旦被引用，传入了上面的地址，本程序就会作为客户端连接服务器，
//
function wsInit(PATH) {
  if (typeof WebSocket === "undefined") {
    alert("你的浏览器不支持websocket")
    return
  }
  const ws = new WebSocket(PATH)
  ws.onopen = wsOpen
  ws.onerror = wsError
  ws.onclose = wsClose
  ws.onmessage = onMsg
  //将原send函数包装成，（事件，数据）格式的函数格式。
  let wsSend = (ev, data) => {
    //{ eventName: "sj1", data: { te11: 32.3, te22: 45.6 } };
    let obj = { eventName: ev, data: data }
    //发送之前都要将obj进行JSON.stringify格式化，对方拿到数据JSON.parse回来
    ws.send(JSON.stringify(obj))
  }
  // 将WS帮到vue的属性上
  Vue.prototype.$WSTE = ws
  Vue.prototype.$URLTE = PATH
  //将原websocket的发送函数，包装成带发送事件和数据参数的发送函数，挂载到vue上面
  //应用：this.$wsSend("sj1", { te11: 32.3, te22: 45.6 });
  Vue.prototype.$wsSendTe = wsSend
  return
}
function wsOpen(e) {
  //此处的e参数，e.target就是指的当前的ws连接，可以直接使用send方法发送事件，
  //可以打印一下e.target查看里面的事件属性，通过send方法在初始连接的时候和服务器做些交互
  // let obj = { eventName: "linkName", data: e.target.url };
  // e.target.send(JSON.stringify(obj));
  // //console.log("触犯了wsOpen", e.target);
}
function wsError(e) {
  // //console.log("触犯了wsError", e);
}
function wsClose(e) {
  // //console.log("触犯了wsClose", e);
}
//将此函数挂载到 ws.onmessage，从服务器坚挺到的数据格式如下
//let obj = { eventName: "sj1", data: { te11: 32.3, te22: 45.6 } };
//eventName代表了事件名称，利用case将不同的事件挂载到不同的js函数下，进行处理。//
function onMsg(e) {
  //服务器收到的是字符串，JSON化为基本的对象格式。
  let msg = JSON.parse(e.data)
  //{ eventName: "sj1", data: { te11: 32.3, te22: 45.6 } };
  switch (msg.eventName) {
    case "connection":
      // //console.log("触发了连接事件", msg.data);
      break
    case "login":
      console.log("触发了登录事件AAATE", msg.data.name)
      heartCheck(msg.data)
      // 将名字绑定到vue上将来全局应用，客户端发送的时候可以携带这个名字
      //服务器就能分辨出那个客户机。
      Vue.prototype.$WSNameTe = msg.data.name
      break

    case "/hbty/room/teLast":
      console.log("---------室内温度最后的上数据时间..", msg.data) //*******************************

      that.$store.commit("INDOORDATANODE", msg.data)
      break
    case "/hbty/sx/dataQue":
      console.log("触发四信数据间隔查询的数组AAA", msg.data)
      // that.$store.commit("sxDataQue", msg.data)
      // manageData.sxque(msg.data);

      break

    case "/hbty/te/dataQue":
      console.log("触发室内温度数据间隔查询的数组AAATE", msg.data)
      that.$store.commit("INDOORDATAQUE", msg.data)

      break

    case "/hbty/fa/dataQue":
      console.log("触发户阀数据间隔查询的数组AAA", msg.data)
      // that.$store.commit("doorDataQue", msg.data)
      that.$store.commit("DOORDATAQUE", msg.data)

      break
    case "/hbty/ai/dataQue":
      console.log("触发AI带户阀数据间隔查询的数组AAA", msg.data)
      //  that.$store.commit("aiDataQue", msg.data)

      break

    default:
    // //console.log("触犯了wsmessage", msg);
  }
}
//将定时器定义在外部，没有测试定义在内部的情况。
let heartInterval = ""
function heartCheck(user) {
  let heartDog = false
  let obj = {
    eventName: "connection",
    data: { sunccesful: user.name + "客户端ping过来的数据" }
  }
  let connectCount = 0
  // heartInterval && clearInterval(heartInterval);
  if (heartInterval) {
    // //console.log(heartInterval);
    clearInterval(heartInterval)
  }
  heartInterval = setInterval(() => {
    if (Vue.prototype.$WSTE.readyState === 1) {
      // 连接状态下，持续发送心跳包
      // e.target.send(JSON.stringify(obj));
      Vue.prototype.$WSTE.send(JSON.stringify(obj))
      if (heartDog) {
        Vue.prototype.$wsSendTe("login", {
          name: user.name,
          password: user.password
        })
        heartDog = false
      }
    } else {
      connectCount += 1

      if (connectCount <= 5) {
        wsInit(Vue.prototype.$URLTE) // 断点重连5次
        heartDog = true

        // //console.log(`正在重连第` + connectCount + "次");
      } else {
        // //console.log("请重新启动客户端，重新登录");
        clearInterval(heartInterval)
      }
    }
  }, 50 * 1000)
}
export default { wsInit }
