<template>
  <div style="width: 1920px; height: 1080px">
    <iframe
      ref="unityIframe"
      src="/unity3D/index.html"
      frameborder="0"
      style="width: 100%; height: 100%"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stationInfos: [],
      timer: "",
      stations: [],
      branchInfos: [], //分支信息
      msg: {
        userName: "admin", //localStorage.getItem("userId"),
        sid: this.$route.query.id,
        plcTag: "",
        tagValue: "",
      },
    };
  },
  created() {
    // console.log('-------', this.$store.getters.stationDataAndInfo);
    this.stationInfos = this.$store.getters.stationDataAndInfo;
    this.stations = this.$store.getters.stationInfos;
    this.branchInfos = this.$store.getters["stationBranch/branchInfos"];
    // console.log("---------stationInfos-", this.stationInfos);
    // console.log("-----stations-----", this.stations);
    // console.log('处理后的分支信息',this.dealBranch(2));
  },
  components: {},
  // watch: {
  //     stationInfos: {
  //         handler() {
  //             this.vueSendToUnity();
  //         },
  //         deep: true,
  //     }
  // },
  mounted() {
    // setTimeout(() => {
    //     this.vueSendToUnity("getStationsName",this.stationName);
    // }, 10000);
    window.addEventListener("message", this.unityWatch);
    console.log("router----", this.$route.query.id);
  },
  computed: {
    stationName() {
      return this.getInfos("Station", this.stations);
    },
  },
  methods: {
    //unity发过来的消息处理
    unityWatch(e) {
      // console.log(
      //   "unityWatch方法调用 event=" + e.data.event + " msg=" + e.data.msg
      // );
      let eventName = "";
      switch (e.data.event) {
        case "ReportReady":
          console.log("unity发送消息到vue成功");
          this.vueSendToUnity("getStationsName", this.stationName);
          if (this.$route.query.id == undefined) {
            this.vueSendToUnity("getRouteId", 0);
          } else {
            this.vueSendToUnity("getRouteId", this.$route.query.id);
          }
          break;
        case "stationInfo": //自己定义的事件，代表站的数据,接受的是unity发过来的换热站id
          this.msg.sid = e.data.msg;
          clearInterval(this.timer);
          var index = e.data.msg;
          var msgInfo = this.stationInfos[index];
          // msgInfo = this.stationInfos[index];
          var branchMsg = [];
          branchMsg = this.dealBranch(index);
          // console.log("某个站的信息-=-=-=-", msgInfo);
          setTimeout(() => {
            this.vueSendToUnity("getStationInfos", msgInfo);
            this.vueSendToUnity("getBranchInfo", branchMsg);
          }, 300);
          this.timer = setInterval(() => {
            this.vueSendToUnity("getStationInfos", msgInfo);
            // console.log("某个站的信息-=-=-=-", msgInfo.FV1SP_H);
          }, 5000);
          break;
        //一网阀门
        case "FV1SP_H": //开度高限
          this.msg.plcTag = "FV1SP_H";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCA";
          console.log("unity改变开度高限的值", e.data.msg);
          break;

        case "FV1SP_L": //开度低限
          this.msg.plcTag = "FV1SP_L";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCA";
          console.log("unity改变开度低限的值", e.data.msg);
          break;

        case "FV1SP": //开度给定
          this.msg.plcTag = "FV1SP";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCA";
          console.log("unity改变开度给定的值", e.data.msg);
          break;

        case "TE21SP": //温度设定
          this.msg.plcTag = "TE21SP";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCA";
          console.log("unity改变温度设定的值", e.data.msg);
          break;

        case "MA_FV1": //一网阀门手自动
          this.msg.plcTag = "MA_FV1";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCB";

          console.log("unity改变一网阀门手自动的值", e.data.msg);
          break;

        //1#循环泵
        case "BP21SP": //1#循环泵频率给定
          this.msg.plcTag = "BP21SP";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCA";
          console.log("unity改变1#循环泵频率给定的值", e.data.msg);
          break;

        case "BP21C": //1#循环泵关闭开启
          this.msg.plcTag = "BP21C";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCB";
          console.log("unity改变1#循环泵关闭开启的值", e.data.msg);
          break;

        //潜水泵
        case "LT_LL": //潜水泵液位低低
          this.msg.plcTag = "LT_LL";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCA";
          console.log("unity改变潜水泵液位低低的值", e.data.msg);
          break;

        case "LT_H": //停泵液位
          this.msg.plcTag = "LT_H";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCA";
          console.log("unity改变停泵液位的值", e.data.msg);
          break;

        case "LT_L": //起泵液位
          this.msg.plcTag = "LT_L";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCA";
          console.log("unity改变起泵液位的值", e.data.msg);
          break;

        case "MP2C": //潜水泵关闭开启
          this.msg.plcTag = "MP2C";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCB";
          console.log("unity改变潜水泵关闭开启的值", e.data.msg);
          break;

        case "MA_SBP": //潜水泵手动自动
          this.msg.plcTag = "MA_SBP";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCB";
          console.log("unity改变潜水泵手动自动的值", e.data.msg);
          break;

        //1#补水泵
        case "MP1SP": //1#补水泵频率给定
          this.msg.plcTag = "MP1SP";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCA";
          console.log("unity改变1#补水泵频率给定的值", e.data.msg);
          break;

        case "PT22SP_H": //1#补水泵停泵高限
          this.msg.plcTag = "PT22SP_H";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCA";
          console.log("unity改变1#补水泵停泵高限的值", e.data.msg);
          break;

        case "PT22SP_L": //1#补水泵起泵低限
          this.msg.plcTag = "PT22SP_L";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCA";
          console.log("unity改变1#补水泵起泵低限的值", e.data.msg);
          break;

        case "PT22SP_HH": //压力高高
          this.msg.plcTag = "PT22SP_HH";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCA";
          console.log("unity改变压力高高的值", e.data.msg);
          break;

        case "MP1C": //1#补水泵关闭开启
          this.msg.plcTag = "MP1C";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCB";
          console.log("unity改变1#补水泵关闭开启的值", e.data.msg);
          break;

        case "MA_MP": //1#补水泵手动自动
          this.msg.plcTag = "MA_MP";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCB";
          console.log("unity改变1#补水泵手动自动的值", e.data.msg);
          break;

        //泄压阀
        case "PT22XY_H": //开阀压力
          this.msg.plcTag = "PT22XY_H";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCA";
          console.log("unity改变开阀压力的值", e.data.msg);
          break;

        case "PT22XY_L": //关阀压力
          this.msg.plcTag = "PT22XY_L";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCA";
          console.log("unity改变关阀压力的值", e.data.msg);
          break;

        case "XYVC": //泄压阀关闭开启
          this.msg.plcTag = "XYVC";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCB";
          console.log("unity改变泄压阀关闭开启的值", e.data.msg);
          break;

        case "MA_XYV": //泄压阀手动自动
          this.msg.plcTag = "MA_XYV";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCB";
          console.log("unity改变泄压阀手动自动的值", e.data.msg);
          break;

        //二网阀门
        case "FV2SP": //阀门给定
          this.msg.plcTag = "FV2SP";
          this.msg.tagValue = e.data.msg;
          eventName = "/hbty/fySetupPLCA";
          console.log("unity改变阀门给定的值", e.data.msg);
          break;
      }
      console.log("发送请求的msg",this.msg);
      // console.log("发送请求的event",eventName);
      if (this.$stompClient.connected === true) {
        // console.log("发送数据成化")
        this.$stompClient.send(eventName, {}, JSON.stringify(this.msg));
      }
    },
    vueSendToUnity(unityFunction, msg) {
      this.$refs.unityIframe.contentWindow.sendMsgToUnity(unityFunction, msg);
    },
    getInfos(sta, arr) {
      const newArr = arr.map((item) => {
        return item[sta];
      });

      return newArr;
    },

    dealBranch(staId) {
      var branchMsg = [];
      if (this.branchInfos.length == 0) {
        this.branchInfos = this.$store.getters["stationBranch/branchInfos"];
      }
      var branchinfonId = this.branchInfos[staId];
      //对象的解构，branch为除了id，sid，station，的数据
      let { id, sid, station, ...branch } = branchinfonId;
      // console.log('branch---------', branch);
      //branch是分支的信息
      for (let i in branch) {
        if (branch[i] != null) {
          //如果分支不为null，
          //name为分支的名称，value为分支对应的字段,i[9]是取字符串bra_name_1的最后一位
          let obj = branch[i];
          branchMsg.push(obj);
        }
      }
      branchMsg = branchMsg.reverse();
      return branchMsg;
    },

    // beforeRouteLeave(to, from, next) {
    //   console.log("----切换界面1111");
    //   clearInterval(this.timer);
    //   window.removeEventListener("message", this.unityWatch);
    //   next();
    // }
  },
  beforeDestroy() {
    console.log("----切换界面");
    clearInterval(this.timer);
    window.removeEventListener("message", this.unityWatch);
  },
};
</script>
<style lang="scss" scoped>
</style>

