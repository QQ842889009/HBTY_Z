<template>
  <div
    ref="ftBarBox" class="ftBarBox"
    style="width: 100%; height: 100%; filter: opacity(1)"
  ></div>
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
  created() {
    // console.log(this.getData);
  },
  props: {
    getData: Array,
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
    // console.log(this.getData);
  },

  watch: {
    getData: {
      handler() {
        this.myChart.setOption(this.option);
      },
      deep: true,
    },
  },
  methods: {
    init() {
      this.myChart = echarts.init(this.$refs.ftBarBox);

      this.option = {
        color: [
          //调整默认颜色
          "#5470c6",
          "#91cc75",
          "#fac858",
          "#ee6666",
          "#73c0de",
          "#3ba272",
          "#fc8452",
          "#9a60b4",
          "#ea7ccc",
        ],

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
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },

        legend: {
          //图列
          show: true,
          textStyle: {
            color: "#fff",
          },
          right: "10%",
        },
        dataset: {
          // dimensions: ["Station", "TE11", "TE12"],//优先级最高，如果你不写，系统会默认寻找

          source: this.getData, //数据源
        },

        xAxis: {
          type: "category", //整体X坐标轴的类型，离散值
          name: "站点", //整体X坐标轴的名称
          nameLocation: "center", //整体X坐标轴的名称的位置
          boundaryGap: false,
          nameTextStyle: {
            //坐标轴刻度
            fontWeight: "bolder",
            fontSize: "0.32rem",
          },
          axisLabel: {
            //不显示X轴的每一项的标签
            show: false,
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
          top: "5%",
          left: "7%",
          right: "5%",
          bottom: "7%",
          // containLabel: true, // 距离是包含坐标轴上的文字
        },
        yAxis: {
          name: "℃",
          nameTextStyle: { align: "right" }, //坐标轴文字的对齐

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

        series: [
          {
            type: "bar",
            name: "一网温度",
            symbol: "triangle",
            color: "rgb(26, 218, 218)",
            encode: { x: "Station", y: "TE11" },
          },
          {
            type: "bar",
            name: "二网温度",
            symbol: "triangle",
            color: "yellow",
            encode: { x: "Station", y: "TE12" },
          },
        ],
      };
      this.myChart.setOption(this.option);
      window.addEventListener("resize", () => {
        this.myChart.resize(); //图形随着窗口缩放
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.ftBarBox {
  width: 100%;
  height: 100%;
   background-color: rgba(5, 31, 54,0.8);
}
</style>
