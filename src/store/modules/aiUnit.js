import Vue from "vue"
import isNumber from "assets/js/isNumber"

import aiUnit from "assets/js/storeDataInit/aiUnit" //
// import storeDataInitInDoor from "assets/js/wtMeter/storeDataInitInDoor.js"; //
export default {
  // namespaced: true,
  state: {
    aiUnit: [], //单元AI模块数据
    aiUnitInfosLenght: 42, //长度42   sid0-sid41
    aiUnitInfos: [], //单元信息数组
    aiDataQue: [] //ai单元历史查询
  },
  getters: {
    aiUnit(state) {
      return state.aiUnitData
    },
    aiDataQue(state) {
      return state.aiDataQue
    }
  },

  mutations: {
    // 数据初始化main引用它  main 是入口函数在main.js引用的话就是首先执行
    AIUNIT(state) {
      aiUnit.aiUnit(state.aiUnit, state.aiUnitInfosLenght)
    }
    //Ai单元的信息//先接收AI的信息数组   把接受到的AI信息数组  先把他们的值  放在信息加数据的总数组中***把初始信息替换
    // aiUnitInfos(state, data) {
    //   console.log("eeeee", data)
    //   state.aiUnitInfos = data
    //   for (let i = 0; i < state.aiUnitInfos.length; i++) {
    //     if (state.aiUnit[i].Sid === parseInt(state.aiUnitInfos[i].sid)) {
    //       state.aiUnit[i].Sid = state.aiUnitInfos[i].sid
    //       state.aiUnit[i].station = state.aiUnitInfos[i].station
    //       state.aiUnit[i].value = state.aiUnitInfos[i].station
    //       state.aiUnit[i].housing = state.aiUnitInfos[i].housing
    //       state.aiUnit[i].tower = state.aiUnitInfos[i].tower
    //       state.aiUnit[i].unit = state.aiUnitInfos[i].unit
    //     }
    //   }
    // },
    //Ai单元的数据
    // aiUnitData(state, data) {
    //   let len = data.length
    //   let j = parseInt(data.Sid)
    //   if (j < state.aiUnitInfosLenght) {
    //     let obj = isNumber.isNumberObj(data)

    //     for (let key in obj) {
    //       Vue.set(state.aiUnit[j], key, obj[key])
    //     }
    //   }
    // },

    //Ai单元的信号强度 和 版本号

    // SignalInfo(state, data) {
    //   let len = data.length
    //   let j = parseInt(data.Sid)

    //   if (j < state.aiUnitInfosLenght) {
    //     let obj = isNumber.isNumberObj(data)

    //     for (let i = 0; i < state.aiUnit.length; i++) {
    //       if (state.aiUnit[i].Sid === data.Sid.toString()) {
    //         state.aiUnit[i].Signa = data.tag
    //         state.aiUnit[i].versions = data.versions
    //       }
    //     }
    //   }
    // },
    //历史
    // aiDataQue(state, data) {
    //   state.aiDataQue = data
    // }
  },
  actions: {}
}
