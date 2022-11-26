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
        <div id="classtitle">班级信息管理</div>
        <div id="line"></div>
        <div id="choose">

        <el-select v-model="umajor" placeholder="请选择专业">
          <el-option
            v-for="item in specialized"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="grade" style="margin-left: 20px;" placeholder="请选择年级">
          <el-option
            v-for="item in year"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="uclass" style="margin-left: 20px;" placeholder="请选择班级">
          <el-option
            v-for="item in classes"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button type="text" @click="clean" id="resetClass">
          重置
        </el-button>
        <el-button type="text" @click="searchClass" id="searchClass">
          搜索
        </el-button>

        <div id="tableHeader" v-show="(show==1)">
          <div class="TH">学号</div>
          <div class="TH">姓名</div>
          <div class="TH">操作</div>        
        </div>          

          <div class="student" v-for="(item,index) in students" v-show="(show==1)">
            <div class="info">{{students[index].number}}</div>
            <div class="info">{{students[index].name}}</div>
            <el-button type="text" class="delStu" @click="opendelstu(index)">删除</el-button>
            <div class="tableLine"></div>
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
        specialized: [{
          value: '计算机类',
          label: '计算机类'
        }, 
        {
          value: '大数据',
          label: '大数据'
        }, 
        {
          value: '人工智能',
          label: '人工智能'
        }, 
        {
          value: '软件工程',
          label: '软件工程'
        }, 
        {
          value: '信息安全',
          label: '信息安全'
        }],
        year: [{
          value: '2018',
          label: '2018'
        }, 
        {
          value: '2019',
          label: '2019'
        }, 
        {
          value: '2020',
          label: '2020'
        }, 
        {
          value: '2021',
          label: '2021'
        }, 
        {
          value: '2022',
          label: '2022'
        }],
        classes: [{
          value: '1班',
          label: '1班'
        },
        {
          value: '2班',
          label: '2班'
        }, 
        {
          value: '3班',
          label: '3班'
        }, 
        {
          value: '4班',
          label: '4班'
        }, 
        {
          value: '5班',
          label: '5班'
        },
        {
          value: '6班',
          label: '6班'
        }],
        students:[],
        umajor: "",
        stucnt:0,
        grade: "",
        uclass: "",
        show:0,
      };
    },
    methods:{
      opendelstu(i) {
        this.$confirm('此操作将永久删除该学生, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.delstu(i);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {

        });
      },
        searchClass(){
          if(this.umajor==""||this.grade==""||this.uclass=="")
          {
            this.$alert('请选择正确的班级', '提示', {
              confirmButtonText: '确定',
            });
          }
          else
          {
            this.show=1;
            this.showclass();
          }
        },
        showclass(){//展示学生
          const that=this;
          this.students.splice(0, this.students.length);
                axios.post('http://172.20.10.6:8083/user/manager/classUserList',{umajor:that.umajor,grade:that.grade,uclass:that.uclass})
                .then(function(response) {
                  console.log(response.data);
                  that.stucnt=response.data["count"];
                    for(var i=that.stucnt-1;i>=0;i--)
                    {
                      that.students.push(
                       {
                          name:response.data["realname"+i],
                          number:response.data["sno"+i],
                          //id:response.data.students[i].id,
                          //name:response.data.students[i].name,
                          //number:response.data.students[i].number,
                        }
                      )
                    }
                });
        },
      delstu(i){//删除学生
        const that=this;
          this.students.splice(i, 1);//前端模拟删除
                    console.log(i);
                    console.log(that.umajor);
                    console.log(that.grade);
                    console.log(that.uclass);
                    console.log(that.students[i].number);
                axios.post('http://172.20.10.6:8083/user/manager/classUserList/out',{sno:that.students[i].number,umajor:that.umajor,grade:that.grade,uclass:that.uclass})
                .then(function(response) {
                  //删除数据库照片
                });
        },
      clean(){
        this.umajor="";
        this.grade="";
        this.uclass="";
        this.show=0;
      }
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
#classtitle{
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
#choose{
  margin-top: 20px;
  margin-left: 25px;
  width: 900px;
  height: 40px;
}
#searchClass{
  width: 55px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-right: 25px;
  font-size: 18px;
  color: black;
  float: right;
}
#resetClass{
  width: 55px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 4px;
  float: right;
  font-size: 18px;
  color: black;
}
#tableHeader{
  margin-top: 20px;
  width: 1200px;
  height: 50px;
}
.TH{
  float: left;
  width: 400px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: 600;
}
.student{
  width: 1200px;
  height: 50px;
}
.info{
  width: 400px;
  height: 50px;
  float: left;
  line-height: 50px;
  text-align: center;
  color: #494949;
}
.delStu
{
  width: 400px;
  height: 50px;
  float: left;
}
</style>