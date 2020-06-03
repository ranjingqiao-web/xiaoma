
// 代码核心，利用到了ES6的Promise函数
function p (func, obj) {
 return new Promise((resolve, reject) => {
 func({
 ...obj,
 success: resolve,
 fail: reject
 })
 })
}
 
// 此处导出你在开发中需要用到的小程序接口
export default {
 login: obj => p(wx.login, obj),
 showLoading: obj => p(wx.showLoading, obj),
}