
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
      <el-form
        label-position="top"
        label-width="120px"
        :model="ruleForm"
        ref="ruleForm"
        :inline="true"
      >
        <el-form-item label="站名33">
          <el-input v-model="ruleForm.station"></el-input>
        </el-form-item>
        <el-form-item label="面积">
          <el-input v-model="ruleForm.space"></el-input>
        </el-form-item>
        <el-form-item label="面积系数">
          <el-input v-model="ruleForm.space_k"></el-input>
        </el-form-item>
        <el-form-item label="一网1#泵流量">
          <el-input v-model="ruleForm.bp11_f"></el-input>
        </el-form-item>
        <el-form-item label="一网1#泵扬程">
          <el-input v-model="ruleForm.bp11_h"></el-input>
        </el-form-item>
        <el-form-item label="一网1#泵功率">
          <el-input v-model="ruleForm.bp11_p"></el-input>
        </el-form-item>
        <el-form-item label="一网2#泵流量">
          <el-input v-model="ruleForm.bp12_f"></el-input>
        </el-form-item>
        <el-form-item label="一网2#泵扬程">
          <el-input v-model="ruleForm.bp12_h"></el-input>
        </el-form-item>
        <el-form-item label="一网2#泵功率">
          <el-input v-model="ruleForm.bp12_p"></el-input>
        </el-form-item>
        <el-form-item label="二网1#泵流量">
          <el-input v-model="ruleForm.bp21_f"></el-input>
        </el-form-item>
        <el-form-item label="二网1#泵扬程">
          <el-input v-model="ruleForm.bp21_h"></el-input>
        </el-form-item>
        <el-form-item label="二网1#泵功率">
          <el-input v-model="ruleForm.bp21_p"></el-input>
        </el-form-item>
        <el-form-item label="二网2#泵流量">
          <el-input v-model="ruleForm.bp22_f"></el-input>
        </el-form-item>
        <el-form-item label="二网2#泵扬程">
          <el-input v-model="ruleForm.bp22_h"></el-input>
        </el-form-item>
        <el-form-item label="二网2#泵功率">
          <el-input v-model="ruleForm.bp22_p"></el-input>
        </el-form-item>
        <el-form-item label="1#补水泵流量">
          <el-input v-model="ruleForm.mp1_f"></el-input>
        </el-form-item>
        <el-form-item label="1#补水扬程">
          <el-input v-model="ruleForm.mp1_h"></el-input>
        </el-form-item>
        <el-form-item label="1#补水泵功率">
          <el-input v-model="ruleForm.mp1_p"></el-input>
        </el-form-item>
        <el-form-item label="2#补水泵流量">
          <el-input v-model="ruleForm.mp2_f"></el-input>
        </el-form-item>
        <el-form-item label="2#补水泵扬程">
          <el-input v-model="ruleForm.mp2_h"></el-input>
        </el-form-item>
        <el-form-item label="2#补水泵功率">
          <el-input v-model="ruleForm.mp2_p"></el-input>
        </el-form-item>
        <el-form-item label="一分支名称">
          <el-input v-model="ruleForm.bra_name_1"></el-input>
        </el-form-item>
        <el-form-item label="二分支名称">
          <el-input v-model="ruleForm.bra_name_2"></el-input>
        </el-form-item>
        <el-form-item label="三分支名称">
          <el-input v-model="ruleForm.bra_name_3"></el-input>
        </el-form-item>
        <el-form-item label="四分支名称">
          <el-input v-model="ruleForm.bra_name_4"></el-input>
        </el-form-item>
        <el-form-item label="五分支名称">
          <el-input v-model="ruleForm.bra_name_5"></el-input>
        </el-form-item>
        <el-form-item label="六分支名称">
          <el-input v-model="ruleForm.bra_name_6"></el-input>
        </el-form-item>
        <el-form-item label="七分支名称">
          <el-input v-model="ruleForm.bra_name_7"></el-input>
        </el-form-item>
        <el-form-item label="八分支名称">
          <el-input v-model="ruleForm.bra_name_8"></el-input>
        </el-form-item>
        <el-form-item label="九分支名称">
          <el-input v-model="ruleForm.bra_name_9"></el-input>
        </el-form-item>
        <el-form-item label="十分支名称">
          <el-input v-model="ruleForm.bra_name_A"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="clearForm(ruleForm)">取 消</el-button>
        <el-button type="primary" @click="changedata(ruleForm)"
          >修 改ww</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { Message } from "element-ui";
