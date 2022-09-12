/** 换热站 区间报表*/
<template>
  <div class="card-centent">
    <span class="title"> 选择时间</span>
    <DateTimePicker class="DateTime"></DateTimePicker>
    <!-- <CascaderT :options="options"></CascaderT> -->
    <div class="all">
      <div class="all-item">我是温度24小时趋势</div>
      <div class="all-item">我是阀门24小时趋势</div>
      <div class="all-item">我是温度和阀门的24小时趋势</div>
      <!-- <el-row>
        <el-col :span="24"><div class="centent"></div></el-col>
        <el-col :span="24"><div class="centent"></div></el-col>
        <el-col :span="24"><div class="centent"></div></el-col>
      </el-row> -->
    </div>
  </div>
</template>

<script>
import CascaderT from "components/common/CascaderT" //
import DateTimePicker from "components/common/DateTimePicker" //选择日期时间的模板
export default {
  data() {
    return {
      //选择换热站，小区，楼，单元，开始
    }
  },
  watch: {
    // tableData: {
    //   //这是一个数组里面是对象
    //   handler() {
    //     //watch的一个方法
    //     this.Avg() //要执行的方法
    //   },
    //   deep: true //深度监听
    // }
  },
  created() {},
  mounted() {},
  methods: {},
  components: {
    DateTimePicker
  }
}
</script>
<style lang="scss" scoped>
.card-centent {
  height: 880px;
}
.title {
  padding: 0px 12px;
  font-size: 20px;
}
.DateTime {
  display: inline-block;
  padding: 5px 15px;
}
.all {
  //background-color: red;
  height: 838px;
  display: flex; //弹性盒模型
  flex-direction: column; //设置元素为垂直显示
  // margin: 5px 0;
  // margin: 0.9rem 0.5rem;
  // padding: 0.5rem;
  .all-item {
    flex: auto;
    margin: 7px;
    background-color: rgb(233, 222, 222);
    border-radius: 10px;
    cursor: pointer;
    background-color: #e7eaf3;
    // background-color: rgb(93, 13, 197);
  }
  .all-item:hover {
    background: linear-gradient(
      90deg,
      rgba(127, 189, 223, 0.4) 0,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(2, 146, 222, 0.4)
    );
  }
  // background-color: rgb(223, 30, 30);
}
</style>
