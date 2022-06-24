<template>
  <div class="znsjBox">
    <div class="lineBox">
      <data-block tipName="流量棒图" :shape="{ height: '100%', width: '100%' }">
        <template #dataBoxSlot>
          <ft-bar :getData="staPlcData" />
        </template>
      </data-block>
    </div>
    <div class="pieBox">
        <data-block tipName="站内数据" :shape="{ height: '60%', width: '100%' }">
        <!-- 展示数据的插槽 -->
        <template #dataBoxSlot>
          <dynamic-table :table-data="staPlcData" :table-header="tableConfigZnsj" height="630" :pageSizeSet="staPlcNum"
            @clickRow="clickRow"></dynamic-table>
        </template>
      </data-block>
      <data-block :tipName="clickRowSta" :shape="{ height: '37.5%', width: '100%' }">
        <!-- 展示数据的插槽 -->
        <template #dataBoxSlot>
          <table-show :stationData="stationData" />
        </template>
      </data-block>
    </div>
     <div class="barBox">
      <data-block tipName="热力站" :shape="{ height: '100%', width: '100%' }">
        <template #dataBoxSlot>
          <ft-line
            title_name="一网压力"
            :getData="staEchartData"
            :boxHeight="'30%'"
            :yUnit="'℃'"
          >
          </ft-line>
            <ft-line
            title_name="一网温度"
            :getData="staEchartData"
            :boxHeight="'30%'"
            :yUnit="'℃'"
          >
          </ft-line>
           <ft-line
            title_name="一网流量"
            :getData="staEchartData"
            :boxHeight="'30%'"
            :yUnit="'℃'"
          >
          </ft-line>
        </template>
      </data-block>
    </div>
    
  </div>
</template>

<script>
import DataBlock from "components/slotBlock/DataBlock.vue"; //导入箱体
import { tableConfigZnsj } from "./stationData";
import DynamicTable from "components/accessory/DynamicTable.vue"; //导入列表组件
import TableShow from "components/accessory/TableShow.vue";
import FtBar from "./components/FtBar.vue";
import FtLine from "./components/FtLine.vue";
import FtPie from "./components/FtPie.vue";
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("plcS7");
export default {
  data() {
    return {
      Height: "168px",
      Width: "440px",
     tableConfigZnsj,
      clickRowSta: "数据展示",
      stationData: {},
      // series: [
      //   {
      //     name: "销量",
      //     type: "bar",
      //     key: "FT11",
      //   },
      // ],
    };
  },
  created() {
    // this.staPlcData = this.$store.getters.station;
    // this.stPlcNum = this.$store.getters.stationLenght;
    console.log('staPlcdata-----',this.staPlcData);
    console.log('staEchartData-----',this.staEchartData);
    this.clickRowSta = this.staPlcData[0].Station;      
    this.stationData = this.staPlcData[0];
    
  },
  computed: {
    ...mapState(["staPlcData", "staPlcNum", "staEchartData"]),
  },
  methods: {
    clickRow(msg) {
      this.clickRowSta = msg.Station;
      this.stationData = msg;
    },
  },
  components: {
    DataBlock,
    DynamicTable,
    TableShow,
    FtBar,
    FtLine,
    FtPie,
  },
};
</script>

<style lang="scss" scoped>
.znsjBox {
  width: 100%;
  height: 100%;
  // background-color: red;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .lineBox {
    height: 97.5%;
    width: 30%;
  }
  .barBox {
    height:97.5%;
    width: 38%;
  }
  .pieBox{
    height:97.5%;
    width: 25%;
    // background-color: red;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-around;
    // align-items: center;
  }
}
</style>
