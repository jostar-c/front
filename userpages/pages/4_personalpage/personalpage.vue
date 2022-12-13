<template>
  <div>
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

    <div class="top2">
      <div class="top2-ruturn">
        <router-link to="/" title="返回主页"
          >&lt;&nbsp;&nbsp;个人信息主页</router-link
        >
      </div>
    </div>

    <img class="avatar" :src="imageUrl" />

    <div class="message">
      <div class="nicheng">
        <!-- <p>昵称: 浪花朵朵</p> -->
        <p>昵称: {{ uname }}</p>
      </div>
      <br />
      <div class="youxiang">
        <!-- <p>邮箱/电话: 70980546@qq.com</p> -->
        <p>邮箱/电话: {{ eamil }}</p>
      </div>
      <br />
      <div class="biyenianfen">
        <!-- <p>年级: 2002</p> -->
        <p>年级: {{ grade }}</p>
      </div>
      <br />
      <div class="zhuanye">
        <!-- <p>专业: 计算机科学与技术</p> -->
        <p>专业: {{ major }}</p>
      </div>
      <br />
      <div class="banji">
        <!-- <p>班级: 01班</p> -->
        <p>班级: {{ uclass }}</p>
      </div>

      <div>
        <router-link to="messageupdate">
          <button>编辑资料</button>
        </router-link>
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
          
<script >
export default {
  data() {
    return {
      uname: sessionStorage.getItem("uname"),
      eamil: sessionStorage.getItem("email"),
      grade: sessionStorage.getItem("grade"),
      major: sessionStorage.getItem("major"),
      uclass: sessionStorage.getItem("uclass"),
      imageUrl: sessionStorage.getItem("userimg"),
    };
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

body {
  /*margin-bottom: 100px */
  /* size: 100px auto; */
  /* font-family: sans-serif; */
  background-image: url(../../static/personalpage-bg.jpg);
  background-repeat: no-repeat;
  /* background-size: contain; */
  /* 溢出隐藏 */
  /* overflow: hidden; */
  background-size: cover;
}

.top2 {
  float: left;
  width: 100%;
  height: 30px;
  background-color: #ffffff;
  margin-top: -10px;
  padding-left: 10px;
  padding-top: 5px;
}

.top2-return {
  float: left;
  color: #a40404;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: 100% 100%;
  background-repeat: none;
  background-color: rgb(161, 163, 223);
  top: 230px;
  left: 150px;
  position: absolute;
}

.message {
  width: 800px;
  height: 470px;
  background-color: rgba(243, 242, 248, 0.758);
  top: 230px;
  left: 290px;
  position: absolute;
  text-align: center;
}

.message p {
  margin-top: 10px;
  padding-top: 23px;
  font-size: 20px;
  text-align: center;
}

.message button {
  margin-top: 30px;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 30px 30px 30px 30px;
  background-color: #ffffff;
  color: #a40404;
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 70px;
}

/* footer 模块 */

.footer {
  height: 40px;
  background-color: #bfbfbfb7;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.footer p {
  font-size: 12px;
  color: rgb(83, 82, 82);
  text-align: center;
  padding-top: 5px;
}
</style>
