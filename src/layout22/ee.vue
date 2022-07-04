<template>
  <div
    class="menuBox"
    v-bind:style="{
      backgroundImage: 'url(' + bg2 + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
    }"
  >
    <div class="nameBox">
      <p>智慧供热系统</p>
    </div>
    <!-- <div class="mainMenuBox">
      <div
        class="btn"
        @click="cliMenu(item, index)"
        :style="index == choiceMenu ? colorRed : colorBlue"
        v-for="(item, index) in menuArry"
        :key="item.id"
      >
        {{ item.name }}
      </div>
    </div> -->
    <!-- <div class="subMenuBox">
      <div
        class="btnSon"
        @click="cliSubMenu(item, index)"
        :style="index == choiceSubMenu ? colorRed : colorBlue"
        v-for="(item, index) in menuAeeySon"
        :key="item.id"
      >
        {{ item.name }}
      </div>
    </div> -->
    <!-- <div class="timeBox">
      <p>{{ nowTime }}</p>
    </div> -->
  </div>
</template>

<script>
// import { menuArry } from "./menuData.js";
export default {
  data() {
    return {
      bg2: require("assets/img/logo/header1.png"), //头部背景图
      // menuArry,

      proNameChina: "智慧供热系统",
      proNameEglish: "Intelligent heating system",

      bdColor: "1.5px solid #96373a", //定义css中的变量，动态改变
      bgiColor: "linear-gradient(#4d2f38 0%, #842127 100%)", //定义css中的变量，动态改变
      choiceMenu: 1,
      choiceSubMenu: 0,
      nowTime: "",
      //
    };
  },

  // mounted() {
  //   let timer = setInterval(() => {
  //     this.nowTime = this.$dayjs().format("YYYY-MM-DD HH:mm:ss");
  //   }, 800);
  // },
  // computed: {
  //   menuAeeySon() {
  //     //便利出来当前主菜单下的子菜单
  //     return this.menuArry[this.choiceMenu].child;
  //   },

  //   colorRed() {
  //     return {
  //       "--bdColor": "1.5px solid #96373a",
  //       "--bgiColor": "linear-gradient(#4d2f38 0%, #842127 100%)",
  //     };
  //   },
  //   colorBlue() {
  //     return {
  //       "--bdColor": "1.5px solid #3895d1",
  //       "--bgiColor": "linear-gradient(#143657 0%, #5aa0e5 100%)",
  //     };
  //   },
  //   comSubMenu() {
  //     //每次点击主菜单得到相应子菜单的数组,数组长度，数组长度组成的子菜单宽度

  //     return this.menuArrySon[Object.keys(this.menuArrySon)[this.choiceMenu]];
  //   },
  // },

  // methods: {
  //   cliMenu(item, index) {
  //     this.choiceMenu = index; //选择的是菜单数组的第几个元素
  //     this.choiceSubMenu = 0; //保证每次点击主菜单，子菜单默认第一个

  //     this.$emit("choiceMenu", item.path);
  //   },
  //   cliSubMenu(item, index) {
  //     this.choiceSubMenu = index;

  //     this.$emit("choiceMenu", item.path);
  //   },
  // },
};
</script>
<style lang="scss" scoped>
.menuBox {
  width: 100%;
  height: 6.7%;
  aspect-ratio: 1;
  overflow: hidden;

  background-image: url("~@/assets/img/page/topBg2.png");
  // background-repeat: "no-repeat";
  // background-size: "50% 50%";
  // z-index: 0;
  position: relative;
  top: 0;
  display: flex;
  .nameBox {
    width: 31.5%;
    height: 85%;
    // border: 1px solid rgb(241, 237, 237);
    display: flex;
    justify-content: center;
    align-items: flex-end;

    p {
      font-size: 30px;
      color: #fff;
    }
  }
  .mainMenuBox {
    // border: 2px solid rgb(233, 25, 25);
    width: 17%;
    position: relative;
    display: flex;
    // z-index: 1;
    justify-content: space-between;
    align-items: flex-end;

    .btn::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      // background: #58a;
      // border: 1.5px solid #96373a;
      border: var(--bdColor);
      transform: skewX(-45deg);
      background-image: var(--bgiColor);
      // background-image: linear-gradient(#4d2f38 0%, #842127 100%);
    }
    .btn {
      position: relative;
      width: 100px;
      height: 40px;
      font-size: 18px;
      // border: 1px solid #96373a;
      // background-image: linear-gradient(#4d2f38 0%, #842127 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      text-decoration: none;
      z-index: 1;
    }
  }
  .subMenuBox {
    // border: 1px solid rgb(241, 237, 237);

    width: 40.5%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    margin-right: 10px;
    .btnSon::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      // background: #58a;
      // border: 1.5px solid #96373a;
      border: var(--bdColor);
      transform: skewX(-45deg);
      background-image: var(--bgiColor);
      // background-image: linear-gradient(#4d2f38 0%, #842127 100%);
    }
    .btnSon {
      position: relative;
      width: 80px;
      height: 20px;
      font-size: 12px;
      // border: 1px solid #96373a;
      // background-image: linear-gradient(#4d2f38 0%, #842127 100%);
      display: flex;
      justify-content: center;
      align-items: flex-end;
      color: #fff;
      text-decoration: none;
      z-index: 1;
    }
  }
  .timeBox {
    // border: 1px solid rgb(241, 237, 237);
    width: 11%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    p {
      font-size: 21px;
    }
  }
}
</style>
