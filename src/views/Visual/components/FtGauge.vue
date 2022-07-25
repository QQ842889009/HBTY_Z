<!-- 仪表盘，显示百分比用 -->
<template>
  <div class="ftLineBox" :style="{ width: this.pWidth, height: this.pHeight }">
    <div class="title-box">
      <div class="title-left">
        <div class="tipText">
          <img class="tt" src="~@/assets/img/logo/yiji.png" alt="" />
          {{ title_name }}
        </div>
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
    // console.log('store',this.$store);
  },
  props: {
    getData: Array,
    //标题
    seriesType: {
      type: String,
      default: "pie",
    },
    pHeight: {
      type: String,
      default: "100%",
    },
    pWidth: {
      type: String,
      default: "100%",
    },
    title_name: {
      type: String,
      default: "热力站在线",
    },
    maxNum: {
      type: Number,
      default: 300,
    },
    onLineNum: {
      type: Number,
      default: 68,
    },
    pColor:{
       type: String,
       default: "rgb(238, 92, 92)",
    }
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
      // console.log("store", this.$store);
      var lengedSize = parseFloat(this.pHeight) > 50 ? 40 : 30;
      // console.log('height++++',parseFloat( this.pHeight)*0.4);
      this.option = {
        // backgroundColor: "rgb(6, 17, 39)", //背景颜色

        series: [
          {
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            center:['70%','30%'],
            radius:'50%',
            pointer: {
              show: false,
            },
            name: "Perfect",
            max: this.maxNum,
            data: [
              {
                value: this.onLineNum,
               itemStyle:{
                color:this.pColor
               }
              },
            ],

            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,         
            },
            axisLine: {
              lineStyle: {
                width: 10,
                color:[[1,this.pColor]],
                opacity:0.2
              },
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              distance: 50,
            },

            title: {
              fontSize: 14,
              offsetCenter: ["0%", "-10%"],
            },
            detail: {
              width: "100%",
              height: "100%",
              fontSize: 15,
               color: this.pColor,
               opacity:0.7,
              borderColor: this.pColor,
              borderType: [5, 10],

              borderDashOffset: 5,
              borderRadius: 200,
              borderWidth: 1,
              formatter:()=>{
                return ((this.onLineNum/this.maxNum).toFixed(2))*100+'%'
              },
              valueAnimation: true,
              offsetCenter: ["0%", "0%"],
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
  // background-color: rgb(238, 92, 92);
  opacity: 1;
}
.title-box {
  height: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-size: 14px;
  z-index: 1;
  // background-color: red;

  .title-left {
    flex: 1;
    // justify-content: center;
    // background-color: rgb(32, 223, 191);
    // background-color: rgb(64, 10, 126);
    // margin-top:10%;
    // margin-left: 10%;
    .tipText {
      flex: 1;
      // background-color: rgb(46, 216, 131);
      position: relative;
      // top: rem;
      left: 2rem;
      color: #fff;
      .tt {
        width: 0.5rem;
        height: 1.5rem;
      }
    }
  }

  .title-right {
    flex: 1;
    //height: 100%;
    //width: 10px;
    //text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 1rem;
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
