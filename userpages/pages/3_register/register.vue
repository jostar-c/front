<template>
  <div style="height: 100%">
    <!-- 1.top部分start -->
    <div class="top">
      <div class="fzulink">
        <a href="https://ccds.fzu.edu.cn/index.htm" target="_blank">
          福州大学计算机与大数据学院/软件学院
        </a>
      </div>
    </div>
    <!-- top部分end -->

    <!-- 2.banner部分start -->
    <div class="banner">
      <!-- logo部分 -->
      <div class="logo">
        <img src="../../static/logo.png" width="80px" height="auto" />
      </div>

      <div class="fzu">
        <img src="../../static/fzu.png" alt="" width="170px" height="auto" />
        <img src="../../static/line.png" alt="" width="auto" height="80px" />
      </div>

      <div>
        <p>
          福州大学计算机与大数据学院40周年
          <br />
          /软件学院20周年庆
        </p>
      </div>
    </div>
    <!-- banner部分end -->

    <!-- 功能主题 -->

    <div class="container">
      <div class="box">
        <h2>注册</h2>
        <div style="text-align: center">
          <span style="color: red">{{ err }}</span>
        </div>
        <form>
          <div class="inputBox">
            <input type="text" name="" required="" v-model="uname" />
            <label>账号</label>
          </div>
          <div class="inputBox">
            <input type="text" name="" required="" v-model="nickname" />
            <label>昵称</label>
          </div>
          <div class="inputBox">
            <input type="password" name="" required="" v-model="password" />
            <label>密码</label>
          </div>
          <div class="inputBox">
            <input type="text" name="" required="" v-model="yearOfGraduate" />
            <label>毕业年份</label>
          </div>
          <div class="inputBox">
            <input type="text" name="" required="" v-model="umajor" />
            <label>专业</label>
          </div>
          <div class="inputBox">
            <input type="text" name="" required="" v-model="uclass" />
            <label>班级</label>
          </div>
          <div class="submit">
            <!--  @click.prevent="btn"-->
            <input type="submit" value="注册" @click.prevent="login" />
          </div>
        </form>
      </div>
    </div>

    <!-- footer 底部制作区域start -->
    <div class="footer">
      <p>
        学院地址：福州市闽侯县学园路2号福州大学计算机与大数据学院/软件学院
        <br />
        版权声明：© 2022 栋感光波. 版权所有. 保留所有权利
      </p>
      <!-- footer 底部制作区域end -->
    </div>
  </div>
</template>


<script>
export default {
  name: "Register",
  data() {
    return {
      uname: "",
      nickname: "",
      password: "",
      yearOfGraduate: "",
      umajor: "",
      uclass: "",
      err: "",
    };
  },
  methods: {
    register() {
      http({
        method: "post",
        url: "http://localhost:8081/user/register",
        params: {
          uname: this.uname,
          nickname: this.nickname,
          password: this.password,
          yearOfGraduate: this.yearOfGraduate,
          umajor: this.umajor,
          uclass: this.uclass,
        },
      })
        .then((res) => {
          if (res.data.code === 200) {
            window.localStorage.setItem("uname", this.uname);
            this.$router.replace("/all");
          } else {
            this.err = "";
            this.$router.replace("/");
            this.err = this.err.concat("账号已存在");
          }
        })
        .catch((err) => {
          console.log("error");
        });
    },
  },
  created: function () {
    if (location.href.indexOf("#reloaded") == -1) {
      location.href = location.href + "#reloaded";
      location.reload();
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
}

.logo {
  float: left;
  margin-left: 13px;
  margin-top: -8px;
}

.fzu {
  float: left;
  margin-left: 5px;
  margin-top: 12px;
}

/* top 区域 */
.top {
  height: 24px;
  background-color: #9c5757;
}

.top a {
  margin-left: 5px;
  margin-top: 0;
  font-size: 14px;
  color: #fff;
}

.user {
  float: right;
  margin-top: -17px;
  margin-right: 8px;
}

/* banner 区域 */
.banner {
  width: 100%;
  height: 100px;
  background-color: #a40404;
}

.banner p {
  float: left;
  color: rgb(249, 233, 233);
  font-size: 24px;
  padding-left: 10px;
  padding-top: 17px;
}

.nav {
  float: left;
  margin-left: 60px;
}

.nav ul li {
  float: left;
  margin: 0 35px;
}

.nav ul li {
  float: left;
  margin: 0 15px;
}

.nav ul li a {
  display: block;
  height: 35px;
  margin-top: -10px;
  padding-top: -10px;
  padding-left: 30px;
  padding-right: 30px;
  line-height: 20px;
  font-size: 24px;
  color: #a40404;
}

.nav ul li a:hover {
  transition: 0.2s;
  border-bottom: 3px solid #a40404;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  position: relative;
}

.search input {
  float: left;
  width: 345px;
  height: 35px;
  border: 1px solid #a40404;
  border-right: 0;
  color: #bfbfbf;
  font-size: 14px;
  padding-left: 15px;
}

/* footer 模块 */

.footer {
  height: 40px;
  background-color: #bfbfbf;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.footer p {
  font-size: 12px;
  color: #666;
  text-align: center;
  padding-top: 5px;
}

.box {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 40px;
  background: rgba(163, 162, 162, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(234, 233, 233, 0.5);
  border-radius: 10px;
  /*登录窗口边角圆滑*/
}

.box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.box .inputBox {
  position: relative;
}

.box .inputBox input {
  width: 100%;
  padding: 10px 0;
  font-side: 16px;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 30px;
  /*输入框设置*/
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.box .inputBox label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.box .inputBox input:focus ~ label,
.box .inputBox input:valid ~ label {
  top: -18px;
  left: 0;
  color: #03a9f4;
  font-size: 12px;
}

.box input[type="submit"] {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  background: #f4032f;
  padding: 10px 35px;
  cursor: pointer;
  border-radius: 5px;
}

.submit {
  text-align: center;
}
</style>
