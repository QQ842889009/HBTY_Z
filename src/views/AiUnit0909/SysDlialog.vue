



<template>
  <div class="dialog-consumer">
    <el-dialog
      :modal-append-to-body="false"
      :title="title"
      :visible.sync="dialogVisible"
      :width="width + 'px'"
      :height="height + 'px'"
      :before-close="handleClose"
    >
      <div class="a">
        <div class="shijian">
          <DateTimePicker
            class="picker"
            @EmitDateTimePicker="receiveDateTimePicker"
          ></DateTimePicker>
        </div>
        <div class="quxian">
          曲线
          <EchartLine :getData="indoorque" />
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import EchartLine from "../Visual/components/EchartLine.vue";
import DateTimePicker from "components/common/DateTimePicker";
export default {
  components: {
    DateTimePicker,
    EchartLine,
  },
  name: "ArticleList",

  props: {
    title: {
      type: String,
      default: "标题",
    },
    rowData: {
      type: Object,
      default: function () {
        return {};
      },
    },
    tableData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    width: {
      type: Number,
      default: 1500,
    },
    height: {
      type: Number,
      default: 850,
    },
  },
  data() {
    return {
      labelPosition: "right",

      dialogVisible: false,
      indoorque: [
        {
          event_time: "2022-06-23",
          temp: "24",
        },
        {
          event_time: "2022-06-24",
          temp: "10",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleClose(done) {
      this.dialogVisible = false;
    },
    receiveDateTimePicker(v) {
      // if (v.length > 0) {
      //   console.log("11111", v);
      //   let a = v[0];
      //   let b = v[1];
      //   this.startingTime = Date.parse(new Date(a).toString());
      //   this.endTime = Date.parse(new Date(b).toString());
      //   console.log("1221", this.startingTime, this.endTime);
      //   this.gg();
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-form {
  display: flex !important;
  align-items: stretch !important;
  justify-content: center !important;
  flex-direction: column !important;
  padding: 0rem 0rem !important;
  transition: all 0.2s 0.7s !important;
  overflow: hidden !important;
  grid-column: 1 / 2 !important;
  grid-row: 1 / 2 !important;
}
::v-deep {
  .el-dialog__wrapper {
    .el-dialog {
      background-color: #fff !important;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      .el-dialog__header {
        background-color: #1890ff !important;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 5px 15px 5px;
        //height: 30px;
        // text-align: center;
        .el-dialog__title {
          // position: relative;
          // top: 18px;
          // left: 10px;
          color: #fff;
          // font-size: 16px;
          // font-weight: 600;
        }
      }
      .el-dialog__headerbtn {
        position: absolute;
        top: 8px;
        right: 20px;
        padding: 0;
        background: 0 0;
        border: none;
        outline: 0;
        cursor: pointer;
        font-size: 16px;
      }
      .el-dialog__close {
        color: #fff;

        // position: relative;
        // top: -7px;
        // left: 10px;
      }
      .el-dialog__body {
        padding: 7px 7px !important;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
        width: 100%;
      }
    }
  }
}
.a {
  height: 450px;
  position: relative;
  .shijian {
    position: absolute;
    left: 1080px;
  }
  .quxian {
    height: 400px;
    width: 1480px;
    background-color: #fff;
    box-shadow: 10px 10px 25px #888888;
    position: absolute;
    top: 50px;
  }
}
</style>
