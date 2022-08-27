/** 连选  可单选*/
<template>
  <div class="aaaaa">
    <div class="block">
      <span class="demonstration"></span>
      <span class="c">选择位置</span>
      <el-cascader
        :options="options"
        :props="{ checkStrictly: true }"
        clearable
        @change="infoChange"
      ></el-cascader>
    </div>
    <div class="block">
      <span class="demonstration"></span>
      <span class="c">在线/离线</span>
      <el-select
        v-model="selectionCondition.line"
        class="input"
        placeholder="状态"
        size="medium"
        clearable
        @change="lineChange"
      >
        <el-option label="在线" value="1" />
        <el-option label="离线" value="0" />
      </el-select>
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
    return {
      selectionCondition: {
        station: null,
        housing: null,
        line: null,
      },
    };
  },
  methods: {
    infoChange(value) {
      this.selectionCondition.station = value[0];
      this.selectionCondition.housing = value[1];
      console.log("222", this.selectionCondition);
      this.$emit("EmitinfoChangeVal", this.selectionCondition);
    },
    lineChange(value) {
      this.$emit("EmitlineChangeVal", value);
    },
  },
};
</script>
<style lang="scss" scoped>
.aaaaa {
  display: flex;
}
.c {
  color: #000;
  font-size: 20px;
  padding: 20px;
}
</style>
