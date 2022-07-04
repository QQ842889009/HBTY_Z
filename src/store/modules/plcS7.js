import Vue from "vue"
import { plcS7dataInit, echartDataInit } from "assets/js/storeBox/plcS7Box.js"
export default {
  namespaced: true,
  state() {
    return {
      staPlcData: [],
      staPlcNum: 31,
      staEchartData: []
    }
  },
  getters: {
    get_staPlcData(state) {
      return state.staPlcData
    }
  },
  mutations: {
    /**
     * 初始化PLC数据，将PLC的数据和信息统统的放到仓库中生成一个
     * 对象数组中
     */
    mutaPlcDataInit(state, data) {
      plcS7dataInit(state.staPlcData, state.staPlcNum, data)
    },
    /**
     * PLC数据的跟新，wsscoket接受，然后process处理后到此处
     */
    mutaPlcDataUpdata(state, data) {
      let j = parseInt(data.Sid)
      Object.keys(state.staPlcData[j]).forEach((key) => {
        if (data[key]) {
          state.staPlcData[j][key] = data[key]
        }
      })
    },

    /**
     * PLC数据信息的跟新，wsscoket接受，直接此处更新
     * 此处接受到的是对象数组
     */
    mutaPlcDataInfoUpdata(state, data) {
      let len = data.length
      for (let i = 0; i < len; i++) {
        state.staPlcData[i].Space = data[i].Space
        state.staPlcData[i].Station = data[i].Station
      }
    },

    // ------------------------下面是echarts数据----------------------------------------------------------
    /**
     * 初始化echarts数据，将echarts的数据和信息统统的放到仓库中生成一个
     * 对象数组中
     */
    mutaEchartDataInit(state, data) {
      echartDataInit(state.staEchartData, state.staPlcNum, data)
    },
    /**
     * echart数据的跟新，wsscoket接受，然后process处理后到此处
     */
    mutaEchartDataUpdata(state, data) {
      let j = parseInt(data.Sid)
      Object.keys(state.staEchartData[j]).forEach((key) => {
        if (data[key]) {
          state.staEchartData[j][key] = data[key]
        }
      })
    },

    /**
     * echart数据信息的跟新，wsscoket接受，直接此处更新
     * 此处接受到的是对象数组
     */
    mutaEchartDataInfoUpdata(state, data) {
      let len = data.length
      for (let i = 0; i < len; i++) {
        state.staEchartData[i].面积 = data[i].Space
        state.staEchartData[i].站点 = data[i].Station
      }
    }
  },
  actions: {}
}
