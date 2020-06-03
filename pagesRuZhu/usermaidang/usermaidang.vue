<template>
	<view class="youhuijuandetail">
		<view class="mainswi">
			<view class="daohan">
				<view class="daohan0 daohan01">

					<image :src="goo_back" class=" daohanleft" @click="gooback"></image>
					<!-- <image :src="huodong" class=" daohanleft"></image> -->
				</view>

				<view class="daohan0 daohan0huodogn">{{shangdiantitle}} </view>
				<view class="daohan0"> </view>
			</view>

			<view class="usermmediatelyshiminren">
				<view class="usermmediatelyshiminren0"> 消费总额 </view>
				<input 
				class="usermmediatelyshiminren1" 
				 :v-module="acnpaymonly" 
				 @input="onKeyUserNameInput"
				 placeholder="询问店主后输入" />
			</view>
			<view class="usermmediatelyshiminren" @click="canyuyouhui">
				<img :src="isShowImg?isavtive:avtive" class="canyuyouhuis" />
				<view :class="isShowImg?'isactivecolor':'iscolor'"> 不参与优惠总额 </view>
			</view>
			
			<view class="usermmediatelyshiminren" v-if="isShowImg">
				<view class="usermaidangyouhui1"> 不参与优惠金额 </view>
				<input 
				class="usermmediatelyshiminren1" 
				 :v-module="acnpaymonlycanyu" 
				 @input="onKeyUserNameInputcanyu"
				 placeholder="输入金额" />
			</view>
			<view class="usermaidangyouhui" @click="toxuanzheyouhuijuan">
				<view class="usermaidangyouhui1">
					优惠券（0张可用）
				</view>
				<view class="usermaidangyouhui2">
					共享店铺优惠
					<img :src='nextto' class='nexttocss'>
				</view>
			</view>

			<view class="usermaidangyouhui">
				<view class="usermmediatelyshiminren0">
					实付金额
				</view>
				<view class="usermaidangyouhui2 colorRed">
					￥0
				</view>
			</view>

			<view class="okmaidang" @click="upDingDang">
				确认买单
			</view>
		</view>
	</view>
</template>

<script>
	// import comtopbanner from "../../common/comusershangjia/comtopbanner";

	export default {
		name: "usermaidang",
		components: {},
		props: [],
		data() {
			return {
				paramsData: {},
				isShowImg: true, 
				acnpaymonly: '',
				acnpaymonlycanyu: 0,
				goo_back: require("../../static/img/xin/goo_back.png"),
				avtive: require("../../static/img/xin/yes1.png"),
				isavtive: require("../../static/img/xin/yes01.png"),
				nextto: require("../../static/img/xin/nextto.png"),
				shangdiantitle: '商家活动',
				couponId:''
			}
		},
		created() {
            
		},
		onLoad: function(option) {
			this.paramsData = option
			console.log('optionoption', option)
            
		},
		methods: {
			onKeyUserNameInputcanyu: function(event) {  
			                this.acnpaymonlycanyu = event.target.value  
			            },  
			 onKeyUserNameInput: function(event) {  
			                this.acnpaymonly = event.target.value  
			            },  
			/**
			 * 生成订单
			 * 
			 * **/
			upDingDang() {
				let _this = this;
				console.log('upDingDangupDingDang',_this.acnpaymonly )
				if (_this.acnpaymonly == null || _this.acnpaymonly == '') {
					uni.showToast({
						title: '请确定金额'
					})
					return
				}
				 if( _this.isShowImg){
					 if(_this.acnpaymonlycanyu<=0){
						uni.showToast({
							title:'请输入金额'
						}) 
						return
					 }
					 
					  
					 
				 }
			        
					 /**
					  * 
					  * blnDontDiscount*	boolean  是否存在不参与优惠的金额
 
					  * dontDiscountAmount*	integer($int32)不参与优惠的金额
 
					  * **/
					 uni.getStorage({
					 	key: 'openId',
					 	success: function(res) {
					 		//用户优惠券ID  couponId  "openId": ,res.data,
					 		let logoparams = {
								 "blnDontDiscount": _this.isShowImg,
								 dontDiscountAmount:_this.acnpaymonlycanyu,
					 			"amount": _this.acnpaymonly,
					 			 "openId":res.data,
					 			couponId: _this.paramsData.id,  
					 			storeId: _this.paramsData.storeId
					 		}
					 		_this.RESQUESTHTTP.url_Request_post(
					 			'/applet/pay/generateOrder',
					 			logoparams,
					 			(res) => {
					 		
					 				if (res.data.code == 200) {
									 wx.requestPayment(
										{
										'timeStamp': '',
										'nonceStr': '',
										'package': '',
										'signType': 'MD5',
										'paySign': '',
										'success':function(res){},
										'fail':function(res){},
										'complete':function(res){}
										})
									}
					 		
					 			},
					 			(err) => {
					 		
					 			},
					 		) 
					 	}
					 });
					 
				 

			},

			/**
			 * 店铺vip下单
			 * 
			 * **/
			upDingDangvip() {
				let _this = this;
				
				
				let logoparams = {
					"openId": "string",
					"storeLevelId": "string"
				}
				// https://xiaomalake.com/ps/applet-service/applet/user/userCoupon/pag
				_this.RESQUESTHTTP.url_Request_post(
					'/applet/pay/generateStoreVIPOrder',
					logoparams,
					(res) => {

						if (res.data.code == 200) {}

					},
					(err) => {

					},
				)
			},


			canyuyouhui() {
				this.isShowImg = !this.isShowImg
			},
			toxuanzheyouhuijuan() {
				let url = '../xuanzheyouhuijuan/xuanzheyouhuijuan'
				let param = {}
				this.$navTo.togo(url, param)
			},

			callTel(v) {
				uni.makePhoneCall({
					phoneNumber: v
				});
			},
			gooback() {
				uni.navigateBack()
			},

		},
		mounted() {}
	};
</script>

<style scoped>
	@import "usermaidang.css";
</style>
