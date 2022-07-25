
/** 户阀卡片*/
<template>
  <div class="card">
    <div class="card-box-container">
      <el-row :gutter="10">
        <el-col :span="3">
          <el-card class="box-card">
            <span class="t"></span>
            <span class="title">热力站列表</span>
            <InputSearchStation
              :wide="wide"
              :data="options"
              @change="change"
              :findName="findName"
              :placeholder="placeholder"
              :prefixIcon="prefixIcon"
              :size="size"
              :clearable="clearable"
            ></InputSearchStation>
            <div class="grid-content bg-purple one">
              <div
                class="listCss"
                v-for="(item, index) in optionsShow"
                :key="index"
                :class="{ activeCss: activeVar == index }"
                @click="activeFunyi(item.Station, index)"
              >
                <!-- {{ item.Station }} -->
                {{ item.Station }}
              </div>
            </div></el-card
          >
        </el-col>
        <el-col :span="5">
          <el-card class="box-card">
            <span class="t"></span>
            <span class="title">单元列表</span>
            <div class="grid-content bg-purple">
              <div
                class="listCss"
                v-for="(item2, index) in optionc"
                :key="item2.label"
              >
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
          </el-card>
        </el-col>
        <el-col :span="16">
          <el-card class="box-card">
            <span class="t"></span>
            <span class="title">用户列表</span>
            <div class="grid-content bg-purple">
              <!-- <div class="yhlb">暂无数据</div> -->
              <DoorCardTwo
                :tableData="ShowData"
                :startAndEndDateAndTime="startAndEndDateAndTime"
              ></DoorCardTwo>
              pppp {{ doorque }}
              <button @click="tt">tt</button>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="ab"></div>
    <div class="card-line">
      <!-- <DateTimePicker
        class="picker"
        @EmitDateTimePicker="receiveDateTimePicker"
      ></DateTimePicker> -->
      <!-- <EchartLine :getData="doorque" :title_name="echartTieleName" /> -->

      <!-- <el-card class="box-card"> 我是曲线查询占位</el-card> -->
    </div>
  </div>
</template>

