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
    <div class="map">
      <!-- <img src="../../static/1_homepage/map.png" /> -->

      <el-button
        @click="
          addid = 1;
          dialogFormVisible = true;
        "
        style="
          background-color: unset;
          border: none;
          height: 6%;
          width: 4%;
          margin-left: 61%;
          margin-top: 16%;
        "
      ></el-button>

      <el-button
        @click="
          addid = 0;
          dialogFormVisible = true;
        "
        style="
          background-color: unset;
          border: none;
          height: 11%;
          width: 9%;
          margin-top: 21%;
          margin-left: -2.5%;
        "
      ></el-button>

      <el-button
        @click="
          addid = 2;
          dialogFormVisible = true;
        "
        style="
          background-color: unset;
          border: none;
          height: 7%;
          width: 7%;
          margin-top: 42%;
          margin-left: -1%;
        "
      ></el-button>

      <el-button
        @click="
          addid = 3;
          dialogFormVisible = true;
        "
        style="
          background-color: unset;
          border: none;
          height: 7%;
          width: 6%;
          margin-top: 16%;
          margin-left: -5%;
        "
      ></el-button>

      <el-button
        @click="
          addid = 4;
          dialogFormVisible = true;
        "
        style="
          background-color: unset;
          border: none;
          height: 6%;
          width: 8%;
          margin-top: 11%;
          margin-left: -1%;
        "
      ></el-button>

      <!-- 查看照片时候的弹出层 -->
      <el-dialog
        :title="events[addid].address"
        :visible.sync="dialogFormVisible"
        width="50%"
        top="10%"
        center
      >
        <div style="width: 100%; text-align: center">
          <img
            :src="events[addid].img"
            style="display: inline-block; height: auto; max-width: 100%"
          />
          <p style="color: brown">活动：{{ events[addid].event }}</p>
        </div>
      </el-dialog>
    </div>
    <div><b class="download" @click="download()">下载电子地图</b></div>

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
      addid: 0,
      islogin: this.global.islogin,
      dialogFormVisible: false, //弹出层默认为关闭
      events: [
        {
          address: "图书馆",
          img: "../../static/1_homepage/tushuguan.jpg",
          event: "暂无",
        },
        {
          address: "中楼",
          img: "../../static/1_homepage/fuyouge.png",
          event: "暂无",
        },
        {
          address: "福友阁",
          img: "../../static/1_homepage/fuyouge.png",
          event: "演唱会",
        },
        {
          address: "东三",
          img: "../../static/1_homepage/dongsan.jpg",
          event: "暂无",
        },
        {
          address: "文楼",
          img: "../../static/1_homepage/wenlou.jpg",
          event: "暂无",
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
    download() {
      //创建一个a标签
      var alink = document.createElement("a");
      //设置href指向
      alink.href = "../../static/1_homepage/map.png";
      //设置图片下载名字
      alink.download = "map.png";
      //点击a标签
      alink.click();
    },
  },
  created() {
    console.log("向后端请求各地点的活动存入events");
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
  bottom: 0;
  width: 100%;
}

.footer p {
  font-size: 12px;
  color: #666;
  text-align: center;
  padding-top: 5px;
}

.building {
  background: url("../../static/1_homepage/topimg.png");
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

.map {
  margin-top: 11%;
  background: url("../../static/1_homepage/map.png");
  width: 90%;
  margin-left: 5%;
  height: 1100px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  display: flex;
}

.download {
  margin-top: -10%;
  margin-right: 15%;
  float: right;
  font-size: 24px;
  color: #a40404;
}
</style>