/**
 * 日期 2020/05/20
 * AUther ranjingqiao 
 * */
import * as navTo from './navTo'
import baseURL from './api'
var version = '1.0'

function request_post2(url, param, successCallback, failCallback) {
	var _this = this;
	uni.showLoading({
		title: '加载中'
	})
 
	var userheader = {

		'api-version': version,
		'custom-header': 'post',
		'content-type': 'application/json;charset=UTF-8'
	}

	uni.request({
		url: baseURL.baseURL + url,
		data: param,
		dataType: 'json',
		method: 'POST',
		header: userheader,
		success: (res) => {
			uni.hideLoading()
			preHandleResult(res);
			if (successCallback) {
				successCallback(res);
			}
		},
		fail: (res) => {
			uni.hideLoading()
			preHandleResult(res);
			if (failCallback) {
				failCallback(res);
			}
		}
	});



}

function request_post(url, param, successCallback, failCallback) {
	var _this = this;
	var ls = '';

	uni.showLoading({
		title: '加载中'
	})
 
	uni.getStorage({
		key: 'token',

		success: function(res) {},
		fail(res) {
			uni.showToast({
				title: '请登录'
			})
			uni.switchTab({
				url: '/pages/user/user'
			});
			uni.clearStorageSync();

		}
	});




	var userheader = {

		'api-version': '1.0',
		'custom-header': 'post',
		'content-type': 'application/json;charset=UTF-8'
	}

	uni.getStorage({
		key: 'token',
		success: function(res) {
			userheader['Authorization'] = res.data.token


			uni.request({
				url: baseURL.baseURL + url,
				data: param,
				dataType: 'json',
				method: 'POST',
				header: userheader,
				success: (res) => {

					if (res.data.code == 401) {
						uni.clearStorageSync();
						uni.showToast({
							title: '请登录'
						})
						uni.switchTab({
							url: '/pages/user/user'
						});
					}
					uni.hideLoading()
					preHandleResult(res);
					if (successCallback) {
						successCallback(res);
					}
				},
				fail: (res) => {
					uni.getStorageSync({
						key: 'token',

						success: function(res) {},
						fail(res) {
							if (res.errMsg == "getStorage:fail data not found") {
								uni.showToast({
									title: '请登录'
								})
								uni.switchTab({
									url: '/pages/user/user'
								});
								uni.clearStorageSync();
							}
						}
					});
					uni.hideLoading()
					preHandleResult(res);
					if (failCallback) {
						failCallback(res);
					}
				}
			});




		},
		fail(res) {
			if (res.errMsg == "getStorage:fail data not found") {
				uni.showToast({
					title: '请登录'
				})
				setTimeout(function() {
					uni.switchTab({
						url: '/pages/user/user'
					});
				}, 1000)



			}

		}
	});



}
// 预处理返回的数据，防止后台服务不在线时，返回不合法数据
function preHandleResult(res) {
	// if (res.errMsg.trim() != "request:ok") {
	// showTip.showSuccessTip("后台服务不在线...", 2500);
	//}
	// success: (res) => {
	// console.log(1);
	// }
}
// 请求末尾加token
function appendToken(url) {
	if (url.indexOf("?") == -1) {
		url += "?"
	} else {
		url += "&"
	}
	url += "access_token=" + accesstoken;
	return url;
}

function request_get2(url, param, successCallback, failCallback) {
	var _this = this;
	uni.showLoading({
		title: '加载中'
	})
	uni.request({
		url: baseURL.baseURL + url,
		data: param,
		dataType: 'json',
		method: 'GET',
		header: {
			'custom-header': 'get', //自定义请求头信息
			'content-type': 'application/json' // 默认返回json格式，可以不加（加上是为了后面方便维护）
		},
		success: (res) => {
			uni.hideLoading()
			preHandleResult(res);
			if (successCallback) {
				successCallback(res);
			}
		},
		fail: (res) => {
			uni.hideLoading()
			preHandleResult(res);
			if (failCallback) {
				failCallback(res);
			}
		}
	});
}
// appendToken(url) 
function request_get(url, param, successCallback, failCallback) {
	var _this = this;
	var userheader = {

		'api-version': version,
		'custom-header': 'post',
		'content-type': 'application/json;charset=UTF-8'
	}

	uni.getStorage({
		key: 'token',
		success: function(res) {
			userheader['Authorization'] = res.data.token
			uni.request({
				url: baseURL.baseURL + url,
				data: param,
				dataType: 'json',
				method: 'GET',
				header: userheader,
				success: (res) => {
					if (res.data.code == 401) {
						uni.clearStorageSync();
						uni.showToast({
							title: '请登录'
						})
						uni.switchTab({
							url: '/pages/user/user'
						});
					}
					preHandleResult(res);
					if (successCallback) {
						successCallback(res);
					}
				},
				fail: (res) => {
					preHandleResult(res);
					if (failCallback) {
						failCallback(res);
					}
				}
			});






		},
		fail(res) {





			if (res.errMsg == "getStorage:fail data not found") {
				uni.showToast({
					title: '请登录'
				})
				setTimeout(function() {
					uni.switchTab({
						url: '/pages/user/user'
					});
				}, 1000)



			}

		}
	});







}



function request_put(url, param, successCallback, failCallback) {
	var _this = this;
	uni.request({
		url: baseURL.baseURL + url,
		data: param,
		dataType: 'json',
		method: 'PUT',
		header: {
			'custom-header': 'put',
			'content-type': 'application/json'
		},
		success: (res) => {
			preHandleResult(res);
			if (successCallback) {
				successCallback(res);
			}
		},
		fail: (res) => {
			preHandleResult(res);
			if (failCallback) {
				failCallback(res);
			}
		}
	});
}

function request_delete(url, param, successCallback, failCallback) {
	var _this = this;
	uni.request({
		url: baseURL.baseURL + url,
		data: param,
		dataType: 'json',
		method: 'DELETE',
		header: {
			'custom-header': 'delete',
			'content-type': 'application/json'
		},
		success: (res) => {
			preHandleResult(res);
			if (successCallback) {
				successCallback(res);
			}
		},
		fail: (res) => {
			preHandleResult(res);
			if (failCallback) {
				failCallback(res);
			}
		}
	});
}
// 上面就是异步请求get/post/put/delete的封装了，到时候你直接导入正确传入参数就可以用这里的异步请求方法了。
// 当然需要先导出去，你才能导入其他地方引用。下面这就是导出。
// 你调用的时候是调 url_Request_get(url,param,success,fail) 方法。而不是function request_get(url,param,success,fail);
// 既然都导出去了，那我们就去别的地方引用去。
export default {

	url_Request_post2: function(url, param, success, fail) {
		return request_post2(url, param, success, fail);
	},
	url_Request_get: function(url, param, success, fail) {
		return request_get(url, param, success, fail);
	},
	url_Request_get2: function(url, param, success, fail) {
		return request_get2(url, param, success, fail);
	},
	url_Request_post: function(url, param, success, fail) {
		return request_post(url, param, success, fail);
	},
	url_Request_put: function(url, param, success, fail) {
		return request_put(url, param, success, fail);
	},
	url_Request_delete: function(url, param, success, fail) {
		return request_delete(url, param, success, fail);
	}
}
