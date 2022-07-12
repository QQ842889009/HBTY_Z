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
      default: "100%",
    },
  },
  created(){

  },
  mounted() {
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
          top: "180",
          left: "7%",
          right: "1%",
          // bottom: "1%",
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
          /*   {
            type: "category",
            boundaryGap: false,
            position: "top",
            offset: 140,
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
            data: ["25日", "26日", "27日", "28日", "29日", "30日", "31日"],
          }, */
          //#endregion
          //#region 星期
          /* {
            type: "category",
            boundaryGap: false,
            position: "top",
            offset: 120,
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
                  color: "white",
                  fontSize: 14,
                },
              },
            },
            nameTextStyle: {
              fontWeight: "bold",
              fontSize: 19,
            },
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          }, */
          //#endregion
          // 天气图标
          {
            type: "category",
            boundaryGap: false,
            position: "top",
            offset: 20,
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
                return "{" + index + "| }\n{b|" + value + "}";
              },
              rich: {
                0: {
                  backgroundColor: {
                    // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[0]] + '.png')
                    image: "https://d.scggqx.com/forecast/img/小雨.png",
                  },
                  height: 40,
                  width: 40,
                },
                1: {
                  backgroundColor: {
                    // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[1]] + '.png')
                    image: "https://d.scggqx.com/forecast/img/小雨.png",
                  },
                  height: 40,
                  width: 40,
                },
                2: {
                  backgroundColor: {
                    // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[2]] + '.png')
                    image: "https://d.scggqx.com/forecast/img/阴.png",
                  },
                  height: 40,
                  width: 40,
                },
                3: {
                  backgroundColor: {
                    // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[3]] + '.png')
                    image: "https://d.scggqx.com/forecast/img/小雨.png",
                  },
                  height: 40,
                  width: 40,
                },
                4: {
                  backgroundColor: {
                    // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[4]] + '.png')
                    image: "https://d.scggqx.com/forecast/img/多云.png",
                  },
                  height: 40,
                  width: 40,
                },
                5: {
                  backgroundColor: {
                    // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[5]] + '.png')
                    image: "https://d.scggqx.com/forecast/img/小雨.png",
                  },
                  height: 40,
                  width: 40,
                },
                6: {
                  backgroundColor: {
                    // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[6]] + '.png')
                    image: "https://d.scggqx.com/forecast/img/小雨.png",
                  },
                  height: 40,
                  width: 40,
                },
                b: {
                  color: "white",
                  fontSize: 12,
                  lineHeight: 30,
                  height: 20,
                },
              },
            },
            nameTextStyle: {
              fontWeight: "bold",
              fontSize: 19,
            },
            // data: this.weatherdata.weather
            data: ["小雨", "小雨", "阴", "小雨", "多云", "小雨", "小雨"],
          },
        ],
        yAxis: {
          type: "value",
          show: false,
          axisLabel: {
            formatter: "{value} °C",
            // color: "white",
          },
        },
        series: [
          {
            name: "最高气温",
            type: "line",
            data: ["20.3", "20.2", "20.6", "25.2", "20.6", "28.7", "14.3"],
            symbol: "emptyCircle",
            symbolSize: 10,
            showSymbol: true,
            smooth: true,
            itemStyle: {
              normal: {
                color: "#C95843",
              },
            },
            label: {
              show: true,
              position: "top",
              color: "white",
              formatter: "{c} °C",
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
            data: ["13.4", "12.8", "13.5", "12.5", "12.4", "13.2", "13"],
            symbol: "emptyCircle",
            symbolSize: 10,
            showSymbol: true,
            smooth: true,
            itemStyle: {
              normal: {
                color: "#3b99cf",
              },
            },
            label: {
              show: true,
              position: "bottom",
              color: "white",
              formatter: "{c} °C",
            },
            lineStyle: {
              width: 1,
              color: "#3498db ",
            },
            areaStyle: {
              opacity: 1,
              color: "transparent",
            },
          },
        ],
      };
      this.myChart.setOption(this.option, true);
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.weatherBox {
  // background:yellow;
  width: 80%;
  left: 10%;
  top: -180px;
}
</style>