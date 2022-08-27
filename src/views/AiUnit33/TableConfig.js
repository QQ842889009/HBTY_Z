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

    isHidden: false, //是否显示
    type: "text", //类型子组件根据类型去循环遍历
    fixed: "left"
  },

  {
    lable: "站点",
    prop: "Station",
    type: "text",
    isHidden: false,
    fixed: "left"
  },
  {
    lable: "小区",
    prop: "Housing",
    type: "text",
    fixed: "left",

    isHidden: false
  },
  {
    lable: "楼",
    prop: "Tower",
    type: "text",
    fixed: "left",

    isHidden: false
  },
  {
    lable: "单元",
    prop: "Unit",
    type: "text",
    fixed: "left",

    isHidden: false
  },

  {
    lable: "日期",
    prop: "SdateTE",
    type: "text",
    fixed: "left",
    isHidden: false
  },
  {
    lable: "时间",
    prop: "StimeTE",
    type: "text",
    fixed: "left",
    isHidden: false
  },
  {
    lable: "1#阀门给定 （%）",
    prop: "FVSP",
    width: "100PX",
    type: "slot",

    slotName: "FVSP",
    isHidden: false //是否显示
  },
  {
    lable: "1#阀门反馈（%）",
    prop: "FVFB",
    type: "text", //stylt
    slotName: "TE",
    // width: "100PX",
    isHidden: false //是否显示
  },

  {
    lable: "供温（℃）",
    prop: "FVFB",
    type: "text",
    align: "left",

    isHidden: false
  },
  {
    lable: "回温（℃）",
    prop: "FVFB",
    type: "text",

    isHidden: false
  },
  {
    lable: "供压（MPa）",
    prop: "FVFB",
    type: "text",

    isHidden: false
  },
  {
    lable: "回压（MPa）",
    prop: "FVFB",
    type: "text",

    isHidden: false
  },
  {
    lable: "2#阀门给定 （%）",
    prop: "FVSP",

    type: "slot",
    width: "100PX",
    slotName: "FVSP",
    isHidden: false //是否显示
  },
  {
    lable: "2#阀门反馈（%）",
    prop: "FVFB",
    type: "text", //stylt
    slotName: "TE",

    isHidden: false //是否显示
  },

  {
    lable: "供温（℃）",
    prop: "FVFB",
    type: "text",

    isHidden: false
  },
  {
    lable: "回温（℃）",
    prop: "TE",
    type: "text",

    isHidden: false
  },
  {
    lable: "供压（MPa）",
    prop: "TE",
    type: "text",

    isHidden: false
  },
  {
    lable: "回压（MPa）",
    prop: "TE",
    type: "text",

    isHidden: false
  },

  {
    lable: "操作",
    fixed: "right",
    type: "slot",
    slotName: "operation",

    width: "400PX",
    isHidden: false //是否显示
    // callback: (row, props) => {
    //   let colorNum = row[props]
    //   return styltColor(colorNum)
    // }
  }
]

export { tableHeader }
