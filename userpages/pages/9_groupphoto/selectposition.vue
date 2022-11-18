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
      <p>请选择您想放置的位置</p>
      </div>

    <div class="information">
      <div class="selfid"><p>参与合照人员: 浪花朵朵</p></div>
      <div class="addsomeone">
        <p>邀请好友  <i class="el-icon-circle-plus"></i></p>
      </div>
    </div>

      <div class="temp">
          <router-link to="bigevent"><img src="../../static/bg.png" alt="" width="1020px" height="auto" /></router-link>
      </div>

      <div class="footerBtn">
    <el-button @click="dialogVisible=true">上传头像</el-button>
    <!-- 弹出层-裁剪 -->
    <el-dialog title="编辑头像" :visible.sync="dialogVisible" :before-close="handleClose">
      <span>
        <el-row>
          <input
            ref="filElem"
            type="file"
            id="uploads"
            accept="image/png, image/jpeg, image/gif, image/jpg"
            @change="uploadImg($event,1)"
            class="el-button hide"
            style="margin-bottom:15px"
          />
          <div class="upload-img" @click="clickUpload">点击上传图片</div>
        </el-row>
        <el-row>
          <el-col :span="14">
            <!-- 裁剪 -->
            <vueCropper
              style="width:100%;height:300px"
              ref="cropper"
              :img="attach.customaryUrl"
              :autoCrop="options.autoCrop"
              :fixedBox="options.fixedBox"
              :canMoveBox="options.canMoveBox"
              :autoCropWidth="options.autoCropWidth"
              :autoCropHeight="options.autoCropHeight"
              :centerBox="options.centerBox"
              @realTime="realTime"
            ></vueCropper>
          </el-col>
          <el-col :span="6.5">
            <h2 align="center" class=" mar-left-50">头像预览</h2>
            <div class="show-preview">
              <div :style="previews.div" class="preview">
                <img :src="previews.url" :style="previews.img" width="100%" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="footerBtn" align="center">
          <el-button type="primary " size="medium" round @click="confirm('blob')"><router-link to="show">确认</router-link></el-button>
          <el-button type="info" size="medium" round @click="handleClose">取消</el-button>
        </el-row>
      </span>
    </el-dialog>
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
      
      <!-- <script>
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
</script> -->

<script>
//数据库里需要存两份图片地址，一张为原图地址，一张为裁剪后的头像地址
export default {
  data() {
    return {
      dialogVisible: false,
      options: {
        autoCrop: true, //默认生成截图框
        fixedBox: true, //固定截图框大小
        canMoveBox: false, //截图框不能拖动
        centerBox: false, //截图框被限制在图片里面
        autoCropWidth:200,  //截图框宽度
        autoCropHeight:200, //截图框高度        
      },
      previews: {}, //实时预览图数据
      attach: {
        //后端附件表
        id: "",
        userId: "",
        customaryUrl: "", //原图片路径
        laterUrl: "", //裁剪后图片路径  /static/logo.png
        attachType: "photo" //附件类型
      },
    };
  },
  methods: {
    //控制弹出层关闭
    handleClose() {
      this.dialogVisible = false;
    },
    //实时预览
    realTime(data) {
      this.previews = data;
    },
    //点击图片调取input
    clickUpload(){
      this.$refs.filElem.dispatchEvent(new MouseEvent('click')) 
    },
    //选择本地图片
    uploadImg(e, num) {
      var file = e.target.files[0];
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        this.$message.error("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      //fileReader 接口，用于异步读取文件数据
      var reader = new FileReader();
      reader.readAsDataURL(file); //重要 以dataURL形式读取文件
      reader.onload = e => {
        // data = window.URL.createObjectURL(new Blob([e.target.result])) 转化为blob格式
        let data = e.target.result;
        this.attach.customaryUrl = data;
        // 转化为base64
        // reader.readAsDataURL(file)
        // 转化为blob
      };
    },
    //确认截图,上传
    confirm(type) {
      this.$refs.cropper.getCropData(res => {
        console.log(res)//这里截图后的url 是base64格式 让后台转下就可以
        
      });
    }
  }
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

.information{
  height: 30px;
  margin-top: 0px;
  background-color: #fff;
}

.selfid{
  float: left;
  font-size: 15px;
  padding-top: 5px;
  color:rgb(0, 0, 0)
}

.addsomeone{
  float: right;
  font-size: 15px;
  padding-top: 5px;
  color:rgb(0, 0, 0)
}

.temp{
  float: left;
} 

.footerBtn button{
  float: left;
  margin-top: 235px;
  margin-left: 20px;
  color: #a40404;
}

.el-dialog{
  width: 1200px !important;
  height: auto;
}
.show-preview {
  display: flex;
  justify-content: center;
}
.preview {
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #cccccc;
  background: #cccccc;
  width: 150px !important;
  height: 150px !important;
  margin-left: 50px;
  margin-top: 50px;
}
.upload-img{
  width: 100px;
  height: 30px;
  border:1px solid #f08512;
  margin-bottom: 5px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
}
.footerBtn {
  display: flex;
  justify-content: center;
  margin-top: 0px;
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