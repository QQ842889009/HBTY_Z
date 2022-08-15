<template>
  <div class="station">
    <!-- <p>{{ a }}</p>
    <button @click="cc">aaa</button> -->

    <BjBox class="BjBox-z">
      <template #header-box-temp1> 整点报表</template>
      <template #header-box-temp3> </template>
      <template #content>
        <MyTable
          :col="col"
          :dropCol="dropCol"
          :tableData="tableDataxx"
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
import { createNamespacedHelpers } from "vuex"; //
//const { mapState } = createNamespacedHelpers("plcS7");
export default {
  data() {
    return {
      a: [
        { sid: 0, a: 1, b: "1", c: 0, d: "0" },
        { sid: 1, a: 1, b: "1", c: 0, d: "0" },
        { sid: 2, a: 1, b: "1", c: 0, d: "0" },
        { sid: 3, a: 1, b: "1", c: 0, d: "0" },
        { sid: 4, a: 1, b: "1", c: 0, d: "0" },
      ],

      col: [
        {
          prop: "Station",
          label: "换热站",

          width: "130PX",
          fixed: "left",
          type: "text",
        },
        {
          prop: "Space",
          label: "面积",
          fixed: "left",
          type: "text",
        },

        {
          label: "一次网",
          // isHidden: false,
          children: [
            {
              prop: "TE11",
              label: "供温(℃)",
              type: "text",
            },
            {
              prop: "TE12",
              label: "回温(℃)",
              type: "text",
            },
            {
              prop: "PT11",
              label: "供压(MPa)",
              width: "90PX",
              type: "text",
            },
            {
              prop: "PT12",
              label: "回压(MPa)",
              width: "90PX",
              type: "text",
            },
            {
              prop: "PT11_FV",
              label: "阀后压(MPa)",
              width: "110PX",
              type: "text",
            },
            {
              prop: "FT11",
              label: "流量(t/h)",
              type: "text",
            },
            {
              prop: "FV1FB",
              label: "电动阀(%)",
              width: "90PX",
              type: "text",
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
              type: "text",
            },
            {
              prop: "TE22",
              label: "回温(℃)",
              type: "text",
            },
            {
              prop: "PT21",
              label: "供压(MPa)",
              width: "90PX",
              type: "text",
            },
            {
              prop: "PT22",
              label: "回压(MPa)",
              width: "90PX",
              type: "text",
            },
            {
              prop: "PT22_BF",
              label: "泵前压(MPa)",
              width: "110PX",
              type: "text",
            },
            {
              prop: "PT22_BL",
              label: "泵后压(MPa)",
              width: "110PX",
              type: "text",
            },
            {
              prop: "FT21",
              label: "流量(t/h)",
              type: "text",
            },
            {
              prop: "BP21FB",
              label: "循环泵(Hz)",
              width: "90PX",
              type: "text",
            },
            {
              prop: "FV2FB",
              label: "二网阀(%)",
              width: "90PX",
              type: "text",
            },
            {
              prop: "TE22_MP",
              label: "补水后温(℃)",
              width: "110PX",
              type: "text",
            },
            {
              prop: "BP21FB",
              label: "循环泵(Hz)",
              width: "110PX",
              type: "text",
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
              type: "state",
            },
            {
              prop: "MP2S",
              label: "潜水泵",
              type: "state",
            },
            {
              prop: "XYVC",
              label: "泄压阀",
              type: "state",
            },
          ],
        },
        {
          prop: "LT",
          label: "液位(m)",
          width: "100PX",
          type: "text",
        },
        {
          prop: "ZFT31",
          label: "补水量(m³)",
          fixed: "right",
          width: "100PX",
          type: "text",
        },
        {
          prop: "DL",
          label: "电能(kWh)",
          fixed: "right",
          width: "100PX",
          type: "text",
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

      //表格数据
      tableData: [],
      transuFindData: [],
      //分页的设置
      pagination: {
        current: 1,
        size: 31,
        total: 0,
      },
    };
  },
  created() {
    this.tableDataxx = this.$store.getters.stationDataAndInfo; //表格数据
    // inDoorRequestAll();
    // this.tableData = this.$store.getters.get_staPlcData; //表格数据
    // console.log("换热站数据AAA", this.tableData);
    this.pagination.total = this.tableDataxx.lenght; //数据的长度给分页总数用
    // this.transuFindData = this.$store.getters.get_inDoorDataAndInfo;
    // console.log("sssss", this.transuFindData)
  },
  watch: {},
  computed: {
    // ...mapState(["staPlcData", "staPlcNum"]),

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
    cc() {
      console.log("cc");
      for (let i = 0; i < this.a.length; i++) {
        console.log(this.a[i].a);
        if (this.a[i].c == 0) {
          this.a[i].c = "停止状态";
        }
      }
      console.log(this.a);
    },
    change(val) {
      console.log("TTTT", val);
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
    InputSearch,

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
