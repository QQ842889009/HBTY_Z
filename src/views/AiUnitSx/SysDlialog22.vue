<template>
  <div class="dialog-consumer">
    <el-dialog
      :modal-append-to-body="false"
      :title="title"
      :visible.sync="dialogVisible"
      :width="width + 'px'"
      :height="height + 'px'"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
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
  name: "ArticleList",
  components: {},
  props: {
    title: {
      type: String,
      default: "标ee题",
    },

    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 250,
    },
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleClose(done) {
      this.dialogVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .el-dialog__wrapper {
    .el-dialog {
      background-color: #fff !important;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      .el-dialog__header {
        background-color: #1890ff !important;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 5px 15px 5px;
        //height: 30px;
        // text-align: center;
        .el-dialog__title {
          // position: relative;
          // top: 18px;
          // left: 10px;
          color: #fff;
          // font-size: 16px;
          // font-weight: 600;
        }
      }
      .el-dialog__headerbtn {
        position: absolute;
        top: 8px;
        right: 20px;
        padding: 0;
        background: 0 0;
        border: none;
        outline: 0;
        cursor: pointer;
        font-size: 16px;
      }
      .el-dialog__close {
        color: #fff;

        // position: relative;
        // top: -7px;
        // left: 10px;
      }
    }

    // .el-dialog__title {
    //   color: #3c4354;
    //   // font-family: PingFangSC-Regular;
    //   font-size: 16px;
    //   //line-height: 6px;
    // }
    // .el-dialog__body {
    //   background-color: #e4ebf1;
    // }
  }
}
</style>
