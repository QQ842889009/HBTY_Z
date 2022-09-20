const user = () => import("views/BackStage/User/user.vue")
const role = () => import("views/BackStage/Role/role.vue")

const backStagee = () => import("views/BackStage/index.vue")
// const backStage = {
//   path: "/user", //权限管理
//   name: "user",
//   meta: { title: "户用列表" },
//   component: user //
// }

const backStage = {
  // path: "/user", //权限管理

  // meta: { title: "可视化" },
  // component: Visual,
  path: "/backStagee", //权限管理
  // name: "backStagee",
  meta: { title: "户用列表" },
  component: backStagee, //

  children: [
    { path: "/", redirect: "/user" },
    {
      path: "/user",
      name: "user",
      meta: { title: "热源" },
      component: user
    },
    {
      path: "/role",
      name: "role",
      meta: { title: "热换站" },
      component: role
    }
  ]
}

export default backStage
