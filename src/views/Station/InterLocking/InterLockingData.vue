<template>
  <div>
    <p>互锁</p>
    <p>{{ data }}</p>
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "stompjs";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.connection();
  },
  computed: {
    data() {
      this.tableData = this.$store.getters.alarmsettings;

      return this.tableData;
    },
  },
  methods: {
    connection() {
      console.log("99999999-----------------------------");
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

<style>
</style>