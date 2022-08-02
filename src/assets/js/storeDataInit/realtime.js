
/* 可视化实时信息数据初始化深拷贝 */
import _ from "lodash"
function realtime(data, len, dataInitArray) {
    if (data.length == 0) {
      let newDate=new Date();
      let nowHour=newDate.getHours();
      let nowMinutes=newDate.getMinutes();
      let nowDay=newDate.getDate();
      let nowMonth=newDate.getMonth()+1;
      let nowYear=newDate.getFullYear();
      let nowSecond=newDate.getSeconds();
      for (let i = 0; i < len; i++) {
        dataInitArray.SdateTime=formatTime(nowYear,nowMonth,nowDay,nowHour,nowMinutes-i,nowSecond)
        dataInitArray.TE11=0;
        dataInitArray.TE12=0;
        dataInitArray.TE21=0;
        dataInitArray.TE22=0;
        dataInitArray.PT11=0;
        dataInitArray.PT12=0;
        dataInitArray.PT21=0;
        dataInitArray.PT22=0;
        let obj = _.cloneDeep(dataInitArray)
  
        data.unshift(obj)
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
  function formatTime(year,month,day,hour,minute,second){
    if(hour>=24)  hour=0
    if(minute<0){hour--;minute=minute+60}
    return year+"-"+formatNumber(month)+"-"+ formatNumber(day)+" "+formatNumber(hour)+":"+formatNumber(minute)+":"+formatNumber(second)
  }
  export {
    realtime,stations,deepClone
  }