<template>
	<view class="container">
		
		<!-- 左边内容 -->
		<scroll-view class="scroller" :scroll-into-view="toView" scroll-y="true" scroll-with-animation="true">
			<view :id="item" class="left" v-for="item in list">{{item.toUpperCase()}}</view>
		</scroll-view>
		
		<!-- 右边索引 -->
		<view>
			<view :data-id="item" v-for="item in list" @tap="bindToView">{{item}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
				toView:''
			}
		},
		methods:{
			bindToView(event){
				var id = event.currentTarget.dataset.id;
				console.log(id)
				this.toView = id;
			}
		}
	}
</script>

<style lang="scss">
	.container{
		width: 100%;
		display: flex;
		scroll-view{
			height: 100vh;
			.left{
				font-size: 50rpx;
				line-height: 150rpx;
			}
		}
		> view{
			position: fixed;
			right: 10rpx;
		}
		
	}
</style> 