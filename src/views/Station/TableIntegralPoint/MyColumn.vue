<template>
  <el-table-column
    :prop="col.prop"
    :key="`col_${index}`"
    :label="col.label"
    align="center"
    :fixed="col.fixed"
    :width="col.width"
  >
    <template v-if="col.children">
      <my-column
        v-for="(item, index) in col.children"
        v-if="item.type === 'state'"
        :key="index"
        :col="item"
      ></my-column>
      <my-column
        v-for="(item, index) in col.children"
        v-if="item.type === 'text'"
        :key="index"
        :col="item"
      ></my-column>
    </template>
  </el-table-column>
</template>
<script>
//
import Sortable from "sortablejs"; //
export default {
  data() {
    return {};
  },
  name: "MyColumn",
  props: {
    col: {
      type: Object, ////
    },
    dropCol: {
      type: Array, ////
    },
    index: {
      type: Number, ////
    },
  },
  created() {},
};
</script>
<style scoped>
</style>