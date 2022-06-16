


<template>
  <div>
    888

    <el-col :span="22" :offset="2"
      ><div class="grid-content b2-bottom">
        <el-menu
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="this.$route.path"
          mode="horizontal"
        >
          <el-submenu
            :index="item.id + ''"
            v-for="item in menuList"
            :key="item.id"
          >
            <template slot="title">
              <i :class="iconObj[item.id]"></i>
              <span>{{ item.name }}</span>
            </template>

            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subItem.name }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div></el-col
    >
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      :style="cssVars"
    >
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
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

        // "03": "iconfont icon-duijizhutu ",
        // "04": "iconfont icon-duijimianji ",
        // "05": "iconfont icon-zhuzhetu ",
        // "06": "iconfont icon-niwu  ",
        // "07": "iconfont icon-leidatu  ",
      },
      isCollapse: false, //菜单的折叠和展开
      menuList: [
        {
          name: "数据总览",
          id: "11",

          children: [
            {
              name: "实时数据",
              id: "121",
              path: "welcome",
            },
            //  {
            //   name: "实时数据简化",
            //   id: "122",
            //   path: "RealTimeDataTable_zhanneiShif",
            // },
          ],
        },
        {
          name: "分析控制",
          id: "12",
          children: [
            // {
            //   name: "平衡分析",
            //   id: "221",
            //   // path: "pfd",
            // },
            {
              name: "工艺流程",
              id: "222",
              // path: "pfd",
              path: "aiUnitData22",
            },
            // {
            //   name: "建议流量",
            //   id: "223",
            //   // path: "jianyift1",
            // },
            // {
            //   name: "平衡分析棒图",
            //   id: "224",
            //   // path: "balanceanalysis",
            // },
            // {
            //   name: "热量偏差分布图",
            //   id: "225",
            //   // path: "pinghengreliang",
            // },
            {
              name: "温度控制",
              id: "226",
              path: "TeCon",
            },
            {
              name: "连接请求",
              id: "227",
              path: "link",
            },
          ],
        },

        {
          name: "预报规划",
          id: "13",
          children: [
            // {
            //   name: "预测数据",
            //   id: "321",
            //   //path: "yuceshuju",
            // },
            {
              name: "供热面积",
              id: "322",
              path: "space",
            },
            // {
            //   name: "建议流量",
            //   id: "223",
            // },
            // {
            //   name: "热量偏差分布图",
            //   id: "223",
            // },
            // {
            //   name: "平衡分析棒图",
            //   id: "223",
            // },
          ],
        },

        {
          name: "历史趋势",
          id: "14",
          children: [
            {
              name: "流量趋势",
              id: "421",
              path: "theparentcurve_FT",
            },
            {
              name: "温度趋势",
              id: "422",
              path: "theparentcurve_TE",
            },
            {
              name: "压力趋势",
              id: "423",
              path: "theparentcurve_PT",
            },
            {
              name: "频率反馈",
              id: "424",
              path: "theparentcurve_BP",
            },
            {
              name: "阀门反馈",
              id: "425",
              path: "theparentcurve_FV",
            },
            {
              name: "液位趋势",
              id: "426",
              path: "theparentcurve_LT",
            },

            {
              name: "站内比较",
              id: "427",
              path: "theparentcurve_zhannei",
            },
            {
              name: "实时更新",
              id: "428",
              path: "theparentcurve_GX",
            },
          ],
        },

        {
          name: "故障报警",
          id: "15",
          children: [
            {
              name: "系统报警",
              id: "521",
              path: "alert",
            },
            {
              name: "报警设置",
              id: "522",
              path: "alertrestrict",
            },
            {
              name: "报警查询",
              id: "523", // path: "alertinquire",
            },
          ],
        },
        {
          name: "报表系统",
          id: "16",
          children: [
            // {
            //   name: "整点报表",
            //   id: "621",
            //   path: "reportformsZD_zhannei",
            // },
            // {
            //   name: "日报表",
            //   path: "reportforms24h_zhannei",
            //   id: "622",
            // },
            {
              name: "区间报表",
              id: "623",
              path: "reportforms_section_zhannei",
            },
          ],
        },

        {
          name: "控制数据",
          id: "17",
          children: [
            // {
            //   name: "控制数据",
            //   id: "721",
            //   // path: "kongzhishuju",
            // },
          ],
        },
        {
          name: "能耗分析",
          id: "18",
          children: [
            // {
            //   name: "煤耗",
            //   id: "821",
            // },
            // {
            //   name: "电耗",
            //   id: "822",
            // },
          ],
        },
        {
          name: "后台管理",
          id: "19",
          children: [
            // {
            //   name: "后台管理",
            //   id: "921",
            // },
          ],
        },
      ],
      x5: "#1bc237",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      isActive: 0,
      s1: 0,
      winHeigth: 0,
      but: [
        { name: "城市案件" },
        { name: "交通案件" },
        { name: "综合执法" },
        { name: "水务案件" },
        { name: "其他" },
      ],
      ////
      msg: "",
      colin: 0, //选中的某项
      btnList: [
        {
          label: "嘻嘻嘻嘻",
          id: 1,
          method: () => {
            this.add();
          },
        },
        {
          label: "哈哈啊哈",
          id: 2,
          method: () => {
            this.del();
          },
        },
      ],
    };
  },
  computed: {
    cssVars() {
      return {
        "--color": this.x5,
      };
    },
  },
  mounted() {
    this.styleVar;
    console.log(this.styleVar);
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      console.log("sssss", rowIndex);
      if ((rowIndex + 1) % 2 === 0) {
        console.log("ggggg");
        console.log();
        return "A"; //类名
      } else {
        return "B"; //类名
      }
    },
    son(text, index) {
      console.log(text);
      // console.log(index);
      // this.isActive = index;
      // this.s1 = index;
    },
    ////
    add(v) {
      this.msg = "点击了新增按钮！";
      this.colin = v.id;
    },
    del(v) {
      this.msg = "点击了删除按钮！";
    },
  },
};
</script>
<style lang="scss" scoped>
// /deep/.el-table .A {
//   background-color: var(--color);
//   //background-color: #1bc237;
//   color: #000;
// }
// /deep/.el-table .B {
//   background-color: #1d4ad1;
//   color: #000;
// }

