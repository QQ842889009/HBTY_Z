/** 换热站 区间报表*/
<template>
  <div class="card-centent">
    <CascaderT :options="options"></CascaderT>
    <div :class="[2 == 0 ? 'half' : 'halfA']">
      <!-- <div class="h1"></div>
      <div class="h2"></div>
      <div class="s1"></div>
      <div class="s2"></div> -->
      <el-row>
        <el-col :span="11" v-for="item in tableData" :key="item.Sid"
          ><div class="centent">
            <!-- <div class="sj-c"></div>
            <div class="sj-j"></div> -->
            <div class="centent-item">
              <span class="centent-item-span1"> {{ item.Num }}</span>
              <span class="centent-item-span2">
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="设置"
                  placement="top"
                >
                  <i class="el-icon-setting" @click="changeInput(item)"></i>
                </el-tooltip>
              </span>
            </div>
            <div class="centent-item">
              <span class="centent-item-span1">
                {{ TE
                }}<span :class="[item.TE < averageTeValue ? 'one' : 'two']"
                  >{{ item.TE }}<span>℃</span></span
                ></span
              >
              <span class="centent-item-span1">
                {{ averageTe }}{{ averageTeValue }}<span>℃</span></span
              >
            </div>
            <div class="centent-item">
              <span class="centent-item-span1"> {{ FVSP }}{{ item.FVSP }}</span>
            </div>
            <div class="centent-item">
              <span class="centent-item-span1">
                {{ dateAndTime }}{{ item.SdateTE }}/{{ item.StimeTE }}</span
              >
              <span class="centent-item-span2">
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="请求"
                  placement="top"
                >
                  <i class="el-icon-position" @click="requestData(item)"></i>
                </el-tooltip>
              </span>
            </div></div
        ></el-col>
      </el-row>

      <SysDlialogCard ref="dialog" :title="title" :rowData="rowData">
      </SysDlialogCard>
    </div>
  </div>
</template>

