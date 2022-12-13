<template>
  <div>
    <!-- 2.banner部分start -->
    <div class="banner">
      <!-- logo部分 -->

      <div class="logo">
        <img src="../../static/logo.png" width="36px" height="auto" />
      </div>

      <div>
        <p>
          福州大学计算机与大数据学院
          <br />
          /软件学院院庆管理系统
        </p>
      </div>

      <div class="out">
        <router-link to="/">
          <img src="../../static/out.png" width="24px" height="auto" />
        </router-link>
      </div>
    </div>

    <div class="w">
      <!-- 左侧模块 -->
      <div class="subnav">
        <ul>
          <li>
            <router-link to="#">首页<span>&gt;</span></router-link>
          </li>
          <li>
            <router-link to="uesr_manage"
              >用户账号管理 <span>&gt;</span></router-link
            >
          </li>
          <!-- <li>
            <router-link to="comments_manage"
              >留言评论审核 <span>&gt;</span></router-link
            >
          </li> -->
          <li>
            <router-link to="photo_manage"
              >上传图片审核 <span>&gt;</span></router-link
            >
          </li>
          <!-- <li>
            <router-link to="groupphoto_manage"
              >合影模板管理 <span>&gt;</span></router-link>
          </li> -->
          <li>
            <router-link to="class_manage"
              >班级信息管理 <span>&gt;</span></router-link
            >
          </li>
          <li>
            <router-link to="map_manage"
              >地图活动信息更新 <span>&gt;</span></router-link
            >
          </li>
          <li>
            <router-link to="Live_manage"
              >直播跳转链接管理 <span>&gt;</span></router-link
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- 主功能区 -->
    <div class="no1">
      <div class="browse">
        <div class="browse-pic">
          <img src="../../static/eye.png" width="80px" height="auto" />
        </div>
        <div>
          <p>今日浏览量</p>
        </div>
        <!-- <div class="num1">
              <b>53</b>
            </div> -->
      </div>

      <div class="user">
        <div class="user-pic">
          <img src="../../static/people.png" width="80px" height="auto" />
        </div>
        <div>
          <p>今日新增用户</p>
        </div>
        <!-- <div class="num2">
              <b>16</b>
            </div> -->
      </div>

      <div class="browse5" style="width: 1074px; height: 40px">
        <p>近五日浏览量</p>
        <div
          id="chart"
          style="
            width: 100%;
            height: 240px;
            float: left;
            margin-top: 0px;
            margin-left: 0px;
            background-color: rgb(255, 255, 255);
            box-shadow: rgb(195, 195, 200) 2px 2px 2px 2px;
          "
        ></div>
      </div>

      <div class="entrance">
        <p>待处理快捷入口</p>
      </div>

      <div class="entrance-content">
        <div class="news">
          <router-link to="comments_manage">
            <img src="../../static/news.png" width="50px" height="auto" />
            <p>待审核留言、评论</p></router-link
          >
        </div>
        <div class="picture">
          <router-link to="photo_manage">
            <img src="../../static/picture.png" width="47px" height="auto" />
            <p>待审核图片</p>
          </router-link>
        </div>
        <div class="one-person">
          <router-link to="uesr_manage">
            <img src="../../static/one person.png" width="44px" height="auto" />
            <p>待审核用户账号</p></router-link
          >
        </div>
        <div class="money">
          <router-link to="map_manage">
            <img src="../../static/money.png" width="36px" height="auto" />
            <p>活动信息更新</p></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
      
