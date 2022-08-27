// const autoprefixer = require('autoprefixer')

// const pxtorem = require('postcss-pxtorem')
//x
// var px2rem = require('postcss-px2rem')
module.exports = {
  devServer: {
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
        // target: "http://10.168.1.176:9000",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/plcdata": ""
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
    // externals: {
    //   AMap: 'AMap', // 高德地图配置
    //   AMapUI: 'AMapUI'
    // }
  }

  // css: {s
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         autoprefixer(),
  //         pxtorem({
  //           rootValue: 37.5,
  //           propList: ['*']
  //         })

  //         // require('postcss-px2rem')({
  //         //   remUnit: 37.5
  //         //   // rootValue: 75, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
  //         //   // // unitPrecision: 5, //允许REM单位增长到的十进制数字。
  //         //   // //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
  //         //   // // propBlackList: [], //黑名单
  //         //   // // exclude: /(page_pc)/i,  //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
  //         //   // exclude: /node_modules/i,
  //         //   // // selectorBlackList: ['van-'], //要忽略并保留为px的选择器,我们一般不转换vantui中的大小
  //         //   // // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
  //         //   // // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
  //         //   // mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
  //         //   // minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
  //         // })
  //       ]
  //     }
  //   }
  // }
}
//开始
// module.exports = {
//   css: {
//     loaderOptions: {
//       postcss: {
//         plugins: [px2rem({ remUnit: 37.5 })] //已设计稿为标准计算出来的根字体大小,比如设计稿是375,37.5=375/10
//       }
//     }
//   }
// }
//结束

// // 引入等比适配插件
// const px2rem = require('postcss-px2rem')

// // 配置基本大小
// const postcss = px2rem({
//   // 基准大小 baseSize，需要和rem.js中相同
//   remUnit: 16
// })

// // 使用等比适配插件
// module.exports = {
//   lintOnSave: true,
//   css: {
//     loaderOptions: {
//       postcss: {
//         plugins: [postcss]
//       }
//     }
//   }
// }

// module.exports = {
//   // rem适配
//   css: {
//     loaderOptions: {
//       postcss: {
//         plugins: [
//           require('postcss-px2rem')({
//             remUnit: 37.5
//             // rootValue: 75, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
//             // // unitPrecision: 5, //允许REM单位增长到的十进制数字。
//             // //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
//             // // propBlackList: [], //黑名单
//             // // exclude: /(page_pc)/i,  //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
//             // exclude: /node_modules/i,
//             // // selectorBlackList: ['van-'], //要忽略并保留为px的选择器,我们一般不转换vantui中的大小
//             // // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
//             // // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
//             // mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
//             // minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
//           })
//         ]
//       }
//     }
//   }
// }
