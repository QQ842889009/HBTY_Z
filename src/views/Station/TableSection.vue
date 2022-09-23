<template>
  <div class="all">
    <div class="data">
      <div class="data1">
        <span>选择站点：</span>
        <el-select
          class="selectStation"
          v-model="selectStation"
          filterable
          placeholder="选择换热站"
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
      <div class="data2">
        <span>选择时间：</span>
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
      <div class="data3">
        <span>时间间隔：</span>
        <el-select
          class="selectStation"
          v-model="selectTime"
          filterable
          placeholder="半小时"
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
      <div class="data4">
        <el-button type="primary" class="bt" @click="changeItem"
          >确定</el-button
        >
      </div>
      <div class="data5">
        <el-button type="primary" class="bt" @click="exportExcel('日报表')"
          >导出报表</el-button
        >
      </div>
    </div>

    <!-- <div><el-button @click="exportExcel(123)">导出</el-button></div> -->

    <div class="table">
      <el-table
        ref="report-table"
        :data="myData"
        style="width: 100%"
        max-height="910"
        :cell-style="{ padding: '5.5px 0' }"
        :header-cell-style="headerStyle"
      >
        <el-table-column
          prop="station"
          label="站点名称"
          width="150"
          fixed
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="space"
          label="面积"
          width="100"
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
        <el-table-column label="一次网" align="center">
          <el-table-column prop="ft11" label="流量" width="120" align="center">
            <!-- <template slot-scope="scope">
              {{ scope.row.province | Sid }}
            </template> -->
          </el-table-column>
          <el-table-column prop="q1" label="热量" width="120" align="center">
          </el-table-column>
          <el-table-column
            prop="q1_sum"
            label="累计热量"
            width="100"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="pt11"
            label="供压(MPa)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="pt12"
            label="回压(MPa)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="pt11_fv"
            label="除污器后压(MPa)"
            width="140"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="te11"
            label="供温(℃)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="te12"
            label="回温(℃)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="fv1fb"
            label="阀门开度(%)"
            width="120"
            align="center"
          >
          </el-table-column>
        </el-table-column>
        <el-table-column label="二次网" align="center">
          <el-table-column prop="ft21" label="流量" width="120" align="center">
            <!-- <template slot-scope="scope">
              {{ scope.row.province | Sid }}
            </template> -->
          </el-table-column>

          <el-table-column
            prop="pt21"
            label="供压(MPa)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="pt22"
            label="回压(MPa)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="pt21_fv"
            label="泵前压(MPa)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="pt21_hh"
            label="泵后压(MPa)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="te21"
            label="供温(℃)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="te22"
            label="回温(℃)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="fv2fb"
            label="阀门开度(%)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp21fb"
            label="1#泵(Hz)"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp22fb"
            label="2#泵(Hz)"
            width="120"
            align="center"
          >
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="lt"
          label="液位(m)"
          width="120"
          fixed="right"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="ft31"
          label="补水(m³)"
          width="120"
          fixed="right"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="dl" label="电能(kwh)" width="120" fixed="right">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SelectDateAndTime from "components/common/SelectDateAndTime"; //选择日期时间的模板
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  name: "project",
  data() {
    return {
      selectStation: "",
      timeArr: [
        { id: 0, name: "半小时", value: "0.5" },
        { id: 1, name: "1小时", value: "1" },
        { id: 2, name: "12小时", value: "12" },
        { id: 3, name: "24小时", value: "24" },
      ],
      selectDate: "",
      selectTime: "",
      myParams: {},
      dd: "c",
      selectDate: "",
      myData: [],
      myParams: {},

      pickerOptions: {
        disabledDate: (time) => {
          const maxTime = Date.now();
          return time.getTime() > maxTime;
        },
      },
    };
  },

  components: {
    SelectDateAndTime,
  },
  watch: {},
  created() {
    this.stations = this.$store.getters.stationInfos;
  },
  computed: {
    // ...mapState("realtime", ["stations"]),
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
  methods: {
    async changeItem() {
      // console.log("ivalue----", `station:${this.selectStation},item:${this.selectItem},date:${this.selectDate},time:${this.selectTime}`)
      var startTime = Date.parse(new Date(this.selectDate).toString());
      var endTime = startTime + this.selectTime * 60 * 60 * 1000;
      if (endTime > Date.now()) {
        return alert("时间加间隔超过当前时间");
      }
      this.myParams.sid = this.selectStation;
      // this.myParams.stArr = this.selectItem.value;
      this.myParams.startTime = startTime;
      this.myParams.endTime = endTime;
      this.myParams.size = 24;

      // console.log("---日报表的参数", this.myParams);
      this.myData = await this.$http.post(
        "plcdata/tems/plc/DatasByTimeScopeAndSizeAndSid",

        this.myParams
      );
      // this.myData = this.myData.reverse();
      // console.log("日报表接受到的数据", this.myData);

      // this.isUpdata++;
    },
    async Toinquirebutton(v) {
      console.log("tyty", v);
      var time = Date.parse(new Date(this.selectDate).toString());
      console.log(time);
      // this.myData = await this.$http.post(
      //   "plcdata/tems/plc/DatasByTime",

      //   { time }
      // );
      console.log("ttt", this.myData);
    },
    ddg() {
      console.log("*-*-", this.dd);
      this.dd = parseInt(this.dd, 16);
      console.log("*-*-", this.dd);
    },
    async gg() {
      var time = Date.parse(new Date(this.selectDate).toString());
      console.log(time);
      // this.myData = await this.$http.post(
      //   "plcdata/tems/plc/DatasByTime",

      //   { time }
      // );
      console.log("ttt", this.myData);
    },
    exportExcel(excelName) {
      try {
        const $e = this.$refs["report-table"].$el;
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
  mounted() {},
};
</script>
<style lang="scss" scoped>
.all {
  background-color: rgb(240, 232, 232);
  width: 100%;
  height: 100%;
  .data {
    display: flex;
    color: #000;
    position: relative;
    top: 0px;
    .data1 {
      flex: 1;
      //background-color: gold;
      text-align: right;
    }
    .data2 {
      flex: 1;
      //background-color: blue;
      text-align: right;
      // text-align: right;
      // padding: 0px 0px 0px 10px;
    }
    .data3 {
      flex: 1;
      // background-color: green;
      text-align: right;
    }
    .data4 {
      flex: 1;
      //background-color: purple;
    }
    .data5 {
      flex: 1;
      //  background-color: hotpink;
      //text-align: center;
      position: relative;
      // top: 0.25rem;
      right: -245px;
      // float: 20px;
    }
  }
}
.table {
  position: absolute;
  top: 120px;
  width: 1880px;
  height: 970px;
  // background-color: palevioletred;
  overflow: auto;
  margin: 0px 20px 20px 20px;
  padding: 0px 20px 20px 20px;
  // table-layout: fixed;
  // overflow: hidden;
  // display: inline-block;
  // position: absolute;
  // top: 1.6rem;
  // left: 10rem;
}
</style>
