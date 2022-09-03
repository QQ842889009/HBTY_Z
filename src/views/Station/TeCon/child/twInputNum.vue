<template>
  <div>
    <div class="header">
      <input
        type="number"
        :value="count1"
        @keyup.enter="submit1($event)"
        @focus="getFocus($event)"
        @blur="lostFocus"
        @input="limitValue($event)"
      />
      <!--       <input type="text" v-model.lazy="setValue"  @keyup.enter="submit($event)" onfocus="this.select()" @input = "limitValue($event)">-->

      <!--  el-divider分割线     -->
      <p>~</p>
      <input
        type="number"
        :value="count2"
        @keyup.enter="submit2($event)"
        @focus="getFocus($event)"
        @blur="lostFocus"
        @input="limitValue($event)"
      />
      <!--       <input type="text" v-model.lazy="setValue"  @keyup.enter="submit($event)" onfocus="this.select()" @input = "limitValue($event)">-->
      <pre>℃</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "twInputNum",
  data() {
    return {
      setConValue: "0", //用于记录点击前的状态
      bind: true, //用于获取与失去焦点是否解除绑定

      minValue: -100,
      maxValue: 100,
    };
  },
  computed: {
    count1() {
      if (this.bind) {
        this.setConValue1 = this.parameter.getValue1;
        return this.parameter.getValue1;
      } else {
        return this.setConValue1;
      }
    },
    count2() {
      if (this.bind) {
        this.setConValue2 = this.parameter.getValue2;
        return this.parameter.getValue2;
      } else {
        return this.setConValue2;
      }
    },
  },
  props: {
    parameter: {
      type: Object,
      default: function () {
        return {
          eventName: "", //发送事件的名称
          setAttribute1: "", //需要传递，改的属性，例如BP1SP
          setAttribute2: "", //需要传递，改的属性，例如BP1SP
          getValue1: "", //父组件过来的显示值，子组件不能更改
          getValue2: "", //父组件过来的显示值，子组件不能更改
          SidValue: 1,
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
        event.target.value = event.target.value.replace(/[^\d]/g, "");
      }
    },
    //失去焦点，绑定父组件的值
    lostFocus() {
      this.bind = true;
    },
    //获得焦点，打断计算属性中父组件的值
    getFocus(event) {
      event.target.select();
      this.bind = false;
    },
    //发送事件
    submit1(event) {
      let setValue = event.target.value.toString();
      let setAttribute = this.parameter.setAttribute1;
      let msg = {
        userName: "main1",
        sid: this.parameter.SidValue,
        plcTag: setAttribute,
        tagValue: setValue,
        sdate: this.$moment().format("YYYY-MM-DD"),
        stime: this.$moment().format("hh-mm-ss"),
      };

      if (this.$wsSend) {
        this.$wsSend(this.parameter.eventName, msg);
        //console.log("faong");
      }

      //点击回车后失去焦点
      event.target.blur();
    },
    //发送事件
    submit2(event) {
      // //console.log("asdda");
      let setValue = event.target.value;
      let setAttribute = this.parameter.setAttribute2;
      let msg = {
        userName: "main1",
        sid: this.parameter.SidValue,
        plcTag: setAttribute,
        tagValue: setValue,
        sdate: this.$moment().format("YYYY-MM-DD"),
        stime: this.$moment().format("hh-mm-ss"),
      };
      if (this.$wsSend) {
        this.$wsSend(this.parameter.eventName, msg);
        //console.log("faong");
      }
      //点击回车后失去焦点
      event.target.blur();
    },
  },
};
</script>

<style lang="scss" scoped>
/*  #radiox{*/

/*    width: 15%;*/
/*    height: 50%;*/
/*    padding-top: 20px;*/
/*    display: flex;*/

/*  }*/
/*div{*/
/*  margin-left: 50px;*/
/*}*/
/*  p{*/
/*    font-size: 12px;*/
/*    color: white;*/
/*  }*/
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
  width: 30px;
  height: 1.6rem;
  font-size: 1.5rem;
}

/*  */
.header {
  width: 130px;
  /*height: 1.11rem;*/
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;
}
</style>
