
/* 可视化实时信息数据初始化深拷贝 */
import _ from "lodash"
function realtime(data, len, dataInitArray) {
    if (data.length == 0) {
      let newDate=new Date();
      let nowHour=newDate.getHours();
      let nowMinutes=newDate.getMinutes();
      for (let i = 0; i < len; i++) {
        dataInitArray.SdateTime=formatTime(nowHour,nowMinutes+i)
        dataInitArray.TE11=0;
        dataInitArray.TE12=0;
        dataInitArray.TE21=0;
        dataInitArray.TE22=0;
        dataInitArray.PT11=0;
        dataInitArray.PT12=0;
        dataInitArray.PT21=0;
        dataInitArray.PT22=0;
        let obj = _.cloneDeep(dataInitArray)
  
        data.push(obj)
      }
    }
  }
  function stations(data, len, dataInitArray) {
    if (data.length == 0) {
      for (let i = 0; i < len; i++) {
        dataInitArray.Station=i;
        dataInitArray.Sid=i
        dataInitArray.Space=0;
        let obj = _.cloneDeep(dataInitArray)
  
        data.push(obj)
      }
    }
  }
  function deepClone(newData,data){
    // let obj=_.cloneDeep(data);
    // newData.push(obj)
    newData=_.cloneDeep(data)
  }
  const formatNumber = (num) => {
    num = num.toString()
    return num[1] ? num : '0' + num
  }
  function formatTime(hour,minute){
    if(hour>=24)  hour=0
    if(minute>=60){hour++;minute=minute-60}
    return hour+":"+formatNumber(minute)
  }
  export {
    realtime,stations,deepClone
  }