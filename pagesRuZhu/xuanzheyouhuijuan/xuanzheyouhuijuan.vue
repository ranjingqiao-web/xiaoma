<template>
	<view class="youhuijuandetail">
		<view class="mainswi">
			<view class="daohan">
				<view class="daohan0 daohan01">
                   <image :src="goo_back" class=" daohanleft" @click="gooback"></image>
					<!-- <image :src="huodong" class=" daohanleft"></image> -->
				</view>

				<view class="daohan0 daohan0huodogn">选择优惠券 </view>
				<view class="daohan0"> </view>
			</view>
          <view>   
			 <view class="tabyouhuijuan">
			 	<view class="tabyouhuijuan0" v-for="(item,index) in youhuiData" :key='index' @click="tonav(index)">
			 		<text :class="youcount ==index? 'istabyouhuijuan1  ' :' tabyouhuijuan1'" >{{item.title}}(0)</text>
			 	</view>
			  </view>  
			 <view class="" v-if="youcount==0">
				 <view class="nomoredata" >
				 	<comnodata cont='暂无数据'></comnodata>
				 </view>
			 	 
			 </view>
			 <view class="" v-if="youcount==1">
			 	<view class="nomoredata" >
			 		<comnodata cont='暂无数据'></comnodata>
			 	</view>
			 </view>
		</view>
		</view>
		</view> 
</template>

<script>
	// import comtopbanner from "../../common/comusershangjia/comtopbanner";
	import comnodata from "../../common/comnodata";
	export default {
		name: "youhuijuandetail",
		components: {comnodata},
		props: [],
		data() {
			return {
				youcount:0,
				youhuiData:[
					{title:'可用优惠'},
					{title:'不可用优惠'}
				],
				goo_back: require("../../static/img/xin/goo_back.png"),
				huodong: require("../../static/img/xin/huodong.png"),
				erweima: require("../../static/img/xin/erweima.png"),
				infos: require("../../static/img/xin/infos.png"),
			}
		},
		created() {

		},
		methods: {
			tonav(index){
				this.youcount=index
			},
			gooback() {
				uni.navigateBack()
			},
			callTel(v) {
				uni.makePhoneCall({
					phoneNumber: v
				});
			},
			usermaidang(){
				let url = '../usermaidang/usermaidang'
				let param = {}
				this.$navTo.togo(url, param)
			},
			onShareAppMessage(res) {
				return {
					title: ' ',
					path: '/pagesRuZhu/youhuijuandetail/youhuijuandetail'
				}
			},


		},
		mounted() {}
	};
</script>

<style scoped>
	@import "xuanzheyouhuijuan.css";
</style>
