const Weather = () => import("views/Weather/index.vue")

const weather = {
  path: "/Weather", //权限管理
  name: "Weather",
  meta: { title: "气象" },
  component: Weather
}
export default weather
