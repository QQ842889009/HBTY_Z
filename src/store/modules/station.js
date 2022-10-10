import Vue from "vue"
import Vuex from "vuex"

import station from "assets/js/storeDataInit/station" ////
import isNumber from "assets/js/isNumber" //
Vue.use(Vuex)

const state = {
  stationDataAndInfo: [], //换热站数据和信息//
  stationDataAndInfoReal: [], //换热站分析的数组
  stationLenght: 33, //换热站的个数
  stationInfos: [], //换热站的信息
  stationAlarmSet: [], //实时报警  莫
  stationAlarmSetC: [], //实时报警  莫
  stationTeConData: [], //装载node过来的温控数据
  alarmArr: [], //接收报警的数组可能是显示灰色的那个
  ck: 5,
  alarmsettings: [], //报警设置
  alarmArrJava: [],
  alarmArrJavaShow: [],
  ////气象开始
  weather: [
    {
      sid: "02"
    }
  ]
  ////气象结束
}

const getters = {
  ck(state) {
    return state.ck
  },
  weather(state) {
    //气象
    return state.weather
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
  },
  //运行分析的那个
  stationDataAndInfoReal(state) {
    return state.stationDataAndInfoReal
  },
  //报警变灰的
  alarmArrJava(state) {
    return state.alarmArrJava
  },
  alarmArrJavaShow(state) {
    return state.alarmArrJavaShow
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
  //分析的那个  王老师来数据前端处理
  STATIONREAL(state, data) {
    station.stationreal(state.stationDataAndInfoReal, state.stationLenght, data) //
  },
  ALAH(state, data) {
    station.stationalah(state.alarmArrJava, state.stationLenght, data) //
  },
  STATIONALARMSET(state, data) {
    // console.log("9999", data)
    station.alarmsettings(state.alarmsettings, state.stationLenght, data)
  },
  //

  STATIONAlARMARRAY(state, data) {
    console.log("-------报警设置中仓库中的BBBBB", data)

    // console.log(data)
    for (let i = 0; i < state.alarmsettings.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (state.alarmsettings[i].sid === parseInt(data[j].sid10)) {
          // console.log("IIIIIII", i)
          state.alarmsettings[i].sid = parseInt(data[j].sid10)

          state.alarmsettings[i].bp21a_lock = data[j].bp21a_lock //
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
  STATIONDATAREAL(state, data) {
    // console.log("-----WWWWW", data)
    let j = parseInt(data.sid)
    if (j < state.stationLenght) {
      let obj = isNumber.isNumberObj(data)

      // for (let key in obj) {
      //   if (key != "Space") {
      //     Vue.set(state.stationDataAndInfoReal[j], key, obj[key])
      //   }
      // }

      //测试开始
      new Promise((resolve, reject) => {
        for (let key in obj) {
          if (key != "Space") {
            Vue.set(state.stationDataAndInfoReal[j], key, obj[key])
          }
        }

        resolve(state.stationDataAndInfoReal)
      }).then((msg) => {
        // console.log("打印分析的数组", msg)
        for (let i = 0; i < msg.length; i++) {
          // console.log("打印分析的数组iiiii-----vvv", i, msg[i])

          msg[i].ft11_s = (
            parseInt(msg[i].ft11_u * 1000) /
            parseFloat(msg[i].space) /
            10000
          ).toFixed(2)
          msg[i].ft21_s = (
            parseInt(msg[i].ft21_u * 1000) /
            parseFloat(msg[i].space) /
            10000
          ).toFixed(2)

          msg[i].q1_s = (
            ((msg[i].q1_u / 3.6) * 1000000) /
            parseFloat(msg[i].space) /
            10000
          ).toFixed(2)
        }
        // that.$store.commit("STATIONDATAALAH", msg)
      })
      //测试结束
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
  AAA(state) {
    // for (let i = 0; i < state.stationDataAndInfoReal.length; i++) {
    //   console.log("AAAIII", i)
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
      state.stationDataAndInfoReal[i].heating_method = data[i].heating_method
      state.stationDataAndInfoReal[i].space = data[i].space
      state.stationDataAndInfoReal[i].station = data[i].station
    }
  },
  //去判断显示灰色的数组
  COMERR(state, data) {
    state.alarmArr = data
    // for (let i = 0; i < state.datasLen; i++) {
    //   state.datas[i].comErr = data[i]
    // }
  },
  //变灰的JAVA王
  STATIONDATAALAH(state, data) {
    // console.log("-----", data)
    let j = parseInt(data.sid)
    if (j < state.stationLenght) {
      let obj = isNumber.isNumberObj(data)

      // for (let key in obj) {
      //   if (key != "Space") {
      //     Vue.set(state.alarmArrJava[j], key, obj[key])
      //   }
      // }
      //测试开始
      new Promise((resolve, reject) => {
        for (let key in obj) {
          if (key != "Space") {
            Vue.set(state.alarmArrJava[j], key, obj[key])
          }
        }

        resolve(state.alarmArrJava)
      }).then((msg) => {
        for (let i = 0; i < msg.length; i++) {
          state.alarmArrJavaShow[i] = msg[i].status
        }
        // that.$store.commit("STATIONDATAALAH", msg)
      })
      //测试结束

      //  console.log("换热站数据", state.station)
    }
  },
  WEATHER88(state, data) {
    let len = data.length
    let j = parseInt(data.Sid)
    if (j < 3) {
      //因为气象的sid是2
      let obj = isNumber.isNumberObj(data)

      for (let key in obj) {
        Vue.set(state.weather[0], key, obj[key])
      }
    }
  },
  WEATHER(state, data) {
    let len = data.length
    let j = parseInt(data.Sid)
    if (j < 3) {
      //因为气象的sid是2
      let obj = isNumber.isNumberObj(data)

      new Promise((resolve, reject) => {
        for (let key in obj) {
          Vue.set(state.weather[0], key, obj[key])
        }

        resolve(state.weather[0])
      }).then((msg) => {
        console.log("来的室外温度值是多少------------------", msg)
        console.log("rrrr------------------", state.stationDataAndInfoReal)
        for (let i = 0; i < state.stationDataAndInfoReal.length; i++) {
          state.stationDataAndInfoReal[i].te00 = msg.te
        }
      })
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
