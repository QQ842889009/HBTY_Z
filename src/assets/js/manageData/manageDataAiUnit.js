import that from "@/main.js";
import moment from "moment";
////////////////////////////////////////////////////
//引入that是因为，js文件不认识总系统的Vue也就是那个this

//Ai单元信息**
let aiUnitInfos = (msg) => {
  that.$store.commit("aiUnitInfos", msg);
};

//Ai单元数据的处理
let aiUnitData = (msg) => {
  new Promise((resolve, reject) => {
    let msgJsObj = msg;
    let msgJsObjFormat = {
      Sid: "000",
      TE1: 0,
      TE2: 0,
      TE3: 0,
      TE4: 0,
      PT1: 0,
      PT2: 0,
      PT3: 0,
      PT4: 0,
      FV1FB: 0,
      FV2FB: 0,
      FVSP: 0,
      FVFB: 0,
      TE: 0,
      NUM: 0,
    };

    // msgJsObjFormat.Sid = parseInt(msgJsObj.Sid.slice(2), 16);

    msgJsObjFormat.Sid = msgJsObj.sid;

    msgJsObjFormat.SdateTE = msgJsObj.map.aiData.sdate;
    msgJsObjFormat.StimeTE = msgJsObj.map.aiData.stime;

    // msgJsObjFormat.TE1 =
    //   msgJsObj.map.aiData.te1 > msgJsObj.map.aiData.te2
    //     ? msgJsObj.map.aiData.te1.toFixed(1)
    //     : msgJsObj.map.aiData.te2.toFixed(1);
    // msgJsObjFormat.TE2 =
    //   msgJsObj.map.aiData.te1 > msgJsObj.map.aiData.te2
    //     ? msgJsObj.map.aiData.te2.toFixed(1)
    //     : msgJsObj.map.aiData.te1.toFixed(1);

    // msgJsObjFormat.TE3 =
    //   msgJsObj.map.aiData.te3 > msgJsObj.map.aiData.te4
    //     ? msgJsObj.map.aiData.te3.toFixed(1)
    //     : msgJsObj.map.aiData.te4.toFixed(1);

    // msgJsObjFormat.TE4 =
    //   msgJsObj.map.aiData.te3 > msgJsObj.map.aiData.te4
    //     ? msgJsObj.map.aiData.te4.toFixed(1)
    //     : msgJsObj.map.aiData.te3.toFixed(1);

    // msgJsObjFormat.PT1 =
    //   msgJsObj.map.aiData.pt1 > msgJsObj.map.aiData.pt2
    //     ? msgJsObj.map.aiData.pt1.toFixed(2)
    //     : msgJsObj.map.aiData.pt2.toFixed(2);
    // msgJsObjFormat.PT2 =
    //   msgJsObj.map.aiData.pt1 > msgJsObj.map.aiData.pt2
    //     ? msgJsObj.map.aiData.pt2.toFixed(2)
    //     : msgJsObj.map.aiData.pt1.toFixed(2);

    // msgJsObjFormat.PT3 =
    //   msgJsObj.map.aiData.pt3 > msgJsObj.map.aiData.pt4
    //     ? msgJsObj.map.aiData.pt3.toFixed(2)
    //     : msgJsObj.map.aiData.pt4.toFixed(2);

    // msgJsObjFormat.PT4 =
    //   msgJsObj.map.aiData.pt3 > msgJsObj.map.aiData.pt4
    //     ? msgJsObj.map.aiData.pt4.toFixed(2)
    //     : msgJsObj.map.aiData.pt3.toFixed(2);

    msgJsObjFormat.TE1 = msgJsObj.map.aiData.te1;
    msgJsObjFormat.TE2 = msgJsObj.map.aiData.te2;
    msgJsObjFormat.TE3 = msgJsObj.map.aiData.te3;
    msgJsObjFormat.TE4 = msgJsObj.map.aiData.te4;
    msgJsObjFormat.PT1 = msgJsObj.map.aiData.pt1;
    msgJsObjFormat.PT2 = msgJsObj.map.aiData.pt2;
    msgJsObjFormat.PT3 = msgJsObj.map.aiData.pt3;
    msgJsObjFormat.PT4 = msgJsObj.map.aiData.pt4;

    msgJsObjFormat.FV1FB = msgJsObj.map.aiData.fv1fb;
    msgJsObjFormat.FV2FB = msgJsObj.map.aiData.fv2fb;
    msgJsObjFormat.NUM = msgJsObj.map.aiData.aiNum;

    resolve(msgJsObjFormat);
  }).then((msg) => {
    that.$store.commit("aiUnitData", msg); //把msg放入仓库
  });
};
//Ai单元信号强度的处理
let SignalInfo = (msg) => {
  new Promise((resolve, reject) => {
    let msgJsObj = msg;
    let msgJsObjFormat = {
      Sid: "000",
      tag: 0,
      versions: "1111",
    };

    msgJsObjFormat.Sid = msgJsObj.sid;
    msgJsObjFormat.tag = msgJsObj.map.signalInfo.signalNum;
    msgJsObjFormat.versions = msgJsObj.map.signalInfo.versionCode;

    resolve(msgJsObjFormat);
  }).then((msg) => {
    that.$store.commit("SignalInfo", msg); //把msg放入仓库
  });
};

export default {
  ///
  aiUnitInfos,
  aiUnitData,
  SignalInfo,
};
