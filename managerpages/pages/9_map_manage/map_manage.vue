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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addid: 0,
      islogin: this.global.islogin,
      dialogFormVisible: false, //弹出层默认为关闭
      events: [
        {
          address: "图书馆",
          img: "../../static/9_map_manage/library.jpg",
          event: "暂无",
        },
        {
          address: "中楼",
          img: "../../static/9_map_manage/fuyouge.png",
          event: "暂无",
        },
        {
          address: "福友阁",
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
</style>
