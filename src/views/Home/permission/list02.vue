


<template>
  <!-- <div>{{ aiUnitData }}</div> -->
  <div class="zzz">
    <div class="aaa">
      <fence>
        <template #aass1>
          <aaa>
            <template #left-slot>
              <!-- <span><i class="iconfont icon-github"></i></span> -->

              <!-- <span class="ffdd">供水r温度</span> -->
            </template>
            <template #right-slot>
              <!-- <span><i class="iconfont icon-github"></i></span>

                    <span class="ffdd">供水温度</span> -->
            </template>
          </aaa>
        </template>
        <template #aass2>
          <aaa> <template #left-slot class="dd"> </template></aaa>
        </template>
        <template #aass3>
          <aaa></aaa>
        </template>
      </fence>
    </div>
    <div class="bbb">
      <fence>
        <template #aass1>
          <aaa>
            <template #left-slot>
              <!-- <span><i class="iconfont icon-github"></i></span> -->

              <!-- <span class="ffdd">供水r温度</span> -->
            </template>
            <template #right-slot>
              <!-- <span><i class="iconfont icon-github"></i></span>

                    <span class="ffdd">供水温度</span> -->
            </template>
          </aaa>
        </template>
        <template #aass2>
          <aaa> <template #left-slot class="dd"> </template></aaa>
        </template>
        <template #aass3>
          <aaa></aaa>
        </template>
      </fence>
    </div>
  </div>
  <!-- <div class="my-table">
    <div class="select">
      <el-input
        v-model="searchValue"
        size="small"
        clearable
        placeholder="请输入换热站/关键词"
        style="width: 300px"
      ></el-input>
      <el-button type="primary" size="small" @click="doFilter"
        >搜索33</el-button
      >
    </div>

    <el-table :data="tableData" border fixed>
      <el-table-column
        label="换热站名称"
        prop="Station"
        width="200"
        align="center"
        fixed="left"
      >
      </el-table-column>
      <el-table-column
        label=""
        prop="Sid"
        width="200"
        align="center"
        fixed="left"
      >
      </el-table-column>
      <el-table-column
        label="换热站名称"
        prop="Station"
        width="200"
        align="center"
        fixed="left"
      >
      </el-table-column>

      <el-table-column label="面积(w㎡)" prop="Space" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.Space | getSex }}</span>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="fenye"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalItems"
    ></el-pagination>
  </div> -->
</template>

<script>
// import { mapState } from "vuex";
import fence from "views/Module/fence";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("aiUnit");
export default {
  data() {
    return {
      tableData: [], //表需要的数组
    };
  },
  created() {
    this.updata;
  },
  computed: {
    updata() {
      this.tableData = this.$store.getters.aiUnit;
    },
    ...mapState(["aiUnitData"]),
  },
  mounted() {},
  methods: {},
  components: {
    // 第二部注册

    fence,
  },
};
</script>
<style lang="scss" scoped>
.zzz {
  width: 100%;
  height: 100%;
  display: inline;
}
.aaa {
  width: 20%;
  height: 100%;
}
.bbb {
  width: 20%;
  height: 100%;
}
</style>
