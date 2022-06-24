function indoorstation(array, station) {
  let data = [] //总数组

  let DataTemp = array //首先我想把总数据数组给传进来 ，完了给一个临时的数组
  let NameTempstation = station

  DataTemp.forEach((i) => {
    //提示这里不用 this.DataTemp.forEach((i) => {**不用this因为是新定义的  let DataTemp = array;
    if (i.Station === NameTempstation) {
      data.push(i)
    }
  })
  // console.log("gggggg", data)
  return data
}

function indoorstation_tongxun(array, v) {
  let data = [] //总数组
  console.log("TTTT")
  console.log(array)
  console.log("wo kankan V", v)

  let DataTemp = array //首先我想把总数据数组给传进来 ，完了给一个临时的数组
  // let NameTempstation = te
  if (v == 0) {
    DataTemp.forEach((i) => {
      //提示这里不用 this.DataTemp.forEach((i) => {**不用this因为是新定义的  let DataTemp = array;
      if (i.TE.length == v || i.TE == "还未上传") {
        data.push(i)
      }
    })
    console.log("tttt", data)
    return data
  }

  if (v == 1) {
    DataTemp.forEach((i) => {
      //提示这里不用 this.DataTemp.forEach((i) => {**不用this因为是新定义的  let DataTemp = array;
      if (i.TE.length > v) {
        data.push(i)
      }
    })
    console.log("tttt11111", data)
    return data
  }
}

function zzz(array, v) {
  //我需要一个数组 是总数组
  //需要一个对象v
  let data = [] //

  let DataTemp = array //首先我想把总数据数组给传进来 ，完了给一个临时的数组
  // let NameTempstation = te
  if (v == 0) {
    DataTemp.forEach((i) => {
      //提示这里不用 this.DataTemp.forEach((i) => {**不用this因为是新定义的  let DataTemp = array;
      if (i.TE.length == v || i.TE == "还未上传") {
        data.push(i)
      }
    })
    console.log("tttt", data)
    return data
  }

  if (v == 1) {
    DataTemp.forEach((i) => {
      //提示这里不用 this.DataTemp.forEach((i) => {**不用this因为是新定义的  let DataTemp = array;
      if (i.TE.length > v) {
        data.push(i)
      }
    })
    console.log("tttt", data)
    return data
  }
}
function AAA(array, v) {
  ///
  console.log("AAA得到的数组", array)
  console.log("AAA得到的条件", v)
  //我需要一个数组 是总数组
  //需要一个对象v
  let data = [] //

  let DataTemp = array //首先我想把总数据数组给传进来 ，完了给一个临时的数组
  let v3 = v

  // if (1 == 1) {
  //   DataTemp.forEach((i) => {
  //     //提示这里不用 this.DataTemp.forEach((i) => {**不用this因为是新定义的  let DataTemp = array;
  //     if (i.Station==="" > v) {
  //       data.push(i)
  //     }
  //   })
  //   console.log("tttt", data)
  //   return data
  // }

  //////
  // for (var key in v3) {
  //   console.log("键:", key)
  //   console.log("值:", v3[key])

  //   DataTemp.forEach((i) => {
  //     // console.log("i.key:", i[key])

  //     if (i[key] == v3[key]) {
  //       data.push(i)
  //     }
  //   })
  //   return data
  // }
  // var keys = Object.keys(v3)
  // console.log("keys---", keys)
  //   for (let i = 0; i < v3.length; i++) {
  //     console.log("ttt", v3[i])
  // if(){

  // }

  //   }
}

export default {
  indoorstation,

  indoorstation_tongxun,

  zzz,
  AAA
}
