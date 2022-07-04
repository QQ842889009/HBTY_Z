<template>
  <div class="minBox">
    <div class="titleBox">       
            <FtBoxImg  bNum="4977 GJ"  bText="今日预报总供热量"  :bHeight="'85%'" :bWidth="'23%'"/>
            <FtBoxImg  bNum="292.9 T" bText="今日预报总供热量"  :bHeight="'85%'" :bWidth="'23%'"/>
            <FtBoxImg  bNum="49775 GJ" bText="今日预报总供热量" :bHeight="'85%'" :bWidth="'23%'"/>
            <FtBoxImg  bNum="1819.6 T" bText="今日预报总供热量"  :bHeight="'85%'" :bWidth="'23%'"/>    
  </div>
  <div class="title">
     <img class="tt" src="~@/assets/img/logo/yiji.png" alt="">
     供热系统每日负荷预报
  </div>
    <div class="topBox">
      
     
    </div>
    <div class="midBox">
      
    </div>
    <div class="botBox">
    </div>
  </div>
</template>
<script>
import DataBlock from "components/slotBlock/DataBlock.vue"; //导入箱体
import FtBar from "./components/FtBar.vue";
import FtLine from "./components/FtLine.vue";
import FtPie from "./components/FtPie.vue";
import EchartLine from "./components/EchartLine.vue";
import { createNamespacedHelpers } from "vuex";
import FtLineDB from "./components/FtLineDB.vue";
import FtPieRound from "./components/FtPieRound.vue";
import FtGauge from "./components/FtGauge.vue";
import FtBoxImg from "./components/FtBoxImg.vue";
import FtLineBox from "./components/FtLineBoxy.vue";
const { mapState } = createNamespacedHelpers("plcS7");
export default {
  data() {
    return {
     
    };
  },
  created() {},
  computed: {
    ...mapState(["staPlcData", "staPlcNum", "staEchartData"]),
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
    FtBoxImg,
    FtLineBox
  },
};
</script>

<style lang="scss" scoped>
.minBox {
  width: 100%;
  height: 100%;
  // background-color: red;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-around;
  // align-items: center;
  .titleBox {
    height: 14%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
   
  }
  .title{
    font-size: 20px;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .topBox {
    height: 25%;
    width: 100%;
    margin-bottom:1rem ;
 box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
  }
  .midBox {
    height: 25%;
    width: 100%;
    margin-bottom:1rem ;
 box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
  }
  .botBox {
    height: 25%;
    width: 100%;
    margin-bottom:1rem ;
 box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
  }
}
</style>
