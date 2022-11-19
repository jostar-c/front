<template>
  <body>
    <div class="login">
      <div class="logo">
        <img src="../../static/logo.png" width="180px" height="auto" />
      </div>
      <h2><b>院庆后台系统</b></h2>
      <div class="login_form">
        <span>账号：</span>
        <input type="text" placeholder="请输入账号" />
        <br />
        <br />
        <span>密码：</span>
        <input type="password" placeholder="请输入密码" />
      </div>
      <div class="btn">
        <!--  <router-link to="homepage"> -->
        <router-link to="homepage">
          <button class="login_btn" onclick="login()">
            进&nbsp;&nbsp;&nbsp;&nbsp;入
          </button>
        </router-link>
      </div>
    </div>

    <!-- <div>
    <router-link to="homepage" target="_self">
      <button>homepage</button>
    </router-link>
    {{ islogin }}
  </div> -->
  </body>
</template>

<script>
export default {
  data() {
    return {
      islogin: this.global.islogin,
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
    
<style>
body {
  padding: 0;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: url(../../static/login-background.png);
  background-size: cover;
  flex: 1;
  align-items: center;
}

.logo {
  /* text-align: center; */
  margin-top: -20%;
  padding-left: 23%;
}
.login {
  text-align: center;
  margin: 0 auto;
  width: 410px;
  height: 540px;
  background-color: rgb(241, 241, 248);
  border-radius: 25px;
  box-shadow: 5px 2px 35px -7px #9abaff;
  position: fixed;
}
.login h2 {
  margin-top: 33%;
  color: rgb(4, 16, 26);
  font-weight: 100;
}
.login_form {
  padding: 20px;
}
.login_form span {
  color: rgb(2, 19, 26);
  font-size: 18px;
  font-weight: 100;
}
.login_form input {
  background-color: transparent;
  width: 270px;
  padding: 2px;
  text-indent: 2px;
  color: rgb(25, 25, 26);
  font-size: 20px;
  height: 45px;
  margin: -30px 30px 30px 5px;
  outline: none;
  border: 0;
  border-bottom: 1px solid rgb(49, 87, 101);
}
input::placeholder {
  color: #c2d9fb;
  font-weight: 100;
  font-size: 18px;
  font-style: italic;
}
.login_btn {
  background-color: rgb(16, 9, 71);
  border: 1px solid rgb(16, 9, 71);
  padding: 10px;
  width: 240px;
  height: 60px;
  border-radius: 30px;
  font-size: 30px;
  color: rgb(255, 255, 255);
  font-weight: 100;
  margin-top: 15px;
}
.login_btn:hover {
  box-shadow: 2px 2px 15px 2px rgb(255, 255, 255);
  background-color: transparent;
  color: rgb(16, 9, 71);
  /* 选择动画 */
  /* animation: login_mation 0.5s; */
}

/* 定义动画 */
/* @keyframes login_mation
    {
         from {
            background-color: rgb(255, 255, 255);
            box-shadow: 0px 0px 15px 2px rgb(190, 225, 255);
        } 
         to {
            background-color: transparent;
            color: white;
            box-shadow: 2px 2px 15px 2px rgb(190, 225, 255);
        } 
    } */
</style>