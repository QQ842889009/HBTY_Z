/** 连选  可单选*/
<template>
  <div>
    <div class="block">
      <span class="demonstration"></span>
      <span class="c">选择位置</span>
      <el-cascader
        :options="options"
        :props="{ checkStrictly: true }"
        clearable
        @change="handleChange"
      ></el-cascader>
    </div>
  </div>
</template>

<script>
import Bus from "assets/js/bus.js";
export default {
  props: {
    options: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    handleChange(value) {
      console.log("***", value);
      Bus.$emit("val", value);
    },
  },
};
</script>
<style lang="scss">
.c {
  color: #000;
  font-size: 20px;
  padding: 20px;
}
</style>
