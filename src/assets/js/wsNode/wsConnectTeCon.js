import Vue from "vue"
import that from "@/main.js"
import manageDataStationTeCon from "assets/js/manageData/manageDataStationTeCon"
import manageDataStation from "assets/js/manageData/manageDataStation.js"
// import manageDataZhan from "assets/js/manageDataZhan"
// import manageData from "assets/js/manageData"
// import manageDataMeter from "assets/js/manageDataMeter"
// import manageDataStation from "assets/js/manageData/manageDataStation.js"
// //温控函数导入
// import teConJs from "views/home/mainGYKZ/TeCon/child/TeConJs"

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
  Vue.prototype.$WS = ws
  Vue.prototype.$URL = PATH
  //将原websocket的发送函数，包装成带发送事件和数据参数的发送函数，挂载到vue上面
  //应用：this.$wsSend("sj1", { te11: 32.3, te22: 45.6 });
  Vue.prototype.$wsSend = wsSend
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
    case "sj1":
      // //console.log("触发了事件1", msg.data);
      break
    case "connection":
      // //console.log("触发了连接事件", msg.data);
      break
    case "login":
      console.log("触发了登录事件", msg.data.name)
      heartCheck(msg.data)
      // 将名字绑定到vue上将来全局应用，客户端发送的时候可以携带这个名字
      //服务器就能分辨出那个客户机。
      Vue.prototype.$WSName = msg.data.name
      break
    ////监听树形菜单的事件
    case "treeMenu":
      // //console.log("触发了树形事件", msg.data);
      break

    case "/hbty/wtSetData":
      // //console.log("触发了给定事件", msg.data);
      break
    case "stationInfo":
      ////console.log("触发了站内信息事件", JSON.parse(msg.data).data);
      // //console.log("触发了站内信息事件.TE11", msg.data[0]);
      //  that.$store.commit("wtZhanxinxiM", JSON.parse(msg.data).data) //把msg放入仓库整点
      break
    case "/hbty/room/teLast":
      // console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzz")
      // console.log("---------ZZZZZZZ", msg.data) //****************************
      //  manageData.manageDataAlarmSplice(msg.data);
      //manageData.manageDataAlarmshow(msg.data);

      break
    case "/hbty/alarm/all":
      //console.log("所有报警的数组", msg.data); //****************************

      // manageData.manageDataAlarmAll(msg.data)
      //manageData.manageDataAlarmshow(msg.data);

      break
    case "/hbty/alarm/add":
      //console.log("新来的报警", msg.data); //****************************
      // manageData.manageDataAlarmAdd(msg.data)
      //manageData.manageDataAlarmshow(msg.data);

      break
    case "/hbty/alarm/splice":
      //console.log("消除的的报警", msg.data); //****************************
      // manageData.manageDataAlarmSplice(msg.data)
      //manageData.manageDataAlarmshow(msg.data);

      break
    case "/hbty/alarm/confirm":
      //console.log("确认的的报警", msg.data); //****************************
      //  manageDataZhan.manageData24h(msg.data);
      //manageData.manageDataAlarmshow(msg.data);

      break
    case "/hbty/alarm/select":
      //console.log("查询报警", msg.data); //******************************
      //  manageDataZhan.manageData24h(msg.data);
      //  manageData.manageDataAlarmSelect(msg.data)
      //console.log("******************++++++++++++++++++");
      //console.log(msg.data.length);
      // that.$store.commit("wtS7alarmselectLength", msg.data.length) //

      break
    case "/hbty/wtHeatStationDayData":
      ////console.log("触发24h事件", msg.data);

      //that.$store.commit("wtZhanSetInquireTe", msg.data); //把msg放入仓库
      // manageDataZhan.manageData24h(msg.data)

      break

    case "/hbty/sx/dataQue":
      // console.log("触发四信数据间隔查询的数组", msg.data)

      //that.$store.commit("wtZhanSetInquireTe", msg.data); //把msg放入仓库
      // manageDataZhan.manageData24h(msg.data);

      break

    case "/hbty/wtHeatStation/intervalData":
      //  //console.log("触发了区间查询事件", msg.data); //****************************
      // manageDataZhan.manageData24h(msg.data)
      //manageData.manageDataTeCon(msg.data);

      break
    // case "/hbty/wtHeatStationTimeData":
    //   //console.log("触发整点事件", msg.data);
    //   // //console.log(msg.data);
    //   manageDataZhan.manageDataZD(msg.data);
    //   // that.$store.commit("wtZhanSetInquireallZD", msg.data); //把msg放入仓库整点
    //   break;

    case "/hbty/wtHeatStationTimeData":
      // console.log("触发整点事件", msg.data)
      // console.log(msg.data)
      // manageDataZhan.manageDataZD(msg.data)
      // that.$store.commit("wtZhanSetInquireallZD", msg.data); //把msg放入仓库整点**
      break
    //更新的曲线
    case "/hbty/fyData/nowLineData":
      // //console.log("更新的曲线", msg.data);
      // //console.log(msg.data);//
      // manageData.managecurveupdate(msg.data)
      //  that.$store.commit("wtZhanSetInquireallZD", msg.data); //把msg放入仓库整点//
      break
    case "/hbty/simulatePlcData":
      // //console.log("触发了模拟PLC数据事件", msg.data); //****************************

      // manageData.manageDataAABB(msg.data) //站内
      // manageDataMeter.manageDataLinKouMeter(msg.data)
      // manageDataMeter.manageDataLinKouHuFa(msg.data)

      break
    // 高限低限每次来都是数组，只要建立初始值  每次后端来会自动更新
    case "/hbty/fyAllLimitData":
      // console.log("触发了plc报警数据事件看报警值高限低限", msg.data) //**************************
      // that.$store.commit("stationAlarmSet", msg.data)
      //  manageData.manageDataAlarmLimit(msg.data);

      break
    // 报警值  建立一个数组并给初始值  后端每次发来一个对象 去更新数组中的对象
    case "/hbty/fyAlarmData":
      // //console.log("触发了PLC来报警了", msg.data); //****************************

      // manageData.manageDataAlarm(msg.data)

      break
    case "/hbty/fyAlarmComerr":
      console.log("触发了PLC通讯报警事件区分灰色的---", msg.data) //****************************

      //manageData.manageDataComerr(msg.data)
      manageDataStation.Comerr(msg.data)

      break
    case "/hbty/fyAllInfoData":
      // //console.log("触发了温度曲线事件", msg.data); //****************************

      // manageData.manageDataInfo(msg.data)
      // teConJs.teControl(msg.data)
      break
    case "/hbty/fyAllTeConData":
      //console.log("触发了温度控制的---111", msg.data)

      manageDataStationTeCon.manageDataTeCon(msg.data)

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
    if (Vue.prototype.$WS.readyState === 1) {
      // 连接状态下，持续发送心跳包
      // e.target.send(JSON.stringify(obj));
      Vue.prototype.$WS.send(JSON.stringify(obj))
      if (heartDog) {
        Vue.prototype.$wsSend("login", {
          name: user.name,
          password: user.password
        })
        heartDog = false
      }
    } else {
      connectCount += 1

      if (connectCount <= 5) {
        wsInit(Vue.prototype.$URL) // 断点重连5次
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
