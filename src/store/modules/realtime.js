/* 可视化实时展示的仓库 */
import Vue from "vue"
import isNumber from "assets/js/isNumber"
import {realtime,stations} from "assets/js/storeDataInit/realtime"

export default{
    namespaced:true,
    state:{
       realtimeInfos:[],  //一小时选定热换站的数据
       realtimeInfosLength:60,
    //    realtimeDatas:[],  //实时的信息数组
       stations:[], //热换站的信息
       stationsLength:31,  //热换站个数
    },
    getters:{
        realtimeInfos(state){
            return state.realtimeInfos
        },
        realtimeData(state){
            return state.realtimeData
        },
        stations(state){
            return state.stations
        }
    },
    actions:{},
    mutations:{
         // 一小时选定热换站的数据初始化main引用它  main 是入口函数在main.js引用的话就是首先执行
        MUREALTIMEINIT(state,data){
            realtime(state.realtimeInfos,state.realtimeInfosLength,data)
        },
        //换的站信息初始化
        MUSTATIONINT(state,data){
            stations(state.stations,state.stationsLength,data)
        },
        //一小时换热站数据
        REALTIMEINFO(state,data){
            //对接受到的数据做处理，存到realtimeInfos中
            state.realtimeInfos=data;
        },
        //实时数据
        // REALTIMEDATAUPDATE(state,data){
        //     console.log("实时数据",data)
        // },
        //换热站的数据获取
        MUSTATIONUPDATE(state,data){
            for (let index = 0; index < data.length; index++) {
                state.stations[index].Station=data[index].Station
                state.stations[index].Sid=data[index].Sid
                state.stations[index].Space=data[index].Space
            }
        }
    }
}