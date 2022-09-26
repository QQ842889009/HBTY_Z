<template>
    <div class="card" :style="{ width: this.width, height: this.height }">
        <div class="station">{{allData.station}}</div>

        <!-- 二供压力高高限 -->
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="4">
                <div class="grid-content bg-purple">二供压力</div>
            </el-col>
            <el-col :span="3">
                <div class="grid-content bg-purple1">
                    {{allData.PT21}}
                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content bg-purple">MPa</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    二供压力高高限
                </div>
            </el-col>
            <el-col :span="3">
                <div class="grid-content bg-purple">
                    <el-input v-model="allData.PT21HH" @focus="getInputFocus($event)"
                        oninput="value=value.replace(/[^0-9.]/g,'');if(value>1.6){value=1.6}" :controls="false"
                        @keyup.enter.native="changePT21HH($event)">
                        <!-- <template slot="append">Mpa</template> -->
                    </el-input>

                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content bg-purple">MPa</div>
            </el-col>
            <el-col :span="3">
                <div class="grid-content bg-purple">
                    <el-switch v-model="allData.pt21_lock" :width="60" :active-value="1" :inactive-value="0" active-color="#13ce66"
                        inactive-color="#ff4949" active-text="开" inactive-text="关" @change="changept21Lock($event)">
                    </el-switch>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    停循环泵
                </div>
            </el-col>
        </el-row>

        <!-- 二回压力低低限 -->
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="4">
                <div class="grid-content bg-purple">二回压力</div>
            </el-col>
            <el-col :span="3">
                <div class="grid-content bg-purple1">
                    {{allData.PT22}}
                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content bg-purple">MPa</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    二回压力低低限
                </div>
            </el-col>
            <el-col :span="3">
                <div class="grid-content bg-purple">
                    <el-input v-model="allData.PT22LL" @focus="getInputFocus($event)"
                        oninput="value=value.replace(/[^0-9.]/g,'');if(value>1.6){value=1.6}" :controls="false"
                        @keyup.enter.native="changePT22LL($event)">
                        <!-- <template slot="append">Mpa</template> -->
                    </el-input>

                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content bg-purple">MPa</div>
            </el-col>
            <el-col :span="3">
                <div class="grid-content bg-purple">
                    <el-switch v-model="allData.pt22_lock" :width="60" :active-value="1" :inactive-value="0" active-color="#13ce66"
                        inactive-color="#ff4949" active-text="开" inactive-text="关" @change="changept22Lock($event)">
                    </el-switch>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    停循环泵
                </div>
            </el-col>
        </el-row>

        <!-- 二回压力高高限 -->
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    二回压力高高限
                </div>
            </el-col>
            <el-col :span="3">
                <div class="grid-content bg-purple">
                    <el-input v-model="allData.PT22SP_HH" @focus="getInputFocus($event)"
                        oninput="value=value.replace(/[^0-9.]/g,'');if(value>1.6){value=1.6}" :controls="false"
                        @keyup.enter.native="changePT22HH($event)">
                        <!-- <template slot="append">Mpa</template> -->
                    </el-input>

                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content bg-purple">MPa</div>
            </el-col>

            <el-col :span="4">
                <div class="grid-content bg-purple">
                    停补水泵
                </div>
            </el-col>
        </el-row>

        <!-- 1#循环泵 -->
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    1#循环泵泵停泵
                </div>
            </el-col>
            <el-col :span="3">
                <div class="grid-content bg-purple">
                    <el-switch v-model="allData.bp21a_lock" :width="60" :active-value="1" :inactive-value="0" active-color="#13ce66"
                        inactive-color="#ff4949" active-text="开" inactive-text="关" @change="changebp21Lock($event)">
                    </el-switch>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    停循环泵
                </div>
            </el-col>
        </el-row>

        <!-- 2#循环泵 -->
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    2#循环泵泵停泵
                </div>
            </el-col>
            <el-col :span="3">
                <div class="grid-content bg-purple">
                    <el-switch v-model="allData.bp22a_lock" :width="60" :active-value="1" :inactive-value="0" active-color="#13ce66"
                        inactive-color="#ff4949" active-text="开" inactive-text="关" @change="changebp22Lock($event)">
                    </el-switch>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    停循环泵
                </div>
            </el-col>
        </el-row>

        <!-- 液位低低限 -->
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="4">
                <div class="grid-content bg-purple">液位</div>
            </el-col>
            <el-col :span="3">
                <div class="grid-content bg-purple1">
                    {{allData.LT}}
                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content bg-purple">M</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    液位低低限
                </div>
            </el-col>
            <el-col :span="3">
                <div class="grid-content bg-purple">
                    <el-input v-model="allData.LTLL" @focus="getInputFocus($event)"
                        oninput="value=value.replace(/[^0-9.]/g,'');if(value>3){value=3}"
                        @keyup.enter.native="changeLTLL($event)">
                        <!-- <template slot="append">Mpa</template> -->
                    </el-input>

                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content bg-purple">M</div>
            </el-col>
            <el-col :span="3">
                <div class="grid-content bg-purple">
                    <el-switch v-model="allData.lt_lock" :width="60" :active-value="1" :inactive-value="0" active-color="#13ce66"
                        inactive-color="#ff4949" active-text="开" inactive-text="关" @change="changeltLock($event)">
                    </el-switch>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    停补水泵
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // station: '1',

            // pt21: "12", //二供压力
            // pt21HH: "1.2",//二供压力高高限
            // pt21Lock: "",//二供压力锁

            // pt22: "13", //二回压力
            // pt22LL: "0.8",//二回压力低低限
            // pt22Lock: "",//二回压力锁
            // pt22HH: "",//二回压力高高限

            // bp21Lock: 1,
            // bp22Lock: "",

            // lt: "", //液位   
            // ltLL: "",//液位低低
            // ltLock: "",  //液位锁

            msg:{
                sid:"",
                plcTag:"",
                tagValue:"",
                userName:"admin"
            },

        }
    },
    created() {
        // if (this.allData != undefined) {
        //     this.station = this.allData.station;

        //     this.pt21 = this.allData.PT21;
        //     this.pt21HH = this.allData.PT21HH;
        //     this.pt21Lock = this.allData.pt21_lock;

        //     this.pt22 = this.allData.PT22;
        //     this.pt22LL = this.allData.PT22LL;
        //     this.pt22Lock = this.allData.pt22_lock;
        //     this.pt22HH = this.allData.PT22HH;

        //     this.bp21Lock = this.allData.bp21a_lock;
        //     this.bp22Lock = this.allData.bp22a_lock;

        //     this.lt = this.allData.LT;
        //     this.ltLL = this.allData.LTLL;
        //     this.ltLock = this.allData.lt_lock;
        // }

        // console.log("站的sid",this.allData)
        
        this.msg.sid=this.sid;
    },
    props: {
        width: {
            type: String,
            default: "850px"
        },
        height: {
            type: String,
            default: "450px"
        },
        allData: {},
        sid: "",
    },
    methods: {
        changePT21HH(event) {
            event.target.blur();
            this.msg.plcTag="PT21_HH";
            this.msg.tagValue=event.target.value;
            console.log(this.msg);
            if (this.$stompClient.connected === true) {
                this.$stompClient.send(
                    "/hbty/fySetupPLCA",
                    {},
                    JSON.stringify(this.msg)
                );
            }
        },
       
        changePT22LL(event) {
            event.target.blur();
            this.msg.plcTag="PT22_LL";
            this.msg.tagValue=event.target.value;
            console.log(this.msg);
            if (this.$stompClient.connected === true) {
                this.$stompClient.send(
                    "/hbty/fySetupPLCA",
                    {},
                    JSON.stringify(this.msg)
                );
            }
        },
        changePT22HH(event) {
            event.target.blur();
            console.log("改变二回压力高高限")
            this.msg.plcTag="PT22SP_HH";
            this.msg.tagValue=event.target.value;
            console.log(this.msg);
            if (this.$stompClient.connected === true) {
                this.$stompClient.send(
                    "/hbty/fySetupPLCA",
                    {},
                    JSON.stringify(this.msg)
                );
            }
        },
        changeLTLL(event) {
            event.target.blur();
            console.log("改变液位低低限", event)
            this.msg.plcTag="LT_LL";
            this.msg.tagValue=event.target.value;
            console.log(this.msg);
            if (this.$stompClient.connected === true) {
                this.$stompClient.send(
                    "/hbty/fySetupPLCA",
                    {},
                    JSON.stringify(this.msg)
                );
            }
        },
        changept21Lock(event) {
            this.msg.plcTag="PT21_LOCK";
            this.msg.tagValue=event;
            console.log(this.msg);
            if (this.$stompClient.connected === true) {
                this.$stompClient.send(
                    "/hbty/fySetupPLCB",
                    {},
                    JSON.stringify(this.msg)
                );
            }
        },
        changept22Lock(event) {
            console.log("----pt22Lock-----", event)
            this.msg.plcTag="PT22_LOCK";
            this.msg.tagValue=event;
            console.log(this.msg);
            if (this.$stompClient.connected === true) {
                this.$stompClient.send(
                    "/hbty/fySetupPLCB",
                    {},
                    JSON.stringify(this.msg)
                );
            }
        },
        changebp21Lock(event) {
            this.msg.plcTag="BP21A_LOCK";
            console.log("BP21A_LOCK",event)
            this.msg.tagValue=event;
            console.log(this.msg);
            if (this.$stompClient.connected === true) {
                this.$stompClient.send(
                    "/hbty/fySetupPLCB",
                    {},
                    JSON.stringify(this.msg)
                );
            }
        },
        changebp22Lock(event) {
            console.log("----bp22Lock-----", event)
            this.msg.plcTag="BP22A_LOCK";
            this.msg.tagValue=event;
            console.log(this.msg);
            if (this.$stompClient.connected === true) {
                this.$stompClient.send(
                    "/hbty/fySetupPLCB",
                    {},
                    JSON.stringify(this.msg)
                );
            }
        },
       
        changeltLock(event) {
            console.log("----ltLock-----", event)
            this.msg.plcTag="LT_LOCK";
            this.msg.tagValue=event;
            console.log(this.msg);
            if (this.$stompClient.connected === true) {
                this.$stompClient.send(
                    "/hbty/fySetupPLCB",
                    {},
                    JSON.stringify(this.msg)
                );
            }
        },
        getInputFocus(event) {
            // console.log("event", event)
            event.currentTarget.select();
        }
    },
}
</script>

