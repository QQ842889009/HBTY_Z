<template>
  <div class="unit-container">
    {{ vv.length }}
    <div>
      <audio
        :src="alarmVoiceAddr"
        id="audioPlayer"
        controls
        loop="loop"
        v-show="bbb === 4"
      ></audio>
    </div>

    <!-- <div class="table">
      <el-table
        ref="report-table"
        style="width: 100%"
        max-height="910"
        :cell-style="{ padding: '1.8px 0' }"
        id="el-table"
        :data="vv.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
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
            <el-button
              type="primary"
              size="mini"
              @click="affirm(scope.row)"
              fixed="right"
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
        :total="vv.length"
      >
      </el-pagination>
    </div> -->

    <!-- <div>
      <SysDlialog ref="dialog" :title="title" :rowData="rowData"> </SysDlialog>
    </div> -->
  </div>
</template>
<script>
// import { acknowledgeAlarm } from "@/utils/common";
// import DateTimePicker from "components/common/DateTimePicker";
// import SysDlialog from "./SysDlialog"; ////
// import { options } from "assets/js/common/doorSelect";
// import FileSaver from "file-saver";
// import XLSX from "xlsx";
export default {
  data() {
    return {
      bbb: 2,
      alarmVoiceAddr: "", //每次都将声音数组地址中的要播放的地址给他//
      alarmVoicePointer: 0, //用于指示,马上要播放的声音地址数组中的那个前缀
      user: null,
      id: null,
      mp3: null,
      // showAlarmHistoryData: [],
      // tableData: [],
      // tableData333: [],
      // currentPage: 1, // 当前页码
      // total: 50, // 总条数
      // pageSize: 25, // 每页的数据条数
    };
  },
  created() {
    // this.meterb;
  },
  updated() {
    this.aRefresh();
    this.aaa();
    // this.aBlink();
  },
  watch: {},
  computed: {
    // headerStyle() {
    //   return {
    //     background: "#66B1FF",
    //     padding: "5px 0",
    //     height: "30px",
    //     borderColor: "#006CC1",
    //     textAlign: "center",
    //     // color: "#FEFEFE",
    //     fontSize: "14px",
    //     color: "#fff",
    //     borderColor: "black",
    //   };
    // },
    // meterb() {
    //   this.tableData = this.$store.getters.stationAlarmSet;
    //   // console.log("this.tableData", this.tableData.length);
    //   this.total = this.tableData.length; //数据的长度给分页总数用
    //   // this.sss = this.$store.getters.LKgetMeter_hufa;
    // },
    vv() {
      this.mp3 = this.$store.getters.stationAlarmSet.length;
      return this.mp3;
    },
  },
  mounted() {},
  methods: {
    aRefresh() {
      this.aPause();
      this.alarmVoicePointer = 0;
    },
    aPause() {
      document.getElementById("audioPlayer").pause();
    },
    aaa() {
      if (this.vv > 0) {
        document.getElementById("audioPlayer").play();
        this.alarmVoiceAddr = require("assets/music/" +
          this.$store.getters.stationAlarmSet[0].alarmTip +
          ".mp3");
      }
    },
  },
  components: {},
};
</script>
<style lang="scss" scoped>
</style>
