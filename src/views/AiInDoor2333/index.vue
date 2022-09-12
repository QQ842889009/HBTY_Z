<template>
  <div class="indoor-consumer">
    <button @click="hh">hh</button>
    <div class="heat-consumer-report">
      <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="室内温度" name="first">
          <!-- 数据筛选标题 -->
          <div class="el-card-title"><span>数据筛选ee</span></div>
          <!-- <Form></Form> -->
          <!-- 4哥筛选框 -->
          <div class="filter-row">
            <div class="filter-item">
              <div class="el-select">
                <SelectSearch
                  :stationInfo="stationInfo"
                  @EmitSelectValue="receiveSelectValue"
                ></SelectSearch>
              </div>
            </div>
          </div>

          <!-- 配置数据开始 -->
          <!-- <div class="el-card-title"><span>数据配置</span></div> -->
          <!-- <div class="filter-row">
            <Collocate @EmitTableConfig="receiveTableConfig"></Collocate>
          </div> -->
          <!-- 配置数据结束 -->
          <!-- 数据展示标题和搜索框的展示 -->
          <div class="el-card-title-f">
            <div class="el-card-title-f-title"><span>数据展示</span></div>

            <div class="el-card-title-f-btn">
              <el-button
                type="primary"
                icon="el-icon-refresh"
                size="mini"
                @click="requestData"
                >请求数据</el-button
              >

              <el-button
                size="mini"
                type="success"
                icon="el-icon-circle-plus"
                @click="createData"
                >增加设备</el-button
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
            :config="table_config"
            :tableData="tableData"
            :pagination="pagination"
            @handleSizeChange="handleSizeChange"
            @handleCurrentChange="handleCurrentChange"
          >
            <template v-slot:TE="slotData">
              <span :style="myStyle(slotData.data.TE)">{{
                slotData.data.TE
              }}</span>
            </template>

            <template v-slot:operation="slotData">
              <el-button
                type="primary"
                size="small"
                @click="historyInquire(slotData.data)"
                plain
                >查询</el-button
              >

              <!-- <el-button type="success" size="small" plain>增加</el-button> -->
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
              <!-- <el-button type="nm" size="small" @click="requestData()" plain
                >请求</el-button
              > -->
            </template>
          </Tab>
          <div>
            <SysDlialog ref="dialog" :title="title" :rowData="rowData">
            </SysDlialog>
          </div>
          <!-- <el-card shadow="always" class="box-card">
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
          </el-card> -->
        </el-tab-pane>
        <!-- <el-tab-pane label="" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="" name="fourth">定时任务补偿</el-tab-pane> -->
      </el-tabs>
    </div>

    <!-- <p>ffff{{ table_config.thead }}</p> ]]-->
  </div>
</template>
<script>
import axios from "axios";
import { Message } from "element-ui";
// import Form from "views/AiDoor/index.vue"
// import FromDialog from "./FromDialog"; //配置显示和隐藏的
import Collocate from "./Collocate"; //配置显示和隐藏的
import SelectSearch from "./SelectSearch"; //配置显示和隐藏的
import Tab from "components/common/Tab"; //table表格公共模板
import InputSearch from "components/common/InputSearch"; //输入关键词查找模板
import DateTimePicker from "components/common/DateTimePicker"; //选择日期时间的模板//
// import SysDlialog22 from "./SysDlialog22" ////
import SysDlialog from "./SysDlialog"; ////
import EchartLine from "../Visual/components/EchartLine.vue";

import {
  DoorRequestSingle,
  inDoorRequestAll_node,
  teHistory,
} from "@/utils/common";
import { ruleForm } from "@/utils/indoor";
const { tableHeader } = require("./TableConfig");

import { Input } from "element-ui";

