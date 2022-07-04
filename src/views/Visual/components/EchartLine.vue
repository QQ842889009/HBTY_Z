<!-- 室内温度页面用达标线折线图 -->
<template>
  <div class="ftLineBox" :style="{ width: '100%', height: this.boxHeight }">
    <div class="title-box">
      <div class="title-left">
        <div class="tipText">{{ title_name }}</div>
      </div>
      <div class="title-right">
        <div
          class="btnList"
          @click="clickBtn(btn, index)"
          :style="index == choiceIndex ? clickColor : normalColor"
          v-for="(btn, index) of btnsList"
          :key="index"
        >
          {{ btn.name }}
        </div>
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
      choiceIndex: 0,
      btnsList: [
        {
          name: "默认",
        },
        {
          name: "温度",
        },
      ],
      normalColor: {
        color: "rgb(22, 141, 238)",
      },
      clickColor: {
        // color:'green',
        textShadow: "0 0 10px red,0 0 20px red,0 0 30px red,0 0 40px red",
      },
    };
  },
  created() {},
  props: {
    //数据
    getData: {
      type: Array,
    },
    //标题
    title_name: {
      type: String,
      default: "姓名",
    },
    seriesType: {
      type: String,
      default: "line",
    },

    //y轴单位
    yUnit: {
      type: String,
      default: "℃",
    },
    boxHeight: {
      type: String,
      default: "100%",
    },
  },
  computed: {
    echartKyes() {
      return Object.keys(this.getData[0]);
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
        console.log("EchartLine----data", this.getData);
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
      console.log("init被调用了");
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
          //#region   x轴名称设置//
          /*   name: "站点", //整体X坐标轴的名称
          nameLocation: "center", //整体X坐标轴的名称的位置
          boundaryGap: false,
          nameTextStyle: {
            //坐标轴刻度
            fontWeight: "bolder",
            fontSize: "0.32rem",
          }, */
          //#endregion
          boundaryGap: false,
          axisLabel: {
            //不显示X轴的每一项的标签
            show: false,
          },
          axisTick: {
            //不显示X轴的每一项的刻度
            show: true,
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
          left: "5%",
          right: "5%",
          bottom: "7%",
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
          {
            transform: {
              type: "sort",
              config: { dimension: "temp", order: "asc" },
            },
          },
        ],
        series: {
          name: "温度",
          type: this.seriesType,
          datasetIndex: this.choiceIndex,
          markLine: {
            lineStyle: { color: "red", opaciy: 1 },
            silent: true,
            data: [
              {
                yAxis: 16,
                name: "Avg",
                label: {
                  formatter: "达标室温（16℃）",
                },
              },
            ],
          },
          encode: { x: "event_time", y: "temp" },
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
}
.title-box {
  height: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-top: 10px;
  font-size: 18px;
  z-index: 1;
  // background-color: red;

  .tipText {
    flex: 1;
    // background-color: rgb(46, 216, 131);
    position: relative;
    // top: rem;
    left: 0.5rem;
    color: rgb(22, 141, 238);
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

  .btnList {
    //position: relative;
    //width: 20%;
    // height: 40px;
    // font-size: 18px;
    // align-items: center;
    padding-left: 5%;
    color: rgb(22, 141, 238);
    white-space: nowrap;
    text-decoration: none;

    z-index: 1;
  }
}
.myEchart {
  height: 100%;
  width: 100%;
}
</style>
