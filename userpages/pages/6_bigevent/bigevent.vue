<template>
  <div class="building">
    <!-- 1.top部分start -->
    <div class="top">
      <div class="fzulink">
        <a href="https://ccds.fzu.edu.cn/index.htm" target="_blank">
          福州大学计算机与大数据学院/软件学院
        </a>
      </div>
      <div class="user">
        <img
          :src="userimg"
          href="#"
          width="15px"
          height="auto"
          @click="goTopersonalpage()"
        />
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
          <li style="background-color: tomato">
            <router-link to="bigevent"><b>大事记</b></router-link>
          </li>
          <li>
            <a @click="goTocomments()"><b>校友留言</b></a>
          </li>
          <li>
            <a @click="goToschoolphoto()"><b>校园风光</b></a>
          </li>
          <li>
            <a @click="goTogroupphoto()"><b>虚拟合影</b></a>
          </li>
        </ul>
      </div>
      <!-- 搜索模块 -->
      <div class="search">
        <input type="text" value="输入您要搜索的专业、毕业年份、班级" />
        <button @click="goToclass_search()"></button>
      </div>
    </div>
    <!-- 头部区域end-->

    <!-- 功能主题 -->
    <div class="topic">
      <p>学院动态</p>
      <div class="line" />
    </div>
    <div class="showevents">
      <ul>
        <li v-for="eventdata in eventdatas" :key="eventdata.id">
          <a :href="eventdata.eventurl" target="_blank">
            {{ eventdata.title }}
          </a>
          <span>{{ eventdata.time }}</span>
        </li>
      </ul>
    </div>

    <div class="block" style="text-align: center; margin: 2%">
      <el-pagination
        layout="prev, pager, next"
        :total="sumevents"
        @current-change="getPageNum"
      >
      </el-pagination>
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
      islogin: Boolean(sessionStorage.getItem("islogin")),
      userimg: "",
      sumevents: 500,
      eventdatas: [
        {
          title: "1",
          eventurl: this.$global.baseURL,
          time: "2022 - 11 - 11",
        },
        {
          title: "2",
          eventurl: this.$global.baseURL,
          time: "2022 - 11 - 11",
        },
        {
          title: "3",
          eventurl: this.$global.baseURL,
          time: "2022 - 11 - 11",
        },
        {
          title: "4",
          eventurl: this.$global.baseURL,
          time: "2022 - 11 - 11",
        },
        {
          title: "5",
          eventurl: this.$global.baseURL,
          time: "2022 - 11 - 11",
        },
        {
          title: "6",
          eventurl: this.$global.baseURL,
          time: "2022 - 11 - 11",
        },
        {
          title: "7",
          eventurl: this.$global.baseURL,
          time: "2022 - 11 - 11",
        },
        {
          title: "8",
          eventurl: this.$global.baseURL,
          time: "2022 - 11 - 11",
        },
        {
          title: "9",
          eventurl: this.$global.baseURL,
          time: "2022 - 11 - 11",
        },
        {
          title: "10",
          eventurl: this.$global.baseURL,
          time: "2022 - 11 - 11",
        },
      ],
    };
  },
  methods: {
    goTopersonalpage() {
      if (this.islogin == 0) this.$router.push("/login");
      else this.$router.push("/personalpage");
    },
    goToclass_search() {
      if (this.islogin == 0) this.$router.push("/login");
      else this.$router.push("/class_search");
    },
    goTocomments() {
      if (this.islogin == 0) this.$router.push("/login");
      else this.$router.push("/comments");
    },
    goToschoolphoto() {
      if (this.islogin == 0) this.$router.push("/login");
      else this.$router.push("/schoolphoto");
    },
    goTogroupphoto() {
      if (this.islogin == 0) this.$router.push("/login");
      else this.$router.push("/groupphoto");
    },
    getPageNum(val) {
      // 改为向后端传送目标页数后后端返回目标页对应的10条大事件赋给eventdatas进行渲染更新
      $.ajax({
        url: "http://119.91.217.141:8080/bigevent",
        type: "get",
        data: {
          x: val,
        },
        //dataType: 'json',
        success: (e) => {
          console.log(e.data);
          for (var i = 0; i < 10; i++) {
            this.eventdatas[i].title = e.data[i].title;
            this.eventdatas[i].time = e.data[i].date;
            this.eventdatas[i].eventurl = e.data[i].link;
          }
        },
      });
      console.log(val);
    },
  },
  created() {
    if (this.islogin == 0) this.userimg = "../../static/user.png";
    else this.userimg = sessionStorage.getItem("userimg");
    if (location.href.indexOf("#reloaded") == -1) {
      location.href = location.href + "#reloaded";
      location.reload();
    }
    console.log(
      "向后端请求事件总数量赋给sumevent,请求前十个事件赋给eventdatas"
    );
    $.get({
      url: "http://119.91.217.141:8080/bigevent",
      type: "get",
      data: {
        x: 1,
      },
      //dataType: 'json',
      success: (e) => {
        console.log(e.data);
        for (var i = 0; i < 10; i++) {
          this.eventdatas[i].title = e.data[i].title;
          this.eventdatas[i].time = e.data[i].date;
          this.eventdatas[i].eventurl = e.data[i].link;
        }
      },
    });
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
  width: 100%;
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
  bottom: -40px;
  width: 100%;
}

.footer p {
  font-size: 12px;
  color: #666;
  text-align: center;
  padding-top: 5px;
}
.building {
  background: url("../../static/6_bigevent/topimg.png");
  width: 100%;
  min-height: 900px;
  /* position: fixed; */
  background-size: 100% auto;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
}
.topic {
  margin-top: 18%;
}
.topic p {
  display: block;
  height: 70px;
  margin-left: 10%;
  font-size: 24px;
  color: #a40404;
}
/* 横线 */
.line {
  height: 2px;
  margin-top: -2%;
  margin-left: 8%;
  margin-right: 8%;
  background: #d4c4c4;
  position: relative;
}

.showevents {
  margin-left: 15%;
  margin-right: 15%;
}
.showevents ul li {
  margin-top: 2%;
  display: block;
  font-size: 18px;
  color: #a40404;
}
.showevents ul li a {
  margin-left: 0;
}
.showevents ul li span {
  float: right;
}
</style>