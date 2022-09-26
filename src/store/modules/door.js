import Vue from "vue"
import isNumber from "assets/js/isNumber"

import door from "assets/js/storeDataInit/door" //
// import storeDataInitInDoor from "assets/js/wtMeter/storeDataInitInDoor.js"; //** */
export default {
  // namespaced: true,
  state: {
    doorDataAndInfo: [], //单元AI模块数据和信息
    doorInfosLenght: 430, //长度42   sid0-sid41
    doorInfos: [], //单元信息数组
    doorDataQue: [
      {
        event_time: "2022-06-23",
        temp: "24"
      },
      {
        event_time: "2022-06-24",
        temp: "10"
      }
    ] //室内温度的历史查询
  },
  getters: {
    get_doorDataAndInfo(state) {
      return state.doorDataAndInfo
    },
    get_doorDataQue(state) {
      return state.doorDataQue
    }
  },

  mutations: {
    // 数据初始化main引用它  main 是入口函数在main.js引用的话就是首先执行
    // MUDOORDATAINIT(state, data) {
    //   door.door(state.doorDataAndInfo, state.doorInfosLenght, data)
    // },
    //信息
    // DOORINFO(state, data) {
    //   state.doorInfos = data
    //   for (let i = 0; i < state.doorDataAndInfo.length; i++) {
    //     for (let j = 0; j < state.doorInfos.length; j++) {
    //       if (
    //         state.doorDataAndInfo[i].Sid === parseInt(state.doorInfos[j].sid)
    //       ) {
    //         state.doorDataAndInfo[i].Sid = state.doorInfos[j].sid
    //         state.doorDataAndInfo[i].Station = state.doorInfos[j].station
    //         state.doorDataAndInfo[i].Housing = state.doorInfos[j].housing
    //         state.doorDataAndInfo[i].Tower = state.doorInfos[j].tower
    //         state.doorDataAndInfo[i].Unit = state.doorInfos[j].unit
    //         state.doorDataAndInfo[i].Num = state.doorInfos[j].num
    //         state.doorDataAndInfo[i].ValveCode = state.doorInfos[i].valveCode
    //         state.doorDataAndInfo[i].ConcentratorCode =
    //           state.doorInfos[i].concentratorCode
    //       }
    //     }
    //   }
    // },
    //户阀数据
    // DOORDATA(state, data) {
    //   let j = parseInt(data.Sid)
    //   if (j < state.doorInfosLenght) {
    //     let obj = isNumber.isNumberObj(data)
    //     for (let key in obj) {
    //       Vue.set(state.doorDataAndInfo[j], key, obj[key])
    //     }
    //   }
    // },
    //室内温度历史查询
    // DOORDATAQUE(state, data) {
    //   console.log("户阀历史查询进入仓库")
    //   state.doorDataQue = data
    // }
  },
  actions: {}
}
