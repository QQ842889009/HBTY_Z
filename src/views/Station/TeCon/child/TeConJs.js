import that from "@/main.js"
import _ from "lodash"

function te0X() {
  let arr = []
  console.log("eee", that.$store.getters.stationTeConData[0])
  let obj = Object.values(that.$store.getters.stationTeConData[0])
  console.log("111--55", obj)
  let len = obj.length
  for (let i = 2; i < len; i++) {
    arr.push(obj[i])
  }

  return arr
}

function te1X() {
  let arr = []
  let key = Object.keys(that.$store.getters.stationTeConData[1])
  let value = Object.values(that.$store.getters.stationTeConData[1])
  let len = key.length
  let msg = {
    eventName: "/hbty/fySetTeConData", //发送事件的名称
    SidValue: that.$store.getters.stationTeConData[1].sid,
    setAttribute1: "",
    setAttribute2: "",
    getValue1: 23,
    getValue2: 32
  }
  for (let i = 2; i < len - 1; i++) {
    let msgX = _.cloneDeep(msg)
    msgX.setAttribute1 = key[i]
    msgX.setAttribute2 = key[i + 1]
    msgX.getValue1 = value[i]
    msgX.getValue2 = value[i + 1]
    arr.push(msgX)
  }
  return arr
}

function te2Y() {
  let arr = []
  let key = Object.keys(that.$store.getters.stationTeConData[2])
  let value = Object.values(that.$store.getters.stationTeConData[2])
  let len = key.length
  let msg = {
    SidValue: that.$store.getters.stationTeConData[2].sid,
    eventName: "/hbty/fySetTeConData",
    getValue: 23,
    sentName: true,
    setAttribute: ""
  }
  for (let i = 2; i < len; i++) {
    let msgX = _.cloneDeep(msg)
    msgX.setAttribute = key[i]

    msgX.getValue = value[i]

    arr.push(msgX)
  }
  return arr
}
// function h21Sta() {
//   let arr = []
//   let obj = that.$store.getters.wtS7Datas
//   let len = obj.length

//   for (let i = 0; i < len; i++) {
//     // 截取站点字符串，前面4个，不显示站点，只显示站号
//     let staX = obj[i].Station.slice(0, 4)
//     arr.push(staX)
//   }
//   return arr
// }
// function h22Sw() {
//   let arr = []
//   let obj = that.$store.getters.getLkInfoData
//   let len = obj.length

//   for (let i = 0; i < len; i++) {
//     arr.push(obj[i].TE00)
//   }
//   return arr
// }
// function h23Py() {
//   let arr = []
//   let obj = that.$store.getters.getLkInfoData

//   let len = obj.length
//   let msg = {
//     SidValue: 1000,
//     eventName: "/hbty/fySetInfoData",
//     getValue: 23,
//     sentName: true,
//     setAttribute: ""
//   }
//   for (let i = 0; i < len; i++) {
//     let msgX = _.cloneDeep(msg)
//     msgX.setAttribute = "TEX"
//     msgX.getValue = obj[i].TEX
//     msgX.SidValue = that.$store.getters.getLkInfoData[i].sid
//     arr.push(msgX)
//   }
//   return arr
// }

// function h24Qx() {
//   let arr = []
//   let obj = that.$store.getters.getLkInfoData
//   let len = obj.length

//   for (let i = 0; i < len; i++) {
//     arr.push(obj[i].TESP)
//   }
//   return arr
// }
// function h25Xf() {
//   let arr = []
//   let obj = that.$store.getters.getLkInfoData

//   let len = obj.length
//   let msg = {
//     onText: "控",
//     offText: "放",
//     setConAttribute: "maFvNode",
//     getConValue: 1,
//     eventName: "/hbty/fySetInfoData",
//     SidValue: "",
//     sentName: true
//   }
//   for (let i = 0; i < len; i++) {
//     let msgX = _.cloneDeep(msg)
//     msgX.SidValue = obj[i].sid
//     msgX.getConValue = obj[i].maFvNode

//     arr.push(msgX)
//   }
//   return arr
// }
// function h26Sd() {
//   let arr = []
//   let obj = that.$store.getters.wtS7Datas

//   let len = obj.length
//   let msg = {
//     SidValue: 1000,
//     eventName: "",
//     sentName: false,
//     setAttribute: "TE21SP",
//     getValue: 23
//   }
//   for (let i = 0; i < len; i++) {
//     let msgX = _.cloneDeep(msg)
//     msgX.SidValue = obj[i].Sid
//     if (obj[i].TE21SP) {
//       msgX.getValue = obj[i].TE21SP
//     } else {
//       msgX.getValue = 0
//     }

//     arr.push(msgX)
//   }
//   return arr
// }
// function h27Eg() {
//   let arr = []
//   let obj = that.$store.getters.wtS7Datas
//   let len = obj.length

//   for (let i = 0; i < len; i++) {
//     if (obj[i].TE21) {
//       arr.push(obj[i].TE21)
//     } else {
//       arr.push(0)
//     }
//   }
//   return arr
// }
// function h28Sx() {
//   let arr = []
//   let obj = that.$store.getters.wtS7Datas

