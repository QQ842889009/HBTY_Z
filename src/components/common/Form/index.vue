<template>
  <div class="form-wrap">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
      <template v-for="item in ruleFormconfig">
        <el-form-item
          v-if="item.type == 'input'"
          :key="item.prop"
          :label="item.label"
          :prop="item.prop"
          :ref="item.prop"
          style="width: 100%"
        >
          <el-input
            v-model="ruleForm[item.prop]"
            :type="item.inputType"
            :placeholder="item.placeholder || '请输入'"
          ></el-input>
        </el-form-item>

        <!--  -->

        <el-form-item
          v-else-if="item.type == 'select'"
          :key="item.prop"
          :label="item.label"
          :prop="item.prop"
          style="width: 100%"
        >
          <el-select
            v-model="ruleForm[item.prop]"
            :placeholder="item.placeholder || '请选择'"
            :ref="item.prop"
            :multiple="item.multiple || false"
            :collapse-tags="item.multiple || false"
            :filterable="item.filterable"
            class="collapse_class"
          >
            <el-option
              v-for="selectItem in item.options"
              :key="selectItem.value"
              :label="selectItem.label"
              :value="selectItem.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </template>

      <el-form-item class="btns">
        <el-button type="primary" @click="submitForm('ruleForm')">
          提交
        </el-button>
        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    ruleFormconfig: {
      type: Array,
      default() {
        return {};
      },
    },
    ruleForm: {
      type: Object,
      default() {
        return {};
      },
    },
    rules: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  data() {
    return {
      labelPosition: "right",
    };
  },
  methods: {
    // 提交
    submitForm(formName) {
      this.$emit("submitForm", formName);
    },
    // 重置
    resetForm(formName) {
      this.$emit("resetForm", formName);
    },
  },
};
</script>
<style  lang="scss" scoped>
form {
  display: flex;
  // align-items: center;
  // justify-content: center;
  flex-direction: column;
  padding: 0rem 0rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.form-wrap {
  width: 100%;
  //background-color: rosybrown;
  // width: 300px;
  .el-form {
    // color: red;
    // background-color: rgb(18, 156, 85);
    // // width: 600px;
  }
}
// .btns {
//   width: 100%;
//   text-align: right;
//   margin-top: 5px;
// }
// .sd {
//   width: 100%;
//   text-align: right;
//   //margin-top: 12px;
// }
// .el-form-item label:after {
//   content: "";
//   display: inline-block;
//   width: 100%;
// }

// .el-form-item__label {
//   text-align: justify;
//   height: 50px;
// }

// .el-form-item.is-required .el-form-item__label:before {
//   content: none !important;
// }
</style>
