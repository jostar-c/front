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
    <button id="left">
      <i class="el-icon-refresh" @click="refresh"></i>
      刷新图片
    </button>
    <div id="right">
      <el-upload
        class="avatar-uploader"
        action="http://192.168.31.77:8000/uploadphoto/uploadppp"
        :show-file-list="false"
        accept=".jpg,.png"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <div id="upload">贴上您拍摄的照片</div>
      </el-upload>
      <!-- <p>{{ imageUrl }}</p> -->

      <router-link to="rank">
        <div id="rank">查看排行榜</div>
      </router-link>
    </div>

    <p id="main">校友眼中的校园风光</p>
    <div id="heart">
      <router-link to="photo">
        <img
          :src="photos[(0 + sj * 25) % cnt].pic_url"
          class="p"
          id="lp1"
          @click="
            pushlp1(
              photos[(0 + sj * 25) % cnt].pic_url,
              photos[(0 + sj * 25) % cnt].thumbs_up,
              photos[(0 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(1 + sj * 25) % cnt].pic_url"
          class="p"
          id="lp2"
          @click="
            pushlp1(
              photos[(1 + sj * 25) % cnt].pic_url,
              photos[(1 + sj * 25) % cnt].thumbs_up,
              photos[(1 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(2 + sj * 25) % cnt].pic_url"
          class="p"
          id="lp3"
          @click="
            pushlp1(
              photos[(2 + sj * 25) % cnt].pic_url,
              photos[(2 + sj * 25) % cnt].thumbs_up,
              photos[(2 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(3 + sj * 25) % cnt].pic_url"
          class="p"
          id="lp4"
          @click="
            pushlp1(
              photos[(3 + sj * 25) % cnt].pic_url,
              photos[(3 + sj * 25) % cnt].thumbs_up,
              photos[(3 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(4 + sj * 25) % cnt].pic_url"
          class="p"
          id="lp5"
          @click="
            pushlp1(
              photos[(4 + sj * 25) % cnt].pic_url,
              photos[(4 + sj * 25) % cnt].thumbs_up,
              photos[(4 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(5 + sj * 25) % cnt].pic_url"
          class="p"
          id="lp6"
          @click="
            pushlp1(
              photos[(5 + sj * 25) % cnt].pic_url,
              photos[(5 + sj * 25) % cnt].thumbs_up,
              photos[(5 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(6 + sj * 25) % cnt].pic_url"
          class="p"
          id="lp7"
          @click="
            pushlp1(
              photos[(6 + sj * 25) % cnt].pic_url,
              photos[(6 + sj * 25) % cnt].thumbs_up,
              photos[(6 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(7 + sj * 25) % cnt].pic_url"
          class="p"
          id="lp8"
          @click="
            pushlp1(
              photos[(7 + sj * 25) % cnt].pic_url,
              photos[(7 + sj * 25) % cnt].thumbs_up,
              photos[(7 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(8 + sj * 25) % cnt].pic_url"
          class="p"
          id="lp9"
          @click="
            pushlp1(
              photos[(8 + sj * 25) % cnt].pic_url,
              photos[(8 + sj * 25) % cnt].thumbs_up,
              photos[(8 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(9 + sj * 25) % cnt].pic_url"
          class="p"
          id="lp10"
          @click="
            pushlp1(
              photos[(9 + sj * 25) % cnt].pic_url,
              photos[(9 + sj * 25) % cnt].thumbs_up,
              photos[(9 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(10 + sj * 25) % cnt].pic_url"
          class="p"
          id="lp11"
          @click="
            pushlp1(
              photos[(10 + sj * 25) % cnt].pic_url,
              photos[(10 + sj * 25) % cnt].thumbs_up,
              photos[(10 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(11 + sj * 25) % cnt].pic_url"
          class="p"
          id="lp0"
          @click="
            pushlp1(
              photos[(11 + sj * 25) % cnt].pic_url,
              photos[(11 + sj * 25) % cnt].thumbs_up,
              photos[(11 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(12 + sj * 25) % cnt].pic_url"
          class="p"
          id="p1"
          @click="
            pushlp1(
              photos[(12 + sj * 25) % cnt].pic_url,
              photos[(12 + sj * 25) % cnt].thumbs_up,
              photos[(12 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(13 + sj * 25) % cnt].pic_url"
          class="p"
          id="rp1"
          @click="
            pushlp1(
              photos[(13 + sj * 25) % cnt].pic_url,
              photos[(13 + sj * 25) % cnt].thumbs_up,
              photos[(13 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(14 + sj * 25) % cnt].pic_url"
          class="p"
          id="rp2"
          @click="
            pushlp1(
              photos[(14 + sj * 25) % cnt].pic_url,
              photos[(14 + sj * 25) % cnt].thumbs_up,
              photos[(14 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(15 + sj * 25) % cnt].pic_url"
          class="p"
          id="rp3"
          @click="
            pushlp1(
              photos[(15 + sj * 25) % cnt].pic_url,
              photos[(15 + sj * 25) % cnt].thumbs_up,
              photos[(15 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(16 + sj * 25) % cnt].pic_url"
          class="p"
          id="rp4"
          @click="
            pushlp1(
              photos[(16 + sj * 25) % cnt].pic_url,
              photos[(16 + sj * 25) % cnt].thumbs_up,
              photos[(16 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(17 + sj * 25) % cnt].pic_url"
          class="p"
          id="rp5"
          @click="
            pushlp1(
              photos[(17 + sj * 25) % cnt].pic_url,
              photos[(17 + sj * 25) % cnt].thumbs_up,
              photos[(17 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(18 + sj * 25) % cnt].pic_url"
          class="p"
          id="rp6"
          @click="
            pushlp1(
              photos[(18 + sj * 25) % cnt].pic_url,
              photos[(18 + sj * 25) % cnt].thumbs_up,
              photos[(18 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(19 + sj * 25) % cnt].pic_url"
          class="p"
          id="rp7"
          @click="
            pushlp1(
              photos[(19 + sj * 25) % cnt].pic_url,
              photos[(19 + sj * 25) % cnt].thumbs_up,
              photos[(19 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(20 + sj * 25) % cnt].pic_url"
          class="p"
          id="rp8"
          @click="
            pushlp1(
              photos[(20 + sj * 25) % cnt].pic_url,
              photos[(20 + sj * 25) % cnt].thumbs_up,
              photos[(20 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(21 + sj * 25) % cnt].pic_url"
          class="p"
          id="rp9"
          @click="
            pushlp1(
              photos[(21 + sj * 25) % cnt].pic_url,
              photos[(21 + sj * 25) % cnt].thumbs_up,
              photos[(21 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(22 + sj * 25) % cnt].pic_url"
          class="p"
          id="rp10"
          @click="
            pushlp1(
              photos[(22 + sj * 25) % cnt].pic_url,
              photos[(22 + sj * 25) % cnt].thumbs_up,
              photos[(22 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(23 + sj * 25) % cnt].pic_url"
          class="p"
          id="rp11"
          @click="
            pushlp1(
              photos[(23 + sj * 25) % cnt].pic_url,
              photos[(23 + sj * 25) % cnt].thumbs_up,
              photos[(23 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
      <router-link to="photo">
        <img
          :src="photos[(24 + sj * 25) % cnt].pic_url"
          class="p"
          id="rp0"
          @click="
            pushlp1(
              photos[(24 + sj * 25) % cnt].pic_url,
              photos[(24 + sj * 25) % cnt].thumbs_up,
              photos[(24 + sj * 25) % cnt].flag
            )
          "
        />
      </router-link>
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
      photos: [
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        { pic_url: sessionStorage.getItem("userimg"), thumbs_up: 1, flag: -1 },
      ],
      imageUrl: "",
      cnt: 1,
      sj: 0,
    };
  },
  methods: {
    pushlp1(pic_url, thumbs_up, flag) {
      this.$router.push({
        path: "/photo",
        query: {
          pic_url: pic_url,
          thumbs_up: thumbs_up,
          flag: flag,
        },
      });
    },
    refresh() {
      //刷新照片墙
      this.sj++;
      // const that = this;
      // this.photos.splice(0, this.photos.length);
      // this.$axios
      //   .get("http://192.168.31.77:8000/scenery/all")
      //   .then(function (response) {
      //     var l = response.data.length - 1;
      //     for (var i = 0; i <= l; i++) {
      //       that.photos.push({
      //         pic_url: response.data[i].pic_url,
      //         thumbs_up: response.data[i].thumbs_up,
      //         flag: response.data[i].flag,
      //       });
      //     }
      //   });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.$message({
        showClose: true,
        message: "上传成功",
        type: "success",
      });
      console.log(this.imageUrl);
    },
    beforeAvatarUpload(file) {
      //在头像上传之前需要做的判断，如判断文件格式
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
    },
  },
  created: function () {
    if (location.href.indexOf("#reloaded") == -1) {
      location.href = location.href + "#reloaded";
      location.reload();
    }
    //展示出照片
    const that = this;
    this.$axios
      .get("http://192.168.31.77:8000/scenery/all")
      .then(function (response) {
        console.log(response.data);
        var l = response.data.length;
        that.cnt = l;
        for (var i = 0; i <= l; i++) {
          that.photos.push({
            pic_url: response.data[i].pic_url,
            thumbs_up: response.data[i].thumbs_up,
            flag: response.data[i].flag,
          });
        }
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
  bottom: -70%;
  width: 100%;
}

.footer p {
  font-size: 12px;
  color: #666;
  text-align: center;
  padding-top: 5px;
}
#left {
  width: 60px;
  height: 60px;
  border: 0px;
  background-color: white;
  margin-left: 100px;
  text-align: center;
}
.el-icon-refresh {
  font-size: 65px;
  color: #a40404;
  margin-left: -4px;
}
#right {
  width: 250px;
  height: 160px;
  float: right;
  margin-right: 100px;
}
#upload {
  width: 250px;
  height: 70px;
  border-radius: 30px;
  font-size: 25px;
  text-align: center;
  line-height: 70px;
  color: white;
  background-color: #a40404;
}
#rank {
  margin-top: 20px;
  width: 250px;
  height: 70px;
  border-radius: 30px;
  font-size: 25px;
  text-align: center;
  line-height: 70px;
  color: white;
  background-color: #a40404;
}
#main {
  width: 300px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  margin-top: 40px;
  color: #a40404;
  font-size: 30px;
  font-weight: 600;
}
#heart {
  margin-top: 15px;
  width: 1500px;
  height: 1070px;
  margin-right: auto;
  margin-left: -1%;
}
.p {
  width: 200px;
  height: 150px;
}
#lp1 {
  margin-left: 250px;
  float: left;
}
#lp2 {
  margin-top: 90px;
  margin-left: -50px;
  float: left;
}
#lp3 {
  margin-top: 130px;
  margin-left: -450px;
  float: left;
}
#lp4 {
  margin-top: 170px;
  margin-left: -300px;
  float: left;
}
#lp5 {
  margin-top: 240px;
  margin-left: -510px;
  float: left;
}
#lp6 {
  margin-top: 350px;
  margin-left: -530px;
  float: left;
}
#lp7 {
  margin-top: 470px;
  margin-left: -480px;
  float: left;
}
#lp8 {
  margin-top: 570px;
  margin-left: -420px;
  float: left;
}
#lp9 {
  margin-top: 670px;
  margin-left: -350px;
  float: left;
}
#lp10 {
  margin-top: 770px;
  margin-left: -260px;
  float: left;
}
#lp11 {
  margin-top: 840px;
  margin-left: -140px;
  float: left;
}
#lp0 {
  margin-left: -120px;
  margin-top: 200px;
  float: left;
}
#p1 {
  margin-left: -110px;
  margin-top: 910px;
  float: left;
}
#rp1 {
  margin-right: 0px;
  float: right;
}
#rp2 {
  margin-top: 90px;
  margin-right: -50px;
  float: right;
}
#rp3 {
  margin-top: 130px;
  margin-right: -450px;
  float: right;
}
#rp4 {
  margin-top: 0px;
  margin-right: 100px;
  float: right;
}
#rp5 {
  margin-top: 110px;
  margin-right: -220px;
  float: right;
}
#rp6 {
  margin-top: 230px;
  margin-right: -170px;
  float: right;
}
#rp7 {
  margin-top: 330px;
  margin-right: -140px;
  float: right;
}
#rp8 {
  margin-top: 430px;
  margin-right: -130px;
  float: right;
}
#rp9 {
  margin-top: 440px;
  margin-right: -200px;
  float: right;
}
#rp10 {
  margin-top: 540px;
  margin-right: -110px;
  float: right;
}
#rp11 {
  margin-top: 610px;
  margin-right: -80px;
  float: right;
}
#rp0 {
  margin-left: -120px;
  margin-top: -850px;
  float: left;
}
</style>