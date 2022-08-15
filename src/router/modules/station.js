const Station = () => import("views/Station/index.vue")
const DataScreening = () => import("views/Station/DataScreening.vue")
const ProcessControl = () => import("views/Station/ProcessControl.vue")
const TeControl = () => import("views/Station/TeControl.vue")
//const TableIntegralPoint = () => import("views/Station/TableIntegralPoint.vue")
const TableIntegralPoint = () =>
  import("views/Station/TableIntegralPoint/index.vue")
const TableSection = () => import("views/Station/TableSection.vue")
const HistoryQuery = () => import("views/Station/HistoryQuery.vue")
const TabData = () => import("views/Station/TabData/index.vue")
const Space = () => import("views/Station/Space/index.vue")
const Space2 = () => import("views/Station/Space/Space2.vue")
const BpControl = () => import("views/Station/BpControl/index.vue")
const station = {
  path: "/station",
  name: "station",
  meta: { title: "热力站", roles: ["approve"] },
  component: Station,
  children: [
    // {
    //   path: "/DataScreening",
    //   name: "DataScreening",
    //   meta: { title: "数据总览" },
    //   component: DataScreening
    // },

    {
      path: "/TabData",
      name: "TabData",
      meta: { title: "数据总览" },
      component: TabData
    },
    {
      path: "/ProcessControl",
      name: "ProcessControl",
      meta: { title: "工艺控制" },
      component: ProcessControl
    },
    {
      path: "/TeControl",
      name: "TeControl",
      meta: { title: "温度控制" },
      component: TeControl
    },
    {
      path: "/TableIntegralPoint",
      name: "TableIntegralPoint",
      meta: { title: "整点报表" },
      component: TableIntegralPoint
    },
    {
      path: "/TableSection",
      name: "TableSection",
      meta: { title: "区间报表" },
      component: TableSection
    },
    {
      path: "/HistoryQuery",
      name: "HistoryQuery",
      meta: { title: "历史查询" },
      component: HistoryQuery
    },
    {
      path: "/Space",
      name: "Space",
      meta: { title: "面积" },
      component: Space
    },
    {
      path: "/Space2",
      name: "Space2",
      meta: { title: "面积" },
      component: Space2
    },
    {
      path: "/BpControl",
      name: "BpControl",
      meta: { title: "变频控制" },
      component: BpControl
    }
  ]
}
export default station
