<template>
  <div class="app-breadcrumb">
    <!-- <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(v, i) in list" :key="i">
        <span v-if="i == list.length - 1">{{ v.meta.title }}</span>
        <router-link :to="v.path" v-else>{{ v.meta.title }}</router-link>
      </el-breadcrumb-item> -->

    <!-- 右侧下拉框 -->
    <!-- <div class="right-menu">
      <el-dropdown>
        <span class="el-dropdown-link">
          xx<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span style="display: block" @click="goBack">退出</span>
            <span style="display: block" @click="goBack">退出2</span>
            <span style="display: block" @click="goBack">退出</span>
            <span style="display: block" @click="goBack">退出2</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div> -->

    <div class="right-menu">
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="el-icon-user-solid"></i>
          <span class="role">
            {{ name }} <i class="el-icon-arrow-down"></i
          ></span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            ><span @click="updatePasswordHandle()"
              ><i class="el-icon-user-solid"></i>修改密码</span
            ></el-dropdown-item
          >
          <!-- <el-dropdown-item>2</el-dropdown-item>
          <el-dropdown-item>3</el-dropdown-item> -->
          <el-dropdown-item
            ><span @click="goBack">
              <i class="el-icon-user-solid"></i>退出登录</span
            ></el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <update-password
      v-if="updatePasswordVisible"
      ref="updatePassword"
    ></update-password>
    <!-- </el-breadcrumb> -->
  </div>
</template>

<script>
import { logout } from "@/api/http";
import { removeToken } from "@/utils/token";
import UpdatePassword from "./update-password.vue";
export default {
  name: "login",
  data() {
    return {
      list: [],
      role: "管理员",
      name: "",
      updatePasswordVisible: false,
    };
  },
  created() {
    this.getBreadcrumb();
  },
  watch: {
    $route(to, from) {
      this.getBreadcrumb();
    },
  },
  methods: {
    //获取面包屑数据
    getBreadcrumb() {
      this.list = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
    },
    goBack() {
      console.log("退出进入登录界面");
      let that = this;

      that.$http.get("plcdata/tems/user/logout").then((res) => {
        // console.log("退出时返回的什么", res);
        localStorage.removeItem("permissions");
        //跳转到登陆页面
        that.$router.push("/login");
      });

      ////
      // that.$http("user/logout", "GET", null, true, function (resp) {
      //   //退出登陆之后没有必要在storage中保存用户权限，所以删除permissions
      //   localStorage.removeItem("permissions");
      //   //跳转到登陆页面
      //   that.$router.push("/login");
      // });

      // that.$store.dispatch("logout").then((res) => {
      //   //删除Token
      //   removeToken();
      //   that.$router.push("/login");
      // });
    },
    loadUserInfo() {
      console.log("aaaaa");
      let that = this;
      that.$http.get("plcdata/tems/user/loadUserInfo").then((res) => {
        let json = res;
        let name = json.name;
        let photo = json.photo;
        that.name = name;
      });
    },
    updatePasswordHandle: function () {
      this.updatePasswordVisible = true;
      this.$nextTick(() => {
        this.$refs.updatePassword.init();
      });
    },
  },
  mounted() {
    this.loadUserInfo();
  },
  components: { UpdatePassword },
};
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  margin: 20px 10px;
  background-color: gold;
  & > .right-menu {
    float: right;
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  font-size: 15px;
  // line-height: 10px;
  .el-icon-user-solid {
    font-size: 30px;
  }
  .role {
    position: relative;
    top: -5px;
  }
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-menu {
  background-color: #57a4e7 !important; //下拉的背景色
  color: #fff !important;
}
.el-dropdown-menu__item {
  list-style: none;
  line-height: 36px;
  padding: 0 20px;
  margin: 0;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  outline: 0;
}
.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: #4e7bf7;
  color: #66b1ff;
}
.v-modal {
  z-index: 0;
}
// .el-icon-user-solid {
//   font-size: 33px;
//   position: relative;
//   top: -5px;
// }
// .el-icon-arrow-down {
//   position: relative;
//   top: -10px;
// }
</style>

