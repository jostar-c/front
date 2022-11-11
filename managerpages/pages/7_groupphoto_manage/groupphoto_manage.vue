<!-- <template>
  <div style="padding: 5px 20px">
    <br />
    <el-form :inline="true" :model="listQuery" class="demo-form-inline">
      <el-form-item label="代收单位名">
        <el-input
          v-model="listQuery.unit_name"
          placeholder="代收单位名称"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmitSelect" icon="el-icon-search"
          >查询</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="TJCollectionForm" icon="el-icon-edit"
          >添加</el-button
        >
      </el-form-item>
    </el-form>
    表格
    <el-table
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="50" type="index">
      </el-table-column>
      <el-table-column label="代收单位账号" prop="unit_account">
      </el-table-column>
      <el-table-column label="代收单位名称" prop="unit_name"> </el-table-column>
      <el-table-column label="创建时间">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>&nbsp;
          <span
            style="margin-left: 5px"
            v-text="scope.row.create_time.substring(-1, 19).replace('T', ' ')"
          ></span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-tooltip
            class="item"
            effect="dark"
            content="修改密码"
            placement="top"
          >
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              @click="BJCollectionForm(scope.$index)"
            ></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="top">
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="deleteVisible(scope)"
            ></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="listQuery.page"
      :page-sizes="[10]"
      :page-size="listQuery.limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :background="true"
    >
    </el-pagination>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="collectionform"
        :rules="rules"
        :model="ruleForm"
        label-width="120px"
        label-position="left"
      >
        <el-form-item
          label="代收单位账号"
          prop="unit_account"
          v-if="dialogStatus == 'create'"
        >
          <el-input
            placeholder="代收单位账号"
            v-model="ruleForm.unit_account"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="代收单位名称"
          prop="unit_name"
          v-if="dialogStatus == 'create'"
        >
          <el-input
            placeholder="代收单位名称"
            v-model="ruleForm.unit_name"
          ></el-input>
        </el-form-item>
        <el-form-item label="代收单位密码" prop="unit_password">
          <el-input
            placeholder="代收单位密码"
            v-model="ruleForm.unit_password"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          v-if="dialogStatus == 'create'"
          @click="submitCollectionForm('collectionform')"
          >添 加</el-button
        >
        <el-button
          type="warning"
          v-else
          @click="updateCollectionForm('collectionform')"
          >修 改</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
   
  <script>
// export default {
//   name: "department",
//   data() {
//     return {
//       /* typecode:this.$route.query.typecode,
// 		   typetitle:this.$route.query.typetitle */
//       listLoading: true,
//       list: null,
//       total: 0,
//       listQuery: {
//         page: 1,
//         limit: 10,
//         unit_name: "",
//       },
//       dialogFormVisible: false,
//       dialogStatus: "create",
//       textMap: {
//         update: "修改代收单位",
//         create: "添加代收单位",
//       },

//       ruleForm: {
//         id: "",
//         unit_code: "",
//         unit_account: "",
//         unit_name: "",
//         unit_password: "",
//         create_time: "",
//         create_author: "",
//       },

//       rules: {
//         unit_account: [
//           {
//             required: true,
//             message: "请输入代收单位账号",
//             trigger: "blur",
//           },
//         ],
//         unit_name: [
//           {
//             required: true,
//             message: "请输入代收单位名称",
//             trigger: "blur",
//           },
//         ],
//         unit_password: [
//           {
//             required: true,
//             message: "请输入代收单位密码",
//             trigger: "blur",
//           },
//         ],
//       },
//     };
//   },
//   created() {
//     this.axiosdata();
//   },
//   methods: {
//     handleSizeChange(val) {
//       this.listQuery.limit = val;
//       this.axiosdata();
//     },
//     handleCurrentChange(val) {
//       this.listQuery.page = val;
//       this.axiosdata();
//     },
//     onSubmitSelect() {
//       this.axiosdata();
//     },
//     axiosdata() {
//       this.listLoading = true;
//       this.$axios({
//         method: "post",
//         url: "/page/getHs_collection_unit",
//         headers: {
//           token: this.$store.getters.token,
//         },
//         data: this.listQuery,
//       }).then((response) => {
//         this.listLoading = false;
//         this.list = response.data.result.list;
//         this.total = response.data.result.total;
//       });
//     },

//     /* 添加表单*/
//     TJCollectionForm() {
//       /* 表单重置*/
//       Object.assign(this.$data.ruleForm, this.$options.data().ruleForm);

//       this.dialogStatus = "create";
//       this.dialogFormVisible = true;
//     },
//     /* 编辑表单*/
//     BJCollectionForm($index) {
//       //显示修改对话框
//       this.ruleForm = JSON.parse(JSON.stringify(this.list[$index]));
//       //以下效果和上面的不一样
//       //this.ruleForm=this.list[$index]

//       this.dialogStatus = "update";
//       this.dialogFormVisible = true;
//     },

//     /* 添加按钮*/
//     submitCollectionForm(formname) {
//       this.$refs[formname].validate((valid) => {
//         if (valid) {
//           this.$axios({
//             method: "post",
//             url: "/inserths_collection_unit",
//             data: this.ruleForm,
//           }).then((response) => {
//             if (response.data.resStatus.resCode == 0) {
//               this.axiosdata();
//               this.dialogFormVisible = false;
//               this.$message.success("添加数据成功！");
//             } else {
//               this.$message.error("添加数据失败！");
//             }
//           });
//         } else {
//           console.log("error submit!!");
//           return false;
//         }
//       });
//     },
//     /* 修改按钮*/
//     updateCollectionForm(formname) {
//       this.$refs[formname].validate((valid) => {
//         if (valid) {
//           this.$axios({
//             method: "post",
//             url: "/updatehs_collection_unit",
//             data: this.ruleForm,
//           }).then((response) => {
//             if (response.data.resStatus.resCode == 0) {
//               this.axiosdata();
//               this.dialogFormVisible = false;
//               this.$message.success("修改数据成功！");
//             } else {
//               this.$message.error("修改数据失败！");
//             }
//           });
//         } else {
//           console.log("error submit!!");
//           return false;
//         }
//       });
//     },
//     /* 删除按钮*/
//     deleteVisible(scope) {
//       this.$confirm("确定要删除【" + scope.row.unit_name + "】吗？", "提示", {
//         confirmButtonText: "确定",
//         cancelButtonText: "取消",
//         type: "warning",
//       }).then(() => {
//         this.$axios({
//           method: "post",
//           url: "/deletehs_collection_unit",
//           data: scope.row,
//         }).then((response) => {
//           if (response.data.resStatus.resCode == 0) {
//             this.axiosdata();
//             this.dialogFormVisible = false;
//             this.$message.error("删除完毕");
//           } else {
//             this.$message.error("删除数据失败！");
//           }
//         });
//       });
//     },
//   },
// };
</script>
   
  <style>
</style> -->












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
          <li back>
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
      <div class="main">
        <el-button size="mini" @click="dialogFormVisible = true"
          >查看</el-button
        >
      </div>
      <!-- 查看照片时候的弹出层 -->
      <el-dialog
        title="查看照片"
        :visible.sync="dialogFormVisible"
        width="50%"
        top="10%"
        center
      >
        <span>
          <img
            src="../../static/7_groupphoto_manage/gate1.png"
            style="display: inline-block; height: auto; max-width: 100%"
          />
        </span>
      </el-dialog>
    </div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      dialogFormVisible: false, //弹出层默认为关闭
    };
  },
  methods: {},
};
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
</style>