//根据数值显示颜色
import that from "@/main.js"
export function styltColor(value) {
  if (value > 18 && value <= 22) {
    return { color: "#14e90d", fontWeight: "900" }
  } else if (value > 23 && value < 30) {
    return { color: "red", fontWeight: "900" }
  } else if (value < 18) {
    return { color: "#8d8787" }
  }
}
//单个户阀的给定 5秒后再请求此户阀的数据
// export function inDoorFvsp(v1, v2, v3) {
//   console.log("v1是sid", v1)
//   console.log("v2是给定值", v2)
//   console.log("v3是隐藏的值", v3)

//   if (1 === 1) {
//     let msgSend = {
//       sid: String(v1),
//       openValue: parseFloat(v2)
//     }
//     let msgRequest = {
//       sid: String(v1)
//     }
//     if (that.$stompClientAiUnit.connected === true) {
//       that.$stompClientAiUnit.send(
//         "/hbty/fySetValveOpenValue",
//         {},
//         JSON.stringify(msgSend)
//       )

//       //发送给定事件后我要从新读取这个表的数据定义一个计时器再在里面销毁这个定时器
//       let timerRequest = setTimeout(() => {
//         that.$stompClientAiUnit.send(
//           "/hbty/fyGetValveData",
//           {},
//           JSON.stringify(msgRequest)
//         )

//         clearTimeout(timerRequest)
//         v3.is = "tt"

//         //console.log("请求户阀"+msgQu.sid);
//       }, 5000)
//       console.log("户阀给定", msgSend)
//     } else {
//       console.log("户阀给定失败")
//     }
//   }
// }

export function inDoorFvsp(v1, v2) {
  console.log("v1是sid", v1)
  console.log("v2是给定值", v2)

  if (1 === 1) {
    let msgSend = {
      sid: String(v1),
      openValue: parseFloat(v2)
    }
    let msgRequest = {
      sid: String(v1)
    }
    if (that.$stompClientAiUnit.connected === true) {
      console.log("tttt")
      that.$stompClientAiUnit.send(
        "/hbty/fySetValveOpenValue",
        {},
        JSON.stringify(msgSend)
      )

      //发送给定事件后我要从新读取这个表的数据定义一个计时器再在里面销毁这个定时器
      let timerRequest = setTimeout(() => {
        that.$stompClientAiUnit.send(
          "/hbty/fyGetValveData",
          {},
          JSON.stringify(msgRequest)
        )

        clearTimeout(timerRequest)
        // v3.is = "tt"

        //console.log("请求户阀"+msgQu.sid);
      }, 5000)
      // console.log("户阀给定", msgSend)
    } else {
      console.log("户阀给定失败")
    }
  }
}
//单个黑蚂蚁单元阀
export function AiUnitFv1sp(v) {
  console.log("请求单个Ai数据发送来的数据", v)
  if (1 === 1) {
    let msgRequest = {
      sid: String(v)
    }
    if (that.$stompClientAiUnit.connected === true) {
      that.$stompClientAiUnit.send(
        "/hbty/fyGetAIData",
        {},
        JSON.stringify(msgRequest)
      )
      console.log("单个Ai请求sid-----" + msgRequest.sid)
    } else {
      console.log("单个Ai数据请求失败")
    }
  }
}
//确认报警
export function acknowledgeAlarm(v) {
  console.log("确认报警传递来的值", v)
  if (1 === 1) {
    if (that.$stompClientStationAlarm.connected === true) {
      that.$stompClientAiUnit.send(
        "/hbty/fyGetValveData",
        {},
        JSON.stringify(v)
      )
      console.log("确认报警已发送", v)
    } else {
      console.log("确认报警发送失败")
    }
  }
}
//户阀单个的请求
export function DoorRequestSingle(v) {
  console.log("请求户阀传递过来的数据", v)
  if (1 === 1) {
    let msgRequest = {
      sid: String(v)
    }
    if (that.$stompClientAiUnit.connected === true) {
      that.$stompClientAiUnit.send(
        "/hbty/fyGetValveData",
        {},
        JSON.stringify(msgRequest)
      )
      console.log("单个户阀请求sid" + msgRequest.sid)
    } else {
      console.log("户阀请求失败")
    }
  }
}

//室内温度请求所有数据来自java--
export function inDoorRequestAll_java() {
  //本体
  that.$stompClientInDoor.send("/hbty/roomTemps", {}, JSON.stringify({}))
  console.log("所有室内温度请求node.js数据")
}
//室内温度请求所有数据来自node.js--
export function inDoorRequestAll_node() {
  //本体
  that.$wsSendTe("/hbty/room/teLast", {})
  console.log("所有室内温度请求node.js数据")
}
//单个室内温度的数据请求历史数据--
export function teHistory(v1, v2, v3) {
  let msg = {
    sn: v1,
    startTime: v2,
    endTime: v3
  }
  that.$wsSendTe("/hbty/te/dataQue", msg)
  console.log(msg)
}

//**************************************************************Ai单元的开始
//Ai单个数据的请求
export function AiUnitRequestSingle(v) {
  console.log("请求单个Ai数据发送来的数据", v)
  if (1 === 1) {
    let msgRequest = {
      sid: String(v)
    }
    if (that.$stompClientAiUnit.connected === true) {
      that.$stompClientAiUnit.send(
        "/hbty/fyGetAIData",
        {},
        JSON.stringify(msgRequest)
      )
      console.log("单个Ai请求sid-----" + msgRequest.sid)
    } else {
      console.log("单个Ai数据请求失败")
    }
  }
}
//**************************************************************Ai单元的结束
//户阀请求所有JAVA
export function doorRequestAll_java() {
  that.$stompClientAiUnit.send("/hbty/valveInfos", {}, JSON.stringify({}))
  console.log("查询户阀所有的数据--java")
}
//计算一下平均值
/* getAvg.js */
/**
 * 求平均值，可计算一维数组，一维数组对象.
 * @param {array} arr 「必需」需求平均的数组.
 * @param {string} attr 「一维数组对象时必需」当数组为对象型数组时,需要指定具体属性名.
 * @param {number} deg 「存在小数时必需」十的倍数。当数组存在小数时，为避免 js 自身存在的精度问题，
 *                      可先乘于倍数消去小数，之后再除回来。（默认值1，[1,10,100,1000, …]）.
 * @returns {number} 返回平均值,如果数据本身死循环,会根据传入的精度对数据进行四舍五入.
 */
export function getAvg(arr, attr = "", deg = 1) {
  let len, total, avg, dot
  len = arr.length

  // 数组无数据时:
  if (len === 0) return 0
  // 数据有仅只有一个数据时:
  if (len === 1) return arr[len - 1][attr] || arr[len - 1]

  // 数组存在多个数据时:
  const IsObj = arr[0].constructor === Object
  dot = `${deg}`.split("").length - `${deg}`.split("").indexOf("0") // 根据传入的精度,判断需要保留小数点后几位.
  if (!IsObj) {
    // 基本数组
    total = arr.reduce((total, item) => total + item * deg, 0)
  } else {
    // 数组对象
    total = arr.reduce((total, item) => total + item[attr] * deg, 0)
  }

  avg = total / len / deg

  return avg.toFixed(dot) * 1
}
//户阀的历史数据请求开始
export function doorHistory(v1, v2, v3) {
  let msg = {
    valve_code: v1,
    startTime: v2,
    endTime: v3
  }

  that.$wsSendTe("/hbty/fa/dataQue", msg)
  console.log("户阀的历史查询", msg)
}
//户阀的历史数据请求结束
