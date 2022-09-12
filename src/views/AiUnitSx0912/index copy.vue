<template>
  <div class="ccvv">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      :popper-append-to-body="false"
      :collapse-transition="false"
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item index="home" @click="$router.push({ name: 'Home' })">
        <i class="el-icon-user"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="数据总览">
        <template #title>
          <i class="iconfont icon-shujuzonglan"></i>
          <span slot="title" class="yy">数据总览</span>
        </template>
        <el-menu-item
          index="dept"
          @click="$router.push({ name: 'Dept' })"
          ref="ABC"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">数据总览</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="工艺控制">
        <template #title>
          <i class="iconfont icon-kongzhi"></i>
          <span slot="title" class="yy">工艺控制</span>
        </template>
        <el-menu-item
          index="dept"
          @click="$router.push({ name: 'Dept' })"
          ref="ABC"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">工艺控制</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="报表查询">
        <template #title>
          <i class="iconfont icon-kongzhi"></i>
          <span slot="title" class="yy">报表查询</span>
        </template>
        <el-menu-item
          index="dept"
          @click="$router.push({ name: 'Dept' })"
          ref="ABC"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">区间报表</span>
        </el-menu-item>
        <el-menu-item
          index="dept"
          @click="$router.push({ name: 'Dept' })"
          ref="ABC"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">整点报表</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="报警系统">
        <template #title>
          <i class="iconfont icon-kongzhi"></i>
          <span slot="title" class="yy">报警系统</span>
        </template>
        <el-menu-item
          index="dept"
          @click="$router.push({ name: 'Dept' })"
          ref="ABC"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">实时报警</span>
        </el-menu-item>
        <el-menu-item
          index="dept"
          @click="$router.push({ name: 'Dept' })"
          ref="ABC"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">报警查询</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="历史查询">
        <template #title>
          <i class="iconfont icon-kongzhi"></i>
          <span slot="title" class="yy">历史查询</span>
        </template>
        <el-menu-item
          index="dept"
          @click="$router.push({ name: 'Dept' })"
          ref="ABC"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">历史查询</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="参数修改">
        <template #title>
          <i class="iconfont icon-kongzhi"></i>
          <span slot="title" class="yy">参数修改</span>
        </template>
        <el-menu-item
          index="dept"
          @click="$router.push({ name: 'ChangeInfo' })"
          ref="ABC"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">参数修改</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    //
  },
};
</script>

<style lang="scss"  >
.ccvv {
  background-color: transparent;
  background-color: transparent !important; //背景颜色
  background-color: peru;
  color: #fff;
}
.yy {
  padding: 5px;
}
.el-submenu__title {
  height: 56px;
  line-height: 56px;
  font-size: 14px;
  color: #fff;
  padding: 0 20px;
  padding-left: 5px;
  list-style: none;
  cursor: pointer;
  position: relative;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  box-sizing: border-box;
  white-space: nowrap;
}
.el-menu-item {
  line-height: 56px;
  font-size: 14px;
  color: #fff;
  list-style: none;
  cursor: pointer;
  white-space: nowrap;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 150px;
  min-height: 400px;
  color: #fff;
}
.el-menu {
  border-right: none;
  background-color: transparent;

  color: #fff !important;
  li.el-menu-item:hover {
    outline: 0;
    background-color: transparent !important;
    color: chartreuse;
  }
  li.el-menu-item:focus {
    outline: 0;
    background-color: transparent !important;
    color: blue;
  }
}
// .el-submenu__title:hover,
// .el-submenu__title:focus {
//   background-color: transparent !important; //背景颜色
//   color: rgb(149, 228, 23) !important; //颜色
//   color: RED !important; //颜色
// }
.el-submenu__title:focus,
.el-submenu__title:hover {
  outline: 0;
  background-color: transparent !important;
}

::v-deep {
  // .el-menu.el-menu--horizontal {
  //   border-bottom: none !important; //去掉下面的一条直线
  // }

  //一级菜单
  .el-submenu__title {
    font-size: 15px !important;
    color: #fff !important;
    // color: rgb(250, 244, 244) !important;
  }
  //一级菜单效果
  .el-submenu__title:hover,
  .el-submenu__title:focus {
    background-color: transparent !important; //背景颜色
    color: rgb(149, 228, 23) !important; //颜色
    color: RED !important; //颜色
  }
  .el-submenu.is-opened .el-submenu__title {
    background-color: transparent !important; //背景颜色
    color: rgb(149, 228, 23) !important; //颜色
  }
  .el-submenu.is-active .el-submenu__title {
    background-color: transparent !important; //背景颜色
    color: rgb(149, 228, 23) !important; //颜色
  }
  // .el-submenu__title:hover {
  //   background-color: red;
  // }

  //二级菜单
  li.el-menu-item {
    color: rgb(252, 250, 250) !important;
    //background-color: #57a4e7 !important;
    background-color: transparent; //背景颜色
    font-size: 55px;
  }
  li.el-menu-item:focus {
    outline: 0;
    background-color: green !important;
  }
  li.el-menu-item:hover {
    outline: 0;
    background-color: green !important;
  }
  // .el-submenu_title:hover {
  //   background-color: transparent;
  // }

  // .el-submenu__title:focus,
  // .el-submenu__title:hover {
  //   outline: 0;
  //   background-color: transparent !important;
  // }
  // .el-menu-item:focus,
  // .el-menu-item:hover {
  //   outline: 0;
  //   background-color: transparent !important;
  // }
  //二级菜单弹出框
  .el-menu--popup-bottom-start {
    padding: 1px;
    background-color: red; //背景颜色
    // background-color: red;
  }
}
</style>