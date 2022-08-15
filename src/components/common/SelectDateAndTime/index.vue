<template>
  <div class="all">
    <div class="checkTime">
      <el-date-picker
        size="large"
        value-format="yyyy-MM-dd HH:mm:ss"
        v-model="checkedTime"
        type="datetime"
        placeholder="选择日期时间"
        @change="Toinquirebutton"
        :clearable="false"
        :picker-options="pickerOptions"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script>
// 第一步引入

export default {
  data() {
    return {
      // referDate:"",
      checkedTime: "", //选择日期时间的
      pickerOptions: {
        disabledDate: (time) => {
          const maxTime = Date.now();
          return time.getTime() > maxTime;
        },
      },
    };
  },
  computed: {
    timeDefault() {
      let myyear = new Date().getFullYear();
      let mymonth = new Date().getMonth() + 1;
      let mydate = new Date().getDate();
      let mydatef = new Date().getDate() - 1;
      //                 let myhh = new Date().getHours();

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
      //                 let mynowTime1 =  myyear+'-'+mymonth+'-'+mydatef+ ' '+myhh+':'+mymm +':'+myss;
      //                 let mynowTime2 =  myyear+'-'+mymonth+'-'+mydate+ ' '+myhh+':'+mymm +':'+myss;
      //                 let mynowTime = [mynowTime1,mynowTime2];
      return mynowTime;
    },
  },
  created() {
    // 理解一下  就是刚进来时候先把前一天的时候给时间选择控件，给完一次就不能妨碍时间控件自己选择时间了  所以放在了这个生命周期函数里
    this.checkedTime = this.timeDefault;
    // this.ToDate = this.checkedTime.split(" ")[0];
    // this.ToTime = this.checkedTime.split(" ")[1];
  },
  mounted() {
    this.Toinquirebutton();
    // this.selectTime();
  },

  methods: {
    Toinquirebutton(v) {
      var time = Date.parse(new Date(this.checkedTime).toString());

      this.$emit("dateandtime", time);
    },
  },

  components: {},
};
</script>

<style lang="scss" scoped>
.all {
  position: relative;
  background-color: firebrick;
  .checkTime {
    position: absolute;
  }
  .inquirebutton {
    position: absolute;
    left: 220px;
  }
}
</style>
