const AiUnitSx = () => import("views/AiUnitSx/index.vue")
const UnitSX = () => import("views/AiUnitSx/UnitSX.vue")
const Unit = () => import("views/AiUnitSx/Unit.vue")
// const aiUnitSx = {
//   path: "/AiUnitSx", //权限管理
//   name: "AiUnitSx",
//   meta: { title: "楼宇四新" },
//   component: AiUnitSx
// }

const aiUnitSx = {
  path: "/AiUnitSx",
  // name: "AiUnitSx",
  meta: { title: "热力站", roles: ["approve"] },
  component: AiUnitSx,
  children: [
    { path: "/", redirect: "/UnitSX" },
    {
      path: "/UnitSX",
      name: "UnitSX",
      meta: { title: "数据总览" },
      component: UnitSX
    },
    {
      path: "/Unit",
      name: "Unit",
      meta: { title: "数据总览" },
      component: Unit
    }
  ]
}
export default aiUnitSx
