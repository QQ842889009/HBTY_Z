<template>
  <div class="unit-container">
    <!-- {{ dataForm.alarmConfirm }} -->
    <div class="condition-box">
      <el-form :inline="true" :model="dataForm" ref="dataForm">
        <el-form-item prop="name" label="选择站点:">
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
    </div>

    <div class="table">
      <el-table
        ref="report-table"
        style="width: 100%"
        max-height="910"
        :cell-style="{ padding: '1.8px 0' }"
        id="el-table"
        :data="showAlarmHistoryData"
        :header-cell-style="headerStyle"
      >
        <el-table-column
          prop="stationInfo"
          label="换热站名称"
          width="350"
          fixed
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="time"
          label="报警日期时间"
          width="350"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="tag_value"
          label="真实值"
          width="250"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="limit_tag_value"
          label="设定值"
          width="250"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="alarm_tip"
          label="报警描述"
          width="650"
          fixed="left"
          align="center"
        >
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="sizeChangeHandle"
        @current-change="currentChangeHandle"
        :current-page="pageIndex"
        :page-sizes="[10, 20, 30]"
        :page-size="pageSize"
        :total="totalCount"
        layout="total, sizes, prev, pager, next, jumper"
      ></el-pagination>
    </div>
    <div v-show="tt === 5"></div>
    <div>
      <SysDlialog ref="dialog" :title="title" :rowData="rowData"> </SysDlialog>
    </div>
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
      pickerOptions: {
        disabledDate: (time) => {
          const maxTime = Date.now();
          return time.getTime() > maxTime;
        },
      },
      tt: 5,
      selectStationSid: null,
      selectDate: "",
      title: "我是标题",
      rowData: {},
      infoArr: [],
      alarmHistoryData: null,
      showAlarmHistoryData: [],
      myData: [
        {
          sid: "1#换热站",
          ConcentratorCode: "2020-02-02 09:06:04",
          station: "0.65",
          fv1sp: 0.33,
        },
      ],
      info: "",
      dataForm: {
        malfunction: null, //故障
        category: null, //通讯
        alarmConfirm: null, //是否被确认
      },

      options: options,
      pageIndex: 1,
      pageSize: 30,
      totalCount: 0,
      startingTime: null,
      endTime: null,
      category: null,
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
    receiveDateTimePicker(v) {
      if (v.length > 0) {
        console.log("11111", v);
        let a = v[0];
        let b = v[1];
        this.startingTime = Date.parse(new Date(a).toString());
        this.endTime = Date.parse(new Date(b).toString());
        console.log("1221", this.startingTime, this.endTime);
        this.gg();
      }
    },
    async askData() {
      this.infoArr = await this.$http.get("plcdata/tems/plc/stationInfo");
    },
    dd() {
      this.gg();
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
        sid: parseInt(this.selectStationSid),
        page: parseInt(this.pageIndex),
        length: parseInt(this.pageSize),
        startTime: this.startingTime,
        endTime: this.endTime,
        category: this.dataForm.category,
        alarmConfirm: parseInt(this.dataForm.alarmConfirm) ? true : false,
        userId: null,
      };
      console.log("报警历史查询", data);

      // this.alarmHistoryData = await this.$http.post(
      //   "plcdata/tems/plc/selectWarningByPage",
      //   data
      // );
      this.$http({
        method: "post",
        url: "plcdata/tems/plc/selectWarningByPage",
        data: data,
      })
        .then((res) => {
          console.log("接受到的数据", res);
          this.showAlarmHistoryData = res.page.list;
          this.totalCount = res.page.totalCount;
        })
        .catch((erroe) => {
          console.log("发送数据失败");
        });

      console.log("收到报警值数组", this.alarmHistoryData);
    },
    changeInput(v) {
      console.log("****", v);
    },
    reset() {
      this.selectStationSid = null;
      this.dataForm.malfunction = null;
      this.dataForm.category = null;
      this.dataForm.alarmConfirm = null;
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
