<template>
  <!--   v-bind:style="{
      backgroundImage: 'url(' + bg1 + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      zIndex: '98',
    }" -->
  <div
    class="app-wrapper"
    v-bind:style="{
      backgroundImage: 'url(' + bg1 + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      zIndex: '98'
    }"
  >
    <!-- bgc2就是第二张图片开始 -->
    <div class="bgc2">
      <img src="~assets/img/logo/bgz2.png" alt="" />
    </div>
    <!-- bgc2就是第二张图片结束 -->
    <!-- 头部给一个图片开始 -->
    <div
      class="header"
      v-bind:style="{
        backgroundImage: 'url(' + bg2 + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }"
    >
      <Sidebar></Sidebar>
      <div class="exit">
        <Header></Header>
      </div>
    </div>
    <!-- 头部给一个图片结束 -->
    <!-- <div class="q2" :style="sliderStyle"></div> -->
    <div class="main-box">
      <div class="main-content">
        <Main />
        <!-- <el-input-number
          v-model="num"
          @change="handleChange"
          :min="0"
          :max="100"
          label="描述文字"
        ></el-input-number> -->
      </div>
    </div>

    <!-- <p class="dd" @click="ff" :style="">dd</p> -->
    <!-- <el-row>
      <el-col :span="24"><div class="header">22</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="mian">33</div></el-col>
    </el-row> -->
  </div>
</template>

<script>
import { Sidebar, Header, Main } from "./components"

export default {
  name: "login",
  data() {
    return {
      num: 30,
      bg1: require("assets/img/logo/bgz1.png"), //总背景图
      bg2: require("assets/img/logo/header1.png") //头部背景图
    }
  },
  created() {},
  computed: {},
  mounted() {},
  updated() {},
  methods: {
    goBack() {
      this.$router.push("/login")
    },

    handleChange(value) {
      console.log(value)
      this.sliderStyle.marginLeft = value + "px"
      this.sliderStyle.marginRight = value + "px"
    }
  },
  components: {
    Sidebar,
    Header,
    Main
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100%;
  position: relative;

  //第二张图片
  .bgc2 {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -99;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .header {
    position: relative;
    height: 7%;
    // background-color: palegoldenrod;
    z-index: 1000;
    .exit {
      position: absolute;
      right: 20px;
      top: 40px;
      z-index: 1000;
    }
  }
  .main-box {
    height: 93%;

    .main-content {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
