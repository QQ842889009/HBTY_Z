// const autoprefixer = require('autoprefixer')

// const pxtorem = require('postcss-pxtorem')
//x
// var px2rem = require('postcss-px2rem')
module.exports = {
  devServer: {
    open: true, //配置自动启动浏览器
    host: "localhost",
    https: false,
    hotOnly: false, //热更新
    port: 8181,
    //before: require('./mock/index.js') // 引入mock/index.js
    proxy: {
      // 匹配所有以 /api 开头的url
      "/api": {
        target:
          "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/position": {
        //根据地址获取经纬度
        target: "https://restapi.amap.com/v3/geocode/geo	",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/position": ""
        }
      },
      "/plcdata": {
        //
        target: "http://221.206.242.116:9000",
        //target: "http://10.168.1.176:9000",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/plcdata": ""
        }
      },
      "/unit": {
        //
        target: "http://10.168.1.176:9001",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/unit": ""
        }
      }
    }
  },
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
        layout: "@/layout"
      }
    }
  }
}
