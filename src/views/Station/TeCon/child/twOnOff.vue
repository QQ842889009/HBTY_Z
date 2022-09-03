<template>
  <div class="control">
    <div>
      <el-switch
        :value="count"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-value="1"
        inactive-value="0"
        :active-text="parameter.onText"
        :inactive-text="parameter.offText"
        @change="change($event)"
      >
      </el-switch>
    </div>
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
  computed: {
    count() {
      if (this.bind) {
        this.setConValue = this.parameter.getConValue.toString();
        return this.parameter.getConValue.toString();
      } else {
        return this.setConValue;
      }
    },
  },
  props: {
    parameter: {
      type: Object,
      default: function () {
        return {
          onText: "自",
          offText: "手",
          setConAttribute: "MAFV1", //设置的控制的属性BP1C或者BP2C
          getConValue: 1,
          eventName: "??", //发送事件的名称
          SidValue: "??", //需要传递的是更改的那个站的站号，例如03
          sentName: "",
        };
      },
    },
  },
  methods: {
    change(event) {
      this.bind = false;
      //console.log(event + "------------------");
      this.$confirm("是否修改？")
        .then(() => {
          let setValue = event.toString();
          let setAttribute = this.parameter.setConAttribute;
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
                  this.parameter.eventName,
                  {},
                  JSON.stringify(msg)
                );
                //console.log(JSON.stringify(msg));
                //console.log(this.parameter.eventName);
              } else {
                //console.log("水泵控制失败");
              }
              break;
            case true:
              if (this.$wsSend) {
                this.$wsSend(this.parameter.eventName, msg);
                //console.log("faong");
                //console.log(this.parameter.eventName);
                //console.log(msg);
              }

              break;
          }

          this.bind = true;
        })
        .catch(() => {
          this.bind = true;
        });
    },
  },
};
</script>

<style scoped>
.control {
  width: 100px;
  height: 30px;

  border: 2px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;
}
</style>
