<template>
	<div class="content">


		<div class="loginTou94">
			<div class="loginTouleft">
				<img :src="sjshouji" alt="" class="loginTouimg">
				<input placeholder="请输入您的手机号" oninput="if(value.length > 11)value = value.slice(0, 11)" v-model="phone" @focus="changgeText"
				 class="itemInput spreadWidth itemObt" data-required="true">
			</div>
			<div class="loginTouleft">
				<img :src="sjsuo" alt="" class="loginTouimg"> 
				<input placeholder="请输入密码" @focus="changgeTextZM" @input="getchangepassword" :style="passtext?'text-security:disc;-webkit-text-security:disc; -mox-text-security:disc;':''"
				 v-model="passwordText" class="itemInput spreadWidth itemObt" data-required="true">
                  </div>
			
			 <div class="loginIng" @click="getregisternow">登录</div>
			<view class="action-row wangjimima">
				<navigator url="../reg/reg" hover-class="none"> <text class="wangjimima">注册账号</text> </navigator>
				<text class="wangjimima">|</text>
				<navigator url="../pwd/pwd" hover-class="none"> <text class="wangjimima">忘记密码</text> </navigator>
			</view>   
		</div>
 
	</div>
</template>

<script>  
	export default {
		name: "reg",
		// components: {bannertopback, "my-component": dalog, "ran-jing": yinsixieyi },
		data() {
			return { 
				issmscode: true, //判断获取验证码是否可点击
				isyinsi: false, // 隐私协议显示隐藏
				userZhuCe: false, // 用户注册协议显示隐藏
				iszc: true, //false 未勾选 true 已勾选
				usercode: "",
				smsCode: null,
				code: null,
				showmsg: false,
				msg: "",
				btnTitle: "获取验证码",
				passtext: false, //判断是不是隐藏显示
				passtextqueren: false, 
				biyan: require("../../static/img/reg/yanjinb.png"),
				nobiyan: require("../../static/img/reg/yanjinz.png"),
				logo: require('../../static/img/reg/logo3.jpg'),
				phonenum: "请输入手机号",
				phone: null,
				getGuangBiao: false,
				passwordText: null,
				passwordTextqueren:null,
				passwordTextshow: null,
				passwordTextbianma: null,
				password: "字母+数字,6-20位密码",
				getGuangBiaoMM: false,
				tabList: ["密码登录", "验证码登录"],
				duanxinPasswordText: "",
				duanxinPassword: "请输入短信验证码",
				contList: ["11111111", "2222222222"],
				activeIndex: 0,
				isshuakaJinE: false,
				iSyanzhengma: false,
				sjDownTop: true,

				tongyi: require(" ../../static/img/reg/tongy.png"),
				tongyino: require("../../static/img/reg/tongyno.png"),
				Isactive: require("../../static/img/reg/Isactive.png"),
				Noactive: require("../../static/img/reg/Noactive.png"),
				goBack: require("../../static/img/reg/fanghui.png"),
				sjshouji: require("../../static/img/reg/shouji.png"),
				sjsuo: require("../../static/img/reg/suo.png"),
				sjcuo: require("../../static/img/reg/cuo.png"),
				yanzhengma: require("../../static/img/reg/yanzhengma.png"), 
				indeximg: require("../../static/img/reg/indeximg.png"),
				yanjinb: require("../../static/img/reg/yanjinb.png"),
				yd01: require("../../static/img/all/yd011.png"),
				yd02: require("../../static/img/all/yd02.png"),
				arry: [],
				getstring: '',
				getstringqueren: '',

			};
		},
		created: function() {
			this.$emit("header", false);
			 
		},
		methods: {
			changgeTextZM() {
				var _this = this;
				_this.passtext = true 
			},
		 
			 getchangepassword() {
				this.getstring = this.passwordText
				this.passtext = true
			},
 
			// 点击切换的时候重新赋值
			passWordtop() {
				this.passtext = !this.passtext;

				if (this.passtext) {
					this.passwordText = this.passwordText.replace(/./g, '.');

				} else {
					this.passwordText = this.getstring

				}

			},
			jumpLogin() {
				let _this = this;
				_this.$router.push({
					name: 'Login',
					params: {}
				})
			},
			getregisternow() {
				let _this = this;
				 
				if (!_this.iszc) {
					_this.$util.showToast("请阅读注册协议和隐私协议");

					return;
				}

				_this.$api.register({
					body: {
						mobile: _this.phone,
						password: _this.$md5(_this.getstring),
						smsCode: _this.smsCode,
						code: _this.code,
						type: "register"
					},
					success(response) {
						if (response.code == 1000) {
							// 注册成功之后会自动跳转到登录页面
							_this.$util.showToast(response.msg);
							_this.$router.push({
								name: 'Login',
								params: {}
							})

						} else {
							_this.$util.showToast(response.msg);
						}


					},
					fail(response) {
						_this.$util.showToast(response.msg);
					}
				});
			},
			 
			 
			   
			 
			 
			 

			// 获取光标
			changgeText() {
				var _this = this;
				_this.getGuangBiao = !_this.getGuangBiao;
			},

		  
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.msgclass {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: o;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		color: #fff;
		background-color: #7399ff;
		z-index: 999;
	}

	.getsmsm {
		font-size: 24rpx;
		padding: 20rpx 0;
	}

	.loginTou {
		margin-top: 100rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.itemInput,
	.itemSelect {
		height: 100rpx;
		border: none;
		outline: none;
		font-size: 32rpx;
		color: #000;
		/* width: calc(100% + 2px); */
		width: 100%;
		text-indent: 20rpx;
		border-radius: 10rpx;
		box-sizing: border-box;
	}

	.loginTou94 {
		width: 94%;
		margin: 0 auto;
		padding-bottom: 80rpx;
		margin-top: 200rpx;
	}

	input {
		font-size: 34rpx;
         text-indent: 20rpx;
	}

	input::-webkit-input-placeholder {
		color: silver;
		font-size: 32rpx;
		border: none;
		outline: none;
	}

	.loginTouleft {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10rpx 0;
		border-bottom: 1px solid #f6f6f6;

	}

	.loginTouimg {
		width: 60rpx;
		height: 50rpx;
	}

	.yanzhengmasms {
		width: 80%;
	}

	.loginTouleftrow {

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.loginTouleftrow0 {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	.loginTouinput {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 40rpx;
	}

	.itemObtbac {
		background-color: #f6f6f6;
		text-align: center;
	}

	.tongyile {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		font-size: 28rpx;
		color: #e8e8e8;
		padding: 20px 0;
	}

	.tongyileimg {
		width: 36rpx;
		height: 36rpx;
	}

	.zcys {
		color: #22ddb8;
		font-size: 24rpx;
	}

	.loginIng {
		color: #fff;
		width: 80%;
		margin: 0 auto;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 12rpx;
		margin-top: 40rpx;
		background: #22ddb8;
	}

	.wangjimima {
		color: silver;
		font-size: 26rpx;
		text-align: center;
		margin-top: 40rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.wangjimimas {
		color: #22ddb8;
		font-size: 26rpx;
		text-decoration: underline;
		margin-top: 40rpx;
	}

	.actives {
		color: #22ddb8;

	}
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.action-row navigator {
		color: #007aff;
		padding: 0 20upx;
	}
	.navigetors {
		color: #666;
	}
</style>



 