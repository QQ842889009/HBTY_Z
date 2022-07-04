//indoor_info
// import that from "@/main.js"
// let aaa = that.$store.getters.get_inDoorDataAndInfo
// console.log("jsjsjsjsjsjsjsjsjs", aaa)
const ruleFormconfig = [
  {
    label: "表号",
    type: "input",
    prop: "Sid"
  },
  {
    label: "设备编号",
    type: "input",
    //inputType: "number",
    prop: "Sn"
  },
  {
    label: "站点",
    type: "select",
    prop: "Station",

    options: [
      {
        label: "1#站",
        value: "1#站"
      },
      {
        label: "2#站",
        value: "2#站"
      },
      {
        label: "3#站",
        value: "3#站"
      }
    ]
  },
  {
    label: "小区",
    type: "input",
    //inputType: "number",
    prop: "Community"
  },
  {
    label: "楼",
    type: "input",
    //inputType: "number",
    prop: "Tower"
  },
  {
    label: "单元",
    type: "input",
    //inputType: "number",
    prop: "Unit"
  },
  {
    label: "室",
    type: "input",
    //inputType: "number",
    prop: "Num"
  }
]

const rules = {
  Sid: [{ required: true, message: "请输入表号", trigger: "blur" }],
  Sn: [{ required: true, message: "请输入设备编号", trigger: "blur" }],
  Community: [{ required: true, message: "请输入小区名称", trigger: "blur" }],
  Station: [{ required: true, message: "请选择换热站", trigger: "change" }],
  Num: [{ required: true, message: "请选择门牌号", trigger: "change" }]
}

const ruleForm = {
  Sid: "",
  Sn: "",
  Community: "",
  Tower: "",
  Unit: "",
  Num: "",
  Station: ""
}
export { ruleFormconfig, rules, ruleForm }
