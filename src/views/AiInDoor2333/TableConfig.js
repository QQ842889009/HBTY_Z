let _this = null
//  this 指向问题*。
const sendThis = (e) => {
  _this = e
}

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
    lable: "设备编号",
    prop: "Sn",
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
    prop: "Community",
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
  {
    lable: "联系人",
    prop: "HouseholderName",
    type: "text",
    // width: "80PX",

    isHidden: false
  },
  {
    lable: "电话",
    prop: "Phone",
    type: "text",
    // width: "80PX",

    isHidden: false
  },
  {
    lable: "刷新时间",
    prop: "SdateTE",
    type: "text",
    // width: "120PX",
    isHidden: false
  },

  {
    lable: "室温（℃）",
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
    lable: "操作",
    // prop: "TE",
    type: "slot",
    slotName: "operation",
    // minWidth: "12.5%",
    width: "300PX",
    isHidden: false //是否显示
    // callback: (row, props) => {
    //   let colorNum = row[props]
    //   return styltColor(colorNum)
    // }
  }

  // {
  //   lable: "阀门给定input（%）",
  //   prop: "FVSP",
  //   Load: "Load",
  //   type: "input",
  //   width: "110PX",
  //   slotName: "FVSP",
  //   isHidden: false, //是否显示
  //   callback: (row, props) => {
  //     console.log("row", row)
  //     inDoorFvsp(row.Sid, row.FVSP)
  //   }
  // },
  // {
  //   lable: "操作",
  //   type: "operation",
  //   isHidden: false,
  //   // width: "500PX",
  //   options: [
  //     {
  //       label: "历史查询",
  //       code: "gggg",

  //       icon: "iconfont icon-chain",

  //       type: "primary",

  //       method: (index, row) => {
  //         //条用
  //         teHistory(row.Sn, _this.starttime, _this.endtime)
  //       }
  //     },
  //     {
  //       label: "删除fff",
  //       type: "primary",
  //       code: "fff",
  //       icon: "iconfont icon-chain",

  //       method: (index, row) => {
  //         _this.fff(index, row)
  //       }
  //     }
  //   ]
  // }
]

export { tableHeader, sendThis }
