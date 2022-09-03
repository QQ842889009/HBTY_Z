<template>
  <div class="full">
    <div class="bloke" :style="{ width: teWidth }"></div>
  </div>
</template>

<script>
export default {
  name: "twOnOff",
  data() {
    return {
      setConValue: "0", //用于记录点击前的状态
      bind: true, //用于获取与失去焦点是否解除绑定
    };
  },
  computed: {},
  props: {
    teWidth: {
      type: String,
      default: "20%",
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.full {
  width: 100px;
  height: 30px;
  border: 2px solid rgb(248, 242, 242);
  margin-right: 10px;
  .bloke {
    height: 100%;
    background-color: rgb(15, 241, 27);
  }
}
</style>
