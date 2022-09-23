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
          :index="'/' + subItem.path"
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
    <div class="aaa" v-if="station === 88">
      <i class="el-icon-caret-left" @click="fanhui"></i>
      <!-- <div class="t">换热站</div> -->
      <el-menu
        unique-opened
        :collapse-transition="false"
        router
        :default-active="this.$route.path"
        class="bbb"
      >
        <el-submenu index="数据总览" v-if="uu == 2">
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
          <!-- <el-menu-item
            index="22"
            @click="$router.push({ name: 'TeCon' })"
            ref="ABC"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">温度控制</span>
          </el-menu-item> -->
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
        <!-- 热源开始 -->
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
        <!-- 热源结束 -->
        <!-- 单元阀开始 -->
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
        <!-- 单元阀结束 -->
        <!-- 户阀开始 -->
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
        <!-- 户阀结束 -->
        <!-- 室内温度开始-->
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
        <!-- 室内温度结束 -->
        <!-- 后台管理开始 -->
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
        <!-- 后台管理结束 -->
        <!-- 气象开始 -->
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
        <!-- 气象结束 -->
      </el-menu>
    </div>
    <div class="bbb" @click="showBtn" v-if="station === 0">
      <!-- <div class="ccc"><i class="el-icon-caret-right"></i></div> -->
    </div>
  </div>
</template>

<script>
import Bus from "assets/js/bus.js";
// import { mapGetters } from "vuex";
//  import sideItem from "./sideItem";
export default {
  name: "login",
  data() {
    return {
      is: 2,
      uu: 0,
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
              path: "TabData",
            },
            {
              name: "楼宇单元阀",
              id: "23",
              path: "AiUnitSx",
            },
            {
              name: "户阀",
              id: "24",
              path: "AiDoor",
            },
            {
              name: "室内温度",
              id: "25",
              path: "AiInDoor",
            },
            {
              name: "后台系统",
              id: "26",
              path: "backStagee",
            },
          ],
        },
        {
          name: "气象",
          id: "33",

          children: [
            {
              name: "气象展示",
              id: "331",
              path: "Weather",
            },
          ],
        },
        {
          name: "运行分析",
          id: "44",

          children: [
            {
              name: "运行分析",
              id: "441",
              path: "PowerDissipation",
            },
          ],
        },
        // {
        //   name: "后台管理系统",
        //   id: "222",

        //   children: [
        //     {
        //       name: "用户管理",
        //       id: "2221",
        //       path: "user",
        //     },
        //     {
        //       name: "角色管理",
        //       id: "2221",
        //       path: "role",
        //     },
        //   ],
        // },
        // {
        //   name: "智能学习系统",
        //   id: "3",
        //   children: [
        //     {
        //       name: "热站智能调节",
        //       id: "31",
        //       // path: "pfd",
        //       path: "TabData",
        //     },
        //     {
        //       name: "单元阀智能调节",
        //       id: "32",
        //       // path: "pfd",
        //       path: "ProcessControl",
        //     },
        //     {
        //       name: "户阀智能调节",
        //       id: "33",
        //       // path: "pfd",
        //       path: "TeControl",
        //     },
        //   ],
        // },

        // {
        //   name: "客服模块",
        //   id: "4",
        //   children: [
        //     {
        //       name: "客服模块",
        //       id: "41",
        //       path: "AiUnit",
        //     },
        //   ],
        // },
      ],
      station: 0,
      hot: 0,
      unit: 0,
      door: 0,
      indoor: 0,
      houtai: 0,
      ck: 0,
    };
  },
  mounted() {},
  computed: {},
  components: {
    // sideItem,
  },
  methods: {
    fanhui() {
      this.station = 0;
      // this.hot = 0;
      // this.unit = 0;
      // this.door = 0;
      // this.indoor = 0;
      // this.is = 0;
    },
    showBtn() {
      this.station = 5;
    },
    fg(v) {
      if (v.name === "换热站") {
        this.station = 5;
        this.hot = 0;
        this.unit = 0;
        this.door = 0;
        this.indoor = 0;
        this.houtai = 0;
        this.is = 1;
        this.uu = 2;
        this.ck = 55;
        this.$store.commit("CK", this.ck);
      } else if (v.name === "热源") {
        this.station = 5;
        this.hot = 5;
        this.unit = 0;
        this.door = 0;
        this.indoor = 0;
        this.houtai = 0;
        this.is = 2;
        this.uu = 1;
      } else if (v.name === "楼宇单元阀") {
        this.station = 5;
        // this.hot = 0;
        // this.unit = 5;
        // this.door = 0;
        // this.indoor = 0;
        // this.houtai = 0;
        // this.is = 3;
        this.uu = 3;
      } else if (v.name === "户阀") {
        this.station = 5;
        // this.hot = 0;
        // this.unit = 0;
        // this.door = 5;
        // this.indoor = 0;
        // this.houtai = 0;
        // this.is = 4;
        this.uu = 4;
      } else if (v.name === "室内温度") {
        this.station = 5;
        // this.hot = 0;
        // this.unit = 0;
        // this.door = 0;
        // this.indoor = 5;
        // this.houtai = 0;
        // this.is = 5;
        this.uu = 5;
      } else if (v.name === "后台系统") {
        this.station = 5;
        // this.hot = 0;
        // this.unit = 0;
        // this.door = 0;
        // this.indoor = 0;
        // this.houtai = 5;
        // this.is = 6;
        this.uu = 6;
      } else if (v.name === "气象展示") {
        this.station = 5;
        // this.hot = 0;
        // this.unit = 0;
        // this.door = 0;
        // this.indoor = 0;
        // this.houtai = 5;
        // this.is = 7;
        this.uu = 7;
      } else {
        this.station = 0;
        this.hot = 0;
        this.unit = 0;
        this.door = 0;
        this.indoor = 0;
        this.is = 0;
        this.uu = 0;
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

  position: relative;
  margin: 20px 0px;

  z-index: 99999999;
  width: 212px;
  height: 980px;

  background: rgba(0, 0, 0, 0.8);
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
  width: 50px;
  height: 50px;
  //background-color: rgb(206, 15, 15);
  position: absolute;
  top: 25px;
  left: 5px;
  color: rgb(15, 236, 26);
  .ccc {
    position: absolute;
    top: 30px;
    left: 10px;
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

