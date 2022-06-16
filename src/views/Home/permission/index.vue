<template>
  <div class="hello">
    <!-- 二级路由渲染 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "我是贷款审批",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 100%;
  /* //background-color: #fff; */
  /* // background: url(~assets/img/logo/bgc4.png) no-repeat; */
}
</style>
