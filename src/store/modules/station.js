import Vue from "vue"
import Vuex from "vuex"

import station from "assets/js/storeDataInit/station" ////
import isNumber from "assets/js/isNumber"
Vue.use(Vuex)

const state = {
  station: [], //换热站数据//
  stationLenght: 33, //换热站的个数
  stationInfos: [], //换热站的信息
  stationAlarmSet: []
}

const getters = {
  station(state) {
    return state.station
  },
  stationAlarmSet(state) {
    return state.stationAlarmSet
  }
}

const actions = {}

const mutations = {
  STATION(state) {
    station.station(state.station, state.stationLenght)
    //console.log("换热站的初始化占位", state.station)
  },

  STATIONDATA(state, data) {
    let j = parseInt(data.Sid)
    if (j < state.stationLenght) {
      let obj = isNumber.isNumberObj(data)

      for (let key in obj) {
        if (key != "Space") {
          // Vue.set(state.station[j], key, obj[key])
        }
      }
      //  console.log("换热站数据", state.station)
    }
  },

  stationData(state, data) {
    // console.log('-----------data',data);
    let j = parseInt(data.Sid)
    if (j < state.stationLenght) {
      let obj = isNumber.isNumberObj(data)

      for (let key in obj) {
        if (key != "Space") {
          Vue.set(state.station[j], key, obj[key])
        }
      }
      console.log("换热站数据----------", state.station)
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
