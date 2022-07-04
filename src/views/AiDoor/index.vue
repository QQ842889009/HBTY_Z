<template>
  <div>
    <Form
      :ruleFormconfig="ruleFormconfig"
      :ruleForm="ruleForm"
      :rules="rules"
      @submitForm="submitForm"
      @resetForm="resetForm"
    >
    </Form>
  </div>
</template>

<script>
// import From from "./Form";
import Form from "components/common/Form"; //
// import { ruleFormconfig, rules, ruleForm } from "@/utils/indoor";
export default {
  name: "Dashboard",
  components: {
    Form,
  },
  data() {
    return {
      ruleFormconfig: ruleFormconfig, //配置
      rules: rules, //效验规则
      ruleForm: ruleForm, //传递的数据  对象
      ff: { a: "1", b: "12", c: "4441" },
    };
  },
  created() {},
  methods: {
    // 提交
    submitForm(formName) {
      this.$refs.form.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(
            "确定的数据,这里要有一个后端接口传递出要更改的数据",
            this.ruleForm
          );
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置
    resetForm(formName) {
      this.$refs.form.$refs[formName].resetFields();
      console.log("重置");
    },
  },
};
</script>
<style  lang="scss" scoped>
</style>
