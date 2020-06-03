<template>
	<view class="dengluin" v-if="isLogin">
		<view class="dengluin0">
			ssss
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				isLogin: false
			};
		},
		onLaunch: function() {
			console.log('App Launc222h');
		},
		onShow: function() {
			let _this = this
 
         console.log('App Show');
			// uni.login({
			// success: function(res) {
			// 	uni.getUserInfo({

			// 		success(infoRes) {
			// 		console.log('接口成功了code',res.code)	
			// 		console.log('接口成功了infoRes',infoRes)	
			// 		}
			// 	})



			//     let params={code:res.code}
			// _this.RESQUESTHTTP.url_Request_get(
			// 	'/applet/login/getOpenId',
			// 	params,  
			// 	(res) => {
			// 		console.log('接口成功了',res)
			// 	},
			// 	(err) => {
			// 		console.log('err', err)
			// 	},
			// )

			// 获取code
			// console.log(';;;;;;', JSON.stringify(res));








			// 	}
			// });
		},
		methods: {
			// getPhoneNumber(e) {
			// 	console.log(e);
			// 	if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {

			// 	} else {

			// 	}
			// 	uni.setStorage({
			// 		key: 'storage_key',
			// 		data: 'hello',
			// 		success: function() {
			// 			console.log("设置缓存", 'success');
			// 		}
			// 	});


			// 	uni.getStorage({
			// 		key: 'storage_key',
			// 		success: function(res) {
			// 			console.log("获取缓存", res.data);
			// 		}
			// 	});
			// 	console.log('------------->', JSON.stringify(e.encryptedData));
			// 	console.log('----222--------->', JSON.stringify(e));
			// }
		},

		onHide: function() {
			console.log('App Hide');
		}
	}
</script>

<style>
	.dengluin {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

	}

	.dengluin0 {
		width: 90%;
		margin: 0 auto;
		height: 400rpx;
		background-color: #fff;
		color: #000000;
	}

	/*每个页面公共css */
	/* uni-app默认全局使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。如不了解flex布局，请参考http://www.w3.org/TR/css3-flexbox/。如不使用flex布局，请删除或注释掉本行。*/
	body,
	page {
		min-height: 100%;
		display: flex;
	}

	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
	}

	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #fff;
	}

	.input-group {
		background-color: #ffffff;
		margin-top: 40upx;
		position: relative;
	}

	.input-group::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		/* height: 1upx; */
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		/* height: 1upx; */
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
		align-items: center;
	}

	.input-row .title {
		width: 20%;
		height: 50upx;
		min-height: 50upx;
		padding: 15upx 0;
		padding-left: 30upx;
		line-height: 50upx;
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 15upx;
		/* height: 1upx; */
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.btn-row {
		margin-top: 50upx;
		padding: 20upx;
	}

	button.primary {
		background-color: #0faeff;
	}

	.primary {
		background-color: #22ddb8;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32rpx;
		padding: 20rpx 0;
		border-radius: 16rpx;
	}
</style>
