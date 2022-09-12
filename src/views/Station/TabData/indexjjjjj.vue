<template>
  <div>
    <div class="bgc">
      <div class="inputk" v-show="isshowsearch === 0"></div>
      <!-- <div class="reyuan"><reyuandata></reyuandata></div> -->

      <div class="centre">
        <el-table
          :data="
            $store.getters.station.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            )
          "
          style="width: 100%; height: 100%"
          :row-style="{ height: '2px' }"
          border
          fixed
          :cell-style="cellStyle"
          :header-cell-style="headerStyle"
        >
          <!-- 0 -->
          <el-table-column
            fixed="left"
            label="换热站"
            prop="Station"
            width="140"
            height="50"
          >
            <template slot-scope="scope">
              <i
                class="el-icon-connection"
                v-if="!scope.row.comErr"
                style="font-size: 20px; color: #0ff11b; font-weight: 900"
              ></i>
              <i
                class="el-icon-link"
                v-else
                style="font-size: 20px; font-weight: 900; color: red"
              ></i>
              {{ scope.row.Station }}
            </template>
            <!-- <span> <i class="el-icon-user"></i></span> -->
          </el-table-column>
          <!-- 1 -->
          <el-table-column label="面积(w㎡)" prop="Space" width="65">
          </el-table-column>
          <!-- 2 -->
          <el-table-column label="供温(℃)" prop="TE11" width="65">
          </el-table-column>
          <!-- 3 -->
          <el-table-column label="回温(℃)" prop="TE12" width="65">
          </el-table-column>
          <!-- <el-table-column label="一网总回温5(℃)" prop="TE12_Z" width="115">
          </el-table-column> -->
          <!-- 4 -->
          <el-table-column label="供压(MPa)" prop="PT11" width="65">
          </el-table-column>
          <!-- 5 -->
          <el-table-column label="阀后压(MPa)" prop="PT11_FV" width="65">
          </el-table-column>
          <!-- 6 -->
          <el-table-column label="回压(MPa)" prop="PT12" width="65">
          </el-table-column>
          <!-- 7 -->
          <el-table-column label="流 量(t/h)" prop="FT11" width="65">
          </el-table-column>
          <!-- 8 -->
          <el-table-column label="电动阀(%)" prop="FV1FB" width="65">
          </el-table-column>
          <!-- <el-table-column label="二网阀开度(%)" prop="FV2FB" width="120">
          </el-table-column> -->
          <!-- <el-table-column label="1#循环泵(Hz)" prop="BP21FB" width="120">
          </el-table-column> -->
          <!-- 9 -->
          <el-table-column label="" prop="line" width="2"> </el-table-column>
          <!-- 10 -->
          <el-table-column label="供温(℃)" prop="TE21" width="65">
          </el-table-column>
          <!-- 11 -->
          <el-table-column label="回温(℃)" prop="TE22" width="65">
          </el-table-column>

          <!-- 12 -->
          <el-table-column label="供压(MPa)" prop="PT21" width="65">
          </el-table-column>
          <!-- 13 -->
          <el-table-column label="回压(MPa)" prop="PT22" width="65">
          </el-table-column>
          <!-- 14 -->
          <el-table-column label="泵前(MPa)" prop="PT22_BF" width="65">
          </el-table-column>
          <!-- 15 -->
          <el-table-column label="泵后压(MPa)" prop="PT22_BL" width="65">
          </el-table-column>
          <el-table-column label="流 量(t/h)" prop="FT21" width="65">
          </el-table-column>
          <!-- 16 -->
          <el-table-column label="循环泵(Hz)" prop="BP21FB" width="75">
            <template slot-scope="scope">
              <i
                class="el-icon-loading"
                v-show="scope.row.BP21FB > 5 && !scope.row.BP21A"
                style="font-size: 20px; color: #0ff11b; font-weight: 900"
              ></i>
              <i
                class="el-icon-magic-stick"
                v-show="scope.row.BP21FB < 5 && !scope.row.BP21A"
                style="font-size: 20px; font-weight: 900"
                :style="{ color: iconColor }"
              ></i>
              <i
                class="el-icon-s-opportunity"
                v-show="scope.row.BP21A"
                style="
                  font-size: 20px;
                  color: red;
                  font-weight: 900;
                  float: right;
                "
              ></i>

              {{ scope.row.BP21FB }}
            </template>
          </el-table-column>
          <!-- 17 -->
          <el-table-column label="二网阀(%)" prop="FV2FB" width="60">
          </el-table-column>
          <!-- 18 -->
          <el-table-column label="补水后温(℃)" prop="TE22_MP" width="75">
          </el-table-column>
          <!-- 19 -->
          <el-table-column label="补水泵" prop="" width="55">
            <template slot-scope="scope">
              <i
                class="el-icon-loading"
                v-show="scope.row.MP1C && !scope.row.MP1A"
                style="font-size: 20px; color: #0ff11b; font-weight: 900"
              ></i>
              <i
                class="el-icon-magic-stick"
                v-show="!scope.row.MP1C && !scope.row.MP1A"
                style="font-size: 20px; font-weight: 900"
                :style="{ color: iconColor }"
              ></i>
              <i
                class="el-icon-s-opportunity"
                v-show="scope.row.MP1A"
                style="
                  font-size: 20px;
                  color: red;
                  font-weight: 900;
                  float: right;
                "
              ></i>
            </template>
          </el-table-column>
          <!-- 20 -->
          <el-table-column label="潜水泵" prop="" width="55">
            <template slot-scope="scope">
              <i
                class="el-icon-loading"
                v-if="scope.row.MP2S"
                style="font-size: 20px; color: #0ff11b; font-weight: 900"
              ></i>
              <i
                class="el-icon-magic-stick"
                v-else
                style="font-size: 20px; font-weight: 900"
                :style="{ color: iconColor }"
              ></i>
            </template>
          </el-table-column>
          <!-- 21 -->
          <!-- <el-table-column label="深井" prop="" width="50"> </el-table-column> -->
          <!-- 22 -->
          <el-table-column label="泄压阀" prop="" width="55">
            <template slot-scope="scope">
              <i
                class="el-icon-loading"
                v-if="scope.row.XYVC"
                style="font-size: 20px; color: #0ff11b; font-weight: 900"
              ></i>
              <i
                class="el-icon-magic-stick"
                v-else
                style="font-size: 20px; font-weight: 900"
                :style="{ color: iconColor }"
              ></i>
            </template>
          </el-table-column>
          <!-- 23 -->
          <el-table-column label="液位(m)" prop="LT" width="55">
          </el-table-column>

          <el-table-column label="补水量(m³)" prop="ZFT31" width="75">
          </el-table-column>

          <el-table-column
            label="电 能(kWh)"
            prop="DL"
            width="88
          "
          >
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
// import reyuandata from "views/web2021/module/reyuandata"; //信息
import { mapState } from "vuex";
import dataStaPlan from "assets/js/sjzlData/sjzlDataPlanMeter"; //
import Bus from "assets/js/bus.js";
// 分两步    第一步引用
// import tree from "assets/js/Tree/tree.js";
// import LoginVue from "../../login/Login.vue";
export default {
  data() {
    return {
      iconColor: "red",
      isShow: false,
      startaudio: 0,
      // isCollapse: false, //菜单的折叠和展开
      isshowsearch: 0,
      dataStaPlan,

      keywords: "", //输入查找的关键词
      tableData: [], //表需要的数组
      tableDataTemp: [], //表需要的数组
      search: "", //这个好像是没有用了  用element查找时用来着，现在查找不是用element做了
      //下面是分页所用
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 33, // 每页的数据条数
      row: 0,
      dataClick: [],
      XXXXX: 0.31,
      setPT21_H: 0,
      setPT22_L: 0,
      setLT_H: 0,

      setPT21_H_eliminate: 0,
      setname: 0,
      alarmDatas: [],
      alarmLimDatas: [],
      Alertobj: {},
      RestrictArray: [], //报警限制数组、
      AlertArray: [], //报警数组
      ComerrArray: [], //PLC通讯报警
      // alarmL: [
      //   { Sid: 5, tag: "PT21", markTag: 1, PT21_alarmL: 1, PT22_alarmL: 0 },
      //   { Sid: 7, tag: "PT21", markTag: 1, PT21_alarmL: 0, PT22_alarmL: 1 },
      // ],
      dialogVisible: false,
      dialogVisible_PT22_L: false,
      dialogVisible_LT_H: false,
      dialogVisibleqwer: false,
      setriqi: "",
      setshijian: "",

      //上面是分页所用

      // dataTree,
    };
  },
  props: {
    isCollapse: {
      type: Boolean,
    },
  },
  created() {
    //这个是生命周期函数，当组件建立时出发里面的东西，以此为例出发的是计算属性中的meterb
    this.meterb;

    // //console.log("站内数据***********************************");
    // //console.log(this.$store.getters.wtS7Datas);
    // //console.log(this.tableData);
    this.dataClick = tree.dataClick;
    // //console.log("lllll");
    // //console.log(this.dataClick);
    // this.btyhrz();
  },
  computed: {
    // created() {
    //   //这个是生命周期函数，当组件建立时出发里面的东西，以此为例出发的是计算属性中的meterb
    //   this.meterb;
    //    this.dataClick = tree.dataClisew
    // },
    headerStyle() {
      return {
        background: "#66B1FF",
        padding: "5px 0",
        height: "30px",
        borderColor: "#006CC1",
        textAlign: "center",
        // color: "#FEFEFE",
        fontSize: "14px",
        color: "black",
        borderColor: "black",
      };
    },

    ...mapState(["iselementwidth"]),
    //生命周期函数当切换到此组件时就会自动执行此代码完了再 created里面引用它
    meterb() {
      this.alarmDatas = this.$store.getters.getLkAlarmData;
      this.alarmLimDatas = this.$store.getters.getLkAlarmLimData;
      // this.tableDataTemp = this.$store.getters.wtS7Datas;
      this.Alert = this.$store.getters.Alert;
      //报警限制的数组
      this.RestrictArray = this.$store.getters.MLRestrictArray;
      //console.log("穆棱限制报警的数组");
      //console.log(this.RestrictArray);
      //报警的数组
      this.AlertArray = this.$store.getters.MLAlertArray;
      //console.log("穆棱报警的数组");
      //console.log(this.AlertArray);
      this.ComerrArray = this.$store.getters.MLComerr;

      //console.log("穆棱PLC通讯报警");
      //console.log(this.ComerrArray);
      //报警对象
      this.Alertobj = this.$store.getters.wtS7Alertobj;
      //报警数组
      this.AlarmLarray = this.$store.getters.wtS7DatasAlert;

      // for (let i = 0; i < this.tableDataTemp.length; i++) {

      //   // this.tableDataTemp[i].comErr = this.$store.getters.MLComerr[i];
      //   this.tableData.push(this.tableDataTemp[i]);
      // }
      // // //console.log("hhhhhhkkkkkkk：");
      // //console.log(this.tableDataTemp);
      // this.tableData = this.$store.getters.wtS7Datas;
      this.row = parseInt(this.tableData.length / this.pageSize);
    },
  },
  watch: {
    //X里的数值变化时就执行{}里的东西
    startaudio() {
      this.startplay();
    },
    keywords() {
      this.search01(this.keywords); //理解为关键次变化后这个从新计算得到一个新数组
      //// this.btyhrz();
    },
  },
  mounted() {
    this.currentTime(); //日期时间的
    //理解生命周期函数一直监听数据刷新
    //this.dataClick =[{station:"000",branch:"000"},{station:"碧涛苑站",branch:"站"},{station:"碧涛苑站",branch:"1支线南"},{station:"碧涛苑站",branch:"1支线北"},{station:"碧涛苑站",branch:"1支线"}]
    // Bus.$on("val", (data) => {
    //   //console.log("接收到的数据：" + data);
    //   if (this.dataClick[data].branch === "站") {
    //     this.tableData = this.dataStaPlan.threedatastation(
    //       this.$store.getters.wtMeterDatas,
    //       this.dataClick[data].station
    //     );
    //   } else {
    //     this.tableData = this.dataStaPlan.threedatastationrearbranch(
    //       this.$store.getters.wtMeterDatas,
    //       this.dataClick[data].station,
    //       this.dataClick[data].branch
    //     );
    //   }
    // });
  },

  methods: {
    //获取瞬时时间的第一步的函数开始
    formatDate() {
      let date = new Date();
      let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let day = date.getDate(); // 日
      let week = date.getDay(); // 星期
      let weekArr = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let hour = date.getHours(); // 时
      hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
      let minute = date.getMinutes(); // 分
      minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
      let second = date.getSeconds(); // 秒
      second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
      this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
      this.nowhour = hour;
      this.nowminute = minute;
      this.nowsecond = second;
      this.setriqi = `${year}/${month}/${day} `;
      this.setshijian = `${hour}:${minute}:${second} `;
    },
    currentTime() {
      setInterval(this.formatDate, 500);
      setInterval(this.shujugenxin, 500);
    },
    shujugenxin() {
      // this.Alertobj = this.$store.getters.wtS7Alertobj;
      // this.Alert = this.$store.getters.wtS7DatasAlert;
      // //console.log("报警数组：");
      // //console.log(this.Alert);
    },

    //设置斑马纹颜色
    // tableRowClassName({ rowIndex }) {
    //   if (rowIndex % 2 === 0) {
    //     return "warning-row";
    //   } else if (rowIndex % 2 === 1) {
    //     return "success-row";
    //   }
    //   return "";
    // },

    //设置改变表格里面的边框颜色。
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (column.property === "line") {
        //
        return "border-color:black!important; color:#0000ff!important; padding:0px!important; background:red;";
      }
      let len = this.alarmDatas.length;
      for (let i = 0; i < len; i++) {
        //通讯报警行变为灰色
        if (row.Sid == i) {
          if (this.$store.getters.MLComerr[i] === 1) {
            this.isShow = true;
            if (column.property === "Station") {
              // return "  background:#909399!important;height:40px!important;color:#ffffff!important";
              return " padding:0px!important; background:#909399!important;height:5px!important";
            } else {
              this.iconColor = "#909399";

              // return "  background:#909399!important;height:40px!important;color:#909399!important";
              return " padding:0px!important; background:#909399!important;height:5px!important";
            }
          }

          //普通的报警单个框变为粉色
          switch (column.property) {
            case "PT21":
              if (this.alarmDatas[i].PT21_alarmH === 1) {
                return "height:5px!important;padding:0px!important; border-color:black!important; color:#000000!important; padding:0px!important;  background:pink;height:5px!important;";
              }
              break;
            case "PT22":
              if (this.alarmDatas[i].PT22_alarmL == 1) {
                return "height:5px!important;padding:0px!important; border-color:black!important; color:#000000!important; padding:0px!important;  background:pink;height:5px!important;";
              }
              break;
            case "LT":
              if (this.alarmDatas[i].LT_alarmH === 1) {
                return "height:5px!important;padding:0px!important; border-color:black!important; color:#000000!important; padding:0px!important;  background:pink;height:5px!important;";
              }

              if (this.alarmDatas[i].LT_alarmL === 1) {
                return "height:5px!important;padding:0px!important; border-color:black!important; color:#000000!important; padding:0px!important;  background:pink;height:5px!important;";
              }

              break;
            // case "BP21FB":
            //   if (this.tableDataTemp[i].BP21FB > 5) {
            //     return "height:35px!important; border-bottom: 6px solid red!important;";
            //   }

            //   break;
          }
        }
      }

      ///下方为双色条
      if (rowIndex % 4 === 0) {
        return " background: #FDF5E6;padding:0px!important;border-color:#FFFFFF;color:#000000; font-family: 'Lao UI'; font-weight: 500; ";
      }
      if (rowIndex % 4 === 2) {
        return " background: #F0F9EB;padding:0px!important;border-color:#FFFFFF; color:#000000;font-family: 'Lao UI'; font-weight: 500;";
      }

      if (column.property === "line") {
        // if (column.label === "供压(MPa)") {
        // if (column.prop === "TT") {

        return "background:#006CC1";
      }
      //设置分界颜色结束
      //设置一网阀门颜色开始
      if (column.property === "FV1FB" && row.FV1FB < 5) {
        // if (column.label === "供压(MPa)") {
        // if (column.prop === "TT") {
        // return "height:35px!important;font-weight:bold;font-size:16px;border-color:black!important; color:#0000ff!important; padding:0px!important; height:40px!important";
        return "height:5px!important;padding:0px!important;font-weight:bold;border-color:black!important; color:#0000ff!important; padding:0px!important; background:pink;height:40px!important";
      }
      if (column.property === "BP21FB" && row.Sid === 25) {
        // if (column.label === "供压(MPa)") {
        // if (column.prop === "TT") {

        return "height:5px!important;padding:0px!important;font-weight:bold;border-color:black!important; color:#ffffff!important; background:#ffffff;";
      }
      if (column.property === "BP21FB" && row.BP21FB < 5) {
        // if (column.label === "供压(MPa)") {
        // if (column.prop === "TT") {

        return "height:5px!important;padding:0px!important;font-weight:bold;border-color:black!important; color:#0000ff!important; padding:0px!important; background:pink;";
      }

      return "height:3px!important;  padding:0px!important; ;color:#000000; font-family: 'Lao UI'; font-weight: 500;";
    },

    togleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    //每页条数改变时触发 选择一页显示多少行
    handleSizeChange(val) {
      //console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      //console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    //根据输入的关键词查找
    search01(keywords) {
      // //console.log(keywords);
      //根据关键词搜索
      var newdataAyy = [];
      this.tableData = this.$store.getters.wtMeterDatas;
      this.row = parseInt(this.tableData.length / this.pageSize);

      this.tableData.forEach((i) => {
        if (i.Station.indexOf(keywords) != -1) {
          newdataAyy.push(i);
        }
      });

      this.tableData = newdataAyy;

      //console.log(this.tableData);

      return this.tableData;
    },
    //这是报表上操作的按钮 目的是打开dialogVisible  和找到Sid
    PT21_operation(index, row) {
      //理解其中
      //index 目前用不着，
      //row   这一行的各个数值
      this.dialogVisible = true;

      this.setSid = row.Sid;
      this.setname = row.Station;
      // this.$router.push({
      //   path: "FVSPHuFa",
      //   query: { Meter: parseInt(row.Sid) },
      // });
    },
    PT22_operation(index, row) {
      //理解其中
      //index 目前用不着，
      //row   这一行的各个数值
      this.dialogVisible_PT22_L = true;

      this.setSid = row.Sid;
      this.setname = row.Station;
      // this.$router.push({
      //   path: "FVSPHuFa",
      //   query: { Meter: parseInt(row.Sid) },
      // });
    },
    LT_H_operation(index, row) {
      //理解其中
      //index 目前用不着，
      //row   这一行的各个数值
      this.dialogVisible_LT_H = true;

      this.setSid = row.Sid;
      this.setname = row.Station;
      // this.$router.push({
      //   path: "FVSPHuFa",
      //   query: { Meter: parseInt(row.Sid) },
      // });
    },
    PT21_operation_eliminate(index, row) {
      //理解其中
      //index 目前用不着，
      //row   这一行的各个数值
      // this.dialogVisibleqwer = true;

      this.setSid = row.Sid;
      this.setname = row.Station;

      this.$confirm("是否消除" + this.setname + "的报警", {
        confirmButtonText: "确定",
        cancelButtonText: "返回",
        // type: "error",
        // type: "warning",
      })
        .then(() => {
          this.setPT21_H_eliminate = 0;
          let msg = {
            name: "admin",
            sid: this.setSid,
            sdate: this.setriqi,
            stime: this.setshijian,
            tag: "PT21_alarmL",
            value: this.setPT21_H_eliminate,
          };
          this.dialogVisibleqwer = false;
          this.$wsSend("/hbty/fySetLimitData", msg);
          //console.log(msg);
        })
        .catch(() => {
          this.dialogVisibleqwer = false;
          // //console.log(msg);
        });
      // this.$router.push({
      //   path: "FVSPHuFa",
      //   query: { Meter: parseInt(row.Sid) },
      // });
    },
    //这个是点击操作后  打开了dialogVisible  上边的按钮
    setPT21_H_Button() {
      //理解其中
      //index 目前用不着，
      //row   这一行的各个数值

      this.$confirm(this.setname + "二供压力高限：" + this.setPT21_H, {
        confirmButtonText: "确定",
        cancelButtonText: "返回",
        // type: "error",
        // type: "warning",
      })
        .then(() => {
          let msg = {
            name: "admin",
            sid: this.setSid,
            sdate: this.setriqi,
            stime: this.setshijian,
            plcTag: "aPT21H",
            tagValue: this.setPT21_H,
          };
          this.dialogVisible = false;
          this.$wsSend("/hbty/fySetLimitData", msg);
          //console.log(msg);
        })
        .catch(() => {
          this.dialogVisible = false;
          // //console.log(msg);
        });

      ///

      // this.$router.push({
      //   path: "FVSPHuFa",
      //   query: { Meter: parseInt(row.Sid) },
      // });
    },
    setPT22_L_Button() {
      //理解其中
      //index 目前用不着，
      //row   这一行的各个数值

      this.$confirm(this.setname + "二回压力低限：" + this.setPT22_L, {
        confirmButtonText: "确定",
        cancelButtonText: "返回",
        // type: "error",
        // type: "warning",
      })
        .then(() => {
          let msg = {
            name: "admin",
            sid: this.setSid,
            sdate: this.setriqi,
            stime: this.setshijian,
            plcTag: "aPT22L",
            tagValue: this.setPT22_L,
          };
          this.dialogVisible_PT22_L = false;
          this.$wsSend("/hbty/fySetLimitData", msg);
          //console.log(msg);
        })
        .catch(() => {
          this.dialogVisible_PT22_L = false;
          // //console.log(msg);
        });
    },
    setLT_H_Button() {
      //理解其中
      //index 目前用不着，
      //row   这一行的各个数值

      this.$confirm(this.setname + "液位高限：" + this.setLT_H, {
        confirmButtonText: "确定",
        cancelButtonText: "返回",
        // type: "error",
        // type: "warning",
      })
        .then(() => {
          let msg = {
            name: "admin",
            sid: this.setSid,
            sdate: this.setriqi,
            stime: this.setshijian,
            plcTag: "aLTH",
            tagValue: this.setLT_H,
          };
          this.dialogVisible_LT_H = false;
          this.$wsSend("/hbty/fySetLimitData", msg);
          //console.log(msg);
        })
        .catch(() => {
          this.dialogVisible_LT_H = false;
          // //console.log(msg);
        });

      ///

      // this.$router.push({
      //   path: "FVSPHuFa",
      //   query: { Meter: parseInt(row.Sid) },
      // });
    },
    setPT21_H_Button_eliminate() {
      //理解其中
      //index 目前用不着，
      //row   这一行的各个数值

      this.$confirm("是否消除" + this.setname + "的报警", {
        confirmButtonText: "确定",
        cancelButtonText: "返回",
        // type: "error",
        // type: "warning",
      })
        .then(() => {
          this.setPT21_H_eliminate = 0;
          let msg = {
            name: "admin",
            sid: this.setSid,
            sdate: this.setriqi,
            stime: this.setshijian,
            tag: "PT21_alarmL",
            value: this.setPT21_H_eliminate,
          };
          this.dialogVisibleqwer = false;
          this.$wsSend("/hbty/wtSetData", msg);
          //console.log(msg);
        })
        .catch(() => {
          this.dialogVisibleqwer = false;
          // //console.log(msg);
        });

      ///

      // this.$router.push({
      //   path: "FVSPHuFa",
      //   query: { Meter: parseInt(row.Sid) },
      // });
    },
  },
  components: {
    dataStaPlan,
    reyuandata,
    // dataTree
  },
};
</script>

