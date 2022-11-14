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
<<<<<<< HEAD
      <div class="main">comments_manage</div>
    </div>
=======
      <div class="main">
        <div style="padding: 30px">
          <div class="c-title" style="font-size: 30px">留言管理</div>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column
              fixed
              prop="id"
              label="序号"
              width="150"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="用户名"
              width="180"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="text" label=" 留言"> </el-table-column>
            <el-table-column
              prop="date"
              label="时间"
              width="180"
              align="center"
            >
            </el-table-column>
            <el-table-column label="操作" width="200" align="center">
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  type="text"
                  size="small"
                  >查看评论</el-button
                >
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>

    <el-dialog title="评论" :visible.sync="dialogVisible" width="30%">
      <div>
        <div
          class="flex comment-item"
          v-for="item in commentData"
          :key="item.id"
        >
          <div class="flex-g1">
            <div class="flex flex-ac">
              <img width="24" src="../../static/user-avatar.jpg" alt="" />
              <div class="comment-title">{{ item.title }}</div>
            </div>
            <div class="comment-text">{{ item.text }}</div>
          </div>
          <div>
            <div class="comment-time">1小时前</div>
            <el-button @click="delComment(item.id)" type="text">删除</el-button>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
>>>>>>> 0117a06 (修改了后台框架，初步完成后台留言审核， 前台主页)
  </div>
</template>
      
      <script>
<<<<<<< HEAD
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
=======
export default {
  methods: {
    handleClick(row) {
      console.log(row);
      this.dialogVisible = true;
    },
    delComment(id) {
      console.log(id);
    },
  },

  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          text: "母校变化有具体的信息",
        },
        {
          id: 2,
          date: "2016-05-02",
          name: "王小虎",
          text: "母校变化有具体的信息",
        },
        {
          id: 3,
          date: "2016-05-02",
          name: "王小虎",
          text: "母校变化有具体的信息",
        },
        {
          id: 4,
          date: "2016-05-02",
          name: "王小虎",
          text: "母校变化有具体的信息",
        },
        {
          id: 5,
          date: "2016-05-02",
          name: "王小虎",
          text: "母校变化有具体的信息",
        },
        {
          id: 6,
          date: "2016-05-02",
          name: "王小虎",
          text: "母校变化有具体的信息",
        },
        {
          id: 7,
          date: "2016-05-02",
          name: "王小虎",
          text: "母校变化有具体的信息",
        },
        {
          id: 8,
          date: "2016-05-02",
          name: "王小虎",
          text: "母校变化有具体的信息",
        },
        {
          id: 9,
          date: "2016-05-02",
          name: "王小虎",
          text: "母校变化有具体的信息",
        },
        {
          id: 10,
          date: "2016-05-02",
          name: "王小虎",
          text: "母校变化有具体的信息",
        },
      ],
      commentData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          text: "母校变化有具体的信息",
          title: "母校变化有具体的信息",
        },
        {
          id: 2,
          date: "2016-05-02",
          name: "王小虎",
          text: "母校变化有具体的信息",
          title: "母校变化有具体的信息",
        },
        {
          id: 3,
          date: "2016-05-02",
          name: "王小虎",
          text: "母校变化有具体的信息",
          title: "母校变化有具体的信息",
        },
        {
          id: 4,
          date: "2016-05-02",
          name: "王小虎",
          text: "母校变化有具体的信息",
          title: "母校变化有具体的信息",
        },
      ],
    };
  },
};
</script>
      
<style>
.c-title {
  border-bottom: 2px solid #b1b1b1;
  font-size: 30px;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
.comment-item {
  border-bottom: 2px solid #eee;
  padding: 15px 0;
}
.comment-text {
  margin-top: 10px;
  font-size: 16px;
}
.comment-title {
  font-size: 16px;
  margin-left: 5px;
}
.comment-time {
  color: #999;
}
.el-dialog{
  border-radius: 20px;
>>>>>>> 0117a06 (修改了后台框架，初步完成后台留言审核， 前台主页)
}
</style>