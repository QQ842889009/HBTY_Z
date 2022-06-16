import data from "assets/js/stationCommon/data.js"; //站点数组需要//

const initDataStation = data;

const initInfoDataStation = [
  {
    sid: "00",
    station: "00#·交警大队",
    Space: "1.53",
  },
  {
    sid: "01",
    station: "01#A.市委热站",
    Space: "0.8",
  },
  {
    sid: "02",
    station: "01#B.邮政局站",
    Space: "1.17",
  },
  {
    sid: "03",
    station: "02#·百合小区",
    Space: "4.68",
  },
  {
    sid: "04",
    station: "03#A.和平雅居",
    Space: "7.44",
  },
  {
    sid: "05",
    station: "03#B.和平雅居",
    Space: "12.25",
  },
  {
    sid: "06",
    station: "04#·人事局站",
    Space: "4.96",
  },
  {
    sid: "07",
    station: "05#·安居工程",
    Space: "1.48",
  },

  {
    sid: "08",
    station: "06#·涌鑫热站",
    Space: "2.17",
  },
  {
    sid: "9",
    station: "07#·烟厂热站",
    Space: "1.78",
  },
  {
    sid: "10",
    station: "09#·琥珀新苑",
    Space: "14.48",
  },
  {
    sid: "11",
    station: "10#·农拥幼教",
    Space: "1.92",
  },
  {
    sid: "12",
    station: "11#·幸福家园",
    Space: "6.02",
  },
  {
    sid: "13",
    station: "12#·铁路街站",
    Space: "2.16",
  },
  {
    sid: "14",
    station: "13#·农机监理",
    Space: "4.33",
  },

  {
    sid: "15",
    station: "15#·惠民小区",
    Space: "4.94",
  },
  {
    sid: "16",
    station: "16#·金碧园站",
    Space: "8.59",
  },
  {
    sid: "17",
    station: "17#A.御锦高区",
    Space: "0.68",
  },
  {
    sid: "18",
    station: "17#B.御锦低区",
    Space: "2.23",
  },
  {
    sid: "19",
    station: "18#·宇宙花园",
    Space: "2.25",
  },
  {
    sid: "20",
    station: "19#A.山水一期",
    Space: "7.16",
  },
  {
    sid: "21",
    station: "19#B.山水二低",
    Space: "4.39",
  },
  {
    sid: "22",
    station: "19#C.山水二高",
    Space: "3.75",
  },
  {
    sid: "23",
    station: "20#·金碧园二",
    Space: "4.35",
  },
  {
    sid: "24",
    station: "22#·鑫源居二",
    Space: "0.82",
  },
  {
    sid: "25",
    station: "23#A.天街商场",
    Space: "5.26",
  },
  {
    sid: "26",
    station: "23#C.天街高区",
    Space: "1.36",
  },
  {
    sid: "27",
    station: "23#B.天街低区",
    Space: "3.89",
  },

  {
    sid: "28",
    station: "24#·书香名府",
    Space: "6.71",
  },
  {
    sid: "29",
    station: "25#A.琥珀三高",
    Space: "1.14",
  },
  {
    sid: "30",
    station: "25#B.琥珀三低",
    Space: "4.00",
  },
  {
    sid: "31",
    station: "26#A.体育馆地",
    Space: "0.47",
  },
  {
    sid: "32",
    station: "26#B.体育馆散",
    Space: "0.47",
  },
];
function dataInitStation(data, len, dataObj, dataInfoObj) {
  if (data.length == 0) {
    for (let i = 0; i < len; i++) {
      if (i < dataInfoObj.length) {
        let ObjX = dataInfoObj[i];
        dataObj.Sid = ObjX.sid;
        dataObj.Station = ObjX.station;
        dataObj.Space = ObjX.Space;
        // dataObj.aaa = ObjX.sid;

        let obj = JSON.parse(JSON.stringify(dataObj));
        data.push(obj);
      } else {
      }
    }
  }
}
export default {
  initDataStation,
  initInfoDataStation,
  dataInitStation, //
};
