<template>
  <div class="checkbox">
    <!-- <div class="inner active"> -->
    <div :class="[c ? 'inner active' : ' inner']">
      <div class="toggle" @click="BPC"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      ff: true,
    };
  },
  props: {
    c: {
      type: Number,
      default: null,
    },
  },
  // 注册监听
  mounted() {},

  destroyed() {},
  methods: {
    BPC() {
      console.log("ccc");
      this.c = !this.c;
    },
  },
};
</script>

<style  scoped>
/* */
/* 居中显示： */
html,
body,
.checkbox,
.checkbox .inner,
.checkbox .inner .toggle {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 画出外侧椭圆： */
.checkbox {
  width: 10em;
  height: 5em;
  width: 5em;
  height: 0.5em;
  background: linear-gradient(silver, whitesmoke);
  border-radius: 2.5em;
  font-size: 30px;
}
/* 画出内侧椭圆 */
.checkbox .inner {
  width: 8em;
  height: 0.6em;
  width: 3.2em;
  height: 0.3em;
  background: linear-gradient(dimgray, silver);
  border-radius: 2em;
  box-shadow: inset 0 0 1.5em rgba(0, 0, 0, 0.5);
}
/* 画出圆形按钮： */
.checkbox .inner .toggle {
  width: 3.5em;
  height: 3.5em;
  width: 1.2em;
  height: 1.2em;
  background: linear-gradient(to top, silver, whitesmoke);
  border-radius: 50%;
  box-shadow: 0 0.4em 0.6em rgba(0, 0, 0, 0.2);
  position: relative;
  left: -33%;
}
/* 为圆形按钮增加立体效果： */
.checkbox .inner .toggle::before {
  content: "停";
  position: absolute;
  /* top: 50%; */
  vertical-align: middle;
  width: 80%;
  height: 80%;
  background: linear-gradient(silver, whitesmoke);
  border-radius: 50%;
  text-align: center;
  line-height: calc(2em * 0.8);
  font-family: sans-serif;
  color: gray;
  font-size: 20px;
  font-weight: 900;
}
.checkbox .inner .toggle {
  transition: 0.5s;
}
/* 设置 active 时控件的样式: */
.checkbox .inner.active {
  background: linear-gradient(green, limegreen);
}
.active {
  background: linear-gradient(green, limegreen);
}
.checkbox .inner.active .toggle {
  left: 30%;
}
.checkbox .inner.active .toggle::before {
  content: "启";
  font-size: 17px;
  font-weight: 900;

  color: limegreen;
}
</style>
