<template>
  <div>
    <div class="yiji">
      <div
        class="listCss"
        v-for="(item, index) in listArr"
        :key="index"
        :class="{ activeCss: activeVar == index }"
        @click="activeFunyi(item, index)"
      >
        {{ item }}
      </div>
    </div>
    <div class="erji">
      <div class="listCss" v-for="(item2, index) in optionc" :key="item2.label">
        <div
          v-for="(item4, i) in item2.children"
          :key="item4.label"
          @click="activeFuner(item4, i)"
          :class="{ activeCss: activeVarER == i }"
        >
          {{ item4.value }}
        </div>
      </div>
    </div>
    <div class="card-box"></div>
  </div>
</template>

<script>
import dataStaPlan from "assets/js/sjzlData/sjzlDataPlanMeter"; ////
export default {
  data() {
    return {
      activeVar: 0,
      activeVarER: 0,
      dataStaPlan,
      zfc: [], //二级菜单拆分的字符串
      StationData: [], //数据列表

      ShowData: [], //展示数据
      listArr: ["二十五号站", "二十六号站"],
      screeningCondition: "二十五号站",
      optionc: [],
      options: [
        {
          value: "二十五号站",
          label: "47",
          children: [
            {
              value: "琥珀小区三期/一号楼/一单元",
              label: "1",
            },
            {
              value: "琥珀小区三期/一号楼/二单元",
              label: "2",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "3",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "4",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "5",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "6",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "7",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "8",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "9",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "10",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "11",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "12",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "13",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",

              label: "14",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "15",
            },
            {
              value: "琥珀小区三期/一号楼/三单元",
              label: "16",
            },
          ],
        },
        {
          value: "二十六号站",
          label: "147",
          children: [
            {
              value: "琥珀小区r期/一号楼/一单元",
              label: "11",
            },
            {
              value: "琥珀小区r期/一号楼/二单元",
              label: "12",
            },
            {
              value: "琥珀小区r期/一号楼/三单元",
              label: "13",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.forEachFun();
  },
  methods: {
    activeFunyi(item, index) {
      console.log("选择站点", item);
      this.StationData = this.dataStaPlan.doorStation(
        this.$store.getters.get_doorDataAndInfo,
        item
      );

      this.screeningCondition = item;
      this.optionc = [];
      this.forEachFun();

      this.activeVar = index;
    },
    forEachFun() {
      this.options.forEach((i) => {
        if (i.value === this.screeningCondition) {
          this.optionc.push(i);
        }
      });
    },

    activeFuner(v, i) {
      // console.log("二级菜单");
      // console.log("二级菜单vvv", v);
      this.zfc = v.value.split("/");
      console.log("this.zfc", this.zfc);
      this.activeVarER = i;

      this.ShowData = this.dataStaPlan.doorStationGG(
        this.StationData,
        this.zfc[0],
        this.zfc[1],
        this.zfc[2]
      );
    },
  },
};
</script>
<style lang="scss">
.yiji {
  width: 250px;
  height: 600px;
  // background-color: #fff;
  background-color: palegreen;
  color: #000;
  display: inline-block;
}
.erji {
  display: inline-block;
  width: 250px;
  height: 600px;
  // background-color: #fff;
  background-color: palegreen;
  color: #000;
  overflow-y: scroll; /*y轴滚动*/
  scrollbar-color: transparent transparent;
  scrollbar-track-color: transparent;
  -ms-scrollbar-track-color: transparent;
}
.card-box {
  width: 1300px;
  height: 600px;
  display: inline-block;
  background-color: rgb(179, 18, 18);
}
.erji::-webkit-scrollbar {
  width: 0 !important;
}

.listCss {
  cursor: pointer;
  width: 250px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  //border: 1px solid #ccc;
  float: left;
  // margin-right: 10px;
  border-color: #5473e8;
}
// 选中时的样式 (继承上方默认样式)
.activeCss {
  background: #f5f7fd;
  color: rgb(0, 0, 0);
  color: #5473e8;
  border-left: 0.4rem solid #5473e8;
}
</style>
