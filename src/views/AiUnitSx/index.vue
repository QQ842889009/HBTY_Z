<template>
  <div class="deliverySetting">
    <div class="deliverySetting-table">
      <div class="table-head">
        <div class="selection">
          <el-checkbox
            v-model="ischeckAll"
            :indeterminate="indeterminate"
            @change="handleCheckAllChange"
          ></el-checkbox>
        </div>
        <div class="width185">分区名称</div>
        <div class="width265"></div>
      </div>
      <div
        v-for="(partition, partitionIndex) in distributorsInfo"
        :key="partitionIndex"
        class="table-body"
        @click="changeTab(partitionIndex)"
      >
        <!-- :class="{'active':!partitionIndex}" -->
        <div
          class="secondFloor"
          :class="partitionIndex === activeIndex ? 'active' : ''"
        >
          <div class="selection">
            <p>
              <el-checkbox
                :key="partitionIndex"
                v-model="partition.selected"
                :indeterminate="partition.indeterminate"
                @change="
                  handleCheckedCountryAllChange(
                    partitionIndex,
                    partition.partitionId,
                    $event
                  )
                "
              ></el-checkbox>
            </p>
          </div>
          <div class="width185">
            <p>{{ partition.partitionName }}</p>
          </div>
        </div>
        <div v-show="partitionIndex === activeIndex" class="width265">
          <el-checkbox
            v-for="country in partition.country"
            :key="country.id"
            v-model="country.selected"
            :label="country"
            :class="{ activeTwo: !partitionIndex }"
            @change="
              handleCheckedCountryChange(
                partitionIndex,
                country.id,
                partition.partitionId,
                $event
              )
            "
          >
            {{ country.fieldName }}
          </el-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //name: 'deliverySetting',
  components: {},
  props: {},
  data() {
    return {
      distributorsInfo: [
        {
          partitionName: "1区",
          selected: false,
          partitionId: 1,
          isIndeterminate: false,
          country: [
            {
              id: "1",
              fieldName: "奥地利",
              fieldTableName: "奥地利",
              selected: false
            },
            {
              id: "2",
              fieldName: "芬兰",
              fieldTableName: "芬兰",
              selected: false
            },
            {
              id: "3",
              fieldName: "意大利",
              fieldTableName: "意大利",
              selected: false
            },
            {
              id: "4",
              fieldName: "葡萄牙",
              fieldTableName: "葡萄牙",
              selected: false
            },
            {
              id: "9",
              fieldName: "西班牙",
              fieldTableName: "西班牙",
              selected: false
            },
            {
              id: "10",
              fieldName: "瑞典",
              fieldTableName: "瑞典",
              selected: false
            }
          ]
        },
        {
          partitionName: "2区",
          selected: false,
          partitionId: 2,
          isIndeterminate: false,
          country: [
            {
              id: "5",
              fieldName: "丹麦",
              fieldTableName: "单买",
              selected: false
            },
            {
              id: "6",
              fieldName: "法国",
              fieldTableName: "法国",
              selected: false
            }
          ]
        },
        {
          partitionName: "3区",
          selected: false,
          partitionId: 3,
          isIndeterminate: false,
          country: [
            {
              id: "7",
              fieldName: "德国",
              fieldTableName: "德国",
              selected: false
            },
            {
              id: "8",
              fieldName: "瑞士",
              fieldTableName: "瑞士",
              selected: false
            }
          ]
        }
      ],
      ischeckAll: false,
      indeterminate: false,
      active: "active",
      activeIndex: 0
    }
  },
  computed: {},
  methods: {
    handleCheckAllChange(e) {
      //一级change事件
      this.ischeckAll = e
      this.indeterminate = false
      for (var i = 0, len = this.distributorsInfo.length; i < len; i++) {
        //二级全选反选
        this.distributorsInfo[i].selected = e
        this.distributorsInfo[i].indeterminate = false //去掉二级不确定状态
        for (
          var j = 0, len1 = this.distributorsInfo[i].country.length;
          j < len1;
          j++
        ) {
          //三级全选反选
          this.distributorsInfo[i].country[j].selected = e
        }
      }
    },
    handleCheckedCountryAllChange(index, topId, e) {
      //二级change事件
      this.distributorsInfo[index].selected = e //二级勾选后，子级全部勾选或者取消
      this.distributorsInfo[index].indeterminate = false //去掉二级不确定状态
      var childrenArray = this.distributorsInfo[index].country
      if (childrenArray)
        for (var i = 0, len = childrenArray.length; i < len; i++)
          childrenArray[i].selected = e

      this.getIsCheckAll()
    },
    handleCheckedCountryChange(topIndex, sonId, topId, e) {
      //三级change事件
      var childrenArray = this.distributorsInfo[topIndex].country
      var tickCount = 0,
        unTickCount = 0,
        len = childrenArray.length
      for (var i = 0; i < len; i++) {
        if (sonId == childrenArray[i].id) childrenArray[i].selected = e
        if (childrenArray[i].selected == true) tickCount++
        if (childrenArray[i].selected == false) unTickCount++
      }
      if (tickCount == len) {
        //三级级全勾选
        this.distributorsInfo[topIndex].selected = true
        this.distributorsInfo[topIndex].indeterminate = false
      } else if (unTickCount == len) {
        //三级级全不勾选
        this.distributorsInfo[topIndex].selected = false
        this.distributorsInfo[topIndex].indeterminate = false
      } else {
        this.distributorsInfo[topIndex].selected = false
        this.distributorsInfo[topIndex].indeterminate = true //添加二级不确定状态
      }
      this.getIsCheckAll()
    },
    getIsCheckAll() {
      var tickCount = 0,
        unTickCount = 0,
        indeterminateCount = 0,
        ArrLength = this.distributorsInfo.length
      for (var j = 0; j < ArrLength; j++) {
        //全选checkbox状态
        if (this.distributorsInfo[j].selected == true) tickCount++
        if (this.distributorsInfo[j].selected == false) unTickCount++
        if (this.distributorsInfo[j].indeterminate == true) indeterminateCount++
      }
      if (tickCount == ArrLength) {
        //二级全勾选
        this.ischeckAll = true
        this.indeterminate = false
      } else if (unTickCount == ArrLength) {
        //二级全不勾选
        this.ischeckAll = false
        if (indeterminateCount > 0) {
          this.indeterminate = true
        } else {
          this.indeterminate = false
        }
      } else {
        this.ischeckAll = false
        this.indeterminate = true //添加一级不确定状态
      }
    },
    // tab切换
    changeTab(idx) {
      // 事件处理函数中的this指向Vue的实例
      this.activeIndex = idx
    }
  }
}
</script>
<style lang="scss" scoped>
.deliverySetting {
  padding: 20px 0;
  height: 200px;
  position: relative;
  display: block;
  width: 100%;
  overflow: hidden;
  v-deep .el-table {
    thead {
      tr {
        th {
          font-size: 14px;
        }
      }
    }
    tbody {
      tr {
        td {
          vertical-align: baseline;
          p {
            line-height: 30px;
          }
          .el-checkbox-group {
            display: flex;
            flex-direction: column;
            label {
              line-height: 30px;
              margin-left: 0;
            }
          }
        }
      }
    }
  }
  .deliverySetting-table {
    font-size: 14px;
    color: #333;
    .table-head,
    .table-body {
      display: flex;
      padding: 10px 0;
      .selection {
        text-align: center;
        line-height: 36px;
        display: inline;
        float: left;
      }
      .width185 {
        padding: 0px 26px;
      }
      .width265 {
        width: 100%;
        display: inline;
        position: absolute;
        left: 0;
        top: 130px;
        padding-left: 21px;
        label {
          display: inline-block;
          float: left;
          line-height: 30px;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          margin-right: 1em;
        }
      }
    }
    ::v-deep .table-head {
      height: 36px;
      align-items: center;
      background-color: #e7f2ff;
      padding-left: 21px;
    }
    .table-body {
      color: #666;
      display: inline-block;
      float: left;
      &:hover {
        // background-color: #f5f7fa;
      }
      p {
        line-height: 30px;
        display: inline;
        float: left;
        margin: 0px;
      }
    }
  }
  .deliverySetting-btn {
    /*width: 100%;*/
    height: 59px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: -55px;
    right: -16px;
    z-index: 100;
    .tabs-btn {
      min-width: 90px;
      height: 34px;
      line-height: 32px;
      padding: 0 10px;
      color: #2387f7;
      border: solid 1px #4fa2ff;
      background-color: #e7f2ff;
      cursor: pointer;
      &:nth-of-type(2) {
        margin: 0 15px;
      }
      input {
        border: none;
        background: transparent;
        color: inherit;
        cursor: inherit;
        outline: none;
        margin: 0;
        padding: 0;
      }
      &:hover {
        color: #fff;
        background-color: #2387f7;
      }
    }
  }
}
.secondFloor {
  display: inline-block;
  float: left;
  border-bottom: solid 1px #ccc;
  padding: 2px 20px;
  cursor: pointer;
}
.active {
  border: solid 1px #ccc;
  border-bottom: 0px;
}
.addclass {
  border: solid 1px #ccc;
  border-bottom: 0;
}
</style>
