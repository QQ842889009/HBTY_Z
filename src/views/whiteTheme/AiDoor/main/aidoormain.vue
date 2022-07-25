<template>
  <div class="all" :style="{ backgroundColor: $store.state.baseColor }">
    <!-- <button @click="ccc" class="btnreyuan">热源数据</button> -->
    <el-container class="home-container">
      <!-- <el-header>
     
        <div class="title">穆棱福通热力热力</div>
        <div class="tqyb"></div
      ></el-header> -->
      <el-container>
        <el-aside :width="isCollapse ? '0px' : '0px'">
          <div class="toggle-button" @click="togleCollapse">|||</div>
        </el-aside>
        <div class="caidan"></div>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "SjzlMeter",
  data() {
    return {
      // keywords: "",
      // tableData: [],
      // search: "",

      // currentPage: 1, // 当前页码
      // total: 20, // 总条数
      // pageSize: 12, // 每页的数据条数
      // row: 0,

      ///
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
              path: "RealTimeDataTable_zhannei",
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
              path: "Gykz",
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
            {
              name: "声音报警",
              id: "524", // path: "alertinquire",
              path: "alertAAA",
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
            //   //  path: "reportformsZD_zhannei",
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
    };
  },
  created() {},
  watch: {
    //X里的数值变化时就执行{}里的东西
    // keywords() {
    //   this.search01(this.keywords);
    // },
  },
  updated() {},
  methods: {
    //菜单的折叠和展开
    togleCollapse() {
      this.isCollapse = !this.isCollapse;
      this.$store.commit("iselementwidthclick");
    },
    //每页条数改变时触发 选择一页显示多少行
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    //   this.currentPage = 1;
    //   this.pageSize = val;
    // },
    //当前页改变时触发 跳转其他页
    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`);
    //   this.currentPage = val;
    // },

    // search01(keywords) {
    //   // console.log(keywords);

    //   //根据关键词搜索
    //   var newdataAyy = [];
    //   this.tableData = this.$store.getters.wtMeterDatas;
    //   this.row = parseInt(this.tableData.length / this.pageSize);
    //   // console.log(`到查询按钮时整个数组是什么`);
    //   // console.log(this.tableData);
    //   this.tableData.forEach((i) => {
    //     if (i.Number.indexOf(keywords) != -1) {
    //       newdataAyy.push(i);
    //     }
    //   });
    //   console.log(newdataAyy);
    //   this.tableData = newdataAyy;
    //   console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
    //   console.log(this.tableData);
    //   // return newdataAyy;
    //   return this.tableData;
    //   //  :total="tableData.length / pageSize"
    //   // this.tableData = newdataAyy;
    //   // console.log(`有带铁的数组吗`);
    //   // console.log(newdataAyy);
    // },
  },
  mounted() {},
  computed: {
    created() {
      //这个是生命周期函数，当组件建立时出发里面的东西，以此为例出发的是计算属性中的meterb
      // this.meterb;
    },

    //生命周期函数当切换到此组件时就会自动执行此代码完了再 created里面引用它
    // meterb() {
    //   this.tableData = this.$store.getters.wtMeterDatas;
    //   this.row = parseInt(this.tableData.length / this.pageSize);
    //   console.log("this.row");
    //   console.log(this.row);
    // },
  },

  components: {},
};
</script>

<style lang="scss" scoped>
.all {
  //这样占满全屏
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  .home-container {
    height: 100%; //这样布局高度撑满全屏
    border: none;
  }
  .el-header {
    position: relative;
    .title {
      font-family: serif;
      text-shadow: 0 0 5px black; // 使用了 字体阴影，然后把字体颜色调成背景颜色，就是空心字了
      color: rgb(207, 145, 145);
      position: absolute;

      left: 2rem;
    }

    // background-color: forestgreen;
  }
  .el-aside {
    .el-menu {
      border-right: none; //总有个边框 去掉
    }
    // width: 200px;
    .toggle-button {
      background-color: #4a5064;
      font-size: 10px;
      line-height: 24px;
      color: white;
      text-align: center;
      /*调3条线的距离*/
      letter-spacing: 0.2em;
      /*鼠标放上变小手*/
      cursor: pointer;
    }
  }
  // .caidan {
  //   width: 1000px;
  //   height: 100px;
  //   background-color: red;
  //   position: absolute;
  //   top: 1px;
  //   left: 200px;
  // }
  .el-main {
    padding: 0;
    // background-color: salmon;
  }
  // .el-menu {
  //   border: none; //总有个边框 去掉
  // }
  .iconfont {
    color: #409fff;
    margin-right: 10px;
  }
  .el-icon-s-data {
    color: #ffd04b;
  }
}
</style>
