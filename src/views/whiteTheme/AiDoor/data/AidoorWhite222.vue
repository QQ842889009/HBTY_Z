<template>
  <div class="ss">
    <span>1111</span>
    <button @click="hh">hh</button>
    <div id="start" class="a">start</div>
    <div id="end" class="b">end</div>
  </div>
</template>

<script>
import LeaderLine from "leader-line";
console.log(LeaderLine, "--------LeaderLine");
export default {
  components: {},
  data() {
    return {
      lineContainer: null,
      lineContainer2: null,
      lineContainer3: null,
      lineContainer4: null,
      lineContainer5: null,
    };
  },
  // 注册监听
  mounted() {
    //   this.getLine()
    // this.hh()
  },
  // 销毁监听，防止内存泄露
  destroyed() {},
  methods: {
    hh() {
      console.log("hh");
      let startEle = document.getElementById("start");
      let endEle = document.getElementById("end");
      console.log("2222", startEle, endEle);
      this.lineContainer5 = new LeaderLine(startEle, endEle, {
        color: "red",
        size: 8,
      });
      console.log("/*/*8989", this.lineContainer5);
    },
  },
};
</script>

<style  scoped>
.ss {
  width: 1500px;
  height: 900px;
  background-color: plum;
}
.a {
  width: 90px;
  height: 90px;

  background-color: red;
}

.b {
  position: relative;
  left: 500px;
  width: 90px;
  height: 90px;

  background-color: red;
}
</style>
