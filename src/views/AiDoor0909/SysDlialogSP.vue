



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
      <span v-show="selectSid.length == 0">{{ titl1 }}</span>
      <span v-show="selectSid.length > 0">{{ titl2 }}</span>
      <!-- {{ selectSid }} -->
      <el-input
        type="number"
        size="mini"
        max="100"
        min="0"
        v-model="FVSP"
        onkeyup="this.value=this.value.replace(/[\u4E00-\u9FA5]/g,'') "
        oninput="if(value>100)value=100;if(value<0)value=0"
        :disabled="rowData.Sid == disabled.is"
      >
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="clearForm()">取 消</el-button>
        <el-button
          :disabled="selectSid.length == 0"
          size="mini"
          type="primary"
          @click="submitForm()"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { Message } from "element-ui";
import {
  DoorRequestSingle,
  inDoorRequestAll_node,
  teHistory,
  inDoorFvsp,
  doorRequestAll_java,
} from "@/utils/common";
export default {
  name: "ArticleList",
  components: {},
  props: {
    title: {
      type: String,
      default: "标题",
    },
    // subhead: {
    //   type: String,
    //   default: "标题",
    // },

    rowData: {
      type: Object,
      default: function () {
        return {};
      },
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 250,
    },
    selectSid: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      FVSP: 100,
      titl1: "请选择户阀",
      titl2: "选择的户阀统一给定：",
      labelPosition: "right",
      ff: "",
      dialogVisible: false,
      disabled: {
        is: "qwer", //设置点击后的禁用
      },
    };
  },
  created() {
    console.log("rowData", this.rowData);
    console.log("接收选中的Sid的数组", this.selectSid);
  },
  mounted() {},

  watch: {},
  methods: {
    changeInput() {
      console.log("rrrtttyy");
    },
    qq(v) {
      console.log("------------", v);
    },
    clearForm() {
      this.dialogVisible = false;
    },

    submitForm() {
      console.log("我是阀门多选给定的按钮传递进来的数组是", this.selectSid);
      for (let i = 0; i < this.selectSid.length; i++) {
        console.log("erer", this.selectSid[i]);
        inDoorFvsp(this.selectSid[i], this.FVSP, { is: "2" });
      }
    },
    handleClose(done) {
      this.dialogVisible = false;
      // this.isbtn = 0;
      // this.ruleForm = {
      //   sid: "",
      //   station: "",
      //   Community: "",
      //   tower: "",
      //   unit: "",
      //   num: "",
      //   concentratorCode: "",
      //   valveCode: "",
      // };
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
</style>
