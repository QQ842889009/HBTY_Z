<template>
    <div class="minBox">
        <div class="selectBox">
            <div class="selectText"><span>数据筛选</span></div>

            <el-select class="select" v-model="value" filterable 
            placeholder="1#换热站"
             @change="cleraInfo"
            >
                <el-option v-for="item in stations" 
                :key="item.Sid" 
                :label="item.Station" 
                :value="item.Sid"             
                >
                </el-option>
            </el-select>
        </div>
        <div class="showBox">
             <FtLineBox
            title_name="二网实时温度"
            :getData="realtimeInfo"
            :boxHeight="'44%'"
            :yUnit="'℃'"
            :key="isUpdata"
          />
            <FtLineBox
            title_name="二网实时压力"
            :getData="realtimeInfo"
            :boxHeight="'44%'"
            :yUnit="'t'"
            :key="isUpdata"
          />
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
// import {deepClone} from "assets/js/storeDataInit/realtime"
import _ from "lodash"
import FtLineBox from "./components/FtLineBoxy.vue";
export default {
    data() {
        return {
            value: '',
            realtimeInfo:[],
            isUpdata:0
        }
    },
    created() {
       
        console.log('staPlcData------', this.staPlcData)
    //    this.getRealtimeInfos(this.value);
    //   deepClone(this.realtimeInfo,this.realtimeInfos)
       this.realtimeInfo=_.cloneDeep(this.realtimeInfos)
       console.log('realtimeInfo---000---',this.realtimeInfo)
    },
    mounted(){  
        //  this.timer=setInterval(() => {
        //     this.getRealtimeData(this.value)
        //    console.log('realtimeInfo---111---', this.realtimeInfo)
        // }, 10000);     
    },

    computed: {
        ...mapState('realtime', ['stations','realtimeInfos']),
        ...mapState('plcS7', ['staPlcData']),
       
    },
    methods: {
         //实时信息
        getRealtimeData(value) {
            if (value.length != 0) {
                let staPlcData = this.staPlcData;
                let obj={};
                for (let i = 0; i < staPlcData.length; i++) {
                    if (staPlcData[i].Sid == value) {
                        console.log("有新的数据",staPlcData[i].Sid)
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
                    }
                }            
            }
        },
        getRealtimeInfos(sid){
            let msgSend={
                Sid:String(sid)
            }
            if(this.$stompClientRealtime.connected===true){
                this.$stompClientRealtime.send("hbty/hoursStationData",JSON.stringify(msgSend))
            }
        else {
        console.log("实时信息请求失败")
      }
        },
        cleraInfo(){
            console.log("站发生改变")
             clearInterval(this.timer)
             this.isUpdata++;
            //  this.realtimeInfo=_.cloneDeep(this.realtimeInfos)
             this.timer=setInterval(() => {
            this.getRealtimeData(this.value)
           console.log('realtimeInfo---111---', this.realtimeInfo)
        }, 10000);  
            // this.realtimeInfo=_.cloneDeep(this.realtimeInfos)
        }
    },
    components: {
         FtLineBox,
    },
    beforeDestroy(){
        clearInterval(this.timer)
        console.log("vm即将销毁")
        this.realtimeInfo=[];
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
    .showBox{
        width: 100%;
        height: 85%;
       background-color:  rgba(34, 40, 44, 0.8);
        // box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
    }
}
</style>