<template>
  <div class="aaa">
    <el-button @click="d2" type="primary" style="margin-left: 16px">
      点我打开
    </el-button>

    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    d2() {
      this.drawer = !this.drawer;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
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
.bbb {
  width: 60px;
  height: 60px;
  height: 100%;
  background-color: darkorange;
  position: fixed;
}
.hhh {
  width: 260px;
  height: 260%;
  background-color: darkorange;
  display: none;
}
.bbb:hover + .hhh {
  background-color: green;
  display: block;
}
.aaa {
  background-color: palegreen;
  .q1 {
    width: 10px;
    height: 150px;
    background-color: gold;
  }
}
</style>