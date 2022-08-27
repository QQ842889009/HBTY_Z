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
    <div class="aaa" v-if="station === 5">
      <i class="el-icon-caret-left" @click="fanhui"></i>
      <el-menu
        unique-opened
        :collapse-transition="false"
        router
        :default-active="this.$route.path"
        class="bbb"
        v-if="station === 5"
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
        <el-submenu index="工艺控制">
          <template #title>
            <i class="iconfont icon-kongzhi"></i>
            <span slot="title" class="yy">工艺控制</span>
          </template>
          <el-menu-item
            index="2"
            @click="$router.push({ name: 'ProcessControl' })"
            ref="ABC"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">工艺控制</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="历史查询">
          <template #title>
            <i class="iconfont icon-icon_A3"></i>
            <span slot="title" class="yy">历史查询</span>
          </template>
          <el-menu-item
            index="3"
            @click="$router.push({ name: 'HistoryQuery' })"
            ref="ABC"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">历史查询</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="故障报警">
          <template #title>
            <i class="iconfont icon-guzhang"></i>
            <span slot="title" class="yy">故障报警</span>
          </template>
          <el-menu-item
            index="4"
            @click="$router.push({ name: 'Alarm' })"
            ref="ABC"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">故障报警</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="报表系统">
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
            <span slot="title">区间报表</span>
          </el-menu-item>
          <el-menu-item
            index="6"
            @click="$router.push({ name: 'TableSection' })"
            ref="ABC"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">整点报表</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="参数修改">
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

        <!-- <el-submenu
          :index="item.id + ''"
          :popper-append-to-body="false"
          v-for="item in menuList"
          :key="item.id"
        >
          <template slot="title">
            <i :class="iconObj[item.id]" style="color: #fff"></i>
            <span class="yy">{{ item.name }}</span>
          </template>

          <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.id"
            @click="fg(subItem)"
          >
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{ subItem.name }}</span>
            </template>
          </el-menu-item>
        </el-submenu> -->
      </el-menu>
    </div>
    <div class="hot" v-if="hot == 5">
      <i class="el-icon-caret-left" @click="fanhui"></i>

      <el-menu
        unique-opened
        :collapse-transition="false"
        router
        :default-active="this.$route.path"
        class="bbb"
        v-if="hot == 5"
      >
        <el-submenu index="数据总览">
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
        <el-submenu index="工艺控制">
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
        <el-submenu index="历史查询">
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
        <el-submenu index="故障报警">
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
        <el-submenu index="报表系统">
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
        <el-submenu index="参数修改">
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
      </el-menu>
    </div>
    <div class="unit" v-if="unit == 5">
      <i class="el-icon-caret-left" @click="fanhui"></i>

      <el-menu
        unique-opened
        :collapse-transition="false"
        router
        :default-active="this.$route.path"
        class="bbb"
        v-if="unit == 5"
      >
        <el-submenu index="数据总览">
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
      </el-menu>
    </div>
    <div class="door" v-if="door == 5">
      <i class="el-icon-caret-left" @click="fanhui"></i>

      <el-menu
        unique-opened
        :collapse-transition="false"
        router
        :default-active="this.$route.path"
        class="bbb"
        v-if="door == 5"
      >
        <el-submenu index="数据总览">
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
      </el-menu>
    </div>
    <div class="indoor" v-if="indoor == 5">
      <i class="el-icon-caret-left" @click="fanhui"></i>

      <el-menu
        unique-opened
        :collapse-transition="false"
        router
        :default-active="this.$route.path"
        class="bbb"
        v-if="indoor == 5"
      >
        <el-submenu index="数据总览">
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
      station: 0,
      hot: 0,
      unit: 0,
      door: 0,
      indoor: 0,
    };
  },
  mounted() {},
  computed: {},
  components: {
    sideItem,
  },
  methods: {
    fanhui() {
      this.station = 0;
      this.hot = 0;
      this.unit = 0;
      this.door = 0;
      this.indoor = 0;
      this.is = 0;
    },
    fg(v) {
      console.log("vvvvffffgggg", v);
      if (v.name === "换热站") {
        this.station = 5;
        this.hot = 0;
        this.unit = 0;
        this.door = 0;
        this.indoor = 0;
        this.is = 1;
      } else if (v.name === "热源") {
        this.station = 0;
        this.hot = 5;
        this.unit = 0;
        this.door = 0;
        this.indoor = 0;
        this.is = 2;
      } else if (v.name === "楼宇单元阀") {
        this.station = 0;
        this.hot = 0;
        this.unit = 5;
        this.door = 0;
        this.indoor = 0;
        this.is = 3;
      } else if (v.name === "户阀") {
        this.station = 0;
        this.hot = 0;
        this.unit = 0;
        this.door = 5;
        this.indoor = 0;
        this.is = 4;
      } else if (v.name === "室内温度") {
        this.station = 0;
        this.hot = 0;
        this.unit = 0;
        this.door = 0;
        this.indoor = 5;
        this.is = 5;
      } else {
        this.station = 0;
        this.hot = 0;
        this.unit = 0;
        this.door = 0;
        this.indoor = 0;
        this.is = 0;
      }
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
  width: 212px;
  height: 980px;
  //height: 100%;
  background: rgba(0, 0, 0, 0.8);
  .bbb {
    position: absolute;
    left: 2px;
  }
}
.hot {
  color: #fff;
  // position: absolute;
  position: relative;
  margin: 20px 0px;
  // padding: 20px 0;
  // left: -510px;
  background-color: #fff;
  z-index: 99999999;
  width: 212px;
  height: 980px;
  //height: 100%;
  background: rgba(0, 0, 0, 0.8);
  //background-color: #fff;
  z-index: 99999999;
  .bbb {
    position: absolute;
    left: 2px;
  }
}
.unit {
  color: #fff;
  // position: absolute;
  position: relative;
  margin: 20px 0px;
  // padding: 20px 0;
  // left: -510px;
  background-color: #fff;
  z-index: 99999999;
  width: 212px;
  height: 980px;
  //height: 100%;
  background: rgba(0, 0, 0, 0.8);
  //background-color: #fff;
  z-index: 99999999;
  .bbb {
    position: absolute;
    left: 2px;
  }
}
.door {
  color: #fff;
  // position: absolute;
  position: relative;
  margin: 20px 0px;
  // padding: 20px 0;
  // left: -510px;
  background-color: #fff;
  z-index: 99999999;
  width: 212px;
  height: 980px;
  //height: 100%;
  background: rgba(0, 0, 0, 0.8);
  //background-color: #fff;
  z-index: 99999999;
  .bbb {
    position: absolute;
    left: 2px;
  }
}
.indoor {
  color: #fff;
  // position: absolute;
  position: relative;
  margin: 20px 0px;
  // padding: 20px 0;
  // left: -510px;
  background-color: #fff;
  z-index: 99999999;
  width: 212px;
  height: 980px;
  //height: 100%;
  background: rgba(0, 0, 0, 0.8);
  //background-color: #fff;
  z-index: 99999999;
  .bbb {
    position: absolute;
    left: 2px;
  }
}
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
</style>