export default {
  data() {
    return {
      //修改开始
      // ruleForm: ruleForm,
      // BV: true,
      //结束时间
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

        checkbox: false, //复选框默认有
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
        size: 19,
        total: 0,
      },
      //弹框的开始
      dialogVisible: false,
      title: "添加商品",
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
    this.tableData = this.$store.getters.get_inDoorDataAndInfo; //表格数据
    // console.log("eeeeee", this.tableData)
    this.pagination.total = this.tableData.length; //数据的长度给分页总数用

    this.transuFindData = this.$store.getters.get_inDoorDataAndInfo;
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
    this.hh();
    // this.kk();
  },
  methods: {
    //历史查询
    historyInquire(v) {
      console.log("室内温度历史查询", v);
      teHistory(v.Sn, this.starttime, this.endtime);
      this.indoorque.splice(0, this.indoorque.length);
      this.indoorque = this.$store.getters.get_inDoorDataQue;
      console.log("+++++++++++++++indoorque", this.indoorque);
      this.echartTieleName = v.HouseholderName;
    },
    requestData(v) {
      console.log("请求数据");
      inDoorRequestAll_node();
      Message({
        message: "请求数据指令已发送",
        type: "success",
      });
    },
    createData() {
      //console.log("增加", v);
      console.log("fff");
      this.title = "增加设备";

      this.$refs.dialog.dialogVisible = true;
      this.$refs.dialog.isbtn = 5;
    },
    deleteData(v) {
      console.log("删除", v);
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
    //选择器传递过来的数据
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
      inDoorFvsp2(v, this.disabled);
    },

    handleEdit(index, row) {
      console.log(row, "1");
    },
    //单个室内温度历史查询
    //本体
    // inDoorRequestSingleHistory(index, row, a) {
    //   // teHistory(this.starttime);
    // },

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
    hh() {
      console.log("hhhhhhhhh");
      // let data = {
      //   page: 1,
      //   count: 10,
      //   community: "00#·交警大队",
      //   tower: "西环平房",
      // };
      // this.$http.get("indoor/hbty/roomTeInfo/list", params:{data}).then((res) => {
      //   console.log("user列表请求返回的数据是什么", res);
      // });
      //开始
      this.$http
        .get("/indoor/hbty/roomTeInfo/list", {
          params: {
            page: 1,
            count: 10,
            community: "00#·交警大队",
            tower: "西环平房",
          },
        })
        .then((res) => {
          console.log("aaaaaa", res);
          // console.log("aagg", res);
        })
        .catch((err) => {
          console.log("bbb", err);
        });
      //结束
    },
    // kk() {
    //   console.log("kkkkk");
    //   axios
    //     //params:可传递多个参数,固定写法,不能改,否则参数传递失败
    //     .get("http://221.206.242.116:2060/hbty/roomTeInfo/list", {
    //       params: {
    //         page: 1,
    //         count: 10,
    //         community: "00#·交警大队",
    //         tower: "西环平房",
    //       },
    //     })
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },
  components: {
    Collocate,
    Tab,
    InputSearch,
    SelectSearch,
    DateTimePicker,
    //SysDlialog22,
    SysDlialog,
    EchartLine,
    // FromDialog,
    //Form,
  },
};
</script>
<style lang="scss" scoped>
.indoor-consumer {
  // background-color: rgb(223, 202, 12);
  width: 100%;
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
    }
    padding: 1px;
    // margin: 10px;
    // background-color: rgb(23, 66, 185);
    //position: relative;
    .el-card-title-history {
      display: flex;
      justify-content: space-between;
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
      // background-color: rgb(106, 223, 71);
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
  // .x5 {
  //   float: right;
  //   //background-color: rgb(209, 51, 51);
  //   .item {
  //     padding: 0 8px 0 8px;
  //   }
  //   .el-button {
  //     // width: 20px;
  //     // height: 20px;
  //     .icon {
  //       // align-items: center; //上下居中
  //       //justify-content: center; /* 相对父元素水平居中 */
  //       text-align: center;
  //       margin: 0 auto;
  //     }
  //   }
  // }
  // background-color: palegreen;
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
//数据展示和搜搜框的展示
// .el-card-title {
//   justify-content: space-between;
//   padding: 12px 16px;
//   font-size: 1.8rem;
//   display: flex;
//   background-color: gold;
// }
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
