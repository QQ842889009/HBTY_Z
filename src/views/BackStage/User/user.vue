<template>
  <div class="user-container">
    <div class="user-container-box">
      <el-form
        :inline="true"
        :model="dataForm"
        :rules="dataRule"
        ref="dataForm"
      >
        <el-form-item prop="name">
          <el-input
            v-model="dataForm.name"
            placeholder="姓名"
            size="medium"
            class="input"
            clearable="clearable"
          />
        </el-form-item>
        <el-form-item>
          <el-select
            v-model="dataForm.sex"
            class="input"
            placeholder="性别"
            size="medium"
            clearable
          >
            <el-option label="男" value="男" />
            <el-option label="女" value="女" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-select
            v-model="dataForm.role"
            class="input"
            placeholder="角色"
            size="medium"
            clearable
          >
            <el-option
              v-for="one in roleList"
              :label="one.roleName"
              :value="one.roleName"
              :key="one.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select
            v-model="dataForm.deptId"
            class="input"
            placeholder="部门"
            size="medium"
            clearable
          >
            <el-option
              v-for="one in deptList"
              :label="one.deptName"
              :value="one.id"
              :key="one.id"
            />
          </el-select>
        </el-form-item>
        <!-- <el-form-item>
          <el-select
            v-model="dataForm.status"
            class="input"
            placeholder="状态"
            size="medium"
            clearable
          >
            <el-option label="在职" value="1" />
            <el-option label="离职" value="2" />
          </el-select>
        </el-form-item> -->
        <el-form-item>
          <el-button size="medium" type="primary" @click="searchHandle()"
            >查询</el-button
          >
          <el-button
            :disabled="!this.ISAUTH.isAUth(['ROOT'])"
            size="medium"
            type="primary"
            @click="addHandle()"
          >
            新增
          </el-button>
          <!-- <el-button
            size="medium"
            type="danger"
            :disabled="!this.ISAUTH.isAUth(['ROOT'])"
            @click="deleteHandle()"
          >
            批量删除
          </el-button> -->
        </el-form-item>
      </el-form>

      <!-- 表格开始 -->
      <el-table
        :data="dataList"
        border
        class="aa"
        v-loading="dataListLoading"
        @selection-change="selectionChangeHandle"
        style="width: 100%"
        size="medium"
      >
        <el-table-column
          type="selection"
          header-align="center"
          align="center"
          width="50"
        />
        <el-table-column
          type="index"
          header-align="center"
          align="center"
          width="100"
          label="序号"
        >
          <template #default="scope">
            <span>{{ (pageIndex - 1) * pageSize + scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          header-align="center"
          align="center"
          min-width="100"
          label="姓名"
        />
        <el-table-column
          prop="username"
          header-align="center"
          align="center"
          min-width="100"
          label="账号"
        />
        <el-table-column
          prop="sex"
          header-align="center"
          align="center"
          min-width="60"
          label="性别"
        />
        <el-table-column
          prop="tel"
          header-align="center"
          align="center"
          min-width="130"
          label="电话"
        />
        <el-table-column
          prop="email"
          header-align="center"
          align="center"
          min-width="240"
          label="邮箱"
          :show-overflow-tooltip="true"
        />
        <el-table-column
          prop="hiredate"
          header-align="center"
          align="center"
          min-width="130"
          label="入职日期"
        />
        <el-table-column
          prop="roles"
          header-align="center"
          align="center"
          min-width="150"
          label="角色"
          :show-overflow-tooltip="true"
        />
        <el-table-column
          prop="dept"
          header-align="center"
          align="center"
          min-width="120"
          label="部门"
        />
        <!-- <el-table-column
          prop="status"
          header-align="center"
          align="center"
          min-width="100"
          label="状态"
        /> -->
        <el-table-column
          header-align="center"
          align="center"
          width="150"
          label="操作"
        >
          <template #default="scope">
            <el-button
              type="text"
              size="medium"
              @click="updateHandle(scope.row.id)"
            >
              修改
            </el-button>
            <!-- <el-button
              type="text"
              size="medium"
              :disabled="scope.row.status == '离职' || scope.row.root"
              @click="dimissHandle(scope.row.id)"
            >
              离职
            </el-button> -->
            <el-button
              type="text"
              size="medium"
              :disabled="scope.row.root"
              @click="deleteHandle(scope.row.id)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 表格结束 -->
      <!--  分页开始-->
      <el-pagination
        @size-change="sizeChangeHandle"
        @current-change="currentChangeHandle"
        :current-page="pageIndex"
        :page-sizes="[10, 20, 50]"
        :page-size="pageSize"
        :total="totalCount"
        layout="total, sizes, prev, pager, next, jumper"
      ></el-pagination>
      <!--  分页结束-->
      <!-- 增加或者修改开始 -->
      <add-or-update
        v-if="addOrUpdateVisible"
        ref="addOrUpdate"
        @refreshDataList="loadDataList"
      ></add-or-update>
      <!-- 增加或者修改结束 -->
    </div>
  </div>
</template>

<script>
import AddOrUpdate from "./user-add-or-update.vue";
import Dimiss from "./dimiss.vue";
export default {
  components: {
    AddOrUpdate,
    Dimiss,
  },
  data() {
    return {
      dataForm: {
        name: "",
        sex: "",
        role: "",
        deptId: "",
        status: "",
      },
      dataList: [],
      roleList: [],
      deptList: [],
      pageIndex: 1,
      pageSize: 10,
      totalCount: 0,
      dataListLoading: false,
      dataListSelections: [],
      addOrUpdateVisible: false,
      dimissVisible: false,
      dataRule: {
        name: [
          {
            required: false,
            pattern: "^[\u4e00-\u9fa5]{1,10}$",
            message: "姓名格式错误",
          },
        ],
      },
    };
  },
  methods: {
    //这个是获取用户列表的
    loadDataList() {
      let that = this;
      //请求后端数据的时候，让表格出现循环滚动的等待图标
      that.dataListLoading = true;
      let data = {
        page: that.pageIndex,
        length: that.pageSize,
        name: that.dataForm.name,
        sex: that.dataForm.sex,
        role: that.dataForm.role,
        deptId: that.dataForm.deptId,
        status: that.dataForm.status,
      };
      console.log("如果不选将查询全部，选择了会按选择的查", data);
      that.$http
        .post("plcdata/tems/user/searchUserByPage", data)
        .then((res) => {
          console.log("user列表请求返回的数据是什么", res);
          let page = res.page;
          let list = page.list;
          for (let one of list) {
            if (one.status == 1) {
              one.status = "在职";
            } else if (one.status == 2) {
              one.status = "离职";
            }
          }
          that.dataList = list;
          that.totalCount = page.totalCount;
          that.dataListLoading = false;
        });

      // that.$http("user/searchUserByPage", "POST", data, true, function (resp) {
      //   console.log("resp", resp)
      //   let page = resp.page
      //   let list = page.list

      //   for (let one of list) {
      //     if (one.status == 1) {
      //       one.status = "在职"
      //     } else if (one.status == 2) {
      //       one.status = "离职"
      //     }
      //   }
      //   that.dataList = list
      //   that.totalCount = page.totalCount
      //   that.dataListLoading = false
      // })
    },
    //所有角色的列表
    loadRoleList() {
      let that = this;
      that.$http.get("plcdata/tems/role/searchAllRole").then((res) => {
        // console.log("所有的角色", res);
        that.roleList = res.list;
      });
      //   that.$http("role/searchAllRole", "GET", null, true, function (resp) {
      //     that.roleList = resp.list
      //   })
    },
    //所有的部门
    loadDeptList() {
      let that = this;
      that.$http.get("plcdata/tems/dept/searchAllDept").then((res) => {
        //console.log("所有的部门", res);
        that.deptList = res.list;
      });
    },
    //查询用户
    searchHandle: function () {
      //先执行表单验证
      this.$refs["dataForm"].validate((valid) => {
        if (valid) {
          //清理页面上的表单验证结果
          this.$refs["dataForm"].clearValidate();
          //不允许上传空字符串给后端，但是可以传null值
          if (this.dataForm.name == "") {
            this.dataForm.name = null;
          }
          //如果当前页面不是第一页，则跳转到第一页显示查询的结果
          if (this.pageIndex != 1) {
            this.pageIndex = 1;
          }
          this.loadDataList();
        } else {
          return false;
        }
      });
    },
    //新增
    addHandle() {
      this.addOrUpdateVisible = true;
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init();
      });
    },
    //修改
    updateHandle: function (id) {
      this.addOrUpdateVisible = true;
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id);
      });
    },
    //分页的东西
    sizeChangeHandle(val) {
      this.pageSize = val;
      //更改每页显示记录数量后，都从第一页开始查询
      this.pageIndex = 1;
      this.loadDataList();
    },
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.loadDataList();
    },
    //分页的东西
    selectionChangeHandle: function (val) {
      this.dataListSelections = val;
    },
    //离职
    deleteHandle: function (id) {
      let that = this;
      let ids = id
        ? [id]
        : that.dataListSelections.map((item) => {
            return item.id;
          });
      if (ids.length == 0) {
        that.$message({
          message: "没有选中记录",
          type: "warning",
          duration: 1200,
        });
      } else {
        that
          .$confirm(`确定要删除选中的记录？`, "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          })
          .then(() => {
            that.$http
              .post("plcdata/tems/user/deleteUserByIds", { ids: ids })
              .then((res) => {
                if (res.rows > 0) {
                  that.$message({
                    message: "操作成功",
                    type: "success",
                    duration: 1200,
                  });
                  that.loadDataList();
                } else {
                  that.$message({
                    message: "未能删除记录",
                    type: "warning",
                    duration: 1200,
                  });
                }
              });
          });
      }
    },
  },
  created() {
    this.loadDataList();
    this.loadRoleList();
    this.loadDeptList();
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.user-container {
  width: 100%;
  height: 100%;
  background-color: tan;
  .user-container-box {
    width: 100%;
    height: 100%;
    background-color: rgb(207, 210, 223);
    // background-color: rgb(187, 15, 15);
    padding: 100px 50px 50px 50px;
  }
}
.aa {
  z-index: 1;
}
</style>
