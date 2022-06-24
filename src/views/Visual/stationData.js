import that from "@/main.js";
import _ from "lodash";
/**
 * tableConfig--数据总览列的属性变量
 */
const tableConfig = [
  { id: 100, label: "换热站", prop: "Station", width: "100" },
  { id: 200, label: "面积", prop: "Space", width: "100" },
  {
    id: 300,
    label: "一网参数",
    prop: "",
    children: [
      { id: 301, label: "供温 ℃", prop: "TE11", width: "70" },
      { id: 302, label: "回温 ℃", prop: "TE12", width: "70" },
      { id: 303, label: "供压 Mpa", prop: "PT11", width: "85" },
      { id: 304, label: "阀后压 Mpa", prop: "PT11_FV", width: "95" },
      { id: 305, label: "回压 Mpa", prop: "PT12", width: "85" },
      { id: 306, label: "流量 t/h", prop: "FT11", width: "70" },
      { id: 307, label: "电动阀 %", prop: "FV1FB", width: "80" },
    ],
  },
  {
    id: 400,
    label: "二网参数",
    prop: "",
    children: [
      { id: 401, label: "供温 ℃", prop: "TE21", width: "70" },
      { id: 402, label: "回温 ℃", prop: "TE22", width: "70" },
      { id: 403, label: "供压 Mpa", prop: "PT21", width: "85" },
      { id: 404, label: "回压 Mpa", prop: "PT22", width: "85" },
      { id: 405, label: "泵前压 Mpa", prop: "PT22_BF", width: "95" },
      { id: 406, label: "泵后压 Mpa", prop: "PT22_BL", width: "95" },
      { id: 407, label: "流量 t/h", prop: "FT21", width: "70" },
      { id: 408, label: "循环泵 Hz", prop: "BP21FB", width: "85" },
      { id: 409, label: "电动阀 %", prop: "FV2FB", width: "80" },
      { id: 410, label: "补水后温 ℃", prop: "TE22_MP", width: "95" },
      { id: 4311, label: "补水泵", prop: "MP1S", width: "70" },
      { id: 412, label: "潜水泵", prop: "MP2S", width: "70" },
      { id: 413, label: "泄压阀", prop: "XYVC", width: "70" },
      { id: 414, label: "液位 m", prop: "LT", width: "70" },
      { id: 415, label: "补水量 t", prop: "FT31", width: "70" },
    ],
  },

  { id: 500, label: "电能 MWh", prop: "DL", width: "100" },
];
const tableConfigZnsj = [
  { id: 100, label: "换热站", prop: "Station", width: "100" },
  { id: 401, label: "供温 ℃", prop: "TE21", width: "100" },
  { id: 402, label: "回温 ℃", prop: "TE22", width: "100" },
  { id: 403, label: "温差 ℃", prop: "TE2X", width: "100" },
];

export { tableConfig, tableConfigZnsj };
