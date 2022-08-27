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
          >导出报表2</el-button
        >
      </div>
    </div>

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
          width="120"
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
          prop="space_k"
          label="面积系数"
          width="160"
          fixed="left"
          align="center"
        >
          <!-- <template slot-scope="scope">
            {{ scope.row.timestamp | getDate }}
          </template> -->
        </el-table-column>
        <el-table-column label="一次网1#泵参数" align="center">
          <el-table-column
            prop="bp11_f"
            label="流量"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp11_h"
            label="扬程"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp11_p"
            label="功率"
            width="100"
            align="center"
          >
          </el-table-column>
        </el-table-column>
        <el-table-column label="一次网2#泵参数" align="center">
          <el-table-column
            prop="bp12_f"
            label="流量"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp12_h"
            label="扬程"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp12_p"
            label="功率"
            width="100"
            align="center"
          >
          </el-table-column>
        </el-table-column>
        <el-table-column label="二次网1#泵参数" align="center">
          <el-table-column
            prop="bp21_f"
            label="流量"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp21_h"
            label="扬程"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp21_p"
            label="功率"
            width="100"
            align="center"
          >
          </el-table-column>
        </el-table-column>
        <el-table-column label="二次网2#泵参数" align="center">
          <el-table-column
            prop="bp22_f"
            label="流量"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp22_h"
            label="扬程"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp22_p"
            label="功率"
            width="100"
            align="center"
          >
          </el-table-column>
        </el-table-column>
        <el-table-column label="1#补水泵参数" align="center">
          <el-table-column prop="mp1_f" label="流量" width="120" align="center">
          </el-table-column>
          <el-table-column prop="mp1_h" label="扬程" width="120" align="center">
          </el-table-column>
          <el-table-column prop="mp1_p" label="功率" width="100" align="center">
          </el-table-column>
        </el-table-column>
        <el-table-column label="2#补水泵参数" align="center">
          <el-table-column prop="mp2_f" label="流量" width="120" align="center">
          </el-table-column>
          <el-table-column prop="mp2_h" label="扬程" width="120" align="center">
          </el-table-column>
          <el-table-column prop="mp2_p" label="功率" width="100" align="center">
          </el-table-column>
        </el-table-column>
        <el-table-column label="换热站分支名称" align="center">
          <el-table-column
            prop="bra_name_1"
            label="分支一"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bra_name_2"
            label="分支二"
            width="120"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bra_name_3"
            label="分支三"
            width="100"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bra_name_4"
            label="分支四"
            width="100"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bra_name_5"
            label="分支五"
            width="100"
            align="center"
          >
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import SelectDateAndTime from "components/common/SelectDateAndTime" //选择日期时间的模板
import FileSaver from "file-saver"
import XLSX from "xlsx"
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
          const maxTime = Date.now()
          return time.getTime() > maxTime
        }
      }
    }
  },

  components: {
    SelectDateAndTime
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
        borderColor: "black"
      }
    }
  },
  methods: {
    async Toinquirebutton(v) {
      console.log("tyty", v)
      //var time = Date.parse(new Date(this.v).toString());
      var time = v
      console.log("ttt", time)
      this.myData = await this.$http.get("plcdata/tems/plc/stationInfo")
      console.log("ttt", this.myData)
    },
    ddg() {
      console.log("*-*-", this.dd)
      this.dd = parseInt(this.dd, 16)
      console.log("*-*-", this.dd)
    },
    async gg() {
      var time = Date.parse(new Date(this.selectDate).toString())
      console.log(time)
      // this.myData = await this.$http.post(
      //   "plcdata/tems/plc/DatasByTime",

      //   { time }
      // );
      console.log("ttt", this.myData)
    },
    exportExcel(excelName) {
      try {
        const $e = this.$refs["report-table"].$el
        let $table = $e.querySelector(".el-table__fixed")
        if (!$table) {
          $table = $e
        }

        const wb = XLSX.utils.table_to_book($table, { raw: true })
        const wbout = XLSX.write(wb, {
          bookType: "xlsx",
          bookSST: true,
          type: "array"
        })
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream" }),
          `${excelName}.xlsx`
        )
      } catch (e) {
        if (typeof console !== "undefined") console.error(e)
      }
    }
  },
  mounted() {
    this.Toinquirebutton()
  }
}
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
