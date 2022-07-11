/** 换热站 区间报表*/
<template>
  <div class="card-centent">
    <el-row>
      <el-col :span="6" v-for="item in tableData" :key="item.Sid"
        ><div class="centent">
          <div class="centent-item">
            <!-- <span> {{ item.Station }}</span>
            <span> {{ item.Community }}</span>
            <span> {{ item.Tower }}</span>
            <span> {{ item.Unit }}</span> -->
            <span class="centent-item-span1"> {{ item.Num }}</span>
            <span class="centent-item-span2"
              ><i class="el-icon-setting"></i
            ></span>
          </div>
          <div class="centent-item">
            <span class="centent-item-span1"> {{ item.Num }}</span>
            <span class="centent-item-span2"
              ><i class="el-icon-setting"></i
            ></span>
          </div>
          <div class="centent-item">
            <!-- <span> {{ item.Station }}</span>
            <span> {{ item.Community }}</span>
            <span> {{ item.Tower }}</span>
            <span> {{ item.Unit }}</span> -->
            <span class="centent-item-span1"> {{ item.Num }}</span>
            <span class="centent-item-span2"
              ><i class="el-icon-setting"></i
            ></span>
          </div>
          <div class="centent-item">
            <!-- <span> {{ item.Station }}</span>
            <span> {{ item.Community }}</span>
            <span> {{ item.Tower }}</span>
            <span> {{ item.Unit }}</span> -->
            <span class="centent-item-span1"> {{ item.Num }}</span>
            <span class="centent-item-span2"
              ><i class="el-icon-setting"></i
            ></span>
          </div></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  components: {},
  created() {
    this.tableData = this.$store.getters.get_inDoorDataAndInfo; //表格数据
  },
};
</script>
<style lang="scss">
.card-centent {
  background-color: #fff;
  width: 100%;
  height: 100%;
  overflow: auto;
  color: #000;
  // .ss {
  //   display: inline-block;
  // }
  .centent {
    margin: 0.5rem 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 4px;
    //display: inline-block;
    //width: calc(33% - 4.1rem);
    background-color: #f5f7fd;
    height: 8.8rem;
    // position: relative;
    box-shadow: none;
    background-color: #e5e8f6;
    display: flex; //弹性盒模型
    flex-direction: column; //设置元素为垂直显示
    .centent-item {
      //background-color: green;
      display: flex;
      margin: 5px;
      justify-content: space-between;
      .centent-item-span1 {
        flex: 1;
        //text-align: right;
      }
      .centent-item-span2 {
        flex: 1;
        text-align: right;
      }
    }
    .info span {
      padding: 5px;
    }
  }
  .A2 {
    background-color: palevioletred;
  }
}
</style>
