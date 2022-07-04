<template>
  <div class="box" :style="{ width: this.bWidth, height: this.bHeight }">
    <img class="img1" src="~@/assets/img/logo/lb.png" alt="" />
    <img class="img2" src="~@/assets/img/logo/lb.png" alt="" />
    <div class="num">{{ this.bNum }}</div>
    <div class="text">{{ this.bText }}</div>
    <img class="img3" src="~@/assets/img/logo/lb.png" alt="" />
    <img class="img4" src="~@/assets/img/logo/lb.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    bWidth: {
      type: String,
      default: "40%",
    },
    bHeight: {
      type: String,
      default: "40%",
    },
    bNum: {
      type:  String,
      default: '4977',
    },
    bText: {
      type: String,
      default: "未处理报警",
    },
    bColor: {
      type: String,
      default: "#fff",
    },
  },
};
</script>

<style  lang="scss" scoped>
.box {
  margin-top: 1%;
  margin-right: 1%;
  margin-left: 1%;
  background-color: #347baa;
  opacity: 1;
  box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
   position: relative;
  .img1 {
    transform: rotate(180deg);
    margin-left: 0.1rem;
    margin-top: 0.1rem;
     position: relative;
  }
  .img2 {
    transform: rotate(270deg);
    margin-left: 23.5rem;
    margin-top: 0.1rem;
     position: relative;
  }
  .img3 {
    transform: rotate(90deg);
    margin-left: 0.1rem;
    margin-top: -4.5rem;
     position: relative;
  }
  .img4 {
    transform: rotate(0deg);
    margin-left:23.5rem;
    margin-top:-4.5rem;
     position: relative;
  }
  .num {
    margin-left: 40%;
    margin-top: 0rem;
    width: 100%;
    height: 50%;
     position: relative;
    // background: #000;
  }
  .text {
    margin-left: 40%;
    margin-top: -1.5rem;
    width: 100%;
    height: 50%;
     position: relative;
    //  background: #000;
  }
}
.box > img {
  width: 30px;
  height: 30px;
}
</style>