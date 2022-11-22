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
    <!-- 搜索模块 -->
    <div class="container">
      <div class="block">
        <el-date-picker
          v-model="value_g"
          type="year"
          placeholder="请选择年级"
          format="yyyy 届"
          value-format="yyyy"
          style="margin-top: 3%"
        >
        </el-date-picker>
        <el-select
          v-model="value_s"
          placeholder="请选择专业"
          style="margin-top: 3%"
        >
          <el-option
            v-for="item in subject"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
        <el-select
          v-model="value_c"
          placeholder="请选择班级"
          style="margin-top: 3%"
        >
          <el-option
            v-for="item in classno"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
        <span @click="searchclass()">
          <img
            src="../../static/5_class_search/button.png"
            alt=""
            class="search"
          />
        </span>
      </div>
    </div>

    <div style="margin-top: 4%">
      <span style="color: red; margin-left: 6%">搜索结果</span>
      <el-divider></el-divider>
    </div>

    <div
      v-if="showclass && value[0] != '' && value[1] != '' && value[2] != ''"
      width="50%"
      top="10%"
    >
      <i class="dotClass"></i>
      <span style="margin-left: 2%; color: red" @click="openclass()">
        {{ value[0] }}届{{ value[1] }}{{ value[2] }}
      </span>
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
      value: [],
      showclass: false,
      subject: ["计算机类", "软件工程", "大数据", "信息安全", "人工智能"],
      classno: ["1班", "2班", "3班", "4班", "5班", "6班", "7班", "8班", "9班"],
      value_g: "",
      value_s: "",
      value_c: "",
    };
  },
  methods: {
    searchclass() {
      this.value[0] = this.value_g;
      this.value[1] = this.value_s;
      this.value[2] = this.value_c;
      this.showclass = false;
      this.showclass = true;
      console.log(this.value);
    },
    openclass() {
      this.$router.push({
        path: "/inclass",
        query: {
          value: this.value,
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
  width: 18px;
  height: 18px;
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

.dotClass {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 90px;
  background-color: red;
  display: inline-block;
}
</style>