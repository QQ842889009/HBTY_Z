<template>
  <div>
    <div class="header" :style="{ width: teWidth }">
      <pre>{{ te0Text }}</pre>
      <pre>{{ unit }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo1",
  data() {
    return {};
  },

  computed: {},
  props: {
    te0Text: String,
    teWidth: {
      type: String,
      default: "130px",
    },
    unit: {
      type: String,
      default: "",
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.header {
  // width: 130px;
  // height: 1.11rem;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  :first-child {
    // color: white;
    font-size: 1.3rem;
    border-bottom: 3px solid #409eff;
    margin-left: 0.2rem;
  }
}
</style>
