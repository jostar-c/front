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
          <li style="background-color: tomato">
            <router-link to="comments"><b>校友留言</b></router-link>
          </li>
          <li>
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

    <!-- 具体评论 -->
    <div id="comment">
      <img :src="head" class="photo" />
      <p class="name">{{ name }}</p>
      <p class="time">{{ time }}</p>
      <div class="inside">{{ inside }}</div>
      <div class="say">
        <i class="el-icon-s-comment"></i>
      </div>
      <div class="good">
        <i class="el-icon-star-on"></i>
      </div>
      <div class="blank"></div>
    </div>

    <div id="issue2">
      <!-- 评论 -->
      <div id="issueleft2">
        <el-input
          id="issuecomments2"
          type="textarea"
          placeholder="评论点什么吧"
          maxlength="15"
          show-word-limit
          :autosize="{ minRows: 2, maxRows: 4 }"
          v-model="message"
        >
        </el-input>
      </div>
      <!-- 添加照片 -->

      <!-- 发布 -->
      <div id="push2">发布评论</div>
    </div>

    <div id="comments2">
      <div id="comment" v-for="(item, index) in comments" :key="item">
        <img :src="comments[index].head" class="photo" />
        <div class="name2">
          {{ comments[index].name }}: {{ comments[index].inside }}
        </div>
        <p class="time">{{ comments[index].time }}</p>
        <div class="blank2"></div>
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
      message: "",
      userimg: sessionStorage.getItem("userimg"),
      comments: [
        {
          head: "../../static/userimg.png",
          name: "大炮",
          time: "2022.11.13",
          inside: "我爱母校",
        },
        {
          head: "../../static/userimg.png",
          name: "飞机",
          time: "2022.11.12",
          inside: "母校加油",
        },
        {
          head: "../../static/userimg.png",
          name: "坦克",
          time: "20221.11.11",
          inside: "感恩母校培养",
        },
      ],
    };
  },
  methods: {
    getParams() {
      this.head = this.$route.query.head;
      this.name = this.$route.query.name;
      this.time = this.$route.query.time;
      this.inside = this.$route.query.inside;
    },
  },
  created() {
    this.getParams();
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
  bottom: 0;
  width: 100%;
}

.footer p {
  font-size: 12px;
  color: #666;
  text-align: center;
  padding-top: 5px;
}

#issue2 {
  width: 1100px;
  height: 54px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #a40404;
  color: #bfbfbf;
  font-size: 14px;
}
#issuecomments2 {
  width: 942px;
  height: 54px;
  margin-left: 0px;
  margin-top: 2px;
  border: Transparent;
  color: #a40404;
  font-size: 14px;
}
#issueleft2 {
  float: left;
}

.el-icon-camera-solid {
  padding-top: 9px;
  padding-left: 7px;
  font-size: 40px;
  color: #a40404;
}
#push2 {
  width: 154px;
  height: 54px;
  padding-left: 0px;
  margin-top: -1px;
  border: 1px solid #a40404;
  color: white;
  background-color: #a40404;
  float: right;
  line-height: 54px;
  font-size: 20px;
  text-align: center;
}

#comments2 {
  margin-left: auto;
  margin-right: auto;
  width: 1102px;
  height: auto;
}
.blank2 {
  height: 22px;
}
.name2 {
  margin-top: 24px;
  margin-left: 90px;
  font-weight: 500;
  font-size: 16px;
}
</style>