import that from "@/main.js";
// import alarmShow from "./alarm/index.js";
////////////////////////////////////////////////////
//引入that是因为，js文件不认识总系统的Vue也就是那个this
//主要思想是：见说明
//////////////////////////////////////////////////////////////////////////////
//import data from "assets/js/stationCommon/data.js"; //站点数组需要//
let stationData = (msg) => {
  new Promise((resolve, reject) => {
    let msgJsObj = msg;
    let msgJsObjFormat = {
      Sid: "000",
      // Space: 12.2,
      Sname: "林都2",
      Timestamp: 1536997080,
      Sdate: "2030-09-11",
      Stime: "00:00:00",
      FT11: 0,
      FT21: 0,
      FT31: 0,
      TE11: 0,
      TE12: 0,
      TE21: 0,
      TE22: 0,
      PT11: 0,
      PT12: 0,
      PT21: 0,
      PT22: 0,
      LT: 0,
      TE00: 0,
      FV1FB: 0,
      FV2FB: 0,
      BP21FB: 0,
      BP22FB: 0,
      MP1FB: 0,
      MP2FB: 0,
      Q1: 0,
      Q2: 0,
      DL: 0,
      ZFT11: 0,
      ZFT21: 0,
      ZQ1: 0,
      ZQ2: 0,
      Q_CS: 0,
      Q_24: 0,
      TE22_MP: 0,
      PT11_FV: 0,
      PT21_FV: 0,
      PT22_BF: 0,
      PT22_BL: 0,
      TE221: 0,
      PT221: 0,
      TE222: 0,
      PT222: 0,
      TE223: 0,
      PT223: 0,
      TE224: 0,
      PT224: 0,
      TE225: 0,
      PT225: 0,
      TE226: 0,
      PT226: 0,
      TE227: 0,
      PT227: 0,
      TE228: 0,
      PT228: 0,
      TE229: 0,
      PT229: 0,
      TE22A: 0,
      PT22A: 0,
      DLAV: 0,
      DLBV: 0,
      DLCV: 0,
      FT211: 0,
      FT212: 0,
      FT213: 0,
      FT214: 0,
      Q211: 0,
      TE12_Z: 0,
      Q212: 0,
      Q213: 0,
      Q214: 0,
      ZQ211: 0,
      ZQ212: 0,
      ZQ213: 0,
      ZQ214: 0,
      FV1SP: 0,
      FV2SP: 0,
      BP21SP: 0,
      BP22SP: 0,
      MP1SP: 0,
      MP2SP: 0,
      PT21_HH: 0,
      PT22_LL: 0,
      LT_H: 0,
      LT_L: 0,
      LT_LL: 0,
      FT1SP_X: 0,
      FT1SP: 0,
      FT2SP_X: 0,
      FT2SP: 0,
      PT22SP: 0,
      PT22SP_L: 0,
      PT22SP_H: 0,
      PT22SP_HH: 0,
      CP211T_HH: 0,
      PT22XY_H: 0,
      PT22XY_L: 0,
      FT1SP_Stime: 0,
      FT1SP_Atime: 0,
      FT2SP_Stime: 0,
      MPT2T_HH: 0,
      FT2SP_Atime: 0,
      BP21C: 0,
      BP22C: 0,
      BP_TR: 0,
      MP1C: 0,
      MP2C: 0,
      MP_TR: 0,
      XYVC: 0,
      MA_FV1: 0,
      MA_BP2: 0,
      MA_MP: 0,
      MA_XYV: 0,
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
      MA_SBP: 0,
      BP21S: 0,
      BP21A: 0,
      BP21RM: 0,
      BP22S: 0,
      BP22A: 0,
      BP22RM: 0,
      MP1S: 0,
      MP1A: 0,
      MP1RM: 0,
      MP2S: 0,
      MP2A: 0,
      MP2RM: 0,
      MA_FV1_TE21: 0,
      FV1SP_H: 0,
      FV1SP_L: 0,
      TE21SP: 0,
      MP1Cdecide: null,

      //PT21HH_Alert:0,
    };
    msgJsObjFormat.Sid = parseInt(msgJsObj.sid.slice(2), 16);
    msgJsObjFormat.Sdate = msgJsObj.sdate;
    msgJsObjFormat.Stime = msgJsObj.stime;
    msgJsObjFormat.FT11 = msgJsObj.bd0.toFixed(1);
    msgJsObjFormat.FT21 = msgJsObj.bd1.toFixed(1);
    msgJsObjFormat.FT31 = msgJsObj.bd2.toFixed(1);
    msgJsObjFormat.TE11 = msgJsObj.bd3.toFixed(1);
    msgJsObjFormat.TE12 = msgJsObj.bd4.toFixed(1);
    msgJsObjFormat.TE21 = msgJsObj.bd5.toFixed(1);
    msgJsObjFormat.TE22 = msgJsObj.bd6.toFixed(1);
    msgJsObjFormat.PT11 = msgJsObj.bd7.toFixed(2);
    msgJsObjFormat.PT12 = msgJsObj.bd8.toFixed(2);
    msgJsObjFormat.PT21 = msgJsObj.bd9.toFixed(2);
    msgJsObjFormat.PT22 = msgJsObj.bd10.toFixed(2);
    msgJsObjFormat.LT = msgJsObj.bd11.toFixed(2);
    msgJsObjFormat.TE00 = msgJsObj.bd12.toFixed(1);
    msgJsObjFormat.FV1FB = parseInt(msgJsObj.bd13).toFixed(0);
    msgJsObjFormat.FV2FB = parseInt(msgJsObj.bd14).toFixed(0);
    msgJsObjFormat.BP21FB = parseInt(msgJsObj.bd15).toFixed(0);
    msgJsObjFormat.BP22FB = parseInt(msgJsObj.bd16).toFixed(0);
    msgJsObjFormat.MP1FB = parseInt(msgJsObj.bd17).toFixed(0);
    msgJsObjFormat.MP2FB = parseInt(msgJsObj.bd18).toFixed(0);
    msgJsObjFormat.Q1 = msgJsObj.bd19.toFixed(1);
    msgJsObjFormat.Q2 = msgJsObj.bd20.toFixed(1);
    msgJsObjFormat.DL = msgJsObj.bd21.toFixed(1);
    msgJsObjFormat.ZFT31 = msgJsObj.bd24.toFixed(1);
    msgJsObjFormat.ZQ1 = msgJsObj.bd25.toFixed(1);
    msgJsObjFormat.ZQ2 = msgJsObj.bd26.toFixed(1);
    msgJsObjFormat.Q_CS = msgJsObj.bd27.toFixed(1);
    msgJsObjFormat.Q_24 = msgJsObj.bd28.toFixed(1);
    msgJsObjFormat.TE22_MP = msgJsObj.bd29.toFixed(1);
    msgJsObjFormat.PT11_FV = msgJsObj.bd30.toFixed(2);
    msgJsObjFormat.PT21_FV = msgJsObj.bd31.toFixed(2);
    msgJsObjFormat.PT22_BF = msgJsObj.bd32.toFixed(2);
    msgJsObjFormat.PT22_BL = msgJsObj.bd33.toFixed(2);
    msgJsObjFormat.TE221 = msgJsObj.bd34.toFixed(1);
    msgJsObjFormat.PT221 = msgJsObj.bd35.toFixed(2);
    msgJsObjFormat.TE222 = msgJsObj.bd36.toFixed(1);
    msgJsObjFormat.PT222 = msgJsObj.bd37.toFixed(2);
    msgJsObjFormat.TE223 = msgJsObj.bd38.toFixed(1);
    msgJsObjFormat.PT223 = msgJsObj.bd39.toFixed(2);
    msgJsObjFormat.TE224 = msgJsObj.bd40.toFixed(1);
    msgJsObjFormat.PT224 = msgJsObj.bd41.toFixed(2);
    msgJsObjFormat.TE225 = msgJsObj.bd42.toFixed(1);
    msgJsObjFormat.PT225 = msgJsObj.bd43.toFixed(2);
    msgJsObjFormat.TE226 = msgJsObj.bd44.toFixed(1);
    msgJsObjFormat.PT226 = msgJsObj.bd45.toFixed(2);
    msgJsObjFormat.TE227 = msgJsObj.bd46.toFixed(1);
    msgJsObjFormat.PT227 = msgJsObj.bd47.toFixed(2);
    msgJsObjFormat.TE228 = msgJsObj.bd48.toFixed(1);
    msgJsObjFormat.PT228 = msgJsObj.bd49.toFixed(2);
    msgJsObjFormat.TE229 = msgJsObj.bd50.toFixed(1);
    msgJsObjFormat.PT229 = msgJsObj.bd51.toFixed(2);
    msgJsObjFormat.TE22A = msgJsObj.bd52.toFixed(1);
    msgJsObjFormat.PT22A = msgJsObj.bd53.toFixed(2);
    msgJsObjFormat.DLAV = msgJsObj.bd54.toFixed(0);
    msgJsObjFormat.DLBV = msgJsObj.bd55.toFixed(0);
    msgJsObjFormat.DLCV = msgJsObj.bd56.toFixed(0);
    msgJsObjFormat.FT211 = msgJsObj.bd57.toFixed(1);
    msgJsObjFormat.FT212 = msgJsObj.bd58.toFixed(1);
    msgJsObjFormat.FT213 = msgJsObj.bd59.toFixed(1);
    msgJsObjFormat.FT214 = msgJsObj.bd60.toFixed(1);
    msgJsObjFormat.Q211 = msgJsObj.bd61.toFixed(1);
    msgJsObjFormat.Q212 = msgJsObj.bd62.toFixed(1);
    msgJsObjFormat.Q213 = msgJsObj.bd63.toFixed(1);
    msgJsObjFormat.Q214 = msgJsObj.bd64.toFixed(1);
    msgJsObjFormat.TE12_Z = msgJsObj.bd65.toFixed(1);
    msgJsObjFormat.ZQ211 = msgJsObj.bd66.toFixed(1);
    msgJsObjFormat.ZQ212 = msgJsObj.bd67.toFixed(1);
    msgJsObjFormat.ZQ213 = msgJsObj.bd78.toFixed(1);
    msgJsObjFormat.ZQ214 = msgJsObj.bd69.toFixed(1);
    msgJsObjFormat.FV1SP_H = msgJsObj.bd71.toFixed(1);
    msgJsObjFormat.FV1SP_L = msgJsObj.bd72.toFixed(1);
    msgJsObjFormat.TE21SP = msgJsObj.bd73.toFixed(1);
    msgJsObjFormat.FV1SP = msgJsObj.bd74.toFixed(1);
    msgJsObjFormat.FV2SP = msgJsObj.bd75.toFixed(1);
    msgJsObjFormat.BP21SP = msgJsObj.bd76.toFixed(1);
    msgJsObjFormat.BP22SP = msgJsObj.bd77.toFixed(1);
    msgJsObjFormat.MP1SP = msgJsObj.bd78.toFixed(1);
    msgJsObjFormat.MP2SP = msgJsObj.bd79.toFixed(1);
    msgJsObjFormat.PT21_HH = msgJsObj.bd80.toFixed(2);
    msgJsObjFormat.PT22_LL = msgJsObj.bd81.toFixed(2);
    msgJsObjFormat.LT_H = msgJsObj.bd82.toFixed(2);
    msgJsObjFormat.LT_L = msgJsObj.bd83.toFixed(2);
    msgJsObjFormat.LT_LL = msgJsObj.bd84.toFixed(2);
    msgJsObjFormat.FT1SP_X = msgJsObj.bd85.toFixed(1);
    msgJsObjFormat.FT1SP = msgJsObj.bd86.toFixed(1);
    msgJsObjFormat.FT2SP_X = msgJsObj.bd87.toFixed(1);
    msgJsObjFormat.FT2SP = msgJsObj.bd88.toFixed(1);
    msgJsObjFormat.PT22SP = msgJsObj.bd89.toFixed(2);
    msgJsObjFormat.PT22SP_L = msgJsObj.bd90.toFixed(2);
    msgJsObjFormat.PT22SP_H = msgJsObj.bd91.toFixed(2);
    msgJsObjFormat.PT22SP_HH = msgJsObj.bd92.toFixed(2);
    msgJsObjFormat.PT22XY_H = msgJsObj.bd93.toFixed(2);
    msgJsObjFormat.PT22XY_L = msgJsObj.bd94.toFixed(2);
    msgJsObjFormat.FT1SP_Stime = msgJsObj.bd95.toFixed(0);
    msgJsObjFormat.FT1SP_Atime = msgJsObj.bd96.toFixed(0);
    msgJsObjFormat.FT2SP_Stime = msgJsObj.bd97.toFixed(0);
    msgJsObjFormat.FT2SP_Atime = msgJsObj.bd98.toFixed(0);
    msgJsObjFormat.BP21C = msgJsObj.b0;
    msgJsObjFormat.BP22C = msgJsObj.b1;
    msgJsObjFormat.BP_TR = msgJsObj.b2;
    msgJsObjFormat.MP1C = msgJsObj.b3 === 0 ? "停止" : "运行";
    msgJsObjFormat.MP2C = msgJsObj.b4;
    msgJsObjFormat.MP_TR = msgJsObj.b5;
    msgJsObjFormat.XYVC = msgJsObj.b6;
    msgJsObjFormat.MA_FV1 = msgJsObj.b7;
    msgJsObjFormat.MA_BP2 = msgJsObj.b8;
    msgJsObjFormat.MA_MP = msgJsObj.b9;
    msgJsObjFormat.MA_XYV = msgJsObj.b10;
    msgJsObjFormat.BP21A_LOCK = msgJsObj.b11;
    msgJsObjFormat.BP22A_LOCK = msgJsObj.b12;
    msgJsObjFormat.MP1A_LOCK = msgJsObj.b13;
    msgJsObjFormat.MP2A_LOCK = msgJsObj.b14;
    msgJsObjFormat.PT21_LOCK = msgJsObj.b15;
    msgJsObjFormat.PT22_LOCK = msgJsObj.b16;
    msgJsObjFormat.LT_LOCK = msgJsObj.b17;
    msgJsObjFormat.BP2_LOCK = msgJsObj.b18;
    msgJsObjFormat.Q_24Gog = msgJsObj.b19;
    msgJsObjFormat.MP_PID_LIM = msgJsObj.b20;
    msgJsObjFormat.MA_FV1_TE21 = msgJsObj.b21;
    msgJsObjFormat.SBPC = msgJsObj.b22;
    msgJsObjFormat.MA_SBP = msgJsObj.b23;
    msgJsObjFormat.BP21S = msgJsObj.b30;
    msgJsObjFormat.BP21A = msgJsObj.b31;
    msgJsObjFormat.BP21RM = msgJsObj.b32;
    msgJsObjFormat.BP22S = msgJsObj.b33;
    msgJsObjFormat.BP22A = msgJsObj.b34;
    msgJsObjFormat.BP22RM = msgJsObj.b35;
    msgJsObjFormat.MP1S = msgJsObj.b36;
    msgJsObjFormat.MP1A = msgJsObj.b37;
    msgJsObjFormat.MP1RM = msgJsObj.b38;
    msgJsObjFormat.MP2S = msgJsObj.b39;
    msgJsObjFormat.MP2A = msgJsObj.b40;
    msgJsObjFormat.MP2RM = msgJsObj.b41;
    // if ((msg.sid = 2)) {
    //   //console.log(msg);
    // }

    /////************************************************************************
    resolve(msgJsObjFormat);
  }).then((msg) => {
    that.$store.commit("stationData", msg);
  });
};
let stationAlarmData = (msg) => {
  new Promise((resolve, reject) => {
    let msgJsObj = msg;
    let msgJsObjFormat = {
      Sid: 0,

      PT21: 0,
      PT22: 0,

      LT: 0,

      FV1FB: 0,

      BP21FB: 0,
      BP22FB: 0,
    };

    msgJsObjFormat.Sid = parseInt(msgJsObj.sid.slice(2), 16);
    // *********************************************************************

    // msgJsObjFormat.Space = msgJsObj.space;

    msgJsObjFormat.PT21 = msgJsObj.bd9.toFixed(2);
    msgJsObjFormat.PT22 = msgJsObj.bd10.toFixed(2);
    msgJsObjFormat.LT = msgJsObj.bd11.toFixed(2);

    msgJsObjFormat.FV1FB = parseInt(msgJsObj.bd13).toFixed(0);

    msgJsObjFormat.BP21FB = parseInt(msgJsObj.bd15).toFixed(0);
    msgJsObjFormat.BP22FB = parseInt(msgJsObj.bd16).toFixed(0);

    /////************************************************************************
    resolve(msgJsObjFormat);
  }).then((msg) => {
    // //console.log(msg.TE22_MP);
    that.$store.commit("stationAlarmData", msg);
  });
};
// manageDataAlarmLimit;
let manageDataInfo = (msg) => {
  that.$store.commit("wtS7SetInfoData", msg); //
};
let manageDataTeCon = (msg) => {
  that.$store.commit("wtS7SetTeConData", msg); //
};
//用于曲线更新
let managecurveupdate = (msg) => {
  that.$store.commit("curveupdate", msg); //
};
let manageDataAlarm = (msg) => {
  // //console.log("触发了报警的回应");

  // that.$store.commit("wtS7SetDatasAlarmShow", alarmShow.alarmShow(msg));
  that.$store.commit("wtS7SetDatasAlarm", msg); //
};
let manageDataDD = (msg) => {
  // //console.log("触发了采集的回应");

  // 验证接收到的数据Sid如果超出了，数据数组的地址范围，那么舍去
  new Promise((resolve, reject) => {
    let msgJsObj = msg;
    let msgJsObjFormat = {
      Sid: "000",
      StationDD: 0,
      SpaceDD: 0,
      SdateDD: "2030-09-11",
      StimeDD: "00:00:00",
      BP1S: 0,
      BP211S: 0,
      BP212S: 0,
      BP213S: 0,
      BP214S: 0,
      BP215S: 0,
      MP1S: 0,
      MP2S: 0,
      BP1A: 0,
      BP211A: 0,
      BP212A: 0,
      BP213A: 0,
      BP214A: 0,
      BP215A: 0,
      MP1A: 0,
      MP2A: 0,
      BP1RM: 0,
      BP211RM: 0,
      BP212RM: 0,
      BP213RM: 0,
      BP214RM: 0,
      BP215RM: 0,
      MP1RM: 0,
      BP1C: 0,
      BP211C: 0,
      BP212C: 0,
      BP213C: 0,
      BP214C: 0,
      BP215C: 0,
      MP1C: 0,
      MP2C: 0,
      BP1A_LOCK: 0,
      BP211A_LOCK: 0,
      BP212A_LOCK: 0,
      BP213A_LOCK: 0,
      BP214A_LOCK: 0,
      BP215A_LOCK: 0,
      MP1A_LOCK: 0,
      PT211_LOCK: 0,
      PT212_LOCK: 0,
      PT213_LOCK: 0,
      PT214_LOCK: 0,
      PT215_LOCK: 0,
      PT22_LOCK: 0,
      LT_LOCK: 0,
      BP2_LOCK: 0,
      MP1_MA: 0,
      SFC: 0,
      wTimeDog: 0,
    };

    msgJsObjFormat.Sid = parseInt(msgJsObj.sid.slice(2), 16);
    msgJsObjFormat.StationDD = msgJsObj.sname;
    msgJsObjFormat.SpaceDD = 234.0;
    msgJsObjFormat.SdateDD = msgJsObj.sdate;
    msgJsObjFormat.StimeDD = msgJsObj.stime;
    msgJsObjFormat.BP1S = msgJsObj.dd0;
    msgJsObjFormat.BP211S = msgJsObj.dd1;
    msgJsObjFormat.BP212S = msgJsObj.dd2;
    msgJsObjFormat.BP213S = msgJsObj.dd3;
    msgJsObjFormat.BP214S = msgJsObj.dd4;
    msgJsObjFormat.BP215S = msgJsObj.dd5;
    msgJsObjFormat.MP1S = msgJsObj.dd6;
    msgJsObjFormat.MP2S = msgJsObj.dd7;
    msgJsObjFormat.BP1A = msgJsObj.dd8;
    msgJsObjFormat.BP21A = msgJsObj.dd9;
    msgJsObjFormat.BP212A = msgJsObj.dd10;
    msgJsObjFormat.BP213A = msgJsObj.dd11;
    msgJsObjFormat.BP214A = msgJsObj.dd12;
    msgJsObjFormat.BP215A = msgJsObj.dd13;
    msgJsObjFormat.MP1A = msgJsObj.dd14;
    msgJsObjFormat.MP2A = msgJsObj.dd15;
    msgJsObjFormat.BP1RM = msgJsObj.dd16;
    msgJsObjFormat.BP211RM = msgJsObj.dd17;
    msgJsObjFormat.BP212RM = msgJsObj.dd18;
    msgJsObjFormat.BP213RM = msgJsObj.dd19;
    msgJsObjFormat.BP214RM = msgJsObj.dd20;
    msgJsObjFormat.BP215RM = msgJsObj.dd21;
    msgJsObjFormat.MP1RM = msgJsObj.dd22;
    msgJsObjFormat.BP1C = msgJsObj.dd28;
    msgJsObjFormat.BP211C = msgJsObj.dd29;
    msgJsObjFormat.BP212C = msgJsObj.dd30;
    msgJsObjFormat.BP213C = msgJsObj.dd31;
    msgJsObjFormat.BP214C = msgJsObj.dd32;
    msgJsObjFormat.BP215C = msgJsObj.dd33;
    msgJsObjFormat.MP1C_Q = msgJsObj.dd34;
    msgJsObjFormat.MP1C_T = msgJsObj.dd35;
    msgJsObjFormat.BP1A_LOCK = msgJsObj.dd36;
    msgJsObjFormat.BP21A_LOCK = msgJsObj.dd37;
    msgJsObjFormat.BP212A_LOCK = msgJsObj.dd38;
    msgJsObjFormat.BP213A_LOCK = msgJsObj.dd39;
    msgJsObjFormat.BP214A_LOCK = msgJsObj.dd40;
    msgJsObjFormat.BP215A_LOCK = msgJsObj.dd41;
    msgJsObjFormat.MP1A_LOCK = msgJsObj.dd42;
    msgJsObjFormat.PT21HH_LOCK = msgJsObj.dd43;
    msgJsObjFormat.PT212_LOCK = msgJsObj.dd44;
    msgJsObjFormat.PT213_LOCK = msgJsObj.dd45;
    msgJsObjFormat.PT214_LOCK = msgJsObj.dd46;
    msgJsObjFormat.PT215_LOCK = msgJsObj.dd47;
    msgJsObjFormat.PT22LL_LOCK = msgJsObj.dd48;
    msgJsObjFormat.LT_LOCK = msgJsObj.dd49;
    msgJsObjFormat.BP2_LOCK = msgJsObj.dd50;
    msgJsObjFormat.MP1_MA = msgJsObj.dd51;
    msgJsObjFormat.MA_XYVC = msgJsObj.dd52;
    msgJsObjFormat.wTimeDog = msgJsObj.dd53;
    msgJsObjFormat.XYV_LOCK = msgJsObj.dd54;
    msgJsObjFormat.XYVC = msgJsObj.dd55;
    msgJsObjFormat.k = msgJsObj.dd56;

    resolve(msgJsObjFormat);
  }).then((msg) => {
    that.$store.commit("wtS7SetDatas", msg);
  });
};
//以前的信息
let manageInfoData = (msg) => {
  // //console.log(msg);
  // that.$store.commit("wtS7SetDatasSta", msg); //
  // that.$store.commit("wtS7SetInfoDatas", msg);//
};
// 这是谭哥给的数据  进行解析

