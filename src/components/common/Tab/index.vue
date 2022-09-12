<template>
  <div class="my_table">
    <!-- <p>my_table</p> -->
    <!-- pp{{ selectID }}
    {{ multipleSelection }} -->

    <el-table
      :data="posts"
      fixed
      style="width: 100%"
      :header-cell-style="headerStyle"
      :row-class-name="tableRowClassName"
      class="customer-table"
      :style="zebarCrossingStyle"
      :cell-style="{ padding: '1.8px 0' }"
      @selection-change="handleSelectionChange"
      :row-key="getRowKeys"
      @select="handleSelect"
      @select-all="handleALL"
      ref="multipleTable"
    >
      <!-- 勾选框 -->
      <el-table-column
        v-if="table_config.checkbox"
        type="selection"
        width="35"
        :reserve-selection="true"
      >
        <!--带回调的展示  -->
      </el-table-column>
      <template v-for="item in table_config.thead">
        <!-- style -->
        <el-table-column
          v-if="item.type === 'style' && item.isHidden == false"
          :key="item.prop"
          :prop="item.prop"
          :label="item.lable"
          :width="item.width"
          :fixed="item.fixed"
          align="center"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <slot :name="item.slotName" :data="scope.row"> </slot>
          </template>
        </el-table-column>
        <!-- slot------input给定展示阀门额给定 -->
        <el-table-column
          v-if="item.type === 'slot' && item.isHidden == false"
          :key="item.prop"
          :prop="item.prop"
          :label="item.lable"
          :fixed="item.fixed"
          :width="item.width"
          align="right"
          :render-header="tableRenderHeader"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <slot :name="item.slotName" :data="scope.row"> </slot>
          </template>
        </el-table-column>

        <!-- 普通展示 -->
        <el-table-column
          v-if="item.type === 'text' && item.isHidden == false"
          :key="item.prop"
          :prop="item.prop"
          :label="item.lable"
          :width="item.width"
          :fixed="item.fixed"
          align="center"
          :render-header="tableRenderHeader"
          show-overflow-tooltip
        >
        </el-table-column>
      </template>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      background
      class="table-pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagination.current ? pagination.current : 1"
      :page-sizes="[10, 15, 20, 25, 30]"
      :page-size="pagination.size ? pagination.size : 10"
      layout="total,  prev, pager, next, jumper"
      :total="pagination.total ? pagination.total : 0"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //选中变色的开始
      selectID: [],
      //选中变色的结束
      // multipleSelection: [], //选择框的数组
      multipleSelection: [], // 表格选中

      //把父组件传过来得值放在data中  而没有直接使用
      table_config: {
        thead: [],
        // thead02: {},
        checkbox: true, //复选框默认有
        Load: true, //加载现在没用
        zebarCrossing: {}, //斑马线的设置
      },
      data: [],
    };
  },
  props: {
    config: {
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
          size: 10,
          total: 0,
        };
      },
    },
  },
  watch: {
    config: {
      handler(newValue) {
        // console.log(newValue);
        this.initConfig();
      },
      immediate: true, //初始监听
      deep: true, //深度监听
    },
  },
  created() {},
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
        background: "#66B1FF",
        padding: "5px 0",
        height: "30px",
        borderColor: "#006CC1",
        textAlign: "center",
        // color: "#FEFEFE",
        fontSize: "14px",
        color: "#fff",
        borderColor: "black",
      };
    },
    // 斑马线的颜色
    zebarCrossingStyle() {
      return {
        "--crossingOne": this.table_config.zebarCrossing.crossingOne,
        "--crossingTwo": this.table_config.zebarCrossing.crossingTwo,
        "--colorOne": this.table_config.zebarCrossing.colorOne,
        "--colorTwo": this.table_config.zebarCrossing.colorTwo,
      };
    },
  },
  mounted() {},

  methods: {
    cancelSelectSidBtn() {
      this.selectID = [];
      this.$refs.multipleTable.clearSelection();
      console.log("rttytt");
      // this.multipleSelection = [];
    },
    handleALL(val) {
      this.handleSelect(val);
    },
    /*  获取当前选中的数据 */
    handleSelect(row) {
      console.log("---------row", row);
      this.selectID = [];
      if (row.length > 0) {
        row.forEach((value, index) => {
          console.log("value", value);
          this.selectID.push(value.Sid);
        });
      }

      this.$emit("EmitSelectID", this.selectID);
    },
    getRowKeys(row) {
      return parseInt(row.Sid);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;

      console.log("this.multipleSelection", this.multipleSelection);
    },
    ///////////
    vv(v) {
      var str = "";
      var len = v.length;
      if (len > 6) {
        str = v.substring(0, 4) + "~~";
      } else {
        return v;
      }
      return str;
    },
    //斑马线
    tableRowClassName({ row, rowIndex }) {
      if (this.selectID.length == 0) {
        if ((rowIndex + 1) % 2 === 0) {
          return "crossingOne"; //类名
        } else {
          return "crossingTwo"; //类名
        }
      }

      if (this.selectID.length > 0) {
        let color = "";
        for (let item of this.selectID.values()) {
          if (item === row.Sid) color = "table-SelectedRow-bgcolor";
        }
        console.log(color);
        return color;
      }
    },
    //表格头部多余内容...的第一步*第二部在css中的/deep/ .el-table th > .cell//
    tableRenderHeader(h, data) {
      return h("span", [
        h(
          "el-tooltip",
          {
            attrs: {
              class: "item",
              effect: "dark",
              content: data.column.label,
              placement: "top",
            },
          },
          [h("span", data.column.label)]
        ),
      ]);
    },
    //分页开始
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.$emit("handleSizeChange", Number(val));
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$emit("handleCurrentChange", Number(val));
    },
    //分页结束
    //定义初始化配置开始
    initConfig() {
      // this.data = this.tableData;
      //循环props接收到得数据config  注解props接收到得数据也可以像data得数据一样用this.config使用
      for (let key in this.config) {
        //Object.keys 把对象传进去把这个对象的key拿出来得到一个数组
        //includes  包含的意思
        if (Object.keys(this.table_config).includes(key)) {
          //this.table_config[key]是data的数据
          //this.config[key];是props中的数据
          //目的有相同的key才替换，没有相同的key就不替换保留data的数据
          this.table_config[key] = this.config[key];
        }
        console.log("4444444", this.table_config);
        console.log(key); //打印key的值 现在只有 thead
      }
    },
    //定义初始化配置结束
  },
};
</script>
<style lang="scss" scoped>
//这是分页的一些设置
::v-deep {
  .table-SelectedRow-bgcolor {
    td {
      background-color: #ebb563 !important;
    }
  }
  .el-table__row > td {
    /* 去除表格线 */
    border: none;
  }
  .el-table th.is-leaf {
    border-bottom: none; //去多余的横线
  }
  .el-table th.is-leaf {
    border-bottom: none; //去多余的横线
  }
  .el-pagination {
    // text-align: center;
    color: #000;
    height: 30px;
    // padding: 0.2rem 0.1rem;
    // background-color: rgb(241, 158, 62); //选中页码的颜色
  }
  .el-pagination.is-background .el-pager li:not(.disabled) {
    color: rgb(141, 138, 138);
    background-color: #14375c; //没有被选中的页码颜色
    background-color: transparent !important;
    //background-color: transparent;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    color: rgb(241, 158, 62);
    background-color: rgb(241, 158, 62); //选中页码的颜色
    background-color: transparent !important;
    //background-color: transparent;
  }
  .el-pagination__total,
  .el-pagination__jump {
    color: #fff;
  }
  .btn-prev {
    background-color: #14375c;
    background-color: transparent !important;
    //color: rgb(32, 245, 32);
  }
  .btn-next {
    background-color: transparent !important;
    // color: #fff;
  }
  .el-input__inner {
    background-color: transparent !important;
  }
  .el-pagination__jump {
    color: #000 !important; //前往xx页的字体颜色
  }
  .el-pagination__total {
    color: #000 !important; //总条数的颜色
  }
  .el-checkbox__inner {
    //color: rgb(241, 158, 62) !important; //总条数的颜色
    background-color: #66b1ff !important; //选框的颜色
    //border-radius: 50% !important; //圆角百分比
  }
  //斑马线的颜色
  .customer-table .crossingOne {
    background-color: var(--crossingOne);
    color: var(--colorOne);
    opacity: 0.8;
  }
  .customer-table .crossingTwo {
    background-color: var(--crossingTwo);
    color: var(--colorTwo);
    opacity: 0.8;
  }

  //

  //分页的hover颜色
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #fff;
    background-color: #66b1ff !important;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active:hover {
    color: #14375c;
    background-color: #66b1ff !important;
  }
  //没有fixed的时候用
  .el-table tbody tr:hover > td {
    background-color: #66b1ff;
    background-color: #c0ccee;
    color: #000;
    font-size: 18px;
  }
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
  //固定表头 目的是表头过长把单位用....表示   //表格头部多余内容...的第二步*第一部在methods中的tableRenderHeader
  .el-table th > .cell {
    // overflow: hidden; // 超出的文本隐藏
    // text-overflow: ellipsis; // 溢出用省略号显示
    // display: -webkit-box;
    // // white-space: nowrap; // 溢出不换行
    // //-webkit-line-clamp: 2;
    // white-space: nowrap;
    // -webkit-box-orient: vertical;
    // // color: red;
    white-space: pre;
  }
  .el-table--border::after,
  .el-table--group::after,
  .el-table::before {
    content: "";
    position: absolute;
    background-color: transparent; //去多余的横线
    z-index: 1;
  }
}

.el-table /deep/ th {
  padding: 0;
  white-space: nowrap;
  min-width: fit-content;
}

.el-table /deep/ td {
  padding: 1px;
  white-space: nowrap;
  width: fit-content;
}

/** 修改el-card默认paddingL:20px-内边距 **/
>>> .el-card__body {
  padding: 10px;
}

.el-table /deep/ .cell {
  white-space: nowrap;
  width: fit-content;
}
</style>
