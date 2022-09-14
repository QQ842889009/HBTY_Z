<template>
  <div class="app-main-station">
    <!-- <div class="yc" @click="ycbtn"><i class="el-icon-caret-right"></i></div>
    <div class="menu" v-if="ismenu == 5">
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <el-menu
          unique-opened
          :collapse-transition="false"
          router
          :default-active="this.$route.path"
          class="bbb"
          :collapse="isCollapse"
        >
          <el-submenu index="数据总览">
            <template #title>
              <i class="iconfont icon-shujuzonglan"></i>
              <span slot="title" class="yy">数据总览</span>
            </template>
            <el-menu-item
              index="1"
              @click="$router.push({ name: 'TabData' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">数据总览</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="工艺控制" v-if="uu == 2">
            <template #title>
              <i class="iconfont icon-kongzhi"></i>
              <span slot="title" class="yy">工艺控制</span>
            </template>
            <el-menu-item
              index="21"
              @click="$router.push({ name: 'Visual6' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">工艺控制</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="历史查询" v-if="uu == 2">
            <template #title>
              <i class="iconfont icon-icon_A3"></i>
              <span slot="title" class="yy">历史查询</span>
            </template>
            <el-menu-item
              index="3"
              @click="$router.push({ name: 'Visual4' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">实时曲线</span>
            </el-menu-item>
            <el-menu-item
              index="32"
              @click="$router.push({ name: 'Visual5' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">曲线查询</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="故障报警" v-if="uu == 2">
            <template #title>
              <i class="iconfont icon-guzhang"></i>
              <span slot="title" class="yy">故障报警</span>
            </template>
            <el-menu-item
              index="41"
              @click="$router.push({ name: 'RealAlarm' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">实时报警</span>
            </el-menu-item>
            <el-menu-item
              index="42"
              @click="$router.push({ name: 'HistoryAlarm' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">报警查询</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="报表系统" v-if="uu == 2">
            <template #title>
              <i class="iconfont icon-baobiao"></i>
              <span slot="title" class="yy">报表系统</span>
            </template>
            <el-menu-item
              index="5"
              @click="$router.push({ name: 'TableIntegralPoint' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">整点报表</span>
            </el-menu-item>
            <el-menu-item
              index="6"
              @click="$router.push({ name: 'TableSection' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">区间报表</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="参数修改" v-if="uu == 2">
            <template #title>
              <i class="iconfont icon-jianyifankui"></i>
              <span slot="title" class="yy">参数修改</span>
            </template>
            <el-menu-item
              index="2"
              @click="$router.push({ name: 'ChangeInfo' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">参数修改</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="数据总览" v-if="uu == 1">
            <template #title>
              <i class="iconfont icon-shujuzonglan"></i>
              <span slot="title" class="yy">数据总览</span>
            </template>
            <el-menu-item
              index="1"
              @click="$router.push({ name: 'Dept' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">数据总览</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="工艺控制" v-if="uu == 1">
            <template #title>
              <i class="iconfont icon-kongzhi"></i>
              <span slot="title" class="yy">工艺控制</span>
            </template>
            <el-menu-item
              index="2"
              @click="$router.push({ name: 'ddd' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">工艺控制</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="历史查询" v-if="uu == 1">
            <template #title>
              <i class="iconfont icon-icon_A3"></i>
              <span slot="title" class="yy">历史查询</span>
            </template>
            <el-menu-item
              index="2"
              @click="$router.push({ name: 'ddd' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">历史查询</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="故障报警" v-if="uu == 1">
            <template #title>
              <i class="iconfont icon-guzhang"></i>
              <span slot="title" class="yy">故障报警</span>
            </template>
            <el-menu-item
              index="2"
              @click="$router.push({ name: 'ddd' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">故障报警</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="报表系统" v-if="uu == 1">
            <template #title>
              <i class="iconfont icon-baobiao"></i>
              <span slot="title" class="yy">报表系统</span>
            </template>
            <el-menu-item
              index="2"
              @click="$router.push({ name: 'ddd' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">报表系统</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="参数修改" v-if="uu == 1">
            <template #title>
              <i class="iconfont icon-jianyifankui"></i>
              <span slot="title" class="yy">报表系统</span>
            </template>
            <el-menu-item
              index="2"
              @click="$router.push({ name: 'ddd' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">报表系统</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="数据总览" v-if="uu == 3">
            <template #title>
              <i class="iconfont icon-shujuzonglan"></i>
              <span slot="title" class="yy">数据总览</span>
            </template>
            <el-menu-item
              index="1"
              @click="$router.push({ name: 'AiUnitSx' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">单独单元阀</span>
            </el-menu-item>
            <el-menu-item
              index="11"
              @click="$router.push({ name: 'AiUnit' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">带户阀单元阀</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="数据总览" v-if="uu == 4">
            <template #title>
              <i class="iconfont icon-shujuzonglan"></i>
              <span slot="title" class="yy">数据总览</span>
            </template>
            <el-menu-item
              index="1"
              @click="$router.push({ name: 'AiDoor' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">数据总览</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="数据总览" v-if="uu == 5">
            <template #title>
              <i class="iconfont icon-shujuzonglan"></i>
              <span slot="title" class="yy">数据总览</span>
            </template>
            <el-menu-item
              index="1"
              @click="$router.push({ name: 'AiInDoor' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">数据总览</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="后台管理" v-if="uu == 6">
            <template #title>
              <i class="iconfont icon-wode"></i>
              <span slot="title" class="yy">后台管理</span>
            </template>
            <el-menu-item
              index="1"
              @click="$router.push({ name: 'user' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item
              index="2"
              @click="$router.push({ name: 'role' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">角色管理</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="气象展示" v-if="uu == 7">
            <template #title>
              <i class="iconfont icon-wode"></i>
              <span slot="title" class="yy">气象展示</span>
            </template>
            <el-menu-item
              index="1"
              @click="$router.push({ name: 'Weather' })"
              ref="ABC"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">气象展示</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
    </div> -->
    <router-view />
  </div>
</template>
<script>
//
export default {
  name: "login",
  data() {
    return {
      is: 2,
      uu: 2,
      ismenu: 0,
      isCollapse: false, //菜单的折叠和展开
    };
  },
  mounted() {},
  computed: {},
  components: {},
  methods: {
    ycbtn() {
      this.ismenu = 5;
    },
  },
};
</script>
<style lang="scss">
.app-main-station {
  width: 100%;
  height: 100%;
  //background-color: rgb(218, 28, 28);
  // margin: 5rem;
  // padding: 20px 50px 20px 50px;
  // background-color: red;
  display: flex;
  // justify-content: center;
  overflow: hidden; //防止动画出现的

  //background-color: rgb(52, 228, 52);
  .menu {
    width: 200px;
    // height: 600px;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 250px;
    // right: 0px;
  }
  .yc {
    width: 5px;
    height: 900px;
    background-color: red;
  }
}
</style>