<template>
  <div>
    <!-- 2.banner部分start -->
    <div class="banner">
      <!-- logo部分 -->
      <div class="logo">
        <img src="../../static/logo.png" width="36px" height="auto"/>
      </div>
      <div>
        <p>
          福州大学计算机与大数据学院
          <br/>
          /软件学院院庆管理系统
        </p>
      </div>
      <div class="out">
        <router-link to="/">
          <img src="../../static/out.png" width="24px" height="auto"/>
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
<<<<<<< HEAD
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
=======
      <div style="padding: 80px">
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
>>>>>>> 52583b079ece28e58447364da5e85f29ce6ebd02
        </div>
      </div>
    </div>
  </div>
</template>
<<<<<<< HEAD
      
=======

>>>>>>> 52583b079ece28e58447364da5e85f29ce6ebd02
<script>
export default {
  data() {
    return {
<<<<<<< HEAD
      events: [
        {
          address: "图书馆",
=======
      addid: 0,
      islogin: this.global.islogin,
      dialogFormVisible: false, //弹出层默认为关闭
      events: [
        {
          address: "图书馆",
          img: "../../static/9_map_manage/library.jpg",
>>>>>>> 52583b079ece28e58447364da5e85f29ce6ebd02
          event: "暂无",
        },
        {
          address: "中楼",
<<<<<<< HEAD
=======
          img: "../../static/9_map_manage/fuyouge.png",
>>>>>>> 52583b079ece28e58447364da5e85f29ce6ebd02
          event: "暂无",
        },
        {
          address: "福友阁",
<<<<<<< HEAD
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
=======
          img: "../../static/9_map_manage/fuyouge.png",
          event: "演唱会",
        },
      ],
    };
  },
  created() {
    console.log("向后端请求各地点的活动存入events");
  }
}
>>>>>>> 52583b079ece28e58447364da5e85f29ce6ebd02
</script>

<style>
.map {
  background: url("../../static/9_map_manage/map.png");
  width: 83%;
  margin-left: 15%;
  height: 1000px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  display: flex;
}
<<<<<<< HEAD
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
=======
</style>
>>>>>>> 52583b079ece28e58447364da5e85f29ce6ebd02