<script>
import CascaderT from "components/common/CascaderT"; //
import { options } from "assets/js/common/doorSelect";
import SysDlialogCard from "./SysDlialogCard";
import Bus from "assets/js/bus.js";
import dataStaPlan from "assets/js/sjzlData/sjzlDataPlanMeter";
import { getAvg } from "@/utils/common";
import { DoorRequestSingle } from "@/utils/common";
import { Message } from "element-ui";
export default {
  data() {
    return {
      //选择换热站，小区，楼，单元，开始
      options: options,
      dataStaPlan,
      filtCondition: ["二十五号站", "琥珀小区三期", "五号楼", "一单元"],
      stationname: "",
      housingname: "",
      towername: "",
      unitname: "",
      numname: "",
      //选择换热站，小区，楼，单元，结束
      tableData: [],
      TE: "回温:",
      FVSP: "开度:",
      averageTe: "平均回温:",

      dateAndTime: "时间:",
      SdateTE: "更新日期",
      StimeTE: "时间",

      averageTeValue: null,
      title: "",
      rowData: {},
    };
  },
  watch: {
    tableData: {
      //这是一个数组里面是对象
      handler() {
        //watch的一个方法
        this.Avg(); //要执行的方法
      },
      deep: true, //深度监听
    },
  },
  created() {
    //this.tableData = this.$store.getters.get_doorDataAndInfo; //表格数据
    console.log("户阀数据", this.tableData);
    Bus.$on("valIndoorCard", (data) => {
      console.log("*********************");
      console.log("bus-valIndoorCard", data);
      this.filtCondition = data;
      if (this.filtCondition.length === 4) {
        this.stationname = this.filtCondition[0];
        this.housingname = this.filtCondition[1];
        this.towername = this.filtCondition[2];
        this.unitname = this.filtCondition[3];

        this.tableData = this.dataStaPlan.doorStationHousingTowerUnit(
          this.$store.getters.get_doorDataAndInfo,

          this.stationname,
          this.housingname,
          this.towername,
          this.unitname
        );
      }
      // this.pagination.total = this.tableData.length;
    });
  },
  mounted() {
    this.f();
    this.Avg();
    Bus.$on("valIndoorCard", (data) => {
      console.log("*********************");
      console.log("bus-valIndoorCard", data);
      this.filtCondition = data;
      if (this.filtCondition.length === 4) {
        this.stationname = this.filtCondition[0];
        this.housingname = this.filtCondition[1];
        this.towername = this.filtCondition[2];
        this.unitname = this.filtCondition[3];

        this.tableData = this.dataStaPlan.doorStationHousingTowerUnit(
          this.$store.getters.get_doorDataAndInfo,

          this.stationname,
          this.housingname,
          this.towername,
          this.unitname
        );
      }
      // this.pagination.total = this.tableData.length;
    });
  },
  methods: {
    Avg() {
      this.averageTeValue = getAvg(this.tableData, "TE", 100);
      console.log("hhh", this.averageTeValue);
    },

    f() {
      if (4 === 4) {
        console.log("ff44");
        this.tableData = this.dataStaPlan.doorStationHousingTowerUnit(
          this.$store.getters.get_doorDataAndInfo,

          this.filtCondition[0],
          this.filtCondition[1],
          this.filtCondition[2],
          this.filtCondition[3]
        );
      }
    },
    changeInput(v) {
      console.log("eeeee-vvvv", v);

      this.title = "户阀开度设定";
      this.rowData = { ...v };
      this.$refs.dialog.dialogVisible = true;
    },
    requestData(v) {
      DoorRequestSingle(v.Sid);
      Message({
        message: `表号：${v.Sid}，数据请求发送成功 `,
        type: "success",
      });
    },
  },
  components: {
    CascaderT,
    SysDlialogCard,
  },
};
</script>
<style lang="scss">
.card-centent {
  //background-color: rgb(54, 216, 39);
  width: 100%;
  height: 100%;
  overflow: auto;
  color: #000;
  border-radius: 10px;
  .half {
    width: 100%;
    border: 2px dashed #000;
    border-radius: 10px;
    height: 850px;
    //  background-color: palevioletred;
  }
  .halfA {
    width: 100%;
    // border: 2px dashed #000;
    border-radius: 10px;
    height: 850px;
    //background-color: palevioletred;
    position: relative;
    .h1 {
      width: 94%;
      height: 6px;
      background-color: red;
      position: absolute;
      bottom: 8.5%;
    }
    .h2 {
      width: 98.2%;
      height: 6px;
      background-color: blue;
      position: absolute;
      bottom: 2.5%;
    }
    .s1 {
      width: 6px;
      height: 95%;
      background-color: blue;
      position: absolute;
      bottom: 2.5%;
      right: 1.2%;
    }
    .s2 {
      width: 6px;
      height: 90%;
      background-color: red;
      position: absolute;
      bottom: 8.5%;
      right: 5.5%;
    }
  }
  .centent:hover {
    background-color: #cdd5f5;
  }
  .centent {
    margin: 0.5rem 0.5rem 1rem 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 4px;
    background-color: #f5f7fd;
    height: 8.8rem;
    box-shadow: none;
    background-color: #e5e8f6;
    // background-color: rebeccapurple;
    position: relative;
    top: 20px;
    display: flex; //弹性盒模型
    flex-direction: column; //设置元素为垂直显示
    .sj-j {
      position: absolute;
      top: -20px;
      right: 3px;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid red;
      border-left: 10px solid transparent;
    }
    .sj-c {
      position: absolute;
      bottom: -20px;
      left: 3px;
      width: 0;
      height: 0;
      border-top: 10px solid blue;
      border-right: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 10px solid transparent;
    }

    .centent-item {
      // background-color: palegoldenrod;
      display: flex;
      flex: auto; //父设置好 后子这样设置就行了
      //margin: 5px;
      align-items: center;
      justify-content: space-between;
      .centent-item-span1 {
        flex: 1;
      }
      .centent-item-span2 {
        flex: 1;
        text-align: right;
        .el-icon-setting:hover {
          transform-origin: bottom center;
          transform: scale(1.1);
          color: rgb(199, 167, 23);
        }
        .el-icon-position:hover {
          transform-origin: bottom center;
          transform: scale(1.1);
          color: rgb(199, 167, 23);
        }
      }
    }
  }
  .one {
    //color: rgb(16, 228, 30);
    color: #000;
  }
  .two {
    color: red;
  }
}
</style>
