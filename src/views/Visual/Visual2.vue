<template>
  <div class="znsjBox">
    <div class="lineBox">
      <data-block tipName="流量棒图" :shape="{ height: '100%', width: '100%' }">
        <template #dataBoxSlot>
         <FtPie :getData="staEchartData" />
        </template>
      </data-block>
    </div>
    <div class="pieBox">
        <data-block tipName="站内数据" :shape="{ height: '100%', width: '100%' }">
        <template #dataBoxSlot>
         222222222
        </template>
      </data-block>
     
    </div>
     <div class="barBox">
      <data-block tipName="热力站" :shape="{ height: '100%', width: '100%' }">
        <template #dataBoxSlot>
         33333333333
        </template>
      </data-block>
    </div>
    
  </div>
</template>

<script>
import DataBlock from "components/slotBlock/DataBlock.vue"; //导入箱体
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
    };
  },
  created() {
    
  },
  computed: {
    ...mapState(["staPlcData", "staPlcNum", "staEchartData"]),
  },
  methods: {
   
  },
  components: {
    DataBlock,
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
    height: 100%;
    width: 38%;
  }
  .barBox {
    height:97.5%;
    width: 25%;
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