<script>
import DateTimePicker from "components/common/DateTimePicker"; //选择日期时间的模板
//import EchartLine from "../Visual/components/EchartLine.vue";
import InputSearchStation from "components/common/InputSearchStation"; //输入关键词查找模板
import DoorCardTwo from "./DoorCardTwo";
import dataStaPlan from "assets/js/sjzlData/sjzlDataPlanMeter";
export default {
  data() {
    return {
      //历史数据查询开始
      startAndEndDateAndTime: [], //其实日期时间和结束日期时间
      starttime: null, //开始日期时间
      endtime: null, //结束日期时间
      doorHistoryData: [], //接收户阀历史数据
      doorque: [
        //历史数据给一个初始值
        {
          event_time: "2022-06-23",
          temp: "24",
        },
        {
          event_time: "2022-06-24",
          temp: "10",
        },
      ],
      echartTieleName: "", //传递的标识
      //历史数据查询结束
      //输入搜索用的开始
      wide: "212px", //宽度
      findName: {
        findName1: "Station", //要搜索的关键词
        findName2: "Community", //要搜索的关键词
      },

      placeholder: "请输入热力站名称", //提示
      prefixIcon: "el-icon-search", //前面的图标
      size: "small", //大小
      clearable: true, //是否带清除
      //输入搜索用的开始
      activeVar: 0,
      activeVarER: 0,
      dataStaPlan,
      zfc: ["琥珀小区三期", "一号楼", "一单元"], //二级菜单拆分的字符串
      StationData: [], //数据列表

      ShowData: [], //展示数据

      screeningCondition: "二十五号站",
      optionc: [],
      optionsShow: [],
      options: [
        {
          Station: "二十五号站",
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
          Station: "1#站",
          label: "147",
          children: [
            {
              value: "1#小区/一号楼/一单元",
              label: "11",
            },
            {
              value: "1#小区/一号楼/二单元",
              label: "12",
            },
            {
              value: "1#小区/一号楼/三单元",
              label: "13",
            },
          ],
        },
        {
          Station: "交警大队",
          label: "247",
          children: [
            {
              value: "交警大队小区/一号楼/一单元",
              label: "21",
            },
            {
              value: "交警大队小区/一号楼/二单元",
              label: "22",
            },
            {
              value: "交警大队小区/一号楼/三单元",
              label: "23",
            },
          ],
        },
      ],
    };
  },
  created() {
    this.initDataFun();
    this.optionsShow = this.options;
  },
  mounted() {
    this.forEachFun();
    this.activeFunyi(this.options[0].Station, 0);
    this.activeFuner(this.options[0].children[0], 0);
  },
  computed: {
    //接收室内温度的数据
    // doorque() {
    //   return this.$store.getters.get_doorDataQue;
    // },
  },
  methods: {
    tt() {
      let aa = this.$store.getters.get_doorDataQue;
      console.log("aa", aa);
    },
    change(val) {
      console.log("输入搜索返回的数据", val);
      this.optionsShow = val;
    },
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
    initDataFun() {
      this.StationData = this.dataStaPlan.doorStation(
        this.$store.getters.get_doorDataAndInfo,
        this.options[0].Station
      );
      this.ShowData = this.dataStaPlan.doorStationGG(
        this.StationData,
        this.zfc[0],
        this.zfc[1],
        this.zfc[2]
      );
    },
    //根据一级菜单 生成二级菜单
    forEachFun() {
      this.options.forEach((i) => {
        if (i.Station === this.screeningCondition) {
          this.optionc.push(i);
        }
      });
    },

    activeFuner(v, i) {
      // console.log("二级菜单");
      console.log("二级菜单vvv", v);
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
    //日期时间选择器传递过来的数据
    receiveDateTimePicker(v) {
      this.startAndEndDateAndTime = v;
      this.starttime = v[0];
      this.endtime = v[1];
      console.log("---选择的日期时间", this.startAndEndDateAndTime);
    },
  },
  components: {
    DoorCardTwo,
    InputSearchStation,
    DateTimePicker,
    // EchartLine,
  },
};
</script>
<style lang="scss" scoped>
.yhlb {
  border: 0.2rem solid #5473e8;
  height: 590px;
  text-align: center;
  line-height: 590px;
  color: rgb(141, 130, 130);
  font-size: 20px;
  z-index: 99;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  // background: red;
}
.t {
  background: #23bcca;
  display: inline-block;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  height: 0.6rem;
  width: 0.6rem;
  //margin: 0px 0px 20px 20px;
}
.title {
  margin: 20px 20px 20px 0px;
  // height: 30px;
  //background-color: gold;
  // padding: 0.6rem 2rem 2.2rem 0.8rem;
  font-size: 1.2rem;
  font-weight: 700;
}
.bg-purple {
  margin: 5px 0px 5px 0px;
  overflow-y: scroll; /*y轴滚动*/
  height: 590px;
  scrollbar-color: transparent transparent;
  scrollbar-track-color: transparent;
  -ms-scrollbar-track-color: transparent;
  //background: #d3dce6;
}
.one {
  //background-color: #efeff5;
  height: 560px;
}
.bg-purple-light {
  // background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.card {
  width: 100%;
  height: 100%;
  // background-color: palegreen;
  border-radius: 24px;
}
.card-box-container {
  width: 100%;
  height: 70%;
  // background-color: rgb(209, 184, 184);
  border-radius: 10px;
}
.ab {
  height: 5px;
}
.card-line {
  width: 100%;
  // height: 29%;
  //width: 600px;
  height: 260px;
  padding: 25px;
  //background-color: palegreen;
  padding: 5px;
  .picker {
    position: absolute;
    right: 30px;
  }
}
.card-line:hover {
  background-color: #e2e6f3;
}
.listCss {
  cursor: pointer;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;

  float: left;

  border-color: #5473e8;
}
// 选中时的样式 (继承上方默认样式)
.activeCss {
  background: #f5f7fd;
  background: #dcdfe9;
  color: rgb(0, 0, 0);
  color: #5473e8;
  border-left: 0.4rem solid #5473e8;
}
</style>
