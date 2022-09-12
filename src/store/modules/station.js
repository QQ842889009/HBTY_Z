import Vue from "vue"
import Vuex from "vuex"

import station from "assets/js/storeDataInit/station" ////
import isNumber from "assets/js/isNumber"
Vue.use(Vuex)

const state = {
  stationDataAndInfo: [], //换热站数据和信息//
  stationLenght: 33, //换热站的个数
  stationInfos: [], //换热站的信息
  stationAlarmSet: [],
  stationTeConData: [], //装载node过来的温控数据
  alarmArr: [] //接收报警的数组可能是显示灰色的那个
}

const getters = {
  stationDataAndInfo(state) {
    return state.stationDataAndInfo
  },
  stationAlarmSet(state) {
    return state.stationAlarmSet
  },
  stationInfos(state) {
    return state.stationInfos
  },
  //温度数据从这里拿
  stationTeConData(state) {
    return state.stationTeConData
  },
  //报警的数组可能是显示灰色的那个
  alarmArr(state) {
    return state.alarmArr
  }
}

const actions = {}

const mutations = {
  STATION(state, data) {
    // console.log("qqqqq", data)
    station.station(state.stationDataAndInfo, state.stationLenght, data) //
    station.stations(state.stationInfos, state.stationLenght)
    //换热站报警显示灰色的那个
    station.alarm(state.alarmArr, state.stationLenght)
  },
  STATIONALARM(state, data) {
    //  console.log("我是仓库中的报警", data)
    // for (let i = 0; i < data.length; i++) {
    //   state.stationAlarmSet[i] = data[i]
    // }
    state.stationAlarmSet = data
  },

  STATIONDATA(state, data) {
    // console.log("-----", data)
    let j = parseInt(data.Sid)
    if (j < state.stationLenght) {
      let obj = isNumber.isNumberObj(data)

      for (let key in obj) {
        if (key != "Space") {
          Vue.set(state.stationDataAndInfo[j], key, obj[key])
        }
      }
      //  console.log("换热站数据", state.station)
    }
  },
  STATIONINFOUPDATA(state, data) {
    // console.log("换热站信息来了吗")
    // let len = data.length
    // for (let i = 0; i < len; i++) {
    //   state.stationDataAndInfo[i].Space = data[i].Space
    //   state.stationDataAndInfo[i].Station = data[i].Station
    //   state.stationInfos[i].Station = data[i].Station
    // }
  },

  SETROLES: (state, d) => {
    //console.log("mmmmm", d)
    state.roles = d
  },
  //温度控制
  SETTECONDATA(state, data) {
    state.stationTeConData = data
  },
  //换热站信息
  CC(state, data) {
    // console.log("换热站信息", data)
    let len = data.length
    // console.log("5566", len)
    for (let i = 0; i < len; i++) {
      // console.log("iiiii--------------", i)
      state.stationDataAndInfo[i].Space = data[i].space
      state.stationDataAndInfo[i].Station = data[i].station
      state.stationInfos[i].Station = data[i].station
    }
  },
  //去判断显示灰色的数组
  COMERR(state, data) {
    state.alarmArr = data
    // for (let i = 0; i < state.datasLen; i++) {
    //   state.datas[i].comErr = data[i]
    // }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
