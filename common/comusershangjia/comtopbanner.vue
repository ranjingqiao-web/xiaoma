<template>
	<div class="comusershangjia">
		<view class="comusershangjia0">
			{{title}}
		</view> 
		<view class="comusershangjia1">
			{{content}}
		</view> 
 
	</div>
</template>

<script>
	// import WucTab from '@/components/swiper-tab-head/wuc-tab/wuc-tab.vue';
	// import comtopimg from "../../common/comuserSheJishiDetail/comTopImg";

	export default {
		name: "comusershangjia",
		props:['title','content'],
		components: {
			 
		}, 
		data() {
			return { 
				souchang: require("../../static/img/all/souchang.png")
			};
		},
		created() {

		},
		methods: {
			 
			  
		 

		},
		mounted() {}
	};
</script>

<style scoped>
	 .comusershangjia{
		  padding: 80rpx 0;
		 width: 100%;
		 display: flex;
		 flex-direction: column;
		 align-items: flex-start;
		 color: #fff;
		 background-color: #00C6C2;
		 padding-left: 20px;
	 }
	 .comusershangjia0{
		 font-size:42px;
		  font-family:PingFang;
		 font-weight: bold;
	 }
	 .comusershangjia1{
		 margin-top: 26px;
		 font-size:26px;
		 font-family:PingFang;
		 font-weight:500;
	 }
</style>
