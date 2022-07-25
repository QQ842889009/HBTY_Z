<template>
  <div class="as">
    <span class="s">所属站点：</span>
    <el-select
      v-model="value"
      filterable
      placeholder="请选择"
      @change="changeValue($event)"
      :disabled="asdf"
    >
      <el-option
        v-for="item in stationInfo"
        :key="item.sid"
        :label="item.station"
        :value="item.station"
      >
      </el-option>
    </el-select>
    <span class="s">通讯：</span>
    <el-select
      v-model="value2"
      filterable
      placeholder="请选择"
      @change="changeValue2($event)"
      :disabled="xxx == 0"
    >
      <el-option
        v-for="item in options"
        :key="item.sid"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <span class="s">达标：</span>
    <el-select
      v-model="value3"
      filterable
      placeholder="请选择"
      @change="changeValue3($event)"
      :disabled="xxx == 0"
    >
      <el-option
        v-for="item in options3"
        :key="item.sid"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <span class="s"></span>
    <el-button
      :disabled="xxx == 0"
      type="primary"
      icon="el-icon-refresh-right"
      @click="resetBtn"
      >重置</el-button
    >
    <!-- <p>tableData:{{ tableData }}</p> -->
    <!-- <p>uu{{ uu }}</p> -->
    <!-- <p>value{{ value }}</p> -->
  </div>
</template>

<script>
import dataStaPlan from "assets/js/sjzlData/sjzlDataPlanMeter"; ////
export default {
  // name: "55",
  data() {
    return {
      value: "",
      value2: "",
      value3: "",
      dataStaPlan,
      tableData: [],
      tableDataTEMP: [],
      tableData_station: [],
      tableData_off_line: [],
      tableData_on_line: [],
      tableData_ok: [],
      tableData_no: [],
      xxx: 0,

      options: [
        {
          sid: 0,
          value: 0,
          label: "离线",
        },
        {
          sid: 1,
          value: 1,
          label: "在线",
        },
      ],
      options3: [
        {
          sid: 0,
          value: "yes",
          label: "是",
        },
        {
          sid: 2,
          value: "no",
          label: "否",
        },
      ],
    };
  },
  props: {
    // 需要装载站点的数组
    stationInfo: {
      type: Array,
      default: function () {
        return [];
      },
    },
    // data: {
    //   type: Array,
    //   default: () => {
    //     return [];
    //   },
    // },
  },
  destroyed() {
    //console.log("我被销毁");
  },
  methods: {
    resetBtn() {
      console.log("zxxzxzppxzxx");
      this.value = "";
      this.value2 = "";
      this.value3 = "";
      this.xxx = 0;
      this.$emit("EmitSelectValue", this.$store.getters.inDoor);
    },

    changeValue(v) {
      this.value2 = "";
      this.value3 = "";
      this.tableData_station = this.dataStaPlan.indoorstation(
        this.$store.getters.inDoor,
        v
      );
      console.log("zz****", this.tableData_station);
      if (this.tableData_station.length > 0) {
        this.xxx = 5;
      }
      this.$emit("EmitSelectValue", this.tableData_station);
    },

    changeValue2(vv) {
      if (vv == 0) {
        console.log("通寻 想连载一期");
        this.tableData_off_line = this.dataStaPlan.indoorstation_tongxun(
          this.tableData_station,
          this.value2
        );
        this.$emit("EmitSelectValue", this.tableData_off_line);
      }
      if (vv == 1) {
        console.log("通寻 想连载一期");
        this.tableData_on_line = this.dataStaPlan.indoorstation_tongxun(
          this.tableData_station,
          this.value2
        );
        this.$emit("EmitSelectValue", this.tableData_on_line);
      }
    },
    changeValue3(vvv) {
      console.log("33333", vvv);
      if (vvv === "yes") {
        this.tableData_yes = this.dataStaPlan.indoorstation_standards(
          this.tableData_station,
          this.value3
        );
        this.$emit("EmitSelectValue", this.tableData_yes);
      }
      if (vvv === "no") {
        console.log("通寻 想连载一期");
        this.tableData_no = this.dataStaPlan.indoorstation_standards(
          this.tableData_station,
          this.value3
        );
        this.$emit("EmitSelectValue", this.tableData_no);
      }
    },
  },
  computed: {
    //利用js文件内的导出数据，赋值给计算属性的函数,给第一个画面初始值
    asdf() {
      return this.$store.getters.isshow;
    },
  },
};
</script>

<style lang="less" scoped>
.as {
  // padding: 0px 10px 0px 10px;
  .s {
    padding: 0px 10px 0px 10px;
  }
}
</style>
