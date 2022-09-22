<template>
  <div class="all">
    <div class="data">
      <div class="a">
        <SelectDateAndTime
          class="b"
          @dateandtime="Toinquirebutton"
        ></SelectDateAndTime>
      </div>
      <div class="c">
        <el-button class="d" @click="exportExcel('整点报表')"
          >导出报表</el-button
        >
      </div>
      <!-- <div class="data1"> -->
      <!-- <SelectDateAndTime
        class="data1-1"
        @dateandtime="Toinquirebutton"
      ></SelectDateAndTime> -->

      <!-- <div class="data1-2">
        <el-button @click="exportExcel('整点报表')">导出</el-button>
      </div> -->
      <!-- </div> -->
      <!-- <div class="data1">
        <SelectDateAndTime
          class="data2"
          @dateandtime="Toinquirebutton"
        ></SelectDateAndTime>
      </div> -->
    </div>

    <!-- <div><el-button @click="exportExcel(123)">导出</el-button></div> -->

    <div class="table">
      <el-table
        ref="report-table"
        :data="myData"
        style="width: 100%"
        max-height="910"
        :cell-style="{ padding: '1.8px 0' }"
        :header-cell-style="headerStyle"
      >
        <el-table-column
          prop="station"
          label="站点名称"
          width="140"
          fixed
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="space"
          label="面积"
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
          <!-- <el-table-column
            prop="bp22fb"
            label="2#泵(Hz)"
            width="120"
            align="center"
          >
          </el-table-column> -->
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
import SelectDateAndTime from "components/common/SelectDateAndTime"; //选择日期时间的模板
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  name: "project",
  data() {
    return {
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
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "c",
          city: "普陀区",
          address: "15",
          zip: 1660205157000,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "20",
          zip: 1660288787000,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "c",
          city: "普陀区",
          address: "15",
          zip: 1660288787000,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "20",
          zip: 1660288787000,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "c",
          city: "普陀区",
          address: "15",
          zip: 1660288787000,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "20",
          zip: 1660288787000,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "c",
          city: "普陀区",
          address: "15",
          zip: 1660288787000,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "20",
          zip: 1660288787000,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "c",
          city: "普陀区",
          address: "15",
          zip: 1660288787000,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "20",
          zip: 1660288787000,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "c",
          city: "普陀区",
          address: "15",
          zip: 1660288787000,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "20",
          zip: 1660288787000,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "d",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
    };
  },

  components: {
    SelectDateAndTime,
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
  methods: {
    async Toinquirebutton(v) {
      console.log("tyty", v);
      //var time = Date.parse(new Date(this.v).toString());
      var time = v;
      console.log("ttt", time);
      this.myData = await this.$http.post(
        "plcdata/tems/plc/DatasByTime",

        { time }
      );
      console.log("ttt222", this.myData);
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
  mounted() {},
};
</script>
<style lang="scss" scoped>
.all {
  background-color: rgb(240, 232, 232);
  width: 100%;
  height: 100%;
  .data {
    width: 100%;
    height: 40px;
    //background-color: rgb(204, 83, 83);
    position: relative;
    .a {
      width: 250px;
      height: 100%;
      // background-color: gold;
      position: absolute;
      right: 130px;
      .b {
        // line-height: 80px;
      }
    }
    .c {
      width: 100px;
      height: 100%;
      //  background-color: blueviolet;
      position: absolute;
      right: 50px;
      // .d {
      //   height: 40px;
      //   line-height: 60px;
      // }
    }
    // .data1-1 {
    //   position: absolute;
    //   right: 300px;
    //   //  top: 20px;
    //   background-color: blue;
    // }
    // .data2 {
    //   position: absolute;
    //   right: 100px;
    //   top: 20px;
    // }
  }
}
.table {
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
