<template>
  <section class="app-main">
    <transition
      enter-active-class=" animate__animated animate__fadeInRight"
      leave-active-class=" animate__animated animate__fadeOutLeft"
      mode="out-in"
      :duration="{ enter: 500, leave: 500 }"
      appear
    >
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: 97.5%;
  //background-color: rgb(218, 28, 28);
  // margin: 5rem;
  padding: 20px 50px 20px 50px;
  // background-color: red;
  display: flex;
  // justify-content: center;
  overflow: hidden; //防止动画出现的

  //background-color: rgb(52, 228, 52);
}

// .app-main::before {
//   content: "";
//   background-image: url("~assets/img/logo/bgz2.png"),
//     url("~assets/img/logo/bgz1.png");

//   width: 100%;
//   height: 97.5%;
//   position: absolute;
//   // z-index: -99;
//   background-size: 100%;
//   background-color: red;
// }
</style>