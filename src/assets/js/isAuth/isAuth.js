function isAUth(v) {
  //读取本地的permissions
  let permissions = localStorage.getItem("permissions")

  let flag = false
  //循环传递归来的数组
  for (let one of v) {
    if (permissions.includes(one)) {
      flag = true
      break
    }
  }
  return flag
}
export default {
  isAUth
}
