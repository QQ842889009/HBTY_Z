<template>
  <div :style="{height:'100%', width:'100%'}">
    <div ref="weather" class="weatherBox" :style="{ height: this.height }">
    </div>
    <div class="title1"> 光照: </div>
    <div class="title2"> 风力: </div>
    <div class="title3"> 风向: </div>
    <div class="title4"> 风速: </div>
    <div class="title5"> 湿度: </div>
    <div class="title6"> 温度 </div>
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
  props: {
    height: {
      type: String,
      default: "90%",
    },
    weatherInfo: [],
  },
  created() {
  },
  watch: {
    weatherInfo: {
      handler() {
        this.init();
        // this.myChart.setOption(this.option);
        // console.log("外面传进来的信息", this.weatherInfo)
      },
      deep: true,
    },
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
          top: "55%",
          left: "8%",
          right: "5%",
          bottom: "5%",
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
          top: "65%",
          right: "95%",
          itemWidth: 30,
          itemHeight: 20,
          itemGap: 15,
          textStyle: {
            color: 'white',
            fontSize: 16,
          }
        },
        xAxis: [
          //#region 日期
          {
            id: "data",
            type: "category",
            boundaryGap: false,
            position: "top",
            offset: 200,
            // zlevel: 120,
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
                  fontSize: 13,
                  shadowBlur: 1,
                  borderWidth: 4,
                  borderColor: '#3498db',
                  borderRadius: 2,
                  borderspacing: 10,
                  padding: 10,
                },
              },
            },
            // nameTextStyle: {},
          },
          //#endregion
          //#region 光照
          {
            id: "beam",
            type: "category",
            boundaryGap: false,
            position: "top",
            offset: 160,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              formatter: ["{a|{value}(Lux)}"].join("\n"),
              rich: {
                a: {
                  color: 'white',
                  fontSize: 15,
                  borderWidth: 4,
                  borderColor: '#3498db',
                  borderRadius: 2,
                  borderspacing: 10,
                  padding: [8, 4],
                },
              },
            },
            data: this.getWeatherOption(this.weatherInfo, "beam")
            // nameTextStyle: {},
          },
          //#endregion
          //#region 风力
          {
            id: "wind_po",
            type: "category",
            boundaryGap: false,
            position: "top",
            offset: 120,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              formatter: ["{a|{value}(级)}"].join("\n"),
              rich: {
                a: {
                  color: 'white',
                  fontSize: 15,
                  borderWidth: 4,
                  borderColor: '#3498db',
                  borderRadius: 2,
                  borderspacing: 10,
                  padding: [8, 4],
                },
              },
            },
            data: this.getWeatherOption(this.weatherInfo, "wind_po")
            // nameTextStyle: {},
          },
          //#endregion
          //#region 风向
          {
            id: "windDir",
            type: "category",
            boundaryGap: false,
            position: "top",
            offset: 80,
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
                  fontSize: 15,
                  borderWidth: 4,
                  borderColor: '#3498db',
                  borderRadius: 2,
                  borderspacing: 10,
                  padding: [8, 4],
                },
              },
            },
            data: this.getWeatherOption(this.weatherInfo, "windDir")
            // nameTextStyle: {},
          },
          //#endregion
          // #region风速
          {
            id: "windSp",
            type: "category",
            boundaryGap: false,
            position: "top",
            offset: 40,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              formatter: ["{a|{value}(m/s)}"].join("\n"),
              rich: {
                a: {
                  color: 'white',
                  fontSize: 15,
                  borderWidth: 4,
                  borderColor: '#3498db',
                  borderRadius: 2,
                  borderspacing: 10,
                  padding: [8, 4],
                },
              },
            },
            data: this.getWeatherOption(this.weatherInfo, "wind_sp")
            // nameTextStyle: {},
          },
          //#endregion

          // #region湿度
          {
            id: "humidity",
            type: "category",
            boundaryGap: false,
            position: "top",
            offset: 0,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              formatter: ["{a|{value}(m/s)}"].join("\n"),
              rich: {
                a: {
                  color: 'white',
                  fontSize: 15,
                  borderWidth: 4,
                  borderColor: '#3498db',
                  borderRadius: 2,
                  borderspacing: 10,
                  padding: [8, 4],
                },
              },
            },
            data: this.getWeatherOption(this.weatherInfo, "humidity")
            // nameTextStyle: {},
          },
          //#endregion

        ],
        yAxis: {
          type: "value",
          show: false,
          axisLabel: {
            // formatter: "{value} °C",
            color: "white",
            margin: 50,
            fontSize: 16,
          },
        },

        dataset: [
          { source: this.weatherInfo }
        ],
        series: [
          {
            name: "温度",
            type: "line",
            encode: {
              x: "created_time",
              y: "te"
            },
            symbol: "emptyCircle",
            symbolSize: 20,
            showSymbol: true,
            smooth: true,
            itemStyle: {
              color: "#C95843",
            },
            label: {
              show: true,
              position: "bottom",
              color: "white",
              fontSize: "18",
              formatter(value) {
                var temp = value.data.te
                return temp + "(℃)"
              },
            },
            lineStyle: {
              width: 3,
              color: "red",
            },
            areaStyle: {
              opacity: 1,
              color: "transparent",
            },
          },
          // {
          //   name: "湿度",
          //   type: "line",
          //   encode: { x: 'created_time', y: "humidity" },
          //   symbol: "emptyCircle",
          //   symbolSize: 20,
          //   showSymbol: true,
          //   smooth: true,
          //   itemStyle: {
          //     color: "rgb(34, 182, 241)",
          //   },
          //   label: {
          //     show: true,
          //     position: "bottom",
          //     color: "white",
          //     fontSize: "18",
          //     formatter(value) {
          //       var temp = value.data.humidity
          //       return temp + "(%RH)"
          //     },
          //   },
          //   lineStyle: {
          //     width: 3,
          //     color: "rgb(34, 182, 241) ",
          //   },
          //   areaStyle: {
          //     opacity: 1,
          //     color: "transparent",
          //   },
          // },
        ],
      };
      var obj = {};
      // var objV = this.option.xAxis[1].data
      var objV = this.weatherInfo
      // console.log('vvvvvvvvv---v', objV)
      for (let index = 0; index < objV.length; index++) {
        obj[index] = {
          backgroundColor: {
            image: require("assets/img/wind/" + objV[index].windDir + ".png"),
          },
          height: 50,
        }
      }
      obj["b"] = {
        color: "white",
        fontSize: 13,
        lineHeight: 30,
        height: 20,
      }
      // this.option.xAxis[4].axisLabel.rich = obj;
      // console.log('obj---------', this.option.xAxis)
      this.$nextTick(() => {
        this.myChart.resize();
      })
      if (this.option && typeof this.option === "object") {
        this.myChart.clear();
        this.myChart.setOption(this.option, true);
      }
      // this.myChart.setOption(this.option, true);
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },

    getWeatherIcon(data) {
      let iconArr = [];
      for (let index = 0; index < data.length; index++) {
        const element = data[index].icon;
        iconArr.push(element)
      }
      return iconArr;
    },
    getWeatherOption(data, option) {
      let iconArr = [];
      for (let index = 0; index < data.length; index++) {
        const element = data[index][option];
        iconArr.push(element)
      }
      // console.log('awrdafawfaw',iconArr)
      return iconArr;
    }
  },
};
</script>

