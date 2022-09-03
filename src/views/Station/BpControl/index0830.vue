<template>
  <div class="a1">
    <div class="space1">
      <div class="title1">
        <div
          class="t-t1"
          v-bind:style="{
            backgroundImage: 'url(' + bg2 + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }"
        >
          穆棱福通热
        </div>
      </div>
      <div class="central-content1">
        <div class="card-centent1">
          <div>
            <el-row :gutter="12">
              <el-col :span="8" v-for="item in staPlcData" :key="item.Sid">
                <div class="container1">
                  <div class="card1">
                    <div class="img-box1">
                      <i class="iconfont icon-louceng1"></i>

                      <span>{{ item.Station }}</span>
                    </div>
                    <div class="card-flex1">
                      <div class="card-flex-item1">
                        <!-- <span class="card-flex-item-1">给定：</span> -->
                        <el-switch
                          v-model="item.BP21C"
                          active-color="#13ce66"
                          inactive-color="#ff4949"
                          active-text="启动"
                          inactive-text="停止"
                          @change="changeStatus()"
                        >
                        </el-switch>
                        <!-- {{ item.BP21C }} -->
                        <BpC :c="item.BP21C"> </BpC>
                      </div>
                      <div class="card-flex-item1">
                        <span class="card-flex-item-SP1">给定(Hz)：</span>
                        <span class="card-flex-item-SP2">
                          <el-slider
                            :min="1"
                            :max="50"
                            v-model="item.BP21SP"
                            size="mini"
                            show-input
                          >
                          </el-slider
                        ></span>
                      </div>
                      <div class="card-flex-item1">
                        <span class="card-flex-item-1">反馈(Hz)：</span>
                      </div>
                      <div class="card-flex-item">
                        <span class="card-flex-item-A">状态：</span>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <div class="f1">
      <!-- <span>热源个数：<span class="as">1</span> </span> -->
      <span>换热站个数：<span class="as">31</span> </span>
      <!-- <span>总供热面积（W㎡）：<span class="as">123.4</span></span> -->
    </div>
    <div
      class="t1"
      v-bind:style="{
        backgroundImage: 'url(' + bg1 + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }"
    ></div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar";
import BpC from "./BpC";
import { mapState } from "vuex";
import _ from "lodash";
export default {
  data() {
    return {
      bb: 23,
      bp: {
        bp_c: null,
        bp_sp: null,
        bp_fb: 33,
      },

      space_z: 123.56,
      bg1: require("assets/img/logo/footer.png"), //总背景图
      bg2: require("assets/img/logo/T1.gif"), //总背景图
      stationData: [],
    };
  },
  methods: {
    uutt() {
      this.uu = !this.uu;
      console.log("uu", this.uu);
    },
    updateData(v) {
      console.log("面积系数修改", v);
    },
    changeStatus() {},
    handleChange() {
      //变频的给定
    },
  },
  mounted() {
    // this.stationData = _.cloneDeep(this.staPlcData);
  },
  components: {
    ProgressBar,
    BpC,
  },
  computed: {
    ...mapState("plcS7", ["staPlcData", "staPlcNum"]),
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .el-form-item {
    margin-bottom: 2px;
  }
  .el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
  }

  .el-form-item__content {
    margin-left: 200px;
  }
  .el-switch__core {
    width: 35px !important;
    height: 1rem;
  }

  .el-switch__core::after {
    width: 14px;
    height: 14px;
    margin-top: -1px;
    margin-bottom: 2px;
  }
  .el-slider {
    // height: 20px !important;
    // line-height: 20px;
  }
}
.a1 {
  width: 100%;
  height: 100%;
  //background-color: blue;
}
.f1 {
  position: fixed;
  bottom: 25px;
  bottom: 0px;
  color: #000;
  width: 96.9%;
  width: 100%;
  height: 55px;
  text-align: center;
  line-height: 55px;
  // background-color: peru;
  z-index: 9999990;
  background-color: rgba(0, 0, 0, 0.7);
  background-color: rgb(212, 199, 185);
  .as {
    font-size: 30px;
    margin-right: 60px;
  }
}
.t1 {
  width: 250px;
  height: 145px;
  left: 120px;
  //background-color: pink;
  z-index: 9999999;
  position: fixed;
  bottom: 25px;
}

