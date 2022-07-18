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
      location: "",
      keyWeather: "BSSPJ3TEPQH7BV8W5J759DHC5",
      keyGaode: "3c28c781f2aa4227580098e95db055e0",
      weatherInfo: {},
      weatherArr: [],
      tempmaxArr: [],
      tempminArr: [],
      conditionsArr: [],
      isGet: false,
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
  },
  created() {
    // console.log(this.location.length==0);
    this.weatherGet();
    // console.log(Object.keys(this.weatherInfo).length);
    // console.log(this.weatherInfo)
  },
  mounted() {
    this.$nextTick(function () {  
        this.init();     

    });
  },
  methods: {
    //获取时间戳 var timestamp1 = Date.parse (new Date ());
    async weatherGet() {
      this.location = localStorage.getItem('location')
      if (this.location == null) {
        const { data: res } = await this.$http.get(
          `position?key=${this.keyGaode}&address=${this.city}`
        );
        console.log("城市的经纬度请求", res);
        // console.log(res.geocodes[0].location);
        console.log(res.status);
        if (res.status == 1) {
          //status为0，表示请求失败，status为1，表示请求成功
          var temp = res.geocodes[0].location;
          var arr = temp.split(",");
          var lo = arr.splice(-1) + "," + arr
          localStorage.setItem('location', lo)
        }
      }
      this.location = localStorage.getItem('location')
      console.log("----location-----", this.location);
      this.weatherInfo = JSON.parse(localStorage.getItem('weather'))
      if (this.weatherInfo == null) {
        const { data: res } = await this.$http.get(
          `api/${this.location}/next7days?unitGroup=metric&key=${this.keyWeather}`
          // `api/London,UK/2020-12-01/2020-12-31?key=${this.keyWeather}`
        );
        localStorage.setItem('weather', JSON.stringify(res))
        console.log("天气的请求", res);
      }
      this.weatherInfo = JSON.parse(localStorage.getItem('weather'));
      this.weatherArr = this.weatherInfo.days
      console.log("----weatherInfo-----", this.weatherInfo);
      console.log("----weatherArr-----", this.weatherArr);
      for (let index = 0; index < this.weatherArr.length; index++) {
        this.tempmaxArr.push(this.weatherArr[index].tempmax);
        this.tempminArr.push(this.weatherArr[index].tempmin);
        this.conditionsArr.push(this.weatherArr[index].icon);
      }
    },
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
            backgroundColor: 'red',
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
                console.log('format3333333', value, index)
                //   console.log("{" + index + "| }\n{b|" + value + "}")
                // return "{" + index + "| }\n{b|" + value + "}";
                return "{" + index + "| }";
                // return "{a|"+index+""
                // console.log('value-------',value)
                // return "{(" + value + ")|}\n{b|" + value + "}";
              },
              rich: "",
              //#region     rich: {
              //       0: {
              //         backgroundColor: {
              //           // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[0]] + '.png')
              //           image: require("assets/img/weather/rain.png"),
              //         },
              // height: 40,
              //         // width: 64,
              //       },
              //       1: {
              //         backgroundColor: {
              //           // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[1]] + '.png')
              //           image: require("assets/img/weather/rain.png"),
              //         },
              //         height: 40,
              //         // width: 40,
              //       },
              //       2: {
              //         backgroundColor: {
              //           // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[2]] + '.png')
              //           image: require("assets/img/weather/cloudy.png"),
              //         },
              //         height: 40,
              //         // width: 40,
              //       },
              //       3: {
              //         backgroundColor: {
              //           // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[3]] + '.png')
              //           image: require("assets/img/weather/rain.png"),
              //         },
              //         height: 40,
              //         // width: 40,
              //       },
              //       4: {
              //         backgroundColor: {
              //           // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[4]] + '.png')
              //           image: require("assets/img/weather/partly-cloudy-day.png"),
              //         },
              //         height: 40,
              //         // width: 40,
              //       },
              //       5: {
              //         backgroundColor: {
              //           // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[5]] + '.png')
              //           image: require("assets/img/weather/cloudy.png"),
              //         },
              //         height: 40,
              //         // width: 40,
              //       },
              //       6: {
              //         backgroundColor: {
              //           // image: require('@/assets/weather_icon/' + this.weatherIconDic[this.weatherdata.weather[6]] + '.png')
              //           image: require("assets/img/weather/snow.png"),
              //         },
              //         height: 40,
              //         // width: 40,
              //       },
              //       b: {
              //         color: "white",
              //         fontSize: 12,
              //         lineHeight: 30,
              //         height: 20,
              //     },
              //#endregion },    
            },
            nameTextStyle: {
              fontWeight: "bold",
              fontSize: 19,
            },
            data: this.conditionsArr
            // data: ["小雨", "小雨", "阴", "小雨", "多云", "多云", "小雪"],
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
            data: this.tempmaxArr,
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
            data: this.tempminArr,
            symbol: "emptyCircle",
            symbolSize: 10,
            showSymbol: true,
            smooth: true,
            itemStyle: {
              normal: {
                color: "rgb(34, 182, 241)",
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
      this.option.xAxis.filter(v => {
        console.log('vvvvvvvvvv', v)
        var data = v.data;
        for (let index = 0; index < data.length; index++) {
          obj[index] = {
            backgroundColor: {
              image: require("assets/img/weather/" + data[index] + ".png"),
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
      }
      );
      console.log('obj---------', obj)
      this.option.xAxis[0].axisLabel.rich = obj;
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
  // background: #3b99cf;
  width: 90%;
  // height: 10%;
  left: 7%;
  top: -160px;
}
</style>