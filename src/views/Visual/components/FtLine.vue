<!-- 排序散点图无边框 -->
<template>
  <div class="ftLineBox" :style="{ width: '100%', height: this.boxHeight }">
    <div class="title-box">
      <div class="title-left">
        <div class="tipText" v-show="this.isTitleShow">
          <img class="tt" src="~@/assets/img/logo/yiji.png" alt="" />
          {{ title_name }}
        </div>
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
import ftLineList from "../FtLineList";
export default {
  data() {
    return {
      myChart: null,
      option: {},
      choiceIndex: 0,
      normalColor: {
        color: "white",
      },
      clickColor: {
        // color:'green',
        textShadow: "0 0 10px red,0 0 20px red,0 0 30px red,0 0 40px red",
      },
    };
  },
  created() {
    // console.log('ftlinelist------------',ftLineList);
    //  console.log('ftline------------',ftLineList[this.title_name]);
    // console.log(this.btnsList);
  },
  props: {
    getData: Array,
    //标题
    title_name: {
      type: String,
      default: "一网温度",
    },
    seriesType: {
      type: String,
      default: "scatter",
    },
    // xData: Array,
    // yData: Array,
    //y轴单位
    yUnit: {
      type: String,
      default: "",
    },
    boxHeight: {
      type: String,
      default: "100%",
    },
    /*  width: {
      type: String,
      default: "100%",
    }, */
    isTitleShow: true,
  },
  computed: {
    echartKyes() {
      return Object.keys(this.getData[0]);
    },

    btnsList() {
      return ftLineList[this.title_name];
    },
    //gird中bottom的值
    girdNum() {
      //根据boxHeight计算girdNum的大小，使图表正确显示大小
      var hv = parseFloat(this.boxHeight);
      return ((100 - hv) / 4 + 8).toString() + "%";
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
        this.myChart.setOption(this.option);
      },
      deep: true,
    },
    /*  choiceIndex: {
       handler() {
        // this.myChart.setOption(this.option);
         console.log('setOption被调用了')
       },
       deep: true,
     }, */
  },
  methods: {
    init() {
      if (this.myChart == null) {
        // this.myChart = setTimeout(echarts.init(this.$refs.dw),500);
        this.myChart = echarts.init(this.$refs.myEchart);
      }

      // console.log('init被调用')

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
        toolbox: {
          // feature: {
          //   saveAsImage: {},
          // },
        },

        legend: {
          //图列
          show: false,
          textStyle: {
            color: "#fff",
          },
          right: "10%",
        },

        xAxis: {
          type: "category", //整体X坐标轴的类型，离散值
          //#region   x轴名称设置
        // name: "站点", //整体X坐标轴的名称
        //   nameLocation: "center", //整体X坐标轴的名称的位置
          boundaryGap: false,
          nameTextStyle: {
            //坐标轴刻度
            fontWeight: "bolder",
            fontSize: "0.32rem",
          }, 
          //#endregion
          boundaryGap: false,
          axisLabel: {
            //不显示X轴的每一项的标签
            show: true,
          },
          axisTick: {
            //不显示X轴的每一项的刻度
            show: false,
          },
          //data: this.xData,
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
          top: "10%",
          left: "8%",
          right: "5%",
          bottom: this.girdNum,
          //height:this.boxHeight,
          // containLabel: true, // 距离是包含坐标轴上的文字
        },
        yAxis: {
          name: this.yUnit,
          nameTextStyle: { align: "right" }, //坐标轴文字的对齐
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
          // dimensions: ["Station", "TE11", "TE12"],//优先级最高，如果你不写，系统会默认寻找
          //datasetIndex: 0,
          { source: this.getData }, //数据源
          //datasetIndex: 1,
          {
            transform: {
              type: "sort",
              config: {
                dimension: this.btnsList[this.choiceIndex].value,
                order: "asc",
              },
            },
          },
        ],
        series: (() => {
          var series = [];
          //  console.log('ser',this);
          var index = 0;
          do {
            var item = {
              name: this.btnsList[index].name,
              type: this.seriesType,
              datasetIndex: 1,
              encode: { x: "站点", y: this.btnsList[index].value },
              symbol: "rect",
              color: index == 0 ? "rgb(26, 218, 218)" : "yellow",
            };
            index++;
            series.push(item);

          } while (index < this.btnsList.seriesLength);
          return series;
        })(),
      };
      this.myChart.setOption(this.option, true);
      window.addEventListener("resize", () => {
        this.myChart.resize(); //图形随着窗口缩放
      });
    },

    /* dataProce() {
      const newData = {};
      newData = this.getData.map((item) => item);
      console.log(dataProce);
    }, */
    clickBtn(item, index) {
      this.choiceIndex = index;
      this.init();
    },

    //#region
    /*  //根据传入的title_name判断series的name
    getSeriesName(name) {
      var newName = [];
      if (name.indexOf("压")) {
        return newName.push(["供水压力", "回水压力"]);
      } else if (name.indexOf("温")) {
        return newName.push(["供水温度", "回水温度"]);
      }else if (name.indexOf("流")) {
        return newName.push('流量');
      }else{
        return newName
      }

    }, */
    /*  //根据name拿到想要的数据
    proceData(data,name){
        var newData={};
        var str=''
      if (name.indexOf("压")) {
        return str='PT';
      } else if (name.indexOf("温")) {
        return str='te';
      }else if (name.indexOf("流")) {
        return str='FT';
      }else{
        return str;
      }

    } */
    //#endregion
  },
};
</script>

<style lang="scss" scoped>
.ftLineBox {
  margin-top: 1rem;
  //  background-color: rgb(26, 218, 218);
  // background-color: rgba(5, 31, 54,0.6);
}
.title-box {
  height: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1px;
  font-size: 18px;
  z-index: 1;
  // background-color: red;

  .tipText {
    flex: 1;
    // background-color: rgb(46, 216, 131);
    position: relative;
    // top: rem;
    left: 1rem;
    bottom: 0.5rem;
    color: #fff;
    // background: url('~@/assets/img/logo/yiji.png')left top no-repeat;
    // background-size: 3%;
    .tt {
      width: 0.5rem;
      height: 1.2rem;
    }
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
    align-items: flex-end;
    //justify-content:flex-end;
    margin-right: 10px;
    position: relative;
    // background-color: rgb(96, 235, 53);
  }

  .btnList {
    //position: relative;
    //width: 20%;
    // height: 40px;
    // font-size: 18px;
    // align-items: center;
    padding-left: 5%;
    color: rgb(255, 255, 255);
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
