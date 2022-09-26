const OperationAnalyse = () => import("views/OperationAnalyse/index.vue")
const PowerDissipation = () =>
  import("views/OperationAnalyse/PowerDissipation/index.vue")
const EnergyConsumptionUnitArea = () =>
  import("views/OperationAnalyse/EnergyConsumptionUnitArea/index.vue")
// const ProcessControl = () => import("views/Station/ProcessControl.vue")
// const TeControl = () => import("views/Station/TeControl.vue")

const operationanalyse = {
  path: "/OperationAnalyse",
  // name: "station",
  meta: { title: "运行分析", roles: ["approve"] },
  component: OperationAnalyse,
  children: [
    {
      path: "/PowerDissipation",
      name: "PowerDissipation",
      meta: { title: "数据总览" },
      component: PowerDissipation
    },
    {
      path: "/EnergyConsumptionUnitArea",
      name: "EnergyConsumptionUnitArea",
      meta: { title: "数据总览2" },
      component: EnergyConsumptionUnitArea
    }
    // {
    //   path: "/ProcessControl",
    //   name: "ProcessControl",
    //   meta: { title: "工艺控制" },
    //   component: ProcessControl
    // }
  ]
}
export default operationanalyse
