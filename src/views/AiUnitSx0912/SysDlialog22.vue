



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
      <div ref="g">
        <slot name="dialog-content"></slot>
      </div>
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
      default: "标题",
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
      //ff: { a: "1", b: "12", c: "4441" },
    };
  },
  created() {},
  mounted() {},
  methods: {
    // resetForm(form) {
    //   console.log("form", form);
    //   this.$refs[form].form.resetFields();
    // },

    handleClose(done) {
      console.log("1", this.$refs.g);
      console.log("22", this.$refs.g.ff);

      this.dialogVisible = false;
      // this.
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
      .el-dialog__body {
        padding: 7px 7px !important;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
      }
    }
  }
}
// .btn {
//   position: absolute;
//   bottom: 2px;
//   right: 5px;
// }
</style>
