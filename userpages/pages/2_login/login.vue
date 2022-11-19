<template>
  <body>
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

    <div>
      <div class="container">
        <div class="header">
          <b>用户登录</b>
          <span>
            <router-link to="register"><u>注册</u></router-link>
          </span>
        </div>
        <div class="main">
          <hr />
          <br />
          <br />
          <br />
          <form>
            <span>
              <!-- <p>账号</p> -->
              <i class="fas fa-user"></i>
              <span>账号</span>
              <input type="text" placeholder="请输入邮箱或手机号" /> </span
            ><br />
            <span>
              <!-- <p>密码</p> -->
              <i class="fas fa-lock"></i>
              <span>密码</span>
              <input type="password" placeholder="请输入密码" /> </span
            ><br />
            <div>
              <router-link to="/">
                <button>登录</button>
              </router-link>
            </div>
          </form>
        </div>
        {{ islogin }}
      </div>

      <!-- banner部分end -->

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
  </body>
</template>
            
<!-- 功能主题 -->

<script>
//       var mo=function(e){
// 　　　　　　e.preventDefault();
// 　　　　     };
//       document.body.style.overflow='hidden';
//       document.addEventListener("touchmove",mo,false);//禁止页面滑动
</script>
        



<style>
* {
  margin: 0;
  padding: 0;
}

body {
  /*margin-bottom: 100px */
  /* size: 100px auto; */
  /* font-family: sans-serif; */
  background-image: url(../../static/bg.png);
  background-repeat: no-repeat;
  background-size: contain;
  /* 溢出隐藏 */
  /* overflow: hidden; */
  /* background-size: cover;*/
}

.container {
  width: 350px;
  height: 500px;
  margin: 4% 65%;
  border-radius: 15px;
  background-color: rgba(231, 229, 229, 0.749);
  /* 阴影部分 */
  box-shadow: 0 0 17px #333;
}

.container hr {
  background-color: #47424298;
  height: 1.5px;
  border: none;
  margin-top: -5%;
}

.header {
  padding-top: 25px;
  padding-left: 27px;
  color: rgb(45, 20, 20);
}

.header b {
  float: left;
  color: #333;
  font-size: 20px;
  margin-left: 0%;
  /* margin-bottom: 80px; */
}

.header span {
  float: right;
  color: #333;
  font-size: 15px;
  padding-top: 3px;
  padding-right: 27px;
}

.header span span {
  float: right;
  color: rgb(230, 13, 13);
  font-size: 15px;
  padding-top: 3px;
  padding-right: 27px;
}

.main {
  text-align: center;
}

.main input,
button {
  width: 250px;
  height: 40px;
  /* 边框消失 */
  border: none;
  /* 选中的时候的边框提醒去掉 */
  outline: none;
  margin-left: 20px;
  padding-left: 8px;
  box-sizing: border-box;
  font-size: 15px;
  color: #333;
  margin-bottom: 50px;
}

.main button {
  width: 99px;
  margin-left: -9px;
  background-color: #ae0505;
  color: #fff;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 70px;
}

.main button:hover {
  box-shadow: 2px 2px 5px #555;
  background-color: #ae0505;
}

.main input:hover {
  box-shadow: 2px 2px 5px #555;
  background-color: #ddd;
}

.main span {
  /* 相对定位 */
  position: relative;
}
.main p {
  float: left;
}
.main i {
  float: left;
  /* position: absolute; */
  left: 30px;
  color: rgb(26, 17, 17);
  font-size: 16px;
  top: 2px;
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
  height: 900px;
  position: relative;
}

.header {
  height: 42px;
  /* 此处会层叠w里面的margin */
  margin: 30px auto;
}

/* search 搜索模块 */

.search {
  margin-top: -18px;
  float: left;
  width: 412px;
  height: 35px;
  background-color: rgb(235, 135, 135);
  margin-left: 60px;
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
  background-color: #bfbfbf92;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.footer p {
  font-size: 12px;
  color: #666;
  text-align: center;
  padding-top: 5px;
}
</style>