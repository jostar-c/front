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

    <!-- 发布留言栏 -->
    <div id="issue">
      <!-- 写留言 -->
      <div id="issueleft">
        <el-input
          id="issuecomments"
          type="textarea"
          placeholder="对学校说点什么吧"
          :autosize="{ minRows: 4, maxRows: 4 }"
          v-model="textarea"
        >
        </el-input>
      </div>
      <!-- 添加照片 -->
      <div id="picture"></div>
      <!-- 发布 -->
      <div id="push"></div>
    </div>

    <!-- 留言展示顶部 -->
    <div id="showtop">
      <!-- 左侧文字 -->
      <div id="lefttext">留言展示</div>
      <!-- 右侧刷新图标 -->
      <div id="refresh" @click="refresh">
        <i class="el-icon-refresh-left"></i>
      </div>
      <!-- 右侧文字 -->
      <button id="righttext" @click="changeSort">{{ sort }}</button>
    </div>

    <div id="comments">
      <div id="comment" v-for="(item, index) in comments" :key="item">
        <img :src="comments[index].head" class="photo" />
        <p class="name">{{ comments[index].name }}</p>
        <p class="time">{{ comments[index].time }}</p>
        <div class="inside">{{ comments[index].inside }}</div>
        <router-link to="detail">
          <div class="say" @click="pushdetail(index)">
            <i class="el-icon-s-comment"></i>
          </div>
        </router-link>
        <div class="good">
          <i class="el-icon-star-on"></i>
        </div>
        <div class="blank"></div>
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

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
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
//留言输入框
export default {
  data() {
    return {
      userimg: sessionStorage.getItem("userimg"),
      sort: "按热度排序",
      textarea: "",
      comments: [
        {
          head: "../../static/userimg.png",
          name: "张三",
          time: "2022.11.13",
          inside: "我爱母校",
        },
        {
          head: "../../static/userimg.png",
          name: "李四",
          time: "2022.11.12",
          inside: "母校加油",
        },
        {
          head: "../../static/userimg.png",
          name: "王五",
          time: "20221.11.11",
          inside: "感恩母校培养",
        },
        {
          head: "../../static/userimg.png",
          name: "老六",
          time: "2022.11.10",
          inside: "感谢母校",
        },
      ],
    };
  },
  methods: {
    changeSort() {
      if (this.sort == "按热度排序") {
        this.sort = "按时间排序";
        //在这里改变排序方式
      } else {
        this.sort = "按热度排序";
        //在这里改变排序方式
      }
    },
    good() {
      //判断点赞
    },
    refresh() {
      //在这里刷新留言
    },
    pushdetail(i) {
      this.$router.push({
        path: "/detail",
        query: {
          head: this.comments[i].head,
          name: this.comments[i].name,
          time: this.comments[i].time,
          inside: this.comments[i].inside,
        },
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
//排序方式
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
  bottom: -30%;
  width: 100%;
}

.footer p {
  font-size: 12px;
  color: #666;
  text-align: center;
  padding-top: 5px;
}

/* 发布留言 */
#issue {
  width: 1100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #a40404;
  color: #bfbfbf;
  font-size: 14px;
}
#issuecomments {
  width: 800px;
  height: 100px;
  margin-left: 0px;
  margin-top: 2px;
  border: Transparent;
  color: #a40404;
  font-size: 14px;
}
#issueleft {
  float: left;
}
#picture {
  width: 100px;
  height: 100px;
  padding-left: 0px;
  margin-top: -1px;
  border: 1px solid #a40404;
  float: left;
  /* background: url(../../static/7_comments/picture.jpg); */
}
#push {
  width: 196px;
  height: 100px;
  padding-left: 0px;
  margin-top: -1px;
  border: 1px solid #a40404;
  float: right;
  /* background: url(../../static/7_comments/push.jpg); */
}

/* 留言展示顶部 */
#showtop {
  margin-top: 20px;
  width: 1102px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: #c20a0a;
}
#lefttext {
  width: 80px;
  height: 30px;
  float: left;
  line-height: 30px;
  color: #fff;
  text-align: center;
}
#refresh {
  width: 30px;
  height: 30px;
  float: right;
}
.el-icon-refresh-left {
  padding-top: 5px;
  padding-left: 5px;
  color: #fff;
  font-size: 20px;
}
#righttext {
  width: 90px;
  height: 30px;
  float: right;
  line-height: 30px;
  margin-right: 10px;
  background-color: #c20a0a;
  border: 0px;
  color: #fff;
  text-align: center;
}
#comments {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 1100px;
  height: auto;
}
#comment {
  margin-left: auto;
  margin-right: auto;
  width: 1100px;
  height: auto;
  border: 1px solid #a40404;
}

