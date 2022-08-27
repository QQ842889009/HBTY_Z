<template>
  <div class="all">
    <div class="table">
      <el-table
        ref="report-table"
        :data="myData"
        style="width: 100%"
        max-height="950"
        :cell-style="{ padding: '1.8px 0' }"
        :header-cell-style="headerStyle"
      >
        <el-table-column
          prop="station"
          label="站点名称"
          width="140"
          align="center"
          fixed="left"
        >
        </el-table-column>
        <el-table-column
          prop="space"
          label="面积(W㎡)"
          width="90"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="space_k"
          label="面积系数"
          width="90"
          fixed="left"
          align="center"
        >
        </el-table-column>
        <el-table-column label="一次网1#泵参数" align="center">
          <el-table-column
            prop="bp11_f"
            label="流量(t/h)"
            width="80"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp11_h"
            label="扬程(m)"
            width="80"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp11_p"
            label="功率(Kw)"
            width="80"
            align="center"
          >
          </el-table-column>
        </el-table-column>
        <el-table-column label="一次网2#泵参数" align="center">
          <el-table-column
            prop="bp12_f"
            label="流量(t/h)"
            width="80"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp12_h"
            label="扬程(m)"
            width="80"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp12_p"
            label="功率(Kw)"
            width="80"
            align="center"
          >
          </el-table-column>
        </el-table-column>
        <el-table-column label="二次网1#泵参数" align="center">
          <el-table-column
            prop="bp21_f"
            label="流量(t/h)"
            width="80"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp21_h"
            label="扬程(m)"
            width="80"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp21_p"
            label="功率(Kw)"
            width="80"
            align="center"
          >
          </el-table-column>
        </el-table-column>
        <el-table-column label="二次网2#泵参数" align="center">
          <el-table-column
            prop="bp22_f"
            label="流量(t/h)"
            width="80"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp22_h"
            label="扬程(m)"
            width="80"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="bp22_p"
            label="功率(Kw)"
            width="80"
            align="center"
          >
          </el-table-column>
        </el-table-column>
        <el-table-column label="1#补水泵参数" align="center">
          <el-table-column
            prop="mp1_f"
            label="流量(t/h)"
            width="80"
            align="center"
            fixed="left"
          >
          </el-table-column>
          <el-table-column
            prop="mp1_h"
            label="扬程(m)"
            width="80"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="mp1_p"
            label="功率(Kw)"
            width="80"
            align="center"
          >
          </el-table-column>
        </el-table-column>
        <el-table-column label="2#补水泵参数" align="center">
          <el-table-column
            prop="mp2_f"
            label="流量(t/h)"
            width="80"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="mp2_h"
            label="扬程(m)"
            width="80"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="mp2_p"
            label="功率(Kw)"
            width="80"
            align="center"
          >
          </el-table-column>
        </el-table-column>
        <el-table-column label="换热站分支名称" align="center">
          <el-table-column
            prop="bra_name_1"
            label="分支一"
            width="120"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="bra_name_2"
            label="分支二"
            width="120"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="bra_name_3"
            label="分支三"
            width="100"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="bra_name_4"
            label="分支四"
            width="100"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="bra_name_5"
            label="分支五"
            width="100"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="bra_name_6"
            label="分支六"
            width="100"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="bra_name_7"
            label="分支七"
            width="100"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="bra_name_8"
            label="分支八"
            width="100"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="bra_name_9"
            label="分支九"
            width="100"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="bra_name_a"
            label="分支十"
            width="100"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
        </el-table-column>
        <el-table-column label="操作" width="150" fixed="right">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="refreshData"
              fixed="right"
              >刷新</el-button
            >
            <el-button
              type="primary"
              size="mini"
              @click="changeData(scope.row)"
              fixed="right"
              >修改</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <SysDlialog ref="dialog" :title="title" :rowData="rowData"> </SysDlialog>
  </div>
</template>

<script>
import SysDlialog from "./SysDlialog"; ////
export default {
  name: "project",
  data() {
    return {
      rowData: {},
      title: "参数修改",
      myData: [],
    };
  },

  components: {
    SysDlialog,
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
    async refreshData(v) {
      // console.log("tyty", v);
      // //var time = Date.parse(new Date(this.v).toString());
      var time = v;
      // console.log("ttt", time);
      this.myData = await this.$http.get("plcdata/tems/plc/stationInfo");
      // console.log("----", this.myData);
    },
    changeData(v) {
      this.title = "修改参数";
      this.rowData = { ...v };

      this.$refs.dialog.dialogVisible = true;
    },
  },
  mounted() {
    this.refreshData();
  },
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
