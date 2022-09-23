import Vue from "vue"
import Vuex from "vuex"

import station from "assets/js/storeDataInit/station" ////
import isNumber from "assets/js/isNumber"
Vue.use(Vuex)

const state = {
  stationDataAndInfo: [], //换热站数据和信息//
  stationLenght: 33, //换热站的个数
  stationInfos: [], //换热站的信息
  stationAlarmSet: [], //实时报警  莫
  stationAlarmSetC: [], //实时报警  莫
  stationTeConData: [], //装载node过来的温控数据
  alarmArr: [], //接收报警的数组可能是显示灰色的那个
  ck: 5,
  alarmsettings: [] //报警设置
}

const getters = {
  ck(state) {
    return state.ck
  },
  stationDataAndInfo(state) {
    return state.stationDataAndInfo
  },
  stationAlarmSet(state) {
    return state.stationAlarmSet
  },
  stationAlarmSetC(state) {
    return state.stationAlarmSetC
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
  },
  //报警设置
  alarmsettings(state) {
    return state.alarmsettings
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
    // station.alarmsettings(state.alarmsettings, state.stationLenght, data)
  },
  STATIONALARMSET(state, data) {
    console.log("9999", data)
    station.alarmsettings(state.alarmsettings, state.stationLenght, data)
  },

  STATIONAlARMARRAY(state, data) {
    // console.log("-------报警设置中仓库中的BBBBB", data)

    console.log(data)
    for (let i = 0; i < state.alarmsettings.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (state.alarmsettings[i].sid === parseInt(data[j].sid10)) {
          // console.log("IIIIIII", i)
          state.alarmsettings[i].sid = parseInt(data[j].sid10)

          state.alarmsettings[i].bp21a_lock = data[j].bp21a_lock
          state.alarmsettings[i].bp22a_lock = data[j].bp22a_lock
          state.alarmsettings[i].bp2_lock = data[j].bp2_lock
          state.alarmsettings[i].mp1a_lock = data[j].mp1a_lock
          state.alarmsettings[i].mp2a_lock = data[j].mp2a_lock
          state.alarmsettings[i].lt_lock = data[j].lt_lock
          state.alarmsettings[i].pt21_lock = data[j].pt21_lock
          state.alarmsettings[i].pt22_lock = data[j].pt22_lock

          state.alarmsettings[i].station = data[j].station
          // state.alarmsettings[i].BP21A = data[j].BP21A
          state.alarmsettings[i].BP21FB = data[j].bp21fb
          state.alarmsettings[i].BP22FB = data[j].bp22fb
          // // state.alarmsettings[i].BP22A = data[j].BP22A
          // state.alarmsettings[i].BP22FB = data[j].BP22FB
          state.alarmsettings[i].FV1FB = data[j].fv1fb
          state.alarmsettings[i].FV2FB = data[j].fv2fb
          // state.alarmsettings[i].XYV = data[j].XYV
          state.alarmsettings[i].sid16 = data[j].sid16
          state.alarmsettings[i].id = data[j].id
          state.alarmsettings[i].LT = data[j].lt
          state.alarmsettings[i].LTL = data[j].lt_l
          state.alarmsettings[i].LTLL = data[j].lt_ll
          state.alarmsettings[i].LTH = data[j].lt_h
          // state.alarmsettings[i].LTHH = data[j].LTHH
          state.alarmsettings[i].PT21 = data[j].pt21
          state.alarmsettings[i].PT21H = data[j].pt21_h
          state.alarmsettings[i].PT21HH = data[j].pt21_hh
          state.alarmsettings[i].PT22 = data[j].pt22
          state.alarmsettings[i].PT22L = data[j].pt22_l
          state.alarmsettings[i].PT22LL = data[j].pt22_ll
          state.alarmsettings[i].PT22SP_HH = data[j].pt22sp_hh
        }
      }
    }
  },
  STATIONALARM(state, data) {
    //  console.log("我是仓库中的报警", data)
    // for (let i = 0; i < data.length; i++) {
    //   state.stationAlarmSet[i] = data[i]
    // }
    state.stationAlarmSet = data
  },
  STATIONALARMC(state, data) {
    //  console.log("我是仓库中的报警", data)
    // for (let i = 0; i < data.length; i++) {
    //   state.stationAlarmSet[i] = data[i]
    // }
    state.stationAlarmSetC = data
  },
  CK(state, data) {
    state.ck = data
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
