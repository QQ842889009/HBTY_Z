import Vue from "vue";
import { plcS7dataInit, echartDataInit } from "assets/js/storeBox/plcS7Box.js";
export default {
  namespaced: true,
  state() {
    return {
      staPlcData: [],
      staPlcNum: 31,
      staEchartData: [],
    };
  },
  getters: {
    getterDatasLen(state) {
      return state.datasLen;
    },
    userG(state) {
      return state.user;
    },
    LKgetcurveupdate(state) {
      return state.curveupdatearray[state.curveupdateChange];
    },
    MLRestrictArray_shezhi(state) {
      return state.RestrictArray_shezhi;
    },
    getLkInfoData(state) {
      return state.lkInfoData;
    },
    getLkTeConData(state) {
      return state.lkTeConData;
    },
    getLkAlarmShowData(state) {
      return state.lkAlarmShowData;
    },

    MLComerr(state) {
      return state.lkAlarmComData;
    },
    MLRestrictArray(state) {
      return state.lkAlarmLimData;
    },
    MLAlertArray(state) {
      // return state.lkAlarmData;
      return state.AlertArray;
    },
    getLkAlarmData(state) {
      return state.lkAlarmData;
    },
    getLkAlarmLimData(state) {
      return state.lkAlarmLimData;
    },
    wtS7Alertobj(state) {
      return state.Alertobj;
    },
    wtS7Alert(state) {
      return state.Alert;
    },
    wtS7EventA(state) {
      return state.javaEventA;
    },
    wtS7EventB(state) {
      return state.javaEventD;
    },
    //理解取出值开始*******预报规划用
    Gallspace(state) {
      for (let i = 0; i < datas.length; i++) {
        state.allspace =
          state.allSpace +
          state.datas[i].Space * state.datas[i].Spacecoefficient;
      }
      return state.allspace;
    },
    // Gsnwd(state) {
    //   return state.snwd;
    // },
    // Gswwd(state) {
    //   return state.swwd;
    // },
    // Gfengli(state) {
    //   return state.fengli;
    // },
    // Gwenduzhibiao(state) {
    //   return state.wenduzhibiao;
    // },
    // Grezhibiao(state) {
    //   return state.rezhibiao;
    // },
    //理解取出值结束*******预报规划用

    //理解为计算

    //佳木斯永旭热力wtS7DatasLen代表state中数据长度就是42那个但在getters方法中走一遍用于各个组件调用，组件调用数据长度的话调用wtS7DatasLen就行了
    wtS7DatasLen(state) {
      return state.datasLen;
    },
    //佳木斯永旭热力//同上理这是采集到的数据的数值-----具体是什么数值？还是全部采集数值
    wtS7Datas(state) {
      return state.datas;
    },
    //那报警的数组zzzz
    wtS7DatasAlert(state) {
      return state.datasAlert;
    },
    //佳木斯永旭热力//报警先不管
    wtS7AlarmDatas(state) {
      return state.alarmDatas;
    },
    //佳木斯永旭热力//报警先不管
    wtS7AlarmVoiceDatas(state) {
      return state.alarmVoiceDatas;
    },
    //佳木斯永旭热力//报警先不管
    wtS7AlarmVoiceAdd(state) {
      if (state.alarmVoiceDatas.length === 0) {
        return ["80ER"];
      } else {
        return state.alarmVoiceDatas.map((r) => {
          console.log(r);
          return r.Sid + r.Tag.Name + r.Tag.LimitDes;
        });
      }
    },
    //佳木斯永旭热力//这是什么没有备注啊
    wtS7InfoDatas(state) {
      return state.infoDatas;
    },
    wtzhanxinxiG(state) {
      return state.zhanxinxi;
    },
    wtS7SpaceDis(state) {
      let station = []; //数组里面装的["01号站"，"02号站"，"03号站"。。。]
      let stationData = []; //数组里面装的[{value: "15", name: "01号站"}，{value: "22", name: "02号站"}，{value: "34", name: "03号站"}]
      state.datas.forEach((value1, key) => {
        let temp = { value: 5, name: "rose2" }; //按照echarts的要求做一个壳子,不能定义到for的外面
        temp.name = value1.Station;
        temp.value = value1.Space;
        station.push(value1.Station);
        stationData.push(temp);
      });
      return { station, stationData };
    },
    wtS7FlowCalDis(state) {
      let station = []; //数组里面装的["01号站"，"02号站"，"03号站"。。。]
      let flowSpace = [];
      let calSpace = [];
      state.datas.forEach((value1, key) => {
        station.push(value1.Station);
        flowSpace.push(value1.FT11 / value1.Space);
        calSpace.push(value1.Q1 / value1.Space);
      });
      return { station, flowSpace, calSpace };
    },
    wtS7SplitData(state) {
      let station = [];
      let processData = [];
      let SidValue = [];
      station = state.datas.map((r) => r.Station);
      SidValue = state.datas.map((r) => r.Sid);
      processData = state.datas;
      return { station, processData, SidValue };
    },
    //24小时日报表
    wtZhanInquireTe(state) {
      return state.ZhanInquire;
    },
    //整点报表
    wtZhanInquireallZD(state) {
      return state.ZhanInquireallZD;
    },
  },
  mutations: {
    /**
     * 初始化PLC数据，将PLC的数据和信息统统的放到仓库中生成一个
     * 对象数组中
     */
    mutaPlcDataInit(state, data) {
      plcS7dataInit(state.staPlcData, state.staPlcNum, data);
    },
    /**
     * PLC数据的跟新，wsscoket接受，然后process处理后到此处
     */
    mutaPlcDataUpdata(state, data) {
      let j = parseInt(data.Sid);
      Object.keys(state.staPlcData[j]).forEach((key) => {
        if (data[key]) {
          state.staPlcData[j][key] = data[key];
        }
      });
    },

    /**
     * PLC数据信息的跟新，wsscoket接受，直接此处更新
     * 此处接受到的是对象数组
     */
    mutaPlcDataInfoUpdata(state, data) {
      let len = data.length;
      for (let i = 0; i < len; i++) {
        state.staPlcData[i].Space = data[i].Space;
        state.staPlcData[i].Station = data[i].Station;
      }
    },

    // ------------------------下面是echarts数据----------------------------------------------------------
    /**
     * 初始化echarts数据，将echarts的数据和信息统统的放到仓库中生成一个
     * 对象数组中
     */
    mutaEchartDataInit(state, data) {
      echartDataInit(state.staEchartData, state.staPlcNum, data);
    },
    /**
     * echart数据的跟新，wsscoket接受，然后process处理后到此处
     */
    mutaEchartDataUpdata(state, data) {
      let j = parseInt(data.Sid);
      Object.keys(state.staEchartData[j]).forEach((key) => {
        if (data[key]) {
          state.staEchartData[j][key] = data[key];
        }
      });
    },

    /**
     * echart数据信息的跟新，wsscoket接受，直接此处更新
     * 此处接受到的是对象数组
     */
    mutaEchartDataInfoUpdata(state, data) {
      let len = data.length;
      for (let i = 0; i < len; i++) {
        state.staEchartData[i].面积 = data[i].Space;
        state.staEchartData[i].站点 = data[i].Station;
      }
    },
  },
  actions: {},
};
