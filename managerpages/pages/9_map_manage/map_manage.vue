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
      <!-- 左侧subnav模块 -->
      <div class="subnav">
        <ul>
          <li>
            <router-link to="homepage">首页 <span>&gt;</span></router-link>
          </li>
          <li>
            <router-link to="uesr_manage"
              >用户账号管理 <span>&gt;</span></router-link
            >
          </li>
          <li>
            <router-link to="comments_manage"
              >留言评论审核 <span>&gt;</span></router-link
            >
          </li>
          <li>
            <router-link to="photo_manage"
              >上传图片审核 <span>&gt;</span></router-link
            >
          </li>
          <!-- <li>
            <router-link to="groupphoto_manage"
              >合影模板管理 <span>&gt;</span></router-link
            >
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
      <!-- 主功能区 -->
      <div class="main">
        <div class="map">
          <el-button
            @click="open(1)"
            style="
              background-color: unset;
              border: none;
              height: 7%;
              width: 4%;
              margin-left: 61%;
              margin-top: 16%;
            "
          ></el-button>

          <el-button
            @click="open(0)"
            style="
              background-color: unset;
              border: none;
              height: 14%;
              width: 9%;
              margin-top: 21%;
              margin-left: -2.5%;
            "
          ></el-button>

          <el-button
            @click="open(2)"
            style="
              background-color: unset;
              border: none;
              height: 10%;
              width: 7%;
              margin-top: 42%;
              margin-left: -1%;
            "
          ></el-button>

          <el-button
            @click="open(3)"
            style="
              background-color: unset;
              border: none;
              height: 8%;
              width: 6%;
              margin-top: 16%;
              margin-left: -5%;
            "
          ></el-button>

          <el-button
            @click="open(4)"
            style="
              background-color: unset;
              border: none;
              height: 8%;
              width: 8%;
              margin-top: 11%;
              margin-left: -1%;
            "
          ></el-button>
        </div>
      </div>
    </div>
  </div>
</template>
      
<script>
export default {
  data() {
    return {
      events: [
        {
          address: "图书馆",
          event: "暂无",
        },
        {
          address: "中楼",
          event: "暂无",
        },
        {
          address: "福友阁",
          event: "演唱会",
        },
        {
          address: "东三",
          event: "暂无",
        },
        {
          address: "文楼",
          event: "暂无",
        },
      ],
    };
  },
  methods: {
    open(id) {
      this.$prompt(
        "目前该区域举行的活动：" + this.events[id].event,
        this.events[id].address,
        {
          confirmButtonText: "确定更改",
          cancelButtonText: "取消更改",
          center: true,
        }
      )
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "当前" + this.events[id].address + "活动更改为: " + value,
          });
          this.events[id].event = value;
          this.change(id);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消更改活动",
          });
        });
    },
    change(id) {
      console.log(
        "将id对应的活动更改传给后端" +
          id +
          this.events[id].address +
          this.events[id].event
      );
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
.subnav ul li {
  text-align: center;
  font-size: 24px;
  height: 42px;
  line-height: 60px;
  padding-left: 15px;
  padding-right: 10px;
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

/* sidebar 侧边栏区域 */
.sidebar {
  width: 450px;
  height: 175px;
  background-color: #fff;
  position: absolute;
  top: 50px;
  left: 300px;
}
.sidebar ul {
  padding: 25px;
}
.sidebar ul li {
  margin-bottom: 30px;
  font-size: 25px;
}
.sidebar ul li a:hover {
  background-color: aqua;
  color: #00a4ff;
}
.main {
  margin-top: 40px;
  margin-left: 165px;
  width: 100%;
  height: 100%;
  float: right;
  position: fixed;
}
.map {
  margin-top: 2%;
  background: url("../../static/9_map_manage/map.png");
  width: 65%;
  margin-left: 12%;
  height: 650px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  display: flex;
}
</style>