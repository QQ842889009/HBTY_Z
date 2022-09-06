<!-- 历史查询的表 -->

<template>
  <div class="dataBlockBox" :style="{ width: '100%', height: this.boxHeight }">
    <div class="tipBox">
      <div class="tipText">
        <img class="tt" src="~@/assets/img/logo/yiji.png" alt="" />
        {{ title_name }}
      </div>
      <div class="tipMiddle">
        <slot name="tipMiddleSolt"></slot>
      </div>
      <div class="tipLast">
        <div
          class="btnList"
          @click="clickBtn(index)"
          v-show="isSort"
          :style="index == choiceIndex ? clickColor : normalColor"
          v-for="(btn, index) of btnsList"
          :key="index"
        >
          {{ btn.name }}
        </div>
      </div>
    </div>
    <div class="dataBox">
      <div ref="myEchart" class="myEchart"></div>
    </div>
  </div>
</template>

<script>
import echarts from "components/echart/echartsVue.js";
// import ftLineList from "../FtLineList";
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
    // console.log("从外面传进来的数据echarts", this.getData);
    if(this.getData==null){
      return alert("数据为空！！")
    }
    // console.log('ftline------------',ftLineList[this.title_name]);
    // console.log(this.btnsList);
  },
  props: {
    shape: {
      type: Object,
      default: function () {
        return {
          height: "88.3%",
          width: "90%",
        };
      },
    },
    //数据来源
    getData: Array,
    //标题，根据此从ftLineList中获取对象
    title_name: {
      type: String,
      default: "温度",
    },
    seriesType: {
      type: String,
      default: "line",
    },
    // xSeries:{
    //   type:String,
    //   default:"站点"
    // },
    // ySeries: {
    //   type:String,
    //   default:"this.btnsList[index].value"
    // },
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
    isSort: {
      //是否根据数据排序
      type: Boolean,
      default: true,
    },
    isRed: {
      type: Boolean,
      default: false,
    },
    showLenged: {
      type: Boolean,
      default: false,
    },
    ftLineList:{}
  },
  computed: {
    
    btnsList() {   
        return this.ftLineList[this.title_name]; 
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

      // console.log("init被调用");
      //  console.log("num--------",[this.boxHeight,this.girdNum]);
      this.option = {
        // color: [
        //   //调整默认颜色
        //   "#5470c6",
        //   "#91cc75",
        //   "#fac858",
        //   "#ee6666",
        //   "#73c0de",
        //   "#3ba272",
        //   "#fc8452",
        //   "#9a60b4",
        //   "#ea7ccc",
        // ],
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
          show: this.showLenged,
          textStyle: {
            color: "#fff",
          },
          left: "10%",
          // width:"40px",
          // height:"20px",
        },

        xAxis: {
          type: "category", //整体X坐标轴的类型，离散值
          //#region   x轴名称设置
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
            show: true,
          },
          axisTick: {
            //不显示X轴的每一项的刻度
            show: true,
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
          top: "7%",
          left: "7%",
          right: "5%",
          bottom: "12%",
          //height:this.boxHeight,
          // containLabel: true, // 距离是包含坐标轴上的文字
        },
        yAxis: {
          name: this.yUnit,
          // nameTextStyle: { align: "right" }, //坐标轴文字的对齐
          // nameGap: "5", //名字距离轴线的距离
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
                fontSize: 9, //y轴文字大小
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
          // {
          //   transform: {
          //     type: "sort",
          //     config: {
          //       dimension: this.btnsList[this.choiceIndex].value,
          //       order: "asc",
          //     },
          //   },
          // },
        ],
        series: (() => {
          var series = [];
          //  console.log('ser',this);
          var index = 0;
          do {
            var item = {
              name: this.btnsList[index].name,
              type: this.seriesType,
              datasetIndex: this.isSort ? 1 : 0,
              encode: {
                x: 'SdateTime',
                y: this.btnsList[index].value,
              },
              symbol: "rect",
              // color: index == 0 ? "rgb(26, 218, 218)":"yellow",
              // itemStyle: {
              //   color: function (p) {
              //     // console.log("颜色的参数", p)
              //     var c="";
              //     if(p.data.PT11==0&&p.data.TE11==0){
              //       c="red"
              //     }else {
              //         c=(p.seriesIndex ==0 ? "rgb(26, 218, 218)":"yellow")
              //     }
              //     // console.log("颜色")
              //     return c
              //   }
              // }
            };
            index++;
            series.push(item);
          } while (index < this.btnsList.length);
          return series;
        })(),
      };
      this.myChart.setOption(this.option, true);
      window.addEventListener("resize", () => {
        this.myChart.resize(); //图形随着窗口缩放
      });
    },
    clickBtn(index) {
      this.choiceIndex = index;
      this.init();
    },
  },
};
</script>

<style lang="scss" scoped>
.dataBlockBox {
  position: relative;
  overflow: hidden;
  // background-color: rgba(17, 35, 43, 0.6);
  // padding-top: 0.0625rem;
  // background: url("~@/assets/img/logo/gh.png") left top no-repeat;
  // background-size: 7rem;
  // height: 88.3%;
  // width: 90%;
  // aspect-ratio: 1;
  margin-bottom: 1rem;
  // border: 1px solid #000;
  // box-shadow: 0 0 3px 4px hsl(0, 0%, 0%, 0.7);
  box-shadow: 0px 0px 5px 4px #38e616 inset, 0px 0px 5px -4px #38e616;
  text-shadow: 1px 1px 1px #38e616, 1px 1px 3px #38e616, 1px 1px 5px #38e616,
    1px 1px 7px #38e616;

  // border-radius: 10px;
  // border-top:none;
  // filter: opacity(0.8);
  .tipBox {
    // border: 1px solid red;
    background: url("~@/assets/img/logo/gh.png") left top no-repeat;
    background-size: 600px;
    // background-color: red;
    height: 40px;
    position: relative;
    top: 0.8rem;
    left: 0.5rem;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;

    .tipText {
      flex: 1;
      // background-color: rgb(46, 216, 131);
      position: relative;
      top: 0.3rem;
      left: 1rem;
      color: #fff;
      font-size: 20px;
      text-align: left;
      letter-spacing: 10px;

      .tt {
        width: 0.5rem;
        height: 1.8rem;
      }
    }

    .tipMiddle {
      flex: 1;
      //  background-color: rgb(29, 193, 235);
      color: #fff;
      text-align: right;
    }

    .tipLast {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      // align-items: flex-start;
      //justify-content:flex-end;
      position: relative;
      font-size: 16px;
      // background-color: rgb(215, 236, 22);
      top: -0.8rem;
      right: 2rem;
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

      // z-index: 1;
    }
  }

  .dataBox {
    position: relative;
    // top: 0.375rem;
    height: 100%;

    .myEchart {
      height: 100%;
      width: 100%;
      // z-index: 1;
      // background-color: red;
    }
  }
}
</style>
