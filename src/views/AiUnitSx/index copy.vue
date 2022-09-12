<template>
  <div class="unit-container">
    <div class="condition-box">
      <el-form :inline="true" :model="dataForm" ref="dataForm">
        <el-form-item prop="name" label="">
          <span>选择位置:</span>
          <!-- <el-cascader
            :popper-append-to-body="false"
            v-model="value"
            :options="options"
            :props="{ checkStrictly: true }"
            clearable
            @change="infoChange"
          ></el-cascader> -->
        </el-form-item>
        <el-form-item label="">
          <span>通讯:</span>
          <!-- <el-select
            v-model="noData"
            :popper-append-to-body="false"
            class="input"
            placeholder="通讯"
            size="medium"
            clearable
            @change="tongxun"
          >
            <el-option label="在线" value="1" />
            <el-option label="离线" value="0" />
          </el-select> -->
        </el-form-item>
        <el-form-item label="">
          <span>故障:</span>
          <el-select
            v-model="hour2"
            :popper-append-to-body="false"
            class="input"
            placeholder="故障"
            size="medium"
            clearable
            @change="tongxun"
          >
            <el-option label="故障" value="1" />
            <el-option label="正常" value="0" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <!-- <el-button
            size="medium"
            icon="el-icon-refresh-left"
            type="success"
            @click="reset()"
            >重置</el-button
          > -->
          <el-button
            size="medium"
            icon="el-icon-refresh-left"
            type="success"
            @click="exportExcel111('单元箱数据')"
            >导出报表</el-button
          >
          <!-- <el-button
            size="medium"
            icon="el-icon-refresh-left"
            type="success"
            @click="exportExcel222('单元箱数据')"
            >导出报表2</el-button
          > -->
        </el-form-item>
      </el-form>
    </div>

    <div class="table">
      <el-table
        v-loading="dataListLoading"
        fixed
        ref="report-table"
        :data="tableData"
        style="width: 100%"
        max-height="910"
        class="customer-table"
        :cell-style="{ padding: '1.8px 0' }"
        :header-cell-style="headerStyle"
        id="el-table"
        @selection-change="handleSelectionChange"
        :row-class-name="tableRowClassName"
        :style="zebarCrossingStyle"
        :row-key="getRowKey"
      >
        <el-table-column
          prop="sid"
          label="表号"
          width="130"
          fixed
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="sn"
          label="设备编号"
          width="130"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="station"
          label="站点"
          width="150"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="community"
          label="小区"
          width="160"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="tower"
          label="楼"
          width="130"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="unit"
          label="单元"
          width="130"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="num"
          label="室"
          width="130"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="householderName"
          label="联系人"
          width="130"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话"
          width="120"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="eventTime"
          label="更新日期"
          width="200"
          fixed="left"
          align="center"
          :formatter="dateFormat"
        >
        </el-table-column>
        <!-- <el-table-column
          prop="eventTime"
          label="日期时间"
          width="160"
          fixed="left"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.timestamp | getDate }}
          </template>
        </el-table-column> -->
        <el-table-column
          prop="temp"
          label="室温(℃)"
          width="150"
          fixed="left"
          align="center"
        >
        </el-table-column>

        <el-table-column label="操作" width="250" fixed="right" align="center">
          <template slot-scope="scope">
            <!-- <el-button type="success" size="mini" fixed="right">刷新</el-button> -->
            <el-button
              type="success"
              size="mini"
              @click="searchHistoryList(scope.row)"
              fixed="right"
              >历史查询</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="sizeChangeHandle"
        @current-change="currentChangeHandle"
        :current-page="pageIndex"
        :page-sizes="[10, 20, 50]"
        :page-size="pageSize"
        :total="totalCount"
        layout="total, prev, pager, next"
      ></el-pagination>
    </div>
    <!-- <div v-show="tt === 5"></div> -->
    <div>
      <SysDlialog ref="dialog" :title="title" :rowData="rowData"> </SysDlialog>
    </div>
  </div>
