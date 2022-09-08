<template>
  <div class="minBox">
    <div class="titleBox">
      <FtBox bNum="4977 GJ" bText="今日预报总供热量" :bHeight="'85%'" :bWidth="'23%'" isShow="true" />
      <FtBox bNum="292.9 T" bText="今日预报总供热量" :bHeight="'85%'" :bWidth="'23%'" isShow="true" />
      <FtBox bNum="49775 GJ" bText="今日预报总供热量" :bHeight="'85%'" :bWidth="'23%'" isShow="true" />
      <FtBox bNum="1819.6 T" bText="今日预报总供热量" :bHeight="'85%'" :bWidth="'23%'" isShow="true" />
    </div>
    <div class="title">
      <div class="titleText">
        <img class="titleImg" src="~@/assets/img/logo/yiji.png" alt="" />
        供热系统每日负荷预报
      </div>

      <div class="timePicker">
        <DateTimePicker @EmitDateTimePicker="receiveDateTimePicker"></DateTimePicker>
      </div>
    </div>
    <div class="box3 topBox">
      <span class="stitle">天 气</span>
      <WeatherForecast :weatherInfo="weatherInfo"/>
    </div>
    <div class="box3 midBox">
      <span class="stitle">供热量</span>
      <div class="b3">
        <ft-line title_name="供热量" :getData="staEchartData" :boxHeight="'80%'" yUnit="T" seriesType="bar"
          :isTitleShow="false" />
      </div>

    </div>
    <div class="box3 botBox">
      <span class="stitle">室 温</span>
      <div class="db">
        <FtLineDB :boxHeight="'80%'" :isTitleShow="false" />
      </div>

    </div>
  </div>
</template>
<script>
import DataBlock from "components/slotBlock/DataBlock.vue"; //导入箱体
import FtBar from "./components/FtBar.vue";
import FtLine from "./components/FtLine.vue";
import FtPie from "./components/FtPie.vue";
import EchartLine from "./components/EchartLine.vue";
import { createNamespacedHelpers } from "vuex";
import FtLineDB from "./components/FtLineDB.vue";
import FtPieRound from "./components/FtPieRound.vue";
import FtGauge from "./components/FtGauge.vue";
import FtBox from "./components/FtBox.vue";
import FtBoxImg from "./components/FtBoxImg.vue";
import FtLineBox from "./components/FtLineBoxy.vue";
import WeatherForecast from "./components/WeatherForecast.vue";
import DateTimePicker from "./components/DataTimePicker.vue"
import { getWeatherForecast } from "./getWeatherData";
const { mapState } = createNamespacedHelpers("plcS7");
export default {
  data() {
    return {
      startAndEndDateAndTime: [], //其实日期时间和结束日期时间
      starttime: null, //开始日期时间
      endtime: null, //结束日期时间
    };
  },
  created() {
    getWeatherForecast("唐山");
   },
  computed: {
    ...mapState(["staPlcData", "staPlcNum", "staEchartData"]),
    indoorData() {
      return this.$store.getters.get_inDoorDataAndInfo.slice(0, 100);
      // :bHeight="'30%'" :bWidth="'50%'"
    },
     weatherInfo() {           
                var weatherAll = (JSON.parse(localStorage.getItem("weather")))
                // console.log('----------', weatherAll)
                if(weatherAll==null) {
                  getWeatherForecast("唐山");
                }
                 return weatherAll.days
        }
  },
  methods: {
    receiveDateTimePicker(v) {
      this.startAndEndDateAndTime = v;

      this.starttime = v[0];
      this.endtime = v[1];
      // console.log('starttime',this.starttime)
      //  console.log('endtime',this.endtime)
    },
  },
  components: {
    DataBlock,
    FtBar,
    FtLine,
    FtPie,
    EchartLine,
    FtLineDB,
    FtPieRound,
    FtGauge,
    FtBoxImg,
    FtLineBox,
    FtBox,
    WeatherForecast,
    DateTimePicker
  },
};
</script>

<style lang="scss" scoped>
.minBox {
  width: 100%;
  height: 100%;

  // background-color: red;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-around;
  // align-items: center;
  .titleBox {
    height: 14%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .title {
    font-size: 20px;
    // margin-left: 0.5rem;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
.titleText{
  margin-left: 16px;
}
    .titleImg {
      width: 10px;
      height: 30px;
    }
 
    // .timePicker {
    //   // margin-right: 16px;
    // }
  }

  .box3 {
    background: rgba(5, 31, 54, 0.8);
    height: 25%;
    width: 100%;
    margin-bottom: 1rem;
    box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;

  }

  // .topBox{
  //    background: rgba(26, 53, 78, 0.8);
  // }
  .b3 {
    width: 97%;
    height: 97%;
    margin-left: 1%;
    margin-top: -8%;

  }

  .db {
    width: 100%;
    height: 97%;
    margin-left: 1%;
    margin-top: -8%;
    background: rgba(4, 21, 36, 0.5);
  }

  .stitle {
    // background: red;
    font-size: 22px;
    margin-left: 20px;
    margin-top: 50px;
    letter-spacing: 50px;
    line-height: 40px;
    // text-align: center;
    vertical-align: bottom;
    width: 50px;
    height: 120px;
    // border: 2px solid #3498db;
    // display:-moz-inline-box;
    display: inline-block;
    border-right: 3px solid #3498db;
    color: #deebec;
  }
}
</style>
