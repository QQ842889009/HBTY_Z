<template>
  <!-- 没有子级 -->
  <div class="aa">
    <el-menu-item :index="path" v-if="!item.children">
      <i class="el-icon-setting"></i>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>

    <!-- 有子级 -->
    <el-submenu :index="path" v-else>
      <template slot="title">{{ item.meta.title }}</template>
      <sideItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :path="getPath(child.path)"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from "path";
export default {
  name: "sideItem",
  data() {
    return {};
  },
  props: ["item", "path"],
  methods: {
    getPath(url) {
      // ('/a/b','./c')   ==== ('/a/b/c')
      console.log(this.path);
      console.log(path.resolve(this.path, url));
      return path.resolve(this.path, url);
    },
  },
};
</script>



<style lang="scss" scoped>
// .aa {
//   display: inline-block;
//   background-color: rgb(234, 238, 14);
//   background-color: transparent !important;
// }
// .sideItem {
//   background-color: transparent !important;
// }
</style>