<template>
  <div class="znsjBox">
    <div class="lineBox">
      <data-block tipName="流量棒图" :shape="{ height: '50%', width: '100%' }">
        <template #dataBoxSlot>
         <FtPie :getData="staEchartData" :pHeight="'80%'"/>
        </template>
      </data-block>
      <data-block tipName="流量棒图" :shape="{ height: '47.5%', width: '100%' }">
        <template #dataBoxSlot>
          <ft-line
            title_name="一网压力"
            :getData="staEchartData"
            :boxHeight="'80%'"
            :yUnit="'℃'"
          >
          </ft-line>
        </template>
      </data-block>
    </div>
    <div class="pieBox">
     
    </div>
    
  </div>
</template>

<script>
import DataBlock from "components/slotBlock/DataBlock.vue"; //导入箱体
import FtBar from "./components/FtBar.vue";
import FtLine from "./components/FtLine.vue";
import FtPie from "./components/FtPie.vue";
import EchartLine from './components/EchartLine.vue'
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
    indoorData(){
      return this.$store.getters.get_inDoorDataAndInfo;     
    }
  },
  methods: {
   
  },
  components: {
    DataBlock,
    FtBar,
    FtLine,
    FtPie,
    EchartLine
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
    width: 50%;
    // background-color: red;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-around;
    // align-items: center;
  }
}
</style>