<style lang="scss" scoped>
// /deep/ .el-table thead {
//   color: #ce1717;
//   font-weight: 500;
//   border-bottom: 1px solid #000;
// }
// /deep/ .el-table::before {
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   height: 0px;
// }

// /deep/ .el-table,
// /deep/ .el-table__expanded-cell {
//   background-color: transparent;
//   color: rgb(88, 15, 15);
//   font-size: 20px; /*字体大小*/
//   line-height: 30px; /*行高*/
//   font-family: "Lao UI"; /*字体类型：如果没有幼圆就显示黑体，没有黑体就显示默认*/

//   font-weight: bold;
// }

// /deep/ .el-table th,
// /deep/ .el-table tr,
// /deep/ .el-table td {
//   background-color: transparent;
//   // border: none; //消除边框
// }
// /deep/ .el-table::before {
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   height: 0px;
// }
// // /deep/ .el-table tr:hover td {
// //   background: pink;
// // }
// /deep/.el-table__body tr.hover-row > td.el-table__cell {
//   background-color: transparent;
// }

/////////////////////////////////////////////////////////////////////////
.bgc {
  // background-color: #005caf;
  position: relative; //以子组件的形式过去 必须加这个  不然沾满全屏
  .inputk {
    position: relative;
    // background-color: rgb(219, 16, 16);
    width: 100%;
    height: 25px;
    .input {
      position: absolute;
      // left: 10px;
      right: 1px;
    }
    // height: 50px;
  }
  // .el-icon-edit {
  //   color: #000;
  //   text-align: center;
  // }

  /deep/.el-table .cell {
    text-align: center;
  }
  .reyuan {
    height: 50px;
    // width: 900px;
    margin-left: 10px;
    //background-color: rgb(228, 26, 26);
    // position: absolute;
    // top:-3px;
    // z-index:99;
  }
}
// .el-table td,
// .el-table th.is-leaf,
// .el-table--border,
// .el-table--group {
//   border-color: black;
// }
// .el-table--border::after,
// .el-table--group::after,
// .el-table::before {
//   background-color: black;
// }
//.ppp {
// background-color: red;
//}
.spnumber {
  width: 60px;
  height: 28px;
  font-size: 0.5rem;
  background-color: #e6a23c; //橙色
  border-radius: 5px;
  position: absolute;
  top: 110px;
  left: 90px;
}
.spnumberB {
  // width: 60px;
  // height: 28px;
  // font-size: 0.5rem;
  // background-color: #e6a23c; //橙色
  // border-radius: 5px;
  position: absolute;
  top: 110px;
  left: 180px;
}
</style>
