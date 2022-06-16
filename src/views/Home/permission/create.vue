


<template>
  <div class="app-container">
    <div class="aaa">
      <el-row :gutter="10">
        <!-- <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="4"
          ><div class="grid-content left-1">
            <div class="b">
              <div class="bb">bb</div>
              <div class="bb">bb</div>
              <div class="bb">bb</div>
              <div class="bb">bb</div>
            </div>
          </div></el-col
        > -->
        <!-- <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6"
          ><div class="grid-content left-2"></div
        ></el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="8"
          ><div class="grid-content left-3">
            <aaa> <template #left-slot></template></aaa></div
        ></el-col> -->
        <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6"
          ><div class="grid-content left-4">
            <fence>
              <template #title>
                <span>我是标题</span>
              </template>
              <template #content>
                <span class="head-title-1">供温</span>

                <span class="head-title-1">回温</span>
                <span class="head-title-1">温差</span>
              </template>
            </fence>
          </div></el-col
        >
        <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6"
          ><div class="grid-content left-4">
            <fence>
              <template #aass1>
                <aaa>
                  <template #left-slot> </template>
                  <template #right-slot> </template>
                </aaa>
              </template>
              <template #aass2>
                <aaa> <template #left-slot class="dd"> </template></aaa>
              </template>
              <template #aass3>
                <aaa></aaa>
              </template>
            </fence></div
        ></el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6"
          ><div class="grid-content left-4">
            <fence>
              <template #aass1>
                <aaa>
                  <template #left-slot> </template>
                  <template #right-slot> </template>
                </aaa>
              </template>
              <template #aass2>
                <aaa> <template #left-slot class="dd"> </template></aaa>
              </template>
              <template #aass3>
                <aaa></aaa>
              </template>
            </fence></div
        ></el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6"
          ><div class="grid-content left-4">
            <fence>
              <template #aass1>
                <aaa>
                  <template #left-slot> </template>
                  <template #right-slot> </template>
                </aaa>
              </template>
              <template #aass2>
                <aaa> <template #left-slot class="dd"> </template></aaa>
              </template>
              <template #aass3>
                <aaa></aaa>
              </template>
            </fence></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import fence from "views/Module/fence";
import aaa from "views/Module/aaa";
export default {
  data() {
    return {
      pageSize: 10,
    };
  },
  computed: {},
  mounted() {},
  methods: {},
  components: {
    // 第二部注册

    fence,
    aaa,
  },
};
</script>
<style lang="scss" scoped>
.app-container {
  // position: relative;
  // margin: 20px 0;
  //display: flex; //弹性盒模型
  // flex-direction: column; //设置元素为垂直显示
  height: 100%;
  // background-color: rgb(128, 240, 128);
  .aaa {
    height: 100%;
    // background-color: #fff;
  }
  // .aaa {
  //   background-color: gold;
  //   flex: auto;
  //   margin: 5px 0;
  // }
}
.ffdd {
  color: rgb(46, 212, 88);
  font-size: 12px;
  padding: 10px;
}
.el-row {
  margin-bottom: 20px;
  height: 100%;
  //  background-color: gold;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 54px;
  height: 100%;
}
.grid-content {
  //  background-color: firebrick;
  // min-height: 36px;
  height: 100%;
}
.left-1 {
  // background-color: rgb(255, 255, 255);
  .b {
    background-color: forestgreen;
    height: 100%;
    display: flex; //弹性盒模型
    flex-direction: column; //设置元素为垂直显示
  }
  .bb {
    flex: auto;
    margin: 5px 0;
    // background-color: #fff;
    border: 1px solid firebrick;
  }
}
</style>
