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
        <div id="phtitle">校园风光照片管理</div>
        <div id="line"></div>
        <!--
        <div id="phstate">
          <div class="bt" 
          :id="phstate == 1 ? 'already':''"
          @click="ready">
          已通过</div>
          <div class="bt"
          :id="phstate == 0 ? 'already':''"
          @click="notready">
          待审核</div>
        </div>
        -->
        <div id="photos">

          <div class="readyph" v-for="(item,index) in photos">
            <i class="el-icon-delete deleteph" @click="deleteopen(index)"></i>
            <img :src="photos[index].pic_url" class="ph">
            <i class="el-icon-user-solid lefticon">
             {{photos[index].pic_url}}111
            </i>
            <i class="el-icon-info righticon">
             <!-- {{photos[index].time}}-->
            </i>
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
        //phstate: 1,

        photos:[],
      };
    },
    methods:{
      //ready(){
      //  this.phstate=1;
      //},
      // notready(){
      //  this.phstate=0;
      //},
      deleteopen(i) {
        this.$confirm('此操作将永久删除该照片, 是否继续?', '提示', {
          confirmButtonText: '删除',
          cancelButtonText: '取消',
          type: 'warning'
            })
            .then(() => {
              this.deletephoto(i);
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            })
        },
      refresh(){//刷新评论
        const that=this;
        this.photos.splice(0, this.photos.length);
                axios.get('http://172.20.10.6:8080/scenery/all')
                .then(function(response) {
                  console.log(response.data);
                  var l=response.data.length-1;
                    for(var i = 0;i<=l;i++)
                    {
                      that.photos.push(
                       {
                          //id:response.data.photos[i].id,
                          //ph:response.data.photos[i].ph,
                          //name:response.data.photos[i].name,
                          //time:response.data.photos[i].time,
                          pic_url:response.data[i],
                        }
                      )
                    }
                });
    },
      deletephoto(i){//删除照片
          const that=this;
         // this.photos.splice(i, 1);//前端模拟删除
         console.log(that.photos[i].pic_url);
                axios.post('http://172.20.10.6:8080/scenery/deny',{pic_url:that.photos[i].pic_url})
                .then(function(response) {
                    that.refresh();
                });
      }
      },
      created() {//展示出照片
                const that=this;
                axios.get('http://172.20.10.6:8080/scenery/all')
                .then(function(response) {
                  console.log(response.data);
                  var l=response.data.length-1;
                    for(var i = 0;i<=l;i++)
                    {
                      that.photos.push(
                       {
                          //id:response.data.photos[i].id,
                          //ph:response.data.photos[i].ph,
                          //name:response.data.photos[i].name,
                          //time:response.data.photos[i].time,
                          pic_url:response.data[i],
                        }
                      )
                    }
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
#phtitle{
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
#phstate
{
  margin-top: 20px;
  margin-left: 25px;
  width: 100%;
  height: 35px;
}
.bt{
    width: 100px;
    height: 33px;
    line-height: 30px;
    text-align: center;
    border: 2px solid rgb(84, 163, 203);
    border-radius: 30px;
    color: rgb(84, 163, 203);
    margin-right: 40px;
    float: left;
}
#already{
  color: white;
  background-color: rgb(84, 163, 203);
}
#photos{
  margin-top: 30px;
  margin-left: 25px;
  width: 80%;
  height: 800px;
}
.readyph
{
  width: 300px;
  height: 250px;
  margin-right: 40px;
  float: left;
}
.ph{
  width: 300px;
  height: 200px;
  margin-bottom: 5px;
  margin-top: -25px;
  float: left;
}
.lefticon{
  color: #808080;
  font-size: 15px;
  float: left;
}
.righticon{
  color: #808080;
  font-size: 15px;
  float: right;
}
.deleteph{
  float: right;
  position: relative;
  bottom: -5px;
  left: -5px;
  font-size: 25px;
}
</style>