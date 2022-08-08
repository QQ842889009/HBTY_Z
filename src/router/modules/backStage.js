const user = () => import("views/BackStage/User/user.vue")

const backStage = {
  path: "/user", //权限管理
  name: "user",
  meta: { title: "户用列表" },
  component: user
}

export default backStage
