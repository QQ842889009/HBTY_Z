<template>
    <div class="minBox">
        <div class="selectBox">
            <div class="selectText"><span>数据筛选</span></div>

            <el-select class="select" v-model="value" filterable placeholder="1#换热站" @change="cleraInfo($event)">
                <el-option v-for="item in stations" :key="item.Sid" :label="item.Station" :value="item.Sid">
                </el-option>
            </el-select>
        </div>
        <div class="showBox">
            <FtLineBox title_name="二网实时温度" :getData="realtimeInfo" :boxHeight="'44%'" :yUnit="'℃'" :isSort="false" :isRed="isRed" :showLenged=true :key="isUpdata" />
            <FtLineBox title_name="二网实时压力" :getData="realtimeInfo" :boxHeight="'44%'" :yUnit="'t'" :isSort="false" :isRed="isRed" :showLenged=true :key="isUpdata+'-only'" />
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
// import {deepClone} from "assets/js/storeDataInit/realtime"
import _ from "lodash"
import FtLineBox from "./components/FtLineBoxy.vue";
// import formatTime from "assets/js/storeDataInit/realtime"
export default {
    data() {
        return {
            value: '',
            realtimeInfo: [],
            isUpdata: 0,
            isRed:false
        }
    },
    created() {

        console.log('staPlcData------', this.staPlcData)
        //    this.getRealtimeInfos(this.value);
        //   deepClone(this.realtimeInfo,this.realtimeInfos)
        this.realtimeInfo = _.cloneDeep(this.realtimeInfos)
        //    console.log('realtimeInfo---000---',this.realtimeInfo)
    },
    mounted() {
        //  this.timer=setInterval(() => {
        //     this.getRealtimeData(this.value)
        //    console.log('realtimeInfo---111---', this.realtimeInfo)
        // }, 10000);     
    },

    computed: {
        ...mapState('realtime', ['stations', 'realtimeInfos']),
        ...mapState('plcS7', ['staPlcData']),

    },
    methods: {
        //实时信息
        getRealtimeData(value) {
            if (value.length != 0) {
                let staPlcData = this.staPlcData;
                let obj = {};
                let sumTimeTamp = 0;
                let nowTimeTamp = Date.parse(new Date())/1000;
                for (let i = 0; i < staPlcData.length; i++) {
                    if (staPlcData[i].Sid == value) {
                        sumTimeTamp = Math.abs(nowTimeTamp - staPlcData[i].TimesTamp)
                        console.log('当前时间',nowTimeTamp)
                        console.log('系统时间',staPlcData[i].TimesTamp)
                        if (sumTimeTamp <= 10) {
                            console.log("有新的数据", staPlcData[i].Sid)
                            obj.SdateTime = staPlcData[i].SdateTime;
                            obj.TE11 = staPlcData[i].TE11;
                            obj.TE12 = staPlcData[i].TE12;
                            obj.TE21 = staPlcData[i].TE21;
                            obj.TE22 = staPlcData[i].TE22;
                            obj.PT11 = staPlcData[i].PT11;
                            obj.PT12 = staPlcData[i].PT12;
                            obj.PT21 = staPlcData[i].PT21;
                            obj.PT22 = staPlcData[i].PT22;
                            this.realtimeInfo.shift();
                            this.realtimeInfo.push(obj)
                            this.isRed=false
                            // console.log("颜色改变-------", this.seriesColor)
                            // this.isUpdata++;
                        }
                        else {
                            console.log("没有新的数据")
                            obj.SdateTime = this.formatTime();
                            obj.TE11 = 0;
                            obj.TE12 = 0;
                            obj.TE21 = 0;
                            obj.TE22 = 0;
                            obj.PT11 = 0;
                            obj.PT12 = 0;
                            obj.PT21 = 0;
                            obj.PT22 = 0;
                            this.realtimeInfo.shift();
                            this.realtimeInfo.push(obj)
                             this.isRed=true
                            // this.seriesColor="red"
                            // this.isUpdata++;
                        }

                    }
                }
            }
        },
        formatNumber(num) {
            num = num.toString()
            return num[1] ? num : '0' + num
        },
        formatTime() {
            let newDate = new Date();
            let nowHour = newDate.getHours();
            let nowMinutes = newDate.getMinutes();
            let nowDay = newDate.getDate();
            let nowMonth = newDate.getMonth()+1;
            let nowYear = newDate.getFullYear();
            let nowSecond = newDate.getSeconds();
            return nowYear + "-" +this.formatNumber(nowMonth)  + "-" +this.formatNumber(nowDay)  + " " + this.formatNumber(nowHour) + ":" + this.formatNumber(nowMinutes) + ":" +this. formatNumber(nowSecond)
        },
        //请求数据
        getRealtimeInfos(sid) {
            let msgSend = {
                Sid: String(sid)
            }
            if (this.$stompClientRealtime.connected === true) {
                this.$stompClientRealtime.send("hbty/hoursStationData", JSON.stringify(msgSend))
            }
            //把请求到的数据放到this.realtimeInfo中
            else {
                console.log("实时信息请求失败")
            }
        },
        cleraInfo(v) {
            console.log("选择了新的换热站", v)
            clearInterval(this.timer)
            this.isUpdata++;
            this.realtimeInfo = _.cloneDeep(this.realtimeInfos)
            // this.getRealtimeInfos(v)
            this.timer = setInterval(() => {
                this.getRealtimeData(this.value)
                console.log('realtimeInfo---111---', this.realtimeInfo)
            }, 10000);
            // this.realtimeInfo=_.cloneDeep(this.realtimeInfos)
        }
    },
    components: {
        FtLineBox,
    },
    beforeDestroy() {
        clearInterval(this.timer)
        console.log("vm即将销毁")
        this.realtimeInfo = [];
    }


}
</script>
<style lang="scss" scoped>
.minBox {
    height: 100%;
    width: 100%;

    .selectBox {
        background: rgba(48, 112, 168, 0.5);
        height: 15%;
        width: 100%;
        margin-bottom: 1rem;
        box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
    }

    .selectText {
        font-size: 25px;
        font-weight: 700;
        padding: 12px 16px;
        letter-spacing: 2px
    }

    .select {
        left: 16px;
    }

    .showBox {
        width: 100%;
        height: 85%;
        background-color: rgba(34, 40, 44, 0.8);
        // box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
    }
}
</style>