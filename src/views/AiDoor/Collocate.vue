
/** 配置文件*/

<template>
  <div class="filter-row">
    <el-checkbox
      v-model="item.showColumn"
      v-for="(item, index) in columnArr"
      :key="index"
      >{{ item.title }}</el-checkbox
    >
    <span style="padding: 10px"></span>
    <el-button @click="confirm" size="mini" type="primary"
      >确认配置列</el-button
    >
    <el-button @click="cancel" size="mini" type="primary">清除配置列</el-button>
  </div>
</template>
<script>
const { tableHeader, sendThis } = require("./TableConfig");
import { inDoorColumnCheckbox } from "@/assets/js/common/checkboxConfig";
export default {
  data() {
    return {
      //多选框的数据 数值来自import { inDoorColumnCheckbox } from "@/assets/js/checkboxConfig";
      columnArr: [],
      //table要展示的配置项***首先它是空的数组当生命周期mounted先去判断内存中是否有这个数值，
      //开始肯定是没有的
      //那么他就从import const { tableHeader, sendThis } = require("./index");里面拿值
      //这个值是其他组件需要的  ，那么整理好后要传给父组件
      tableConfig: [],
    };
  },
  created() {},
  computed: {},
  mounted() {
    //先判断内存中是否有这个东西 要是有就取出来5
    if (sessionStorage.getItem("headArr_indoor")) {
      this.columnArr = JSON.parse(sessionStorage.getItem("columnArr_indoor"));
      this.tableConfig = JSON.parse(sessionStorage.getItem("headArr_indoor"));
    } else {
      this.columnArr = inDoorColumnCheckbox;
      this.tableConfig = tableHeader;
    }
  },
  updated() {},
  watch: {},
  methods: {
    //点击重新配置
    confirm() {
      /*
          分为两个数组，选中的数组（显示数组）showshow、和未选中的数组（隐藏数组）hidehide。
              选中的要显示，未选中的去隐藏掉。选中数组和未选中数组里面存放的是title名字
              通过修改表头的isHidden属性来控制列的显示和隐藏
      */

      let showshow = [];
      let hidehide = [];
      this.columnArr.forEach((item) => {
        if (item.showColumn == true) {
          showshow.push(item.title);
        } else {
          hidehide.push(item.title);
        }
      });

      // 遍历显示数组，根据显示数组中的名字去修改对应表头数组的对象项的isHidden属性为false，
      //        为false就是不隐藏列，也就是显示列
      for (let i = 0; i < showshow.length; i++) {
        for (let j = 0; j < this.tableConfig.length; j++) {
          if (showshow[i] == this.tableConfig[j].lable) {
            this.tableConfig[j].isHidden = false;
          }
        }
      }

      // 遍历隐藏数组，思路同上

      for (let i = 0; i < hidehide.length; i++) {
        // console.log("ii", i);
        for (let j = 0; j < this.tableConfig.length; j++) {
          // console.log("jj", j, this.tableConfig[j].lable);
          if (hidehide[i] == this.tableConfig[j].lable) {
            this.tableConfig[j].isHidden = true;
          }
        }
      }

      // 最后本地存一份，永不丢失
      sessionStorage.setItem(
        "headArr_indoor",
        JSON.stringify(this.tableConfig)
      );
      sessionStorage.setItem(
        "columnArr_indoor",
        JSON.stringify(this.columnArr)
      );
      //发送给父组件
      this.$emit("EmitTableConfig", this.tableConfig); //
    },
    cancel() {
      console.log("清除内存配置");
      sessionStorage.removeItem(
        "headArr_indoor",
        JSON.stringify(this.tableConfig)
      );
      sessionStorage.removeItem(
        "columnArr_indoor",
        JSON.stringify(this.columnArr)
      );
    },
  },
  components: {},
};
</script>
<style lang="scss" scoped>
</style>
