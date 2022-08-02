const Space1 = () => import("views/whiteTheme/Station/Space") //白色主题的户阀入口
const whiteTheme = {
  path: "/Space1", //权限管理
  name: "Space1",
  meta: { title: "面积" },
  component: Space1



  {
    path: "/aidoormain",
    component: aidoormain,

    children: [
      { path: "/", redirect: "/AidoorWhite" }, //指定向

      {
        path: "/AidoorWhite",
        component: AidoorWhite
      }
    ]
  },
}
export default whiteTheme
