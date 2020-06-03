<template>
	
	<view class="buttonchackedcss">
		
		
       <view v-if='duoshao' class="bottomList" v-for="(item,index) in buttonData" :key="index" :item='item' :class="isbuttonid==index?'isActivebottomList':''"
		 @click="changeAddButton(item,index)">
			{{item.title}}
		</view>  
		 
		 
    </view>
</template>

<script>
	export default {
		props: [],
		data() {
			return {
				 
				isbuttonid: 0,
				buttonData: [{
						title: '服务热情',
						id: 0
					},
					{
						title: '服务热情',
						id: 1
					},
					{
						title: '服务热情',
						id: 2
					},
					{
						title: '服务热情',
						id: 3
					},
					{
						title: '服务热情',
						id: 4
					},
					{
						title: '服务热情',
						id: 5
					},
					{
						title: '服务热情',
						id: 6
					},
					{
						title: '服务热情',
						id: 7
					},
					{
						title: '服务热情',
						id: 8
					},

				], 
				
				  
			}
		},

		methods: {
			changeAddButton(item, index) {
				this.isbuttonid = index
				this.$emit('changeAddButtons', item)
			},
		   
			 
		}

	}
</script>

<style scoped>
	/**
	 * 父组件加上此代码就可以了
	 * 
	 **/

	/* .buttonchackedcss{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		font-size: 24rpx;
	
	} */




	.bottomList {
		border: 1upx solid #D2D2D2;
		color: #D2D2D2;
		padding: 10rpx 20rpx;
		border-radius: 7rpx;
		margin-top: 20rpx;
		margin-right: 20rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.isActivebottomList {
		border: 1upx solid #00C6C2;
		color: #00C6C2;
	}
	
	 
</style>
