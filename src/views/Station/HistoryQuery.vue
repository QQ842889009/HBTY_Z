/** 换热站 历史查询*/
<template>
  <div class="block">
    <span class="demonstration">默认 click 触发子菜单</span>
    <el-cascader
      v-model="value"
      :options="options"
      @change="handleChange"
    ></el-cascader>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [],
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss">
</style>
