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
export function inDoorFvsp(v1, v2, v3) {
  console.log("v1是sid", v1)
  console.log("v2是给定值", v2)
  console.log("v3是隐藏的值", v3)

  if (1 === 1) {
    let msgSend = {
      sid: String(v1),
      openValue: parseFloat(v2)
    }
    let msgRequest = {
      sid: String(v1)
    }
    if (that.$stompClientAiUnit.connected === true) {
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
        v3.is = "tt"

        //console.log("请求户阀"+msgQu.sid);
      }, 5000)
      console.log("户阀给定", msgSend)
    } else {
      console.log("户阀给定失败")
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
