<template>
  <div class="indoor-consumer">
    <div class="heat-consumer-report">
      <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="户阀管控" name="first">
          <!-- 数据筛选标题 -->
          <div class="el-card-title"><span>数据筛选</span></div>
          <Cascader :options="options"></Cascader>
          <!-- <Form></Form> -->
          <!-- 4哥筛选框 -->
          <!-- <div class="filter-row">
            <div class="filter-item">
              <div class="el-select">
                <SelectSearch
                  :stationInfo="stationInfo"
                  @EmitSelectValue="receiveSelectValue"
                ></SelectSearch>
              </div>
            </div>
          </div> -->

          <!-- 配置数据开始 -->
          <div class="el-card-title"><span>数据配置</span></div>
          <div class="filter-row">
            <Collocate @EmitTableConfig="receiveTableConfig"></Collocate>
          </div>
          <!-- 配置数据结束 -->
          <!-- 数据展示标题和搜索框的展示 -->
          <div class="el-card-title-f">
            <div class="el-card-title-f-title"><span>数据展示</span></div>

            <div class="el-card-title-f-btn">
              <el-button
                type="primary"
                icon="el-icon-refresh"
                size="mini"
                @click="requestDataAll"
                :disabled="
                  !this.ISAUTH.isAUth(['ROOT', 'HRZ:WDKZ', 'HRZ:SJZL'])
                "
                >请求数据</el-button
              >

              <el-button
                size="mini"
                type="success"
                icon="el-icon-circle-plus"
                @click="createData"
                >增加设备</el-button
              >

              <el-button
                size="mini"
                type="warning"
                icon="el-icon-circle-check"
                @click="selectSidBtn"
                :disabled="selectSid.length == 0"
                >多选给定</el-button
              >
              <el-button
                size="mini"
                type="info"
                icon="el-icon-circle-close"
                @click="cancelSelectSidBtn"
                :disabled="selectSid.length == 0"
                >取消多选</el-button
              >
            </div>

            <div class="el-card-title-f-select">
              <InputSearch
                :wide="wide"
                :data="transuFindData"
                @change="change"
                :findName="findName"
                :placeholder="placeholder"
                :prefixIcon="prefixIcon"
                :size="size"
                :clearable="clearable"
              ></InputSearch>
            </div>
          </div>
          <Tab
            ref="tab"
            :config="table_config"
            :tableData="tableData"
            :pagination="pagination"
            @handleSizeChange="handleSizeChange"
            @handleCurrentChange="handleCurrentChange"
            @EmitSelectID="receiveSelectID"
          >
            <template v-slot:TE="slotData">
              <span :style="myStyle(slotData.data.TE)">{{
                slotData.data.TE
              }}</span>
            </template>
            <template v-slot:FVSP="slotData">
              <el-input
                type="number"
                size="mini"
                max="100"
                min="0"
                v-model="slotData.data.FVSP"
                onkeyup="this.value=this.value.replace(/[\u4E00-\u9FA5]/g,'') "
                oninput="if(value>100)value=100;if(value<0)value=0"
                @change="changeInput(slotData)"
                :disabled="slotData.data.Sid == disabled.is"
              >
              </el-input>
            </template>
            <template v-slot:operation="slotData">
              <el-button
                type="primary"
                size="small"
                @click="historyInquire(slotData.data)"
                plain
                >查询</el-button
              >

              <el-button
                type="danger"
                size="small"
                @click="deleteData(slotData.data)"
                plain
                >删除</el-button
              >
              <el-button
                type="warning"
                size="small"
                @click="updateData(slotData.data)"
                plain
                >修改</el-button
              >
              <el-button
                type="info"
                size="small"
                @click="readData(slotData.data)"
                plain
                >查看</el-button
              >
              <el-button
                type="nm"
                size="small"
                @click="requestData(slotData.data)"
                plain
                >请求</el-button
              >
            </template>
          </Tab>
          <div>
            <SysDlialog ref="dialog" :title="title" :rowData="rowData">
              <!-- <template #dialog-content> <Form></Form></template> -->
            </SysDlialog>
            <SysDlialogSP
              ref="dialogSP"
              :title="titleSP"
              :selectSid="selectSid"
            >
              <!-- <template #dialog-content> <Form></Form></template> -->
            </SysDlialogSP>
          </div>
          <el-card shadow="always" class="box-card">
            <div class="el-card-title-history">
              <div class="el-card-title-history item">{{ name }}</div>
              <div class="el-card-title-history item">
                <DateTimePicker
                  class="picker"
                  @EmitDateTimePicker="receiveDateTimePicker"
                ></DateTimePicker>
              </div>
            </div>
            <div class="ff">
              <EchartLine :getData="indoorque" :title_name="echartTieleName" />
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="卡片视图" name="second">
          <el-row :gutter="10">
            <el-col :span="12"
              ><div class="card-left"><DoorCard> </DoorCard></div
            ></el-col>
            <el-col :span="12"
              ><div class="card-right"><DoorCard3> </DoorCard3></div
            ></el-col>
          </el-row>
          <!-- <div class="card-left">aa</div>
          <div class="card-right">bb</div> -->
          <!-- <DoorCard> </DoorCard> -->
        </el-tab-pane>
        <el-tab-pane label="卡片试图2" name="third">
          <el-card class="box-card">
            <DoorDataTwo></DoorDataTwo>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="占位3" name="fourth">
          <el-row :gutter="10">
            <el-col :span="12"
              ><div class="card-left"><DoorCard> </DoorCard></div
            ></el-col>
            <el-col :span="12"
              ><div class="card-right"><DoorCardLine> </DoorCardLine></div
            ></el-col> </el-row
        ></el-tab-pane>
      </el-tabs>
    </div>

    <!-- <p>ffff{{ table_config.thead }}</p> ]]-->
  </div>
