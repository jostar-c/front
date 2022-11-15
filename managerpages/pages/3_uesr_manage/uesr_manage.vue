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
      <div class="main">
        <div style="padding: 30px">
          <div class="c-title" style="font-size: 30px">用户账号管理</div>
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
              label="账号"
              width="180"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="nickname"
              label="昵称"
              width="180"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="yearOfGraduate"
              label="毕业年份"
              width="140"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="pClass" label="专业班级" align="center"></el-table-column>
            <el-table-column
              prop="date"
              label="创建时间"
              width="180"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="state"
              label="状态"
              width="140"
              align="center"
            >
            </el-table-column>
            <el-table-column label="操作" width="140" align="center">
              <template slot-scope="scope">
                <el-button
                  @click="banClick(scope.row)"
                  type="text"
                  size="small"
                >封禁
                </el-button
                >
                <el-button
                  type="text"
                  size="small"
                  @click="unlockClick(scope.row)"
                >解封
                </el-button
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
  </div>
</template>

<script>
export default {
  methods: {
    banClick(id) {
      // 改为向后端传送封禁第几个用户，后端返回封禁后的用户信息赋给tableData进行渲染更新
      console.log(id);
    },
    unlockClick(id) {
      // 改为向后端传送解封第几个用户，后端返回解封后的用户信息赋给tableData进行渲染更新
      console.log(id);
    },
  },
  created() {
    console.log("向后端请求前8条信息存入tableData");
  },

  data() {
    return {
      dialogVisible: false,
      tablenum: 500,
      currentpage: 1,
      tableData: [
        {
          id: 1,
          name: "1113756394",
          nickname: "zhang san",
          yearOfGraduate: "2024",
          pClass: "计算机与大数据4班",
          date: "2022-11-11",
          state: "正常",
        },
        {
          id: 2,
          name: "1113756394",
          nickname: "zhang san",
          yearOfGraduate: "2024",
          pClass: "计算机与大数据4班",
          date: "2022-11-11",
          state: "正常",
        },
        {
          id: 3,
          name: "1113756394",
          nickname: "zhang san",
          yearOfGraduate: "2024",
          pClass: "计算机与大数据4班",
          date: "2022-11-11",
          state: "正常",
        },
        {
          id: 4,
          name: "1113756394",
          nickname: "zhang san",
          yearOfGraduate: "2024",
          pClass: "计算机与大数据4班",
          date: "2022-11-11",
          state: "正常",
        },
        {
          id: 5,
          name: "1113756394",
          nickname: "zhang san",
          yearOfGraduate: "2024",
          pClass: "计算机与大数据4班",
          date: "2022-11-11",
          state: "正常",
        },
        {
          id: 6,
          name: "1113756394",
          nickname: "zhang san",
          yearOfGraduate: "2024",
          pClass: "计算机与大数据4班",
          date: "2022-11-11",
          state: "正常",
        },
        {
          id: 7,
          name: "1113756394",
          nickname: "zhang san",
          yearOfGraduate: "2024",
          pClass: "计算机与大数据4班",
          date: "2022-11-11",
          state: "正常",
        },
        {
          id: 8,
          name: "1113756394",
          nickname: "zhang san",
          yearOfGraduate: "2024",
          pClass: "计算机与大数据4班",
          date: "2022-11-11",
          state: "正常",
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

</style>
