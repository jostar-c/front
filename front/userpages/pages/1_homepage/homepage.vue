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
        <img
          :src="
            islogin == 0
              ? require('../../static/user.png')
              : require('../../static/userimg.png')
          "
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
          <li>
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
<<<<<<< HEAD
    <div>
      homepage
      <router-link to="map">
        <button>map</button>
      </router-link>
=======
    <div class="content-container">
      <div class="yqzb-module">
        <div class="yqzb-title">院庆直播</div>
        <div class="yqzb-content">
          <video
            playsinline=""
            controls=""
            disablepictureinpicture=""
            controlslist="nodownload"
            jm_neat="1007234049"
          >
            <source src="https://cdn.modao.cc/Default_video.mp4" />
            Video element is not supported in this browser.
          </video>

          <div class="flex" style="margin-top: 30px">
            <div class="c-left">
              <div class="xyly-module">
                <div class="m-title">校友留言</div>
                <div
                  class="flex flex-ac comment-item"
                  v-for="item in commentList"
                  :key="item.id"
                >
                  <img
                    width="24"
                    src="../../static/1_homepage/user-avatar.jpg"
                    alt=""
                  />
                  <div class="flex-g1">{{ item.title }}</div>
                  <img
                    width="24"
                    src="../../static/1_homepage/like-icon.jpg"
                    alt=""
                  />
                  <img
                    width="24"
                    src="../../static/1_homepage/comment-icon.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div class="lxwm-module">
                <div class="m-title">联系我们</div>
                <div class="lxwm-module-content">
                  <div>12345678</div>
                  <div>12345678</div>
                  <div>12345678@qq.com</div>
                </div>
              </div>
            </div>
            <div class="c-right">
              <div class="m-title">福大地图</div>
              <div>
                <img @click="$router.push('/map')" src="../../static/1_homepage/map.png" alt="">
              </div>
              <div class="flex flex-ac">
                <div class="flex-g1"></div>
                <div>下载纸质地图</div>
                <img class="link-icon" width="24" src="../../static/1_homepage/rjt.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      <div class="bottom">
        <img src="../../static/1_homepage/bottom.jpg" alt="">
      </div>
      </div>
>>>>>>> 0117a06 (修改了后台框架，初步完成后台留言审核， 前台主页)
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
      islogin: this.global.islogin,
<<<<<<< HEAD
=======
      commentList: [
        {
          id: 1,
          title: "母校变化之大...",
        },
        {
          id: 2,
          title: "母校变化之大...",
        },
        {
          id: 3,
          title: "母校变化之大...",
        },
        {
          id: 4,
          title: "母校变化之大...",
        },
        {
          id: 5,
          title: "母校变化之大...",
        },
        {
          id: 6,
          title: "母校变化之大...",
        },
      ],
>>>>>>> 0117a06 (修改了后台框架，初步完成后台留言审核， 前台主页)
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
<<<<<<< HEAD
  position: absolute;
=======
  /* position: fixed; */
>>>>>>> 0117a06 (修改了后台框架，初步完成后台留言审核， 前台主页)
  bottom: 0;
  width: 100%;
}

.footer p {
  font-size: 12px;
  color: #666;
  text-align: center;
  padding-top: 5px;
}
<<<<<<< HEAD
=======
.content-container {
  background: url(../../static/1_homepage/topimg.jpeg) center 0 no-repeat;
  background-size: 100% auto;
  padding-bottom: 30px;
}
.yqzb-module {
  width: 90%;
  margin: 0 auto;
}
.yqzb-title {
  color: #fff;
  font-size: 18px;
  line-height: 44px;
  text-indent: 2em;
  background: rgba(194, 3, 3, 0.72);
}
.yqzb-content {
  padding: 20px 50px;
  background: #fff;
  border: 1px solid rgb(187, 187, 187);
}
.yqzb-content video {
  display: block;
  width: 100%;
}
.flex {
  display: flex;
}

.flex-ac {
  align-items: center;
}
.flex-g1 {
  flex: 1;
  flex-grow: 1;
}
.flex-je {
  justify-content: flex-end;
}
.comment-item {
  padding: 15px 0;
  border-bottom: 2px solid #b1b1b1;
  font-size: 18px;
}
.xyly-module {
  width: 500px;
}
.m-title {
  font-family: SourceHanSansSC;
  font-size: 24px;
  color: #fff;
  line-height: 44px;
  text-indent: 1em;
  background: rgba(194, 3, 3, 0.72);
}
.lxwm-module{
  margin-top:30px;
}
.lxwm-module-content {
  padding-top:20px;
  line-height: 40px;
  font-size: 18px;
  color: rgba(16, 16, 16, 0.6);
}
.c-right{
  margin-left:100px;
}
.c-right .m-title{
  max-width:400px;
}
.c-right  img{
  width:100%;
  cursor:pointer;
}
.bottom{
  margin-top:30px;
}
.bottom img{
  width:100%;
  height:200px;
}
.link-icon{
  width:24px !important;
}
>>>>>>> 0117a06 (修改了后台框架，初步完成后台留言审核， 前台主页)
</style>