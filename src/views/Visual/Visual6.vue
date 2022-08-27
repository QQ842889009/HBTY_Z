<template>
    <div style="width: 1920px;height:1080px">
        <iframe ref="unityIframe" src="/unity3D/index.html" frameborder="0" style="width:100%;height: 100%"></iframe>
        
    </div>
</template>

<script>

export default {
    data() {
        return {
            stationInfos: [],
            timer: "",
            stations: [],
        }
    },
    created() {
        // console.log('-------', this.$store.getters.stationDataAndInfo);
        this.stationInfos = this.$store.getters.stationDataAndInfo;
        this.stations = this.$store.getters.stationInfos;
        console.log("----------", this.stationInfos)

    },
    components: {

    },
    // watch: {
    //     stationInfos: {
    //         handler() {
    //             this.vueSendToUnity();
    //         },
    //         deep: true,
    //     }
    // },
    mounted() {        
        // setTimeout(() => {
        //     this.vueSendToUnity("getStationsName",this.stationName);
        // }, 10000);
        window.addEventListener('message', this.unityWatch);

    },
    computed: {
        stationName() {
            return this.getInfos("Station", this.stations)
        }
    },
    methods: {
        //unity发过来的消息处理
        unityWatch(e) {
            console.log('unityWatch方法调用 event=' + e.data.event + " msg=" + e.data.msg);
            switch (e.data.event) {
                case "ReportReady": 
                    console.log("unity发送消息到vue成功")
                    this.vueSendToUnity("getStationsName",this.stationName);
                    break;
                case "stationInfo": //自己定义的事件，代表站的数据
                    clearInterval(this.timer);
                    var index = e.data.msg;
                    var msgInfo = this.stationInfos[index];
                    console.log('某个站的信息-=-=-=-', msgInfo);
                    setTimeout(() => {
                        this.vueSendToUnity("getStationInfos", msgInfo);
                    }, 300); 
                    this.timer = setInterval(() => {
                        this.vueSendToUnity("getStationInfos", msgInfo);
                    }, 5000)
                    break;
                //一网阀门    
                case "FV1SP_H": //开度高限
                    console.log("unity改变开度高限的值",e.data.msg)
                    break;

                case "FV1SP_L": //开度低限
                    console.log("unity改变开度低限的值",e.data.msg)   
                    break;

                case "FV1SP": //开度给定
                    console.log("unity改变开度给定的值",e.data.msg)   
                    break;

                case "TE21SP": //温度设定
                    console.log("unity改变温度设定的值",e.data.msg)   
                    break;

                case "MA_FV1": //一网阀门手自动
                    console.log("unity改变一网阀门手自动的值",e.data.msg)
                    break;

                //1#循环泵    
                case "BP21SP": //1#循环泵频率给定
                    console.log("unity改变1#循环泵频率给定的值",e.data.msg)
                    break;

                case "BP21C": //1#循环泵关闭开启
                    console.log("unity改变1#循环泵关闭开启的值",e.data.msg)
                    break;

                //潜水泵   
                case "LT_LL": //潜水泵液位低低
                    console.log("unity改变潜水泵液位低低的值",e.data.msg)
                    break;

                case "LT_H": //停泵液位
                    console.log("unity改变停泵液位的值",e.data.msg)
                    break;
                
                case "LT_L": //起泵液位
                    console.log("unity改变起泵液位的值",e.data.msg)
                    break;
                
                case "MP2C": //潜水泵关闭开启
                    console.log("unity改变潜水泵关闭开启的值",e.data.msg)
                    break;
                
                case "MA_SBP": //潜水泵手动自动
                    console.log("unity改变潜水泵手动自动的值",e.data.msg)
                    break;

                 //1#补水泵   
                case "MP1SP": //1#补水泵频率给定
                    console.log("unity改变1#补水泵频率给定的值",e.data.msg)
                    break;

                case "PT22SP_H": //1#补水泵停泵高限
                    console.log("unity改变1#补水泵停泵高限的值",e.data.msg)
                    break;
                
                case "PT22SP_L": //1#补水泵起泵低限
                    console.log("unity改变1#补水泵起泵低限的值",e.data.msg)
                    break;

                case "PT22SP_HH": //压力高高
                    console.log("unity改变压力高高的值",e.data.msg)
                    break;

                case "MP1C": //1#补水泵关闭开启
                    console.log("unity改变1#补水泵关闭开启的值",e.data.msg)
                    break;

                case "MA_MP": //1#补水泵手动自动
                    console.log("unity改变1#补水泵手动自动的值",e.data.msg)
                    break;

                 //泄压阀   
                case "PT22XY_H": //开阀压力
                    console.log("unity改变开阀压力的值",e.data.msg)
                    break;

                case "PT22XY_L": //关阀压力
                    console.log("unity改变关阀压力的值",e.data.msg)
                    break;

                case "XYVC": //泄压阀关闭开启
                    console.log("unity改变泄压阀关闭开启的值",e.data.msg)
                    break;

                case "MA_XYV": //泄压阀手动自动
                    console.log("unity改变泄压阀手动自动的值",e.data.msg)
                    break;
                
                 //二网阀门   
                case "FV2SP": //阀门给定
                    console.log("unity改变阀门给定的值",e.data.msg)
                    break;

                
               
                
            }
        },
        vueSendToUnity(unityFunction, msg) {
            this.$refs.unityIframe.contentWindow.sendMsgToUnity(unityFunction, msg)
        },
        getInfos(sta, arr) {
            const newArr = arr.map(item => {
                return item[sta]
            });

            return newArr;
        }
    },
    beforeDestroy() {
        console.log("----切换界面")
        clearInterval(this.timer);
        window.removeEventListener('message', this.unityWatch);
    },

}
</script>
<style lang="scss" scoped>
</style>

