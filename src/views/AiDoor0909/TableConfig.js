// let _this = null
// //  this 指向问题*。
// const sendThis = (e) => {
//   _this = e
// }

// // 列表header
const tableHeader = [
  {
    lable: "表号",
    prop: "Sid",
    type: "text",
    isHidden: false,
    // width: "80px",
    fixed: "left"
  },
  {
    lable: "集中器号",
    prop: "ConcentratorCode",
    //  fixed: "left",
    // width: "120px",

    isHidden: false, //是否显示
    type: "text" //类型子组件根据类型去循环遍历

    // callback: (row, props) => {
    //   let colorNum = row[props]
    //   return styltColor(colorNum)
    // }
  },
  {
    lable: "户阀号",
    prop: "ValveCode",
    //  fixed: "left",
    // width: "120px",

    isHidden: false, //是否显示
    type: "text" //类型子组件根据类型去循环遍历

    // callback: (row, props) => {
    //   let colorNum = row[props]
    //   return styltColor(colorNum)
    // }
  },

  {
    lable: "站点",
    prop: "Station",
    type: "text",
    isHidden: false
    // fixed: "left",
    // width: "110PX"
    // callback: (row, props) => {
    //   return { color: "red" }
    // }
  },
  {
    lable: "小区",
    prop: "Housing",
    type: "text",
    // width: "80PX",
    isHidden: false
  },
  {
    lable: "楼",
    prop: "Tower",
    type: "text",
    // width: "80PX",

    isHidden: false
  },
  {
    lable: "单元",
    prop: "Unit",
    type: "text",
    // width: "80PX",

    isHidden: false
  },
  {
    lable: "室",
    prop: "Num",
    type: "text",
    // width: "80PX",

    isHidden: false
  },
  // {
  //   lable: "联系人",
  //   prop: "HouseholderName",
  //   type: "text",
  //   // width: "80PX",

  //   isHidden: false
  // },
  // {
  //   lable: "电话",
  //   prop: "Phone",
  //   type: "text",
  //   // width: "80PX",

  //   isHidden: false
  // },
  {
    lable: "日期",
    prop: "SdateTE",
    type: "text",
    // width: "120PX",
    isHidden: false
  },
  {
    lable: "时间",
    prop: "StimeTE",
    type: "text",
    // width: "120PX",
    isHidden: false
  },

  {
    lable: "回温（℃）",
    prop: "TE",
    type: "style", //stylt
    slotName: "TE",
    // width: "100PX",
    isHidden: false //是否显示
    // callback: (row, props) => {
    //   let colorNum = row[props]
    //   return styltColor(colorNum)
    // }
  },
  {
    lable: "阀门反馈（%）",
    prop: "FVFB",
    type: "text", //stylt
    slotName: "TE",
    // width: "100PX",
    isHidden: false //是否显示
  },
  {
    lable: "阀门给定 （%）",
    prop: "FVSP",
    // Load: "Load",
    type: "slot",
    // width: "110PX",
    slotName: "FVSP",
    isHidden: false //是否显示
  },
  {
    lable: "操作",
    // prop: "TE",
    type: "slot",
    slotName: "operation",
    // minWidth: "12.5%",
    width: "350PX",
    isHidden: false //是否显示
    // callback: (row, props) => {
    //   let colorNum = row[props]
    //   return styltColor(colorNum)
    // }
  }
]

export { tableHeader }
