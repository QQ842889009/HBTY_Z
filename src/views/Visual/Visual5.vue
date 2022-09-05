<template>
  <div class="mainBox">
    <div class="topBox">
      <div class="station">
        <span>站点选择</span>
        <el-select
          class="selectStation"
          v-model="selectStation"
          filterable
          placeholder="请选择换热站"
        >
          <el-option
            v-for="item in stations"
            :key="item.Sid"
            :label="item.Station"
            :value="item.Sid"
          >
          </el-option>
        </el-select>
      </div>
      <div class="item">
        <span>参数选择</span>
        <el-select
          class="selectStation"
          v-model="selectItem"
          filterable
          placeholder="请选择参数"
        >
          <el-option
            v-for="item in itemArr"
            :key="item.id"
            :label="item.name"
            :value="{ value: item.value, label: item.name, unit: item.unit }"
          >
          </el-option>
        </el-select>
      </div>
      <div class="data">
        <span>时间选择</span>
        <el-date-picker
          class="selectStation"
          v-model="selectDate"
          type="datetime"
          placeholder="选择日期时间"
          value-format="yyyy-MM-dd HH:mm:ss"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </div>
      <div class="time">
        <span>时间间隔</span>
        <el-select
          class="selectStation"
          v-model="selectTime"
          filterable
          placeholder="请选择间隔"
        >
          <el-option
            v-for="item in timeArr"
            :key="item.id"
            :label="item.name"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <el-button type="primary" class="bt" @click="changeItem">确定</el-button>
    </div>
    <div class="showBox">
      <FtLineBox
        :title_name="selectItem.label"
        :getData="myData"
        :boxHeight="'97.5%'"
        :yUnit="myUnit"
        :isSort="false"
        :showLenged="true"
        :key="isUpdata"
      />
    </div>
  </div>
</template>
<script>
import FtLineBox from "./components/FtLineBoxy copy.vue"; //

export default {
  data() {
    return {
      itemArr: [
        {
          id: 1,
          name: "温度",
          unit: "℃",
          value: [
            "te11",
            "te12",
            "te21",
            "te22",
            "te22_MP",
            "te221",
            "te222",
            "te223",
            "te224",
            "te225",
            "te226",
            "te227",
            "te228",
            "te229",
            "te22A",
            "te12_Z",
          ],
        },
        {
          id: 2,
          name: "压力",
          unit: "MPa",
          value: ["pt11", "pt12", "pt21", "pt22"],
        },
        { id: 0, name: "流量", unit: "t/h", value: ["ft11", "ft21", "ft31"] },
        { id: 3, name: "频率", unit: "Hz", value: ["ft11", "ft21", "ft31"] },
        { id: 4, name: "阀门", unit: "%", value: ["te11"] },
      ],
      timeArr: [
        { id: 0, name: "半小时", value: "0.5" },
        { id: 1, name: "1小时", value: "1" },
        { id: 2, name: "12小时", value: "12" },
        { id: 3, name: "24小时", value: "24" },
      ],
      selectStation: "",
      selectItem: {
        label: "温度",
        value: "",
      },
      selectDate: "",
      selectTime: "",
      myParams: {},
      myData: [],
      stationInfo: [],
      myUnit: "",
      isUpdata: 0,
      //设定时间选择限制，不能大于当前时间
      pickerOptions: {
        disabledDate: (time) => {
          const maxTime = Date.now();
          return time.getTime() > maxTime;
        },
      },
      stations: [],
    };
  },
  created() {
    // this.selectStation = "29";
    // this.selectItem = "";
    // this.selectDate = "2022-06-25 05:00:00";
    // this.selectTime = "0.5";
    this.stations = this.$store.getters.stationInfos;
    this.getStationInfo();
  },
  computed: {
  },
  mounted() {},
  methods: {
    async changeItem() {
      console.log("ivalue----",this.selectItem)
      var startTime = Date.parse(new Date(this.selectDate).toString());
      var endTime = startTime + this.selectTime * 60 * 60 * 1000;
      if (endTime > Date.now()) {
        return alert("时间加间隔超过当前时间");
      }
      if(this.selectStation==""|| this.selectItem.value==""||this.selectDate==""||this.selectTime==""){
        return alert("条件选择不完整！！")
      }
      if(this.selectItem.label=="温度"||this.selectItem.label=="压力"){
        this.getItmeArr(this.selectStation);
      }
      // this.myParams.sid = this.selectStation;
      // this.myParams.stArr = this.selectItem.value;
      // this.myParams.startTime = startTime;
      // this.myParams.endTime = endTime;
      // this.myParams.datasize = 180;
      // console.log("-------------", this.myParams);
      // this.myUnit = this.selectItem.unit;
      // console.log(this.myUnit);
     
      // this.myData = await this.$http.post(
      //   "plcdata/tems/plc/datas",
      //   this.myParams
      // );
      // console.log("plcdata接受到的数据", this.myData);
      
      this.isUpdata++;
    
    },

    async getStationInfo() {
      this.stationInfo = await this.$http.get("plcdata/tems/plc/stationInfo");
      // this.stationInfo=this.stationInfo[1].slice(12,22);
      console.log("------", this.stationInfo);
    },
    getItmeArr(id){
      if(this.stationInfo){
        var stainfonId=this.stationInfo[id];
        console.log('stainfo---------',stainfonId);

      }else{
        console.log("没有获取到换热站的分支信息");
      }
     
    }
  },
  components: {
    FtLineBox,
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