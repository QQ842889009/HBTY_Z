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

        //  target: "http://221.206.242.116:9000",

        target: "http://10.168.1.176:9000",

        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/plcdata": ""
        }
      },
      "/indoor": {
        //
        target: "http://221.206.242.116:2060",
        ws: true,
        changeOrigin: true,

        pathRewrite: {
          "^/indoor": ""
        }
      },
      "/kk": {
        //
        target: "http://221.206.242.116:1668", //黑蚂蚁的单元阀和户阀的连接信息和数据的连接王
        ws: true,
        changeOrigin: true,

        pathRewrite: {
          "^/kk": ""
        }
      },
      "/sx": {
        //
        target: "http://221.206.242.116:1868", //四新数据单元阀JAVA-王
        ws: true,
        changeOrigin: true,

        pathRewrite: {
          "^/sx": ""
        }
      },
      "/qwer": {
        //
        target: "http://221.206.242.116:9005",
        //target: "http://10.168.1.176:9005", //四新数据单元阀菜单历史数据JAVA-莫
        ws: true,
        changeOrigin: true,

        pathRewrite: {
          "^/qwer": ""
        }
      },
      "/TEhistory": {
        //
        target: "http://221.206.242.116:9002", //室内温度的历史曲线
        // ws: true,
        changeOrigin: true,

        pathRewrite: {
          "^/TEhistory": ""
        }
      },
      "/AiUnit": {
        //
        target: "http://221.206.242.116:9003", //ai42个设备那个菜单和历史曲线------黑蚂蚁楼宇单元阀
        //target: "http://10.168.1.176:9003",
        // ws: true,
        changeOrigin: true,

        pathRewrite: {
          "^/AiUnit": ""
        }
      },
      "/hotw": {
        //target: "http://221.206.242.116:9005", //ai42个设备那个菜单和历史曲线/热源历史
        target: "http://10.168.1.176:9005",

        // ws: true,
        changeOrigin: true,

        pathRewrite: {
          "^/hotw": ""
        }
      },
      "/HUFAhistory": {
        //
        //target: "http://10.168.1.176:9004", //户阀历史和菜单
        target: "http://221.206.242.116:9004",
        // ws: true,
        changeOrigin: true,

        pathRewrite: {
          "^/HUFAhistory": ""
        }
      }
      // "/alaqueren": {
      //   //
      //   target: "http://221.206.242.116:9000",
      //   ws: true,
      //   changeOrigin: true,

      //   pathRewrite: {
      //     "^/alaqueren": ""
      //   }
      // }

      // "/unit": {
      //   //
      //   target: "http://10.168.1.176:9001",
      //   changeOrigin: true,
      //   ws: true,
      //   pathRewrite: {
      //     "^/unit": ""
      //   }
      // }
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
