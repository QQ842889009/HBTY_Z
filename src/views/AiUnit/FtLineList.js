/*
 *FtLine所需要的列表数组
 */
export default {
  // 一网温度: [
  //   {
  //     name: "供温",
  //     value: "一供温度"
  //   },
  //   {
  //     name: "回温",
  //     value: "一回温度"
  //   },
  //   {
  //     name: "温差",
  //     value: "一网温差"
  //   }
  // ],
  一网温度: {
    0: {
      name: "供温", //echart图表提示框的名字和右上角按钮的名字
      value: "一供温度" //echart的encode的y值，
    },
    1: {
      name: "回温",
      value: "一回温度"
    },
    2: {
      name: "温差",
      value: "一网温差"
    },
    xSeries: "站点", //echart的encode的x值，
    seriesLength: 2 //series的数量，决定echart图表显示几条数据
  },
  一网压力: {
    0: {
      name: "供压",
      value: "一供压力"
    },
    1: {
      name: "回压",
      value: "一回压力"
    },
    2: {
      name: "压差",
      value: "一网压差"
    },
    xSeries: "站点",
    seriesLength: 2 //series的数量，决定echart图表显示几条数据
  },
  一网流量: {
    0: {
      name: "流量",
      value: "一供流量"
    },
    xSeries: "站点",
    seriesLength: 1 //series的数量，决定echart图表显示几条数据
  },
  二网温度: {
    0: {
      name: "供温",
      value: "二供温度"
    },
    1: {
      name: "回温",
      value: "二回温度"
    },
    2: {
      name: "温差",
      value: "二网温差"
    },
    xSeries: "站点",
    seriesLength: 2 //series的数量，决定echart图表显示几条数据
  },
  二网压力: {
    0: {
      name: "供压",
      value: "二供压力"
    },
    1: {
      name: "回压",
      value: "二回压力"
    },
    2: {
      name: "压差",
      value: "二网压差"
    },
    xSeries: "站点",
    seriesLength: 2 //series的数量，决定echart图表显示几条数据
  },
  二网流量: {
    0: {
      name: "流量",
      value: "二供流量"
    },
    xSeries: "站点",
    seriesLength: 1 //series的数量，决定echart图表显示几条数据
  },

  补水流量: {
    0: {
      name: "补水流量",
      value: "补水流量"
    },
    xSeries: "站点",
    seriesLength: 1
  },
  供热量: {
    0: {
      name: "一网热量",
      value: "一网热量"
    },
    1: {
      name: "二网热量",
      value: "二网热量"
    },
    xSeries: "站点",
    seriesLength: 2
  },
  一网供压: {
    0: {
      name: "一网供压",
      value: "PT11"
    },
    xSeries: "SdateTime",
    seriesLength: 1
  },
  一网实时压力: {
    0: {
      name: "一网供压",
      value: "pt11"
    },
    1: {
      name: "一网回压",
      value: "pt12"
    },
    xSeries: "SdateTime",
    seriesLength: 2
  },
  一网实时温度: {
    0: {
      name: "一网供温",
      value: "te11"
    },
    1: {
      name: "一网回温",
      value: "te12"
    },
    xSeries: "SdateTime",
    seriesLength: 2
  },
  二网实时压力: {
    0: {
      name: "二网供压",
      value: "pt21"
    },
    1: {
      name: "二网回压",
      value: "pt22"
    },
    xSeries: "SdateTime",
    seriesLength: 2
  },
  二网实时温度: {
    0: {
      name: "二网供温",
      value: "te21"
    },
    1: {
      name: "二网回温",
      value: "te22"
    },
    xSeries: "SdateTime",
    seriesLength: 2
  },
  单元阀曲线: {
    0: {
      name: "TE1",
      value: "te1"
    },
    1: {
      name: "TE2",
      value: "te2"
    },
    2: {
      name: "TE3",
      value: "te3"
    },
    3: {
      name: "TE4",
      value: "te4"
    },
    4: {
      name: "PT1",
      value: "pt1"
    },
    5: {
      name: "PT2",
      value: "pt2"
    },
    6: {
      name: "PT3",
      value: "pt3"
    },
    7: {
      name: "PT4",
      value: "pt4"
    },
    8: {
      name: "FV1FB",
      value: "fv1fb"
    },
    9: {
      name: "FV2FB",
      value: "fv2fb"
    },
    xSeries: "created_time",
    seriesLength: 10
  }
}
