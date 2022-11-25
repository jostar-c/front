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
        <div id="livetitle">直播跳转链接管理</div>
      <div id="line"></div>
      <div id="tableHeader" >
          <div class="TH">直播平台</div>
          <div class="TH">当前直播链接</div>
          <div class="TH">操作</div>        
      </div> 
      <div class="tableLine"></div>

      <div class="live" >
            <div class="liveinfo">{{oldplatform}}</div>
            <div class="liveinfo">{{oldlive}}</div>
            <el-button type="text" class="dellive" @click="changeUpdata">更新链接</el-button>
      </div>

        <div id="newlive" v-show="updata==1">
          <div class="explain">新直播平台:</div>
          <el-input v-model="site" placeholder="请输入平台" class="new"></el-input>
          <div class="explain">新直播链接:</div>
          <el-input v-model="website" placeholder="请输入链接" class="new"></el-input>
          <div id="livebutton">
            <el-button round @click="updataLive" :disabled="this.website==''||this.site==''">确认</el-button>
            <el-button round @click="changeUpdata">取消</el-button>
          </div>
          
        </div>
      
      </div>

    </div>
  </div>
</template>
      
<script>
import axios from "axios";
export default {
    data() {
      return {
        updata: -1,
        oldplatform:"哔哩哔哩",
        oldlive:"http://live.blibli.com/*****",
        site:"",
        website:"",
      };
    },
    methods:{
      changeUpdata(){
        this.updata*=-1;
      },
      updataLive(){//更新网站和平台
          const that=this;
          let Params = new FormData();
          Params.append(that.website,that.site);
            axios.post('http://192.168.157.210:8000/insertzhibo',{website:that.website,site:that.site})
            .then(res => {
                console.log(that.site);
                console.log(that.website);
                //that.oldplatform=that.site;
                //that.oldlive=that.website;
                //that.website="";
                //that.site="";
                that.refresh();

        })
        .catch(err => {
          console.error(err); 
        })
      },
      refresh(){
                const that=this;
                axios.get('http://192.168.157.210:8000/httpquery')
                .then(function(response) {
                    console.log(response.data);
                    that.oldlive = response.data.data[0].website;
                    that.oldplatform = response.data.data[0].site;
                });
      },
  },
  created() {//展示当前链接
                const that=this;
                axios.get('http://192.168.157.210:8000/httpquery')
                .then(function(response) {
                    console.log(response.data);
                    that.oldlive = response.data.data[0].website;
                    that.oldplatform = response.data.data[0].site;
                });
            },

}
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
#tableHeader{
  margin-top: 20px;
  width: 1200px;
  height: 50px;
}
#livetitle{
  margin-top: 40px;
  margin-left: 30px;
  width: 100%;
  height: 70px;
  font-size: 50px;
  line-height: 70px;
}
#line{
  width: 75%;
  margin-top: 5px;
  margin-left: 25px;
  height: 1px;
  background-color: #757575;
}
.tableLine{
  width: 1200px;
  margin-top: 5px;
  margin-left: 25px;
  height: 1px;
  background-color: #b5b5b5;
}
.TH{
  float: left;
  width: 400px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: 600;
}
.liveinfo{
  width: 400px;
  height: 50px;
  float: left;
  line-height: 50px;
  text-align: center;
  color: #494949;
}
.dellive
{
  width: 400px;
  height: 50px;
  float: left;
}
#newlive{
  margin-top: 70px;
  margin-left: 200px;
  width: 800px;
  height: 200px;
}
.explain{
  margin-bottom: 20px;
  float: left;
  width: 180px;
  height: 40px;
  font-size: 30px;
  line-height: 40px;
  font-weight: bold;
}
.new{
  margin-bottom: 20px;
  float: left;
  width: 620px;
  height: 50px;
}
#livebutton{
  width: 200px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
}
</style>