</template>
<script>
// import Form from "views/AiDoor/index.vue"
// import FromDialog from "./FromDialog"; //配置显示和隐藏的
import { Message } from "element-ui";
import { options } from "assets/js/common/doorSelect"; //
import Bus from "assets/js/bus.js";
import dataStaPlan from "assets/js/sjzlData/sjzlDataPlanMeter"; //
import Collocate from "./Collocate"; //配置显示和隐藏的
import SelectSearch from "./SelectSearch"; //配置显示和隐藏的
import Tab from "components/common/Tab"; //table表格公共模板
import InputSearch from "components/common/InputSearch"; //输入关键词查找模板
import DateTimePicker from "components/common/DateTimePicker"; //选择日期时间的模板
import Cascader from "components/common/Cascader";
// import SysDlialog22 from "./SysDlialog22" ////
import SysDlialog from "./SysDlialog"; ////
import SysDlialogSP from "./SysDlialogSP"; ////
import EchartLine from "../Visual/components/EchartLine.vue";
import DoorCard from "./DoorCard"; ////
import DoorCard3 from "./DoorCard3"; ////
import DoorCardLine from "./DoorCardLine"; ////
//户阀卡片的第二种方式开始
import DoorDataTwo from "./DoorDataTwo";

//户阀卡片的第二种方式结束
import {
  DoorRequestSingle,
  inDoorRequestAll_node,
  teHistory,
  inDoorFvsp,
  doorRequestAll_java,
} from "@/utils/common";
import { ruleForm } from "@/utils/indoor";
const { tableHeader } = require("./TableConfig");

import { Input } from "element-ui";

