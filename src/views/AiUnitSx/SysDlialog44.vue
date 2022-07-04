
<template>
  <div class="dialog-consumer">
    <el-form
      :label-position="labelPosition"
      :model="ruleForm"
      ref="ruleForm"
      :rules="rules"
      label-width="auto"
    >
      <el-form-item label="表号" prop="sid">
        <el-input v-model="ruleForm.sid"></el-input>
      </el-form-item>
      <el-form-item label="换热站" prop="station">
        <el-select v-model="ruleForm.station" style="width: 100%">
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
form {
  display: flex;
  // align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 0rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
</style>
