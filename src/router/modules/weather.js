const Weather = () => import("views/Weather/index.vue")
const WeatherData = () => import("views/Weather/WeatherData.vue")
// const weather = {
//   path: "/Weather", //权限管理
//   name: "Weather",
//   meta: { title: "气象" },
//   component: Weather
// }

const weather = {
  path: "/Weather",
  // name: "Weather",
  meta: { title: "热力站", roles: ["approve"] },
  component: Weather,
  children: [
    { path: "/", redirect: "/WeatherData" },
    {
      path: "/WeatherData",
      name: "WeatherData",
      meta: { title: "数据总览" },
      component: WeatherData
    }
  ]
}
export default weather
