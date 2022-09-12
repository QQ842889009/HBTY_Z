<template>
  <div class="AAA">
    <div
      class="AAA-1"
      @click="A1"
      :class="[1 === this.activeA1 ? 'active2' : 'active1']"
    >
      工艺图例1
    </div>
    <div
      class="AAA-2"
      @click="A2"
      :class="[1 === this.activeA2 ? 'active2' : 'active1']"
    >
      工艺图例2
    </div>
    <div
      class="AAA-3"
      @click="A3"
      :class="[1 === this.activeA3 ? 'active2' : 'active1']"
    >
      工艺图例3
    </div>
    <div
      class="AAA-4"
      @click="A4"
      :class="[1 === this.activeA4 ? 'active2' : 'active1']"
    >
      工艺图例4
    </div>
  </div>
</template>

<script>
import Bus from "assets/js/bus.js";
export default {
  data() {
    return {
      activeA1: 1,
      activeA2: 0,
      activeA3: 0,
      activeA4: 0,
      UU: 1,
    };
  },
  methods: {
    A1() {
      this.activeA1 = 1;
      this.activeA2 = 0;
      this.activeA3 = 0;
      this.activeA4 = 0;
      this.UU = 1;
      Bus.$emit("A1234", this.UU);
    },
    A2() {
      this.activeA1 = 0;
      this.activeA2 = 1;
      this.activeA3 = 0;
      this.activeA4 = 0;
      this.UU = 2;
      Bus.$emit("A1234", this.UU);
    },
    A3() {
      this.activeA1 = 0;
      this.activeA2 = 0;
      this.activeA3 = 1;
      this.activeA4 = 0;
      this.UU = 3;
      Bus.$emit("A1234", this.UU);
    },
    A4() {
      this.activeA1 = 0;
      this.activeA2 = 0;
      this.activeA3 = 0;
      this.activeA4 = 1;
      this.UU = 4;
      Bus.$emit("A1234", this.UU);
    },
  },
  mounted() {
    //
  },
};
</script>

<style lang="scss"  >
.AAA {
  width: 450px;
  height: 30px;
  cursor: pointer; /*鼠标变小手*/
  // background-color: gold;
  display: flex;
  .AAA-1:hover {
    font-size: 22px;
    color: rgb(38, 238, 31);
  }
  .AAA-2:hover {
    font-size: 22px;
    color: rgb(38, 238, 31);
  }
  .AAA-3:hover {
    font-size: 22px;
    color: rgb(38, 238, 31);
  }
  .AAA-4:hover {
    font-size: 22px;
    color: rgb(38, 238, 31);
  }
  .AAA-1 {
    flex: 1;
  }
  .AAA-2 {
    flex: 1;
  }
  .AAA-3 {
    flex: 1;
  }
  .AAA-4 {
    flex: 1;
  }
}
.active1 {
  // border: 6px solid #ff6c00;
  color: #fff;
  font-size: 20px;
  // background: #fff7e9;
  // color: " black  ";
}
.active2 {
  // border: 6px solid #ff6c00;
  color: #fab908;
  color: #210cdf;
  font-size: 20px;
  // background: #fff7e9;
  // color: " black  ";
}
</style>