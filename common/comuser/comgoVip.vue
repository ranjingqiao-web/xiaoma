<template>
	<div class='comgoVip'>
		<img :src="bannervip1">
		<view class="comgoVipPosition">
			<view class="comgoVipbottomtop">
				<view class="">
					普通/VIP会员
				</view>
						 
			</view>
		 <view class="comgoVipcenter">
		 	7897897098098980-88--788
		 </view>	
		 <view class="comgoVipbottom">
		 	<view class="">
		 		ZHONGMEI
		 	</view>
			<view class="">
				会员到期:2012892
			</view>
		 </view>
		</view>
	</div>

</template>
<script>
	import bannervip1 from  '../../static/img/all/mine/bannervip1.png'
	export default {
		name: 'comgoVip',
		props: [],
		data() {
			return {
				bannervip1:bannervip1 

			}
		},
		watch: {},
		created: function() {},
		methods: {

		}
	} 
</script>
<style scoped>
	.comgoVip {
		width: 100%;
		height: 262rpx;
		position: relative;

	}

	.comgoVip img {
		width: 100%;
		height: 100%;
	}
	.comgoVipPosition{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		 
		z-index: 9;
	}
	.comgoVipcenter{
		position: absolute;
		left: 10%;
		top: 46%;
		color: #fff;
		font-size: 30px;
		font-weight: bold;
		z-index: 10;
	}
	.comgoVipbottomtop{
		width: 94%;
		margin: 0 auto;
		position: absolute;
		top: 22%; 
		left: 0;
		right: 0;
		color: #fff;
		font-size: 30px; 
		z-index: 10;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.comgoVipbottom{
		width: 94%;
		margin: 0 auto;
		position: absolute;
		bottom: 5%; 
		left: 0;
		right: 0;
		color: #fff;
		font-size: 30px; 
		z-index: 10;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		 
	}
</style>
