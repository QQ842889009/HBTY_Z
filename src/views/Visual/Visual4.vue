<template>
  <div class="minBox">
    <div class="selectBox">
      <div class="selectText"><span>数据筛选</span></div>

      <el-select class="select" v-model="value" filterable placeholder="请选择换热站" @change="cleraInfo($event)">
        <el-option v-for="item in stations" :key="item.Sid" :label="item.Station" :value="item.Sid">
        </el-option>
      </el-select>
    </div>
    <div class="showBox">
      <FtLineBox title_name="二网实时温度" :getData="realtimeInfo" boxHeight="44%" :yUnit="'℃'" :isSort="false"
        :showLenged="true" :key="isUpdata" seriesType="line" />
      <FtLineBox title_name="二网实时压力" :getData="realtimeInfo" boxHeight="44%" :yUnit="'MPa'" :isSort="false"
        :showLenged="true" :key="isUpdata + '-only'" seriesType="line" />
    </div>
  </div>
</template>
<script>
import { getDate } from "../../filters/filters";
import _ from "lodash";
import FtLineBox from "./components/FtLineBoxy.vue";
// import formatTime from "assets/js/storeDataInit/realtime"
export default {
  data() {
    return {
      value: "",
      realtimeInfo: [],
      stations: [],
      staPlcData: [],
      isUpdata: 0,
      isRed: false,
    };
  },
  created() {
    this.stations = this.$store.getters.stationInfos;
    this.staPlcData = this.$store.getters.stationDataAndInfo;
   
  },
  mounted() {
    //  this.timer=setInterval(() => {
    //     this.getRealtimeData(this.value)
    //    console.log('realtimeInfo---111---', this.realtimeInfo)
    // }, 10000);
  },

  computed: {
  },
  methods: {
    //实时信息
    getRealtimeData(value) {
      if (value.length != 0) {
        let staPlcData = this.staPlcData;
        // console.log('data-------', staPlcData[value]);
        let obj = {};
        let sumTimeTamp = 0;
        let nowTimeTamp = Date.parse(new Date());
        let i = value;
        sumTimeTamp = Math.abs(nowTimeTamp - staPlcData[i].Timestamp);
        // console.log("当前时间", nowTimeTamp);
        // console.log("系统时间", staPlcData[i].Timestamp);
        if (sumTimeTamp <= 10000) {
          // console.log("有新的数据", staPlcData[i].Sid);
          obj.SdateTime = staPlcData[i].Sdate + " " + staPlcData[i].Stime;
          obj.te11 = staPlcData[i].TE11;
          obj.te12 = staPlcData[i].TE12;
          obj.te21 = staPlcData[i].TE21;
          obj.te22 = staPlcData[i].TE22;
          obj.pt11 = staPlcData[i].PT11;
          obj.pt12 = staPlcData[i].PT12;
          obj.pt21 = staPlcData[i].PT21;
          obj.pt22 = staPlcData[i].PT22;
          // console.log("obj-----------",obj);
          this.realtimeInfo.push(obj);
          if (this.realtimeInfo.length >= 360) {
            this.realtimeInfo.shift();
          }


        } else {
          // console.log("没有新的数据");
          obj.SdateTime = this.formatTime();
          obj.te11 = 0;
          obj.te12 = 0;
          obj.te21 = 0;
          obj.te22 = 0;
          obj.pt11 = 0;
          obj.pt12 = 0;
          obj.pt21 = 0;
          obj.pt22 = 0;
          this.realtimeInfo.push(obj);
          if (this.realtimeInfo.length >= 360) {
            this.realtimeInfo.shift();
          }

        }
      }
    },
    formatNumber(num) {
      num = num.toString();
      return num[1] ? num : "0" + num;
    },
    formatTime() {
      let newDate = new Date();
      let nowHour = newDate.getHours();
      let nowMinutes = newDate.getMinutes();
      let nowDay = newDate.getDate();
      let nowMonth = newDate.getMonth() + 1;
      let nowYear = newDate.getFullYear();
      let nowSecond = newDate.getSeconds();
      return (
        nowYear +
        "-" +
        this.formatNumber(nowMonth) +
        "-" +
        this.formatNumber(nowDay) +
        " " +
        this.formatNumber(nowHour) +
        ":" +
        this.formatNumber(nowMinutes) +
        ":" +
        this.formatNumber(nowSecond)
      );
    },
    //请求数据
    async getRealtimeInfos(sid) {
      // var endTime = Date.parse(new Date());
      // var startTime=endTime-60*60*1000*4;
      // var params={
      //   sid:parseInt(sid),
      //   startTime:startTime,
      //   endTime:endTime,
      //   size:120
      // }
      var mySid = parseInt(sid);
      var plcData = await this.$http.post(
        "plcdata/tems/plc/DatasBySid", { sid: mySid });
      this.realtimeInfo = plcData.list;
      console.log("realtimeInfo---111---", this.realtimeInfo);
      if (this.realtimeInfo) {
        //传过来的数据是按时间倒序的，需要把数组倒序
        // this.realtimeInfo= this.realtimeInfo.reverse();
        //添加一个时间字段。格式为2022-9-5 16：05：34
        for (let index = 0; index < this.realtimeInfo.length; index++) {
          this.realtimeInfo[index].SdateTime = getDate(this.realtimeInfo[index].timestamp);
        }
        // console.log("realtimeInfo---111---", this.realtimeInfo);
        this.isUpdata++;
      } else {
        return alert('数据错误');
      }

    },
    cleraInfo(v) {
      console.log("选择了新的换热站", v);
      clearInterval(this.timer);
      this.getRealtimeInfos(v)
      this.isUpdata++;
      this.timer = setInterval(() => {
        this.getRealtimeData(this.value);
        // console.log('staPlcData---000---', this.staPlcData);
      }, 10000);
      // this.realtimeInfo=_.cloneDeep(this.realtimeInfos)
    },
  },
  components: {
    FtLineBox,
  },
  beforeDestroy() {
    clearInterval(this.timer);
    // console.log("vm即将销毁");
    this.realtimeInfo = [];
  },
};
</script>
<style lang="scss" scoped>
.minBox {
  height: 100%;
  width: 100%;

  .selectBox {
    background: rgba(65, 219, 65, 0.2);
    height: 15%;
    width: 100%;
    margin-bottom: 1rem;
    box-shadow: 0px 0px 5px 4px #38e616 inset, 0px 0px 5px -4px #38e616;
  }

  .selectText {
    font-size: 25px;
    font-weight: 700;
    padding: 12px 16px;
    letter-spacing: 2px;
  }

  .select {
    left: 16px;
  }

  .showBox {
    width: 100%;
    height: 85%;
    background-color: rgba(34, 40, 44, 0.8);
    // box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
  }
}
</style>