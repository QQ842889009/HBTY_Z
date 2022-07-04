<template>
  <div class="figure">
    <ee></ee>
    <div class="mainBox">
      <transition
        enter-active-class=" animate__animated animate__fadeInRight"
        leave-active-class=" animate__animated animate__fadeOutLeft"
        mode="out-in"
        :duration="{ enter: 500, leave: 500 }"
        appear
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import ee from "./ee";

export default {
  data() {
    return {};
  },

  computed: {},

  methods: {
    choiceMenu(path) {
      //每次点击按钮将js文件的内的相应的path传到这
      this.$router.push(
        path
        // () => {},
        // () => {}
      );
    },
  },
  components: { ee },
};
</script>
<style lang="scss" scoped>
.figure {
  // background-image: url("~@/assets/img/page/bg02.png") center center no-repeat;
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #061422;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: #fff;
  // z-index: -1;
}

// 背景之前插入背景并且模糊，保证div内的子元素不受影响
.figure::before {
  content: "";
  background-image: url("~@/assets/img/page/bg01.png"),
    url("~@/assets/img/page/bg02.png");
  // background-repeat: no-repeat, no-repeat, repeat-y;
  width: 100%;
  height: 100%;
  position: absolute;
  // z-index: -99;
  background-size: 100%;
  // filter: blur(5px);
}
.plcShowBox {
  width: 100%;
  height: 100%;
}

.mainBox {
  position: relative;
  top: 0.8%;
  width: 100%;
  height: 92.2%;
  // background-color: red;
  display: flex;
  justify-content: center;
  overflow: hidden; //防止动画出现的时候有滚动条出现
}
</style>
