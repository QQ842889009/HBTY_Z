/**
 * @param {*} data ----store中的数据对象数组
 * @param {*} len -----store中的数据对象数组的应该长度，这里指的是PLC的个数，机组的个数不是站的个数
 * @param {*} dataType ----数组对象中的对象原型----此参数为隐藏参数
 * 此函数用于程序开始MAIN，被仓库中的mutation调用，用于先给所有数据规定好自己的固定地址
 */
function plcS7dataInit(data, len, dataType) {
  for (let i = 0; i < len; i++) {
    dataType.Sid = i
    let obj = JSON.parse(JSON.stringify(dataType))
    data.push(obj)
  }
  //console.log("plc数据初始化完毕", data)
  // console.log("-----AAA")
}
/**
 *
 * @param {仓库中的PLC数据数组} data
 * @param {socket拿到的后端的一次性推送的PLC信息数据} dataInfo
 * {Sid: "000",SdateTime："",Station: 0,Space: 0,} 等一些基本信息组成的数组
 *启动时推送一次，以后有修改是推送一次
 *下面遍历以sid对应，没有以数组序号对应
 */
function wsPlcInfoProcess(data, dataInfo) {
  let lenA = data.length
  let lenB = dataInfo.length
  for (let i = 0; i < lenB; i++) {
    for (let j = 0; j < lenA; j++) {
      if (dataInfo[i].Sid === data[j].Sid) {
        data[j].Station = dataInfo[i].Station
        data[j].Space = dataInfo[i].Space
        continue
      }
    }
  }
}
/**
 * @param {*} data ----store中的数据对象数组
 * @param {*} len -----store中的数据对象数组的应该长度，这里指的是PLC的个数，机组的个数不是站的个数
 * @param {*} dataType ----数组对象中的对象原型----此参数为隐藏参数
 * 此函数用于程序开始是，被仓库中的mutation调用，用于先给所有数据规定好自己的固定地址
 */
function echartDataInit(data, len, dataType) {
  for (let i = 0; i < len; i++) {
    let obj = JSON.parse(JSON.stringify(dataType))
    data.push(obj)
  }
  console.log("echart数据初始化完毕")
}
function wsEchartInfoProcess(data, dataInfo) {
  let lenA = data.length
  let lenB = dataInfo.length
  for (let i = 0; i < lenB; i++) {
    for (let j = 0; j < lenA; j++) {
      if (dataInfo[i].Sid === data[j].Sid) {
        data[j].站点 = dataInfo[i].Station
        data[j].面积 = dataInfo[i].Space
        continue
      }
    }
  }
}
export { plcS7dataInit, wsPlcInfoProcess, echartDataInit, wsEchartInfoProcess }
// export导出 可以用对象解构的方式导入，不用改变内部函数的名字