</template>
<script>
import SysDlialog from "./SysDlialog"; ////
//临时数据
//import { options } from "assets/js/common/doorSelect";
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  data() {
    return {
      dataListLoading: false,
      //斑马线颜色
      zebarCrossing: {
        crossingOne: "#0dc41a",
        crossingTwo: "#155f14",
        //crossingTwo: "#224394",
        colorOne: "#fff",
        colorTwo: "#fff",
      },
      selectID: [],
      station: "",

      community: "",
      noData: null,
      hour2: null,
      TonoData: null,
      Tohour2: null,
      pageIndex: 1,
      pageSize: 25,
      value: null,
      totalCount: 0,
      title: "室温曲线查询",
      selectStationSid: null,
      rowData: {},
      infoArr: [],
      multipleSelection: [],
      myData: [],
      tableData: [],
      info: "",
      dataForm: {
        malfunction: null, //故障
        communication: null, //通讯
      },

      // options: options,
      options: [],
      datah: 850, ///数据报表的高度 动态改
    };
  },
  created() {
    this.askData();
    this.asd();
    this.requestIndoorData();
  },
  watch: {},
  computed: {
    headerStyle() {
      return {
        background: "#0dc41a",
        padding: "5px 0",
        height: "30px",
        borderColor: "#006CC1",
        textAlign: "center",
        // color: "#FEFEFE",
        fontSize: "14px",
        color: "#fff",
        borderColor: "black",
      };
    },
    // 斑马线的颜色
    zebarCrossingStyle() {
      return {
        "--crossingOne": this.zebarCrossing.crossingOne,
        "--crossingTwo": this.zebarCrossing.crossingTwo,
        "--colorOne": this.zebarCrossing.colorOne,
        "--colorTwo": this.zebarCrossing.colorTwo,
      };
    },
  },
  mounted() {
    this.dd();
  },
  methods: {
    //时间日期格式
    dateFormat(row, column, cellValue, index) {
      const daterc = row[column.property];
      if (daterc != null) {
        var date = new Date(daterc);
        var year = date.getFullYear();
        /* 在日期格式中，月份是从0开始，11结束，因此要加0
         * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
         * */
        var month =
          date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
        var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        var hours =
          date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minutes =
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var seconds =
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        // 拼接
        return (
          year +
          "-" +
          month +
          "-" +
          day +
          " " +
          hours +
          ":" +
          minutes +
          ":" +
          seconds
        );
      }
    },

    //解决[ElTable] prop row-key is required的错误
    getRowKey(row) {
      return row.id;
    },
    tableRowClassName({ row, rowIndex }) {
      if (this.selectID.length == 0) {
        if ((rowIndex + 1) % 2 === 0) {
          return "crossingOne"; //类名
        } else {
          return "crossingTwo"; //类名
        }
      }

      // if (this.selectID.length > 0) {
      //   let color = "";
      //   for (let item of this.selectID.values()) {
      //     if (item === row.Sid) color = "table-SelectedRow-bgcolor";
      //   }
      //   console.log(color);
      //   return color;
      // }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    infoChange(value) {
      this.station = value[0];
      this.community = value[1];
      this.requestIndoorData();
    },
    asd() {},
    //获取信息的函数
    dd() {},
    async askData() {
      this.$http
        .get("/TEhistory/roomtemperature/houser/getAllCommunity")
        .then((res) => {
          // console.log("eeeee", res);
          this.options = res.community;
          // this.tableData = res.list;
          // this.totalCount = res.total;
          // console.log("ddd", this.tableData);
          // this.dataListLoading = false;
        })
        .catch((err) => {
          // console.log(err);
          // this.dataListLoading = false;
        });
    },
    sizeChangeHandle(val) {
      this.pageSize = val;
      //更改每页显示记录数量后，都从第一页开始查询
      this.pageIndex = 1;

      this.requestIndoorData();
    },
    currentChangeHandle(val) {
      this.pageIndex = val;

      this.requestIndoorData();
    },
    handleChange() {
      this.requestIndoorData();
    },
    tongxun() {
      this.requestIndoorData();
    },

    requestIndoorData() {
      this.dataListLoading = true;
      // if (this.noData === "1") {
      //   this.TonoData = 1;
      // }
      // if (this.noData === "0") {
      //   this.TonoData = null;
      // }
      // if (this.hour2 === "1") {
      //   this.Tohour2 = 1;
      // }
      // if (this.hour2 === "0") {
      //   this.Tohour2 = null;
      // }
      let data = {
        page: this.pageIndex,
        count: this.pageSize,
        station: this.station,
        community: this.community,
        noData: this.TonoData,
        hour2: this.Tohour2,
      };
      console.log("条件", data);
      this.$http
        .get("/indoor/hbty/roomTeInfo/list", {
          params: data,
        })
        .then((res) => {
          this.tableData = res.list;
          this.totalCount = res.total;
          // console.log("ddd", this.tableData);
          this.dataListLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.dataListLoading = false;
        });
      //结束
    },
    changeInput(v) {
      console.log("****", v);
    },
    reset() {
      // this.station = null;
      // this.community = null;
      this.value = null;
      this.requestIndoorData();
      // this.selectStationSid = null;
      // this.dataForm.malfunction = null;
      // this.dataForm.category = null;
      // this.dataForm.alarmConfirm = null;
    },
    //历史查询按钮
    searchHistoryList(v) {
      this.$refs.dialog.dialogVisible = true;
      this.$refs.dialog.start(); //子组件$on中的名字
      // this.$refs.dialog.dialogVisible = true;
      this.rowData = { ...v };
    },
    exportExcel111(excelName) {
      try {
        const $e = this.$refs["report-table"].$el;
        console.log("----", $e);
        let $table = $e.querySelector(".el-table__fixed");
        if (!$table) {
          $table = $e;
        }

        const wb = XLSX.utils.table_to_book($table, { raw: true });
        const wbout = XLSX.write(wb, {
          bookType: "xlsx",
          bookSST: true,
          type: "array",
        });
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream" }),
          `${excelName}.xlsx`
        );
      } catch (e) {
        if (typeof console !== "undefined") console.error(e);
      }
    },
    exportExcel222() {
      let time = new Date();
      let wb = XLSX.utils.table_to_book(document.querySelector("#el-table"));
      let wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array",
      });

      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream" }),
          `名字 ${time.getTime()}.xlsx` // 文件名
        );
      } catch (e) {
        if (typeof console !== "undefined") {
          this.$message.error("导出失败");
          console.log(e, wbout);
        }
      }

      return wbout;
    },
  },
  components: {
    SysDlialog,
  },
};
</script>
<style lang="scss">
.el-cascader-menu__wrap {
  height: 208px;
  background-color: green !important;
  color: #fff !important;
}
.el-cascader-node:not(.is-disabled):focus,
.el-cascader-node:not(.is-disabled):hover {
  background-color: rgba(62, 243, 16, 0.69);
}
</style>
<style lang="scss" scoped>
::v-deep {
  .el-cascader__dropdown {
    margin: 5px 0;
    margin-top: 5px;
    font-size: 14px;
    background-color: #ebb563 !important;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  //去固定的线
  .el-table__fixed-right::before {
    background-color: transparent !important ;
  }
  .el-table__fixed::before {
    background-color: transparent !important ;
  }
  //el-table__fixed-body-wrapper
  //去表格的线
  .el-table--border,
  .el-table--group {
    border: none;
    // border-right-color: rgb(235, 238, 245);
    // border-right-style: solid;
    // border-right-width: 1px;
    // border-bottom-color: rgb(235, 238, 245);
    // border-bottom-style: solid;
    // border-bottom-width: 1px;
  }
  .table-SelectedRow-bgcolor {
    td {
      background-color: #ebb563 !important;
    }
  }
  .el-table__row > td {
    /* 去除表格线 */
    border: none;
  }
  .el-table th.is-leaf {
    border-bottom: none; //去多余的横线
  }
  .el-table th.is-leaf {
    border-bottom: none; //去多余的横线
  }
  .el-pagination {
    // text-align: center;
    color: #000;
    height: 30px;
    // padding: 0.2rem 0.1rem;
    // background-color: rgb(241, 158, 62); //选中页码的颜色
  }
  .el-pagination.is-background .el-pager li:not(.disabled) {
    color: rgb(141, 138, 138);
    background-color: #14375c; //没有被选中的页码颜色
    background-color: transparent !important;
    background-color: red;
    //background-color: transparent;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    color: rgb(241, 158, 62);
    background-color: rgb(241, 158, 62); //选中页码的颜色
    //background-color: transparent !important;
    //background-color: transparent;
  }
  .el-pagination__total,
  .el-pagination__jump {
    color: #fff;
  }
  .btn-prev {
    background-color: #14375c;
    background-color: transparent !important;
    //color: rgb(32, 245, 32);
  }
  .btn-next {
    background-color: transparent !important;
    color: #fff;
  }
  .el-pager li.btn-quicknext,
  .el-pager li.btn-quickprev {
    line-height: 28px;
    color: #303133;
    color: #fff;
  }
  .el-pager li {
    padding: 0 4px;
    background: transparent !important;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    box-sizing: border-box;
  }
  .el-input__inner {
    background-color: transparent !important;
  }
  .el-pagination__jump {
    color: #000 !important; //前往xx页的字体颜色
  }
  .el-pagination__total {
    color: #000 !important; //总条数的颜色
  }
  .el-checkbox__inner {
    //color: rgb(241, 158, 62) !important; //总条数的颜色
    background-color: #66b1ff !important; //选框的颜色
    //border-radius: 50% !important; //圆角百分比
  }
  //斑马线的颜色
  .customer-table .crossingOne {
    background-color: var(--crossingOne);
    // background-color: red;
    color: var(--colorOne);
    opacity: 1;
  }
  .customer-table .crossingTwo {
    background-color: var(--crossingTwo);
    color: var(--colorTwo);
    opacity: 1;
  }

  //

  //分页的hover颜色
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #fff;
    background-color: #66b1ff !important;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active:hover {
    color: #14375c;
    background-color: #66b1ff !important;
  }
  // //没有fixed的时候用
  // .el-table tbody tr:hover > td {
  //   background-color: #66b1ff;
  //   background-color: #c0ccee;
  //   color: #000;
  //   font-size: 18px;
  // }
  //有fixed的时候用
  .el-table__body .el-table__row.hover-row td {
    background-color: #66b1ff;
    color: #000;
    font-size: 13px;
  }
  /*最外层透明   表格透明*/
  .el-table,
  .el-table__expanded-cell {
    background-color: transparent;
    // background-color: #061028;
  }
  /* 表格内背景颜色 表格透明 */
  .el-table th,
  .el-table tr,
  .el-table td {
    background-color: transparent;
  }
  //固定表头 目的是表头过长把单位用....表示   //表格头部多余内容...的第二步*第一部在methods中的tableRenderHeader
  .el-table th > .cell {
    // overflow: hidden; // 超出的文本隐藏
    // text-overflow: ellipsis; // 溢出用省略号显示
    // display: -webkit-box;
    // // white-space: nowrap; // 溢出不换行
    // //-webkit-line-clamp: 2;
    // white-space: nowrap;
    // -webkit-box-orient: vertical;
    // // color: red;
    white-space: pre;
  }
  .el-table--border::after,
  .el-table--group::after,
  .el-table::before {
    content: "";
    position: absolute;
    background-color: transparent; //去多余的横线
    z-index: 1;
  }
}
// 下拉菜单开始
/deep/.el-input--suffix .el-input__inner {
  //padding-right: 102px;
}
/deep/.el-input__inner {
  background-color: green;
  color: #fff;
  border: 1px solid #31cae4;
}

