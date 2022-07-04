<template>
  <div class="station">
    <BjBox class="BjBox-z">
      <template #header-box-temp1> 数据总览</template>
      <!-- <template #header-box-temp2> 数据总览</template> -->
      <template #header-box-temp3>
        <InputSearch
          :wide="wide"
          :data="staPlcData"
          @change="change"
          :findName="findName"
          :placeholder="placeholder"
          :prefixIcon="prefixIcon"
          :size="size"
          :clearable="clearable"
        ></InputSearch>
      </template>
      <template #content>
        <MyTable
          :col="col"
          :dropCol="dropCol"
          :tableData="staPlcData"
          :pagination="pagination"
          :zebarCrossing="zebarCrossing"
          class="customer-table"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
          row-key="id"
        >
        </MyTable>
      </template>
    </BjBox>
  </div>
</template>
<script>
import Sortable from "sortablejs";
import MyTable from "./MyTable"; //
import BjBox from "views/Module/BgcBox"; //背景图
import InputSearch from "components/common/InputSearch"; //输入关键词查找模板//

import { Input } from "element-ui";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("plcS7");
export default {
  data() {
    return {
      col: [
        {
          prop: "Station",
          label: "换热站",

          width: "130PX",
          fixed: "left",
        },
        {
          prop: "Space",
          label: "面积",
          fixed: "left",
        },

        {
          label: "一次网22",
          // isHidden: false,
          children: [
            {
              prop: "TE11",
              label: "供温(℃)",
            },
            {
              prop: "TE12",
              label: "回温(℃)",
            },
            {
              prop: "PT11",
              label: "供压(MPa)",
              width: "90PX",
            },
            {
              prop: "PT12",
              label: "回压(MPa)",
              width: "90PX",
            },
            {
              prop: "PT11_FV",
              label: "阀后压(MPa)",
              width: "110PX",
            },
            {
              prop: "FT11",
              label: "流量(t/h)",
            },
            {
              prop: "FV1FB",
              label: "电动阀(%)",
              width: "90PX",
            },
          ],
        },

        {
          label: "二次网",
          // isHidden: false,
          children: [
            {
              prop: "TE21",
              label: "供温(℃)",
            },
            {
              prop: "TE22",
              label: "回温(℃)",
            },
            {
              prop: "PT21",
              label: "供压(MPa)",
              width: "90PX",
            },
            {
              prop: "PT22",
              label: "回压(MPa)",
              width: "90PX",
            },
            {
              prop: "PT22_BF",
              label: "泵前压(MPa)",
              width: "110PX",
            },
            {
              prop: "PT22_BL",
              label: "泵后压(MPa)",
              width: "110PX",
            },
            {
              prop: "FT21",
              label: "流量(t/h)",
            },
            {
              prop: "BP21FB",
              label: "循环泵(Hz)",
              width: "90PX",
            },
            {
              prop: "FV2FB",
              label: "二网阀(%)",
              width: "90PX",
            },
            {
              prop: "TE22_MP",
              label: "补水后温(℃)",
              width: "110PX",
            },
            {
              prop: "BP21FB",
              label: "循环泵(Hz)",
              width: "110PX",
            },
          ],
        },
        {
          label: "状态",
          // isHidden: false,
          children: [
            {
              prop: "MP1C",
              label: "补水泵",
            },
            {
              prop: "MP2S",
              label: "潜水泵",
            },
            {
              prop: "XYVC",
              label: "泄压阀",
            },
          ],
        },
        {
          prop: "LT",
          label: "液位(m)",
          width: "100PX",
        },
        {
          prop: "ZFT31",
          label: "补水量(m³)",
          fixed: "right",
          width: "100PX",
        },
        {
          prop: "DL",
          label: "电能(kWh)",
          fixed: "right",
          width: "100PX",
        },
      ],
      dropCol: [
        {
          prop: "Station",
          label: "换热站",

          width: "130PX",
          fixed: "left",
        },
        {
          prop: "Space",
          label: "面积",
          fixed: "left",
        },

        {
          label: "一次网",
          // isHidden: false,
          children: [
            {
              prop: "TE11",
              label: "供温(℃)",
            },
            {
              prop: "TE12",
              label: "回温(℃)",
            },
            {
              prop: "PT11",
              label: "供压(MPa)",
              width: "90PX",
            },
            {
              prop: "PT12",
              label: "回压(MPa)",
              width: "90PX",
            },
            {
              prop: "PT11_FV",
              label: "阀后压(MPa)",
              width: "110PX",
            },
            {
              prop: "FT11",
              label: "流量(t/h)",
            },
            {
              prop: "FV1FB",
              label: "电动阀(%)",
              width: "90PX",
            },
          ],
        },

        // {
        //   label: "二次网",
        //   // isHidden: false,
        //   children: [
        //     {
        //       prop: "TE21",
        //       label: "供温(℃)",
        //     },
        //     {
        //       prop: "TE22",
        //       label: "回温(℃)",
        //     },
        //     {
        //       prop: "PT21",
        //       label: "供压(MPa)",
        //       width: "90PX",
        //     },
        //     {
        //       prop: "PT22",
        //       label: "回压(MPa)",
        //       width: "90PX",
        //     },
        //     {
        //       prop: "PT22_BF",
        //       label: "泵前压(MPa)",
        //       width: "110PX",
        //     },
        //     {
        //       prop: "PT22_BL",
        //       label: "泵后压(MPa)",
        //       width: "110PX",
        //     },
        //     {
        //       prop: "FT21",
        //       label: "流量(t/h)",
        //     },
        //     {
        //       prop: "BP21FB",
        //       label: "循环泵(Hz)",
        //       width: "90PX",
        //     },
        //     {
        //       prop: "FV2FB",
        //       label: "二网阀(%)",
        //       width: "90PX",
        //     },
        //     {
        //       prop: "TE22_MP",
        //       label: "补水后温(℃)",
        //       width: "110PX",
        //     },
        //     {
        //       prop: "BP21FB",
        //       label: "循环泵(Hz)",
        //       width: "110PX",
        //     },
        //   ],
        // },
        // {
        //   label: "状态",
        //   // isHidden: false,
        //   children: [
        //     {
        //       prop: "MP1C",
        //       label: "补水泵",
        //     },
        //     {
        //       prop: "MP2S",
        //       label: "潜水泵",
        //     },
        //     {
        //       prop: "XYVC",
        //       label: "泄压阀",
        //     },
        //   ],
        // },
        {
          prop: "LT",
          label: "液位(m)",
          width: "100PX",
        },
        {
          prop: "ZFT31",
          label: "补水量(m³)",
          fixed: "right",
          width: "100PX",
        },
        {
          prop: "DL",
          label: "电能(kWh)",
          fixed: "right",
          width: "100PX",
        },
      ],
      zebarCrossing: {
        crossingOne: "#0D1051",
        crossingTwo: "#224394",
        //crossingTwo: "#224394",
        colorOne: "#fff",
        colorTwo: "#40B3FB",
      },
      // InputSearch开始
      findName: {
        findName1: "Station", //要搜索的关键词
        findName2: "Station", //要搜索的关键词
      },
      wide: "220px", //宽度
      placeholder: "站点", //提示
      prefixIcon: "el-icon-search", //前面的图标
      size: "small", //大小
      clearable: true, //是否带清除
      // InputSearch结束
      //表格配置
      // table_config: {
      //   thead: tableHeader,

      //   checkbox: false, //复选框默认有
      //   Load: true, //加载现在没用
      //   //传递斑马线和文字的颜色
      //   zebarCrossing: {
      //     crossingOne: "#254A93",
      //     crossingTwo: "#1c47c4",
      //     colorOne: "#fff",
      //     colorTwo: "#fff",
      //   },
      // },
      //斑马线的参数

      //表格数据
      tableData: [],
      transuFindData: [],
      //分页的设置
      pagination: {
        current: 1,
        size: 30,
        total: 0,
      },
    };
  },
  created() {
    // inDoorRequestAll();
    // this.tableData = this.$store.getters.get_staPlcData; //表格数据
    // console.log("换热站数据AAA", this.tableData);
    this.pagination.total = this.staPlcNum; //数据的长度给分页总数用
    // this.transuFindData = this.$store.getters.get_inDoorDataAndInfo;
    // console.log("sssss", this.transuFindData)
  },
  watch: {},
  computed: {
    ...mapState(["staPlcData", "staPlcNum"]),

    paginationNum() {
      return parseInt(this.staPlcNum / this.pagination.size + 0.9);
    },
  },
  mounted() {
    document.body.ondrop = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };
    this.rowDrop();
    this.columnDrop();
  },
  methods: {
    //历史查询
    // FY() {
    //   for (let i = 0; i < this.paginationNum; i++) {
    //     console.log("iiiiiiiii", i);
    //     setTimeout(() => {
    //       this.pagination.current = i;
    //     }, 1000 * i);
    //   }
    // },
    //InputSearch传递回来的数据
    change(val) {
      console.log("TTTT", val);
      // this.staPlcData = val;
      // this.pagination.total = val.length;
    },
    myStyle(value) {
      if (value > 18 && value <= 22) {
        return { color: "#14e90d", fontWeight: "900" };
      } else if (value > 23 && value < 30) {
        return { color: "red", fontWeight: "900" };
      } else if (value < 18) {
        return { color: "#8d8787" };
      }
    },

    handleSizeChange(val) {
      //接收子组件传递过来的值，改变父组件的值又传递给子组件
      this.pagination.size = val;
    },
    handleCurrentChange(val) {
      //接收子组件传递过来的值，改变父组件的值又传递给子组件
      this.pagination.current = val;
    },

    rowDrop() {
      console.log("行拖拽");
      const tbody = document.querySelector(".el-table__body-wrapper tbody");
      console.log("---AAAtbody", tbody);
      const _this = this;
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          console.log("newIndex", newIndex);
          console.log("oldIndex", oldIndex);
          const currRow = _this.posts.splice(oldIndex, 1)[0];
          _this.posts.splice(newIndex, 0, currRow);
        },
      });
    },
    //列拖拽
    columnDrop() {
      const wrapperTr = document.querySelector(".el-table__header-wrapper tr");
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: (evt) => {
          const oldItem = this.dropCol[evt.oldIndex];
          this.dropCol.splice(evt.oldIndex, 1);
          this.dropCol.splice(evt.newIndex, 0, oldItem);
        },
      });
    },
  },
  components: {
    // Collocate,
    // Tab,
    InputSearch,
    // SelectSearch,
    // DateTimePicker,
    // SysDlialog22,
    // tt,
    MyTable,
    BjBox,
  },
};
</script>
<style lang="scss" scoped>
.station {
  width: 100%;
  // background-color: #fff;
  .BjBox-z {
    ///z-index: -99;
  }
  // opacity: 0.8;
}
</style>
