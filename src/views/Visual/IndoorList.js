/*
 *FtLine所需要的列表数组
 */
export default {
  室内温度: {
    0: {
      name: "室温", //echart图表提示框的名字和右上角按钮的名字
      value: "temp" //echart的encode的y值，
    },
    1: {
      name: "时间",
      value: "event_time"
    },
    // 2: {
    //   name: "温差",
    //   value: "一网温差"
    // },
    xSeries: "event_time", //echart的encode的x值，
    seriesLength: 1 //series的数量，决定echart图表显示几条数据
  },
  带户阀的单元阀: {
    0: {
      name: "温度1", //echart图表提示框的名字和右上角按钮的名字
      value: "te1" //echart的encode的y值，
    },
    1: {
      name: "温度2", //echart图表提示框的名字和右上角按钮的名字
      value: "te2" //echart的encode的y值，
    },
    2: {
      name: "温度3", //echart图表提示框的名字和右上角按钮的名字
      value: "te3" //echart的encode的y值，
    },
    3: {
      name: "温度4", //echart图表提示框的名字和右上角按钮的名字
      value: "te4" //echart的encode的y值，
    },
    4: {
      name: "压力1", //echart图表提示框的名字和右上角按钮的名字
      value: "pt1" //echart的encode的y值，
    },
    5: {
      name: "压力2", //echart图表提示框的名字和右上角按钮的名字
      value: "pt2" //echart的encode的y值，
    },
    6: {
      name: "压力3", //echart图表提示框的名字和右上角按钮的名字
      value: "pt3" //echart的encode的y值，
    },
    7: {
      name: "压力4", //echart图表提示框的名字和右上角按钮的名字
      value: "pt4" //echart的encode的y值，
    },
    8: {
      name: "阀门反馈1", //echart图表提示框的名字和右上角按钮的名字
      value: "fv1fb" //echart的encode的y值，
    },
    9: {
      name: "阀门反馈2", //echart图表提示框的名字和右上角按钮的名字
      value: "fv2fb" //echart的encode的y值，
    },

    // 2: {
    //   name: "温差",
    //   value: "一网温差"
    // },
    xSeries: "created_time", //echart的encode的x值，
    seriesLength: 10 //series的数量，决定echart图表显示几条数据
  },
  户阀曲线: {
    0: {
      name: "回温", //echart图表提示框的名字和右上角按钮的名字
      value: "return_water_te" //echart的encode的y值，
    },
    1: {
      name: "时间",
      value: "created_time"
    },
    // 2: {
    //   name: "温差",
    //   value: "一网温差"
    // },
    xSeries: "created_time", //echart的encode的x值，
    seriesLength: 1 //series的数量，决定echart图表显示几条数据
  },
  单独单元阀: {
    0: {
      name: "温度1", //echart图表提示框的名字和右上角按钮的名字
      value: "te1" //echart的encode的y值，
    },
    1: {
      name: "温度2", //echart图表提示框的名字和右上角按钮的名字
      value: "te2" //echart的encode的y值，
    },
    2: {
      name: "温度3", //echart图表提示框的名字和右上角按钮的名字
      value: "te3" //echart的encode的y值，
    },
    3: {
      name: "温度4", //echart图表提示框的名字和右上角按钮的名字
      value: "te4" //echart的encode的y值，
    },
    4: {
      name: "压力1", //echart图表提示框的名字和右上角按钮的名字
      value: "pt1" //echart的encode的y值，
    },
    5: {
      name: "压力2", //echart图表提示框的名字和右上角按钮的名字
      value: "pt2" //echart的encode的y值，
    },
    6: {
      name: "压力3", //echart图表提示框的名字和右上角按钮的名字
      value: "pt3" //echart的encode的y值，
    },
    7: {
      name: "压力4", //echart图表提示框的名字和右上角按钮的名字
      value: "pt4" //echart的encode的y值，
    },
    8: {
      name: "阀门反馈1", //echart图表提示框的名字和右上角按钮的名字
      value: "fv1fb" //echart的encode的y值，
    },
    9: {
      name: "阀门反馈2", //echart图表提示框的名字和右上角按钮的名字
      value: "fv2fb" //echart的encode的y值，
    },

    xSeries: "created_time", //echart的encode的x值，
    seriesLength: 10 //series的数量，决定echart图表显示几条数据
  }
}
