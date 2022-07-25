<template>
  <div class="znsjBox">
    <div class="lineBox">
      <data-block tipName="换热站" :shape="{ height: '50%', width: '100%' }">
        <template #dataBoxSlot>
          <FtPie :getData="stations" :pHeight="'80%'" />
        </template>
      </data-block>
      <div class="aa">
         <data-block
        tipName="流量棒图"
        :shape="{ height: '47.5%', width: '100%' }"
      >
        <template #dataBoxSlot>
          <ft-line
            title_name="一网压力"
            :getData="staEchartData"
            :boxHeight="'80%'"
            :yUnit="'℃'"
            seriesType="bar"
          >
          </ft-line>
        </template>
      </data-block>
      </div>
     
    </div>
    <div class="temBox">
      <data-block tipName="室温" :shape="{ height: '48%', width: '100%' }">
        <template #dataBoxSlot>
          <FtLineDB :boxHeight="'40%'" />
          <FtPieRound :getData="staEchartData" :boxHeight="'50%'" />
        </template>
      </data-block>
      <data-block tipName="通讯" :shape="{ height: '24%', width: '100%' }">
        <template #dataBoxSlot>
          <div class="guge">
            <FtGauge :pWidth="'45%'" :maxNum="100" :onLineNum="70" />
            <FtGauge pColor="yellow" :pWidth="'45%'" />
          </div>
        </template>
      </data-block>
      <data-block tipName="报警" :shape="{ height: '24%', width: '100%' }">
        <template #dataBoxSlot>
          <div class="ftbox">
            <FtBox  bColor="red" />
            <FtBox  bText="报警 总数"/>
            <FtBox  bColor="yellow" bText="未处理警告" />
            <FtBox bText="警告 总数"/>
          </div>
        </template>
      </data-block>
    </div>
    <div class="telBox">
       <FtLineBox
            title_name="一网流量"
            :getData="staEchartData"
            :boxHeight="'32%'"
            :yUnit="'t'"
          />
     
          <FtLineBox
            title_name="二网流量"
            :getData="staEchartData"
            :boxHeight="'32%'"
            :yUnit="'t'"
          />
        <FtLineBox
            title_name="补水流量"
            :getData="staEchartData"
            :boxHeight="'32%'"
            :yUnit="'t'"
          />
    </div>
  </div>
</template>

<script>
import DataBlock from "components/slotBlock/DataBlock.vue"; //导入箱体
import FtBar from "./components/FtBar.vue";
import FtLine from "./components/FtLine.vue";
import FtPie from "./components/FtPie.vue";
import EchartLine from "./components/EchartLine.vue";
import FtLineDB from "./components/FtLineDB.vue";
import FtPieRound from "./components/FtPieRound.vue";
import FtGauge from "./components/FtGauge.vue";
import FtBox from "./components/FtBox.vue";
import FtLineBox from "./components/FtLineBoxy.vue";
import { mapState } from 'vuex'
export default {
  data() {
    return {
      Height: "168px",
      Width: "440px",
    };
  },
  created() {},
  computed: {
     ...mapState('realtime',['stations']),
       ...mapState('plcS7',["staPlcData", "staPlcNum", "staEchartData"]),
    // ...mapState(["staPlcData", "staPlcNum", "staEchartData"]),
    indoorData() {
      return this.$store.getters.get_inDoorDataAndInfo.slice(0, 100);
      // :bHeight="'30%'" :bWidth="'50%'"
    },
  },
  methods: {},
  components: {
    DataBlock,
    FtBar,
    FtLine,
    FtPie,
    EchartLine,
    FtLineDB,
    FtPieRound,
    FtGauge,
    FtBox,
    FtLineBox
  },
};
</script>

<style lang="scss" scoped>
.znsjBox {
  width: 100%;
  height: 100%;
  // background-color: red
  // background-color: rgba(23, 30, 34, 0.4);
  display: flex;
  justify-content: space-around;
  align-items: center;
  .lineBox {
    height: 100%;
    width: 38%;
  }
  .aa{
    height: 100%;
    // width: 38%;
      background-color: rgba(23, 30, 34, 0.6);
  }
  .temBox {
    height: 100%;
    width: 30%;
    .guge {
      display: flex;
      width: 100%;
      height: 100%;
    }
    .ftbox {
      display: flex;
      justify-content:center ;
      flex-wrap: wrap;
      align-items: flex-start ;
      width: 100%;
      height: 80%;
    }
  }
  .telBox {
    height: 100%;
    width: 30%;
  }
}
</style>
