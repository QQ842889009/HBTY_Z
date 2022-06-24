import { styltColor, inDoorFvsp2, teHistory } from "@/utils/common"

let inDoorTableHeader = [
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
    prop: "sn",
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
    prop: "station",
    type: "text",
    isHidden: false,
    fixed: "left"
    // width: "110PX",
    // callback: (row, props) => {
    //   return { color: "red" }
    // }
  },
  {
    lable: "小区",
    prop: "community",
    type: "text",

    isHidden: false
  },
  {
    lable: "楼",
    prop: "tower",
    type: "text",
    // width: "90PX",

    isHidden: false
  },
  {
    lable: "单元",
    prop: "unit",
    type: "text",
    // width: "90PX",

    isHidden: false
  },
  {
    lable: "室",
    prop: "num",
    type: "text",
    // width: "90PX",

    isHidden: false
  },
  {
    lable: "联系人",
    prop: "householderName",
    type: "text",
    // width: "90PX",

    isHidden: false
  },
  {
    lable: "电话",
    prop: "phone",
    type: "text",
    // width: "90PX",

    isHidden: false
  },
  {
    lable: "刷新时间",
    prop: "SdateTE",
    type: "text",
    // width: "100PX",
    isHidden: false
  },

  {
    lable: "室温（℃）",
    prop: "TE",
    type: "input", //stylt
    slotName: "TE",
    // width: "73PX",
    isHidden: false //是否显示
    // callback: (row, props) => {
    //   let colorNum = row[props]
    //   return styltColor(colorNum)
    // }
  },
  // {
  //   lable: "是否达标",
  //   prop: "TE",
  //   align: "center",
  //   type: "function",
  //   num: 20,
  //   // slotName: "tag",
  //   isHidden: false, //是否显示,
  //   callback: (row, prop) => {
  //     console.log("aaaaa,,,,", row)
  //     if (row[prop] >= 22) {
  //       return "是"
  //     }
  //     if (row[prop] < 22) {
  //       return "否"
  //     }
  //   }
  //   // render: (row) => {
  //   //   if (row.TE >= 18) {
  //   //     return "合格"
  //   //   } else if (row.TE < 17) {
  //   //     return "冷"
  //   //   } else if (row.TE === 22) {
  //   //     return "未发布"
  //   //   }
  //   // }
  // },

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
  {
    lable: "操作",
    type: "operation",
    isHidden: false,
    // width: "500PX",
    options: [
      {
        label: "历史查询",
        code: "gggg",

        icon: "iconfont icon-chain",

        type: "primary",

        method: (index, row) => {
          //条用
          teHistory(row.sn, _this.starttime, _this.starttime)
        }
      },
      {
        label: "删除fff",
        type: "primary",
        code: "fff",
        icon: "iconfont icon-chain",

        method: (index, row) => {
          _this.fff(index, row)
        }
      }
    ]
  }
]

export { inDoorTableHeader }
