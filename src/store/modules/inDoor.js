import Vue from "vue"
import isNumber from "assets/js/isNumber"

import inDoor from "assets/js/storeDataInit/inDoor" //
// import storeDataInitInDoor from "assets/js/wtMeter/storeDataInitInDoor.js"; //
export default {
  namespaced: true,
  state: {
    inDoor: [], //单元AI模块数据和信息
    inDoorInfosLenght: 3000, //长度42   sid0-sid41
    inDoorInfos: [], //单元信息数组
    inDoorDataQue: [], //室内温度的历史查询
    isshow: false
  },
  getters: {
    // isshow(state) {
    //   return state.isshow
    // },
    // inDoor(state) {
    //   return state.inDoor
    // },
    // inDoorDataQue(state) {
    //   return state.inDoorDataQue
    // }
  },

  mutations: {
    // 数据初始化main引用它  main 是入口函数在main.js引用的话就是首先执行
    INDOOR(state, data) {
      aiUnit.aiUnit(state.inDoor, state.inDoorInfosLenght)
    },

    //汉腾室内温度信息
    inDoortInfos(state, data) {
      state.inDoorInfos = data
      console.log("pppp")

      for (let i = 0; i < state.inDoor.length; i++) {
        for (let j = 0; j < state.inDoorInfos.length; j++) {
          if (state.inDoor[i].Sid === state.inDoorInfos[j].sid) {
            // //console.log("iiiiiiiiiiiiiii/////iiiiiiiiiiiii55i");
            state.inDoor[i].Sid = state.inDoorInfos[j].sid
            state.inDoor[i].station = state.inDoorInfos[j].station
            state.inDoor[i].housing = state.inDoorInfos[j].housing
            state.inDoor[i].tower = state.inDoorInfos[j].tower
            state.inDoor[i].unit = state.inDoorInfos[j].unit
            state.inDoor[i].num = state.inDoorInfos[j].num

            state.inDoor[i].community = state.inDoorInfos[j].community
            state.inDoor[i].sn = state.inDoorInfos[j].sn
            state.inDoor[i].phone = state.inDoorInfos[j].phone
            state.inDoor[i].householderName =
              state.inDoorInfos[j].householderName
            state.inDoor[i].wayHeating = state.inDoorInfos[j].wayHeating
          }
        }
      }
    },
    //汉腾室内温度数据
    inDoorData(state, data) {
      console.log("eee")
      let len = data.length
      let j = parseInt(data.Sid)
      if (j < state.inDoorInfosLenght) {
        let obj = isNumber.isNumberObj(data)

        for (let key in obj) {
          Vue.set(state.inDoor[j], key, obj[key])
        }
      }
    },

    inDoorDataNode(state, data) {
      //
      for (let i = 0; i < data.length; i++) {
        if (parseInt(data[i].sid) === parseInt(state.inDoor[i].Sid));
        {
          state.inDoor[i].SdateTE = data[i].event_time
          state.inDoor[i].TE = data[i].temp
        }
      }
      state.isshow = false
    },

    //室内温度历史查询
    inDoorDataQue(state, data) {
      state.inDoorDataQue = data
    }
  },
  actions: {}
}