<script>
export default {
  name: "browse5",
  data() {
    return {
      chart: "",
    };
  },
  mounted: function () {
    this.drawLine1();
  },
  methods: {
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = this.$echarts.init(document.getElementById("chart"));
      // 绘制图表
      this.chart.setOption({
        title: {
          text: "", // 主标题
          subtext: "", // 副标题
          x: "left", // x轴方向对齐方式
        },
        tooltip: {
          trigger: "axis", // axis   item   none三个值
        },
        xAxis: {
          type: "category", // 还有其他的type，可以去官网喵两眼哦
          data: ["11.1", "11.2", "11.3", "11.4", "11.5"], // x轴数据
          name: "", // x轴名称
          // x轴名称样式
          // nameTextStyle: {
          //   fontWeight: 600,
          //   fontSize: 18
          // }
        },
        yAxis: {
          type: "value",
          name: "浏览量", // y轴名称
          // y轴名称样式
          // nameTextStyle: {
          //   fontWeight: 600,
          //   fontSize: 18
          // }
        },
        legend: {
          orient: "vertical",
          x: "center",
          y: "top",
          data: ["浏览量"],
        },
        series: [
          {
            name: "浏览量",
            data: [50, 48, 52, 45, 53],
            type: "line",
          },
        ],
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.myAgent {
  height: 500px;
}

.about {
  margin-top: -150px;
}

.banner {
  height: 40px;
  background-color: #90c2de;
  position: fixed;
  z-index: 1000;
  right: 0;
  bottom: 0;
  left: 0px;
  top: 0px;
  width: 100%;
}
.banner p {
  float: left;
  color: rgb(61, 145, 213);
  font-size: 12px;
  margin-left: -150px;
  padding-top: 5px;
}
.logo {
  margin-top: 2px;
  margin-left: 10px;
  float: left;
  width: 198px;
  height: 42px;
}
.out {
  margin-top: 9px;
  margin-right: -18px;
  float: right;
  width: 50px;
  height: 100px;
}
.w {
  width: 1600px;
  margin: auto;
}

/*边栏*/
.subnav {
  margin-top: 30px;
  float: left;
  width: 165px;
  height: 100%;
  background-color: #090f57e4;
  position: fixed;
}

.now {
  color: aqua;
}

.subnav ul li {
  text-align: center;
  font-size: 24px;
  height: 42px;
  line-height: 60px;
  padding-left: 15px;
  padding-right: 10px;
}

.subnav ul li p {
  font-size: 14px;
  color: #fff;
}

.subnav ul li a {
  font-size: 14px;
  color: #fff;
}
.subnav ul li a:hover {
  color: #00a4ff;
}
body {
  background-color: #d3dae1;
  height: 800px;
  position: relative;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.header {
  height: 800px;
  margin: 30px auto;
}

.no1 {
  float: left;
  margin-left: 180px;
  margin-top: 55px;
  background: #ffffff;
  width: 1190px;
  height: 745px;
}

.browse {
  float: left;
  margin-left: 55px;
  margin-top: 35px;
  background: #ffffff;
  width: 490px;
  height: 120px;
  box-shadow: rgb(195, 195, 200) 2px 2px 2px 2px;
}

.browse-pic {
  margin-top: 30px;
  margin-left: 30px;
}

.browse p {
  float: left;
  font-size: 15px;
  color: #acafb1;
  margin-left: 130px;
  margin-top: -75px;
}

.user {
  float: left;
  margin-left: 90px;
  margin-right: 35px;
  margin-top: 35px;
  background: #ffffff;
  width: 490px;
  height: 120px;
  box-shadow: rgb(195, 195, 200) 2px 2px 2px 2px;
}

.user-pic {
  margin-top: 30px;
  margin-left: 30px;
}

.user p {
  float: left;
  font-size: 15px;
  color: #acafb1;
  margin-left: 130px;
  margin-top: -90px;
}

.num1 {
  font-size: 40px;
  color: #0a0a0a;
  margin-top: 40px;
}

.num2 {
  font-size: 40px;
  color: #0a0a0a;
  left: 100px;
}

.browse5 {
  width: 1074px;
  height: 40px;
  margin-top: 30px;
  margin-left: -65px;
  box-shadow: rgb(195, 195, 200) 2px 2px 2px 2px;
  background-color: rgb(235, 234, 234);
  position: absolute;
  top: 230px;
  left: 300px;
}

.browse5 p {
  margin-bottom: 10px;
  margin-left: 15px;
  font-size: 25px;
  color: #90c2de;
}

.chart {
  margin-top: 0;
  margin-left: -65px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(195, 195, 200) 2px 2px 2px 2px;
  position: absolute;
  top: 280px;
  left: 300px;
}

.entrance {
  width: 1074px;
  height: 40px;
  margin-top: 360px;
  margin-left: -65px;
  box-shadow: rgb(195, 195, 200) 2px 2px 2px 2px;
  background-color: rgb(235, 234, 234);
  position: absolute;
  top: 230px;
  left: 300px;
}

.entrance p {
  margin-bottom: 10px;
  margin-left: 15px;
  font-size: 25px;
  color: #90c2de;
}

.entrance-content {
  width: 1074px;
  height: 120px;
  margin-top: 354px;
  margin-left: -65px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(195, 195, 200) 2px 2px 2px 2px;
  position: absolute;
  top: 280px;
  left: 300px;
}

.news {
  float: left;
  margin-top: 30px;
  margin-left: 120px;
}

.news p {
  margin-left: -32px;
  color: #0a0a0a;
}
.picture {
  float: left;
  margin-top: 32px;
  margin-left: 200px;
}

.picture p {
  margin-left: -15px;
  margin-top: 8px;
  color: #0a0a0a;
}

.one-person {
  float: left;
  margin-top: 30px;
  margin-left: 200px;
}

.one-person p {
  margin-left: -34px;
  margin-top: 5px;
  color: #0a0a0a;
}

.money {
  float: left;
  margin-top: 30px;
  margin-left: 200px;
}

.money p {
  margin-left: -32px;
  margin-top: 2px;
  color: #0a0a0a;
}
</style>