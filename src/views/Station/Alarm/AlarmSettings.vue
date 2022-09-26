<template>
  <div class="unit-container">
    <!-- {{ vv[0] }} -->
    <div class="table">
      <el-table
        v-loading="dataListLoading"
        fixed
        ref="report-table"
        :data="vv.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
        style="width: 100%"
        max-height="995"
        class="customer-table"
        :cell-style="{ padding: '0px 0' }"
        :header-cell-style="headerStyle"
        id="el-table"
        @selection-change="handleSelectionChange"
        :row-class-name="tableRowClassName"
        :style="zebarCrossingStyle"
        :row-key="getRowKey"
      >
        <el-table-column
          prop="station"
          label="换热站名称"
          width="100"
          fixed
          align="center"
        >
        </el-table-column>
        <el-table-column label="二供压力设置" align="center">
          <el-table-column
            prop="PT21"
            label="二供压力(MPa)"
            width="95"
            fixed="left"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="PT21H"
            label="二供压力高限(MPa)"
            width="120"
            fixed="left"
            align="center"
          >
            <template slot-scope="scope">
              <el-input-number
                style="width: 100%"
                size="mini"
                :min="0"
                :max="1.6"
                v-model="scope.row.PT21H"
                auto-complete="off"
                :precision="2"
                :controls="false"
                @change="PT21HBTN(scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column
            prop="PT21HH"
            label="二供压力高高限(MPa)"
            width="135"
            fixed="left"
            align="center"
          >
            <template slot-scope="scope">
              <el-input-number
                style="width: 100%"
                size="mini"
                :min="0"
                :max="1.6"
                v-model="scope.row.PT21HH"
                auto-complete="off"
                :precision="2"
                :controls="false"
                @change="PT21HHBTN(scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="二回压力设置" align="center">
          <el-table-column
            prop="PT21"
            label="二回压力(MPa)"
            width="95"
            fixed="left"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="PT22L"
            label="二回压力低限(MPa)"
            width="120"
            fixed="left"
            align="center"
          >
            <template slot-scope="scope">
              <el-input-number
                style="width: 100%"
                size="mini"
                :min="0"
                :max="1.6"
                v-model="scope.row.PT22L"
                auto-complete="off"
                :precision="2"
                :controls="false"
                @change="PT22LBTN(scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column
            prop="PT22LL"
            label="二回压力低低限(MPa)"
            width="135"
            fixed="left"
            align="center"
          >
            <template slot-scope="scope">
              <el-input-number
                style="width: 100%"
                size="mini"
                :min="0"
                :max="1.6"
                v-model="scope.row.PT22LL"
                auto-complete="off"
                :precision="2"
                :controls="false"
                @change="PT22LLBTN(scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column
            prop="PT22SP_HH"
            label="二回压力高高限(MPa)"
            width="135"
            fixed="left"
            align="center"
          >
            <template slot-scope="scope">
              <el-input-number
                style="width: 100%"
                size="mini"
                :min="0"
                :max="1.6"
                v-model="scope.row.PT22SP_HH"
                auto-complete="off"
                :precision="2"
                :controls="false"
                @change="PT22HHBTN(scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="液位设置" align="center">
          <el-table-column
            prop="LT"
            label="液位(m)"
            width="65"
            fixed="left"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="LTL"
            label="液位低限(m)"
            width="95"
            fixed="left"
            align="center"
          >
            <template slot-scope="scope">
              <el-input-number
                style="width: 100%"
                size="mini"
                :min="-3"
                :max="3"
                v-model="scope.row.LTL"
                auto-complete="off"
                :precision="2"
                :controls="false"
                @change="LTLBTN(scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column
            prop="LTLL"
            label="液位低低限(m)"
            width="105"
            fixed="left"
            align="center"
          >
            <template slot-scope="scope">
              <el-input-number
                style="width: 100%"
                size="mini"
                :min="-3"
                :max="3"
                v-model="scope.row.LTLL"
                auto-complete="off"
                :precision="2"
                :controls="false"
                @change="LTLLBTN(scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column
            prop="LTH"
            label="液位高限(m)"
            width="95"
            fixed="left"
            align="center"
          >
            <template slot-scope="scope">
              <el-input-number
                style="width: 100%"
                size="mini"
                :min="0"
                :max="1.6"
                v-model="scope.row.LTH"
                auto-complete="off"
                :precision="2"
                :controls="false"
                @change="LTHBTN(scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="变频·阀门设置" align="center">
          <el-table-column
            prop="BP21FB"
            label="1#循环泵低限"
            width="130"
            fixed="left"
            align="center"
          >
            <template slot-scope="scope">
              <el-input-number
                style="width: 100%"
                size="mini"
                :min="-50"
                :max="50"
                v-model="scope.row.BP21FB"
                auto-complete="off"
                :precision="2"
                :controls="false"
                @change="BP21BTN(scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column
            prop="BP22FB"
            label="2#循环泵低限"
            width="130"
            fixed="left"
            align="center"
          >
            <template slot-scope="scope">
              <el-input-number
                style="width: 100%"
                size="mini"
                :min="-50"
                :max="50"
                v-model="scope.row.BP22FB"
                auto-complete="off"
                :precision="2"
                :controls="false"
                @change="BP22BTN(scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column
            prop="FV1FB"
            label="一网阀门低限"
            width="130"
            fixed="left"
            align="center"
          >
            <template slot-scope="scope">
              <el-input-number
                style="width: 100%"
                size="mini"
                :min="-100"
                :max="100"
                v-model="scope.row.FV1FB"
                auto-complete="off"
                :precision="2"
                :controls="false"
                @change="FV1BTN(scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column
            prop="FV2FB"
            label="二网阀门低限"
            width="150"
            fixed="left"
            align="center"
          >
            <template slot-scope="scope">
              <el-input-number
                style="width: 100%"
                size="mini"
                :min="-100"
                :max="100"
                v-model="scope.row.FV2FB"
                auto-complete="off"
                :precision="2"
                :controls="false"
                @change="FV2BTN(scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import SysDlialog from "./SysDlialog"; ////
