<template>
	<view class="daohan">
		<view class="daohan0 daohan01">
			<image :src="huodong" class=" daohanleft" @click="showHide"></image>
			<view v-if="isshowHide" class="daohanposition">
				<image :src="xiaoup" class=" daohanleftxiaoup"></image>
				 <view class="daohanLists"
				  v-for="(item,index) in listData"
				  :key='index'
				  @click="jumptotabbar(index)"
				  >
				 	<image :src="item.wt0" class="daohanLists0"></image>
					<view class="daohanLists1">{{item.title}}</view>
				 </view>
			</view>
		</view>
	
		<view class="daohan0 daohan0huodogn"> {{title}}</view>
		<view class="daohan0">  </view>
	</view>
</template>

<script>
	//commain/zuoshangjiao
	export default {
		name:'zuoshangjiao',
		props:['title'],
			data() {
				return {
					isshowHide:false,
					huodong: require("../../static/img/xin/huodong.png"),
					xiaoup: require("../../static/img/xin/xiaoup.png"),
	                 listData:[
						 {title:'活动参与',wt0:require("../../static/img/xin/wt0.png")},
						 {title:'会员卡',wt0:require("../../static/img/xin/wt1.png")},
						 {title:'订单记录',wt0:require("../../static/img/xin/wt2.png")},
						 {title:'浏览的店铺',wt0:require("../../static/img/xin/wt3.png")},
					 ]
				};
			},
	
			components: {
	        
			},
	
			methods: {
				jumptotabbar(v){
					this.isshowHide= !this.isshowHide   
					let url=''
					if(v==0){
						 
						url= '/pages/main/main'
					}  
					// if(v==1){
					// 	url= '/pages/user/user'
					// }  if(v==2){
					// 	url= '/pages/userInfo/userInfo'
						 
					// } 
					  
					
					uni.switchTab({
					    url: url
					});
					
				},
				
				
	           showHide(){
				this.isshowHide= !this.isshowHide   
			   }
			},
	
			created() {
	
				// console.log("pppp====>", this.$store.state.datatext)
			}
		};
</script>

<style scoped>
	
	.mainswi {
		width: 100%;
	}
	
	.daohan {
		width: 100%;
		padding: 80rpx 0;
		padding-bottom: 30rpx;
		background-color: #fff;
		display: flex;
		flex-direction: row;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
	}
	
	.daohan0 {
		flex: 1;
		text-align: center;
		position: relative;
	}
	
	.daohanposition {
		position: absolute;
		top: 81rpx;
		left: 20rpx;
		z-index: 999;
		width: 280rpx;
		padding-bottom: 20rpx;
	
		background-color: #333333;
		border-radius: 10px;
	}
	
	.daohanleftxiaoup {
		position: absolute;
		top: -35rpx;
		left: -5rpx;
		z-index: 999;
		width: 83rpx;
		height: 59rpx;
	
	}
	
	.daohanLists {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 20px;
		margin-left: 20rpx;
		padding: 10rpx 0;
	
		border-bottom: 1px solid #555555;
	
	}
	
	.daohanLists0 {
		width: 33rpx;
		height: 33rpx;
		margin-right: 30rpx;
	}
	
	.daohanLists1 {
		font-size: 32px;
		color: #FFFFFF;
		font-weight: 400;
	}
	
	.daohan01 {
		text-align: left;
		padding-left: 30px;
	}
	
	.daohanleft {
		width: 45rpx;
		height: 45rpx;
	}
</style>
