/*
 *FtLine所需要的列表数组
 */
export default {




  一网温度: {
    0: {
      name: "供温",   //echart图表提示框的名字和右上角按钮的名字
      value: "一供温度"   //echart的encode的y值，
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
    seriesLength: 2,//series的数量，决定echart图表显示几条数据
  },


}
