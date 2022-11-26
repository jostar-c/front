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
              >用户账号管理<span>&gt;</span></router-link
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
          <el-table
            :data="tableData.filter((v) => v.id)"
            border
            style="width: 100%"
          >
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
              label="年级"
              width="140"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="pClass"
              label="专业班级"
              align="center"
            ></el-table-column>
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
                <el-button @click="banClick(scope.row)" type="text" size="small"
                  >封禁
                </el-button>
                <el-button
                  type="text"
                  size="small"
                  @click="unlockClick(scope.row)"
                  >解封
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            :page-size="8"
            background
            layout="total, prev, pager, next"
            :total="tablenum"
            style="text-align: center; margin-top: 3%"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- <el-button type="text" @click="dialogFormVisible = true">封禁</el-button>

    <el-dialog title="" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="封禁原因" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="封禁时长" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="7天" value="seven"></el-option>
            <el-option label="一个月" value="thirty"></el-option>
            <el-option label="永久" value="forever"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <el-dialog title="" :visible.sync="dialogVisible">
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        "
      >
        <span style="font-size: 25px; margin-bottom: 10px"
          >解封原因 ： {{ banData.reason }}</span
        >
        <div style="font-size: 25px; margin-right: 75px">
          <span style="">解封时长 ： </span><span>{{ banData.duration }}</span>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog> -->
  </div>
</template>

<script>
export default {
  methods: {
    getPage() {
      this.$axios
        .post("http://119.91.217.141:8080/user/users", {
          page: this.currentpage,
        })
        .then((res) => {
          this.tablenum = res.data.count * 1;
          for (var i = 0; i < 8; i++) this.tableData[i].id = "no";
          for (var i = 0; i < 8; i++) {
            this.tableData[i].id = res.data["uid" + i];
            this.tableData[i].name = res.data["uname" + i];
            this.tableData[i].nickname = res.data["nickname" + i];
            this.tableData[i].yearOfGraduate = res.data["grade" + i];
            this.tableData[i].pClass =
              res.data["umajor" + i] + res.data["uclass" + i];
            this.tableData[i].date = res.data["createTime" + i];
            this.tableData[i].state = res.data["ban" + i];
          }
          console.log(res);
        });
    },
    handleCurrentChange(currentPage) {
      this.currentpage = currentPage;
      this.getPage();
    },
    banClick(i) {
      this.$axios
        .post("http:/119.91.217.141:8080/user/users/ban", {
          uname: i.name,
          ban: "true",
        })
        .then((res) => {
          this.$message({
            showClose: true,
            message: "更改用户状态成功",
            type: "success",
          });
          this.getPage();
        });
    },
    unlockClick(i) {
      this.$axios
        .post("http://119.91.217.141:8080/user/users/ban", {
          uname: i.name,
          ban: "false",
        })
        .then((res) => {
          this.$message({
            showClose: true,
            message: "更改用户状态成功",
            type: "success",
          });
          this.getPage();
        });
    },
  },

  data() {
    return {
      // dialogVisible: false,
      // dialogFormVisible: false,
      tablenum: 500,
      currentpage: 1,
      tableData: [
        {
          id: "1",
          name: "",
          nickname: "",
          yearOfGraduate: "",
          pClass: "",
          date: "",
          state: "",
        },
        {
          id: "2",
          name: "",
          nickname: "",
          yearOfGraduate: "",
          pClass: "",
          date: "",
          state: "",
        },
        {
          id: "3",
          name: "",
          nickname: "",
          yearOfGraduate: "",
          pClass: "",
          date: "",
          state: "",
        },
        {
          id: "4",
          name: "",
          nickname: "",
          yearOfGraduate: "",
          pClass: "",
          date: "",
          state: "",
        },
        {
          id: "5",
          name: "",
          nickname: "",
          yearOfGraduate: "",
          pClass: "",
          date: "",
          state: "",
        },
        {
          id: "6",
          name: "",
          nickname: "",
          yearOfGraduate: "",
          pClass: "",
          date: "",
          state: "",
        },
        {
          id: "7",
          name: "",
          nickname: "",
          yearOfGraduate: "",
          pClass: "",
          date: "",
          state: "",
        },
        {
          id: "8",
          name: "",
          nickname: "",
          yearOfGraduate: "",
          pClass: "",
          date: "",
          state: "",
        },
      ],
      // banData: {
      //   reason: "发表不良信息",
      //   duration: "一个月",
      // },
      // form: {
      //   name: "",
      //   region: "",
      //   date1: "",
      //   date2: "",
      //   delivery: false,
      //   type: [],
      //   resource: "",
      //   desc: "",
      // },
      // formLabelWidth: "80px",
    };
  },
  created: function () {
    if (location.href.indexOf("#reloaded") == -1) {
      location.href = location.href + "#reloaded";
      location.reload();
    }
    this.getPage();
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
