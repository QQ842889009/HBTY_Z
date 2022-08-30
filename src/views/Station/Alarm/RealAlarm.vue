<template>
  <div class="unit-container">
    {{ vv }}
    <!-- {{ dataForm.alarmConfirm }} -->
    <!-- <div class="condition-box">
      <el-form :inline="true" :model="dataForm" ref="dataForm">
        <el-form-item prop="name" label="55555:">
          <el-select
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
          </el-select>
        </el-form-item>
        <el-form-item label="类型:">
          <el-select
            size="small"
            v-model="dataForm.category"
            class="input"
            placeholder="类型"
            clearable
            @change="tongxun"
          >
            <el-option label="温度" value="te" />
            <el-option label="压力" value="pt" />
            <el-option label="液位" value="lt" />
            <el-option label="循环泵" value="bp" />
            <el-option label="补水泵" value="mp" />
          </el-select>
        </el-form-item>

        <el-form-item label="时间:">
          <DateTimePicker
            class="picker"
            @EmitDateTimePicker="receiveDateTimePicker"
          ></DateTimePicker>
        </el-form-item>
        <el-form-item label="是否被确认:">
          <el-select
            size="small"
            v-model="dataForm.alarmConfirm"
            class="input"
            placeholder="是否被确认"
            clearable
            @change="tongxun"
          >
            <el-option label="被确认" value="1" />
            <el-option label="未处理" value="0" />
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
            @click="exportExcel111('报警数据')"
            >导出</el-button
          >
        </el-form-item>
      </el-form>
    </div> -->

    <div class="table">
      <el-table
        ref="report-table"
        style="width: 100%"
        max-height="910"
        :cell-style="{ padding: '1.8px 0' }"
        id="el-table"
        :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        :header-cell-style="headerStyle"
      >
        <el-table-column
          prop="stationName"
          label="换热站名称"
          width="350"
          fixed
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="timeStr"
          label="报警日期时间"
          width="350"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="tagValue"
          label="真实值"
          width="250"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="limitTagValue"
          label="设定值"
          width="250"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="alarmTip"
          label="报警描述"
          width="650"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column label="操作" width="100" fixed="right">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="affirm" fixed="right"
              >确认报警</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        align="center"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[25, 30]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>

    <!-- <div>
      <SysDlialog ref="dialog" :title="title" :rowData="rowData"> </SysDlialog>
    </div> -->
  </div>
</template>
<script>
import DateTimePicker from "components/common/DateTimePicker";
import SysDlialog from "./SysDlialog"; ////
import { options } from "assets/js/common/doorSelect";
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  data() {
    return {
      showAlarmHistoryData: [],
      tableData: [],
      tableData333: [],
      currentPage: 1, // 当前页码
      total: 50, // 总条数
      pageSize: 10, // 每页的数据条数
    };
  },
  created() {
    this.meterb;
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
    meterb() {
      this.tableData = this.$store.getters.stationAlarmSet;

      this.total = this.tableData.length; //数据的长度给分页总数用
      // this.sss = this.$store.getters.LKgetMeter_hufa;
    },
    vv() {
      this.tableData333 = this.$store.getters.stationAlarmSet;
      return this.tableData333;
    },
  },
  mounted() {},
  methods: {
    //每页条数改变时触发 选择一页显示多少行
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      //console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    affirm() {
      console.log("确认报警");
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
  },
  components: {
    SysDlialog,
    DateTimePicker,
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
    top: 10px;
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
