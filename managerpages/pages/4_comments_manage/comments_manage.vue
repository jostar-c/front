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
            <el-table-column prop="text" label=" 留言" align="center"> </el-table-column>
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
                <el-button
                  type="text"
                  size="small"
                  @click="deleteClick(scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            :page-size="8"
            background
            layout="prev, pager, next"
            :total="tablenum"
            style="text-align: center; margin-top: 3%"
            @current-change="getPageNum"
          >
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
              <div class="comment-title">{{ item.name }}</div>
            </div>
            <div class="comment-text">{{ item.text }}</div>
          </div>
          <div>
            <div class="comment-time">{{ item.date }}</div>
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
  </div>
</template>

      <script>
export default {
  methods: {
    handleClick(row) {
      // 改为向后端传送查看第几条留言和当前页数，后端返回目标留言对应的评论赋给commentData进行渲染更新
      console.log(row.id);
      console.log(this.currentpage);
      this.dialogVisible = true;
    },
    deleteClick(row) {
      // 改为向后端传送删除第几条留言和当前页数，后端返回目标留言删除后的当前页面8条留言赋给tableData进行渲染更新
      console.log(row.id);
      console.log(this.currentpage);
    },
    delComment(id) {
      // 改为向后端传送删除第几条评论，后端返回目标页剩余的留言赋给commentData进行渲染更新
      console.log(id);
    },
    getPageNum(val) {
      // 改为向后端传送目标页数后后端返回目标页对应的8条留言赋给tableData进行渲染更新
      this.currentpage = val;
      console.log(this.currentpage);
    },
  },
  created() {
    console.log("向后端请求前8条留言信息存入tableData");
  },

  data() {
    return {
      dialogVisible: false,
      tablenum: 500,
      currentpage: 1,
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
      ],
      commentData: [
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
.el-dialog {
  border-radius: 20px;
}
</style>
