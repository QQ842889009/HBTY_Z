<template>
  <div class="box" :style="{ width: this.bWidth, height: this.bHeight }">
     
      <div class="box_corner left_top"></div>
      <div class="box_corner right_top"></div>
      <div class="box_corner left_bottom"></div>
      <div class="box_corner right_bottom"></div>
    <div class="num" :style="{ color: this.bColor }">{{ this.bNum }}</div>
    <div class="text">{{ this.bText }}</div>
     <div  class="icon" :class="iconObj[this.iconIndex]" style="color: #fff " v-show="isShow" ></div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      iconObj:{
        1:'iconfont icon-Dimensionmanagement.icon-icon-Dimensionmanagement',
        2:"iconfont icon-shujuzonglan"
      }
    };
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
      default: "1",
    },
    bText: {
      type: String,
      default: "未处理报警",
    },
    bColor: {
      type: String,
      default: "#fff",
    },
    iconIndex: {
      type: Number,
      default: 2,
    },
    isShow:false
  },
};
</script>

<style  lang="scss" scoped>

.box {
  margin-top: 1%;
  margin-right: 1%;
  margin-left: 1%;
  background-color: #3b99cf;
  opacity: 1;
  box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
  position: relative;
  .box_corner{
    position: absolute;
    width: 14px;
    height: 16px;
    // background: rgba(0, 0, 0, 0);
    border: 3px solid #9cd8f0;
   
  }

 .left_top {
    top: 5px;
    left: 5px;
    border-right: none;
    border-bottom: none;
    // border-top-left-radius: 6px;
  }
  .right_top {
    top: 5px;
    right: 5px;
    border-left: none;
    border-bottom: none;
    // border-top-right-radius: 6px;
  }
  
 .left_bottom {
    bottom: 5px;
    left: 5px;
    border-right: none;
    border-top: none;
    // border-bottom-left-radius: 6px;
  }
  .right_bottom {
    bottom: 5px;
    right: 5px;
    border-left: none;
    border-top: none;
    // border-bottom-right-radius: 6px;
  }
 .icon{
    margin-left: 20%;
   margin-top: -18%;
   font-size: 30px;
   
 }
  .num {
    margin-left: 38%;
    margin-top: 6%;
    width: 100%;
    height: 50%;
    position: relative;
    font-size: 16px;
    // background: #000;
  }
  .text {
    margin-left: 38%;
    margin-top: -1rem;
    width: 100%;
    height: 50%;
    position: relative;
    font-size: 16px;
    //  background: #000;
  }
}
.box > img {
  width: 30px;
  height: 30px;
}
</style>