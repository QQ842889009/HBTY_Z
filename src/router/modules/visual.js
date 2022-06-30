const Visual = () => import("views/Visual/index.vue")
const Visual1 = () => import("views/Visual/Visual1.vue")
const Visual2 = () => import("views/Visual/Visual2.vue")
const Visual3 = () => import("views/Visual/Visual3.vue")
const visual = {
  path: "/Visual", //权限管理
  // name: "Visual",
  meta: { title: "可视化" },
  component: Visual,
  children:[
    { path: "/", redirect: "/Visual1" },
    {
      path:"/Visual1",
      name:"Visual1",
      meta:{title:"热源"},
      component:Visual1
    },
    {
      path:"/Visual2",
      name:"Visual2",
      meta:{title:"热换站"},
      component:Visual2
    },
    {
      path:"/Visual3",
      name:"Visual3",
      meta:{title:"楼宇"},
      component:Visual3
    }
  ]
}
export default visual
