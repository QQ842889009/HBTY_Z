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
export { inDoorDataInitTemplate, doorDataInitTemplate, aiUnitDataInitTemplate }
