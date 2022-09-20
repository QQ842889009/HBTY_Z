const AiDoor = () => import("views/AiDoor/index.vue")
const TableData = () => import("views/AiDoor/TableData.vue")
// const aiDoor = {
//   path: "/AiDoor", //权限管理
//   name: "AiDoor",
//   meta: { title: "户阀管控" },
//   component: AiDoor
// }

const aiDoor = {
  path: "/AiDoor",
  // name: "AiDoor",
  meta: { title: "热力站", roles: ["approve"] },
  component: AiDoor,
  children: [
    { path: "/", redirect: "/TableData" },
    {
      path: "/TableData",
      name: "TableData",
      meta: { title: "数据总览" },
      component: TableData
    }
  ]
}
export default aiDoor //
