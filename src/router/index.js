import Vue from "vue"
import VueRouter from "vue-router"
import aiUnit from "./modules/aiUnit" //
import aiUnitSx from "./modules/aiUnitSx" //
import aiDoor from "./modules/aiDoor" //
import aiInDoor from "./modules/aiInDoor" //
import hot from "./modules/hot" //
import station from "./modules/station" //
import weather from "./modules/weather" //
import visual from "./modules/visual"
import backStage from "./modules/backStage"
import operationanalyse from "./modules/operationanalyse"
Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
const Login = () => import("views/Login/index.vue") //登录
const layout = () => import("layout/index.vue") //模板
const aidoormain = () => import("views/whiteTheme/AiDoor/main/aidoormain") //白色主题的户阀入口
const AidoorWhite = () => import("views/whiteTheme/AiDoor/data/AidoorWhite") //白色主题的户阀入口
const xxx = () => import("views/whiteTheme/Station/Space") //白色主题的户阀入口
// const Visual = () => import("views/Visual/index.vue") //可视化  echarts 要包括热源 换热站 楼宇 室内的图表
//const role = () => import("views/BackStage/Role/role.vue")
export const constantRoutes = [
  //常规配置
  {
    path: "/",

    redirect: "/Login" //首页指向
  },

  {
    path: "/aidoormain",
    component: aidoormain,

    children: [
      { path: "/", redirect: "/AidoorWhite" }, //指定向

      {
        path: "/AidoorWhite",
        component: AidoorWhite
      },
      {
        path: "/xxx",
        component: xxx
      }
    ]
  },
  { path: "/Login", component: Login },

  {
    path: "/layout",
    // name: "layout",
    // redirect: "/index",

    // redirect: "/Visual",
    meta: { title: "首页" },
    // redirect: "/Visual", //首页指向
    component: layout,
    children: [
      { path: "/", redirect: "/TabData" }, //指定向
      //  { path: "/role", component: role },
      visual,
      hot,
      station,
      aiUnit,
      aiUnitSx,
      aiDoor,
      aiInDoor,
      weather,
      backStage,
      operationanalyse
    ]
  }
]
// export const asyncRoutes = [
//   {
//     path: "/index",
//     name: "index",
//     meta: { title: "可视化" },
//     component: Visual
//   }
// ]

const router = new VueRouter({
  routes: constantRoutes
})

export default router