<style lang="scss" scoped>
.card {
    background: rgb(90, 89, 83);
    margin-top: 1%;
    margin-right: 1%;
    margin-left: 1%;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 4px #0bbd40 inset, 0px 0px 5px -4px #0bbd40;
}

.station {
    font-size: 30px;
    position: relative;
    top: 1%;
    left: 5%;
    // background: #000;
}

.el-row {
    margin-bottom: 0.5%;

    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 10px;
    margin-top: 0.3%;
    margin-right: 1%;
    margin-left: 1%;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    // background: #d3dce6;
    // width: 25%;
    // height: 100%;
    box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
}

.bg-purple1 {
    background: #c4bfbf;
    color: #0a0a0a;
    // width: 25%;
    // height: 100%;
    // box-shadow: 0px 0px 5px 4px #3498db inset, 0px 0px 5px -4px #3498db;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 40px;
    text-align: center;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

}

.row-bg {
    padding: 10px 10px;
    // background-color: #f9fafc;
}

// .el-input[disabled],el-input:disabled{
//   opacity:1;
//   background: #fff;  
//   background-color: rgb(235, 235, 228);
// }

.el-input {
    ::v-deep.el-input__inner {
        font-size: 18px;
    }
}

.el-switch {

    ::v-deep.el-switch__label--left {
        position: relative;
        left: 46px;
        color: rgb(238, 9, 9) !important;
        z-index: -1111;
    }

    ::v-deep.el-switch__label--right {
        position: relative;
        right: 46px;
        color: #13ce66 !important;
        z-index: -1111;
    }

    ::v-deep.el-switch__label--right.is-active {
        z-index: 1111;
        color: rgb(245, 239, 239) !important;
    }

    ::v-deep.el-switch__label--left.is-active {
        z-index: 1111;
        color: #f3fcf7 !important;
    }
}
</style>