.space1 {
  // width: 100%;
  height: 100%;

  padding: 0px 300px 0px 300px;

  background-color: #fff;
  border-radius: 10px;
  .title1 {
    // position: relative;
    text-align: center;
    font-size: 40px;
    color: #000;
    // position: fixed;
    // top: 90px;
    // z-index: 99999;
    .t-t1 {
      width: 550px;
      height: 50px;
      line-height: 50px;
      //width: 100%;
      font-size: 25px;
      text-align: center;
      //background-color: purple;
      margin-left: 30%;
      color: blue;
      // position: absolute;
      // top: 0;
      // left: 50%;
      // transform: translateX(-50%);
    }
  }

  .central-content1 {
    position: relative;
    //background-color: gold;
    width: 100%;
    // height: 100%;
    height: 890px;
    // display: flex;
    // flex-wrap: wrap;
    // height: 252px;
    // overflow: auto;
    //background-color: rgb(189, 21, 21);
    overflow-y: scroll; /*y轴滚动*/
  }
  @keyframes sa {
    0% {
      background-color: rgb(228, 75, 28);
    }
    50% {
      background-color: rgb(230, 163, 20);
    }
    100% {
      background-color: rgb(228, 75, 28);
    }
  }

  .container1 {
    position: relative;
    color: #000;
    // background-color: red;
    margin: 5px 0px;
    .card1 {
      position: relative;
      //border-radius: 10px;
      border-radius: 10px 10px 10px 10px;
      height: 252px;
      margin: 0px 0px 15px 0px;
      background: #fff;
      background-color: #cdd5f5;
      //background-color: red;
      //box-shadow: 10px 10px 25px #888888;
      //  border-radius: 10px;
      overflow: hidden;
      color: #000;
      z-index: 88;
      .card-flex1 {
        color: #000;
        z-index: 188;
        position: absolute;
        top: 60px;
        height: 185px;
        width: 100%;
        // background-color: peru;
        display: flex; //弹性盒模型
        flex-direction: column; //设置元素为垂直显示
        // justify-content: center;
        align-items: center;
        .card-flex-item1 {
          width: 90%;
          display: flex;
          flex: 1;
          margin: 2px;
          padding: 0px 10px 0 8px;
          // background-color: gold;
          // border: 1px rebeccapurple solid;
          // border-bottomz: 1px rebeccapurple solid;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgb(216, 231, 231);
          .card-flex-item-SP1 {
            flex: 0.5;
            //  background-color: red;
          }
          .card-flex-item-SP2 {
            flex: 0.9;
            //  background-color: red;
          }
          //  background-color: rgb(212, 191, 71);
          .card-flex-item-A {
            flex: 0.5;
            //  background-color: red;
          }
          .card-flex-item-B {
            flex: 1.5;
            display: flex;
            align-items: center;

            // background-color: greenyellow;
            .card-flex-item-B-S {
              flex: 1;

              // height: 50px;
              .tit {
                display: inline-flex;
                align-items: center;
              }
              //background-color: palegreen;
              .s {
                display: inline-flex;
                width: 20px;
                height: 20px;
                margin: 0px 0px 0px 2px;

                background-color: rgb(22, 201, 22);
                box-shadow: 0 0 2px rgb(221, 216, 189),
                  0 0 3px rgb(177, 173, 168), 0 0 5px rgb(22, 21, 21);
                border-radius: 50%;
              }
              .a {
                display: inline-flex;
                width: 20px;
                height: 20px;
                margin: 0px 0px 0px 2px;

                background-color: rgb(197, 197, 186);
                border-radius: 50%;
              }
              .ss {
                display: inline-flex;
                width: 20px;
                height: 20px;
                margin: 0px 0px 0px 5px;
                animation: sa 1s infinite;
                background-color: red;
                box-shadow: 0 0 2px rgb(202, 178, 41), 0 0 3px rgb(189, 105, 8),
                  0 0 5px rgb(230, 38, 38);

                border-radius: 50%;
              }
              //text-align: center;
            }
            .card-flex-item-B-S {
              flex: 1;
              // text-align: center;
            }
            .card-flex-item-B-RM {
              flex: 1;
              //text-align: center;
            }
            //  background-color: red;
          }
          .card-flex-item-1 {
            flex: 1;
            //  background-color: red;
          }
          .card-flex-item-2 {
            flex: 1;
            //background-color: blueviolet;
            // text-align: right;
            // padding: 0px 0px 0px 0px;
            //background-color: brown;
          }
          .card-flex-item-3 {
            // background-color: blue;
            flex: 1;
            text-align: center;
            // text-align: right;
            // padding: 0px 0px 0px 0px;
            //background-color: brown;
          }
        }
      }
    }
  }

  .card1::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #9bdc28;
    background: blue;

    clip-path: circle(40px at 94% 10%);
    transition: 0.5s ease-in-out;
  }

  .card1:hover::before {
    clip-path: circle(300px at 99% -15%);
  }
  /* 给图片盒子一个位置  y轴 */
  .container1 .card1 .img-box {
    position: absolute;
    top: 10%;
    right: 35%;
    transform: translateY(-50%);
    //background-color: palevioletred;
    height: 60px;
    width: 100%;
    transition: 0.5s;
    z-index: 88;
    // background-color: gold;
  }
  .container1 .card1 .img-box i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    width: 90px;
    font-size: 20px;
    // background-color: #fff;
    color: blue;
    z-index: 88;
  }
  .container1 .card1 .img-box span {
    position: absolute;
    top: 55%;
    left: 56%;
    transform: translate(-50%, -50%) rotate(0deg);
    width: 70px;
    font-size: 15px;
    color: blue;
    z-index: 88;
    font-weight: 600;
  }

  .aaa {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 190px;
    //height: 135px;
    text-align: center;
    text-align: left;
    transition: 1s;
    z-index: 88;
    color: #000;
    color: #fff;
    background-color: paleturquoise;
    display: flex; //弹性盒模型
    flex-direction: column;
    // align-items: center;

    //上下居中
    //     flex-direction: column;

    .y {
      padding: 10px;
    }
    .btn {
      position: relative;
      right: -180px;
    }
    .content-box-item {
      //padding: 0px 0px 0px 9px;
      // justify-content: center;
      // background-color: palevioletred;
      border: 2px rgb(21, 212, 75) solid;
      flex: auto;
      margin: 15px 5px;
      align-items: center !important;
      justify-content: space-between !important;
    }
  }

  .container1 .card1:hover .content-box {
    height: 190px;
  }

  .container1 .card1 .content-box .size,
  .container1 .card1 .content-box .color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
  }
}
</style>