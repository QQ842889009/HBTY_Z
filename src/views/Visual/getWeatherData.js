import that from "@/main.js"

let location;
let weatherInfo;
let keyGaode = "59219eb882d60393da45c43a0b921330";
let keyWeather = "BSSPJ3TEPQH7BV8W5J759DHC5";


async function getWeatherForecast(city) {
    location = localStorage.getItem('location')
    if (location == null) {
        try {
            const res = await that.$http.get(
                `position?key=${keyGaode}&address=${city}`);
            console.log("城市的经纬度请求", res);
            var temp = res.geocodes[0].location;
            var arr = temp.split(",");
            location = arr.splice(-1) + "," + arr
            localStorage.setItem("location", location)
        } catch (e) {
            console.error(e)
        }

    }
    // console.log('location------', location)
    let nowTime = Date.parse(new Date());
    let lastTime = localStorage.getItem("getWeatherTime")
    if ((nowTime - lastTime) >= (1000 * 3600 * 12)) {
        localStorage.removeItem("weather")
        console.log("过了12小时了")
    }
    weatherInfo = JSON.parse(localStorage.getItem('weather'))
    if (weatherInfo == null || weatherInfo == undefined) {
        try {
            // const res = await that.$http.get(
            //     `api/${location}/next7days?unitGroup=metric&key=${keyWeather}`
            // );
            const res = await that.$http.get(
                     `api/${location}/next7days`,
                     {params:{
                        unitGroup:"metric",
                        key:keyWeather
                     }}
                 );
            console.log("天气的请求", res);
            weatherInfo = res
            localStorage.setItem('weather', JSON.stringify(res))
            let nowTime = Date.parse(new Date());
            localStorage.setItem('getWeatherTime', nowTime)

        } catch (e) {
            console.error(e)
        }

    }
    // console.log("天气的信息", weatherInfo)
   
}




export { getWeatherForecast }