export default {
  data() {
    return {
      //多选给定的开始
      selectSid: [], //接收多选中的Sid
      titleSP: "户阀多选给定",
      subhead: "tt",
      //对选给定的结束
      //选择换热站，小区，楼，单元，开始
      options: options,
      dataStaPlan,
      filtCondition: [],
      stationname: "",
      housingname: "",
      towername: "",
      unitname: "",
      numname: "",
      //选择换热站，小区，楼，单元，结束
      zzz: {
        sta: null,
        db: null,
      },

      name: null,
      Height: "100px",
      Width: "18500px",
      inDooHistory: [], //接收室内温度的历史数据
      startAndEndDateAndTime: [], //其实日期时间和结束日期时间
      starttime: null, //开始日期时间
      endtime: null, //结束日期时间
      kong: [],
      activeName: "first",
      disabled: {
        is: "qwer", //设置点击后的禁用
      },

      wide: "220px", //宽度
      findName: {
        findName1: "Station", //要搜索的关键词
        findName2: "Community", //要搜索的关键词
      },

      placeholder: "站点/小区", //提示
      prefixIcon: "el-icon-search", //前面的图标
      size: "small", //大小
      clearable: true, //是否带清除
      //表格配置
      table_config: {
        thead: tableHeader,

        checkbox: true, //复选框默认有
        Load: true, //加载现在没用
        //传递斑马线和文字的颜色
        zebarCrossing: {
          crossingOne: "#ffffff",
          crossingTwo: "#f5f7fd",
          colorOne: "#000",
          colorTwo: "#000",
        },
      },
      //斑马线的参数

      //表格数据
      tableData: [],
      transuFindData: [],
      //分页的设置
      pagination: {
        current: 1,
        size: 10,
        total: 0,
      },
      //弹框的开始
      dialogVisible: false,
      title: "",
      rowData: {},
      //弹框的结束

      indoorque: [
        {
          event_time: "2022-06-23",
          temp: "24",
        },
        {
          event_time: "2022-06-24",
          temp: "10",
        },
      ],
      echartTieleName: "",
    };
  },
  created() {
    // inDoorRequestAll();
    this.tableData = this.$store.getters.get_doorDataAndInfo; //表格数据
    console.log("表格数据户阀", this.tableData);
    this.pagination.total = this.tableData.length; //数据的长度给分页总数用

    this.transuFindData = this.$store.getters.get_doorDataAndInfo;
    // console.log("sssss", this.transuFindData)

    // console.log('-------store',this.$store.getters.get_inDoorDataAndInfo.slice(0,100));
  },
  watch: {},
  computed: {
    //接收室内温度的数据
    // indoorque() {
    //   return this.$store.getters.get_inDoorDataQue;
    // },
    stationInfo() {
      return this.$store.getters.xx;
    },
  },
  mounted() {
    Bus.$on("val", (data) => {
      console.log("bus", data);
      this.filtCondition = data;
      if (this.filtCondition.length === 1) {
        this.stationname = this.filtCondition[0];
        this.tableData = this.dataStaPlan.doorStation(
          this.$store.getters.get_doorDataAndInfo,
          this.stationname
        );
      }

      if (this.filtCondition.length === 2) {
        this.stationname = this.filtCondition[0];
        this.housingname = this.filtCondition[1];
        this.tableData = this.dataStaPlan.doorStationHousing(
          this.$store.getters.get_doorDataAndInfo,
          this.stationname,
          this.housingname
        );
      }

      if (this.filtCondition.length === 3) {
        this.stationname = this.filtCondition[0];
        this.housingname = this.filtCondition[1];
        this.towername = this.filtCondition[2];

        this.tableData = this.dataStaPlan.doorStationHousingTower(
          this.$store.getters.get_doorDataAndInfo,

          this.stationname,
          this.housingname,
          this.towername
        );
      }
      if (this.filtCondition.length === 4) {
        console.log("444");
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
      this.pagination.total = this.tableData.length;
    });
  },
  methods: {
    //多选给定开始
    receiveSelectID(v) {
      console.log("VVVVVVV", v);
      this.selectSid = v;
    },
    selectSidBtn() {
      console.log("多选给定按钮");
      this.$refs.dialogSP.dialogVisible = true;
    },
    cancelSelectSidBtn() {
      console.log("取消多选");
      this.selectSid = [];
      // this.$refs.tab.selectID = [];
      this.$refs.tab.cancelSelectSidBtn();
      this.$refs.tab.multipleSelection = [];
      //this.$refs.tab.multipleSelection.clearSelection();
    },
    //多选给定结束
    //历史查询
    historyInquire(v) {
      console.log("室内温度历史查询", v);
      teHistory(v.Sn, this.starttime, this.endtime);
      this.indoorque.splice(0, this.indoorque.length);
      this.indoorque = this.$store.getters.get_inDoorDataQue;
      console.log("+++++++++++++++indoorque", this.indoorque);
      this.echartTieleName = v.HouseholderName;
    },
    requestDataAll() {
      doorRequestAll_java();
      Message({
        message: `户阀所有数据请求发送成功 `,
        type: "success",
      });
    },
    requestData(v) {
      DoorRequestSingle(v.Sid);
      Message({
        message: `表号：${v.Sid}，数据请求发送成功 `,
        type: "success",
      });
    },
    createData(v) {
      this.title = "增加设备";

      this.$refs.dialog.dialogVisible = true;
      this.$refs.dialog.isbtn = 5;
    },
    deleteData(v) {
      this.title = "删除设备";
      this.rowData = { ...v };
      this.$refs.dialog.isbtn = 5;

      this.$refs.dialog.dialogVisible = true;
    },
    updateData(v) {
      console.log("修改", v); //
      this.title = "修改设备参数";
      this.rowData = { ...v };

      this.$refs.dialog.dialogVisible = true;
      this.$refs.dialog.isbtn = 5;
    },
    readData(v) {
      console.log("查看", v);
      this.title = "查看设备参数";
      this.$refs.dialog.dialogVisible = true;
      this.$refs.dialog.isbtn = 0;
      this.rowData = { ...v };
    },
    myStyle(value) {
      if (value > 18 && value <= 22) {
        return { color: "#14e90d", fontWeight: "900" };
      } else if (value > 23 && value < 30) {
        return { color: "red", fontWeight: "900" };
      } else if (value < 18) {
        return { color: "#8d8787" };
      }
    },

    //通讯localStorage//sessionStorage
    changeValueT(v) {
      console.log("通讯");
      console.log(v);
    },

    //接收table列显示隐藏的配置项
    receiveTableConfig(v) {
      console.log("接收table列显示隐藏的配置项", v);
      this.table_config.thead = v;
      // console.log("接收table列显示隐藏的配置项", v);
    },
    //DateTimePicker传过来的选择的日期时间
    receiveDateTimePicker(v) {
      this.startAndEndDateAndTime = v;

      this.starttime = v[0];
      this.endtime = v[1];
    },

    receiveSelectValue(v) {
      console.log("选择器传递过来的数据", v);
      this.tableData = v;
      this.pagination.total = v.length;
      // this.findName.findName1 = v;
    },

    receiveChangeDialog() {
      this.dialogVisible = false;
    },

    handleClick(tab, event) {
      console.log(tab, event);
    },
    changeInput(v) {
      this.disabled.is = v.data.Sid;
      // console.log("阀门给定传值", v)
      inDoorFvsp(v.data.Sid, v.data.FVSP, this.disabled);
    },

    handleEdit(index, row) {
      console.log(row, "1");
    },

    change(val) {
      console.log("TTTT", val);
      this.tableData = val;
      this.pagination.total = val.length;
    },
    handleSizeChange(val) {
      //接收子组件传递过来的值，改变父组件的值又传递给子组件
      this.pagination.size = val;
    },
    handleCurrentChange(val) {
      //接收子组件传递过来的值，改变父组件的值又传递给子组件
      this.pagination.current = val;
    },
  },
  components: {
    Collocate,
    Tab,
    InputSearch,
    SelectSearch,
    DateTimePicker,
    //SysDlialog22,
    SysDlialog,
    SysDlialogSP,

    EchartLine,
    Cascader,
    DoorCard,
    DoorCard3,
    DoorCardLine,
    // FromDialog,
    //Form,
    DoorDataTwo,
  },
};
</script>
<style lang="scss" scoped>
.indoor-consumer {
  //background-color: rgb(223, 202, 12);
  width: 100%;
  color: #000;
}
.el-button--nm {
  color: #42b6ac;
  background: #f0f9eb;
  border-color: #b0e7e0;
  border-radius: 3px;
}

.el-button--nm.el-button.is-plain:focus,
.el-button--nm.el-button.is-plain:hover {
  color: #fff;
  background: #62c4bb;
}

::v-deep {
  .el-tabs--border-card {
    border-radius: 12px; //整个的圆角
    height: 970px;

    // background-color: transparent !important;
  }

  .el-tabs__nav-scroll {
    padding-left: 12px;
    //background-color: palegreen;
    border-top-left-radius: 102px;
    border-radius: 920px;
  }
  .el-tabs__nav-wrap {
    //background-color: rgb(132, 0, 255);
    border-top-left-radius: 102px;
  }
  .is-top {
    border-top-left-radius: 12px; //子菜单的圆角
    border-top-right-radius: 12px;
  }

  .el-card {
    .el-card__body {
      padding: 1px;
      // border-radius: 122px; //整个的圆角
    }
    padding: 1px;
    // margin: 10px;
    // background-color: rgb(23, 66, 185);
    //position: relative;
    .el-card-title-history {
      display: flex;
      justify-content: space-between;
      background-color: greenyellow;
      // position: absolute;
      .item {
        // background-color: rgb(134, 224, 49);
        padding: 0;
        height: 32px;
        font-size: 10px;
      }
    }
    .ff {
      height: 155px;
      width: 100%;
    }

    //  background-color: powderblue;
    // box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) !important;
  }
}
.el-card-title {
  justify-content: space-between; //均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点。
  padding: 12px 16px;
  font-size: 2rem;
  display: flex;
}
.el-card-title span:first-child {
  font-weight: 700;
  color: #5473e8;
}
.filter-row {
  padding: 0 0.2rem 0.2rem 0.6rem;
  display: flex;
  // background-color: red;
  // align-items: center; //上下居中
  //justify-content: center; /* 相对父元素水平居中 */
}
.filter-row .filter-item {
  padding-right: 0.4rem;
  // border: solid 1px red;
  font-size: 0.4rem;

  // color: rgb(20, 233, 13);
}
.el-select {
  display: inline-block;
  position: relative;
}

.el-card-title-f {
  display: flex;
  padding: 12px 16px;
  font-size: 0.45rem;
  font-size: 2rem;
  font-weight: 700;
  color: #5473e8;
  justify-content: space-between; //均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点。
  .el-card-title-f-title {
    flex: 1;
    // background-color: rgb(223, 202, 12);
  }
  .el-card-title-f-btn {
    flex: 1;
    // background-color: palegreen;
    text-align: right;
  }
  .el-card-title-f-select {
    flex: 0.4;
    //  background-color: rgb(12, 65, 212);
    text-align: right;
  }
}
</style>
