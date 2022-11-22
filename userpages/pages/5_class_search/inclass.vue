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
    <el-page-header
      @back="goBack"
      :content="`${value[0]}届${value[1]}${value[2]}`"
      style="margin-top: 1%; margin-left: 3%"
    >
    </el-page-header>
    <span class="inclass" v-if="isinclass"> 已加入班级 </span>
    <span class="notinclass" @click="joinclassVisible = true" v-else>
      <img src="../../static/5_class_search/add.png" alt="" />
      加入班级
    </span>
    <el-dialog
      :title="value[0] + '届' + value[1] + value[2]"
      :visible.sync="joinclassVisible"
      width="25%"
      top="15%"
      center
    >
      <el-form
        :model="form"
        style="margin-left: -10%; margin-right: 10%; margin-top: 4%"
      >
        <el-form-item label="姓名:" :label-width="formLabelWidth">
          <el-input
            v-model="uname"
            autocomplete="off"
            placeholder="请输入姓名"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="学号:" :label-width="formLabelWidth">
          <el-input
            v-model="usno"
            autocomplete="off"
            placeholder="请输入学号"
            clearable
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="joinclassVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="
            joinclassVisible = false;
            joinclass();
          "
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <el-divider></el-divider>

    <span class="Slist">同学列表</span>
    <span class="Cmessage">班级简介</span>

    <div style="margin-top: 1%">
      <div
        class="infinite-list-wrapper"
        style="overflow: auto; display: inline-block"
      >
        <ul
          class="list"
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled"
        >
          <li
            v-for="i in count"
            :key="i"
            class="list-item"
            @click="isinclass && showclassmate(i - 1)"
          >
            <img
              :src="smessage[i - 1].imglink"
              style="display: inline-block; margin-top: 3%; margin-left: 4%"
            />
            <span
              style="
                display: flex;
                margin-left: 30%;
                margin-top: -20%;
                font-size: 22px;
              "
            >
              {{ smessage[i - 1].sname }} <br />
              {{ smessage[i - 1].sno }}
            </span>
          </li>
        </ul>
        <el-row
          style="height: 60px"
          v-if="loading"
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.3)"
        ></el-row>
        <p v-if="noMore">没有更多了</p>
      </div>
      <div class="class_message" style="overflow: auto">
        这是{{ value[0] }}届{{ value[1] }}{{ value[2] }}的班级，欢迎各位老同学。
      </div>
    </div>
    <el-dialog
      :visible.sync="showclassmateVisible"
      width="32%"
      top="7%"
      class="classmate"
    >
      <img :src="classmate.imglink" alt="" />
      <p>
        <b>昵称：&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</b>{{ classmate.userid }}
      </p>
      <p><b>邮箱/电话：&emsp;&emsp;&emsp;</b>{{ classmate.email }}</p>
      <p>
        <b>年级：&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</b>{{ classmate.grade }}
      </p>
      <p>
        <b>专业：&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</b>{{ classmate.subject }}
      </p>
      <p>
        <b>班级：&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</b>{{ classmate.class }}
      </p>
    </el-dialog>

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
          
  <script >
