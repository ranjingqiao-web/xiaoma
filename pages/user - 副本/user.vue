<template>
	<view class="contentuser">
		<view class="daohans">
			<view class="daohan0 daohan01">
				<view class="daohanleft">
					
				</view>
				<!-- <image :src="huodong" class=" daohanleft"></image> -->
			</view>

			<view class="daohan0 daohan0huodogn">我的 </view>
			<view class="daohan0"> </view>
		</view>


		<view class="usertopdenglogo">
			<button class='testbutton' open-type="getUserInfo" @getuserinfo="getuserinfo" withCredentials="true">

				<image :src="touxiang" v-if="avatarUrl==''" class=" usertopdenglogoimg"></image>
			</button>
			<image :src="avatarUrl" v-if="avatarUrl !=''" class=" usertopdenglogoimg"></image></button>
			<view class="usertopdenglogoco" v-if="nickName==''"> 点击登录 </view>
			<view class="usertopdenglogoco" v-if="nickName !=''"> {{nickName}} </view>
		</view>
		<div class="quanbutitlestyle">
			<view class="titlestylest">
				<image :src="dingdang0" class=" daohanleft"></image>
				我的订单
			</view>
			<view class="titlestyleTwo">
				<img :src="you1" class="you1Style" />

			</view>
		</div>
		<div class="quanbutitlestyle" @click='ffffff'>
			<view class="titlestylest">
				<image :src="dingdang1" class=" daohanleft"></image>
				会员卡
			</view>
			<view class="titlestyleTwo">
				<img :src="you1" class="you1Style" />

			</view>
		</div>
		<div class="quanbutitlestyle">
			<view class="titlestylest">
				<image :src="dingdang2" class=" daohanleft"></image>
				浏览的店铺
			</view>
			<view class="titlestyleTwo">
				<img :src="you1" class="you1Style" />

			</view>
		</div>

		<!-- 确认手机号登录 -->
		<uni-popup ref="showPhoneBottom" type="bottom" :mask-click="false">
			<view class="cancelorderbox0">
				<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">确定登录</button>


			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '../../components/uni-popup/uni-popup.vue'

	export default {
		data() {
			return {

				dingdang0: require("../../static/img/xin/dingdang0.png"),
				dingdang1: require("../../static/img/xin/dingdang1.png"),
				dingdang2: require("../../static/img/xin/dingdang2.png"),
				touxiang: require("../../static/img/xin/touxiang.png"),
				you1: require("../../static/img/xin/nextto.png"),
				huodong: require("../../static/img/xin/huodong.png"),
				nickName: '',
				avatarUrl: '',
				code: '',
				respose: null
			}
		},
		computed: {},
		components: {
			uniPopup
		},
		onShow() {
			let _this = this;
			uni.hideLoading()
			uni.getStorage({
				key: 'storage_userInfo',
				success: function(res) {
					_this.nickName = res.data.userInfo.nickName
					_this.avatarUrl = res.data.userInfo.avatarUrl
					console.log("获取缓存", res.data);
				}
			});
		},

		methods: {
			//00000000000000000000000000000000000000000000

			ffffff() {
				this.nickName = ""
				this.avatarUrl = ""
				uni.clearStorageSync();
			},
			//点击获取手机号码按钮
			getPhoneNumber2(e) {
				var _this = this;
				// console.log('====>', e.detail.errMsg)
				//    console.log('========>', e.detail.iv)
				//    console.log('============>',e.detail.encryptedData)
				uni.checkSession({

					success(s) {
						_this.$refs.showPhoneBottom.close()
						_this.WXP.showLoading()
							.then(res => {
								/**
								 * 
								 * /applet/login/getPhone
								 * ***/
								let params = {
									code: _this.code,
									"encryptedData": e.detail.encryptedData,
									"iv": e.detail.iv

								}
								_this.RESQUESTHTTP.url_Request_get2(
									'/applet/login/getPhone',
									params,
									(res) => {
										// _this.respose = JSON.parse(res.data.data);
										_this.respose = res.data.data;

										console.log('====1111111111========>', _this.respose)

									},
									(err) => {
										console.log('err', err)
									},
								)


							})
							.then(res => {
								_this.getopenid2()
								console.log('====2222222222222========>', _this.respose)
							})
							.then(res => {
								//999999999999999999999999
								console.log('======3333333333333======>', _this.respose)
								let logoparams = {
									"openId": _this.respose.watermark.appid,
									"phone": _this.respose.purePhoneNumber,
									"portrait": _this.avatarUrl,
									"username": _this.nickName

								}
								_this.RESQUESTHTTP.url_Request_get2(
									'/applet/login/login',
									logoparams,
									(res) => {

										uni.setStorage({
											key: 'token',
											data: res.data.data,
											success: function() {}
										});
										_this.$refs.showPhoneBottom.close()





										console.log('用户登录成功', res)
									},
									(err) => {
										console.log('err', err)
									},
								)

								//99999999999999999999999 
							})
							.then(res => {
								_this.getopenid2()
							})
							.catch(err => console.error(err))

					},

					fail(e) {
						_this.$refs.showPhoneBottom.close()


					}

				})
			},


			getPhoneNumber(e) {
				var _this = this; 
				uni.checkSession({

					success(s) {
						_this.$refs.showPhoneBottom.close()
                        /**
						 * 
						 * /applet/login/getPhone
						 * ***/
						let params = {
							code: _this.code,
							"encryptedData": e.detail.encryptedData,
							"iv": e.detail.iv

						}
						_this.RESQUESTHTTP.url_Request_get2(
							'/applet/login/getPhone',
							params,
							(res) => {
								let respose = JSON.parse(res.data.data);
								_this.getopenid()

								//999999999999999999999999 
								let logoparams = {
									"openId": respose.watermark.appid,
									"phone": respose.purePhoneNumber,
									"portrait": _this.avatarUrl,
									"username": _this.nickName

								}
								_this.RESQUESTHTTP.url_Request_get2(
									'/applet/login/login',
									logoparams,
									(res) => {

										uni.setStorage({
											key: 'token',
											data: res.data.data,
											success: function() {}
										});
										_this.$refs.showPhoneBottom.close()





										console.log('用户登录成功', res)
									},
									(err) => {
										console.log('err', err)
									},
								)

								//99999999999999999999999 
							},
							(err) => {
								console.log('err', err)
							},
						)




					},

					fail(e) {
						_this.$refs.showPhoneBottom.close()


					}

				})
			},

			getopenid2() {
				let _this = this;

				wx.login({
					success(respe) {
						if (respe.code) {
							wx.getUserInfo({
								success: function(res) {
									uni.setStorage({
										key: 'storage_userInfo',
										data: res,
										success: function() {
											console.log("设置缓存", 'success');
										}
									});
									uni.getStorage({
										key: 'storage_userInfo',
										success: function(res) {
											_this.nickName = res.data.userInfo.nickName
											_this.avatarUrl = res.data.userInfo.avatarUrl

										}
									});

									let paramsCode = {
										code: respe.code
									}
									_this.RESQUESTHTTP.url_Request_get(
										'/applet/login/getOpenId',
										paramsCode,
										(res) => {
											if (res.data.code == 200) {
												uni.showToast({
													title: '登录成功'
												});
											}

										},
										(err) => {},
									)





								},
							})



						}
					}
				})

				_this.$refs.showPhoneBottom.close()

			},


			getopenid() {
				let _this = this;

				wx.login({
					success(respe) {
						if (respe.code) {
                            let paramsCode = {
								code: respe.code
							}
							_this.RESQUESTHTTP.url_Request_get(
								'/applet/login/getOpenId',
								paramsCode,
								(res) => {
									if (res.data.code == 200) {
										uni.showToast({
											title: '登录成功'
										});
									}

								},
								(err) => {},
							)
						}
					}
				})

				_this.$refs.showPhoneBottom.close()

			},

			//00000000000000000000000000000000000000000000
			getuserinfo() {

				let _this = this


				/**
				 * wx登录
				 * this.$refs.showPhoneBottom.close()
				 *	 this.$refs.showPhoneBottom.open()
				 * 
				 * ***/
				wx.login({
					success(res) {
						if (res.code) {
							//发起网络请求
							console.log('codecodecode', res)
							_this.code = res.code

							_this.$refs.showPhoneBottom.open()
							// 获取微信用户信息
							wx.getUserInfo({
								success: function(res) {
									var userInfo = res.userInfo
									var nickName = userInfo.nickName
									var avatarUrl = userInfo.avatarUrl
									var gender = userInfo.gender //性别 0：未知、1：男、2：女
									var province = userInfo.province
									var city = userInfo.city
									var country = userInfo.country
									/**
									 * 缓存用户信息
									 * 
									 * **/
									uni.setStorage({
										key: 'storage_userInfo',
										data: res,
										success: function() {}
									});
									uni.getStorage({
										key: 'storage_userInfo',
										success: function(res) {
											_this.nickName = res.data.userInfo.nickName
											_this.avatarUrl = res.data.userInfo.avatarUrl
										}
									});






								},
								fail: res => {
									// 获取失败的去引导用户授权 
									_this.$refs.showPhoneBottom.close()
								}
							})

						} else {

						}
					}
				})
			}
		}
	}
</script>

<style>
	@import "user.css";
</style>
