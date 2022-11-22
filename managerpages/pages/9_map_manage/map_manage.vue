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
              >地图活动信息更新<span>&gt;</span></router-link
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
      this.$axios
        .post("http://10.133.11.124:8080/test/update", {
          address: this.events[id].address,
          activity_name: this.events[id].event,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch((err) => {
          console.log("post失败");
          console.log(err);
        });

      console.log(id + this.events[id].address + this.events[id].event);
    },
  },
  created() {
    if (location.href.indexOf("#reloaded") == -1) {
      location.href = location.href + "#reloaded";
      location.reload();
    }

    var _this = this;
    this.$axios
      .get("http://10.133.11.124:8080/test/user_show")
      .then(function (response) {
        //具体操作
        console.log(response.data);
        for (var i = 0; i < 5; i++)
          for (var j = 0; j < 5; j++)
            if (response.data[i].address == _this.events[j].address) {
              _this.events[j].event = response.data[i].activity_name;
            }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style>
.map {
  background: url("../../static/9_map_manage/map.png");
  width: 75%;
  margin-left: 13%;
  height: 700px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  display: flex;
  margin-top: 1.5%;
}
</style>