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
          top: "50%",
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
            offset: 180,
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
            offset: 140,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              formatter: ["{a|光照：{value}(Lux)}"].join("\n"),
              rich: {
                a: {
                  color: 'white',
                  fontSize:15,
                },
              },
            },
            data:this.getWeatherOption(this.weatherInfo,"beam")
            // nameTextStyle: {},
          },
          //#endregion
           //#region 风力
           {
            id: "wind_po",
            type: "category",
            boundaryGap: false,
            position: "top",
            offset: 100,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              formatter: ["{a|风力：{value}(级)}"].join("\n"),
              rich: {
                a: {
                  color: 'white',
                  fontSize:15,
                },
              },
            },
            data:this.getWeatherOption(this.weatherInfo,"wind_po")
            // nameTextStyle: {},
          },
          //#endregion
           //#region 风向
           {
            id: "windDir",
            type: "category",
            boundaryGap: false,
            position: "top",
            offset: 60,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              formatter: ["{a|风向：{value}}"].join("\n"),
              rich: {
                a: {
                  color: 'white',
                  fontSize: 15,
                },
              },
            },
            data:this.getWeatherOption(this.weatherInfo,"windDir")
            // nameTextStyle: {},
          },
          //#endregion
          // 风速
          {
            id: "windSp",
            type: "category",
            boundaryGap: false,
            position: "top",
            offset: 20,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              formatter: ["{a|风速：{value}(m/s)}"].join("\n"),
              rich: {
                a: {
                  color: 'white',
                  fontSize: 15,
                },
              },
            },
            data:this.getWeatherOption(this.weatherInfo,"wind_sp")
            // nameTextStyle: {},
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
              width: 1,
              color: "red",
            },
            areaStyle: {
              opacity: 1,
              color: "transparent",
            },
          },
          {
            name: "湿度",
            type: "line",
            encode: { x: 'created_time', y: "humidity" },
            symbol: "emptyCircle",
            symbolSize: 20,
            showSymbol: true,
            smooth: true,
            itemStyle: {
              color: "rgb(34, 182, 241)",
            },
            label: {
              show: true,
              position: "bottom",
              color: "white",
              fontSize: "18",
              formatter(value) {
                var temp = value.data.humidity
                return temp + "(%RH)"
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
            image: require("assets/img/wind/" + objV[index].windDir + ".png"),
          },
          height:50,
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

    getWeatherIcon(data){
      let iconArr=[];
      for (let index = 0; index < data.length; index++) {
        const element = data[index].icon;
        iconArr.push(element)
      }
      return iconArr;
    },
    getWeatherOption(data,option){
      let iconArr=[];
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
  top:1%;
  
}
</style>