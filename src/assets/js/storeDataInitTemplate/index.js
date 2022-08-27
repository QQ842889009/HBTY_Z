const inDoorDataInitTemplate = {
  Sid: 0,
  Station: "还未定义", //站
  Branch: "还未定义", //分支
  Housing: "还未定义", //小区
  Tower: "还未定义", //楼
  Unit: "还未定义", //单元
  Num: "还未定义", //号

  Community: "还未定义",
  Sn: "还未定义", //用户编号
  Phone: "还未定义", //电话
  HouseholderName: "还未定义", //用户姓名
  WayHeating: "还未定义", //方式  地暖还是片暖
  Sort: 0,
  TE: "", //室内温度
  SdateTE: "还未上传" //室内温度上传时间
}

const doorDataInitTemplate = {
  Sid: 0,
  Station: "",
  Branch: "",
  Housing: "",
  Tower: "",
  Unit: "",
  Num: "",

  versions: 0, //
  ValveCode: 0, //户阀号
  ConcentratorCode: 0 //集中器号
}
const aiUnitDataInitTemplate = {
  Sid: 0,
  Signa: 0, //信号强度
  ConcentratorCode: 0, //集中器号
  Station: "", //换热站
  Branch: "", //分支
  Housing: "", //小区
  Unit: "" //单元
}
const stationDataInitTemplate = {
  Sid: 0,
  Station: 0,
  Space: 0,
  SdateTime: "2030-09-11",
  TimesTamp: 0,
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
  Y1a1: 0,
  Y1a2: 0,
  ZFT31: 0,
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
  ylA3: 0,
  FV1SP_H: 0,
  FV1SP_L: 0,
  TE21SP: 0,
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
  PT22XY_H: 0,
  PT22XY_L: 0,
  FT1SP_Stime: 0,
  FT1SP_Atime: 0,
  FT2SP_Stime: 0,
  FT2SP_Atime: 0,
  BP21C: 0,
  BP22C: 0,
  BP_TR: 0,
  MP1C: 0,
  MP2C: 0,
  MP_TR: 0,
  XYC: 0,
  MA_FV1: 0,
  MA_BP2: 0,
  MA_MP: 0,
  MA_XVY: 0,
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
  MA_FV1_TE21: 0,
  SBPC: 0,
  MA_SBP: 0,
  ylD01: 0,
  ylD02: 0,
  ylD03: 0,
  ylD04: 0,
  ylD05: 0,
  ylD06: 0,
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
  TE2X: 0
}
const realtimeTemplate = {
  SdateTime: "2030-09-11",
  TE11: 0,
  TE12: 0,
  TE21: 0,
  TE22: 0,
  PT11: 0,
  PT12: 0,
  PT21: 0,
  PT22: 0
}
const stationTemplate = {
  Station: 0,
  Sid: 0,
  Space: 0
}
const echartdataType = {
  Sid: "000",
  一供压力: 0,
  一供流量: 0,
  一供温度: 0,
  一回压力: 0,
  一回温度: 0,
  一网温差: 0,
  一网压差: 0,
  二供压力: 0,
  二供流量: 0,
  二供温度: 0,
  二回压力: 0,
  二回温度: 0,
  二网温差: 0,
  二网压差: 0,
  日期时间: 0,
  时间戳: 0,
  液位: 0,
  站点: 0,
  补水流量: 0,
  面积: 0,
  一网热量: 0,
  二网热量: 0
}
//换热站报警的初始化
// const stationAlarm = {
//   alarmConfirm: false,
//   Station: "",
//   Branch: "",
//   Housing: "",
//   Tower: "",
//   Unit: "",
//   Num: "",

//   versions: 0, //
//   ValveCode: 0, //户阀号
//   ConcentratorCode: 0 //集中器号
// }
export {
  inDoorDataInitTemplate,
  doorDataInitTemplate,
  aiUnitDataInitTemplate,
  stationDataInitTemplate,
  realtimeTemplate,
  stationTemplate,
  echartdataType
}
