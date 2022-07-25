<!-- 带达标线的折线图 -->
<template>
  <div class="ftLineBox" :style="{ width: '100%', height: this.boxHeight }">
    <div class="title-box">
      <div class="title-left">
        <div class="tipText" v-show=this.isTitleShow>
          <img class="tt" src="~@/assets/img/logo/yiji.png" alt="">
          {{ title_name }}</div>
      </div>
    </div>
    <div ref="myEchart" class="myEchart"></div>
  </div>
</template>

<script>
import echarts from "components/echart/echartsVue.js";

export default {
  data() {
    return {
      myChart: null,
      option: {},
    };
  },
  created() {},
  props: {
    getData: {
      type: Array,
      default: ()=>[
        {
          SdateTE: "2022-6-31-10:00",
          TE: "20",
        },
        {
          SdateTE: "2022-6-31-10:20",
          TE: "32",
        },
        {
          SdateTE: "2022-6-31-10:30",
          TE: "18",
        },
      ],
    },
    //标题
    title_name: {
      type: String,
      default: "24小时室温",
    },
    seriesType: {
      type: String,
      default: "line",
    },
    // xData: Array,
    // yData: Array,
    //y轴单位
    yUnit: {
      type: String,
      default: "℃",
    },
    boxHeight: {
      type: String,
      default: "100%",
    },
    //达标温度
    dbTem:{
      type:String,
      default:"20",
    },
    /*  width: {
      type: String,
      default: "100%",
    }, */
    isTitleShow:true,
  },
  computed: {
    girdNum() {
      //根据boxHeight计算girdNum的大小，使图表正确显示大小
      var hv = parseFloat(this.boxHeight);
      return ((100 - hv) / 4 + 15).toString() + "%";
    },
  },
  mounted() {
    // console.log(Object.keys(this.getData[0]));
    this.$nextTick(function () {
      this.init();
    });
  },
  watch: {
    getData: {
      handler() {
        this.myChart.clear();
        // this.myChart.setOption(this.option);
        this.init();
        // console.log("EchartLine----data", this.getData);
      },
      deep: true,
    },
  },
  methods: {
    init() {
      if (this.myChart == null) {
        // this.myChart = setTimeout(echarts.init(this.$refs.dw),500);
        this.myChart = echarts.init(this.$refs.myEchart);
      }
      // console.log("init被调用了");
      this.option = {
        // backgroundColor: "rgb(6, 17, 39)", //背景颜色
        title: {},
        tooltip: {
          trigger: "axis", //柱状、曲线坐标轴触发，如果默认的话散点、饼图触发
          axisPointer: {
            //坐标轴指示器
            type: "line", //默认为line，line直线，cross十字准星，shadow阴影
            lineStyle: {
              color: "#43abeb",
              width: 3,
              //type: "dashed",
            },
          },
          backgroundColor: "#061028", // 背景颜色
          borderColor: "#00bae4",

          textStyle: {
            color: "#fff", //提示框的字体颜色
            fontSize: 15, //提示框的文字大小
          },
        },
        toolbox: {},

        xAxis: {
          type: "category", //整体X坐标轴的类型，离散值

          boundaryGap: false,
          axisLabel: {
            //不显示X轴的每一项的标签s
            show: true,
            formatter:function(p){
              // console.log('axias-------',p)
              return p.substr(5)
            },
          },
          axisTick: {
            //不显示X轴的每一项的刻度
            show: false,
          },
          axisLine: {
            lineStyle: {
              //坐标轴线
              color: "rgb(34, 182, 241)", //这里是改变颜色
              width: 2,
            },
          },
        },
        grid: {
          //绘图版的大小
          top: "8%",
          left: "7%",
          right: "7%",
          bottom: this.girdNum,
          //height:this.boxHeight,
          // containLabel: true, // 距离是包含坐标轴上的文字
        },
        yAxis: {
          name: this.yUnit,
          // nameTextStyle: { align: "left" }, //坐标轴文字的对齐
          nameGap: "1", //名字距离轴线的距离
          axisLine: {
            //坐标轴线
            show: true,
            lineStyle: {
              //坐标轴线
              color: "rgb(34, 182, 241)", //这里是改变颜色
              width: 2,
            },
            axisLabel: {
              textStyle: {
                color: "#0D82FF", //轴文字颜色
                fontSize: "9", //y轴文字大小
              },
            },
          },
          splitLine: { show: false }, //y轴的分割线
        },
        dataset: [
          //datasetIndex: 0,
          { source: this.getData }, //数据源
          //datasetIndex: 1,
        ],
        series: {
          name: "温度",
          type: this.seriesType,
          smooth: true,
          color:'rgb(34, 182, 241)',
          markLine: {
            lineStyle: { color: "yellow", opaciy: 1 },

            data: [
              {
                yAxis: 16,
                name: "Avg",
                label: {
                  formatter: "达标室温（"+this.dbTem+"℃）",
                  color:'yellow',
                  position:'insideEndTop'
                },
              },
            ],
          },
          encode: { x: "SdateTE", y: "TE" },
        },
      };
      if (this.option && typeof this.option === "object") {
        this.myChart.setOption(this.option, true);
      }
      window.addEventListener("resize", () => {
        this.myChart.resize(); //图形随着窗口缩放
      });
    },

    clickBtn(item, index) {
      this.choiceIndex = index;
      console.log(this.choiceIndex);
      // setTimeout(this.init(),500) ;
      if (this.getData.length != 0) {
        this.init();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ftLineBox {
  margin-top: 1rem;
  //  background-color: rgb(26, 218, 218);
  // background-color: rgba(17, 35, 43, 0.6);
}
.title-box {
  height: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-top: 10px;
  font-size: 14px;

  // background-color: red;

  .tipText {
    flex: 1;
    // background-color: rgb(46, 216, 131);
    position: relative;
    // top: rem;
    left: 1rem;
    bottom: 0.5rem;
    color: #fff(22, 141, 238);
       .tt{
      width: 0.5rem;
      height: 1.5rem;}
  }

  .title-left {
    flex: 1;
    // justify-content: center;
    // background-color: rgb(32, 223, 191);
    // background-color: rgb(64, 10, 126);
    // position: absolute;
    // left: 10px;
    // padding: 20px;
    //padding-left: 30px;
  }

  .title-right {
    flex: 1;
    //height: 100%;
    //width: 10px;
    //text-align: right;
    display: flex;
    justify-content: flex-end;
    // align-items: center;
    //justify-content:flex-end;
    position: relative;
    right: 265px;
    // background-color: rgb(96, 235, 53);
  }
}
.myEchart {
  height: 100%;
  width: 100%;
}
</style>
