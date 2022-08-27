<template>
  <div class="dataBlockBox" :style="shape">
    <div class="tipBox">
      <div class="tipText">{{ tipName }}</div>
      <div class="tipMiddle">
        <slot name="tipMiddleSolt"></slot>
      </div>
      <div class="tipLast">
        <slot name="tipLastSolt"></slot>
      </div>
    </div>
    <div class="dataBox">
      <slot name="dataBoxSlot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    tipName: {
      type: String || Number,
      default: "数据展示",
    },
    shape: {
      type: Object,
      default: function () {
        return {
          height: "88.3%",
          width: "90%",
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.dataBlockBox {
  position: relative;
  overflow: hidden;
  // padding-top: 0.0625rem;
  // background: url("~@/assets/img/logo/gh.png") left top no-repeat;
  // background-size: 7rem;
  // height: 88.3%;
  // width: 90%;
  // aspect-ratio: 1;
  margin-bottom: 1rem;
  // border: 1px solid #000;
  // box-shadow: 0 0 3px 4px hsl(0, 0%, 0%, 0.7);
  box-shadow: 0px 0px 5px 4px #0bbd40 inset, 0px 0px 5px -4px #0bbd40;
  text-shadow: 1px 1px 1px #0bbd40, 1px 1px 3px #0bbd40, 1px 1px 5px #0bbd40,
    1px 1px 7px #0bbd40;
  // border-radius: 10px;
  // border-top:none;
  // filter: opacity(0.8);
  .tipBox {
    // border: 1px solid red;
    background: url("~@/assets/img/logo/gh.png") left top no-repeat;
    background-size: 98%;
    // background-color: red;
    height: 40px;
    position: relative;
    top: 0.8rem;
    left: 0.5rem;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    font-size: 0.38rem;
    .tipText {
      flex: 1;
      // background-color: rgb(46, 216, 131);
      position: relative;
      // top: 0.3rem;
      // left: 1rem;
      color: #fff;
      font-size: 18px;
      text-align: center;
      letter-spacing: 8px;
    }
    .tipMiddle {
      flex: 1;
      //  background-color: rgb(29, 193, 235);
      color: #fff;
      text-align: right;
    }
    .tipLast {
      position: relative;
      top: 0.25rem;
      right: 0.625rem;
      flex: 1;
      text-align: right;
      // background-color: rgb(215, 236, 22);
    }
  }

  .dataBox {
    position: relative;
    top: 0.375rem;
    height: 100%;
  }
}
</style>
