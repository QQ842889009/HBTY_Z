import Vue from "vue"
import axios from "axios"

import { Message, Loading } from "element-ui"

const service = axios.create({
  // baseURL:process.env.BASE_API,
  timeout: 15 * 1000,
  // headers: {
  //     get: {
  //         'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  //         // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
  //     },
  //     post: {
  //         'Content-Type': 'application/json;charset=utf-8'
  //         // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
  //     }
  // },
  withCredentials: true,
  // responseType: 'json',
  // 在向服务器发送请求前，序列化请求数据
  transformRequest: function (data) {
    data = JSON.stringify(data)
    return data
  }
  // 在传递给 then/catch 前，修改响应数据
  // transformResponse: function (data) {
  //     if (typeof data === 'string' && data.startsWith('{')) {
  //         data = JSON.parse(data)
  //     }
  //     return data
  // }
})
var loading = ""
//请求拦截器
service.interceptors.request.use(
  (config) => {
    if (!config.headers["Content-Type"]) {
      loading = Loading.service({
        lock: true,
        text: "加载中...",
        spinner: "el-icon-loading",
        background: "rgba(255,255,255,0.7)",
        customClass: "request-loading"
      })
      if (config.method == "post") {
        console.log("wo shi  post")
        // application/x-www-form-urlencoded
        config.headers["Content-Type"] = "application/json;charset=utf-8"
        // 删除空的数据
        for (var key in config.data) {
          if (config.data[key] === "") {
            delete config.data[key]
          }
        }
        // 用json.stringify效果一样
        // config.data = JSON.stringify(config.data)
      } else if (config.method == "get") {
        console.log("我是get请求")
        config.headers["Content-Type"] = "application/json;charset=utf-8"
      } else {
        config.headers["Content-Type"] = "application/json;charset=utf-8"
        // config.params
      }
    }
    // const token = "token"
    // // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    // if (token) {
    //     config.headers['Authorization'] = token
    // }
    return config
  },
  (error) => {
    loading.close()

    // 发送失败
    console.log("发送失败", error)
    return Promise.reject(error)
  }
)
//响应拦截器
service.interceptors.response.use(
  (response) => {
    loading.close()
    const dataAxios = response.data
    // 这个状态码是和后端约定的
    return dataAxios
  },
  (error) => {
    Message({
      message: error,
      type: "error",
      duration: 15 * 1000
    })
    // 如果请求接口失败，取消loading，否则中间有一个接口错误就一直白屏loading转圈；
    loading.close()
    return Promise.reject(error)
  }
)

Vue.prototype.$http = service
