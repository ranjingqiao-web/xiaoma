<template>
	<view class="margintop10000" v-if="isdaodi">
		--到底了--
	</view>
</template>

<script>
 
export default {
	props:['isdaodi']
}
</script>

<style scoped>
	.margintop10000{
		color: #818181;
		text-align: center;
		padding: 30rpx 0;
		font-size: 26rpx;
	
	}
</style>
