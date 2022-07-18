import Vue from 'vue'
import axios from 'axios'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

axios.interceptors.request.use(config => {
    // NProgress.start()
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
})
axios.interceptors.response.use(config => {
    // NProgress.done()
    return config
})
Vue.prototype.$http = axios
