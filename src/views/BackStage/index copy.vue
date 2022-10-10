<template>
  <div class="app-main-station">
    <!-- <div class="hua">
      <div class="dian"><i class="el-icon-s-unfold"></i></div>
    </div> -->
    <div class="aaa" v-if="uu == 2">
      <i class="el-icon-s-fold" @click="ycbtn"></i>
      <div class="t">后台管理</div>
      <el-menu
        unique-opened
        :collapse-transition="false"
        router
        :default-active="this.$route.path"
        class="bbb"
      >
        <el-submenu index="用户管理">
          <template #title>
            <i class="iconfont icon-shujuzonglan"></i>
            <span slot="title" class="yy">用户管理</span>
          </template>
          <el-menu-item
            index="1"
            @click="$router.push({ name: 'user' })"
            ref="ABC"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="角色管理">
          <template #title>
            <i class="iconfont icon-shujuzonglan"></i>
            <span slot="title" class="yy">角色管理</span>
          </template>
          <el-menu-item
            index="2"
            @click="$router.push({ name: 'role' })"
            ref="ABC"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">角色管理</span>
          </el-menu-item>
        </el-submenu>
        <!-- <el-submenu index="工艺控制">
          <template #title>
            <i class="iconfont icon-kongzhi"></i>
            <span slot="title" class="yy">工艺控制</span>
          </template>
          <el-menu-item
            index="2"
            @click="$router.push({ name: 'Visual6' })"
            ref="ABC"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">工艺控制</span>
          </el-menu-item>
        </el-submenu> -->
        <!-- <el-submenu index="历史查询">
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
            index="4"
            @click="$router.push({ name: 'Visual5' })"
            ref="ABC"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">曲线查询</span>
          </el-menu-item>
        </el-submenu> -->
        <!-- <el-submenu index="故障报警">
          <template #title>
            <i class="iconfont icon-guzhang"></i>
            <span slot="title" class="yy">故障报警</span>
          </template>
          <el-menu-item
            index="5"
            @click="$router.push({ name: 'RealAlarm' })"
            ref="ABC"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">实时报警</span>
          </el-menu-item>
          <el-menu-item
            index="6"
            @click="$router.push({ name: 'HistoryAlarm' })"
            ref="ABC"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">报警查询</span>
          </el-menu-item>
        </el-submenu> -->
        <!-- <el-submenu index="报表系统">
          <template #title>
            <i class="iconfont icon-baobiao"></i>
            <span slot="title" class="yy">报表系统</span>
          </template>
          <el-menu-item
            index="7"
            @click="$router.push({ name: 'TableIntegralPoint' })"
            ref="ABC"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">整点报表</span>
          </el-menu-item>
          <el-menu-item
            index="8"
            @click="$router.push({ name: 'TableSection' })"
            ref="ABC"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">区间报表</span>
          </el-menu-item>
        </el-submenu> -->
        <!-- <el-submenu index="参数修改">
          <template #title>
            <i class="iconfont icon-jianyifankui"></i>
            <span slot="title" class="yy">参数修改</span>
          </template>
          <el-menu-item
            index="9"
            @click="$router.push({ name: 'ChangeInfo' })"
            ref="ABC"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">参数修改</span>
          </el-menu-item>
        </el-submenu> -->
      </el-menu>
    </div>
    <div class="ccc">
      <div class="ddd" @click="xsbtn">
        <i class="el-icon-s-unfold"></i>
      </div>
    </div>
    <div class="bbb">
      <transition
        enter-active-class=" animate__animated animate__fadeInRight"
        leave-active-class=" animate__animated animate__fadeOutLeft"
        mode="out-in"
        :duration="{ enter: 500, leave: 500 }"
        appear
      >
        <router-view />
      </transition>
    </div>
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
      this.uu = 5;
    },
    xsbtn() {
      this.uu = 2;
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .el-submenu__icon-arrow {
    display: none !important;
  }
  .el-menu .el-menu--inline {
    width: 210px;
  }
  li.el-menu-item:hover {
    outline: 0;
    // background-color: transparent !important;
    color: red;
  }
  li.el-menu-item:focus {
    outline: 0;

    color: blue;
  }

  .el-menu.el-menu--horizontal {
    border-bottom: none !important; //去掉下面的一条直线
  }
  .el-menu.el-menu--horizontal:hover {
    background: #1c88cf !important;
    background-color: transparent !important;
    color: rgb(20, 235, 110) !important;
  }

  //一级菜单
  .el-submenu__title {
    font-size: 15px;
    //background: rgb(107, 77, 77);
    color: rgb(250, 244, 244) !important;
    //color: red !important;
  }
  //一级菜单效果
  .el-submenu__title:hover,
  .el-submenu__title:focus {
    background-color: transparent !important; //背景颜色
    color: rgb(149, 228, 23) !important; //颜色
  }
  .el-submenu.is-opened .el-submenu__title {
    // background-color: transparent !important; //背景颜色
    color: rgb(149, 228, 23) !important; //颜色
    //color: blue !important;
  }
  .el-submenu.is-active .el-submenu__title {
    // background-color: transparent !important; //背景颜色
    color: rgb(149, 228, 23) !important; //颜色
  }

  //二级菜单
  li.el-menu-item {
    color: rgb(252, 250, 250) !important;
    background-color: transparent !important;
    background-color: rgba(0, 0, 0, 0.8) !important;
    width: 210px;
    // background-color: transparent !important;
    //font-size: 18px;
  }

  //二级菜单弹出框
  .el-menu--popup-bottom-start {
    padding: 1px;
    // background-color: red;
  }
}
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

  .hua {
    width: 20px;
    height: 1000px;

    background: transparent;
    //background-color: red;
    z-index: 9997;
    top: -10px;
    position: absolute;
  }
  .dian {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0px;
    cursor: pointer;
    left: 0px;
    background-color: greenyellow;
    //display: none;
    display: none;
    display: block;
    z-index: 9998;
    transition: all 0.3s ease-in-out;
    .el-icon-s-unfold {
      font-size: 25px;
    }
  }

  .hua:hover .dian {
    display: block;
    // background-color: red;
    z-index: 9998;
  }
}
.aaa {
  color: #fff;

  position: relative;
  margin: 0px 0px;

  z-index: 99999999;
  width: 212px;
  height: 980px;

  background: rgba(0, 0, 0, 0.8);
  //background-color: red;
  .el-icon-s-fold {
    font-size: 25px;
    cursor: pointer;
  }
  .t {
    position: absolute;
    top: 1px;
    right: 5px;
    color: rgb(11, 233, 66);
    // top
  }
  .bbb {
    position: absolute;
    left: 2px;
  }
}
.bbb {
  position: absolute;
  width: 100%;
  height: 100%;
}
.yy {
  padding: 10px;
}
//隐藏显示的开始
.ccc {
  width: 30px;
  height: 900px;
  position: absolute;
  z-index: 9999999;
  //background-color: red;
  .ddd {
    width: 25px;
    height: 25px;
    background-color: green;
    display: none;
    position: absolute;
    top: 1px;
    cursor: pointer;
    .el-icon-s-unfold {
      font-size: 25px;
    }
  }
}
.ccc:hover .ddd {
  display: block;
}
//隐藏显示的结束
.el-menu {
  border-right: none;
  background-color: transparent !important;
  // background-color: "red";

  color: #fff;

  width: 30%;

  position: relative;
  left: 1300px;

  top: 20px;
}

.el-menu.el-menu--horizontal {
  border-bottom: none !important; //去掉下面的一条直线
  // background-color: red !important;
  //
  // .el-menu--popup-bottom-start {
  //   margin-top: 5px;
  //   background-color: red !important;
  // }
  // }
}
//二级菜单鼠标移动的效果
.el-menu-item:hover {
  background: #1c88cf !important;
  // background-color: transparent !important;
  background-color: #1c88cf !important;

  color: rgb(165, 209, 43) !important;
  // color: rgb(230, 8, 8) !important;
}
</style>