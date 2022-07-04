<template>
  <!-- <p>只有一级菜单可以</p> -->
  <div class="my_table">
    <!-- <p>my_table</p> -->
    <el-table
      :data="posts"
      fixed
      style="width: 100%"
      :row-key="rowKeyFunc"
      :header-cell-style="headerStyle"
      :row-class-name="tableRowClassName"
      class="customer-table"
      :style="zebarCrossingStyle"
      :cell-style="{ padding: '2.0px 0' }"
    >
      <el-table-column
        v-for="(item, index) in col"
        :prop="dropCol[index].prop"
        :key="`col_${index}`"
        :label="item.label"
        align="center"
        :fixed="col.fixed"
        :width="col.width"
      >
        <!-- <template v-if="col.children">
          <el-table-column
            v-for="(item22, index) in col.children"
            :label="item22.label"
            :prop="item22.prop"
          ></el-table-column>
        </template> -->
      </el-table-column>
      <!-- <my-column
        v-for="(item, index) in col"
        
        :col="item"
        :dropCol="dropCol"
        :index="index"
      ></my-column> -->
    </el-table>
    <!-- <pre style="text-align: left">
      {{ dropCol }}
    </pre>
    <hr />
    <pre style="text-align: left">
      {{ tableData }}
    </pre> -->
    <!-- 分页 -->
    <el-pagination
      background
      class="table-pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagination.current ? pagination.current : 1"
      :page-sizes="[10, 15, 20, 25, 30]"
      :page-size="pagination.size ? pagination.size : 30"
      layout="total,  prev, pager, next, jumper"
      :total="pagination.total ? pagination.total : 0"
    ></el-pagination>
  </div>
</template>
<script>
import Sortable from "sortablejs";
import MyColumn from "./MyColumn"; ////////
export default {
  data() {
    return {};
  },
  components: {
    MyColumn,
  },
  props: {
    //表格的头部
    col: {
      type: Array,
    },
    dropCol: {
      type: Array,
    },
    zebarCrossing: {
      type: Object, //类型
      default: () => {}, //初始空值
    },

    tableData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    pagination: {
      type: Object,
      default: () => {
        return {
          current: 1,
          size: 30,
          total: 0,
        };
      },
    },
  },
  watch: {},
  created() {
    console.log("dropCol", this.dropCol);
  },
  computed: {
    posts() {
      //注意这个，将list和分页器连接起来的关键
      return this.tableData.slice(
        (this.pagination.current - 1) * this.pagination.size,
        this.pagination.current * this.pagination.size
      );
    },
    //头部样式计算属性
    headerStyle() {
      return {
        background: "#0D1051", //头部背景颜色
        padding: "5px 0",
        height: "30px",
        borderColor: "#006CC1",
        textAlign: "center",
        // color: "#FEFEFE",
        fontSize: "14px",
        color: "#fff",
        borderColor: "#66b1ff",
      };
    },
    // 斑马线的颜色
    zebarCrossingStyle() {
      return {
        "--crossingOne": this.zebarCrossing.crossingOne,
        "--crossingTwo": this.zebarCrossing.crossingTwo,
        "--colorOne": this.zebarCrossing.colorOne,
        "--colorTwo": this.zebarCrossing.colorTwo,
      };
    },
  },
  mounted() {
    // 阻止默认行为
    document.body.ondrop = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };
    this.rowDrop();
    this.columnDrop();
  },

  methods: {
    rowKeyFunc(row) {
      console.log("row");
      return row.Sid;
    },
    //行拖拽
    rowDrop() {
      console.log("行拖拽");
      const tbody = document.querySelector(".el-table__body-wrapper tbody");
      const _this = this;
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          console.log("newIndex", newIndex);
          console.log("oldIndex", oldIndex);
          const currRow = _this.posts.splice(oldIndex, 1)[0];
          console.log("currRow", currRow);
          _this.posts.splice(newIndex, 0, currRow);
          // _this.newIndex = null;
          // _this.oldIndex = null;
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
    //斑马线
    tableRowClassName({ row, rowIndex }) {
      if ((rowIndex + 1) % 2 === 0) {
        return "crossingOne"; //类名
      } else {
        return "crossingTwo"; //类名
      }
    },
    //表格头部多余内容...的第一步*第二部在css中的/deep/ .el-table th > .cell

    //分页开始//
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.$emit("handleSizeChange", Number(val));
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$emit("handleCurrentChange", Number(val));
    },
  },
};
</script>
<style lang="scss" scoped>
.my_table {
  color: red;
}
//这是分页的一些设置
::v-deep {
  //分页相关的开始

  //分页中  总条数和前往多少页的字体颜色
  .el-pagination__total,
  .el-pagination__jump {
    color: #fff;
  }
  //上一页
  .btn-prev {
    background-color: #66b1ff !important;
    // background-color: transparent !important;
    //color: rgb(32, 245, 32);
  }
  //下一页
  .btn-next {
    background-color: transparent !important;
    background-color: #66b1ff !important;
    // color: #fff;
  }
  //没有被选中的
  .el-pagination.is-background .el-pager li:not(.disabled) {
    color: rgb(141, 138, 138);
    background-color: #14375c; //没有被选中的页码颜色
    background-color: #66b1ff !important;
    //background-color: transparent;
  }
  //选中的那个
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    color: #000(241, 158, 62);
    background-color: rgb(241, 158, 62); //选中页码的颜色
    background-color: #fff !important;
    //background-color: transparent;
  }
  // 分页相关的结束
  //表格相关的开始
  /*最外层透明   表格透明*/
  .el-table,
  .el-table__expanded-cell {
    background-color: transparent;
    // background-color: #061028;
  }
  /* 表格内背景颜色 表格透明 */
  .el-table th,
  .el-table tr,
  .el-table td {
    background-color: transparent;
  }
  .el-table__row > td {
    /* 去除表格线 */
    border: none;
  }
  .el-table--border,
  .el-table--group {
    border: none;
  }
  //去掉表格最下边的白线
  .el-table::before {
    height: 0;
  }

  //去掉固定列下方的横线
  .el-table__fixed::before,
  .el-table__fixed-right::before {
    display: none;
  }

  .el-table th.is-leaf {
    border-bottom: none; //去多余的横线
  }
  .el-table th.is-leaf {
    border-bottom: none; //去多余的横线
  }
  .customer-table .crossingOne {
    background-color: var(--crossingOne);
    color: var(--colorOne);
    // opacity: 0.8;
    opacity: 1;
  }
  .customer-table .crossingTwo {
    background-color: var(--crossingTwo);
    color: var(--colorTwo);
    // opacity: 0.8;
    opacity: 1;
  }
  //鼠标移入效果
  // .el-table__body .el-table__row.hover-row td {
  //   background-color: #66b1ff;
  //   color: red;
  //   font-size: 18px;
  // }
  // 表格相关的结束
}
</style>