<style lang="scss" scoped>
.weatherBox {
  // background: #3b99cf;
  width: 100%;
  // height: 10%;
  top: 4%;
  // left: 3%;
  // display:inline-block;

}

.title1 {
  width: 4%;
  // height: 7%;
  font-size: 22px;
  position: absolute;
  top: 13%;
  left: 0.5%;
  text-align: center;
  background: rgba(11, 66, 114, 0.8);
  border: 3px solid #3498db;
  box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
}

.title2 {
  width: 4%;
  font-size: 22px;
  position: absolute;
  top: 21%;
  left: 0.5%;
  text-align: center;
  background: rgba(11, 66, 114, 0.8);
  border: 3px solid #3498db;
  box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
}

.title3 {
  width: 4%;
  font-size: 22px;
  position: absolute;
  top: 29%;
  left: 0.5%;
  text-align: center;
  background: rgba(11, 66, 114, 0.8);
  border: 3px solid #3498db;
  box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
}

.title4 {
  width: 4%;
  font-size: 22px;
  position: absolute;
  top: 37%;
  left: 0.5%;
  text-align: center;
  background: rgba(11, 66, 114, 0.8);
  border: 3px solid #3498db;
  box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
}

.title5 {
  width: 4%;
  font-size: 22px;
  position: absolute;
  top: 45%;
  left: 0.5%;
  text-align: center;
  background: rgba(11, 66, 114, 0.8);
  border: 3px solid #3498db;
  box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
}

.title6 {
  width: 3%;
  height: 30%;
  font-size: 30px;
  position: absolute;
  top: 60%;
  left: 0.5%;
  text-align: center;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  writing-mode: vertical-lr;
  letter-spacing: 20px;
  background: rgba(11, 66, 114, 0.8);
  border: 3px solid #3498db;
  box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
}
</style>