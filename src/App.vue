<template>
  <div
    class="app"
    id="app"
    v-bind:style="{
      backgroundImage: 'url(' + bg1 + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      zIndex: '98',
    }"
  >
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      num: 30,
      bg1: require("assets/img/logo/bgz1A.png"), //总背景图
      bg2: require("assets/img/logo/header2.png"), //头部背景图
    };
  },
  created() {
    this.askData();
  },
  computed: {},
  mounted() {},
  updated() {},
  methods: {
    askData() {
      console.log("********************");

      this.$http({
        method: "get",
        url: "plcdata/tems/plc/stationInfo", //
      })
        .then((res) => {
          console.log("接受到的数据plcdata/tems/plc/stationInfo", res);

          this.$store.commit("CC", res);
        })
        .catch((erroe) => {
          console.log("发送数据失败");
        });
    },
  },
  components: {},
};
</script>

<style>
@import "assets/css/base.css";

/* .rr {
  width: 150px;
  height: 650px;
  background-color: red;
  position: absolute;
} */
</style>
