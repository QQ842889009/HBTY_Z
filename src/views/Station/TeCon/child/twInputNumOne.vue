<template>
  <div>
    <div class="header" :style="{ width: teWidth }">
      <input
        type="number"
        :value="count"
        @keyup.enter="submit($event)"
        @focus="getFocus($event)"
        @blur="lostFocus"
        @input="limitValue($event)"
      />
      <!--       <input type="text" v-model.lazy="setValue"  @keyup.enter="submit($event)" onfocus="this.select()" @input = "limitValue($event)">-->
      <pre>{{ unit }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "twInputNumOne",
  data() {
    return {
      setConValue: "0", //用于记录点击前的状态
      bind: true, //用于获取与失去焦点是否解除绑定

      minValue: -100,
      maxValue: 100,
      sidValue: 1,
    };
  },
  computed: {
    count() {
      if (this.bind) {
        this.setConValue1 = this.parameter.getValue;
        return this.parameter.getValue;
      } else {
        return this.setConValue1;
      }
    },
  },
  props: {
    teWidth: {
      type: String,
      default: "130px",
    },
    unit: {
      type: String,
      default: "℃",
    },
    parameter: {
      type: Object,
      default: function () {
        return {
          SidValue: 1000,
          setAttribute: "", //需要传递，改的属性，例如BP1SP
          eventName: "", //事件名称
          getValue: "", //父组件过来的显示值，子组件不能更改
          sentName: true, //区分是给java为false，还是给node为true
        };
      },
    },
  },
  methods: {
    //保证输入的值再最大值和最小值的范围之内
    limitValue(event) {
      if (event.target.type === "number") {
        if (event.target.value > this.maxValue) {
          event.target.value = this.maxValue;
        }
        if (event.target.value < this.minValue) {
          event.target.value = this.minValue;
        }
        //保证只能输入数字

        // event.target.value = event.target.value.replace(
        //   /^(-?\d+)(\.\d+)?$/g,
        //   ""
        // );
      }
    },
    //失去焦点，绑定父组件的值
    lostFocus() {
      this.bind = true;
    },
    //获得焦点，打断计算属性中父组件的值
    getFocus(event) {
      console.log("获得焦点", event);
      event.target.select();
      this.bind = false;
    },
    //发送事件
    submit(event) {
      let reg = /^(-?\d+)(\.\d+)?$/g;

      if (reg.test(event.target.value)) {
        let setValue = event.target.value;
        let setAttribute = this.parameter.setAttribute;
        let msg = {
          userName: "main1",
          sid: this.parameter.SidValue,
          plcTag: setAttribute,
          tagValue: setValue,
          sdate: this.$moment().format("YYYY-MM-DD"),
          stime: this.$moment().format("hh-mm-ss"),
        };
        switch (this.parameter.sentName) {
          case false:
            if (this.$stompClient.connected === true) {
              this.$stompClient.send(
                this.$store.getters.wtS7EventA,
                {},
                JSON.stringify(msg)
              );
              //console.log(JSON.stringify(msg));
              //console.log(this.$store.getters.wtS7EventA);
            } else {
              //console.log("请求更改站内数据twInputPopNum失败");
            }

            break;
          case true:
            if (this.$wsSend) {
              this.$wsSend(this.parameter.eventName, msg);
              //console.log("faong");
            }

            break;
        }
      }

      //点击回车后失去焦点
      event.target.blur();
    },
    //发送事件
  },
};
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
input {
  -moz-appearance: textfield;
  background: #ffffff;
  border: 2px solid gray;
  border-radius: 5px;
  width: 80px;
  height: 1.6rem;
  font-size: 1.5rem;
  text-align: center;
}

/*  */
.header {
  // width: 130px;
  /*height: 1.11rem;*/
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;
}
</style>