/* 头像 */
.photo {
  margin-top: 15px;
  margin-left: 15px;
  width: 60px;
  height: 60px;
  float: left;
}
/* 名称 时间 */
.name {
  margin-top: 20px;
  margin-left: 90px;
  font-weight: 500;
  font-size: 20px;
}
.time {
  margin-top: 5px;
  margin-left: 90px;
  font-size: 13px;
  color: rgb(149, 149, 149);
}
.inside {
  margin-top: 20px;
  margin-left: 20px;
}
.good {
  float: right;
  padding-right: 10px;
}
.say {
  float: right;
  padding-right: 10px;
}
.el-icon-s-comment {
  font-size: 28px;
  margin-top: 2px;
  margin-right: 10px;
}
.el-icon-star-on {
  font-size: 30px;
  margin-right: 5px;
}
.blank {
  height: 40px;
}
</style>





<!-- <template>
  <div>

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



    <div class="banner">

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



    <div class="header w">

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

      <div class="search">
        <input type="text" value="输入您要搜索的专业、毕业年份、班级" />
        <router-link to="class_search"><button></button></router-link>
      </div>
    </div>



    <div id="issue">

      <div id="issueleft">
        <el-input
          id="issuecomments"
          type="textarea"
          placeholder="对学校说点什么吧"
          :autosize="{ minRows: 4, maxRows: 4 }"
          v-model="comment"
        >
        </el-input>
      </div>
 
      <div id="picture"></div>

      <div id="push" @click="leave_comment"></div>
    </div>

  
    <div id="showtop">
    
      <div id="lefttext">留言展示</div>
    
      <div id="refresh" @click="refresh">
        <i class="el-icon-refresh-left"></i>
      </div>
  
      <button id="righttext" @click="changeSort">{{ sort }}</button>
    </div>

    <div id="comments">
      <div id="comment" v-for="(item, index) in comments" :key="item">
        <img :src="comments[index].head" class="photo" />
        <p class="name">{{ comments[index].name }}</p>
        <p class="time">{{ comments[index].time }}</p>
        <div class="inside">{{ comments[index].inside }}</div>
        <router-link to="detail">
          <div class="say" @click="pushdetail(index)">
            <i class="el-icon-s-comment"></i>
          </div>
        </router-link>
        <div class="good">
          <i
            class="el-icon-star-on"
            :id="comments[index].good == 1 ? 'isgood' : ''"
            @click="good(index)"
          >
            {{ comments[index].goods }}</i
          >
        </div>
        <div class="blank"></div>
      </div>
    </div>


    <div class="footer">
      <p>
        学院地址：福州市闽侯县学园路2号福州大学计算机与大数据学院/软件学院
        <br />
        版权声明：© 2022 栋感光波. 版权所有. 保留所有权利
      </p>
   
    </div>
  </div>
</template> -->

