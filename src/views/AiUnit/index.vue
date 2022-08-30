<template>
  <div class="unit-container">
    <div class="condition-box">
      <el-form :inline="true" :model="dataForm" ref="dataForm">
        <el-form-item prop="name" label="选择位置:">
          <!-- <el-select
            size="small"
            class="selectStation"
            v-model="selectStationSid"
            filterable
            placeholder="选择换热站"
            @change="dd"
          >
            <el-option
              v-for="item in infoArr"
              :key="item.sid"
              :label="item.station"
              :value="item.sid"
            >
            </el-option>
          </el-select> -->

          <el-cascader
            v-model="value"
            :options="options"
            :props="{ checkStrictly: true }"
            clearable
            @change="infoChange"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="通讯:">
          <el-select
            v-model="dataForm.communication"
            class="input"
            placeholder="通讯"
            size="medium"
            clearable
            @change="tongxun"
          >
            <el-option label="在线" value="1" />
            <el-option label="离线" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item label="故障:">
          <el-select
            v-model="dataForm.malfunction"
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
          <el-button
            size="medium"
            icon="el-icon-refresh-left"
            type="primary"
            @click="reset()"
            >重置</el-button
          >
          <el-button
            size="medium"
            icon="el-icon-refresh-left"
            type="primary"
            @click="exportExcel111('单元箱数据')"
            >导出报表1</el-button
          >
          <el-button
            size="medium"
            icon="el-icon-refresh-left"
            type="primary"
            @click="exportExcel222('单元箱数据')"
            >导出报表2</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <div class="table">
      <el-table
        ref="report-table"
        :data="myData"
        style="width: 100%"
        max-height="910"
        :cell-style="{ padding: '1.8px 0' }"
        :header-cell-style="headerStyle"
        id="el-table"
      >
        <el-table-column
          prop="sid"
          label="表号"
          width="120"
          fixed
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="ConcentratorCode"
          label="集中器号"
          width="120"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="station"
          label="站点"
          width="120"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="Housing"
          label="小区"
          width="120"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="Tower"
          label="楼"
          width="120"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="Unit"
          label="单元"
          width="120"
          fixed="left"
          align="center"
        >
        </el-table-column>

        <el-table-column
          prop="timestamp"
          label="日期时间"
          width="160"
          fixed="left"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.timestamp | getDate }}
          </template>
        </el-table-column>
        <el-table-column label="一次侧" align="center">
          <el-table-column
            prop="fv1sp"
            label="1#阀门给定(%)"
            width="120"
            align="center"
          >
            <template slot-scope="scope">
              <el-input
                type="number"
                size="mini"
                max="100"
                min="0"
                v-model="scope.row.fv1sp"
                onkeyup="this.value=this.value.replace(/[\u4E00-\u9FA5]/g,'') "
                oninput="if(value>100)value=100;if(value<0)value=0"
                @change="changeInput(scope.row)"
              >
              </el-input>
            </template>
          </el-table-column>
          <el-table-column
            prop="ft11"
            label="1#阀门反馈(%)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="q1_sum"
            label="供温(℃)"
            width="100"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="pt11"
            label="回温(℃)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="pt12"
            label="供压(MPa)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="pt11_fv"
            label="回压(MPa)"
            width="120"
            align="center"
          >
          </el-table-column>
        </el-table-column>
        <el-table-column label="二次侧" align="center">
          <el-table-column
            prop="ft11"
            label="2#阀门给定(%)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="ft11"
            label="2#阀门反馈(%)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="q1_sum"
            label="供温(℃)"
            width="100"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="pt11"
            label="回温(℃)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="pt12"
            label="供压(MPa)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="pt11_fv"
            label="回压(MPa)"
            width="120"
            align="center"
          >
          </el-table-column>
        </el-table-column>
        <el-table-column label="操作" width="250" fixed="right" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" fixed="right">刷新</el-button>
            <el-button
              type="primary"
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
        layout="total, sizes, prev, pager, next, jumper"
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
// import { options } from "assets/js/common/doorSelect";
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  data() {
    return {
      station: "",
      housing: "",
      pageIndex: 1,
      pageSize: 10,
      value: null,
      totalCount: 0,
      title: "曲线查询",
      selectStationSid: null,
      rowData: {},
      infoArr: [],
      myData: [
        { sid: 2, ConcentratorCode: "123", station: "站", fv1sp: 55 },
        { sid: 2, ConcentratorCode: "123", station: "站", fv1sp: 55 },
        { sid: 2, ConcentratorCode: "123", station: "站", fv1sp: 55 },
        { sid: 2, ConcentratorCode: "123", station: "站", fv1sp: 55 },
        { sid: 2, ConcentratorCode: "123", station: "站", fv1sp: 55 },
        { sid: 2, ConcentratorCode: "123", station: "站", fv1sp: 55 },
        { sid: 2, ConcentratorCode: "123", station: "站", fv1sp: 55 },
        { sid: 2, ConcentratorCode: "123", station: "站", fv1sp: 55 },
        { sid: 2, ConcentratorCode: "123", station: "站", fv1sp: 55 },
      ],
      info: "",
      dataForm: {
        malfunction: null, //故障
        communication: null, //通讯
      },

      //options: options,
      options: [],
    };
  },
  created() {
    this.askData();
  },
  watch: {},
  computed: {
    headerStyle() {
      return {
        background: "#66B1FF",
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
  },
  mounted() {},
  methods: {
    infoChange(value) {
      console.log(value, "------");
      this.gg();
      // this.selectionCondition.station = value[0];
      // this.selectionCondition.housing = value[1];
      // console.log("222", this.selectionCondition);
      // this.$emit("EmitinfoChangeVal", this.selectionCondition);
    },

    //获取信息的函数
    dd() {},
    async askData() {
      this.options = await this.$http.get(
        "unit/uvms/unitInfo/getStationsAndHousings"
      );
    },
    sizeChangeHandle(val) {
      this.pageSize = val;
      //更改每页显示记录数量后，都从第一页开始查询
      this.pageIndex = 1;
      this.gg();
    },
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.gg();
    },
    handleChange() {
      this.gg();
    },
    tongxun() {
      this.gg();
    },
    gg() {
      console.log("ddgg");
      let data = {
        //sid: parseInt(this.selectStationSid),
        station: this.value[0],
        housing: this.value[1],
        page: parseInt(this.pageIndex),
        length: parseInt(this.pageSize),
      };
      console.log("报警历史查询", data);

      // this.$http({
      //   method: "post",
      //   url: "unit/uvms/daidatas/searchAiDataByPage",
      //   data: data,
      // })
      //   .then((res) => {
      //     console.log("接受到的数据", res);
      //     // this.showAlarmHistoryData = res.page.list;
      //     // this.totalCount = res.page.totalCount;
      //   })
      //   .catch((erroe) => {
      //     console.log("发送数据失败");
      //   });

      // console.log("收到报警值数组", this.alarmHistoryData);
    },
    changeInput(v) {
      console.log("****", v);
    },
    reset() {
      // this.selectStationSid = null;
      // this.dataForm.malfunction = null;
      // this.dataForm.category = null;
      // this.dataForm.alarmConfirm = null;
    },
    searchHistoryList(v) {
      this.$refs.dialog.dialogVisible = true;
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
<style lang="scss" scoped>
::v-deep {
  .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 23px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
}
.unit-container {
  width: 100%;
  height: 100%;
  font-size: 30px;
  background-color: rgb(228, 226, 213);
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
