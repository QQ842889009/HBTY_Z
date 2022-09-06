<template>
  <div ref="weather" class="weatherBox" :style="{ height: this.height }"></div>
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
  props: {
    height: {
      type: String,
      default: "90%",
    },
    city: {
      type: String,
      default: "唐山市",
    },
    weatherInfo: [],
  },
  created() {
  },
  mounted() {
    // console.log("外面传进来的信息", this.weatherInfo)
    this.$nextTick(function () {
      this.init();

    });
  },
  methods: {
    init() {
      if (this.myChart == null) {
        this.myChart = echarts.init(this.$refs.weather);
      }
      this.option = {
        grid: {
          show: true,
          backgroundColor: "transparent",
          opacity: 0.3,
          borderWidth: "0",
          top: "60%",
          left: "5%",
          right: "5%",
          bottom: "1%",
        },
        tooltip: {
          trigger: "axis",

          backgroundColor: "#061028", // 背景颜色
          borderColor: "#00bae4",

          textStyle: {
            color: "#fff", //提示框的字体颜色
            fontSize: 15, //提示框的文字大小
          },
        },
        legend: {
          show: false,
        },
        xAxis: [
          //#region 日期
          {
            id: "data",
            type: "category",
            boundaryGap: false,
            position: "top",
            offset: 60,
            zlevel: 100,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              formatter: ["{a|{value}}"].join("\n"),
              rich: {
                a: {
                  color: 'white',
                  fontSize: 18,
                },
              },
            },
            // nameTextStyle: {},
          },
          //#endregion
          // 天气图标
          {
            id: "icon",
            type: "category",
            boundaryGap: false,
            backgroundColor: 'red',
            position: "top",
            offset: 10,
            // zlevel: 100,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              formatter: function (value, index) {
                // console.log('format3333333', index)
                return "{" + index + "| }";
              },
              rich: "",
            },
            nameTextStyle: {
              fontWeight: "bold",
              fontSize: 19,
            },
            data:this.getWeatherIcon(this.weatherInfo)
          },

        ],
        yAxis: {
          type: "value",
          show: false,
          axisLabel: {
            // formatter: "{value} °C",
            // color: "white",
          },
        },
        dataset: [
          { source: this.weatherInfo }
        ],
        series: [
          {
            name: "最高气温",
            type: "line",
            encode: {
              x: "datetime",
              y: "tempmax"
            },
            symbol: "emptyCircle",
            symbolSize: 10,
            showSymbol: true,
            smooth: true,
            itemStyle: {
              color: "#C95843",
            },
            label: {
              show: true,
              position: "top",
              color: "white",
              fontSize: "16",
              formatter(value) {
                var temp = value.data.tempmax
                return temp + "℃"
              },
            },
            lineStyle: {
              width: 1,
              color: "red",
            },
            areaStyle: {
              opacity: 1,
              color: "transparent",
            },
          },
          {
            name: "最低气温",
            type: "line",
            encode: { x: 'datetime', y: "tempmin" },
            symbol: "emptyCircle",
            symbolSize: 10,
            showSymbol: true,
            smooth: true,
            itemStyle: {
              color: "rgb(34, 182, 241)",
            },
            label: {
              show: true,
              position: "bottom",
              color: "white",
              fontSize: "16",
              formatter(value) {
                var temp = value.data.tempmin
                return temp + "℃"
              },
            },
            lineStyle: {
              width: 1,
              color: "rgb(34, 182, 241) ",
            },
            areaStyle: {
              opacity: 1,
              color: "transparent",
            },
          },
        ],
      };
      var obj = {};
      // var objV = this.option.xAxis[1].data
      var objV = this.weatherInfo
      // console.log('vvvvvvvvv---v', objV)
      for (let index = 0; index < objV.length; index++) {
        obj[index] = {
          backgroundColor: {
            image: require("assets/img/weather/" + objV[index].icon + ".png"),
          },
          height: 40,
        }
      }
      obj["b"] = {
        color: "white",
        fontSize: 13,
        lineHeight: 30,
        height: 20,
      }
      this.option.xAxis[1].axisLabel.rich = obj;
      // console.log('obj---------', this.option.xAxis)
      this.$nextTick(() => {
        this.myChart.resize();
      })
      this.myChart.setOption(this.option, true);
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },

    getWeatherIcon(data){
      let iconArr=[];
      for (let index = 0; index < data.length; index++) {
        const element = data[index].icon;
        iconArr.push(element)
      }
      return iconArr;
    }
  },
};
</script>

<style lang="scss" scoped>
.weatherBox {
  // background: #3b99cf;
  width: 90%;
  // height: 10%;
  left: 7%;
  top: -160px;
}
</style>