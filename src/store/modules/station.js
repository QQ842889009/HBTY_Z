import Vue from "vue"
import Vuex from "vuex"

import station from "assets/js/storeDataInit/station" ////
import isNumber from "assets/js/isNumber"
Vue.use(Vuex)

const state = {
  stationDataAndInfo: [], //换热站数据和信息//
  stationLenght: 33, //换热站的个数
  stationInfos: [], //换热站的信息
  stationAlarmSet: []
}

const getters = {
  stationDataAndInfo(state) {
    return state.stationDataAndInfo
  },
  stationAlarmSet(state) {
    return state.stationAlarmSet
  }
}

const actions = {}

const mutations = {
  STATION(state) {
    station.station(state.stationDataAndInfo, state.stationLenght)
    //console.log("换热站的初始化占位", state.station)
  },
  STATIONALARM(state, data) {
    console.log("我是仓库中的报警来了吗", data)
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
    console.log("换热站信息来了吗")
    let len = data.length
    for (let i = 0; i < len; i++) {
      state.stationDataAndInfo[i].Space = data[i].Space
      state.stationDataAndInfo[i].Station = data[i].Station
    }
  },

  SETROLES: (state, d) => {
    console.log("mmmmm", d)
    state.roles = d
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
