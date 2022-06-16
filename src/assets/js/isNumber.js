//判断一个字符串是不是数字，如果是数字类型的字符串，就直接返回为数字，如果不是数字类型的字符串，就直接返回此字符串
function isNumberVar(val) {
  var regPos = /^\d+(\.\d+)?$/; //非负浮点数
  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
  if (regPos.test(val) || regNeg.test(val)) {
    return parseFloat(val);
  } else {
    return val;
  }
}
// 这是利用上面判断单个元素的方式，来判断一个对象的值
function isNumberObj(obj) {
  for (let key in obj) {
    obj[key] = isNumberVar(obj[key]);
  }
  return obj;
}
export default { isNumberVar, isNumberObj };