<!-- <script src="https://cdn.jsdelivr.net/npm/vue"></script>
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
//留言输入框
export default {
  data() {
    return {
      userimg: sessionStorage.getItem("userimg"),
      sortway: 0,
      sort: "按热度排序",
      comment: "",
      id: "",
      comments: [],
    };
  },
  methods: {
    changeSort() {
      if (this.sort == "按热度排序") {
        this.sortway = 1;
        this.sort = "按时间排序";
        //在这里改变排序方式
      } else {
        this.sortway = 0;
        this.sort = "按热度排序";
        //在这里改变排序方式
      }
      const that = this;
      axios
        .get("../../static/comments.json", { sortway: that.sortway })
        .then((res) => {
          that.refresh(); //自动刷新
        })
        .catch((err) => {
          console.error(err);
        });
    },
    good(i) {
      //判断点赞
      this.comments[i].good *= -1;
      this.comments[i].goods += this.comments[i].good;
      const that = this;
      axios
        .get("../../static/comments.json", { id: that.id })
        .then((res) => {
          //后端点赞数+1 改变点赞状态
        })
        .catch((err) => {
          console.error(err);
        });
    },
    refresh() {
      //刷新评论
      const that = this;
      this.comments.splice(0, this.comments.length);
      axios.get("../../static/comments.json").then(function (response) {
        for (var i = response.data.comments.length - 1; i >= 0; i--) {
          that.comments.push({
            id: response.data.comments[i].id,
            goods: response.data.comments[i].goods,
            name: response.data.comments[i].name,
            head: response.data.comments[i].head,
            time: response.data.comments[i].time,
            inside: response.data.comments[i].inside,
          });
        }
      });
    },
    leave_comment() {
      //把新的评论加入数据库
      const that = this;
      axios
        .get("../../static/comments.json", {
          comment: that.comment,
          id: that.id,
        })
        .then((res) => {
          that.refresh(); //添加后自动刷新
          that.comments.push(
            //模拟添加评论
            {
              id: that.id,
              goods: 0,
              good: -1,
              name: "new",
              head: "../../static/userimg.png",
              time: "刚刚",
              inside: that.comment,
            }
          );
        })
        .catch((err) => {
          console.error(err);
        });
    },
    pushdetail(i) {
      //点进具体评论
      this.$router.push({
        path: "/detail",
        query: {
          head: this.comments[i].head,
          name: this.comments[i].name,
          time: this.comments[i].time,
          inside: this.comments[i].inside,
          goods: this.comments[i].goods,
          good: this.comments[i].good,
          id: this.comments[i].id,
        },
      });
    },
  },
  created: function () {
    //展示出所有评论
    if (location.href.indexOf("#reloaded") == -1) {
      location.href = location.href + "#reloaded";
      location.reload();
    }
    const that = this;
    axios.get("../../static/comments.json").then(function (response) {
      console.log(response.data);
      for (var i = response.data.comments.length - 1; i >= 0; i--) {
        that.comments.push({
          id: response.data.comments[i].id,
          goods: response.data.comments[i].goods,
          name: response.data.comments[i].name,
          head: response.data.comments[i].head,
          time: response.data.comments[i].time,
          inside: response.data.comments[i].inside,
          good: -1,
        });
      }
    });
  },
};
//排序方式
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
  bottom: -30%;
  width: 100%;
}

.footer p {
  font-size: 12px;
  color: #666;
  text-align: center;
  padding-top: 5px;
}

/* 发布留言 */
#issue {
  width: 1100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #a40404;
  color: #bfbfbf;
  font-size: 14px;
}
#issuecomments {
  width: 800px;
  height: 100px;
  margin-left: 0px;
  margin-top: 2px;
  border: Transparent;
  color: #a40404;
  font-size: 14px;
}
#issueleft {
  float: left;
}
#picture {
  width: 100px;
  height: 100px;
  padding-left: 0px;
  margin-top: -1px;
  border: 1px solid #a40404;
  float: left;
  /* background: url(../../static/7_comments/picture.jpg); */
}
#push {
  width: 196px;
  height: 100px;
  padding-left: 0px;
  margin-top: -1px;
  border: 1px solid #a40404;
  float: right;
  /* background: url(../../static/7_comments/push.jpg); */
}

/* 留言展示顶部 */
#showtop {
  margin-top: 20px;
  width: 1102px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: #c20a0a;
}
#lefttext {
  width: 80px;
  height: 30px;
  float: left;
  line-height: 30px;
  color: #fff;
  text-align: center;
}
#refresh {
  width: 30px;
  height: 30px;
  float: right;
}
.el-icon-refresh-left {
  padding-top: 5px;
  padding-left: 5px;
  color: #fff;
  font-size: 20px;
}
#righttext {
  width: 90px;
  height: 30px;
  float: right;
  line-height: 30px;
  margin-right: 10px;
  background-color: #c20a0a;
  border: 0px;
  color: #fff;
  text-align: center;
}
#comments {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 1100px;
  height: auto;
}
#comment {
  margin-left: auto;
  margin-right: auto;
  width: 1100px;
  height: auto;
  border: 1px solid #a40404;
}

/* 头像 */
.photo {
  margin-top: 15px;
  margin-left: 15px;
  width: 60px;
  height: 60px;
  float: left;
}
/* 名称 时间 */
.name {
  margin-top: 20px;
  margin-left: 90px;
  font-weight: 500;
  font-size: 20px;
}
.time {
  margin-top: 5px;
  margin-left: 90px;
  font-size: 13px;
  color: rgb(149, 149, 149);
}
.inside {
  margin-top: 20px;
  margin-left: 20px;
}
.good {
  float: right;
  padding-right: 10px;
}
.say {
  float: right;
  padding-right: 10px;
}
.el-icon-s-comment {
  font-size: 28px;
  margin-top: 2px;
  margin-right: 10px;
}
.el-icon-star-on {
  font-size: 30px;
  margin-right: 5px;
}
.blank {
  height: 40px;
}
#isgood {
  color: #a40404;
}
</style> -->