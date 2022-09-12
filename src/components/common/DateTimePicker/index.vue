<template>
  <div>
    <el-date-picker
      v-model="value2"
      size="small"
      :style="styleVar"
      @change="Toinquirebutton"
      value-format="yyyy-MM-dd HH:mm:ss"
      type="datetimerange"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一天",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近二天",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 2);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三天",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 3);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近四天",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 4);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近五天",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 5);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近六天",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近七天",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },

      value2: [],
    };
  },
  props: {
    colors: {
      type: String,
      default: "#000",
    },
  },
  created() {
    this.getDate();
    this.Fungetdate();
    // this.Toinquirebutton(this.value2);
  },
  computed: {
    styleVar() {
      return {
        "--color1": this.colors,
      };
    },
    timeDefault() {
      let myyear = new Date().getFullYear();
      let mymonth = new Date().getMonth() + 1;
      let mydate = new Date().getDate();
      let mydatef = new Date().getDate() - 1;

      let myhh =
        new Date().getHours() < 10
          ? "0" + new Date().getHours()
          : new Date().getHours();
      let mymm =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();

      let myss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      let mynowTime =
        myyear +
        "-" +
        mymonth +
        "-" +
        mydatef +
        " " +
        myhh +
        ":" +
        mymm +
        ":" +
        myss;

      return mynowTime;
    },
  },
  watch: {},
  mounted() {},

  methods: {
    getDate() {
      let start = this.Fungetdate(-1);
      let end = this.Fungetdate(0);
      this.value2.push(start, end);

      // let startTo = Date.parse(new Date(start).toString());
      // let endTo = Date.parse(new Date(end).toString());

      this.$emit("EmitDateTimePicker", this.value2);
    },
    Fungetdate(num) {
      var dd = new Date();
      dd.setDate(dd.getDate() + num);
      var y = dd.getFullYear();
      var m = dd.getMonth() + 1; //获取当前月份的日期
      var d = dd.getDate();

      let myhh =
        new Date().getHours() < 10
          ? "0" + new Date().getHours()
          : new Date().getHours();
      let mymm =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      // if(mymm>1){
      // mymm = mymm-1;
      // }

      let myss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      return y + "-" + m + "-" + d + " " + myhh + ":" + mymm + ":" + myss;
    },
    Toinquirebutton(v) {
      console.log("时间选择的组件", v);
      this.$emit("EmitDateTimePicker", v);
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
// 深度赋值
// /deep/.el-input__inner {
//   border-radius: 23px; //输入框的圆角
//   background-color: transparent; //背景色是透明色
//   border: 1px solid blue; //input的边框
//   color: blue; //输入文字的颜色
//   font-size: 10px;
//   height: 29px;
// }
// /deep/.el-input__icon {
//   color: blue; //搜索图标的颜色
// }
// /deep/.picker {
//   border-radius: 323px; //输入框的圆角
// }
::v-deep {
  //常态下
  .el-range-editor {
    border-color: #409eff;
    border-radius: 6px;
  }
  //点击选择时
  .el-range-editor.is-active,
  .el-range-editor.is-active:hover {
    border-color: #14eb5b;
    border-radius: 22px;
  }
  .el-date-editor .el-range-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    outline: 0;
    display: inline-block;
    height: 100%;
    margin: 0;
    padding: 0;
    width: 39%;
    text-align: center;
    font-size: 14px;
    color: #000;
    color: var(--color1);
    background-color: transparent !important;
  }
}
</style>
