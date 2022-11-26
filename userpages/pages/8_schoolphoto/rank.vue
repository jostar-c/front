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
          <img :src="userimg" href="#" width="15px" height="auto" />
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
          <li style="background-color: tomato">
            <router-link to="schoolphoto"><b>校园风光</b></router-link>
          </li>
          <li>
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

    <router-link to="schoolphoto">
      <div id="ranktop">
        <i class="el-icon-back"></i>
        <div id="rankback">返回</div>
      </div>
    </router-link>

    <div id="therank">
      <div class="bigger1">
        <div class="bigger2">NO.1</div>
        <img :src="no1" class="bigger3" />
        <div class="bigger4">
          <i class="el-icon-star-on biggergood"></i>
          {{ good1 }}
        </div>
      </div>
      <div class="bigger1">
        <div class="bigger2">NO.2</div>
        <img :src="no2" class="bigger3" />
        <div class="bigger4">
          <i class="el-icon-star-on biggergood"></i>
          {{ good2 }}
        </div>
      </div>
      <div class="bigger1">
        <div class="bigger2">NO.3</div>
        <img :src="no3" class="bigger3" />
        <div class="bigger4">
          <i class="el-icon-star-on biggergood"></i>
          {{ good3 }}
        </div>
      </div>
      <div class="smaller1">
        <div class="smaller2">NO.4</div>
        <img :src="no4" class="smaller3" />
        <div class="smaller4">
          <i class="el-icon-star-on smallergood"></i>
          {{ good4 }}
        </div>
      </div>
      <div class="smaller1">
        <div class="smaller2">NO.5</div>
        <img :src="no5" class="smaller3" />
        <div class="smaller4">
          <i class="el-icon-star-on smallergood"></i>
          {{ good5 }}
        </div>
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
export default {
  data() {
    return {
      userimg: sessionStorage.getItem("userimg"),
      no1: "../../static/8_schoolphoto/p.jpg",
      no2: "../../static/8_schoolphoto/p.jpg",
      no3: "../../static/8_schoolphoto/p.jpg",
      no4: "../../static/8_schoolphoto/p.jpg",
      no4: "../../static/8_schoolphoto/p.jpg",
      no5: "../../static/8_schoolphoto/p.jpg",
      good1: 999,
      good2: 888,
      good3: 777,
      good4: 666,
      good5: 555,
    };
  },
  methods: {},
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

.search button {
  float: left;
  width: 50px;
  height: 38px;
  border: 0;
  background: url(../../static/button.png);
}

/* footer 模块 */

.footer {
  height: 40px;
  background-color: #bfbfbf;
  position: absolute;
  bottom: -135%;
  width: 100%;
}

.footer p {
  font-size: 12px;
  color: #666;
  text-align: center;
  padding-top: 5px;
}
#ranktop {
  width: 100px;
  height: 40px;
  background-color: #a40404;
}
.el-icon-back {
  margin-left: 5px;
  color: white;
  font-size: 40px;
}
#rankback {
  width: 55px;
  height: 40px;
  font-size: 22px;
  float: right;
  color: white;
  line-height: 40px;
}
#therank {
  width: 800px;
  height: auto;
  margin-right: auto;
  margin-left: auto;
}
.bigger1 {
  width: 800px;
  height: 400px;
}
.bigger2 {
  width: 150px;
  height: 400px;
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  color: #a40404;
  float: left;
}
.bigger3 {
  width: 550px;
  float: left;
}
.bigger4 {
  width: 100px;
  height: 40px;
  line-height: 40px;
  float: left;
  font-size: 25px;
}
.smaller1 {
  width: 700px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}
.smaller2 {
  width: 150px;
  height: 300px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #a40404;
  float: left;
}
.smaller3 {
  width: 450px;
  float: left;
}
.smaller4 {
  width: 100px;
  height: 35px;
  float: left;
  line-height: 35px;
  font-size: 20px;
}
.biggergood {
  font-size: 40px;
  float: left;
}
.smallergood {
  font-size: 35px;
  float: left;
}
</style>