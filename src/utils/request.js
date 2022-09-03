// import axios from "axios"
// import { getToken } from "@/utils/token"
// import { Message } from "element-ui"

// axios.defaults.baseURL = `http://221.206.242.116:9000`

// axios.defaults.timeout = 10000 //设置十秒
// axios.defaults.headers["Content-Type"] = "application/json"
// // 添加请求拦截器
// // 在发送请求之前做些什么
// // axios.interceptors.request.use((config) => {
// //   //在请求的头部增加token，因为和后端交互需要token验证
// //   config.headers["token"] = getToken()

// //   return config
// // })
// // 添加响应拦截器
// // axios.interceptors.response.use(
// //   (response) => {
// //     // 对响应数据做点什么
// //     console.log("响应拦截的是什么", response)
// //     let { status, msg } = response
// //     if (status != 200) {
// //       Message({
// //         message: msg || "网络错误",
// //         type: "warning",
// //         duration: 2000
// //       })
// //     }
// //     if (status === 200) {
// //       Message({
// //         message: "请求成功",
// //         type: "warning",
// //         duration: 2000
// //       })
// //     }

// //     return response
// //   },
// //   (err) => {
// //     // 对响应错误做点什么
// //     Message({
// //       message: "2222服务器不给力！！！",
// //       type: "error",
// //       duration: 2000
// //     })
// //     return Promise.reject(err)
// //   }
// // )

// export default axios
