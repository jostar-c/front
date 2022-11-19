<template>
  <div>
    <!-- 1.top部分start -->
    <div class="top">
      <div class="fzulink">
        <a href="https://ccds.fzu.edu.cn/index.htm" target="_blank">
          福州大学计算机与大数据学院/软件学院
        </a>
      </div>
      <div class="user">
        <router-link to="personalpage">
          <!-- 注意！！！记得改为从后端调取的头像图片信息！！！！！！！！！ -->
          <img
            src="../../static/user.png"
            href="#"
            width="15px"
            height="auto"
          />
        </router-link>
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

    <!-- 1.头部区域start -->
    <div class="header w">
      <!-- 导航栏部分 nav -->
      <div class="nav">
        <ul>
          <li>
            <router-link to="/"><b>首页</b></router-link>
          </li>
          <li>
            <router-link to="bigevent"><b>大事记</b></router-link>
          </li>
          <li>
            <router-link to="comments"><b>校友留言</b></router-link>
          </li>
          <li>
            <router-link to="schoolphoto"><b>校园风光</b></router-link>
          </li>
          <li style="background-color: tomato">
            <router-link to="groupphoto"><b>虚拟合影</b></router-link>
          </li>
        </ul>
      </div>
      <!-- 搜索模块 -->
      <div class="search">
        <input type="text" value="输入您要搜索的专业、毕业年份、班级" />
        <router-link to="class_search"><button></button></router-link>
      </div>
    </div>
    <!-- 头部区域end-->

    <!-- 功能主题 -->
    <div class="select">
      <p>请选择您想使用的照片模板</p>
      </div>

      <div class="temp">
        <div class="temp1">
          <router-link to="selectposition"><img src="../../static/bg.png" alt="" width="400px" height="auto" /></router-link>
        </div>

        <div class="temp2">
          <router-link to="selectposition"><img src="../../static/bg.png" alt="" width="400px" height="auto" /></router-link>
        </div>

        <div class="temp3">
          <router-link to="selectposition"><img src="../../static/bg.png" alt="" width="400px" height="auto" /></router-link>
        </div>

        <div class="temp4">
          <router-link to="selectposition"><img src="../../static/bg.png" alt="" width="400px" height="auto" /></router-link>
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
//1.获取所有元素元素
var btns = document.getElementsByTagName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    //2.清空所有默认的样式
    for (var i = 0; i < btns.length; i++) {
      btns[i].style.backgroundColor = "";
    }
    //3.添加颜色
    this.style.backgroundColor = "red";
  };
}
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

.search button {
  float: left;
  width: 50px;
  height: 38px;
  border: 0;
  background: url(../../static/button.png);
}


.select {
  height: 40px;
  margin-top: -44px;
  background-color: #a40404;
}

.select p{
  text-align: center;
  font-size: 20px;
  padding-top: 5px;
  color:#fff
}

.temp{
  float: left;
  margin-top: 70px;
  margin-left: 70px;
  margin-right: 70px;
}

.temp1{
  float: left;
 
  margin-left: 140px;
}

.temp2{
  float: left;
 
  margin-left: 140px;
}

.temp3{
  float: left;
  margin-top: 30px;
  margin-left: 140px;
}

.temp4{
  float: left;
  margin-top: 30px;
  margin-left: 140px;
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


</style>