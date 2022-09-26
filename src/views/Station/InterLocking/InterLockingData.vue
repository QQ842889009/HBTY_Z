<template>
  <div class="husuo">
    <div class="oneCard" v-for="(station, index) of myData" :key="index">
      <HusuoCard :allData="station" :sid="index" />
    </div>

    <!-- <div class="block">
    <el-slider
      v-model="data.length"
      vertical
      height="200px">
    </el-slider>
  </div> -->
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import HusuoCard from "../../Visual/components/HusuoCard.vue";
export default {
  data() {
    return {
      tableData: {},
    };
  },
  components: {
    HusuoCard,
  },
  created() {
    this.connection();
    console.log("data--", this.myData);
  },
  computed: {
    myData() {
      this.tableData = this.$store.getters.alarmsettings;
      return this.tableData;
    },
  },
  methods: {
    connection() {
      // console.log("99999999-----------------------------");
      //初始化weosocket
      // 定义客户端的认证信息,按需求配置
      // 获取STOMP子协议的客户端对象
      // `http://221.206.242.116:9000/tems/publicTagServer`;
      let socket = new SockJS(
        `http://221.206.242.116:9000/tems/publicTagServer`
      ); //接口地址
      const stompClient = Stomp.over(socket);
      this.stompClient = stompClient;
      stompClient.debug = null;
      //  const useName = window.sessionStorage.getItem("userName");
      let headers = {
        //请求需要携带的一些入参
        username: "useName",
      };
      const _this = this;
      // 向服务器发起websocket连接
      stompClient.connect(
        headers,
        () => {
          stompClient.subscribe(`/topic/getResponse`, (msg) => {
            // console.log(msg);
            this.$store.commit(
              "STATIONAlARMARRAY",
              JSON.parse(msg.body).warningtag
            );
          });
        },
        (err) => {
          console.log("失败");
          console.log(err);
        }
      );
    },
    disconnect() {
      if (this.stompClient) {
        this.stompClient.disconnect();
      }
    }, // 断开连接
  },
  destroyed() {
    this.disconnect();
  },
};
</script>

<style lang="scss" scoped>
.husuo {
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 100%;
}
.oneCard {
  margin-right: 1%;
  margin-left: 3%;
  margin-top: 1%;
  margin-bottom: 1%;
}

/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
</style>