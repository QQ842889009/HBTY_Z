<template>
  <!-- clearable---是否可清空 -->
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
</template>

<script>
export default {
  data() {
    return {
      value: "", //input输入的值双向绑定
      temptableData: [], //临时数组
      exportDtat: [], //向父组件传递的数组
      exportTotal: null, //向组件传递的数组总条数
      width: this.wide, //接收父组件传递的宽度
    };
  },
  props: {
    //宽度
    wide: {
      type: String,
      default: "100px",
    },

    //大小
    size: {
      type: String,
      default: "",
    },
    //搜索提示
    placeholder: {
      type: String,
      default: "",
    },
    //所搜的关键词
    // findName: {
    //   type: String,
    //   default: "",
    // },
    findName: {
      type: Object,
      default() {
        return {};
      },
    },
    //图标
    prefixIcon: {
      type: String,
      default: "",
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
  created() {
    console.log("我是input输入查找  接收到的数组", this.data);
  },

  computed: {},

  components: {},
  methods: {
    change() {
      console.log("ryyr", this.value);
      this.temptableData = [];
      let a = this.findName.findName1; //a是根据换热站名搜
      console.log("数组是什么？", this.data);
      console.log("数组是什么？");
      console.log("要搜索的换热站名称AAA", a);

      this.data.filter((item) => {
        if (a in item) {
          if (item[a].toUpperCase().indexOf(this.value.toUpperCase()) > -1) {
            this.temptableData.push(item);
          } else {
            console.log("636363");
          }
        }
      });
      this.exportDtat = this.temptableData;
      this.exportTotal = this.exportDtat.length;

      this.$emit("change", this.exportDtat);
      console.log("*-*-*", this.exportDtat);
    },
  },
};
</script>

<style lang="scss" scoped>
// 深度赋值
/deep/.el-input__inner {
  //border-radius: 23px; //输入框的圆角
  background-color: transparent; //背景色是透明色
  border: 1px solid blue; //input的边框
  color: #000; //输入文字的颜色
  font-size: 10px;
  height: 29px;
}
/deep/.el-input__icon {
  color: blue; //搜索图标的颜色
}
</style>