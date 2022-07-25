<!--
  *这是一个表格的封装，引用了另一个列的循环组建TableColumn
*对外暴露的变量
*table-data----需要对象数组，格式微站内的数据
*able-header--是对上面数据的表头，对象数组，查看js文件
-->
<template>
  <div class="tableBox">
    <div class="tableDataBox">
      <el-table
        :data="tableDataPage"
        border
        :height="height"
        :cell-style="columnStyle"
        class="customer-table"
        :row-class-name="tableRowClassName"
        :header-cell-style="{
          background: '#5B2B34',
          color: 'white',
          padding: '5px 0',
        }"
        @row-click="clickRow"
      >
        <template v-for="(item, ide) in tableHeader">
          <table-column :key="ide" :coloumn-header="item"></table-column>
        </template>
      </el-table>
    </div>

    <!-- <div class="pagBox">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        layout="total, prev, pager, next, jumper"
        :page-size="pageSizeSet"
        :total="tableDataPageLen"
        :hide-on-single-page="false"
      >
      </el-pagination>
    </div> -->
  </div>
</template>

<script>
import TableColumn from "./TableColumn";
export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  props: {
    // 表格的数据14375C
    tableData: {
      type: Array,
      required: true,
    },
    // 多级表头的数据
    tableHeader: {
      type: Array,
      required: true,
    },
    // 表格的高度
    height: {
      type: String,
      default: "800",
    },
    pageSizeSet: {
      type: Number,
      default: 16,
    },
  },
  computed: {
    tableDataPageLen() {
      return this.tableData.length;
    },
    tableDataPage() {
      let len = this.tableData.length;
      let obj = [];
      let startI = (this.currentPage - 1) * this.pageSizeSet;
      let endI =
        this.currentPage * this.pageSizeSet < len
          ? this.currentPage * this.pageSizeSet
          : len;
      for (let i = startI; i < endI; i++) {
        obj.push(this.tableData[i]);
      }
      return obj;
    },
  },
  methods: {
    clickRow(row) {
      this.$emit("clickRow", row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = parseInt(val);
      console.log(`当前页: ${val}`);
    },

    /**可以给每一行固定样式 */
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return "odd-row";
      }
      return "add-row";
    },
    columnStyle({ row, column, rowIndex, columnIndex }) {
      // if (this.dataList[rowIndex].operateStatus === '验收被驳回') {
      //  return { 'background-color': '#ffeed5' }
      // }
      // if (columnIndex === 0) {
      //   // 返回去除表格中的横线
      //   // return 'border: none;'
      //   // 返回背景颜色
      //   return "background-color:#fff9e9;!important";
      // }
      // if (columnIndex < 2) {
      //   return { color: "red" };
      // }
    },
  },

  components: {
    TableColumn,
  },
};
</script>

<style lang="scss" scoped>
// 表格最外层边框-底部边框
.el-table--border::after,
.el-table--group::after {
  width: 0;
}
// .customer-table::before {
//   width: 0;
// }
// .customer-table .el-table__fixed-right::before,
// .el-table__fixed::before {
//   width: 0;
// }

// /deep/ .el-table__row {
//   &:hover {
//     box-shadow: inset 0 0px 6px 2px #00bae4;
//   }
// }
// /deep/ .customer-table__row:hover {
//   box-shadow: inset 0 0px 6px 2px #00bae4 !important;
//   background-color: #052c55 !important;
// }
.tableBox {
  height: 96.5%;
  margin-top: 1rem;
  margin-left: 1rem;
  // border: 1px solid #fff;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-around;

  // flex-direction: column;
  //  background-color:#fff;
  .tableDataBox {
    // margin-left: 5px;
    // margin-right: 5px;
    // border: 1px solid red;
    height: 100%;
    // overflow: auto;
    ::v-deep {
      .el-table--scrollable-y .el-table__body-wrapper {
        &::-webkit-scrollbar {
          //隐藏滚动条
          width: 0px;
        }
      }

      .el-table .el-table__cell.gutter {
        //设置滚动条上方的小方框的颜色，不是滚动条部分的
        display: none;
        // background: #5b2b34;
      }

      .el-table__row > td {
        /* 去除表格线 */
        border: none;
      }
      .el-table,
      .el-table__expanded-cell {
        // background-color: #061028;
        background-color: transparent;
      }
      .el-table--border,
      .el-table--group {
        border: none;
      }
      .el-table__body tr.hover-row > td {
        // color: #5aa6d4;
        // box-shadow: inset 0 0px 6px 2px #00bae4;
        font-weight: 600;
        // font-size: 2rem;
        /* 强制修改背景颜色 */
        background-color: #052c55 !important;
        // border-left: 0px solid black;
      }

      // .customer-table tr:hover {
      //   color: #5aa6d4;
      //   box-shadow: inset 0 0px 6px 2px #00bae4;
      //   font-weight: 700;
      //   font-size: 15px;
      //   /* 强制修改背景颜色 */
      //   background-color: #052c55 !important;
      //   border-left: 0px solid black;
      // }

      .customer-table .add-row {
        background-color: #14375c;
        // background-color:transparent;
        color: white;
        opacity: 0.8;
      }
      .customer-table .odd-row {
        background-color: #060f29;
        // background-color:transparent;
        color: white;
          opacity: 0.8;
      }
    }
  }
}
</style>
