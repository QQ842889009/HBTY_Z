<template>
    <div class="mainBox">
        <div class="topBox">
            <div class="station">
                <span>站点选择</span>
                <el-select class="selectStation" v-model="selectStation" filterable placeholder="1#换热站">
                    <el-option v-for="item in stations" :key="item.Sid" :label="item.Station" :value="item.Sid">
                    </el-option>
                </el-select>
            </div>
            <div class="item">
                <span>参数选择</span>
                <el-select class="selectStation" v-model="selectItem" filterable placeholder="温度"
                    @change="get1($event)">
                    <el-option v-for="item in itemArr" :key="item.id" :label="item.name"
                        :value="{ value: item.value, label: item.name }">
                    </el-option>
                </el-select>
            </div>
            <div class="data">
                <span>时间选择</span>
                <el-date-picker class="selectStation" v-model="selectDate" type="datetime" placeholder="选择日期时间"
                    value-format="yyyy-MM-dd HH:mm:ss" :picker-options="pickerOptions">
                </el-date-picker>

            </div>
            <div class="time">
                <span>时间间隔</span>
                <el-select class="selectStation" v-model="selectTime" filterable placeholder="半小时">
                    <el-option v-for="item in timeArr" :key="item.id" :label="item.name" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <el-button type="primary" class="bt" @click="changeItem">确定</el-button>
        </div>
        <div class="showBox">
            <FtLineBox :title_name="selectItem.label" :getData="data" :boxHeight="'95%'" :yUnit="'℃'" :isSort="false"
                :showLenged=true :key="isUpdata" />
        </div>
    </div>
</template>
<script>

import { mapState } from 'vuex'
import FtLineBox from "./components/FtLineBoxy copy.vue";
import axios from 'axios';
import { URLSearchParams } from 'url';
export default {
    data() {
        return {
            itemArr: [
                { id: 0, name: "流量", value: ['ft11', 'ft21', 'ft31'] },
                { id: 1, name: "温度", value: ['te11', 'te12', 'te21', 'te22', 'te22_MP', 'te221', 'te222', 'te223', 'te224', 'te225', 'te226', 'te227', 'te228', 'te229', 'te22A', 'te12_Z'] },
                { id: 2, name: "压力", value: ['pt11', 'pt12', 'pt21', 'pt22'] },
                { id: 3, name: "频率", value: ['ft11', 'ft21', 'ft31'] },
                { id: 4, name: "阀门", value: ['te11'] },
            ],
            timeArr: [
                { id: 0, name: "半小时", value: "0.5" },
                { id: 1, name: "1小时", value: "1" },
                { id: 2, name: "12小时", value: "12" },
                { id: 3, name: "24小时", value: "24" }
            ],
            selectStation: '',
            selectItem: {
                label: "温度",
                value: ""
            },
            selectDate: '',
            selectTime: '',
            myParams: {},
            data: [],
            isUpdata: 0,
            pickerOptions: {
                disabledDate: (time) => {
                    const maxTime = (Date.now())
                    return time.getTime() > maxTime
                },
            },
        }
    },
    created() {
        this.getNowTime();
        this.selectStation = "29";
        this.selectItem = "";
        this.selectDate = "2022-06-25 05:00:00";
        this.selectTime = "0.5";
    },
    computed: {
        ...mapState('realtime', ['stations']),
    },
    mounted() {

    },
    methods: {
        changeItem() {
            // console.log("ivalue----", `station:${this.selectStation},item:${this.selectItem},date:${this.selectDate},time:${this.selectTime}`)
            var startTime = Date.parse(new Date(this.selectDate).toString())
            var endTime = startTime + (this.selectTime * 60 * 60 * 1000)
            if (endTime > Date.now()) {
                return alert("时间加间隔超过当前时间")
            }
            this.myParams.sid = this.selectStation;
            this.myParams.stArr = this.selectItem.value;
            this.myParams.startTime = startTime;
            this.myParams.endTime = endTime;
            this.myParams.datasize = 10;
            console.log('-------------', this.myParams)
            this.$http.post("plcdata/temsdemo1/plc/datas",this.myParams

            ).then((res) => {
                console.log("接受到的数据", res)
            });
            this.isUpdata++;
            // this.$http({
            //     method:'post',
            //     url:'plcdata/temsdemo1/plc/datas',
            //     data:this.myParams,
            // }).then(res=>{
            //     console.log('接受到的数据',res)
            // })
            // .catch(erroe=>{
            //     console.log("发送数据失败")
            // })
        },

        get1(v) {
            console.log("item------", v);
        },
        getNowTime() {
            console.log(Date.now())
        }
    },
    components: {
        FtLineBox
    }
}
</script>
<style lang="scss" scoped>
.mainBox {
    height: 100%;
    width: 100%;

    .topBox {
        height: 15%;
        width: 100%;
        background: rgba(48, 112, 168, 0.5);
        box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
        display: flex;
        justify-content: flex-start;
        font-size: 25px;
        font-weight: 700;
        padding: 12px 16px;
        letter-spacing: 2px;

        .station {
            height: 80%;
            width: 24%;
            margin-top: 20px;
            // background: red;
        }

        .item {
            height: 80%;
            width: 24%;
            margin-top: 20px;
        }

        .data {
            height: 80%;
            width: 24%;
            margin-top: 20px;

        }

        .time {
            height: 80%;
            width: 24%;
            margin-top: 20px;
            // background-color: red;
        }

        .bt {
            height: 40%;
            width: 6%;
            margin-top: 16px;
            font-size: 20px;
            font-weight: 700;
            padding: 8px 15px;
            letter-spacing: 12px;
            // background-color: red;
        }

        .selectStation {
            left: 20px;
            top: -2px
        }
    }

    .showBox {
        margin-top: 20px;
        height: 85%;
        width: 100%;
        background: rgba(48, 112, 168, 0.5);
    }
}
</style>