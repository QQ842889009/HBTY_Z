<template>
  <div>
    <el-menu
      unique-opened
      :collapse-transition="false"
      router
      :default-active="this.$route.path"
      mode="horizontal"
    >
      <el-submenu
        :index="item.id + ''"
        :popper-append-to-body="false"
        v-for="item in menuList"
        :key="item.id"
      >
        <!-- 一级菜单的模板区域 -->
        <!--  @click="saveNavState('/' + subItem.path)" -->
        <template slot="title">
          <i :class="iconObj[item.id]" style="color: #fff"></i>
          <span class="yy">{{ item.name }}</span>
        </template>
        <!-- 二级菜单 -->
        <!-- :index="'/' + subItem.path" -->
        <el-menu-item
          v-for="subItem in item.children"
          :key="subItem.id"
          @click="fg(subItem)"
        >
          <!-- 导航开启路由模式：
                将index值作为导航路由 -->
          <!-- 二级菜单的模板区域 -->
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{ subItem.name }}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="aaa">
      <el-menu
        :popper-append-to-body="false"
        :collapse-transition="false"
        default-active="1-4-1"
        class="bbb"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="数据总览">
          <template #title>
            <i class="iconfont icon-shujuzonglan"></i>
            <span slot="title" class="yy">数据总览</span>
          </template>
          <el-menu-item
            index="dept"
            @click="$router.push({ name: 'TabData' })"
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
  </div>
</template>

<script>
import Bus from "assets/js/bus.js";
// import { mapGetters } from "vuex";
import sideItem from "./sideItem";
export default {
  name: "login",
  data() {
    return {
      is: 2,
      r: [],
      iconObj: {
        11: "iconfont icon-shujuzonglan ",
        12: "iconfont icon-72-copy-copy-copy  ",
        13: "iconfont icon-yubaofenxi",

        14: "iconfont icon-duijizhexian  ",
        15: "iconfont icon-guzhang",
        16: "iconfont icon-baobiao",
        17: "iconfont icon-kongzhi",
        18: "iconfont icon-zhexian  ",
        19: "iconfont icon-houtaiguanli ",
        1511: "iconfont icon-keshihua-blue ",
      },
      menuList: [
        {
          name: "可视化沙盘",
          id: "1",

          children: [
            {
              name: "热源",
              id: "11",
              path: "Visual1",
            },
            {
              name: "热换站",
              id: "12",
              path: "Visual2",
            },
            {
              name: "楼宇",
              id: "13",

              path: "Visual3",
            },
          ],
        },
        {
          name: "自动控制系统",
          id: "2",

          children: [
            {
              name: "热源",
              id: "21",
              path: "Hot",
            },
            {
              name: "换热站",
              id: "22",
              path: "Hot",
            },
            {
              name: "楼宇单元阀",
              id: "23",
              path: "Hot",
            },
            {
              name: "户阀",
              id: "24",
              path: "Hot",
            },
            {
              name: "室内温度",
              id: "25",
              path: "Hot",
            },
          ],
        },
        {
          name: "智能学习系统",
          id: "3",
          children: [
            {
              name: "热站智能调节",
              id: "31",
              // path: "pfd",
              path: "TabData",
            },
            {
              name: "单元阀智能调节",
              id: "32",
              // path: "pfd",
              path: "ProcessControl",
            },
            {
              name: "户阀智能调节",
              id: "33",
              // path: "pfd",
              path: "TeControl",
            },
          ],
        },

        {
          name: "客服模块",
          id: "4",
          children: [
            {
              name: "客服模块",
              id: "41",
              path: "AiUnit",
            },
          ],
        },
      ],
    };
  },
  mounted() {},
  computed: {},
  components: {
    sideItem,
  },
  methods: {
    fanhui() {
      this.is = 0;
    },
    fg(v) {
      console.log("vvvvffffgggg", v);
      this.is = 5;
    },
  },
};
</script>

<style lang="scss" scoped>
.yy {
  padding: 5px;
}
.aaa {
  color: #fff;
  // position: absolute;
  position: relative;
  margin: 20px 0px;
  // padding: 20px 0;
  // left: -510px;
  // background-color: #fff;
  z-index: 99999999;
  width: 300px;
  height: 980px;
  //height: 100%;
  background: rgba(0, 0, 0, 0.8);
  .bbb {
    position: absolute;
    left: 2px;
  }
}
.el-menu {
  border-right: none;
  background-color: transparent;
  // background-color: "red";

  color: #fff;

  width: 60%;

  position: relative;
  left: 500px;

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
::v-deep {
  li.el-menu-item:hover {
    outline: 0;
    // background-color: transparent !important;
    color: red;
  }
  li.el-menu-item:focus {
    outline: 0;
    //  background-color: transparent !important;
    color: blue;
  }
  // .el-menu--horizontal .el-menu .el-menu-item{
  //   background-color: rgb(18, 219, 135);
  // }
  // .el-menu--horizontal .el-menu .el-submenu__title {
  //   background-color: red !important;
  //   float: none;
  //   height: 36px;
  //   line-height: 36px;
  //   padding: 0 10px;
  // }
  // .el-menu.el-menu--horizontal {
  //   border-bottom: solid 1px #e6e6e6;
  // }

  .el-menu.el-menu--horizontal {
    border-bottom: none !important; //去掉下面的一条直线
    // background-color: red !important;
    // .el-menu--popup-bottom-start {
    //   margin-top: 5px;
    //   background-color: red !important;
    // }
  }
  .el-menu.el-menu--horizontal:hover {
    background: #1c88cf !important;
    background-color: transparent !important;
    color: rgb(20, 235, 110) !important;
  }

  .el-menu-item:hover {
    background: #1c88cf !important;
    // background-color: transparent !important;
    background-color: #1c88cf !important;
    color: rgb(165, 209, 43) !important;
    // color: rgb(230, 8, 8) !important;
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
</style>

