/** 换热站 区间报表*/
<template>
  <div class="card-centent">
    <div :class="[2 == 0 ? 'half' : 'halfA']">
      <el-row>
        <el-col :span="8" v-for="item in tableData" :key="item.Sid"
          ><div class="centent">
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

      <!-- <SysDlialogCard ref="dialog" :title="title" :rowData="rowData">
      </SysDlialogCard> -->
    </div>
  </div>
</template>

<script>
import CascaderT from "components/common/CascaderT"; //
import { options } from "assets/js/common/doorSelect";
//import SysDlialogCard from "./SysDlialogCard";
// import Bus from "assets/js/bus.js";
// import dataStaPlan from "assets/js/sjzlData/sjzlDataPlanMeter";
import { getAvg } from "@/utils/common";
import { DoorRequestSingle } from "@/utils/common";
import { Message } from "element-ui";
export default {
  data() {
    return {
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
  props: {
    tableData: {
      type: Array,
      default: () => {
        return [];
      },
    },
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
  created() {},
  mounted() {
    this.Avg();
  },
  methods: {
    Avg() {
      this.averageTeValue = getAvg(this.tableData, "TE", 100);
      console.log("hhh", this.averageTeValue);
    },

    changeInput(v) {
      // console.log("eeeee-vvvv", v);
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
    // SysDlialogCard,
  },
};
</script>
<style lang="scss" scoped>
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
    //  background-color: palevioletred;
  }
  .centent:hover {
    background-color: #cdd5f5;
  }
  .centent {
    margin: 0rem 0.5rem 0.5rem 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 4px;
    background-color: #f5f7fd;
    height: 8.5rem;
    box-shadow: none;
    background-color: #e5e8f6;
    display: flex; //弹性盒模型
    flex-direction: column; //设置元素为垂直显示
    .card-centent .centent .centent-item {
      display: flex;
      flex: auto;
      margin: 0px;
      align-items: center;
      justify-content: space-between;
    }
    .centent-item {
      // background-color: palegoldenrod;
      display: flex;
      flex: auto; //父设置好 后子这样设置就行了
      margin: 0px;
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
