<template>
	<div class="listOrder90">
		<view class="listOrder">

			<view class="listOrder2" @click="tojumpdtail(listitem)">
				<view class="listOrder2">
					<view class="listOrder21">
						 
						<view class="listOrderzhe"> {{listitem.amount}} </view>
						<view class="listOrderzhe1"> 折 </view>

					</view>
					<view class="listOrder22">
						<view class="listOrder221"> {{listitem.storeName}}</view>
						 
						<view class="listOrder221"> {{listitem.endDate}}</view>
						<view class="listOrder222">来自：{{listitem.source}}</view>
					</view>
				</view>
				<view class="listOrder3">
					<image :src="erweima" class="erweimas0"></image>
					<image :src="heiyou" class="erweimas1"></image>

				</view>
			</view>
			<view class="listdaojishi">
				<view class="listOrdershenyuzhifu">
					适用范围 :
					<text class="listOrder221" v-if='listitem.couponType=="EXCHANGE"'> 兑换券</text>
					<text class="listOrder221" v-if='listitem.couponType=="DISCOUNT"'> 折扣券</text>
					<text class="listOrder221" v-if='listitem.couponType=="VOUCHERS"'> 代金券</text>
				</view>
                  
				<view class="listdianhua" @click="shareFriend">
					<button class="share-btn" open-type="share">
						<image :src="dianhua" class="listdianhuaimagewidth" mode=""></image>
						</button>
					 
				</view>
			</view>
		</view>


	</div>
</template>
<script>
	import uniPopup from '../../components/uni-popup/uni-popup.vue'
	export default {
		name: 'comFuWuList',
		props: ['listitem'],
		components: {
			uniPopup
		},
		data() {
			return {
				cancelcount: 0,
				cancelData: [{
						name: '价格有点贵'
					},
					{
						name: '时间选择有问题'
					},
					{
						name: '我想换一个设计师'
					},
					{
						name: '占时不需要了'
					},
					{
						name: '其它'
					},
				],
 
				heiyou: require("../../static/img/xin/heiyou.png"),
				erweima: require("../../static/img/xin/erweima.png"),
				dianhua: require("../../static/img/xin/dianhua.png"),
				yes1: require("../../static/img/all/yes1.png"),
				yd02: require("../../static/img/all/yd02.png"),

				urls: 'https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=2569200539,4021024536&fm=74&app=80&f=JPEG?w=200&h=200',

			}
		},
		created: function() {},
		methods: {

			tojumpdtail(item) {
				let url_immeLation = '../../pagesRuZhu/youhuijuandetail/youhuijuandetail'
				let param = item
				console.log("itemitemitemitem", item)
				this.$navTo.togo(url_immeLation, param)
			},
			onShareAppMessage(res) {
				return {
					title: ' ',
					path: '/pages/main/main'
				}
			},

    

			shareFriend() {
				let _this = this;
				//分享到微信朋友
				uni.share({
					provider: "weixin",
					type: 5,
					title: "你笑起来真好看",
					imageUrl: _this.urls,
					miniProgram: {
						id: 'gh_abcdefg',
						path: 'pages/main/main', 
						type: 0
					},
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					}
				});
			}
 


		}
	}
