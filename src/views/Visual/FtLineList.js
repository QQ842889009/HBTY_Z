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
    seriesLength: 2,//series的数量，决定echart图表显示几条数据
  },
  一网流量: {
    0: {
      name: "流量",
      value: "一供流量"
    },
    xSeries: "站点",
    seriesLength: 1,//series的数量，决定echart图表显示几条数据
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
    seriesLength: 2,//series的数量，决定echart图表显示几条数据
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
    seriesLength: 2,//series的数量，决定echart图表显示几条数据
  },
  二网流量: {
    0: {
      name: "流量",
      value: "二供流量"
    },
    xSeries: "站点",
    seriesLength: 1,//series的数量，决定echart图表显示几条数据
  },

  补水流量: {
    0: {
      name: "补水流量",
      value: "补水流量"
    },
    xSeries: "站点",
    seriesLength: 1
  } ,
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
  一网供压:{
    0:{
      name:"一网供压",
      value:"PT11"
    },
    xSeries:"SdateTime" ,
    seriesLength: 1
  },
  一网实时压力:{
    0:{
      name:"一网供压",
      value:"pt11"
    },
    1:{
      name:"一网回压",
      value:"pt12"
    },
    xSeries:"SdateTime" ,
    seriesLength: 2
  },
  一网实时温度:{
    0:{
      name:"一网供温",
      value:"te11"
    },
    1:{
      name:"一网回温",
      value:"te12"
    },
    xSeries:"SdateTime" ,
    seriesLength: 2
  },
  二网实时压力:{
    0:{
      name:"二网供压",
      value:"pt21"
    },
    1:{
      name:"二网回压",
      value:"pt22"
    },
    xSeries:"SdateTime" ,
    seriesLength: 2
  },
  二网实时温度:{
    0:{
      name:"二网供温",
      value:"te21"
    },
    1:{
      name:"二网回温",
      value:"te22"
    },
    xSeries:"SdateTime" ,
    seriesLength: 2
  },
  温度:{
    0:{
      name:"一网供温",
      value:"te11"
    },
    1:{
      name:"一网回温",
      value:"te12"
    },
    2:{
      name:"二网供温",
      value:"te21"
    },
    3:{
      name:"二网回温",
      value:"te22"
    },
    4:{
      name:"二回补水后温度",
      value:"te22_MP"
    },
    5:{
      name:"二网一分支回温",
      value:"te221"
    },
    6:{
      name:"二网二分支回温",
      value:"te222"
    },
    7:{
      name:"二网三分支回温",
      value:"te223"
    },
    8:{
      name:"二网四分支回温",
      value:"te224"
    }, 
    9:{
      name:"二网五分支回温",
      value:"te225"
    }, 
    10:{
      name:"二网六分支回温",
      value:"te226"
    },
    11:{
      name:"二网七分支回温",
      value:"te227"
    }, 
    12:{
      name:"二网八分支回温",
      value:"te228"
    }, 
    13:{
      name:"二网九分支回温",
      value:"te229"
    }, 
    14:{
      name:"二网十分支回温",
      value:"te22A"
    },
    15:{
      name:"一网总回温度",
      value:"te12_Z"
    },  
    xSeries:"SdateTime" ,
    seriesLength: 16
  },
  压力:{
    0:{
      name:"一网供压",
      value:"pt11"
    },
    1:{
      name:"一网回压",
      value:"pt12"
    },
    2:{
      name:"二网供压",
      value:"pt21"
    },
    3:{
      name:"二网回压",
      value:"pt22"
    },
    4:{
      name:"二网回压",
      value:"pt11_FV"
    },
    5:{
      name:"一网阀后压力",
      value:"pt21_FV"
    },
    6:{
      name:"二网回压",
      value:"pt22_BF"
    },
    7:{
      name:"二网回压",
      value:"pt22_BL"
    },
    xSeries:"SdateTime" ,
    seriesLength: 4
  },
  阀门:{
    0:{
      name:"二网供温",
      value:"te11"
    },
    1:{
      name:"二网回温",
      value:"te22"
    },
    xSeries:"SdateTime" ,
    seriesLength: 2
  },
  流量:{
    0:{
      name:"一网流量",
      value:"ft11"
    },
    1:{
      name:"二网回温",
      value:"ft21"
    },
    2:{
      name:"二网回温",
      value:"ft31"
    },
    xSeries:"SdateTime" ,
    seriesLength: 2
  },
  频率:{
    0:{
      name:"二网供温",
      value:"ft11"
    },
    1:{
      name:"二网回温",
      value:"ft22"
    },
    xSeries:"SdateTime" ,
    seriesLength: 2
  },


}