.el-menu {
  // border-right: none;
  //  background-color: transparent !important;

  background-color: rgb(31, 115, 224);
  color: #fff;
  width: 60%;
  // position: relative;
  // left: 600px;
  // top: 20px;
}
::v-deep {
  // .el-menu--horizontal .el-menu .el-menu-item,
  // .el-menu--horizontal .el-menu .el-submenu__title {
  //   background-color: red;
  //   float: none;
  //   height: 36px;
  //   line-height: 36px;
  //   padding: 0 10px;
  //   color: #909399;
  // }
  // .el-menu-item {
  //   height: 30px;
  // }
  // el-menu-item is-active {
  //   height: 30px;
  // }
  .el-menu--horizontal .el-menu .el-menu-item,
  .el-menu--horizontal .el-menu .el-submenu__title {
    background-color: red !important;
    float: none;
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    color: #909399;
  }

  //   ///////////////
  .el-menu.el-menu--horizontal {
    border-bottom: none; //去掉下面的一条直线
    ul {
      background-color: red !important;
    }
  }
  .el-menu.el-menu--horizontal:hover {
    background: #1c88cf !important;
    background-color: transparent !important;
    color: rgb(20, 235, 110) !important;
  }

  // .el-submenu__title.is-active {
  //   background: #1c88cf !important;
  //   background-color: transparent !important;
  //   color: #fff !important;
  //   color: rgb(243, 49, 49) !important;
  // }
  .el-menu-item:hover {
    background: #1c88cf !important;
    background-color: transparent !important;
    color: #fff !important;
  }

  .el-submenu__title:hover {
    background: #1c88cf !important;
    background-color: transparent !important;
    color: rgb(149, 228, 23) !important;
  }
  .el-menu-item.is-active {
    background-color: transparent !important;
    // background: #1c88cf !important;
    color: rgb(243, 49, 49) !important;
  }
  .el-submenu__title.is-active {
    background: #1c88cf !important;
    background-color: transparent !important;
    color: #fff !important;
    color: rgb(243, 49, 49) !important;
  }

  ////
  // .el-submenu.el-menu-item {
  //   background-color: transparent !important;
  //   color: rgb(204, 245, 24);
  // }
  .el-menu--collapse .el-menu .el-submenu,
  .el-menu--popup {
    background-color: transparent !important;
  }

  // .el-submenu.el-menu-item:hover {
  //   background: #1c88cf !important;
  //   background-color: transparent !important;
  //   color: rgb(204, 245, 24) !important;
  // }
}
</style>
