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
		<div class="quanbutitlestyle" >
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
				respose: {}
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
			uni.getStorage({
				key: 'token',
				 
				success: function(res) { 
				},
				fail(res) {
					if(res.errMsg== "getStorage:fail data not found" ){
						_this.nickName = ""
						_this.avatarUrl = ""
						uni.clearStorageSync();
					} 
				}
			});
			_this.GetOpenId()
		},
        
		
		methods: {
			//00000000000000000000000000000000000000000000

			ffffff() {
				this.nickName = ""
				this.avatarUrl = ""
				uni.clearStorageSync();
			},
			
			GetOpenId(){
				var _this = this;
				
				wx.login({
					success(res) {
						if (res.code) {
							//发起网络请求
							// console.log('codecodecode', res)
							// _this.code = res.code
							let params = {
								code: res.code,
								type:'CLIENT'
							
							}
							_this.RESQUESTHTTP.url_Request_get2(
								'/applet/login/getOpenId',
								params,
								(pres) => {
									 if(pres.data.code==200){
										 
										 
										 
										 	uni.setStorage({
										 		key: 'openId',
										 		data: pres.data.data,
										 		success: function() {}
										 	}); 
										// var thisrespose =JSON.parse(pres.data.data)  ;
										// _this.getTologin(thisrespose)
										 console.log('====11111data11111========>', pres.data.data)
									}
									  
							
								},
								(err) => {
									console.log('err', err)
								},
							)
							
							}
						     }
							})
							
				 
			},
			 
			//点击获取手机号码按钮
			getPhoneNumber(e) {
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
									"iv": e.detail.iv,type:'CLIENT'

								}
								_this.RESQUESTHTTP.url_Request_post2(
									'/applet/login/getPhone',
									params,
									(pres) => {
										 if(pres.data.code==200){
											 	 
											var thisrespose =JSON.parse(pres.data.data)  ;
											_this.getTologin(thisrespose)
											 console.log('====11111data11111========>', thisrespose)
										}
										  

									},
									(err) => {
										console.log('err', err)
									},
								)


							}) 
							.then(res => {
								 
							})
							.then(res => {
								// _this.getopenid()
							})
							.catch(err => console.error(err))

					},

					fail(e) {
						_this.$refs.showPhoneBottom.close()


					}

				})
			},
			/**
			 * 
			 * 
			 * 登录接口
			 * ***/
           getTologin(respose){
			   let _this=this;
			   //999999999999999999999999
			   console.log('======3333333333333======>', respose)
			   // uni.setStorage({
			   // 	key: 'use_openId',
			   // 	data: respose.watermark.appid,
			   // 	success: function() {}
			   // });
			   
			   
			   
			   uni.getStorage({
			   	key: 'openId',
			   	success: function(res) {
			   		 let logoparams = {
			   		 	"openId":  res.data,
			   		 	"phone":  respose.purePhoneNumber,
			   		 	"portrait": _this.avatarUrl,
			   		 				type:'CLIENT',
			   		 	"username": _this.nickName
			   		 
			   		 }
			   		 _this.RESQUESTHTTP.url_Request_post2(
			   		 	'/applet/login/login',
			   		 	logoparams,
			   		 	(res) => {
			   		      if(res.data.code==200){
			   		 					_this.$refs.showPhoneBottom.close()
			   		 					uni.setStorage({
			   		 						key: 'token',
			   		 						data: res.data.data,
			   		 						success: function() {}
			   		 					});
			   		 					 
			   		 					uni.showToast({
			   		 						title:'登录成功'
			   		 					})	 
			   		 					uni.switchTab({
			   		 					    url: '/pages/main/main'
			   		 					});
			   		 					}
			   		 	 },
			   		 	(err) => {
			   		 		console.log('err', err)
			   		 	},
			   		 )
			   	}
			   });
			   
			   
			   
			   
			   //99999999999999999999999 
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
