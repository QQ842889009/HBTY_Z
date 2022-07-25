



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
      <span>户阀开度:</span>
      <el-input
        type="number"
        size="mini"
        max="100"
        min="0"
        v-model="rowData.FVSP"
        onkeyup="this.value=this.value.replace(/[\u4E00-\u9FA5]/g,'') "
        oninput="if(value>100)value=100;if(value<0)value=0"
        :disabled="rowData.Sid == disabled.is"
      >
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="clearForm(ruleForm)">取 消</el-button>
        <el-button size="mini" type="primary" @click="submitForm(rowData)"
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
  },
  data() {
    return {
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
  },
  mounted() {},
  watch: {
    // rowData(val) {
    //   //监听传递
    //   this.ruleForm.sid = val.Sid;
    //   this.ruleForm.concentratorCode = val.ConcentratorCode;
    //   this.ruleForm.valveCode = val.ValveCode;
    //   this.ruleForm.station = val.Station;
    //   this.ruleForm.community = val.Housing;
    //   this.ruleForm.tower = val.Tower;
    //   this.ruleForm.unit = val.Unit;
    //   this.ruleForm.num = val.Num;
    // },
  },
  methods: {
    changeInput() {
      console.log("rrrtttyy");
    },
    qq(v) {
      console.log("------------", v);
    },
    clearForm() {
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

    submitForm(v) {
      this.disabled.is = v.Sid;
      console.log("阀门给定传值", v);
      inDoorFvsp(v.Sid, v.FVSP, this.disabled);

      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     if (this.title === "修改设备参数") {
      //       Message({
      //         message: "我是修改设备参数的提示",
      //         type: "success",
      //       });
      //     }
      //     if (this.title === "删除设备") {
      //       Message({
      //         message: "我是删除设备参数的提示",
      //         type: "error",
      //       });
      //     }
      //     if (this.title === "增加设备") {
      //       Message({
      //         message: "我是增加设备参数的提示",
      //         type: "success",
      //       });
      //     }
      //     // Message({
      //     //   message: "提交成功",
      //     //   type: "success",
      //     // });
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
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
