<template>
  <div class="mainBox">
    <div class="topBox">
      <div class="station">
        <span>站点选择</span>
        <el-select class="selectStation" v-model="selectStation" filterable placeholder="请选择换热站">
          <el-option v-for="item in stations" :key="item.Sid" :label="item.Station" :value="item.Sid">
          </el-option>
        </el-select>
      </div>
      <div class="item">
        <span>参数选择</span>
        <el-select class="selectStation" v-model="selectItem" filterable placeholder="请选择参数">
          <el-option v-for="item in itemArr" :key="item.id" :label="item.name"
            :value="{label: item.name, value: item.value}">
          </el-option>
        </el-select>
      </div>
      <div class="data">
        <span>时间选择</span>
        <el-date-picker class="selectStation" v-model="selectDate" type="datetime" placeholder="选择日期时间"
          value-format="yyyy-MM-dd HH:mm:ss" :picker-options="pickerOptions">
        </el-date-picker>
      </div>
      <div class="time">
        <span>时间间隔</span>
        <el-select class="selectStation" v-model="selectTime" filterable placeholder="请选择间隔">
          <el-option v-for="item in timeArr" :key="item.id" :label="item.name" :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-button type="primary" class="bt" @click="changeItem">确定</el-button>
    </div>
    <div class="showBox">
      <FtLineBox :title_name="selectItem.label" :getData="myData" :boxHeight="'97.5%'" :yUnit="myUnit" :isSort="false"
        :showLenged="true" :key="isUpdata" :ftLineList="myHistoryList" />
    </div>
  </div>
