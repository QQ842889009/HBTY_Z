/* 换热站分支信息 */
import Vue from "vue"
import isNumber from "assets/js/isNumber"
import _ from "lodash"

export default{
    namespaced:true,
    state:{
       branchInfos:[],  //换热站分支信息数组
        
    },
    getters:{
        branchInfos(state){
            return state.branchInfos
        },
       
    },
    actions:{},
    mutations:{
         // 一小时选定热换站的数据初始化main引用它  main 是入口函数在main.js引用的话就是首先执行
        BRANCHINFOS(state,data){
            // console.log('data---',data)
            state.branchInfos=_.cloneDeep(data);
        },
        
    }
}