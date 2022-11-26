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
    <div class="return">
      <router-link to="groupphoto"
        ><p><i class="el-icon-arrow-left"></i>返回选择模板</p></router-link
      >
    </div>

    <div class="temp">
      <canvas width="800" height="550" id="canvas"></canvas>
    </div>
    <!-- <div class="downloadbtn"><el-button @click="downloadImage">下载照片</el-button></div> -->

    <div class="avatarbtn">
      <el-button @click="dialogVisible = true">上传头像</el-button>

      <!-- 弹出层-裁剪 -->
      <el-dialog
        title="编辑头像"
        :visible.sync="dialogVisible"
        :before-close="handleClose"
      >
        <span>
          <el-row>
            <input
              ref="filElem"
              type="file"
              id="uploads"
              accept="image/png, image/jpeg, image/gif, image/jpg"
              @change="uploadImg($event, 1)"
              class="el-button hide"
              style="margin-bottom: 15px"
            />
            <div class="upload-img" @click="clickUpload">点击上传图片</div>
          </el-row>
          <el-row>
            <el-col :span="14">
              <!-- 裁剪 -->
              <vueCropper
                style="width: 100%; height: 400px"
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
              <h2 align="center" class="mar-left-50">头像预览</h2>
              <div class="show-preview">
                <div :style="previews.div" class="preview">
                  <img :src="previews.url" :style="previews.img" width="100%" />
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row class="confirmBtn" align="center">
            <el-button
              type="primary "
              size="medium"
              round
              @click="confirm('blob')"
              >确认</el-button
            >
            <el-button type="info" size="medium" round @click="handleClose"
              >取消</el-button
            >
          </el-row>
        </span>
      </el-dialog>
    </div>
    <div
      ref="delBtn"
      style="
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 10;
        display: none;
        padding: 4px 8px;
        background-color: #fff;
      "
      @click="delEl"
    >
      删除
    </div>

    <div class="downloadbtn">
      <el-button @click="downloadImage">下载照片</el-button>
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
import { fabric } from "fabric";
export default {
  data() {
    return {
      userimg: sessionStorage.getItem("userimg"),
      backgroundImage: "",
      canvasHeight: 0,
      dialogVisible: false,
      options: {
        autoCrop: true, //默认生成截图框
        fixedBox: true, //固定截图框大小
        canMoveBox: false, //截图框不能拖动
        centerBox: false, //截图框被限制在图片里面
        autoCropWidth: 200, //截图框宽度
        autoCropHeight: 200, //截图框高度
      },
      previews: {}, //实时预览图数据
      attach: {
        //后端附件表
        id: "",
        userId: "",
        customaryUrl: "", //原图片路径
        laterUrl: "", //裁剪后图片路径  /static/logo.png
        attachType: "photo", //附件类型
      },
      fabricInstance: null,
    };
  },
  mounted() {
    //现在用的是本地图片，后期可以通过传递图片url为参数的方式来动态修改背景图
    this.initCanvas(this.backgroundImage);
  },
  methods: {
    goTopersonalpage() {
      if (this.islogin == 0) this.$router.push("/login");
      else this.$router.push("/personalpage");
    },
    getquery() {
      this.backgroundImage = this.$route.query.imgurl;
    },
    delEl() {
      console.log(4);
    },
    //参数背景图片地址
    initCanvas(backgroundImage) {
      // 设置背景图
      // 参数1：背景图资源（可以引入本地，也可以使用网络图）
      // 参数2：设置完背景图执行以下重新渲染canvas的操作，这样背景图就会展示出来了
      const backgroundImageEl = document.createElement("img");
      backgroundImageEl.src = backgroundImage;
      backgroundImageEl.onload = () => {
        // const rate = 1020 / backgroundImageEl.width;
        // this.canvasHeight = backgroundImageEl.height * rate;
        this.$nextTick(() => {
          this.fabricInstance = new fabric.Canvas("canvas");
          // this.fabricInstance = new fabric.Canvas('canvas',{
          //   fireRightClick: true, // 启用右键，button的数字为3
          //   stopContextMenu: true,
          // })
          // this.fabricInstance.on('mouse:down', this.canvasOnMouseDown)
          // this.fabricInstance.on('mouse:down', this.canvasOnMouseDown)
          this.setCanvasBackgroundImage(backgroundImage, backgroundImageEl);
        });
      };
    },
    // canvasOnMouseDown(opt) {
    //   const delBtn = this.$refs.delBtn
    //   // 判断：右键，且在元素上右键
    //   // opt.button: 1-左键；2-中键；3-右键
    //   // 在画布上点击：opt.target 为 null
    //   if (opt.button === 3 && opt.target) {
    //     console.log(opt)
    //     // 获取当前元素
    //     let activeEl = opt.target
    //     opt.e.preventDefault()
    //     delBtn.style.display = 'block'
    //     delBtn.style.top = opt.e.pageY + 'px'
    //     delBtn.style.left = opt.e.pageX + 'px'
    //   } else {
    //     delBtn.style.display = 'none'
    //     // hiddenMenu()
    //   }
    // },
    setCanvasBackgroundImage(backgroundImage, backgroundImageEl) {
      this.fabricInstance.setBackgroundImage(
        backgroundImage,
        this.fabricInstance.renderAll.bind(this.fabricInstance),
        {
          scaleX: 800 / backgroundImageEl.width,
          scaleY: 550 / backgroundImageEl.height,
        }
      );
    },
    //控制弹出层关闭
    handleClose() {
      this.dialogVisible = false;
    },
    //实时预览
    realTime(data) {
      this.previews = data;
    },
    //点击图片调取input
    clickUpload() {
      this.$refs.filElem.dispatchEvent(new MouseEvent("click"));
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
      reader.onload = (e) => {
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
      this.$refs.cropper.getCropData((res) => {
        console.log(res); //这里截图后的url 是base64格式 让后台转下就可以
        const imgElement = document.createElement("img");
        imgElement.src = res;
        imgElement.onload = () => {
          let imgInstance = new fabric.Image(imgElement, {
            left: 100,
            top: 100,
            width: 200,
            height: 200,
            clipPath: new fabric.Circle({
              radius: 100,
              originX: "center",
              originY: "center",
            }),
          });
          this.fabricInstance.add(imgInstance);
          this.dialogVisible = false;
        };
      });
    },
    downloadImage() {
      if (!this.fabricInstance) {
        return;
      }
      console.log(this.fabricInstance);
      const url = this.fabricInstance.toDataURL("png");
      const a = document.createElement("a");
      a.href = url;
      a.download = "保存图片";
      // 触发a链接点击事件，浏览器开始下载文件
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
  },
  created: function () {
    if (location.href.indexOf("#reloaded") == -1) {
      location.href = location.href + "#reloaded";
      location.reload();
    }
    this.getquery();
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

.return {
  height: 40px;
  margin-top: -44px;
  background-color: #a40404;
}

.return p {
  font-size: 20px;
  padding-top: 5px;
  color: #fff;
}
.select p {
  text-align: center;
  font-size: 20px;
  padding-top: 5px;
  color: #fff;
}

.selfid {
  float: left;
  font-size: 15px;
  padding-top: 5px;
  color: rgb(0, 0, 0);
}

.addsomeone {
  float: right;
  font-size: 15px;
  padding-top: 5px;
  color: rgb(0, 0, 0);
}

.temp {
  float: left;
  margin-top: 40px;
  margin-left: 120px;
}

.el-dialog {
  width: 1200px !important;
  height: 650px;
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
.upload-img {
  width: 100px;
  height: 30px;
  border: 1px solid #f08512;
  margin-bottom: 5px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
}

.confirmBtn {
  z-index: 1;
  display: flex;
  justify-content: center;
  margin-top: -270px;
  margin-left: -200px;
}

.avatarbtn button {
  /* float: left; */
  margin-top: 170px;
  margin-left: 155px;
  color: #a40404;
  box-shadow: 2px 2px 2px 2px rgba(102, 102, 102, 0.653);
}

.downloadbtn button {
  float: left;
  margin-top: 200px;
  margin-left: 155px;
  color: #a40404;
  box-shadow: 2px 2px 2px 2px rgba(102, 102, 102, 0.653);
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