//报警的处理
let manageDataAlert = (msg) => {
  // //console.log("触发了报警的回应");
  // let len = that.$store.state.wtS7.AlertArrayLen;
  // //console.log(msg);

  // 验证接收到的数据Sid如果超出了，数据数组的地址范围，那么舍去

  that.$store.commit("MLS7SetAlarmDatas", msg); //
};

//报警限制的处理数组
let manageDataAlarmLimit = (msg) => {
  new Promise((resolve, reject) => {
    // //console.log("``````````````A是总的有实际的值有设定的值````````````````");
    // let A = that.$store.getters.MLRestrictArray_shezhi;

    // //console.log(A);
    // //console.log("``````````````B是实际的值````````````````");
    // let B = that.$store.getters.wtS7Datas;
    // //console.log(B);
    // let C = msg;
    // //console.log("---------------------------CCCCCC-----------------");
    // //console.log(C);

    // for (let i = 0; i < A.length; i++) {
    //  for (let j = 0; j < C.length; j++) {
    //   if (A[i].sid === C[j].sid){
    //     //console.log("GGGGGGGGGGGGGGGGGGGGGGG");
    //     //console.log(i);
    //     //console.log(j);
    //     A[i].sid=C[j].sid;
    //     A[i].BP21A=C[j].BP21A;
    //     A[i].BP21FB=C[j].BP21FB;
    //     A[i].BP22A=C[j].BP22A;
    //     A[i].BP22FB=C[j].BP22FB;
    //     A[i].FV1FB=C[j].FV1FB;
    //     A[i].XYV=C[j].XYV;
    //     A[i].LTL=C[j].LTL;
    //     A[i].LTLL=C[j].LTLL;
    //     A[i].LTH=C[j].LTH;
    //     A[i].LTHH=C[j].LTHH;
    //     A[i].PT21H=C[j].PT21H;
    //     A[i].PT21HH=C[j].PT21HH;
    //     A[i].PT22L=C[j].PT22L;
    //     A[i].PT22LL=C[j].PT22LL;
    //     A[i].PT22HH=C[j].PT22HH;

    //   }

    //  }

    // }
    // //console.log(`AAAAAAA`);
    // //console.log(A);
    resolve(msg);
  }).then((msg) => {
    // //console.log('采集数据进仓库前msg是什么？')
    // //console.log(msg)
    that.$store.commit("AAA", msg); //把msg放入仓库//
  });
};

