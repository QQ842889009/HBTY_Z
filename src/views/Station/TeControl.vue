/** 换热站 温度控制*/
<template>
  <div>
    <iframe
      scrolling="no"
      src="https://tianqiapi.com/api.php?style=yd&skin=sogou"
      frameborder="0"
      width="100%"
      height="30"
      allowtransparency="true"
    ></iframe>
    <iframe
      scrolling="no"
      src="https://tianqiapi.com/api.php?style=yd&skin=baidu"
      frameborder="0"
      width="100%"
      height="30"
      allowtransparency="true"
    ></iframe>
    <iframe
      scrolling="no"
      src="https://tianqiapi.com/api.php?style=yd&skin=peach"
      frameborder="0"
      width="100%"
      height="30"
      allowtransparency="true"
    ></iframe>
    <iframe
      scrolling="no"
      src="https://tianqiapi.com/api.php?style=tz&skin=longan"
      frameborder="0"
      width="100%"
      height="30"
      allowtransparency="true"
    ></iframe>
    <!-- <div class="block">
      <span class="demonstration"></span>
      <el-cascader
        :options="options"
        :props="{ checkStrictly: true }"
        clearable
        @change="handleChange"
      ></el-cascader>
    </div> -->

    <!--搜索框开始  -->
    <div class="select">
      <el-input
        :prefix-icon="prefixIcon"
        v-model="value"
        :size="size"
        :clearable="clearable"
        :placeholder="placeholder"
        @change="change"
        @blur="change"
        :style="{ width: wide }"
        :data="data"
      ></el-input>
    </div>
    <!--搜索框结束  -->
    {{ temptableData }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      temptableData: [],
      // listArr: [
      //   { Sid: "0", Station: "二十五号站" },
      //   { Sid: "1", Station: "百合站" },
      //   { Sid: "2", Station: "交警大队" },
      // ],
    };
  },
  props: {
    //宽度
    wide: {
      type: String,
      default: "200px",
    },

    //大小
    size: {
      type: String,
      default: "",
    },
    //搜索提示
    placeholder: {
      type: String,
      default: "换热站名称",
    },

    findName: {
      type: Object,
      default() {
        return {};
      },
    },
    //图标
    prefixIcon: {
      type: String,
      default: "el-icon-search",
    },
    //是否清空
    clearable: {
      type: Boolean,
      default: true,
    },
    //接收父组件的数组  总的数组，在这个数组中通过关键词进行查找
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    handleChange(value) {
      console.log("***", value);
    },
    change() {
      this.temptableData = [];
      let a = "Station";
      // let b = this.findName.findName2; //b是根据小区名搜
      // console.log("要搜索的换热站名称AA", a);
      // console.log("要搜索的换热站名称BB", b);
      this.data.filter((item) => {
        if (a in item) {
          if (item[a].toUpperCase().indexOf(this.value.toUpperCase()) > -1) {
            this.temptableData.push(item);
          } else {
          }
        }
      });

      this.$emit("change", this.temptableData);
    },
  },
};
</script>
<style lang="scss">
</style>