.el-select-dropdown__item {
  // font-size: 7px;
  //line-height: 19px;
  color: #fff;
  font-weight: 200;
  background-color: green;
}
// 背景全是绿

//三角色
// .el-popper .popper__arrow {
//   border-width: 6px;
//   border-top-width: 6px;
//   filter: drop-shadow(0 2px 12px rgba(5, 212, 23, 1));
// }
/deep/.el-select-dropdown {
  background-color: transparent;
  border: 1px solid blue;
}
/deep/.el-select-dropdown__list {
  padding: 0;
}
/deep/.el-popper[x-placement^="bottom"] {
  margin-top: 0px;
}
/deep/.el-popper .popper__arrow,
/deep/.el-popper .popper__arrow::after {
  display: none;
}
.el-select-dropdown__item:hover {
  background-color: rgba(0, 225, 219, 0.690196078431373);
  background-color: rgba(62, 243, 16, 0.69);
}
.el-select-dropdown__list {
  list-style: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
//下拉菜单结束
// 第一个选择站的开始

//第一个选择站的结束
// ::v-deep {
//   .el-form-item__label {
//     text-align: right;
//     vertical-align: middle;
//     float: left;
//     font-size: 23px;
//     color: #606266;
//     line-height: 40px;
//     padding: 0 12px 0 0;
//     box-sizing: border-box;
//   }
// }
.unit-container {
  color: #fff;
  width: 100%;
  height: 100%;
  font-size: 30px;
  // background-color: rgb(228, 226, 213);
  background: linear-gradient(
    90deg,
    rgba(30, 224, 24, 0.4) 0,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(30, 224, 24, 0.4)
  );
  position: relative;
  .condition-box {
    position: absolute;
    top: 30px;
    left: 50px;
    font-size: 30px;
  }
  .table {
    position: absolute;
    top: 70px;
    width: 1880px;
    height: 970px;
    // background-color: palevioletred;
    overflow: auto;
    margin: 0px 20px 20px 20px;
    padding: 0px 20px 20px 20px;
  }
}
</style>
