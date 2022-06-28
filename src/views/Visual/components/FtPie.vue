<template>
  <div class="ftLineBox" :style="{ width: this.width, height: this.height }">
    <div class="title-box">
      <div class="title-left">
        <div class="tipText">{{ title_name }}</div>
      </div>
      <div class="title-right"></div>
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
  created() {
    console.log(this.getData);
  },
  props: {
    getData: Array,
    //标题
    seriesType: {
      type: String,
      default: "pie",
    },
    height: {
      type: String,
      default: "100%",
    },
    width: {
      type: String,
      default: "100%",
    },
    title_name: {
      type: String,
      default: "面积",
    },
  },
  computed: {
    echartKyes() {
      return Object.keys(this.getData[0]);
    },
  },
  mounted() {
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
      this.option = {
        // backgroundColor: "rgb(6, 17, 39)", //背景颜色
        tooltip: {
          trigger: "item", //柱状、曲线坐标轴触发，如果默认的话散点、饼图触发
          backgroundColor: "#061028", // 背景颜色
          borderColor: "#00bae4",
          // formatter: '{a} <br/>{b} : {c} ({d}%)',
          formatter:function(p){
            console.log('--------pppppp-------',p);
          },
          textStyle: {
            color: "#fff", //提示框的字体颜色
            fontSize: 15, //提示框的文字大小
          },
        },
        textStyle: {
          color: "#fff",
          fontSize: "15px",
        },
        legend: {
          //图列
          type: "scroll",
          orient: "vertical",
          left: "80%",
          top: "center",
          height: "50%",
          padding: 5,
          itemGap: 20, //图例每项之间的间隔
          itemWidth: 60,
          itemHeight: 30,
          textStyle: {
            color: "#fff",
            fontSize: "18px",
          },
          //翻页按钮
          pageIconColor: "#fff",
          // pageIconInactiveColor: "black",
          pageIconSize: 20,
        },

        grid: {
          //绘图版的大小
          top: "5%",
          left: "7%",
          right: "5%",
          bottom: "10%",
          //height:this.boxHeight,
          // containLabel: true, // 距离是包含坐标轴上的文字
        },
        dataset: [
          // dimensions: ["Station", "TE11", "TE12"],//优先级最高，如果你不写，系统会默认寻找
          //datasetIndex: 0,
          { source: this.getData }, //数据源
          //datasetIndex: 1,
          // {
          //   transform: {
          //     type: "sort",
          //     config: { dimension: "面积", order: "asc" },
          //   },
          // },
        ],
        series: [
          {
            name: "面积",
            type: this.seriesType,
            roseType: "radius",
            center: ["40%", "50%"],
            radius: "75%",
            encode: { itemName: "站点", value: "面积" },
            itemStyle: {
              borderRadius: 10,
            },

            //饼图图形上的文本标签
            label: {
              show: false,
              color: "#fff",
              shadowColor: "transparent",
            },
            //标签的视觉引导线配置
            labelLine: {
              show: false,
              // length: 5,
              // length2: 5,
              lineStyle: {
                color: "#fff",
                width: 2,
                // cap:'round'
              },
            },
          },
        ],
      };
      this.myChart.setOption(this.option, true);
      window.addEventListener("resize", () => {
        this.myChart.resize(); //图形随着窗口缩放
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.ftLineBox {
  margin-top: 1rem;
  // background-color: red;
}
.title-box {
  height: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-size: 18px;
  z-index: 1;
  // background-color: red;

  .tipText {
    flex: 1;
    // background-color: rgb(46, 216, 131);
    position: relative;
    // top: rem;
    left: 2rem;
    color: #fff;
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
  text-shadow: none !important;
}
</style>
