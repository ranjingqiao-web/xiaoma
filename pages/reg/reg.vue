<template>
	<div class="content">


		<div class="loginTou94">
			<div class="loginTouleft">
				<img :src="sjshouji" alt="" class="loginTouimg">
				<input placeholder="请输入您的手机号" oninput="if(value.length > 11)value = value.slice(0, 11)" v-model="phone" @focus="changgeText"
				 class="itemInput spreadWidth itemObt" data-required="true">
				<img :src="sjcuo" alt="" class="loginTouimg" v-if="getGuangBiao" @click="removeText">
			</div>
			<div class="loginTouleft">
				<img :src="sjsuo" alt="" class="loginTouimg">
				<!--   @input="getchangepassword"  -->
				<input placeholder="请输入密码" @focus="changgeTextZM" @input="getchangepassword" :style="passtext?'text-security:disc;-webkit-text-security:disc; -mox-text-security:disc;':''"
				 v-model="passwordText" class="itemInput spreadWidth itemObt" data-required="true">

				<img :src="nobiyan" v-if="!passtext" alt class="loginTouimg" @click="passWordtop" />
				<img :src="yanjinb" v-if="passtext" @click="passWordtop" alt="" class="loginTouimg">
			</div>
			
			<div class="loginTouleft">
				<img :src="sjsuo" alt="" class="loginTouimg">
				<!--   @input="getchangepassword"  -->
				<input placeholder="请再次确认密码"
				 @focus="changgeTextZMqueren" 
				@input="getchangepasswordqueren"   
				 :style="passtextqueren?'text-security:disc;-webkit-text-security:disc; -mox-text-security:disc;':''"
				 v-model="passwordTextqueren" class="itemInput spreadWidth itemObt" data-required="true">
			
				<img :src="nobiyan" v-if="!passtextqueren" alt class="loginTouimg" @click="passWordtopqueren" />
				<img :src="yanjinb" v-if="passtextqueren" @click="passWordtopqueren" alt="" class="loginTouimg">
			</div>
			<div class="loginTouleft loginTouleftrow">
				<div class="loginTouleftrow0">
					<img :src="yanzhengma" alt="" class="loginTouimg">
					<input placeholder="请输入验证码" v-model="smsCode" class="itemInput spreadWidth yanzhengmasms">
				</div>

				<div class="getsmsm" v-if="issmscode" @click="getMa">{{btnTitle}}</div>
				<div class="getsmsm" v-if="!issmscode">{{btnTitle}}</div>

				<!-- <div class="getsmsm"> 获取验证码</div> -->
			</div>


			<div class="tongyile">
				<img v-if="!iszc" @click="zheceYins" :src="yd011" alt class="tongyileimg" />
				<img v-if="iszc" @click="zheceYins" :src="yd02" alt class="tongyileimg" />

				<span @click="zheceYins" :class="iszc?'actives':''">本人已阅读并同意</span>
				<span class="zcys" @click="userZhuCeupload">《注册服务协议》</span>
				<span class="zcys" @click="yinsixieyiran">《隐私协议》</span>
			</div>

			<div class="loginIng" @click="getregisternow">立即注册</div>
			<div class="wangjimima">
				已有账号，
				<navigator url="../login/login"> <span @click="jumpLogin" class="wangjimimas">马上登录 </span> </navigator>

			</div>
		</div>


		<!--  <div v-if="userZhuCe">
      <my-component @childClick="childClick" />
    </div>
    <div v-if="isyinsi">
      <ran-jing @yinsiran="yinsiran"></ran-jing>
    </div> -->
	</div>
</template>

<script>
	// import dalog from "./dalogs.vue";
	// import yinsixieyi from "./yinsiText.vue";
	// import bannertopback from '../bannertopback/bannertopback'
	import Bg2 from '../../static/img/reg/logo3.jpg'
	export default {
		name: "reg",
		// components: {bannertopback, "my-component": dalog, "ran-jing": yinsixieyi },
		data() {
			return {
				bg2: Bg2,
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
			// var CODE=this.$util.queryString('code');
			// if(CODE ==undefined || CODE == null || CODE ==""){
			//   this.code=''
			// }else{
			//   this.code=CODE  

			// }  
		},
		methods: {
			changgeTextZM() {
				var _this = this;
				_this.passtext = true 
			},
			changgeTextZMqueren(){
				var _this = this;
				_this.passtextqueren = true 
			},
			 
			getchangepasswordqueren() {
				this.getstringqueren = this.passwordTextqueren
				this.passtextqueren = true
			},
			
			// 点击切换的时候重新赋值
			passWordtopqueren() {
				this.passtextqueren = !this.passtextqueren;
			
				if (this.passtextqueren) {
					this.passwordTextqueren = this.passwordTextqueren.replace(/./g, '.');
			
				} else {
					this.passwordTextqueren = this.getstringqueren
			
				}
			
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
				if (_this.code == null || _this.code == '') {
					_this.$util.showToast("亲，邀请码必填哦");

					return;
				}
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
			// 获取验证码  send
			getMa() {
				let _this = this;


				var mobile_mode = /^1[0-9]\d{9}$/;
				if (_this.phone == null || !mobile_mode.test(_this.phone)) {
					_this.$util.showToast("请检查手机号是否正确");

					return;
				}

				if (_this.getstring == null || _this.getstring.length < 6) {
					_this.$util.showToast("亲，密码不能小于6位数");

					return;
				}

				_this.issmscode = false;
				_this.$api.send({
					body: {
						mobile: _this.phone,
						type: "register"
					},
					success(response) {
						if (response.code != 1000) {
							_this.$util.showToast(response.msg);
						}

					},
					fail() {}
				});
				_this.validateBtn();
			},
			validateBtn() {
				//倒计时  btnTitle  disabled
				let time = 60;
				let timer = setInterval(() => {
					if (time == 0) {
						clearInterval(timer);
						this.disabled = false;
						this.btnTitle = "获取验证码";
						this.issmscode = true; //为0 后可以点击
					} else {
						this.issmscode = false; //不为0 不能点击
						this.btnTitle = time + "秒后重试";
						this.disabled = true;
						time--;
					}
				}, 1000);
			},
			gobackShouye() {
				localStorage.setItem("XCont", "HelloWorld");
				this.$router.push({
					name: "HelloWorld",
					params: {
						id: "1"
					}
				});
			},
			yinsiran() {
				this.isyinsi = !this.isyinsi;
			},
			yinsixieyiran() {
				this.isyinsi = !this.isyinsi;
			},
			childClick() {
				this.userZhuCe = !this.userZhuCe;
			},
			userZhuCeupload() {
				this.userZhuCe = !this.userZhuCe;
			},
			zheceYins() {
				this.iszc = !this.iszc;
			},


			loginIng() {},
			goback() {
				this.$router.go(-1);
			},
			shuakaJinE() {
				this.isshuakaJinE = !this.isshuakaJinE;
			},
			tabChange(val) {
				this.activeIndex = val;
			},
			changgeTextZM() {
				var _this = this;
				_this.getGuangBiaoMM = !_this.getGuangBiaoMM;
			},
			removeTextMM() {
				var _this = this;
				_this.getGuangBiao = !_this.getGuangBiao;
				_this.phone = null;
				_this.password = _this.password;

			},

			// 获取光标
			changgeText() {
				var _this = this;
				_this.getGuangBiao = !_this.getGuangBiao;
			},

			removeText() {
				var _this = this;
				_this.phone = null;
				_this.getGuangBiao = !_this.getGuangBiao;

				_this.phone = _this.phone;

			},
			duanxinPasswordTextfous() {}
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
		width: 50rpx;
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
</style>
