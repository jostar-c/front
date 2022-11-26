

<template>
  <div>
    <!-- 1.top部分start -->
    <div class="top">
      <div class="fzulink">
        <a href="https://ccds.fzu.edu.cn/index.htm" target="_blank">
          福州大学计算机与大数据学院/软件学院
        </a>
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

    <!-- 功能主题 -->

    <div class="top2">
      <div class="top2-ruturn">
        <router-link to="/" title="返回主页"
          >&lt;&nbsp;&nbsp;个人信息主页</router-link
        >
      </div>
    </div>

    <img class="avatar" :src="imageUrl" />

    <div class="message">
      <!-- <p>账号</p> -->

      <form action="#">
        <span>昵称</span>
        <input
          type="search"
          placeholder="请输入您的昵称"
          name="search"
          class="input"
          v-model="uname"
        />
      </form>
      <!-- <form action="#">
        <span>邮箱/手机号码</span>
        <input
          type="search"
          placeholder="请输入您的联系方式"
          name="search"
          class="input"
          v-model="email"
        />
      </form> -->
      <form action="#">
        <span>年级</span>
        <input
          type="search"
          placeholder="请输入您的年级"
          name="search"
          class="input"
          v-model="grade"
        />
      </form>
      <form action="#">
        <span>专业</span>
        <input
          type="search"
          placeholder="请输入您的专业"
          name="search"
          class="input"
          v-model="major"
        />
      </form>
      <form action="#">
        <span>班级</span>
        <input
          type="search"
          placeholder="请输入您的班级"
          name="search"
          class="input"
          v-model="uclass"
        />
      </form>

      <div style="margin-top: 4%">
        <el-button plain type="text" @click="dialogFormVisible = true"
          >修改密码</el-button
        >
        <el-button plain @click="open4"> 提 交 </el-button>
      </div>
    </div>

    <el-dialog
      title="修改密码"
      :visible.sync="dialogFormVisible"
      style="width: 70%; margin-left: 15%"
    >
      <el-form :model="form">
        <el-form-item label="旧密码：" :label-width="formLabelWidth">
          <el-input v-model="oldpassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码：" :label-width="formLabelWidth">
          <el-input v-model="newpassword" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="
            dialogFormVisible = false;
            updatepassword();
          "
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>

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
export default {
  data() {
    return {
      dialogFormVisible: false,
      uid: sessionStorage.getItem("uid"),
      uname: "",
      // email: "",
      grade: "",
      major: "",
      uclass: "",
      imageUrl: sessionStorage.getItem("userimg"),
      oldpassword: "",
      newpassword: "",
    };
  },
  methods: {
    open4() {
      this.$axios
        .post("http://192.168.31.149:8083/user/changeInformation", {
          uid: this.uid,
          newGrade: this.grade,
          newMajor: this.major,
          newClass: this.uclass,
          newNickname: this.uname,
          newAvatar: this.imageUrl,
        })
        .then((response) => {
          if (response.data.result == "0") {
            sessionStorage.setItem("uname", this.uname);
            // sessionStorage.setItem("email", this.email);
            sessionStorage.setItem("grade", this.grade);
            sessionStorage.setItem("major", this.major);
            sessionStorage.setItem("uclass", this.uclass);
            sessionStorage.setItem("userimg", this.imageUrl);
            this.$message({
              showClose: true,
              message: "资料修改成功",
              type: "success",
            });
          } else {
            this.$message({
              showClose: true,
              message: "您填写的资料格式有误或资料没有变更",
              type: "error",
            });
          }
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    updatepassword() {
      this.$axios
        .post("http://192.168.31.149:8083/user/changePassword", {
          uid: this.uid,
          oldPassword: this.oldpassword,
          newPassword: this.newpassword,
        })
        .then((response) => {
          if (response.data.result == "0")
            this.$message({
              showClose: true,
              message: "密码更改成功",
              type: "success",
            });
          else
            this.$message({
              showClose: true,
              message: "旧密码不匹配",
              type: "error",
            });
          console.log(response, this.oldpassword, this.newpassword);
        })
        .catch((err) => {
          console.log(err);
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
</script>
          
          <style>
* {
  margin: 0;
  padding: 0;
}

.avatar-uploader .el-upload {
  margin-top: 70px;
  margin-left: 149px;
  width: 100px;
  height: 100px;
  border: 1px dashed #686363;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #393837;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
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

body {
  /*margin-bottom: 100px */
  /* size: 100px auto; */
  /* font-family: sans-serif; */
  background-image: url(../../static/personalpage-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.top2 {
  float: left;
  width: 100%;
  height: 30px;
  background-color: #ffffff;
  margin-top: -10px;
  padding-left: 10px;
  padding-top: 5px;
}

.top2-return {
  float: left;
  color: #a40404;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: 100% 100%;
  background-repeat: none;
  background-color: rgb(161, 163, 223);
  top: 230px;
  left: 150px;
  position: absolute;
}

.message {
  width: 800px;
  height: 470px;
  background-color: rgba(243, 242, 248, 0.758);
  top: 230px;
  left: 290px;
  position: absolute;
  text-align: center;
}

.message span {
  font-size: 20px;
}
.input {
  display: table-cell;
  width: 400px;
  height: 30px;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  text-align: center;
  margin-top: 50px;
}

.input:placeholder-shown {
  font-size: 16px;
}

.message button {
  margin-top: 20px;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 30px 30px 30px 30px;
  background-color: #ffffff;
  color: #a40404;
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 70px;
}

/* footer 模块 */

.footer {
  height: 40px;
  background-color: #bfbfbfb7;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.footer p {
  font-size: 12px;
  color: rgb(83, 82, 82);
  text-align: center;
  padding-top: 5px;
}
</style>