</template>
<script>
import FtLineBox from "./components/FtLineBoxHistory.vue"; //
import historyList from "./FtLineListHistory";
import { getDate } from "../../filters/filters";
import _ from "lodash"
export default {
  data() {
    return {
      itemArr: [
        {
          id: 0,
          name: "温度",
          value: "℃",
        },
        {
          id: 1,
          name: "压力",
          value: "MPa",
        },
        { id: 2, name: "流量", value: "t/h",  },
        { id: 3, name: "频率", value: "Hz",},
        { id: 4, name: "阀门", value: "%",},
      ],
      timeArr: [
        { id: 0, name: "半小时", value: "0.5" },
        { id: 1, name: "1小时", value: "1" },
        { id: 2, name: "12小时", value: "12" },
        { id: 3, name: "24小时", value: "24" },
      ],
      selectStation: "",
      selectItem: "",
      selectDate: "",
      selectTime: "",
      myParams: {},
      myData: [],
      stationInfo: [],
      myUnit: "",
      isUpdata: 0,
      echartEncodeArr: {},
      //设定时间选择限制，不能大于当前时间
      pickerOptions: {
        disabledDate: (time) => {
          const maxTime = Date.now();
          return time.getTime() > maxTime;
        },
      },
      stations: [],
      myHistoryList:{},
    };
  },
  created() {
    // this.selectStation = "29";
    // this.selectDate = "2022-09-5 05:00:00";
    // this.selectTime = "0.5";
    this.stations = this.$store.getters.stationInfos;
    // console.log('store---',this.$store.getters["stationBranch/branchInfos"]);
    this.stationInfo=this.$store.getters["stationBranch/branchInfos"];
    // console.log('branch',this.$store.getters.stationDataAndInfo);
    this.myHistoryList=_.cloneDeep(historyList);
    
  },
  computed: {
  },
  mounted() { },
  methods: {
    async changeItem() {
      this.myData = [];
      var startTime = Date.parse(new Date(this.selectDate).toString());
      var endTime = startTime + this.selectTime * 60 * 60 * 1000;
      if (endTime > Date.now()) {
        return alert("时间加间隔超过当前时间");
      }
      if (this.selectStation === "" || this.selectItem === "" || this.selectDate === "" || this.selectTime === "") {
        return alert("条件选择不完整！！")
      }
      if (this.selectItem.label == "温度" || this.selectItem.label == "压力") {
        this.getItmeArr(this.selectStation);
      }
      this.myUnit = this.selectItem.value;
      // this.myParams.sid = this.selectStation;
      // this.myParams.stArr = this.selectItem.value;
      // this.myParams.startTime = startTime;
      // this.myParams.endTime = endTime;
      // this.myParams.size = 180;
      this.myParams = {
        sid: this.selectStation,
        startTime: startTime,
        endTime: endTime,
        size: 24
      }
      // console.log("131000000000",this.myParams)
      this.myData = await this.$http.post(
        "plcdata/tems/plc/DatasByTimeScopeAndSizeAndSid",
        this.myParams
      );
      // console.log("plcdata接受到的数据", this.myData);
      if (this.myData.code == 500) {
       
        // alert(this,myData.msg);
        this.myData = [];
        // console.log("=--------------",this.myData);
        return alert("该时间段无数据");
       
      } else {
        // console.log("++++++++++++++++");
        this.myData=this.myData.result;
        //添加一个时间字段。格式为2022-9-5 16：05：34
        for (let index = 0; index < this.myData.length; index++) {
          this.myData[index].SdateTime = getDate(this.myData[index].timestamp);
        }
        this.isUpdata++;
      }
     

    },

    
    getItmeArr(staId) {
      this.myHistoryList={};
      this.myHistoryList=_.cloneDeep(historyList);
      // console.log('historyList---------', this.stationInfo);
      if (this.stationInfo != undefined) {
        var stainfonId = this.stationInfo[staId];
        //对象的解构，branch为除了id，sid，station，的数据
        let { id, sid, station, ...branch } = stainfonId;
        // console.log('branch---------', branch);
        //branch是分支的信息
        for (let i in branch) {
          if (branch[i] != null) { //如果分支不为null，
            //name为分支的名称，value为分支对应的字段,i[9]是取字符串bra_name_1的最后一位
            let objTE = { name: branch[i], value: 'te22' + i[9] };
            let objPT = { name: branch[i], value: 'pt22' + i[9] };
            this.myHistoryList['温度'].push(objTE);
            this.myHistoryList['压力'].push(objPT);
          }
        }
       
      } else {
        console.log("没有获取到换热站的分支信息");
      }

    },
    //键值对去重
    unique(arr) {
      let obj = {};
      return arr.filter((item, index, array) => {
        return obj.hasOwnProperty(typeof item.value + JSON.stringify(item.value)) ?
          false : (obj[typeof item.value + JSON.stringify(item.value)] = true)
      })
    }
  },
  components: {
    FtLineBox,
  },
  beforeDestroy() {
    console.log("----切换界面");
   
  },
};
</script>
<style lang="scss" scoped>
.mainBox {
  height: 100%;
  width: 100%;

  .topBox {
    height: 15%;
    width: 100%;
    background: rgba(109, 224, 138, 0.5);
    box-shadow: 0px 0px 5px 4px #38e616 inset, 0px 0px 5px -4px #38e616;
    display: flex;
    justify-content: flex-start;
    font-size: 25px;
    font-weight: 700;
    padding: 12px 16px;
    letter-spacing: 2px;

    .station {
      height: 80%;
      width: 24%;
      margin-top: 20px;
      // background: red;
    }

    .item {
      height: 80%;
      width: 24%;
      margin-top: 20px;
    }

    .data {
      height: 80%;
      width: 24%;
      margin-top: 20px;
    }

    .time {
      height: 80%;
      width: 24%;
      margin-top: 20px;
      // background-color: red;
    }

    .bt {
      height: 40%;
      width: 6%;
      margin-top: 16px;
      font-size: 20px;
      font-weight: 700;
      padding: 8px 15px;
      letter-spacing: 12px;
      // background-color: red;
    }

    .selectStation {
      left: 20px;
      top: -2px;
    }
  }

  .showBox {
    margin-top: 20px;
    height: 85%;
    width: 100%;
    background: rgba(44, 214, 109, 0.5);
  }
}
</style>