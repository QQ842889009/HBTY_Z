/** 连选  可单选*/
<template>
  <div>
    <div class="block">
      <span class="demonstration"></span>
      <span class="c">选择位置</span>
     <el-cascader
    v-model="value"
    :options="options"
    size="small"
    @change="handleChange"></el-cascader>
</div>
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
      value: ["二十五号站", "琥珀小区三期", "五号楼", "一单元"],
      //value: [],
    };
  },

  methods: {
    handleChange(value) {
      console.log("***", value);
      Bus.$emit("valIndoorCard", value);
    },
  },
  created() {
    //this.tableData = this.$store.getters.get_doorDataAndInfo; //表格数据
    Bus.$emit("valIndoorCard", this.value);
  },
  mounted() {
    //  this.handleChange(this.value)
    Bus.$emit("valIndoorCard", this.value);
    console.log(" eee");
  },
};
</script>
<style lang="scss" scoped>
.c {
  color: #000;
  font-size: 20px;
  padding: 20px;
}
//选择换热站的框的宽度
.el-cascader {
  position: relative;
  font-size: 14px;
  line-height: 40px;
  width: 350px;
}
</style>