//临时数据
//import { options } from "assets/js/common/doorSelect";
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  data() {
    return {
      tableData: [],
      tableDataTemp: [],
      currentPage: 1, // 当前页码
      total: 50, // 总条数
      pageSize: 33, // 每页的数据条数
      dataListLoading: false,
      //斑马线颜色
      zebarCrossing: {
        crossingOne: "#0dc41a",
        crossingTwo: "#155f14",
        //crossingTwo: "#224394",
        colorOne: "#fff",
        colorTwo: "#fff",
      },
      selectID: [],
      station: "",

      community: "",
      noData: null,
      hour2: null,
      TonoData: null,
      Tohour2: null,
      pageIndex: 1,
      pageSize: 33,
      value: null,
      totalCount: 0,
      title: "室温曲线查询",
      selectStationSid: null,
      rowData: {},
      infoArr: [],
      multipleSelection: [],
      myData: [],

      info: "",
      dataForm: {
        malfunction: null, //故障
        communication: null, //通讯
      },

      // options: options,
      options: [],
      datah: 850, ///数据报表的高度 动态改
    };
  },
  created() {
    this.connection();
    // this.meterb;
    // this.askData();
    // this.asd();
    // this.requestIndoorData();
  },
  watch: {},
  computed: {
    vv() {
      this.tableData333 = this.$store.getters.alarmsettings;

      return this.tableData333;
    },
    headerStyle() {
      return {
        background: "#0dc41a",
        padding: "5px 0",
        height: "20px",
        borderColor: "#006CC1",
        textAlign: "center",
        // color: "#FEFEFE",
        fontSize: "14px",
        color: "#fff",
        borderColor: "black",
      };
    },
    // 斑马线的颜色
    zebarCrossingStyle() {
      return {
        "--crossingOne": this.zebarCrossing.crossingOne,
        "--crossingTwo": this.zebarCrossing.crossingTwo,
        "--colorOne": this.zebarCrossing.colorOne,
        "--colorTwo": this.zebarCrossing.colorTwo,
      };
    },
  },
  mounted() {
    // this.dd();
  },
  methods: {
    connection() {
      console.log("99999999-----------------------------");
      //初始化weosocket
      // 定义客户端的认证信息,按需求配置
      // 获取STOMP子协议的客户端对象
      // `http://221.206.242.116:9000/tems/publicTagServer`;
      let socket = new SockJS(
        `http://221.206.242.116:9000/tems/publicTagServer`
      ); //接口地址
      const stompClient = Stomp.over(socket);
      this.stompClient = stompClient;
      stompClient.debug = null;
      //  const useName = window.sessionStorage.getItem("userName");
      let headers = {
        //请求需要携带的一些入参
        username: "useName",
      };
      const _this = this;
      // 向服务器发起websocket连接
      stompClient.connect(
        headers,
        () => {
          stompClient.subscribe(`/topic/getResponse`, (msg) => {
            console.log(
              "*-*-*-*-*-*-*-*-*-*--*",
              JSON.parse(msg.body).warningtag
            );

            this.$store.commit(
              "STATIONAlARMARRAY",
              JSON.parse(msg.body).warningtag
            );
            // this.$store.commit(
            //   "STATIONAlARMARRAYaffirm",
            //   JSON.parse(msg.body).warningtagC
            // );
          });
        },
        (err) => {
          // 连接发生错误时的处理函数
          console.log("失败");
          console.log(err);
          // this.$router.push("/login");
        }
      );
    },
    disconnect() {
      if (this.stompClient) {
        console.log("进来了吗------", this.stompClient);
        this.stompClient.disconnect();
      }
    }, // 断开连接
    wwss() {},
    PT21HBTN(v) {
      console.log("v1v2", v);

      let msg = {
        // name: "admin",
        id: parseInt(v.id),
        sid: v.sid16,
        // sdate: this.setriqi,
        // stime: this.setshijian,
        tag: "pt21_h",
        num: parseFloat(v.PT21H),
      };
      if (this.stompClient) {
        console.log("报警设置设置连接是同的-------------");
        console.log(msg);
        this.stompClient.send("/alone", {}, JSON.stringify(msg));
      } else {
        console.log("b报警设置失败");
      }
    },
    PT22LBTN(v) {
      console.log("v1v2", v);

      let msg = {
        // name: "admin",
        id: parseInt(v.id),
        sid: v.sid16,
        // sdate: this.setriqi,
        // stime: this.setshijian,
        tag: "pt22_L",
        num: parseFloat(v.PT22L),
      };
      if (this.stompClient) {
        console.log("报警设置设置连接是同的-------------");
        console.log(msg);
        this.stompClient.send("/alone", {}, JSON.stringify(msg));
      } else {
        console.log("b报警设置失败");
      }
    },
    PT22LLBTN(v) {
      let msg = {
        // name: "admin",
        userName: "admin", //localStorage.getItem("userId"),
        sid: v.sid,
        plcTag: "PT22_LL",
        tagValue: v.PT22LL,
      };
      console.log("----------------pt22ll----------------", msg);
      if (this.$stompClient.connected === true) {
        // console.log("发送数据成化")
        this.$stompClient.send("/hbty/fySetupPLCA", {}, JSON.stringify(msg));
      }
    },
    PT21HHBTN(v) {
      let msg = {
        // name: "admin",
        userName: "admin", //localStorage.getItem("userId"),
        sid: v.sid,
        plcTag: "PT21_HH",
        tagValue: v.PT21HH,
      };
      console.log("------PT21HH------------", msg);
      if (this.$stompClient.connected === true) {
        // console.log("发送数据成化")
        this.$stompClient.send("/hbty/fySetupPLCA", {}, JSON.stringify(msg));
      }
    },
    PT22HHBTN(v) {
      let msg = {
        // name: "admin",
        userName: "admin", //localStorage.getItem("userId"),
        sid: v.sid,
        plcTag: "PT22SP_HH",
        tagValue: v.PT22SP_HH,
      };
      console.log("------PT22HH------------", msg);
      if (this.$stompClient.connected === true) {
        // console.log("发送数据成化")
        this.$stompClient.send("/hbty/fySetupPLCA", {}, JSON.stringify(msg));
      }
    },
    LTLLBTN(v) {
      let msg = {
        // name: "admin",
        userName: "admin", //localStorage.getItem("userId"),
        sid: v.sid,
        plcTag: "LT_LL",
        tagValue: v.LTLL,
      };

      if (this.$stompClient.connected === true) {
        // console.log("发送数据成化")
        this.$stompClient.send("/hbty/fySetupPLCA", {}, JSON.stringify(msg));
      }
    },
    LTLBTN(v) {
      let msg = {
        // name: "admin",
        userName: "admin", //localStorage.getItem("userId"),
        sid: v.sid,
        plcTag: "LT_L",
        tagValue: v.LTL,
      };
      console.log("液位低限");
      if (this.$stompClient.connected === true) {
        // console.log("发送数据成化")
        this.$stompClient.send("/hbty/fySetupPLCA", {}, JSON.stringify(msg));
      }
    },
    LTHBTN(v) {
      let msg = {
        // name: "admin",
        userName: "admin", //localStorage.getItem("userId"),
        sid: v.sid,
        plcTag: "LT_H",
        tagValue: v.LTH,
      };

      if (this.$stompClient.connected === true) {
        // console.log("发送数据成化")
        this.$stompClient.send("/hbty/fySetupPLCA", {}, JSON.stringify(msg));
      }
    },

    BP21BTN(v) {
      // console.log("v1v2", v);

      let msg = {
        // name: "admin",
        id: parseInt(v.id),
        sid: v.sid16,
        // sdate: this.setriqi,
        // stime: this.setshijian,
        tag: "bp21fb",
        num: parseFloat(v.BP21FB),
      };
      if (this.stompClient) {
        console.log("报警设置设置连接是同的-------------");
        console.log(msg);
        this.stompClient.send("/alone", {}, JSON.stringify(msg));
      } else {
        console.log("b报警设置失败");
      }
    },
    BP22BTN(v) {
      console.log("v1v2", v);

      let msg = {
        // name: "admin",
        id: parseInt(v.id),
        sid: v.sid16,
        // sdate: this.setriqi,
        // stime: this.setshijian,
        tag: "bp22fb",
        num: parseFloat(v.BP22FB),
      };
      if (this.stompClient) {
        console.log("报警设置设置连接是同的-------------");
        console.log(msg);
        this.stompClient.send("/alone", {}, JSON.stringify(msg));
      } else {
        console.log("b报警设置失败");
      }
    },
    FV1BTN(v) {
      console.log("v1v2", v);

      let msg = {
        // name: "admin",
        id: parseInt(v.id),
        sid: v.sid16,
        // sdate: this.setriqi,
        // stime: this.setshijian,
        tag: "fv1fb",
        num: parseFloat(v.FV1FB),
      };
      if (this.stompClient) {
        console.log("报警设置设置连接是同的-------------");
        console.log(msg);
        this.stompClient.send("/alone", {}, JSON.stringify(msg));
      } else {
        console.log("b报警设置失败");
      }
    },
    FV2BTN(v) {
      console.log("v1v2", v);

      let msg = {
        // name: "admin",
        id: parseInt(v.id),
        sid: v.sid16,
        // sdate: this.setriqi,
        // stime: this.setshijian,
        tag: "fv2fb",
        num: parseFloat(v.FV2FB),
      };
      if (this.stompClient) {
        console.log("报警设置设置连接是同的-------------");
        console.log(msg);
        this.stompClient.send("/alone", {}, JSON.stringify(msg));
      } else {
        console.log("b报警设置失败");
      }
    },
    changeInputAAA(v) {
      console.log("vvvvvvvv++v++v++vvv", v);
      let msg = {
        name: "admin",
        sid: v.sid,
        // sdate: this.setriqi,
        // stime: this.setshijian,
        plcTag: "PT21HH",
        tagValue: this.setPT21_H,
      };
      this.dialogVisible_PT21_H = false;
      this.$wsSend("/hbty/fySetLimitData", msg);
    },
    affirm(v) {
      // console.log("vvv", v);

      let data = {
        userId: parseInt(localStorage.getItem("userId")),
        id: v.id,
      };
      console.log("----", data);
      this.$http.post("plcdata/tems/plc/confirmWarning", data).then((res) => {
        console.log("报警确认----", res);
        if (res.code == 200) {
          this.$message({
            message: "操作成功",
            type: "success",
            duration: 500,
          });
        } else {
          this.$message({
            message: "操作失败",
            type: "error",
            duration: 500,
          });
        }
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      //console.log(`当前页: ${val}`);
      this.currentPage = val;
    },

    //解决[ElTable] prop row-key is required的错误
    getRowKey(row) {
      return row.id;
    },
    tableRowClassName({ row, rowIndex }) {
      if (this.selectID.length == 0) {
        if ((rowIndex + 1) % 2 === 0) {
          return "crossingOne"; //类名
        } else {
          return "crossingTwo"; //类名
        }
      }
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

  destroyed() {
    console.log("rrrrr");
    // this.websocketclose() //离开路由之后断开websocket连接
    this.disconnect();
  },

  components: {
    SysDlialog,
  },
};
</script>
<style lang="scss" >
.el-cascader-menu__wrap {
  height: 208px;
  background-color: green !important;
  color: #fff !important;
}
.el-cascader-node:not(.is-disabled):focus,
.el-cascader-node:not(.is-disabled):hover {
  background-color: rgba(62, 243, 16, 0.69);
}
</style>
<style lang="scss" scoped>
::v-deep {
  .el-cascader__dropdown {
    margin: 5px 0;
    margin-top: 5px;
    font-size: 14px;
    background-color: #ebb563 !important;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  //去固定的线
  .el-table__fixed-right::before {
    background-color: transparent !important ;
  }
  .el-table__fixed::before {
    background-color: transparent !important ;
  }
  //el-table__fixed-body-wrapper
  //去表格的线
  .el-table--border,
  .el-table--group {
    border: none;
    // border-right-color: rgb(235, 238, 245);
    // border-right-style: solid;
    // border-right-width: 1px;
    // border-bottom-color: rgb(235, 238, 245);
    // border-bottom-style: solid;
    // border-bottom-width: 1px;
  }
  .table-SelectedRow-bgcolor {
    td {
      background-color: #ebb563 !important;
    }
  }
  .el-table__row > td {
    /* 去除表格线 */
    border: none;
  }
  .el-table th.is-leaf {
    border-bottom: none; //去多余的横线
  }
  .el-table th.is-leaf {
    border-bottom: none; //去多余的横线
  }
  .el-pagination {
    // text-align: center;
    color: #000;
    height: 30px;
    // padding: 0.2rem 0.1rem;
    // background-color: rgb(241, 158, 62); //选中页码的颜色
  }
  .el-pagination.is-background .el-pager li:not(.disabled) {
    color: rgb(141, 138, 138);
    background-color: #14375c; //没有被选中的页码颜色
    background-color: transparent !important;
    background-color: red;
    //background-color: transparent;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    color: rgb(241, 158, 62);
    background-color: rgb(241, 158, 62); //选中页码的颜色
    //background-color: transparent !important;
    //background-color: transparent;
  }
  .el-pagination__total,
  .el-pagination__jump {
    color: #fff;
  }
  .btn-prev {
    background-color: #14375c;
    background-color: transparent !important;
    //color: rgb(32, 245, 32);
  }
  .btn-next {
    background-color: transparent !important;
    color: #fff;
  }
  .el-pager li.btn-quicknext,
  .el-pager li.btn-quickprev {
    line-height: 28px;
    color: #303133;
    color: #fff;
  }
  .el-pager li {
    padding: 0 4px;
    background: transparent !important;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    box-sizing: border-box;
  }
  .el-input__inner {
    background-color: transparent !important;
  }
  .el-pagination__jump {
    color: #000 !important; //前往xx页的字体颜色
  }
  .el-pagination__total {
    color: #000 !important; //总条数的颜色
  }
  .el-checkbox__inner {
    //color: rgb(241, 158, 62) !important; //总条数的颜色
    background-color: #66b1ff !important; //选框的颜色
    //border-radius: 50% !important; //圆角百分比
  }
  //斑马线的颜色
  .customer-table .crossingOne {
    background-color: var(--crossingOne);
    // background-color: red;
    color: var(--colorOne);
    opacity: 1;
  }
  .customer-table .crossingTwo {
    background-color: var(--crossingTwo);
    color: var(--colorTwo);
    opacity: 1;
  }

  //

  //分页的hover颜色
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #fff;
    background-color: #66b1ff !important;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active:hover {
    color: #14375c;
    background-color: #66b1ff !important;
  }
  // //没有fixed的时候用
  // .el-table tbody tr:hover > td {
  //   background-color: #66b1ff;
  //   background-color: #c0ccee;
  //   color: #000;
  //   font-size: 18px;
  // }
  //有fixed的时候用
  .el-table__body .el-table__row.hover-row td {
    background-color: #66b1ff;
    color: #000;
    font-size: 13px;
  }
  /*最外层透明   表格透明*/
  .el-table,
  .el-table__expanded-cell {
    background-color: transparent;
    // background-color: #061028;
  }
  /* 表格内背景颜色 表格透明 */
  .el-table th,
  .el-table tr,
  .el-table td {
    background-color: transparent;
  }
  //固定表头 目的是表头过长把单位用....表示   //表格头部多余内容...的第二步*第一部在methods中的tableRenderHeader
  .el-table th > .cell {
    // overflow: hidden; // 超出的文本隐藏
    // text-overflow: ellipsis; // 溢出用省略号显示
    // display: -webkit-box;
    // // white-space: nowrap; // 溢出不换行
    // //-webkit-line-clamp: 2;
    // white-space: nowrap;
    // -webkit-box-orient: vertical;
    // // color: red;
    white-space: pre;
  }
  .el-table--border::after,
  .el-table--group::after,
  .el-table::before {
    content: "";
    position: absolute;
    background-color: transparent; //去多余的横线
    z-index: 1;
  }
}
// 下拉菜单开始
/deep/.el-input--suffix .el-input__inner {
  //padding-right: 102px;
}
/deep/.el-input__inner {
  background-color: green;
  color: #fff;
  border: 1px solid #31cae4;
}

.el-select-dropdown__item {
  // font-size: 7px;
  //line-height: 19px;
  color: #fff;
  font-weight: 200;
  background-color: green;
}
// 背景全是绿

//三角色
// .el-popper .popper__arrow {
//   border-width: 6px;
//   border-top-width: 6px;
//   filter: drop-shadow(0 2px 12px rgba(5, 212, 23, 1));
// }
/deep/.el-select-dropdown {
  background-color: transparent;
  border: 1px solid blue;
}
/deep/.el-select-dropdown__list {
  padding: 0;
}
/deep/.el-popper[x-placement^="bottom"] {
  margin-top: 0px;
}
/deep/.el-popper .popper__arrow,
/deep/.el-popper .popper__arrow::after {
  display: none;
}
.el-select-dropdown__item:hover {
  background-color: rgba(0, 225, 219, 0.690196078431373);
  background-color: rgba(62, 243, 16, 0.69);
}
.el-select-dropdown__list {
  list-style: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
//下拉菜单结束
// 第一个选择站的开始

//第一个选择站的结束
// ::v-deep {
//   .el-form-item__label {
//     text-align: right;
//     vertical-align: middle;
//     float: left;
//     font-size: 23px;
//     color: #606266;
//     line-height: 40px;
//     padding: 0 12px 0 0;
//     box-sizing: border-box;
//   }
// }
.unit-container {
  color: #fff;
  width: 100%;
  height: 1000px;
  font-size: 30px;
  // background-color: red;
  // background: linear-gradient(
  //   90deg,
  //   rgba(30, 224, 24, 0.4) 0,
  //   rgba(0, 0, 0, 0.1) 50%,
  //   rgba(30, 224, 24, 0.4)
  // );
  position: relative;
  .condition-box {
    position: absolute;
    top: 30px;
    left: 50px;
    font-size: 30px;
  }
  .table {
    position: absolute;
    top: 0px;
    width: 1880px;
    height: 995px;
    //background-color: palevioletred;
    overflow: auto;
    margin: 0px 20px 0px 20px;
    padding: 0px 20px 0px 20px;
  }
}
</style>
