<template>
  <div class="A" @click="ccc">
    <!-- <el-badge :value="this.$store.getters.alarmalllen" class="num"> </el-badge> -->
    <span class="i"><i class="iconfont icon-baojing"></i></span>
    <div class="num">
      <el-badge :value="this.$store.getters.stationAlarmSet.length"> </el-badge>
    </div>

    <!-- <p v-show="dd === 5">www{{ count }}</p> -->
  </div>
</template>

<script>
// 第一步引入

export default {
  data() {
    return {
      dd: 0,
      ff: [],
    };
  },
  props: {},
  computed: {
    // count() {
    //   return this.$store.getters.aaa;
    // },
  },
  created() {},
  mounted() {
    // this.typing();
    // this.ff = this.$store.getters.alarmalllen;
    // this.dd = this.ff.length;
  },
  // mounted() {},
  methods: {
    ccc() {
      this.$router.push("/RealAlarm");
    },
  },

  components: {},
};
</script>

<style lang="scss">
.A {
  position: relative;
  .iconfont {
    color: rgb(241, 9, 9);
    font-size: 25px;
    position: absolute;
    top: 10px; //
  }
  .num {
    position: absolute;
    left: 10px;
    // width: 60px;
    // background-color: palegreen;
  }
}

// #divTyping {

//   width: 500px;
//   height: 700px;
//   white-space: pre;
// }
</style>