export default {
  name: "ArticleList",
  components: {},
  props: {
    title: {
      type: String,
      default: "标题",
    },
    rowData: {
      type: Object,
      default: function () {
        return {};
      },
    },
    width: {
      type: Number,
      default: 700,
    },
    height: {
      type: Number,
      default: 250,
    },
  },
  data() {
    return {
      labelPosition: "right",
      ruleForm: {
        sid: "",
        id: "",
        station: "",
        space: "",
        space_k: "",
        space_b: "",
        bp11_f: "",
        bp11_h: "",
        bp11_p: "",
        bp12_f: "",
        bp12_h: "",
        bp12_p: "",
        bp21_f: "",
        bp21_h: "",
        bp21_p: "",
        bp22_f: "",
        bp22_h: "",
        bp22_p: "",
        mp1_f: "",
        mp1_h: "",
        mp1_p: "",
        mp2_f: "",
        mp2_h: "",
        mp2_p: "",
        bra_name_1: "",
        bra_name_2: "",
        bra_name_3: "",
        bra_name_4: "",
        bra_name_5: "",
        bra_name_6: "",
        bra_name_7: "",
        bra_name_8: "",
        bra_name_9: "",
        bra_name_a: "",
      },
      rules: {
        sid: [{ required: true, message: "请输入表号", trigger: "blur" }],
        concentratorCode: [
          { required: true, message: "请输入集中器号", trigger: "blur" },
        ],
        valveCode: [
          { required: true, message: "请输入户阀号", trigger: "blur" },
        ],
        community: [
          { required: true, message: "请输入小区名称", trigger: "blur" },
        ],
        station: [
          { required: true, message: "请选择换热站", trigger: "change" },
        ],
        num: [{ required: true, message: "请选择门牌号", trigger: "change" }],
      },
      dialogVisible: false,
      isbtn: 0,
      //ff: { a: "1", b: "12", c: "4441" },
    };
  },
  created() {},
  mounted() {},
  watch: {
    rowData(val) {
      //监听传递
      this.ruleForm.station = val.station;
      this.ruleForm.space = val.space;
      this.ruleForm.id = val.id;
      this.ruleForm.sid = val.sid;
      this.ruleForm.space_k = val.space_k;
      this.ruleForm.space_b = val.space_b;
      this.ruleForm.bp11_f = val.bp11_f;
      this.ruleForm.bp11_h = val.bp11_h;
      this.ruleForm.bp11_p = val.bp11_p;
      this.ruleForm.bp12_f = val.bp12_f;
      this.ruleForm.bp12_h = val.bp12_h;
      this.ruleForm.bp12_p = val.bp12_p;
      this.ruleForm.bp21_f = val.bp21_f;
      this.ruleForm.bp21_h = val.bp21_h;
      this.ruleForm.bp21_p = val.bp21_p;
      this.ruleForm.bp22_f = val.bp22_f;
      this.ruleForm.bp22_h = val.bp22_h;
      this.ruleForm.bp22_p = val.bp22_p;

      this.ruleForm.mp1_f = val.mp1_f;
      this.ruleForm.mp1_h = val.mp1_h;
      this.ruleForm.mp1_p = val.mp1_p;
      this.ruleForm.mp2_f = val.mp2_f;
      this.ruleForm.mp2_h = val.mp2_h;
      this.ruleForm.mp2_p = val.mp2_p;
      this.ruleForm.bra_name_1 = val.bra_name_1;
      this.ruleForm.bra_name_2 = val.bra_name_2;
      this.ruleForm.bra_name_3 = val.bra_name_3;
      this.ruleForm.bra_name_4 = val.bra_name_4;
      this.ruleForm.bra_name_5 = val.bra_name_5;
      this.ruleForm.bra_name_6 = val.bra_name_6;
      this.ruleForm.bra_name_7 = val.bra_name_7;
      this.ruleForm.bra_name_8 = val.bra_name_8;
      this.ruleForm.bra_name_9 = val.bra_name_9;
      this.ruleForm.bra_name_a = val.bra_name_a;
    },
  },
  methods: {
    ggtt(v) {
      console.log("------------", v);
    },
    clearForm() {
      this.dialogVisible = false;
      this.isbtn = 0;
      this.ruleForm = {
        station: "",
        space: "",
        id: "",
        sid: "",
        space_k: "",
        space_b: "",
        bp11_f: "",
        bp11_h: "",
        bp11_p: "",
        bp12_f: "",
        bp12_h: "",
        bp12_p: "",
        bp21_f: "",
        bp21_h: "",
        bp21_p: "",
        bp22_f: "",
        bp22_h: "",
        bp22_p: "",
        mp1_f: "",
        mp1_h: "",
        mp1_p: "",
        mp2_f: "",
        mp2_h: "",
        mp2_p: "",
        bra_name_1: "",
        bra_name_2: "",
        bra_name_3: "",
        bra_name_4: "",
        bra_name_5: "",
        bra_name_6: "",
        bra_name_7: "",
        bra_name_8: "",
        bra_name_9: "",
        bra_name_a: "",
      };
    },

    changedata(v) {
      v.id = parseInt(v.id);
      v.sid = parseInt(v.sid);
      v.space = parseFloat(v.space);
      v.space_k = parseFloat(v.space_k);
      v.space_b = parseFloat(v.space_b);

      v.bp11_f = parseFloat(v.bp11_f);
      v.bp11_h = parseFloat(v.bp11_h);
      v.bp11_p = parseFloat(v.bp11_p);
      v.bp12_f = parseFloat(v.bp12_f);
      v.bp12_h = parseFloat(v.bp12_h);
      v.bp12_p = parseFloat(v.bp12_p);
      v.bp21_f = parseFloat(v.bp21_f);
      v.bp21_h = parseFloat(v.bp21_h);
      v.bp21_p = parseFloat(v.bp21_p);
      v.bp22_f = parseFloat(v.bp22_f);
      v.bp22_h = parseFloat(v.bp22_h);
      v.bp22_p = parseFloat(v.bp22_p);

      v.mp1_f = parseFloat(v.mp1_f);
      v.mp1_h = parseFloat(v.mp1_h);
      v.mp1_p = parseFloat(v.mp1_p);

      v.mp2_f = parseFloat(v.mp2_f);
      v.mp2_h = parseFloat(v.mp2_h);
      v.mp2_p = parseFloat(v.mp2_p);

      //onsole.log("----RRR", v);
      this.$http.post("plcdata/tems/plc/updateStationInfo", v).then((res) => {
        // console.log("修改换热站信息返回的数据", res);
        if (res.rows == 1) {
          Message({
            message: "修改成功,请刷新信息",
            type: "success",
          });
          this.dialogVisible = false;
        }
        if (res.rows == 0) {
          Message({
            message: "修改失败",
            type: "error",
          });
          this.dialogVisible = false;
        }
        // this.dialogVisible = false;
      });
    },
    handleClose(done) {
      this.dialogVisible = false;
      this.isbtn = 0;
      this.ruleForm = {
        station: "",
        space: "",
        space_k: "",
        bp11_f: "",
        bp11_h: "",
        bp11_p: "",
        bp12_f: "",
        bp12_h: "",
        bp12_p: "",
        bp21_f: "",
        bp21_h: "",
        bp21_p: "",
        bp22_f: "",
        bp22_h: "",
        bp22_p: "",
        mp1_f: "",
        mp1_h: "",
        mp1_p: "",
        mp2_f: "",
        mp2_h: "",
        mp2_p: "",
        bra_name_1: "",
        bra_name_2: "",
        bra_name_3: "",
        bra_name_4: "",
        bra_name_5: "",
        bra_name_6: "",
        bra_name_7: "",
        bra_name_8: "",
        bra_name_9: "",
        bra_name_a: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.el-form {
  padding: 0 0 0 10px;
  // display: flex !important;
  // align-items: stretch !important;
  // justify-content: center !important;
  // flex-direction: column !important;
  // padding: 0rem 0rem !important;
  // transition: all 0.2s 0.7s !important;
  // overflow: hidden !important;
  // grid-column: 1 / 2 !important;
  // grid-row: 1 / 2 !important;
}
::v-deep {
  .el-form-item__label {
    line-height: 0 !important;
  }
  .el-dialog__wrapper {
    .el-dialog {
      background-color: #fff !important;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      .el-dialog__header {
        background-color: #1890ff !important;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        //padding: 5px 15px 5px;
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
        width: 100%;
      }
    }
  }
}
</style>
