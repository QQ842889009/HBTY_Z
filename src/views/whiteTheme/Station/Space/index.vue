<template>
  <div class="a">
    <!-- <div class="space">
      <div class="title">
        <div
          class="t-t"
          v-bind:style="{
            backgroundImage: 'url(' + bg2 + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }"
        >
          XXX热力公司供热面积预览
        </div>
      </div>
      <div class="central-content">
        <div class="card-centent">
          <div :class="[2 == 0 ? 'half' : 'halfA']">
            <el-row :gutter="0">
              <el-col :span="6" v-for="item in stations" :key="item.Sid">
                <div class="container">
                  <div class="card">
                    <div class="img-box">
                      <i class="iconfont icon-mianji2"></i>
                      <span>{{ item.Station }}</span>
                    </div>
                    <div class="content-box">
                      <div class="y">
                        <el-form label-width="50px">
                          <el-form-item label="面积:">
                            <el-input
                              v-model="item.Space"
                              size="mini"
                            ></el-input>
                          </el-form-item>
                          <el-form-item label="系数:">
                            <el-input
                              v-model="item.Space"
                              size="mini"
                            ></el-input>
                          </el-form-item>

                          <el-button
                            type="primary"
                            size="mini"
                            class="btn"
                            @click="updateData(item)"
                            >修改</el-button
                          >
                        </el-form>
                      </div>
                      <div class="n"></div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="f">
      <span>热源个数：<span class="as">1</span> </span>
      <span>换热站个数：<span class="as">123</span> </span>
      <span>总供热面积（W㎡）：<span class="as">123.4</span></span>
    </div> -->
    <!-- <div
      class="t"
      v-bind:style="{
        backgroundImage: 'url(' + bg1 + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }"
    ></div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      space_z: 123.56,
      bg1: require("assets/img/logo/footer.png"), //总背景图
      bg2: require("assets/img/logo/T1.gif"), //总背景图
    };
  },
  methods: {
    updateData(v) {
      console.log("面积系数修改", v);
    },
  },
  computed: {
    ...mapState("realtime", ["stations", "realtimeInfos"]),
  },
};
</script>

<style lang="scss" scoped>
.a {
  width: 100%;
  height: 100%;
  background-color: blue;
}
.f {
  position: fixed;
  bottom: 25px;
  color: #000;
  width: 96.9%;
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
.t {
  width: 250px;
  height: 145px;
  left: 120px;
  //background-color: pink;
  z-index: 9999999;
  position: fixed;
  bottom: 25px;
}

.space {
  // width: 100%;
  // height: 100%;

  // padding: 0px 300px 0px 300px;

  background-color: #fff;
  background-color: red;
  border-radius: 10px;
  .title {
    // position: relative;
    text-align: center;
    font-size: 40px;
    color: #000;
    // position: fixed;
    // top: 90px;
    // z-index: 99999;
    .t-t {
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

  .central-content {
    position: relative;
    //background-color: gold;
    width: 100%;
    //height: 870px;
    height: 100%;
    // background-color: rgb(189, 21, 21);
    overflow-y: scroll; /*y轴滚动*/
    .centent:hover {
      background-color: #cdd5f5;
    }
  }
  ::v-deep {
    //一级菜单

    //一级菜单效果
  }
  ::v-deep {
    .el-form-item {
      margin-bottom: 2px;
    }
    .el-form-item__content {
      line-height: 40px;
      position: relative;
      font-size: 14px;
    }
    .el-form-item {
      // background-color: #fff;
    }
    // .el-form-item__label {
    //   color: #000;
    // }
    // .container .card:hover {
    //   color: #fff;
    //   // color: red;
    // }
    .el-form-item__content {
      margin-left: 200px;
    }
  }

  .container {
    position: relative;
    color: #000;
    // margin: 0.5rem 0.2rem 0.5rem 0.5rem;
    // padding: 0.5rem;
    // cursor: pointer;
  }

  .container .card {
    position: relative;
    // width: 320px;
    height: 147px;
    margin: 5px;
    background: #232323;
    // background: rgb(27, 166, 168);
    background: #fff;
    background-color: #cdd5f5;
    box-shadow: 10px 10px 25px #888888;
    border-radius: 10px;
    overflow: hidden;
    color: #000;
    background: #232323;
  }

  .container .card::before {
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

  .container .card:hover::before {
    clip-path: circle(200px at 99% -15%);
  }
  /* 给图片盒子一个位置  y轴 */
  .container .card .img-box {
    position: absolute;
    top: 10%;
    right: 35%;
    transform: translateY(-50%);
    z-index: 1000;
    height: 100px;
    width: 100%;
    transition: 0.5s;
    //  background-color: #fff;
    /* background-color: #fff; */
  }
  /* 当鼠标放上去的时候-------移动左上图标 */
  .container .card:hover .img-box {
    // top: 0%;
    // transform: translateY(0);
  }

  // .container .card .img-box img {
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%) rotate(0deg);
  //   width: 70px;
  // }
  .container .card .img-box i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    width: 70px;
    font-size: 20px;
    color: blue;
  }
  .container .card .img-box span {
    position: absolute;
    top: 55%;
    left: 58%;
    transform: translate(-50%, -50%) rotate(0deg);
    width: 70px;
    font-size: 15px;
    color: blue;
  }

  .container .card .content-box {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 90px;
    //height: 135px;
    text-align: center;
    text-align: left;
    transition: 1s;
    z-index: 99999;
    //background-color: palevioletred;
    // background-color: palevioletred;
    .y {
      padding: 10px;
    }
    .btn {
      position: relative;
      right: -230px;
    }
  }

  .container .card:hover .content-box {
    height: 135px;
  }
  .container .card:hover .img-box {
    // color: red;
  }
  .container .card:hover .img-box span {
    // color: rgb(230, 19, 19);
    // color: red;
  }
  .container .card:hover {
    // color: #fff;
    // color: red;
  }

  .container .card .content-box h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
  }

  .container .card .content-box .size,
  .container .card .content-box .color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
  }

  .container .card:hover .content-box .size {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
  }

  .container .card:hover .content-box .color {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.6s;
  }

  .container .card .content-box .size h3,
  .container .card .content-box .color h3 {
    color: #fff;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
  }

  .container .card .content-box .size span {
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    display: inline-block;
    color: #111;
    background: #fff;
    margin: 0 5px;
    color: #111;
    border-radius: 4px;
    cursor: pointer;
  }

  .container .card .content-box .size span:hover {
    background: #9bdc28;
  }

  .container .card .content-box .color span {
    width: 20px;
    height: 20px;
    background: #ff0;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  }

  .container .card .content-box .color span:nth-child(2) {
    background: #9bdc28;
  }

  .container .card .content-box .color span:nth-child(3) {
    background: #03a9f4;
  }

  .container .card .content-box .color span:nth-child(4) {
    background: #e91e63;
  }

  .container .card .content-box a {
    display: inline-block;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
    font-weight: 600;
    color: #111;

    opacity: 0;
    transform: translateY(50px);
    transition: 0.5s;
  }

  .container .card:hover .content-box a {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.75s;
  }
}
</style>