// const axios = require("axios");
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
      value: [],
      // classvalue: {
      //   umajor: this.value[1],
      //   grade: this.value[0],
      //   uclass: this.value[2],
      // },
      isinclass: false,
      joinclassVisible: false,
      formLabelWidth: "120px",
      uname: "",
      usno: "",
      showclassmateVisible: false,
      smessage: [
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
        {
          imglink: "",
          sname: "",
          sno: "",
        },
      ],
      classmate: {
        imglink: "",
        userid: "",
        email: "",
        grade: "",
        subject: "",
        class: "",
      },
      sum: 0,

      count: 10,
      loading: false,
    };
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 1000);
    },

    getquery() {
      this.value = this.$route.query.value;
    },
    goBack() {
      this.$router.push({ path: "/class_search" });
    },

    joinclass() {
      this.isinclass = true; ////////////////////////////////////////////////////////////////////
      // 改为向后端传送用户信息，包括头像学号姓名，并加入smessage
      this.$axios
        .post("http://192.168.43.207:8081/user/classSelect/classUserList", {
          umajor: this.value[1],
          grade: this.value[0],
          uclass: this.value[2],
          uid: sessionStorage.getItem("uid"),
          sno: this.usno,
          realname: this.uname,
        })
        .then((response) => {
          this.smessage[this.sum].imglink = sessionStorage.getItem("userimg");
          this.smessage[this.sum].sname = this.uname;
          this.smessage[this.sum].sno = this.usno;
          console.log(this.smessage[this.sum]);
          this.sum++;
          console.log(response);
        })
        .catch((err) => {
          console.log("post失败");
          console.log(err);
        });
    },

    showclassmate(i) {
      // 改为向后端传送this.smessage[i].sno,请求该用户信息赋给classmate
      this.classmate.imglink = this.smessage[i].imglink;

      this.classmate.userid = "浪花朵朵";
      this.classmate.email = this.smessage[i].sno + "@qq.com";
      this.classmate.grade = "2020";
      this.classmate.subject = "计算机科学与技术";
      this.classmate.class = "3班";

      this.showclassmateVisible = true;
    },
  },
  created() {
    if (location.href.indexOf("#reloaded") == -1) {
      location.href = location.href + "#reloaded";
      location.reload();
    }
    this.getquery();
    // 改为向后端传送value（年级，专业，班级）与用户账户后后端返回该班级的班级信息（用户是否加入班级与同学信息，包括头像学号姓名）
    this.$axios
      .post("http://192.168.43.207:8081/user/classSelect/classUserList", {
        uid: sessionStorage.getItem("uid"),
        umajor: this.value[1],
        grade: this.value[0],
        uclass: this.value[2],
      })
      .then((response) => {
        this.sum = response.data.count * 1;
        for (var i = 0; i < this.sum; i++) {
          this.smessage[i].sno = response[i + 1].key;
          this.smessage[i].sname = response[i + 1].value;
        }
        console.log(response);
      })
      .catch((err) => {
        console.log("post失败");
        console.log(err);
      });

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.sum = 20;
    for (i = 0; i < this.sum; i++) {
      this.smessage[i].imglink = "../../static/userimg.png";
      this.smessage[i].sname = "czh";
      this.smessage[i].sno = "03200230" + i;
      console.log(this.smessage[i]);
    }
    console.log(this.value);
    // this.isinclass = true;
  },

  computed: {
    noMore() {
      return this.count >= this.sum;
    },
    disabled() {
      return this.loading || this.noMore;
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

.Slist {
  margin-top: 2%;
  margin-left: 10%;
  font-size: 22px;
  color: #a40404;
}

.Cmessage {
  margin-top: 2%;
  margin-left: 52%;
  font-size: 22px;
  color: #a40404;
}

.infinite-list-wrapper {
  width: 55%;
  margin-left: 10%;
  height: 560px;
  border: 1px solid rebeccapurple;
}

.list {
  width: 100%;
}

.list li {
  height: 120px;
  width: 47%;
  margin: 6px;
  list-style: decimal;
  /*解决图块不能同行显示*/
  display: inline-block;
}

.infinite-list-wrapper p {
  text-align: center;
}

.class_message {
  width: 22%;
  margin-left: 68%;
  margin-top: -37.25%;
  height: 300px;
  border: 1px solid rebeccapurple;
  font-size: 20px;
  text-indent: 2em;
}

.inclass {
  display: flex;
  margin-left: 90%;
  margin-top: -1.7%;
  font-size: 22px;
  color: rgba(220, 20, 60, 0.5);
}
.notinclass {
  display: flex;
  margin-left: 90%;
  margin-top: -1.7%;
  font-size: 23px;
  color: crimson;
}
.classmate img {
  margin-top: -8%;
  margin-left: 40%;
}
.classmate p {
  margin: 10%;
  margin-left: 10%;
  font-size: 18px;
}
</style>