//   let len = obj.length
//   let msg = {
//     SidValue: 1000,
//     eventName: "", //小组件中已经设置好了
//     sentName: false,
//     setAttribute: "FV1SP_H",
//     getValue: 23
//   }
//   for (let i = 0; i < len; i++) {
//     let msgX = _.cloneDeep(msg)
//     msgX.SidValue = obj[i].Sid

//     if (obj[i].FV1SP_H) {
//       msgX.getValue = obj[i].FV1SP_H
//     } else {
//       msgX.getValue = 0
//     }

//     arr.push(msgX)
//   }
//   return arr
// }
// function h29Xx() {
//   let arr = []
//   let obj = that.$store.getters.wtS7Datas

//   let len = obj.length
//   let msg = {
//     SidValue: 1000,
//     eventName: "", //小组件中已经设置好了
//     sentName: false,
//     setAttribute: "FV1SP_L",
//     getValue: 23
//   }
//   for (let i = 0; i < len; i++) {
//     let msgX = _.cloneDeep(msg)
//     msgX.SidValue = obj[i].Sid
//     if (obj[i].FV1SP_H) {
//       msgX.getValue = obj[i].FV1SP_L
//     } else {
//       msgX.getValue = 0
//     }

//     arr.push(msgX)
//   }
//   return arr
// }
// function h2aSz() {
//   let arr = []
//   let obj = that.$store.getters.wtS7Datas

//   let len = obj.length
//   let msg = {
//     onText: "自",
//     offText: "手",
//     setConAttribute: "MA_FV1_TE21",
//     getConValue: 1,
//     eventName: "/hbty/fySetupPLCB",
//     SidValue: "",
//     sentName: false
//   }
//   for (let i = 0; i < len; i++) {
//     let msgX = _.cloneDeep(msg)
//     msgX.SidValue = obj[i].Sid

//     msgX.onText = "自"
//     msgX.offText = "手"
//     if (obj[i].MA_FV1_TE21 == !undefined) {
//       msgX.getConValue = obj[i].MA_FV1_TE21
//     } else {
//       msgX.getConValue = 0
//     }

//     arr.push(msgX)
//   }
//   return arr
// }

// function h2bgd() {
//   let arr = []
//   let obj = that.$store.getters.wtS7Datas

//   let len = obj.length
//   let msg = {
//     SidValue: 1000,
//     eventName: "", //小组件中已经设置好了
//     sentName: false,
//     setAttribute: "FV1SP",
//     getValue: 23
//   }
//   for (let i = 0; i < len; i++) {
//     let msgX = _.cloneDeep(msg)
//     msgX.SidValue = obj[i].Sid
//     if (obj[i].FV1SP) {
//       msgX.getValue = obj[i].FV1SP
//     } else {
//       msgX.getValue = 0
//     }

//     arr.push(msgX)
//   }
//   return arr
// }
// function h2cFk() {
//   let arr = []
//   let obj = that.$store.getters.wtS7Datas
//   let len = obj.length

//   for (let i = 0; i < len; i++) {
//     if (obj[i].FV1FB) {
//       arr.push(obj[i].FV1FB)
//     } else {
//       arr.push(0)
//     }
//   }
//   return arr
// }
// function h2dFk() {
//   let arr = []
//   let obj = that.$store.getters.wtS7Datas
//   let len = obj.length

//   for (let i = 0; i < len; i++) {
//     if (obj[i].FV1FB) {
//       arr.push(obj[i].FV1FB + "%")
//     } else {
//       arr.push(0 + "%")
//     }
//   }
//   return arr
// }

// //此函数被引用在了接受node信息的位置，每次接收到信息就会触发一次下发给java
// function teControl(allInfoData) {
//   let len = allInfoData.length
//   let obj = that.$store.getters.wtS7Datas
//   for (let i = 0; i < len; i++) {
//     if (parseInt(allInfoData[i].maFvNode)) {
//       if (obj[i].TE21SP != parseFloat(allInfoData[i].TESP)) {
//         let msg = {
//           userName: "main2",
//           sid: allInfoData[i].sid,
//           plcTag: "TE21SP",
//           tagValue: parseFloat(allInfoData[i].TESP),
//           sdate: that.$moment().format("YYYY-MM-DD"),
//           stime: that.$moment().format("hh-mm-ss")
//         }
//         if (that.$stompClient.connected === true) {
//           that.$stompClient.send(
//             that.$store.getters.wtS7EventA,
//             {},
//             JSON.stringify(msg)
//           )
//           //console.log(JSON.stringify(msg));
//           //console.log(that.$store.getters.wtS7EventA);
//         } else {
//           //console.log("温控函数失败");
//         }
//       }
//     }
//   }
// }

export default {
  te0X,
  te1X,
  te2Y
  // h21Sta,
  // h22Sw,
  // h23Py,
  // h24Qx,
  // h25Xf,
  // h26Sd,
  // h27Eg,
  // h28Sx,
  // h29Xx,
  // h2bgd,
  // h2cFk,
  // h2dFk,
  // h2aSz,
  // teControl
}
