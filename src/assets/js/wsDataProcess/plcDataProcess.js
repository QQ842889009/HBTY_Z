import that from "@/main.js"
import { plcdataType, echartdataType } from "assets/js/storeBox/dataType.js"
/**
 *
 * @param {拿到的后端传递过来的plc数据，没有信息} msg
 * 拿到数据后在下面的函数里进行格式化为仓库一样的数据，然后推给仓库进行更新。
 * 此函数在这里引用了plc数据的对象原型，考虑如果在socket里引用原型比较乱
 */
let wsPlcDataProcess = (msg) => {
  new Promise((resolve, reject) => {
    // console.log('plc数据复制替换')
    plcdataType.Sid = msg.Sid
    // plcdataType.Sname = msg.Sname;
    // plcdataType.Space = msg.Space;
    plcdataType.TimesTamp = msg.TimesTamp
    plcdataType.SdateTime = msg.SdateTime

    plcdataType.FT11 = parseInt(msg.FT11)
    plcdataType.FT21 = parseInt(msg.FT21)
    plcdataType.FT31 = parseInt(msg.FT31)
    plcdataType.TE11 = msg.TE11
    plcdataType.TE12 = msg.TE12
    plcdataType.TE21 = msg.TE21
    plcdataType.TE22 = msg.TE22
    plcdataType.PT11 = msg.PT11
    plcdataType.PT12 = msg.PT12
    plcdataType.PT21 = msg.PT21
    plcdataType.PT22 = msg.PT21
    plcdataType.LT = msg.LT
    plcdataType.TE00 = msg.TE00
    plcdataType.FV1FB = parseInt(msg.FV1FB)
    plcdataType.FV2FB = parseInt(msg.FV2FB)
    plcdataType.BP21FB = parseInt(msg.BP21FB)
    plcdataType.BP22FB = parseInt(msg.BP22FB)
    plcdataType.MP1FB = parseInt(msg.MP1FB)
    plcdataType.MP2FB = parseInt(msg.MP2FB)
    plcdataType.Q1 = msg.Q1
    plcdataType.Q2 = msg.Q2
    plcdataType.DL = msg.DL
    plcdataType.ZFT11 = parseInt(msg.ZFT11)
    plcdataType.ZFT21 = parseInt(msg.ZFT21)
    plcdataType.ZFT31 = parseInt(msg.ZFT31)
    plcdataType.ZQ1 = msg.ZQ1
    plcdataType.ZQ2 = msg.ZQ2
    plcdataType.Q_CS = msg.Q_CS
    plcdataType.Q_24 = msg.Q_24
    plcdataType.TE22_MP = msg.TE22_MP
    plcdataType.PT11_FV = msg.PT11_FV
    plcdataType.PT21_FV = msg.PT21_FV
    plcdataType.PT22_BF = msg.PT22_BF
    plcdataType.PT22_BL = msg.PT22_BL

    plcdataType.TE221 = msg.TE221 < 0 ? 0 : msg.TE221
    plcdataType.TE222 = msg.TE222 < 0 ? 0 : msg.TE222
    plcdataType.TE223 = msg.TE223 < 0 ? 0 : msg.TE223
    plcdataType.TE224 = msg.TE224 < 0 ? 0 : msg.TE224
    plcdataType.TE225 = msg.TE225 < 0 ? 0 : msg.TE225
    plcdataType.TE226 = msg.TE226 < 0 ? 0 : msg.TE226
    plcdataType.TE227 = msg.TE227 < 0 ? 0 : msg.TE227
    plcdataType.TE228 = msg.TE228 < 0 ? 0 : msg.TE228
    plcdataType.TE229 = msg.TE229 < 0 ? 0 : msg.TE229
    plcdataType.TE22A = msg.TE22A < 0 ? 0 : msg.TE22A
    plcdataType.PT221 = msg.PT221 < 0 ? 0 : msg.PT221
    plcdataType.PT222 = msg.PT222 < 0 ? 0 : msg.PT222
    plcdataType.PT223 = msg.PT223 < 0 ? 0 : msg.PT223
    plcdataType.PT224 = msg.PT224 < 0 ? 0 : msg.PT224
    plcdataType.PT225 = msg.PT225 < 0 ? 0 : msg.PT225
    plcdataType.PT226 = msg.PT226 < 0 ? 0 : msg.PT226
    plcdataType.PT227 = msg.PT227 < 0 ? 0 : msg.PT227
    plcdataType.PT228 = msg.PT228 < 0 ? 0 : msg.PT228
    plcdataType.PT229 = msg.PT229 < 0 ? 0 : msg.PT229
    plcdataType.PT22A = msg.PT22A < 0 ? 0 : msg.PT22A
    plcdataType.DLAV = msg.DLAV
    plcdataType.DLBV = msg.DLBV
    plcdataType.DLCV = msg.DLCV
    plcdataType.FT211 = msg.FT211
    plcdataType.FT212 = msg.FT212
    plcdataType.FT213 = msg.FT213
    plcdataType.FT214 = msg.FT214
    plcdataType.Q211 = msg.Q211
    plcdataType.Q212 = msg.Q212
    plcdataType.Q213 = msg.Q213
    plcdataType.Q214 = msg.Q214
    plcdataType.TE12_Z = msg.TE12_Z
    plcdataType.ZQ211 = msg.ZQ211
    plcdataType.ZQ212 = msg.ZQ212
    plcdataType.ZQ213 = msg.ZQ213
    plcdataType.ZQ214 = msg.ZQ214
    plcdataType.FV1SP = msg.FV1SP
    plcdataType.FV2SP = msg.FV2SP
    plcdataType.BP21SP = parseInt(msg.BP21SP)
    plcdataType.BP22SP = parseInt(msg.BP22SP)
    plcdataType.MP1SP = msg.MP1SP
    plcdataType.MP2SP = msg.MP2SP
    plcdataType.PT21_HH = msg.PT21_HH
    plcdataType.PT22_LL = msg.PT22_LL
    plcdataType.LT_H = msg.LT_H
    plcdataType.LT_L = msg.LT_L
    plcdataType.LT_LL = msg.LT_LL
    plcdataType.FT1SP_X = msg.FT1SP_X
    plcdataType.FT1SP = msg.FT1SP
    plcdataType.FT2SP_X = msg.FT2SP_X
    plcdataType.FT2SP = msg.FT2SP
    plcdataType.PT22SP = msg.PT22SP
    plcdataType.PT22SP_L = msg.PT22SP_L
    plcdataType.PT22SP_H = msg.PT22SP_H
    plcdataType.PT22SP_HH = msg.PT22SP_HH
    plcdataType.PT22XY_H = msg.PT22XY_H
    plcdataType.PT22XY_L = msg.PT22XY_L
    plcdataType.FT1SP_Stime = msg.FT1SP_Stime
    plcdataType.FT1SP_Atime = msg.FT1SP_Atime
    plcdataType.FT2SP_Stime = msg.FT2SP_Stime
    plcdataType.FT2SP_Atime = msg.FT2SP_Atime

    plcdataType.BP21C = parseInt(msg.BP21C)
    plcdataType.BP22C = msg.BP22C
    plcdataType.BP_TR = msg.BP_TR
    plcdataType.MP1C = msg.MP1C
    plcdataType.MP2C = msg.MP2C
    plcdataType.MP_TR = msg.MP_TR
    plcdataType.XYC = msg.XYC
    plcdataType.MA_FV1 = msg.MA_FV1
    plcdataType.MA_BP2 = msg.MA_BP2
    plcdataType.MA_MP = msg.MA_MP
    plcdataType.BP21A_LOCK = msg.BP21A_LOCK
    plcdataType.BP22A_LOCK = msg.BP22A_LOCK
    plcdataType.MP1A_LOCK = msg.MP1A_LOCK
    plcdataType.MP2A_LOCK = msg.MP2A_LOCK
    plcdataType.PT21_LOCK = msg.PT21_LOCK
    plcdataType.LT_LOCK = msg.LT_LOCK
    plcdataType.BP2_LOCK = msg.BP2_LOCK
    plcdataType.Q_24Gog = msg.Q_24Gog
    plcdataType.BP21S = parseInt(msg.BP21S)
    plcdataType.BP21A = parseInt(msg.BP21A)
    plcdataType.BP21RM = parseInt(msg.BP21RM)
    plcdataType.BP22S = msg.BP22S
    plcdataType.BP22A = msg.BP22A
    plcdataType.BP22RM = msg.BP22RM
    plcdataType.MP1S = msg.MP1S
    plcdataType.MP1A = msg.MP1A
    plcdataType.MP1RM = msg.MP1RM
    plcdataType.MP2S = msg.MP2S
    plcdataType.MP2A = msg.MP2A
    plcdataType.MP2RM = msg.MP2RM
    plcdataType.MA_FV1_TE21 = msg.MA_FV1_TE21
    plcdataType.TE2X = (plcdataType.TE21 - plcdataType.TE22).toFixed(1)
    resolve(plcdataType)
  }).then((msg) => {
    that.$store.commit("plcS7/mutaPlcDataUpdata", msg)
  })
}
let wsEchartDataProcess = (msg) => {
  new Promise((resolve, reject) => {
    echartdataType.Sid = msg.Sid

    echartdataType.日期时间 = msg.SdateTime
    echartdataType.时间戳 = msg.TimesTamp
    echartdataType.一供流量 = parseInt(msg.FT11)
    echartdataType.二供流量 = parseInt(msg.FT21)
    echartdataType.补水流量 = parseInt(msg.FT31)
    echartdataType.一供温度 = msg.TE11
    echartdataType.一回温度 = msg.TE12
    echartdataType.二供温度 = msg.TE21
    echartdataType.二回温度 = msg.TE22
    echartdataType.一供压力 = msg.PT11
    echartdataType.一回压力 = msg.PT12
    echartdataType.二供压力 = msg.PT21
    echartdataType.二回压力 = msg.PT22
    echartdataType.液位 = msg.LT
    ;(echartdataType.一网热量 = msg.Q1),
      (echartdataType.二网热量 = msg.Q2),
      (echartdataType.一网温差 = (
        echartdataType.一供温度 - echartdataType.一回温度
      ).toFixed(1))
    echartdataType.二网温差 = (
      echartdataType.二供温度 - echartdataType.二回温度
    ).toFixed(1)
    echartdataType.一网压差 = (
      echartdataType.一供压力 - echartdataType.一回压力
    ).toFixed(1)
    echartdataType.二网压差 = (
      echartdataType.二供压力 - echartdataType.二回压力
    ).toFixed(1)
    resolve(echartdataType)
  }).then((msg) => {
    that.$store.commit("plcS7/mutaEchartDataUpdata", msg)
  })
}

export { wsPlcDataProcess, wsEchartDataProcess }
