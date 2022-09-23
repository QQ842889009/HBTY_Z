<template>
  <div :class="[rotate ? 'container' : 'container sign-up-mode']">
    <div class="forms-container">
      <div class="signin-signup">
        <form action="#" class="sign-in-form">
          <h2 class="title">登录</h2>
          <div class="input-field">
            <i class="el-icon-user"></i>
            <input
              type="text"
              v-model="ruleForm.username"
              clearable
              placeholder="用户名"
            />
            <!-- <el-input
              v-model="ruleForm.username"
              placeholder="这里是可以清空的"
            ></el-input> -->
          </div>
          <div class="input-field">
            <i class="el-icon-lock"></i>
            <input
              type="password"
              v-model="ruleForm.password"
              placeholder="密码"
            />
          </div>
          <!-- <button
            type="submit"
            @click="submitForm('ruleForm')"
            class="btn solid"
          >
            立即登录
          </button> -->
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录系统</el-button
          >
          <!-- <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          > -->

          <p class="social-text">通过其他方式</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <!-- <i class="iconfont icon-zu"></i> -->
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin1"></use>
              </svg>
            </a>
            <a href="#" class="social-icon">
              <!-- <i class="iconfont icon-QQ"></i> -->
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-github"></use>
              </svg>
            </a>
            <a href="#" class="social-icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xinlang"></use>
              </svg>
              <!-- <i class="iconfont icon-github"></i> -->
            </a>
            <a href="#" class="social-icon">
              <!-- <i class="iconfont icon-xinlang"></i> -->
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQ1"></use>
              </svg>
            </a>
          </div>
        </form>
        <!-- <form action="#" class="sign-up-form">
          <h2 class="title">注册</h2>
          <div class="input-field">
            <i class="el-icon-user"></i>
            <input type="text" placeholder="用户名" />
          </div>
          <div class="input-field">
            <i class="el-icon-message"></i>
            <input type="email" placeholder="邮箱" />
          </div>
          <div class="input-field">
            <i class="el-icon-lock"></i>
            <input type="password" placeholder="密码" />
          </div>
          <input type="submit" class="btn" value="立即注册" />
          <p class="social-text">通过其他方式</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="iconfont icon-zu"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="iconfont icon-zu"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="iconfont icon-zu"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="iconfont icon-zu"></i>
            </a>
          </div>
        </form> -->
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3 class="animate__animated animate__backInDown">加入我们</h3>
          <p class="animate__animated animate__backInDown animate__delay-1s">
            加入我们，让供热变的更简单。
          </p>

          <button
            class="btn transparent animate__animated animate__backInDown animate__delay-1s"
            id="sign-up-btn"
            @click="style1"
          ></button>
        </div>

        <img src="~assets/img/login/log.svg" class="image" alt="" />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>已有帐号？</h3>
          <p>立即登录已有帐号，享受独家权益。</p>
          <button class="btn transparent" id="sign-in-btn" @click="style2">
            去登录
          </button>
        </div>
        <img src="~assets/img/login/register.svg" class="image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// import { login, denglu } from "@/api/http";
import { setToken } from "@/utils/token";

