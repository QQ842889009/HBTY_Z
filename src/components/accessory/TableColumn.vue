<!--
 *通过id的大小来确定哪些列应该是固定的或者对齐方式也可以通过id确定
 *通过判断传递过来的表头是否有children，来确定递归操作，达到表头合一
 *coloumnHeader--对象数组，具体看js文件，
-->
<template>
  <el-table-column
    :label="coloumnHeader.label"
    :prop="coloumnHeader.prop"
    :align="coloumnHeader.id > 100 ? 'center' : 'left'"
    :fixed="coloumnHeader.id < 300"
    :width="coloumnHeader.width"
  >
    <template v-for="item in coloumnHeader.children">
      <tableColumn
        v-if="item.children && item.children.length"
        :key="item.id"
        :coloumn-header="item"
      ></tableColumn>
      <el-table-column
        v-else
        :key="item.name"
        :label="item.label"
        :prop="item.prop"
        :width="item.width"
        align="center"
      ></el-table-column>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "tableColumn",
  computed: {},
  methods: {},
  props: {
    coloumnHeader: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