//通讯报警处理
let manageDataComerr = (msg) => {
  new Promise((resolve, reject) => {
    let a = 1;
    resolve(msg);
  }).then((msg) => {
    // //console.log('采集数据进仓库前msg是什么？')
    // //console.log(msg)
    that.$store.commit("MLComerrArray", msg); //把msg放入仓库//
  });
};
let manageDataAlarmAll = (msg) => {
  // //console.log("报警----------all");
  // //console.log(msg);
  that.$store.commit("wtS7Alarmall", msg); //
};
let manageDataAlarmSplice = (msg) => {
  that.$store.commit("wtS7Alarmsplice", msg); //
};

let manageDataAlarmAdd = (msg) => {
  that.$store.commit("wtS7Alarmadd", msg); //
};
let manageDataAlarmSelect = (msg) => {
  that.$store.commit("wtS7Alarmselect", msg); //
};

let sxque = (msg) => {
  that.$store.commit("sx_que_m", msg); //
};
const Stname = ["首站", "1#", "2#", "二中站", "北站", "朝阳站", "二中站"];
// 根据采集到的地址判断站点的名字
let sidName = (sid, Stname) => {
  return Stname[sid];
};
export default {
  stationData,
  stationAlarmData,

  manageDataDD,
  manageInfoData,
  manageDataAlarmLimit,
  manageDataAlarm,
  manageDataInfo,
  manageDataTeCon,

  manageDataComerr,
  managecurveupdate,
  manageDataAlarmAll,
  manageDataAlarmSplice,
  manageDataAlarmAdd,
  manageDataAlarmSelect,
  sxque,
};
