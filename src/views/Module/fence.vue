
<template>
  <div class="fence-container" :style="add">
    <!-- <div class="border_corner border_corner_right_top"></div> -->
    <div class="border_corner border_corner_left_bottom"></div>
    <div class="border_corner border_corner_right_bottom"></div>

    <div class="top-left-corner">
      <img class="border-angle" src="~assets/img/logo/ddd.png" alt />

      <!-- <div class="top-shape">
        <img class="border-angle" src="~assets/img/logo/zs.png" alt />
      </div> -->
    </div>
    <div class="tt">
      <img class="ttc" src="~assets/img/logo/zs.png" alt />
    </div>
    <div class="right-top">
      <img class="ttc" src="~assets/img/logo/zs.png" alt />
    </div>
    <!-- <div class="yy1">
      <img class="yyc" src="~assets/img/logo/zs.png" alt />
    </div>
    <div class="yy2">
      <img class="yyc" src="~assets/img/logo/zs.png" alt />
    </div>
    <div class="yy3">
      <img class="yyc" src="~assets/img/logo/zs.png" alt />
    </div> -->
    <div class="head">
      <img class="img" src="~assets/img/logo/gh.png" alt />
      <span class="head-title"> <slot name="title"></slot></span>
      <div class="head-c">
        <slot name="content"></slot>
        <!-- <span class="head-title-1">供温</span>
        <span class="head-title-1">回温</span>
        <span class="head-title-1">温差</span> -->
      </div>
      <!-- <div class="content">
        <slot name="aass1"></slot>
        <slot name="aass2"></slot>
        <slot name="aass3"></slot>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "fence",
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
    add() {
      return {
        "--weight": this.weight,
      };
    },
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

  .border_corner {
    z-index: 2500;
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
    // position: relative;
    // width: 23.4375vw;
    // height: 55.2222vh;
    width: 100%;
    height: 100%;
    // background-color: #151d49;
    box-shadow: inset 0 0 2.2222rem 0.09259rem rgba(0, 138, 255, 0.74);
  }

  .top-left-corner img.border-angle:first-child {
    position: absolute;
    // height: 0.5556vh;
    // width: 3.4375vw;
    // right: 0.625vw;
    // top: 1.1111vh;
    height: 0.4rem;
    width: 3.4375rem;
    right: 0.625rem;
    bottom: 0.5rem;

    z-index: 1;
  }

  .top-shape {
    // border-right: 0.09259rem solid #074bf7;
    position: relative;
    overflow: hidden;
    height: 1.1778rem;
    //z-index: 2;
    //background-color: #fff;
  }
  .top-shape::before {
    transform-origin: bottom right;
    border: 0.09259rem solid #074bf7;

    transform: skewX(-45deg);
    border-bottom: none;
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
  .top-left-triangle {
    //  background: url(~assets/img/logo/jiao.png) no-repeat;
    background-size: 1rem 1rem;
    position: absolute;
    height: 2.2963rem;
    width: 1.7292rem;
    left: 0;
    top: 0;
    z-index: 1;
    //background-color: #fff;
    //  z-index: 999;
    //background: url(~assets/img/logo/jiao.png) no-repeat;
  }
  .head {
    // height: 2rem;
    height: calc(100% - 2rem);
    // height: 600px;
    width: 100%;
    position: absolute;
    top: 1rem;

    .img {
      position: absolute;
      height: 1rem;
      width: 77%;
      // height: 1.5rem;
      // width: 0.6rem;
      top: -0.5rem;
      left: 4rem;
    }
    .head-title {
      height: 2rem;
      line-height: 2rem;
      position: absolute;
      font-size: 0.9rem;
      font-weight: 700;
      left: 4.2rem;
      top: -0.59rem;
      color: #fff;
    }
    .head-c {
      height: 2rem;
      line-height: 2rem;
      position: absolute;
      font-size: 0.9rem;
      font-weight: 700;
      right: 1.3rem;
      top: -1.2rem;
      color: #fff;
      .head-title-1 {
        padding: 0 5px 0 5px;
      }
    }
  }
  .content {
    // border-top: 1px solid rgb(76, 56, 248);
    // height: calc(100% - 3rem);
    height: 98%;
    // height: 100%;
    position: absolute;
    top: 2rem;
    width: 100%;
    color: #fff;
    display: flex; //弹性盒模型
    flex-direction: column; //设置元素为垂直显示
    // border: 1px solid #e2e2e4; //边框
    //background-color: palegreen;
    // background-color: #fff;
    // position: relative;
    // top: 0rem;
    //margin: 10px 0;
    //background-color: #fff;
  }
  .tt {
    position: absolute;
    top: 2px;
    left: 2px;

    .ttc {
      width: 50px;
      height: 40px;
    }
  }
  .right-top {
    position: absolute;
    top: 2px;
    right: 2px;

    .ttc {
      width: 20px;
      height: 20px;
    }
  }

  .yy {
    position: absolute;
    top: 22px;
    right: 68px;
    transform: rotate(180deg);

    .yyc {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