export default {
  name: "login",
  data() {
    return {
      rotate: true,
      ruleForm: {
        username: "admin",
        password: "abc12345",
        //  password: "abc123456",
      },
      rules: {
        account: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 18,
            message: "长度在 3 到 18 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 18,
            message: "长度在 3 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    // this.askData();
  }, //
  methods: {
    submitForm(formName) {
      console.log("登录", this.ruleForm);
      // this.$router.push("/layout");

      this.$http.post("plcdata/tems/user/login", this.ruleForm).then((res) => {
        console.log("登录的返回数据", res);
        if (res.result) {
          //在浏览器的storage中存储用户权限列表，这样其他页面也可使用storage中的数据，实现共享
          let permissions = res.permissions;
          //取出Token令牌，保存到storage中
          let token = res.token;
          let userId = res.userId;
          localStorage.setItem("permissions", permissions);
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);
          //让路由跳转页面，这里的Home是home.vue页面的名字
          this.$router.push("/layout");
        } else {
          this.$message({
            message: "登陆失败",
            type: "error",
            duration: 1200,
          });
        }
      });
      // this.$router.push("/layout");
      this.$wsSendTe("login", {
        name: "aap" + Math.random() * 100,

        password: "HBTYyyds",
      });
      this.$wsSend("login", {
        name: "aa" + Math.random() * 100,
        // name: "aa",
        password: "HBTYyyds",
      }); ///
    },
    askData() {
      console.log("********************");
      // this.infoArr = this.$http.get("plcdata/tems/plc/stationInfo");
      // this.$store.commit("CC", this.infoArr);

      this.$http({
        method: "get",
        url: "plcdata/tems/plc/stationInfo", //
      })
        .then((res) => {
          console.log("接受到的数据plcdata/tems/plc/stationInfo", res);
          // this.showAlarmHistoryData = res.page.list;
          // this.totalCount = res.page.totalCount;
          this.$store.commit("CC", res);
        })
        .catch((erroe) => {
          console.log("发送数据失败");
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    style1() {
      this.rotate = false;
    },
    style2() {
      this.rotate = true;
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .el-button {
    width: 350px;
    border-radius: 10px;
    margin: 9px 0 0 0;
  }
}
.container {
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  // background-color: palevioletred;
}

.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  //background-color: palevioletred;
  z-index: 5;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

form.sign-up-form {
  opacity: 0;
  z-index: 1;
}

form.sign-in-form {
  z-index: 2;
}

.title {
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

.input-field {
  max-width: 350px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 45px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
}

.input-field i {
  text-align: center;
  line-height: 55px;
  color: #acacac;
  transition: 0.5s;
  font-size: 1.1rem;
}

.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.input-field button {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}
.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  color: #333;
  border-radius: 50%;
  border: 1px solid #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;
}
.icon {
  width: 20px;
  height: 20px;
}
.icon:hover {
  width: 35px;
  height: 35px;
}

.social-icon:hover {
  color: #4481eb;
  border-color: #4481eb;
}

.btn {
  width: 150px;
  background-color: #5995fd;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
}

.btn:hover {
  background-color: #4d84e2;
}
.panels-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 6;
}

.image {
  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
}

.panel .content {
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.btn.transparent {
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.right-panel .image,
.right-panel .content {
  transform: translateX(800px);
}

/* ANIMATION */

.container.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
  transform: translateX(-800px);
}

.container.sign-up-mode .signin-signup {
  left: 25%;
}

.container.sign-up-mode form.sign-up-form {
  opacity: 1;
  z-index: 2;
}

.container.sign-up-mode form.sign-in-form {
  opacity: 0;
  z-index: 1;
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
  transform: translateX(0%);
}

.container.sign-up-mode .left-panel {
  pointer-events: none;
}

.container.sign-up-mode .right-panel {
  pointer-events: all;
}

@media (max-width: 870px) {
  .container {
    min-height: 800px;
    height: 100vh;
  }
  .signin-signup {
    width: 100%;
    top: 95%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }

  .signin-signup,
  .container.sign-up-mode .signin-signup {
    left: 50%;
  }

  .panels-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }

  .panel {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
  }

  .right-panel {
    grid-row: 3 / 4;
  }

  .left-panel {
    grid-row: 1 / 2;
  }

  .image {
    width: 200px;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }

  .panel .content {
    padding-right: 15%;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.8s;
  }

  .panel h3 {
    font-size: 1.2rem;
  }

  .panel p {
    font-size: 0.7rem;
    padding: 0.5rem 0;
  }

  .btn.transparent {
    width: 110px;
    height: 35px;
    font-size: 0.7rem;
  }

  .container:before {
    width: 1500px;
    height: 1500px;
    transform: translateX(-50%);
    left: 30%;
    bottom: 68%;
    right: initial;
    top: initial;
    transition: 2s ease-in-out;
  }

  .container.sign-up-mode:before {
    transform: translate(-50%, 100%);
    bottom: 32%;
    right: initial;
  }

  .container.sign-up-mode .left-panel .image,
  .container.sign-up-mode .left-panel .content {
    transform: translateY(-300px);
  }

  .container.sign-up-mode .right-panel .image,
  .container.sign-up-mode .right-panel .content {
    transform: translateY(0px);
  }

  .right-panel .image,
  .right-panel .content {
    transform: translateY(300px);
  }

  .container.sign-up-mode .signin-signup {
    top: 5%;
    transform: translate(-50%, 0);
  }
}

@media (max-width: 570px) {
  form {
    padding: 0 1.5rem;
  }

  .image {
    display: none;
  }
  .panel .content {
    padding: 0.5rem 1rem;
  }
  .container {
    padding: 1.5rem;
  }

  .container:before {
    bottom: 72%;
    left: 50%;
  }

  .container.sign-up-mode:before {
    bottom: 28%;
    left: 50%;
  }
}
</style>
