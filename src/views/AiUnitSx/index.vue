<template>
  <div class="checkbox" id="checkbox">
    <div class="content">
      <template v-if="allData != null && allData.length > 0">
        <div
          class="item"
          v-for="(first, firIndex) in allData"
          :key="first.oneId"
        >
          <div class="oneCheck">
            <el-checkbox
              :indeterminate="first.isIndeterminate"
              v-model="first.mychecked"
              @change="firstCheck(firIndex, first.oneId)"
              :label="first.oneName"
            >
              {{ first.oneName }}
              {{ first.mychecked }}
            </el-checkbox>
          </div>
          <div class="twoCheck">
            <template v-for="(second, secIndex) in first.oneData">
              <el-checkbox
                v-model="second.mychecked"
                @change="secondCheck(firIndex, second.twoId)"
                :label="second.twoName"
              >
                {{ second.twoName }}
              </el-checkbox>
            </template>
          </div>
        </div>
      </template>
    </div>
    <div class="footer">
      <el-button type="primary" @click="handleSelectAllChecked">全选</el-button>
      <el-button type="info" @click="handleEmptyAllChecked">清空</el-button>
      <el-button type="success" @click="handleCheckedSure">确认</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mychecked: true,
      allDataTemp: [
        {
          oneId: "1000",
          oneName: "水果",
          oneData: [
            {
              oneId: "1000",
              twoId: "1001",
              twoName: "西瓜",
            },
            {
              oneId: "1000",
              twoId: "1002",
              twoName: "香蕉",
            },
            {
              oneId: "1000",
              twoId: "1003",
              twoName: "苹果",
            },
          ],
        },
        {
          oneId: "2000",
          oneName: "零食",
          oneData: [
            {
              oneId: "2000",
              twoId: "2001",
              twoName: "瓜子",
            },
            {
              oneId: "2000",
              twoId: "2002",
              twoName: "干果",
            },
            {
              oneId: "2000",
              twoId: "2003",
              twoName: "果冻",
            },
          ],
        },
        {
          oneId: "3000",
          oneName: "奶糖",
          oneData: [
            {
              oneId: "3000",
              twoId: "3001",
              twoName: "金丝猴",
            },
            {
              oneId: "3000",
              twoId: "3002",
              twoName: "大白兔",
            },
            {
              oneId: "3000",
              twoId: "3003",
              twoName: "旺仔",
            },
          ],
        },
      ],
      allData: [],
      checkedId: [], //选中的id
      checkedName: [], //选中的name
    };
  },
  methods: {
    /* 获取数据 */
    getCheckBoxData() {
      // console.log(response.data);
      if (1 === 1) {
        var result = this.allDataTemp;
        for (var i = 0; i < result.length; i++) {
          result[i]["mychecked"] = false; //一级是否选中
          result[i]["isIndeterminate"] = false; //未全选但已经有了选项的状态
          for (var j = 0; j < result[i].oneData.length; j++) {
            result[i].oneData[j]["mychecked"] = false; //二级是否选中
          }
        }
        this.allData = result;
        console.log(this.allData);
      }
    },

    /* 一级选择事件 */
    firstCheck(index) {
      console.log("多选框中的-----一级选择事件", index);
      console.log("*-*-", this.allData[index].mychecked);
      if (this.allData[index].mychecked == false) {
        console.log("ggggg");
        this.allData[index].isIndeterminate = false;
        let childrenArray = this.allData[index].oneData;
        if (childrenArray) {
          let len = childrenArray.length;
          for (var i = 0; i < len; i++) {
            childrenArray[i].mychecked = false;
          }
        }
      } else if (this.allData[index].mychecked == true) {
        this.allData[index].isIndeterminate = false;
        let childrenArray = this.allData[index].oneData;
        if (childrenArray) {
          let len = childrenArray.length;
          for (var i = 0; i < len; i++) {
            childrenArray[i].mychecked = true;
          }
        }
      }
    },
    /* 二级选择事件 */
    secondCheck(index) {
      console.log("多选框中的-----2级选择事件", index);
      let childrenArray = this.allData[index].oneData;
      let tickCount = 0,
        untickCount = 0,
        len = childrenArray.length;
      for (var i = 0; i < len; i++) {
        if (childrenArray[i].mychecked === true) {
          tickCount++;
        } else {
          untickCount++;
        }
      }
      if (tickCount == len) {
        //二级全勾选  一级勾选
        this.allData[index].mychecked = true;
        this.allData[index].isIndeterminate = false;
      } else if (tickCount == 0) {
        //二级全不勾选
        this.allData[index].isIndeterminate = false;
      } else {
        //二级未全选  一级不勾选
        this.allData[index].mychecked = false;
        this.allData[index].isIndeterminate = true;
      }
    },
    /* 全选 */
    handleSelectAllChecked() {
      console.log("多选框中的-----全选择事件");
      for (var i = 0; i < this.allData.length; i++) {
        this.allData[i].mychecked = true;
        this.firstCheck(i); //调用一级选择事件
      }
    },
    /* 清空全选 */
    handleEmptyAllChecked() {
      for (var i = 0; i < this.allData.length; i++) {
        this.allData[i].mychecked = false;
        this.allData[i].isIndeterminate = false;
        this.firstCheck(i); //调用一级选择事件
      }
    },
    handleCheckedSure() {
      this.checkedId = [];
      this.checkedName = [];
      for (var i = 0; i < this.allData.length; i++) {
        let childrenArray = this.allData[i].oneData;
        let len = childrenArray.length;
        for (var j = 0; j < len; j++) {
          if (childrenArray[j].mychecked == true) {
            this.checkedId.push(childrenArray[j].twoId);
            this.checkedName.push(childrenArray[j].twoName);
          }
        }
      }
      console.log(this.checkedId);
      console.log(this.checkedName);
    },
  },
  mounted() {
    this.getCheckBoxData();
  },
};
</script>

<style>
.checkbox {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.content {
  width: 50%;
  height: 30%;
  margin: 0 auto;
  margin-top: 5%;
}

.content .item {
  margin-bottom: 30px;
}

.item .oneCheck {
  background-color: #e1e1e1;
}

.item .oneCheck .el-checkbox {
  margin-left: 5px;
  padding: 5px;
}

.item .oneCheck .el-checkbox__label {
  font-size: 18px;
  font-weight: bold;
}

.item .twoCheck {
  margin-left: 30px;
}

.footer {
  width: 50%;
  height: 30%;
  padding-top: 20px;
  margin: 0 auto;
}
</style>