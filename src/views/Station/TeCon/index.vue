<template>
  <div class="main">
    <div class="tab1">
      <ul class="te0">
        <li>室外温度:</li>
        <li v-for="item in TeConJS.te0X()" :key="item.id">
          <tw-text :te0Text="item"></tw-text>
        </li>
      </ul>
      <ul class="te0">
        <li>一供温度:</li>
        <li v-for="item in TeConJS.te1X()" :key="item.id">
          <tw-input-num :parameter="item"></tw-input-num>
        </li>
      </ul>
      <ul class="te0">
        <li>二供温度:</li>
        <li v-for="item in TeConJS.te2Y()" :key="item.id">
          <tw-input-num-one :parameter="item"></tw-input-num-one>
        </li>
      </ul>
    </div>
    <!-- <div class="tab2">
      <div class="num">
        <ul class="dis sta">
          <li v-for="item in TeConJS.h21Sta()" :key="item.id">
            <tw-text :te0Text="item" teWidth="100px"></tw-text>
          </li>
        </ul>

        <ul class="dis maTop sw">
          <li v-for="item in TeConJS.h22Sw()" :key="item.id">
            <tw-text :te0Text="item.toString()" teWidth="100px"></tw-text>
          </li>
        </ul>

        <ul class="dis maTop py">
          <li v-for="item in TeConJS.h23Py()" :key="item.id">
            <tw-input-num-one
              :parameter="item"
              teWidth="100px"
            ></tw-input-num-one>
          </li>
        </ul>

        <ul class="dis maTop qx">
          <li v-for="item in TeConJS.h24Qx()" :key="item.id">
            <tw-text :te0Text="item.toString()" teWidth="100px"></tw-text>
          </li>
        </ul>

        <ul class="dis maTop xf">
          <li v-for="item in TeConJS.h25Xf()" :key="item.id">
            <tw-on-off :parameter="item"></tw-on-off>
          </li>
        </ul>

        <ul class="dis maTop sd">
          <li v-for="item in TeConJS.h26Sd()" :key="item.id">
            <tw-input-num-one
              :parameter="item"
              teWidth="100px"
            ></tw-input-num-one>
          </li>
        </ul>

        <ul class="dis maTop eg">
          <li v-for="item in TeConJS.h27Eg()" :key="item.id">
            <tw-text :te0Text="item.toString()" teWidth="100px"></tw-text>
          </li>
        </ul>

        <ul class="dis maTop sx">
          <li v-for="item in TeConJS.h28Sx()" :key="item.id">
            <tw-input-num-one
              :parameter="item"
              teWidth="100px"
              unit="%"
            ></tw-input-num-one>
          </li>
        </ul>

        <ul class="dis maTop xx">
          <li v-for="item in TeConJS.h29Xx()" :key="item.id">
            <tw-input-num-one
              :parameter="item"
              teWidth="100px"
              unit="%"
            ></tw-input-num-one>
          </li>
        </ul>

        <ul class="dis maTop sz">
          <li v-for="item in TeConJS.h2aSz()" :key="item.id">
            <tw-on-off :parameter="item"></tw-on-off>
          </li>
        </ul>

        <ul class="dis maTop gd">
          <li v-for="item in TeConJS.h2bgd()" :key="item.id">
            <tw-input-num-one
              :parameter="item"
              teWidth="100px"
              unit="%"
            ></tw-input-num-one>
          </li>
        </ul>

        <ul class="dis maTop fk">
          <li v-for="item in TeConJS.h2cFk()" :key="item.id">
            <tw-text
              :te0Text="item.toString()"
              teWidth="100px"
              unit="%"
            ></tw-text>
          </li>
        </ul>

        <ul class="dis maTop fk">
          <li v-for="item in TeConJS.h2dFk()" :key="item.id">
            <tw-lt :teWidth="item" />
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
import twText from "./child/twText.vue";

import twInputNum from "./child/twInputNum.vue";
import twOnOff from "./child/twOnOff.vue";
import twLt from "./child/twLt.vue";
import twInputNumOne from "./child/twInputNumOne.vue";
import TeConJS from "./child/TeConJs.js";

