<template>
  <!-- <div class="menu-box">
    {{ get_routes[0] }}
    <el-menu
      unique-opened
      router
      :default-active="this.$route.path"
      text-color="#1c88cf"
      active-text-color="#01ffff"
      mode="horizontal"
    >
      <sideItem
        v-for="v in get_routes[0].children"
        :key="v.path"
        :item="v"
        :path="v.path"
      />
    </el-menu>
  </div> -->

  <el-menu
    unique-opened
    :collapse-transition="false"
    router
    :default-active="this.$route.path"
    mode="horizontal"
  >
    <!-- :unique-opened="true"->只允许展开一个菜单 -->
    <!-- :collapse-transition="false" -> 关闭动画 -->
    <!-- router -> 导航开启路由模式 -->
    <!-- 一级菜单  -->
    <el-submenu :index="item.id + ''" :popper-append-to-body='false' v-for="item in menuList" :key="item.id
    "  >
      <!-- 一级菜单的模板区域 -->
      <!--  @click="saveNavState('/' + subItem.path)" -->
      <template slot="title">
        <i :class="iconObj[item.id]" style="color:#fff"></i>
        <span>{{ item.name }}</span>
      </template>
      <!-- 二级菜单 -->
      <el-menu-item
        :index="'/' + subItem.path"
        v-for="subItem in item.children"
        :key="subItem.id"
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
</template>

<script>
// import { mapGetters } from "vuex";
import sideItem from "./sideItem";
export default {
  name: "login",
  data() {
    return {
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
      },
      menuList: [
        {
          name: "热源",
          id: "11",

          children: [
            {
              name: "AI单元",
              id: "121",
              path: "Hot",
            },
          ],
        },
        {
          name: "换热站",
          id: "12",
          children: [
            {
              name: "数据总览",
              id: "221",
              // path: "pfd",
              path: "DataScreening",
            },
            {
              name: "工艺控制",
              id: "222",
              // path: "pfd",
              path: "ProcessControl",
            },
            {
              name: "温度控制",
              id: "223",
              // path: "pfd",
              path: "TeControl",
            },
            {
              name: "整点报表",
              id: "224",
              // path: "pfd",
              path: "TableIntegralPoint",
            },
            {
              name: "区间报表",
              id: "225",
              // path: "pfd",
              path: "HistoryQuery",
            },
            {
              name: "历史查询",
              id: "226",
              // path: "pfd",
              path: "HistoryQuery",
            },
          ],
        },

        {
          name: "楼宇管控",
          id: "13",
          children: [
            {
              name: "数据展示",
              id: "322",
              path: "AiUnit",
            },
          ],
        },

        {
          name: "户阀管控",
          id: "14",
          children: [
            {
              name: "户阀管控",
              id: "421",
              path: "AiDoor",
            },
          ],
        },

        {
          name: "四新设备",
          id: "15",
          children: [
            {
              name: "数据展示",
              id: "521",
              path: "AiUnitSx",
            },
          ],
        },
        {
          name: "室内温度",
          id: "16",
          children: [
            {
              name: "数据展示",
              id: "621",
              path: "AiInDoor",
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
};
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
   background-color: transparent ;
  // background-color: "red";

  color: #fff;
  width: 50%;
  position: relative;
  left: 600px;
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
  // .el-menu.el-menu--horizontal:hover {
  //   background: #1c88cf !important;
  //   background-color: transparent !important;
  //   color: rgb(20, 235, 110) !important;
  // }

  // .el-menu-item:hover {
  //   background: #1c88cf !important;
  //   background-color: transparent !important;
  //   color: rgb(165, 209, 43) !important;
  // }

  //一级菜单
 .el-submenu__title{
  font-size:20px;
  //background: rgb(107, 77, 77);
  color:#fff !important;
 }
//一级菜单效果
  .el-submenu__title:hover,.el-submenu__title:focus{
    
    background-color: transparent !important; //背景颜色
    color: rgb(149, 228, 23) !important;  //颜色
  }
  .el-submenu.is-opened .el-submenu__title{
  // background-color: transparent !important; //背景颜色
    color: rgb(149, 228, 23) ;  //颜色
}
  .el-submenu.is-active .el-submenu__title{
  // background-color: transparent !important; //背景颜色
    color: rgb(149, 228, 23) ;  //颜色
}

  //二级菜单
 li.el-menu-item {
   color: #fff !important;
  background-color: #57a4e7 !important;
   font-size:18px;
}

//二级菜单弹出框
.el-menu--popup-bottom-start {
   
    padding: 1px;
}
}
</style>
<style lang="scss">

</style>