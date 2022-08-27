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
      </el-submenu>
    </el-menu>
    <div class="aaa" v-if="is == 5">
      <i class="el-icon-caret-left" @click="fanhui"></i>
      <el-menu
        unique-opened
        :collapse-transition="false"
        router
        :default-active="this.$route.path"
        class="bbb"
      >
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
  width: 210px;
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
  background-color: transparent !important;
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