export default {
  components: { twText, twInputNum, twInputNumOne, twOnOff, twLt },
  name: "App",
  data() {
    return {
      TeConJS,
      tableData: [
        {
          // sname: "室外温度℃",
          TE0_0: "+5℃以上",
          TE0_1: "+5℃~0℃",
          TE0_2: "0℃~-3℃",
          TE0_3: "-3℃~-6℃",
          TE0_4: "-6℃~-9℃",
          TE0_5: "-9℃~-12℃",
          TE0_6: "-15℃~-18℃",
          TE0_7: "-18℃~-21℃",
          TE0_8: "-21℃~-24℃",
          TE0_9: "-24℃~-27℃",
          TE0_A: "-27℃~-30℃",
          TE0_B: "-30℃以下",
        },
        {
          // sname: "一供温度℃",
          TE1_0: 234,
          TE1_1: 21,
          TE1_2: 22,
          TE1_3: 23,
          TE1_4: 24,
          TE1_5: 25,
          TE1_6: 26,
          TE1_7: 27,
          TE1_8: 28,
          TE1_9: 29,
          TE1_A: 30,
          TE1_B: 31,
          TE1_C: 32,
        },
        {
          // sname: "二供温度℃",
          TE2_0: 20,
          TE2_1: 21,
          TE2_2: 22,
          TE2_3: 23,
          TE2_4: 24,
          TE2_5: 25,
          TE2_6: 26,
          TE2_7: 27,
          TE2_8: 28,
          TE2_9: 29,
          TE2_A: 30,
          TE2_B: 31,
        },
      ],
      te1Obj: [
        {
          setAttribute1: "TE1_0",
          setAttribute2: "TE1_1",
          getValue1: 23,
          getValue2: 32,
        },
        {
          setAttribute1: "TE1_1",
          setAttribute2: "TE1_2",
          getValue1: 23,
          getValue2: 32,
        },
        {
          setAttribute1: "TE1_2",
          setAttribute2: "TE1_3",
          getValue1: 23,
          getValue2: 32,
        },
        {
          setAttribute1: "TE1_3",
          setAttribute2: "TE1_4",
          getValue1: 23,
          getValue2: 32,
        },
        {
          setAttribute1: "TE1_4",
          setAttribute2: "TE1_5",
          getValue1: 23,
          getValue2: 32,
        },
        {
          setAttribute1: "TE1_5",
          setAttribute2: "TE1_6",
          getValue1: 23,
          getValue2: 32,
        },
        {
          setAttribute1: "TE1_6",
          setAttribute2: "TE1_7",
          getValue1: 23,
          getValue2: 32,
        },
        {
          setAttribute1: "TE1_7",
          setAttribute2: "TE1_8",
          getValue1: 23,
          getValue2: 32,
        },
        {
          setAttribute1: "TE1_8",
          setAttribute2: "TE1_9",
          getValue1: 23,
          getValue2: 32,
        },
        {
          setAttribute1: "TE1_9",
          setAttribute2: "TE1_A",
          getValue1: 23,
          getValue2: 32,
        },
        {
          setAttribute1: "TE1_A",
          setAttribute2: "TE1_B",
          getValue1: 23,
          getValue2: 32,
        },
        {
          setAttribute1: "TE1_B",
          setAttribute2: "TE1_C",
          getValue1: 23,
          getValue2: 32,
        },
      ],
      te2Obj: [
        {
          setAttribute: "TE2_0",
          getValue: 23,
        },
        {
          setAttribute: "TE2_1",
          getValue: 23,
        },
        {
          setAttribute: "TE2_2",
          getValue: 23,
        },
        {
          setAttribute: "TE2_3",
          getValue: 23,
        },
        {
          setAttribute: "TE2_4",
          getValue: 23,
        },
        {
          setAttribute: "TE2_5",
          getValue: 23,
        },
        {
          setAttribute: "TE2_6",
          getValue: 23,
        },
        {
          setAttribute: "TE2_7",
          getValue: 23,
        },
        {
          setAttribute: "TE2_8",
          getValue: 23,
        },
        {
          setAttribute: "TE2_9",
          getValue: 23,
        },
        {
          setAttribute: "TE2_A",
          getValue: 23,
        },
        {
          setAttribute: "TE2_B",
          getValue: 23,
        },
      ],
      table3: [
        "室外温度:",
        "偏移温度:",
        "曲线温度:",
        "下发控制:",
        "设定温度:",
        "实际温度:",
        "阀门上限:",
        "阀门下限:",
        "手动/自动:",
        "阀门给定:",
        "阀门反馈:",
        "阀门状态:",
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  font-size: 80px;
  width: 1920px;
  height: 1080px;
  background: linear-gradient(
    90deg,
    rgba(100, 102, 100, 0.4) 0,
    rgba(30, 224, 24, 0.4) 50%,
    rgba(100, 102, 100, 0.4)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 1px solid #000;
}

.tab1 {
  margin-top: 20px;
  overflow-y: scroll;
  overflow: hidden;

  float: left;
  width: 95%;
  height: 200px;
  color: rgb(212, 29, 29);
  flex-direction: row-reverse;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);

  ul:nth-child(1) {
    margin-top: 20px;
  }
  .te0 {
    display: flex;
    font-size: 20px;

    justify-content: center;
    color: aliceblue;
    margin-bottom: 10px;

    li:nth-child(1) {
      margin-right: 5px;
      color: aqua;
    }
  }
  .name {
    font-size: 25px;
  }
}
.tab2 {
  width: 95%;
  height: 800px;
  margin-top: 20px;
  overflow-y: scroll;
  overflow: hidden;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
  float: left;
  font-size: 20px;
  color: #fff;
  display: flex;
  // justify-content: ;

  .clom {
    margin-left: 20px;
    margin-top: 100px;
    width: 6%;
    li {
      margin-bottom: 20px;
      border-radius: 5px;
      background: rgba(117, 31, 31, 0.2);
    }
  }

  .num {
    width: 94%;
    height: 80%;
    // background: rgba(117, 31, 31, 0.2);
    margin-top: 60px;
    overflow-y: scroll;
    overflow: auto;
    // 负责让li'横向排列
    .dis {
      display: flex;

      margin-left: 10px;
      // color: black;
    }
    // 负责和第一列对齐
    .maTop {
      margin-top: 15px;
    }
  }
}
</style>
