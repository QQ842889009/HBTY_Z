<template>
    <div class="card" :style="{ width: this.width, height: this.height }">
        <div class="station">1号站</div>

        <!-- 二供压力高高限 -->
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="4">
                <div class="grid-content bg-purple">二供压力</div>
            </el-col>
            <el-col :span="3">
                <div class="grid-content bg-purple1">
                   {{te21}}
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
                    <el-input v-model="te21HH" @focus="getInputFocus($event)"
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
                    <el-switch v-model="te21Lock" 
                    :width="60"
                    active-value="0" 
                    inactive-value="1"
                    active-color="#13ce66"
                    inactive-color="#ff4949" 
                    active-text="开" 
                    inactive-text="关">
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
                   {{te22}}
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
                    <el-input v-model="te22LL" @focus="getInputFocus($event)"
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
                    <el-switch v-model="te22Lock" 
                    :width="60"
                    active-value="0" 
                    inactive-value="1"
                    active-color="#13ce66"
                    inactive-color="#ff4949" 
                    active-text="开" 
                    inactive-text="关">
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
                    <el-input v-model="te22HH" @focus="getInputFocus($event)"
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
                    <el-switch v-model="te22Lock" 
                    :width="60"
                    active-value="0" 
                    inactive-value="1"
                    active-color="#13ce66"
                    inactive-color="#ff4949" 
                    active-text="开" 
                    inactive-text="关">
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
                    <el-switch v-model="te22Lock" 
                    :width="60"
                    active-value="0" 
                    inactive-value="1"
                    active-color="#13ce66"
                    inactive-color="#ff4949" 
                    active-text="开" 
                    inactive-text="关">
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
                   {{lt}}
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
                    <el-input v-model="ltLL" @focus="getInputFocus($event)"
                        oninput="value=value.replace(/[^0-9.]/g,'');if(value>1.6){value=1.6}" 
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
                    <el-switch v-model="ltLock" 
                    :width="60"
                    active-value="0" 
                    inactive-value="1"
                    active-color="#13ce66"
                    inactive-color="#ff4949" 
                    active-text="开" 
                    inactive-text="关">
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
            station:'',

            te21:"12", //二供压力
            te21HH: "1.2",//二供压力高高限
            te21Lock: "",//二供压力锁

            te22:"13", //二回压力
            te22LL: "0.8",//二回压力低低限
            te22Lock: "",//二回压力锁
            te22HH:"",//二回压力高高限

            lt:"",
            ltLL:"",
            ltLock:"",


        }
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
    },
    methods: {
        changePT21HH(event) {
            event.target.blur();
            console.log("改变二供压力高高限")
        },
        changePT22LL(event) {
            event.target.blur();
            console.log("改变二回压力低低限")
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
.station{
    font-size: 30px;
    margin-top: 1%;
    margin-left: 5%;
   
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

.el-input{
    ::v-deep.el-input__inner{
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
        color:#13ce66 !important;
        z-index: -1111;
    }

    ::v-deep.el-switch__label--right.is-active {
        z-index: 1111;
        color: rgb(245, 239, 239) !important;
    }

    ::v-deep.el-switch__label--left.is-active {
        z-index: 1111;
        color:#f3fcf7 !important;
    }
}

</style>
