<template>
  <div class="space">
    <div class="title">穆棱福通热网总供热面积（W㎡）{{ space_z }}</div>
    <div class="central-content">
      <div class="card-centent">
        <div :class="[2 == 0 ? 'half' : 'halfA']">
          <el-row>
            <el-col :span="4" v-for="item in stations" :key="item.Sid"
              ><div class="centent">
                <div class="centent-item">
                  <span class="centent-item-span1 sss">
                    {{ item.Station }}</span
                  >
                  <span class="centent-item-span2">
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="设置"
                      placement="top"
                    >
                      <i class="el-icon-setting" @click="changeInput(item)"></i>
                    </el-tooltip>
                  </span>
                </div>
                <div class="centent-item">
                  <span class="centent-item-span1"
                    >面积： {{ item.Space }}（W㎡）</span
                  >
                  <span class="centent-item-span2"> </span>
                </div>
                <div class="centent-item">
                  <span class="centent-item-span1">
                    系数： {{ item.Space }}</span
                  >
                  <span class="centent-item-span2"> </span>
                </div></div
            ></el-col>
          </el-row>

          <SysDlialogSP ref="dialog" :title="title" :rowData="rowData">
          </SysDlialogSP>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SysDlialogSP from "./SysDlialogSP"; ////
export default {
  data() {
    return {
      space_z: 123.56,
      rowData: {},
      title: null,
    };
  },
  computed: {
    ...mapState("realtime", ["stations", "realtimeInfos"]),
  },
  methods: {
    changeInput(v) {
      this.title = "面积/系数更改";
      this.rowData = { ...v };

      this.$refs.dialog.dialogVisible = true;
    },
  },
  components: {
    SysDlialogSP,
  },
};
</script>

<style lang="scss" scoped>
.space {
  width: 100%;
  height: 100%;
  //padding: 50px;
  // width: 500px;
  // height: 500px;
  padding: 10px;

  background-color: rgb(213, 203, 221);
  .title {
    text-align: center;
    font-size: 30px;
  }
  .central-content {
    background-color: #fff;
    width: 100%;
    height: 850px;
    // background-color: gold;
    overflow-y: scroll; /*y轴滚动*/
    .centent:hover {
      background-color: #cdd5f5;
    }
    .centent {
      margin: 0.5rem 0.2rem 0.2rem 0.5rem;
      padding: 0.5rem;
      cursor: pointer;
      border-radius: 4px;
      background-color: #f5f7fd;
      height: 8rem;
      box-shadow: none;
      background-color: #eceef7;
      display: flex; //弹性盒模型
      flex-direction: column; //设置元素为垂直显示
      color: #000;
      box-shadow: 10px 10px 25px #888888;
      // box-shadow: -6px -6px 20px rgba(255, 255, 255, 1),
      //6px 6px 20px rgba(0, 0, 0, 0.1);
      .card-centent .centent .centent-item {
        display: flex;
        flex: auto;
        margin: 0px;
        align-items: center;
        justify-content: space-between;
      }
      .centent-item {
        //background-color: palegoldenrod;
        display: flex;
        flex: auto; //父设置好 后子这样设置就行了
        margin: 2px;
        align-items: center;
        justify-content: space-between;
        .centent-item-span1 {
          flex: 1.2;
          //background-color: red;
        }
        .sss {
          text-align: right;
          font-size: 19px;
          font-weight: 500;
        }
        .centent-item-span2 {
          flex: 0.8;
          text-align: right;
          .el-icon-setting {
            color: rgb(32, 84, 241);
          }
          .el-icon-setting:hover {
            transform-origin: bottom center;
            transform: scale(1.1);
            color: rgb(199, 167, 23);
          }
          .el-icon-position {
            color: rgb(32, 84, 241);
          }
          .el-icon-position:hover {
            transform-origin: bottom center;
            transform: scale(1.1);
            color: rgb(199, 167, 23);
          }
        }
      }
    }
    //padding: 10px;
  }
}
</style>