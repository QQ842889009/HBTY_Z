import that from "@/main.js"
// import alarmShow from "./alarm/index.js";
////////////////////////////////////////////////////
//引入that是因为，js文件不认识总系统的Vue也就是那个this
//主要思想是：见说明
//////////////////////////////////////////////////////////////////////////////
//import data from "assets/js/stationCommon/data.js"; //公共的换热站所有数据
//import station from "assets/js/storeDataInit/station" //

let stationData = (msg) => {
  // console.log('---------msg',msg);
  new Promise((resolve, reject) => {
    let msgJsObjFormat = {
      Sid: "000",
      // Space: 12.2,
      Sname: "林都2", //站名  没有用
      Timestamp: 1536997080,
      Sdate: "2030-09-11",
      Stime: "00:00:00",

      FT11: 0, //一网流量
      FT21: 0, //二网流量
      FT31: 0, //瞬时补水流量

      TE11: 0, //一供温度
      TE12: 0, //一回温度
      TE21: 0, //二供温度
      TE22: 0, //二回温度

      PT11: 0, //一供压力
      PT12: 0, //一回压力
      PT21: 0, //二供压力
      PT22: 0, //二回压力

      LT: 0, //水箱液位
      TE00: 0, //
      FV1FB: 0, //一网供水阀门反馈
      FV2FB: 0, //二网供水阀门反馈
      BP21FB: 0, //1#循环泵频率反馈
      BP22FB: 0, //2#循环泵频率反馈
      MP1FB: 0, //1#补水泵频率反馈
      MP2FB: 0, //2#补水泵频率反馈
      Q1: 0, //一网热量
      Q2: 0, //二网热量
      DL: 0,
      ZFT11: 0, //一网补水累计流量
      ZFT21: 0, //二网补水累计流量

      ZQ1: 0, //一网累计热量
      ZQ2: 0, //二网累计热量
      Q_CS: 0,

      Q_24: 0,
      TE22_MP: 0, //补水后温度
      PT11_FV: 0, //一网除雾器后压力
      PT21_FV: 0, //二网除雾器后压力
      PT22_BF: 0, //循环泵前压力
      PT22_BL: 0, //循环泵后压力
      TE221: 0, //二网回水一分支温度
      PT221: 0, //二网回水一分支压力
      TE222: 0, //二网回水二分支温度
      PT222: 0, //二网回水二分支压力
      TE223: 0, //二网回水三分支温度
      PT223: 0, //二网回水三分支压力
      TE224: 0, //二网回水四分支温度
      PT224: 0, //二网回水四分支压力
      TE225: 0, //二网回水五分支温度
      PT225: 0, //二网回水五分支压力
      TE226: 0, //二网回水六分支温度
      PT226: 0, //二网回水六分支压力
      TE227: 0, //二网回水七分支温度
      PT227: 0, //二网回水七分支压力
      TE228: 0, //二网回水八分支温度
      PT228: 0, //二网回水八分支压力
      TE229: 0, //二网回水九分支温度
      PT229: 0, //二网回水九分支压力
      TE22A: 0, //二网回水十分支温度
      PT22A: 0, //二网回水十分支压力

      DLAV: 0, //A相线电压
      DLBV: 0, //B相线电压
      DLCV: 0, //C相线电压
      FT211: 0, //
      FT212: 0,
      FT213: 0,
      FT214: 0,
      Q211: 0,
      TE12_Z: 0, //多机组一网总回温度
      Q212: 0,
      Q213: 0,
      Q214: 0,

      ZQ211: 0,

      ZQ212: 0,
      ZQ213: 0,

      ZQ214: 0,

      FV1SP: 0, //一网阀门设定
      FV2SP: 0, //二网阀门设定
      BP21SP: 0, //1#循环泵频率设定
      BP22SP: 0, //2#循环泵频率设定
      MP1SP: 0, //1#补水泵频率设定
      MP2SP: 0, //2#补水泵频率设定
      PT21_HH: 0, //二供压力高高限设定
      PT22_LL: 0, //二回压力低低限设定
      LT_H: 0, //液位高限设定
      LT_L: 0, //液位低限设定
      LT_LL: 0, //液位低低限设定
      FT1SP_X: 0,
      FT1SP: 0,
      FT2SP_X: 0,
      FT2SP: 0,
      PT22SP: 0, //恒压补水压力设定
      PT22SP_L: 0, //限压补水压力低限设定
      PT22SP_H: 0, //限压补水压力高限设定
      PT22SP_HH: 0,
      CP211T_HH: 0,

      PT22XY_H: 0, //开阀压力
      PT22XY_L: 0, //关阀压力
      FT1SP_Stime: 0,
      FT1SP_Atime: 0,
      FT2SP_Stime: 0,
      MPT2T_HH: 0,
      FT2SP_Atime: 0,

      BP21C: 0, //1#循环泵启停
      BP22C: 0, //2#循环泵启停
      BP_TR: 0,
      MP1C: 0, //1#补水泵启停
      MP2C: 0, //2#补水泵启停
      MP_TR: 0,
      XYVC: 0, //泄压阀启停
      MA_FV1: 0, //1#一网阀门手自动
      MA_BP2: 0, //2#二网阀门手自动

      MA_MP: 0, //补水泵手自动
      MA_XYV: 0, //泄压阀手自动
      BP21A_LOCK: 0,

      BP22A_LOCK: 0,
      MP1A_LOCK: 0,
      MP2A_LOCK: 0,

      PT21_LOCK: 0,
      PT22_LOCK: 0,
      LT_LOCK: 0,

      BP2_LOCK: 0,
      Q_24Gog: 0,
      MP_PID_LIM: 0,
      SBPC: 0,
      MA_SBP: 0, //潜水泵手自动
      BP21S: 0, //1#循环泵运行状态
      BP21A: 0, //1#循环泵故障状态
      BP21RM: 0, //1#循环泵远程就地状态
      BP22S: 0, //2#循环泵运行状态
      BP22A: 0, //2#循环泵故障状态
      BP22RM: 0, //2#循环泵远程就地状态
      MP1S: 0, //1#补水泵运行状态
      MP1A: 0, //1#补水泵故障状态
      MP1RM: 0, //1#补水泵远程就地状态
      MP2S: 0, //2#补水泵运行状态
      MP2A: 0, //2#补水泵故障状态
      MP2RM: 0, //2#补水泵远程就地状态
      MA_FV1_TE21: 0,
      FV1SP_H: 0, //一网阀门自动最大开度设定
      FV1SP_L: 0, //一网阀门自动最小开度设定
      TE21SP: 0 //二供温度设定
      //PT21HH_Alert:0,
    }

    msgJsObjFormat.Sid = parseInt(msg.sid.slice(2), 16)
    msgJsObjFormat.Sdate = msg.sdate
    msgJsObjFormat.Stime = msg.stime
    msgJsObjFormat.Timestamp = msg.timestamp
    msgJsObjFormat.FT11 = msg.bd0.toFixed(1)
    msgJsObjFormat.FT21 = msg.bd1.toFixed(1)
    msgJsObjFormat.FT31 = msg.bd2.toFixed(1)
    msgJsObjFormat.TE11 = msg.bd3.toFixed(1)
    msgJsObjFormat.TE12 = msg.bd4.toFixed(1)
    msgJsObjFormat.TE21 = msg.bd5.toFixed(1)
    msgJsObjFormat.TE22 = msg.bd6.toFixed(1)
    msgJsObjFormat.PT11 = msg.bd7.toFixed(2)
    msgJsObjFormat.PT12 = msg.bd8.toFixed(2)
    msgJsObjFormat.PT21 = msg.bd9.toFixed(2)
    msgJsObjFormat.PT22 = msg.bd10.toFixed(2)
    msgJsObjFormat.LT = msg.bd11.toFixed(2)
    msgJsObjFormat.TE00 = msg.bd12.toFixed(1)
    msgJsObjFormat.FV1FB = parseInt(msg.bd13).toFixed(0)
    msgJsObjFormat.FV2FB = parseInt(msg.bd14).toFixed(0)
    msgJsObjFormat.BP21FB = parseInt(msg.bd15).toFixed(0)
    msgJsObjFormat.BP22FB = parseInt(msg.bd16).toFixed(0)
    msgJsObjFormat.MP1FB = parseInt(msg.bd17).toFixed(0)
    msgJsObjFormat.MP2FB = parseInt(msg.bd18).toFixed(0)
    msgJsObjFormat.Q1 = msg.bd19.toFixed(1)
    msgJsObjFormat.Q2 = msg.bd20.toFixed(1)
    msgJsObjFormat.DL = msg.bd21.toFixed(1)
    msgJsObjFormat.ZFT31 = msg.bd24.toFixed(1)
    msgJsObjFormat.ZQ1 = msg.bd25.toFixed(1)
    msgJsObjFormat.ZQ2 = msg.bd26.toFixed(1)
    msgJsObjFormat.Q_CS = msg.bd27.toFixed(1)
    msgJsObjFormat.Q_24 = msg.bd28.toFixed(1)
    msgJsObjFormat.TE22_MP = msg.bd29.toFixed(1)
    msgJsObjFormat.PT11_FV = msg.bd30.toFixed(2)
    msgJsObjFormat.PT21_FV = msg.bd31.toFixed(2)
    msgJsObjFormat.PT22_BF = msg.bd32.toFixed(2)
    msgJsObjFormat.PT22_BL = msg.bd33.toFixed(2)
    msgJsObjFormat.TE221 = msg.bd34.toFixed(1)
    msgJsObjFormat.PT221 = msg.bd35.toFixed(2)
    msgJsObjFormat.TE222 = msg.bd36.toFixed(1)
    msgJsObjFormat.PT222 = msg.bd37.toFixed(2)
    msgJsObjFormat.TE223 = msg.bd38.toFixed(1)
    msgJsObjFormat.PT223 = msg.bd39.toFixed(2)
    msgJsObjFormat.TE224 = msg.bd40.toFixed(1)
    msgJsObjFormat.PT224 = msg.bd41.toFixed(2)
    msgJsObjFormat.TE225 = msg.bd42.toFixed(1)
    msgJsObjFormat.PT225 = msg.bd43.toFixed(2)
    msgJsObjFormat.TE226 = msg.bd44.toFixed(1)
    msgJsObjFormat.PT226 = msg.bd45.toFixed(2)
    msgJsObjFormat.TE227 = msg.bd46.toFixed(1)
    msgJsObjFormat.PT227 = msg.bd47.toFixed(2)
    msgJsObjFormat.TE228 = msg.bd48.toFixed(1)
    msgJsObjFormat.PT228 = msg.bd49.toFixed(2)
    msgJsObjFormat.TE229 = msg.bd50.toFixed(1)
    msgJsObjFormat.PT229 = msg.bd51.toFixed(2)
    msgJsObjFormat.TE22A = msg.bd52.toFixed(1)
    msgJsObjFormat.PT22A = msg.bd53.toFixed(2)
    msgJsObjFormat.DLAV = msg.bd54.toFixed(0)
    msgJsObjFormat.DLBV = msg.bd55.toFixed(0)
    msgJsObjFormat.DLCV = msg.bd56.toFixed(0)
    msgJsObjFormat.FT211 = msg.bd57.toFixed(1)
    msgJsObjFormat.FT212 = msg.bd58.toFixed(1)
    msgJsObjFormat.FT213 = msg.bd59.toFixed(1)
    msgJsObjFormat.FT214 = msg.bd60.toFixed(1)
    msgJsObjFormat.Q211 = msg.bd61.toFixed(1)
    msgJsObjFormat.Q212 = msg.bd62.toFixed(1)
    msgJsObjFormat.Q213 = msg.bd63.toFixed(1)
    msgJsObjFormat.Q214 = msg.bd64.toFixed(1)
    msgJsObjFormat.TE12_Z = msg.bd65.toFixed(1)
    msgJsObjFormat.ZQ211 = msg.bd66.toFixed(1)
    msgJsObjFormat.ZQ212 = msg.bd67.toFixed(1)
    msgJsObjFormat.ZQ213 = msg.bd78.toFixed(1)
    msgJsObjFormat.ZQ214 = msg.bd69.toFixed(1)
    msgJsObjFormat.FV1SP_H = msg.bd71.toFixed(1)
    msgJsObjFormat.FV1SP_L = msg.bd72.toFixed(1)
    msgJsObjFormat.TE21SP = msg.bd73.toFixed(1)
    msgJsObjFormat.FV1SP = msg.bd74.toFixed(1)
    msgJsObjFormat.FV2SP = msg.bd75.toFixed(1)
    msgJsObjFormat.BP21SP = msg.bd76.toFixed(1)
    msgJsObjFormat.BP22SP = msg.bd77.toFixed(1)
    msgJsObjFormat.MP1SP = msg.bd78.toFixed(1)
    msgJsObjFormat.MP2SP = msg.bd79.toFixed(1)
    msgJsObjFormat.PT21_HH = msg.bd80.toFixed(2)
    msgJsObjFormat.PT22_LL = msg.bd81.toFixed(2)
    msgJsObjFormat.LT_H = msg.bd82.toFixed(2)
    msgJsObjFormat.LT_L = msg.bd83.toFixed(2)
    msgJsObjFormat.LT_LL = msg.bd84.toFixed(2)
    msgJsObjFormat.FT1SP_X = msg.bd85.toFixed(1)
    msgJsObjFormat.FT1SP = msg.bd86.toFixed(1)
    msgJsObjFormat.FT2SP_X = msg.bd87.toFixed(1)
    msgJsObjFormat.FT2SP = msg.bd88.toFixed(1)
    msgJsObjFormat.PT22SP = msg.bd89.toFixed(2)
    msgJsObjFormat.PT22SP_L = msg.bd90.toFixed(2)
    msgJsObjFormat.PT22SP_H = msg.bd91.toFixed(2)
    msgJsObjFormat.PT22SP_HH = msg.bd92.toFixed(2)
    msgJsObjFormat.PT22XY_H = msg.bd93.toFixed(2)
    msgJsObjFormat.PT22XY_L = msg.bd94.toFixed(2)
    msgJsObjFormat.FT1SP_Stime = msg.bd95.toFixed(0)
    msgJsObjFormat.FT1SP_Atime = msg.bd96.toFixed(0)
    msgJsObjFormat.FT2SP_Stime = msg.bd97.toFixed(0)
    msgJsObjFormat.FT2SP_Atime = msg.bd98.toFixed(0)
    msgJsObjFormat.BP21C = msg.b0
    msgJsObjFormat.BP22C = msg.b1
    msgJsObjFormat.BP_TR = msg.b2
    msgJsObjFormat.MP1C = msg.b3
    msgJsObjFormat.MP2C = msg.b4
    msgJsObjFormat.MP_TR = msg.b5
    msgJsObjFormat.XYVC = msg.b6
    msgJsObjFormat.MA_FV1 = msg.b7
    msgJsObjFormat.MA_BP2 = msg.b8
    msgJsObjFormat.MA_MP = msg.b9
    msgJsObjFormat.MA_XYV = msg.b10
    msgJsObjFormat.BP21A_LOCK = msg.b11
    msgJsObjFormat.BP22A_LOCK = msg.b12
    msgJsObjFormat.MP1A_LOCK = msg.b13
    msgJsObjFormat.MP2A_LOCK = msg.b14
    msgJsObjFormat.PT21_LOCK = msg.b15
    msgJsObjFormat.PT22_LOCK = msg.b16
    msgJsObjFormat.LT_LOCK = msg.b17
    msgJsObjFormat.BP2_LOCK = msg.b18
    msgJsObjFormat.Q_24Gog = msg.b19
    msgJsObjFormat.MP_PID_LIM = msg.b20
    msgJsObjFormat.MA_FV1_TE21 = msg.b21
    msgJsObjFormat.SBPC = msg.b22
    msgJsObjFormat.MA_SBP = msg.b23
    msgJsObjFormat.BP21S = msg.b30
    msgJsObjFormat.BP21A = msg.b31
    msgJsObjFormat.BP21RM = msg.b32
    msgJsObjFormat.BP22S = msg.b33
    msgJsObjFormat.BP22A = msg.b34
    msgJsObjFormat.BP22RM = msg.b35
    msgJsObjFormat.MP1S = msg.b36
    msgJsObjFormat.MP1A = msg.b37
    msgJsObjFormat.MP1RM = msg.b38
    msgJsObjFormat.MP2S = msg.b39
    msgJsObjFormat.MP2A = msg.b40
    msgJsObjFormat.MP2RM = msg.b41

    resolve(msgJsObjFormat)
  }).then((msg) => {
    that.$store.commit("STATIONDATA", msg)
  })
}
let stationDataReal = (msg) => {
  // console.log('---------msg',msg);
  new Promise((resolve, reject) => {
    let msgJsObjFormat = {
      // station: "占位",
      // sid: 0,
      // space: 0,
      way: 0,
      Timestamp: 1536997080,
      date: "2030-09-11",
      time: "00:00:00",
      ft11_u: 0,
      ft21_u: 0,
      q1_u: 0
      // te00: 0
    }

    msgJsObjFormat.sid = parseInt(msg.sid.slice(2), 16)
    msgJsObjFormat.date = msg.sdate
    msgJsObjFormat.time = msg.stime
    msgJsObjFormat.Timestamp = msg.timestamp
    msgJsObjFormat.ft11_u = msg.bd0.toFixed(1)
    msgJsObjFormat.ft21_u = msg.bd1.toFixed(1)

    // msgJsObjFormat.te00 = msg.bd12.toFixed(1)

    msgJsObjFormat.q1_u = msg.bd19.toFixed(1)
    // msgJsObjFormat.Q2 = msg.bd20.toFixed(1)
    // msgJsObjFormat.DL = msg.bd21.toFixed(1)
    // msgJsObjFormat.ZFT31 = msg.bd24.toFixed(1)
    // msgJsObjFormat.ZQ1 = msg.bd25.toFixed(1)
    // msgJsObjFormat.ZQ2 = msg.bd26.toFixed(1)

    resolve(msgJsObjFormat)
  }).then((msg) => {
    that.$store.commit("STATIONDATAREAL", msg)
  })
}
//报警灰色王
let stationDatAlaH = (msg) => {
  // console.log('---------msg',msg);
  new Promise((resolve, reject) => {
    let msgJsObjFormat = {
      // station: "占位",
      sid: 0,
      status: 0
    }

    msgJsObjFormat.sid = msg.sid

    msgJsObjFormat.status = msg.status

    resolve(msgJsObjFormat)
  }).then((msg) => {
    that.$store.commit("STATIONDATAALAH", msg)
  })
}
let Comerr = (msg) => {
  new Promise((resolve, reject) => {
    resolve(msg)
  }).then((msg) => {
    // //console.log('采集数据进仓库前msg是什么？')
    // //console.log(msg)
    that.$store.commit("COMERR", msg) //把msg放入仓库//
  })
}

export default {
  stationData,
  Comerr,
  stationDataReal,
  stationDatAlaH
}
