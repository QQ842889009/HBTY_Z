
<template>
  <div class="aaa-box" :style="shape">
    <div class="aaa-head">
      <div class="head-left">
        <slot name="left-slot"></slot>
      </div>
      <div class="head-middle">
        <slot name="middle-slot"></slot>
      </div>
      <div class="head-right">
        <slot name="right-slot"></slot>
      </div>
    </div>
    <div class="content">
      <slot name="content-slot"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "aaa",
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.aaa-box {
  height: 100%;
  // background-color: rgb(196, 35, 35);

  margin: 5px 0 5px 0;
  .aaa-head {
    height: 10%;
    display: flex;
    color: #fff;

    .head-left {
      flex: 1;
      // margin: 5px 0 5px 0;
      // background-color: gold;
    }
    .head-middle {
      flex: 1;
      text-align: right;
      // background-color: green;
    }
    .head-right {
      flex: 1;
      text-align: right;
      // background-color: palevioletred;
    }
  }
}
</style>
