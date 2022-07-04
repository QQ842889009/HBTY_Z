



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
      <!--   -->
      <el-radio-group v-model="labelPosition" size="small">
        <el-radio-button label="left">左对齐</el-radio-button>
        <el-radio-button label="right">右对齐</el-radio-button>
        <el-radio-button label="top">顶部对齐</el-radio-button>
      </el-radio-group>
      <div style="margin: 20px"></div>
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="ruleForm"
        ref="ruleForm"
        :rules="rules"
      >
        <el-form-item label="表号" prop="sid">
          <el-input v-model="ruleForm.sid"></el-input>
        </el-form-item>
        <el-form-item label="换热站" prop="station">
          <el-select v-model="ruleForm.station">
            <el-option label="1#站" value="1#站"></el-option>
            <el-option label="2#站" value="2#站"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="小区" prop="community">
          <el-input v-model="ruleForm.community"></el-input>
        </el-form-item>
        <el-form-item label="楼">
          <el-input v-model="ruleForm.tower"></el-input>
        </el-form-item>
        <el-form-item label="单元">
          <el-input v-model="ruleForm.unit"></el-input>
        </el-form-item>
        <el-form-item label="室" prop="num">
          <el-input v-model="ruleForm.num"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer" v-if="isbtn === 5">
        <el-button @click="clearForm(ruleForm)">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { Message } from "element-ui";
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
      default: 600,
    },
    height: {
      type: Number,
      default: 250,
    },
  },
  data() {
    return {
      labelPosition: "right",
      ruleForm: {
        sid: "",
        station: "",
        community: "",
        tower: "",
        unit: "",
        num: "",
      },
      rules: {
        sid: [{ required: true, message: "请输入表号", trigger: "blur" }],

        community: [
          { required: true, message: "请输入小区名称", trigger: "blur" },
        ],
        station: [
          { required: true, message: "请选择换热站", trigger: "change" },
        ],
        num: [{ required: true, message: "请选择门牌号", trigger: "change" }],
      },
      dialogVisible: false,
      isbtn: 0,
      //ff: { a: "1", b: "12", c: "4441" },
    };
  },
  created() {},
  mounted() {},
  watch: {
    rowData(val) {
      //监听传递
      this.ruleForm.sid = val.Sid;
      this.ruleForm.station = val.Station;
      this.ruleForm.community = val.Community;
      this.ruleForm.tower = val.Tower;
      this.ruleForm.unit = val.Unit;
      this.ruleForm.num = val.Num;
    },
  },
  methods: {
    qq(v) {
      console.log("------------", v);
    },
    clearForm() {
      this.dialogVisible = false;
      this.isbtn = 0;
      this.ruleForm = {
        sid: "",
        station: "",
        Community: "",
        tower: "",
        unit: "",
        num: "",
      };
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.title === "修改设备参数") {
            Message({
              message: "我是修改设备参数的提示",
              type: "success",
            });
          }
          if (this.title === "删除设备") {
            Message({
              message: "我是删除设备参数的提示",
              type: "error",
            });
          }
          if (this.title === "增加设备") {
            Message({
              message: "我是增加设备参数的提示",
              type: "success",
            });
          }
          // Message({
          //   message: "提交成功",
          //   type: "success",
          // });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleClose(done) {
      this.dialogVisible = false;
      this.isbtn = 0;
      this.ruleForm = {
        sid: "",
        station: "",
        Community: "",
        tower: "",
        unit: "",
        num: "",
      };
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
