const AiInDoor = () => import("views/AiInDoor/index.vue")
const InDoorData = () => import("views/AiInDoor/InDoorData.vue")
// const aiInDoor = {
//   path: "/AiInDoor",
//   name: "AiInDoor",
//   meta: { title: "室内温度" },
//   component: AiInDoor
// }
const aiInDoor = {
  path: "/AiInDoor",
  // name: "AiInDoor",
  meta: { title: "热力站", roles: ["approve"] },
  component: AiInDoor,
  children: [
    { path: "/", redirect: "/InDoorData" },
    {
      path: "/InDoorData",
      name: "InDoorData",
      meta: { title: "数据总览" },
      component: InDoorData
    }
  ]
}
export default aiInDoor //
