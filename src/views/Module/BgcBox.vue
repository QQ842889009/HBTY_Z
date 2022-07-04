
<template>
  <div class="fence-container">
    <!-- 修饰开始 -->
    <div class="border_corner border_corner_left_bottom"></div>
    <div class="border_corner border_corner_right_bottom"></div>

    <div class="top-left-corner">
      <img class="border-angle" src="~assets/img/logo/ddd.png" alt />
    </div>
    <div class="left-top">
      <img class="zs" src="~assets/img/logo/zs.png" alt />
    </div>
    <div class="right-top">
      <img class="zs" src="~assets/img/logo/zs.png" alt />
    </div>
    <!-- 修饰结束 -->
    <div class="header-box">
      <div class="header-box-temp1">
        <slot name="header-box-temp1"></slot>
      </div>
      <div class="header-box-temp2">
        <slot name="header-box-temp2"></slot>
      </div>
      <div class="header-box-temp3">
        <slot name="header-box-temp3"></slot>
      </div>
    </div>

    <div class="content-box">
      <!-- 主体内容 -->
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "fence", //
  data() {
    return {};
  },
  props: {
    weight: {
      type: String,
      default: "100%",
    },
  },
  computed: {
    // add() {
    //   return {
    //     "--weight": this.weight,
    //   };
    // },
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.fence-container {
  width: 100%;
  height: 100%;
  border: 1px solid #21a7e1;
  box-shadow: 5px 5px 10px 10px rgba(24, 68, 124, 0.4);
  //background-color: red;
  position: relative;
  border-radius: 6px;

  .border_corner {
    // z-index: 2500;
    position: absolute;
    width: 19px;
    height: 19px;
    background: rgba(0, 0, 0, 0);
    border: 4px solid #1fa5f1;
  }
  .border_corner_left_top {
    top: -2px;
    left: -2px;
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 6px;
  }
  .border_corner_right_top {
    top: -2px;
    right: -2px;
    border-left: none;
    border-bottom: none;
    border-top-right-radius: 6px;
  }
  .border_corner_left_bottom {
    bottom: -2px;
    left: -2px;
    border-right: none;
    border-top: none;
    border-bottom-left-radius: 6px;
  }
  .border_corner_right_bottom {
    bottom: -2px;
    right: -2px;
    border-left: none;
    border-top: none;
    border-bottom-right-radius: 6px;
  }
  .top-left-corner {
    width: 100%;
    height: 100%;
    // background-color: #151d49;
    box-shadow: inset 0 0 13.2222rem 5.19259rem rgba(0, 138, 255, 0.4);
  }
  //左下角图标
  .top-left-corner img.border-angle:first-child {
    position: absolute;
    height: 0.4rem;
    width: 3.4375rem;
    right: 0.625rem;
    bottom: 0.5rem;
    // z-index: 1;
  }
  .header-box {
    width: 100%;
    height: 3rem;
    position: absolute;
    top: 0rem;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header-box-temp1 {
      flex: 1;
      font-weight: 900;
      font-size: 20px;
      position: absolute;
      left: 60px;
      // color: rgb(44, 4, 223);
      // letter-spacing: 22px;
      // background-color: rgb(53, 24, 182);
    }
    .header-box-temp2 {
      flex: 1;
      //background-color: rgb(209, 17, 17);
    }
    .header-box-temp3 {
      flex: 1;
      text-align: right;
      position: absolute;
      right: 20px;
      // letter-spacing: 22px;
      // background-color: rgb(64, 219, 160);
    }
    // background-color: rgb(207, 29, 29);
    //background-color: #
  }

  .content-box {
    // height: 2rem;
    height: calc(100% - 3rem);
    // height: 600px;
    width: 100%;
    position: absolute;
    top: 3rem;
    z-index: 999;
    //background-color: #fff;
  }
  .left-top {
    position: absolute;
    top: 2px;
    left: 2px;

    .zs {
      width: 50px;
      height: 40px;
    }
  }
  .right-top {
    position: absolute;
    top: 2px;
    right: 2px;

    .zs {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
