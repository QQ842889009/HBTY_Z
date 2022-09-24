import Vue from "vue"
import isNumber from "assets/js/isNumber"

import inDoor from "assets/js/storeDataInit/inDoor" //
// import storeDataInitInDoor from "assets/js/wtMeter/storeDataInitInDoor.js"; //** */
export default {
  // namespaced: true,
  state: {
    inDoorDataAndInfo: [], //单元AI模块数据和信息
    inDoorInfosLenght: 3430, //长度42   sid0-sid41
    inDoorInfos: [], //单元信息数组
    inDoorDataQue: [], //室内温度的历史查询
    isshow: false
  },
  getters: {
    get_inDoorDataAndInfo(state) {
      return state.inDoorDataAndInfo
    },
    get_inDoorDataQue(state) {
      return state.inDoorDataQue
    }
  },

  mutations: {
    // 数据初始化main引用它  main 是入口函数在main.js引用的话就是首先执行
    MUINDOORDATAINIT(state, data) {
      // console.log("ttt")
      inDoor.inDoor(state.inDoorDataAndInfo, state.inDoorInfosLenght, data)
    },

    //汉腾室内温度信息INDOORINFOS
    INDOORINFO(state, data) {
      state.inDoorInfos = data
      // console.log("仓库中来的信息是什么？", data)
      for (let i = 0; i < state.inDoorDataAndInfo.length; i++) {
        for (let j = 0; j < state.inDoorInfos.length; j++) {
          if (
            state.inDoorDataAndInfo[i].Sid ===
            parseInt(state.inDoorInfos[j].sid)
          ) {
            state.inDoorDataAndInfo[i].Sid = state.inDoorInfos[j].sid
            state.inDoorDataAndInfo[i].Station = state.inDoorInfos[j].station
            state.inDoorDataAndInfo[i].Housing = state.inDoorInfos[j].housing
            state.inDoorDataAndInfo[i].Tower = state.inDoorInfos[j].tower
            state.inDoorDataAndInfo[i].Unit = state.inDoorInfos[j].unit
            state.inDoorDataAndInfo[i].Num = state.inDoorInfos[j].num

            state.inDoorDataAndInfo[i].Community =
              state.inDoorInfos[j].community
            state.inDoorDataAndInfo[i].Sn = state.inDoorInfos[j].sn
            state.inDoorDataAndInfo[i].Phone = state.inDoorInfos[j].phone
            state.inDoorDataAndInfo[i].HouseholderName =
              state.inDoorInfos[j].householderName
            state.inDoorDataAndInfo[i].WayHeating =
              state.inDoorInfos[j].wayHeating
          }
        }
      }
      console.log(
        "在仓库中进行替换后的inDoorDataAndInfo",
        state.inDoorDataAndInfo
      )
    },
    //室内温度读取node.js最后一次上数据时间
    INDOORDATANODE(state, data) {
      //INDOORDATANODE
      console.log("node最后一次上数据时间", data)
      for (let i = 0; i < data.length; i++) {
        if (parseInt(data[i].sid) === parseInt(state.inDoorDataAndInfo[i].Sid));
        {
          state.inDoorDataAndInfo[i].SdateTE = data[i].event_time
          state.inDoorDataAndInfo[i].TE = data[i].temp
        }
      }
    },
    //汉腾室内温度数据
    INDOORDATA(state, data) {
      // console.log("eee")
      let len = data.length
      let j = parseInt(data.Sid)
      if (j < state.inDoorInfosLenght) {
        let obj = isNumber.isNumberObj(data)

        // for (let key in obj) {
        //   Vue.set(state.inDoorDataAndInfo[j], key, obj[key])
        // }
      }
    },

    // inDoorDataNode(state, data) {
    //   //
    //   for (let i = 0; i < data.length; i++) {
    //     if (parseInt(data[i].sid) === parseInt(state.inDoor[i].Sid));
    //     {
    //       state.inDoor[i].SdateTE = data[i].event_time
    //       state.inDoor[i].TE = data[i].temp
    //     }
    //   }
    //   state.isshow = false
    // },

    //室内温度历史查询

    INDOORDATAQUE(state, data) {
      console.log("室内温度查询进入仓库")
      state.inDoorDataQue = data
    }
  },
  actions: {}
}
