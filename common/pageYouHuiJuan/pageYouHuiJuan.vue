<template>
	<div  >
		<view class="listOrder">
		 
			 
		
		 
			<view class="listOrder2">
				<view class="listOrder2">
					<view class="listOrder21">
						<view class="listOrder2123">30元</view>
						<view class="listOrder2124"> 满60元使用</view>
						<!-- <img src="https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=2569200539,4021024536&fm=74&app=80&f=JPEG?w=200&h=200"
						 class="listOrder23"> -->
					</view>
					<view class="listOrder22">
						<view class="listOrder221"> 再次预定再次预定</view>
						<view class="listOrder222">再次预定再次预定</view>
						<view class="listOrder222">再次预定再次预定</view>
					</view>
				</view>
				<view class="listOrder3">
					<view class="listOrder9">去使用</view> 
				</view>
			</view>
		
		<view class="listOrderdianlist">
			<view class="listOrderdian">
				
				 
				<view class="listOrderdian2">
					<view class="listOrderdian3">服务服务服务服务服务服务服务服务 </view> 
				
				</view>
			</view>
		 
		</view>
		</view>

	</div>
</template>
<script>
	export default {
		name: 'comFuWuList',
		props: [''],
		data() {
			return {
		 
				you1: require("../../static/img/all/you1.png"),
                dianhua: require("../../static/img/all/mine/dianhua.png"),
				urls: 'https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=2569200539,4021024536&fm=74&app=80&f=JPEG?w=200&h=200',
				
			}
		},
		watch: {},
		created: function() {},
		methods: {
			callTel(v) {
				uni.makePhoneCall({
					phoneNumber:v  
					});
				}


		}
	}
</script>
<style scoped>
	.listOrderdayng {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.listOrderpadding {
		padding: 10px 0;
	}

 

	.listOrder1Row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
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

	 

 
	.listOrder {
		padding: 20rpx 20rpx;
		border-bottom: 10upx solid #EFEFEF;
		/* box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1); */
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
		font-size: 28rpx;
		font-weight: 600;
		color: #333;
	}

	.listOrder222 {
		font-size: 24rpx;
		color: #606060;
	}

	.listOrder223 {
		font-size: 26px;
		color: #606060;
	}

	.listOrder3 {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	.listOrder3 view {  
		font-size: 26px;
		border-radius: 25rpx;
		margin-left: 20px;
		padding: 9rpx 30rpx;


	}

	.listOrder21 {
		width: 200px;
		 
		text-align: center;
		border-radius: 10px;
          background-color: #00C6C2;
		  color: #fff;
	}

	.listOrder23 {
		width: 100%;
		height: 100%;
		background-size: cover;
	}
	.listOrder9{
		background-color: #00C6C2;
		color: #fff;
	}
	.listOrder2123{font-size: 32px;}
	.listOrder2124{font-size: 29px;margin-top: 10px;} 
</style>
