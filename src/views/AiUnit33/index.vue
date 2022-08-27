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
        <el-table-column label="设备信息" align="center">
          <el-table-column prop="bp11_f" label="表号" width="80" align="center">
          </el-table-column>
          <el-table-column
            prop="bp11_h"
            label="集中器号"
            width="80"
            align="center"
          >
          </el-table-column>
        </el-table-column>
        <el-table-column label="设备位置信息" align="center">
          <el-table-column prop="bp11_f" label="站点" width="80" align="center">
          </el-table-column>
          <el-table-column prop="bp11_h" label="小区" width="80" align="center">
          </el-table-column>
          <el-table-column prop="bp11_h" label="楼" width="80" align="center">
          </el-table-column>
          <el-table-column prop="bp11_h" label="单元" width="80" align="center">
          </el-table-column>
        </el-table-column>
        <el-table-column label="一次侧数据" align="center">
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
      this.title = "修改设备参数";
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