</script>
<style scoped>
	.popupdaiqueren {
		width: 100%;
		height: 300px;
		background-color: #fff;
		padding-bottom: 150px;
	}

	.popupmore {
		text-align: center;
		padding: 50px 0 20px 0;
		font-size: 30px;
		font-weight: 700;
		border-bottom: 1upx solid #f6f6f6;
		margin-bottom: 40px;
	}

	.popupmorephone2 {
		color: #9B9B9B;
		border: 1upx solid #9B9B9B;
		width: 70%;
		margin: 0 auto;
		padding: 20px 0;
		margin-top: 30px;
		font-size: 28px;
		border-radius: 30px;
		text-align: center;
	}

	.popupmorephone1 {
		color: #414141;
		border: 1upx solid #414141;
		width: 70%;
		margin: 0 auto;
		padding: 20px 0;
		font-size: 28px;
		border-radius: 30px;
		text-align: center;
	}

	.cancelorderbox0 {
		padding-bottom: 100px;
		background-color: #fff;
	}

	.cancelorderbox1 {
		text-align: center;
		padding: 20px 0;
		font-size: 29px;
		font-weight: bold;
		color: #333;
	}

	.erweimas0 {
		width: 50px;
		height: 50px;
	}

	.erweimas1 {
		width: 40rpx;
		height: 40rpx;
	}

	.cancelorderbox2 {
		padding: 20px;
		font-size: 24px;
		color: #414141;
		text-align: left;

		background-color: #E7E7E7;
	}

	.cancelorderbox3 {
		padding: 20px;
	}

	.cancelorderbox4 {
		color: #000000;
		font-size: 31rpx;
		font-weight: bold;
		margin-bottom: 18px;

	}

	.cancelorderbox5 {
		padding: 20px 0;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color: #414141;
		font-size: 24px;
	}

	.cancelorderbox6 {
		width: 40rpx;
		height: 40rpx;
	}

	.cancelorderbox7 {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.cancelorderbox8,
	.cancelorderbox9 {
		font-size: 30px;

	}

	.cancelorderbox9 {
		padding: 14rpx 20rpx;
		color: #A5A0A0;
		border-right: 1upx solid #A5A0A0;
		border-top: 1upx solid #A5A0A0;
		border-bottom: 1upx solid #A5A0A0;
		background-color: #fff;
		border-top-right-radius: 6px;
		border-bottom-right-radius: 6px;
	}

	.cancelorderbox8 {
		padding: 14rpx 20rpx;
		background-color: #00C6C2;
		color: #fff;
		border: 1upx solid #00C6C2;
		border-top-left-radius: 6px;
		border-bottom-left-radius: 6px;
	}

	.privatecollarAll {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: calc(100vh);
		border-radius: 8px;
	}

	.privatecollar0 {
		background-color: #fff;
		width: 90%;
		margin: 0 auto;
		padding: 60px 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
	}

	.privatecollar1 {
		font-size: 32px;
		font-weight: bold;
		color: #000000;
		margin-bottom: 30px;
	}

	.privatecollar2 {
		font-size: 32px;
		color: #282828;
		margin-bottom: 60px;
	}

	.privatecollar3 {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 100%;

	}

	.privatecollar4 {

		color: #00C6C2;
		border: 1px solid #00C6C2;
		font-size: 28px;
		padding: 8px 30px;
		border-radius: 4px;

	}

	.privatecollar5 {
		color: #fff;
		background-color: #00C6C2;
		font-size: 28px;
		padding: 8px 30px;
		border-radius: 4px;

	}








	.listOrderdayng {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.listOrderpadding {
		padding: 10px 0;
	}

	.listdaojishi {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-top: 1px dashed #f0f0f0;
		padding-top: 2px;
	}

	.listOrder1Row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.listdianhua {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.listdianhuaimagewidth {
		width: 36rpx;
		height: 36rpx;
		border-radius: 18px;
	}

	.listdianhuaText {
		color: #8E8E8E;
		font-size: 24px;
		margin-right: 6px;

	}

	.listOrderdian,
	.listOrderdian2 {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.listOrderdianhui {
		margin-right: 10px;
	}

	.listOrderdian1 {
		/* font-size: 60px; */
		width: 8px;
		height: 8px;
		border-radius: 4px;
		background-color: #00C6C2;
		margin-right: 10px;
	}

	.listOrderdianlist {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.listOrderdianrights {
		color: #000000;
		font-size: 30px;
		font-weight: bold;
	}

	.listOrderdianhui {
		width: 8px;
		height: 8px;
		border-radius: 4px;
		background-color: #282828;
	}

	.listOrderdian3 {
		color: #414141;
		font-size: 24px;
		font-weight: bold;
	}

	.listOrderdian4 {
		color: #777;
		font-size: 20px;
	}

	.imgtabewma {

		width: 50rpx;
		height: 50rpx;
	}

	.listOrdershenyuzhifu {
		color: #666;
		font-size: 22px;

		padding: 10px 0;

	}


	.listOrder90 {}

	.listOrder {
		width: 90%;
		margin: 0 auto;
		border-radius: 10px;
		margin-bottom: 20rpx;

		padding: 20rpx;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
	}

	.listOrder1 {
		font-size: 30px;
		font-weight: bold;
		color: #282828;
		padding-top: 10px;

	}

	.listOrder2 {
		padding: 9px 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.listOrder22 {
		flex: 1;
		margin-left: 20px;
	}

	.listOrder221 {
		font-weight: 400;
		font-size: 24rpx;
		color: #666666;
	}

	.listOrder222 {
		font-weight: 400;
		font-size: 24rpx;
		color: #666666;
	}

	.listOrder223 {
		font-weight: 400;
		font-size: 26px;
		color: #666666;
	}

	.listOrder3 {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	.listOrder3 view {
		border: 1px solid #414141;
		color: #414141;
		font-size: 26px;
		border-radius: 10px;
		margin-left: 20px;
		padding: 9rpx 30rpx;


	}

	.listOrder21 {
		width: 70rpx;
		height: 70rpx;


		display: flex;
		flex-direction: row;
		align-items: center;

	}

	.listOrderzhe1 {
		font-size: 30rpx;
		color: #F32330;
		position: relative;
		top: 10px;
	}

	.listOrderzhe {
		font-size: 68rpx;
		color: #F32330;
		font-weight: bold;
	}

	.listOrder23 {
		width: 100%;
		height: 100%;
		background-size: cover;
	}
	.share-btn{
		border: none;
		background-color: #fff;
	}
	button::after{
		border: none;
	} 
</style>
