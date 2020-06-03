<template>
	<view class="youhuijuandetail">
		<view class="mainswi">
			<view class="daohan">
				<view class="daohan0 daohan01">

					<image :src="goo_back" class=" daohanleft" @click="gooback"></image>
					<!-- <image :src="huodong" class=" daohanleft"></image> -->
				</view>

				<view class="daohan0 daohan0huodogn">向店主出示优惠券 </view>
				<view class="daohan0"> </view>
			</view>

			<view class="youhuijuandetail0">
				<view class="youhuijuandetail01"> 9</view>
				<view class="youhuijuandetail02"> 折优惠券</view>
			</view>
			<view class="youhuijuandetail0">
				<image class="youhuijuandetail0img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1458229275,3774320714&fm=26&gp=0.jpg"
				 mode=""></image>
			</view>

			<view class="youhuijuandetail0">
				<view class="youhuijuandetail0chus">
					买单前出示即可享受优惠
				</view>
			</view>

			<view class="youhuijuandetailcol">
				<view class="youhuijulist"> 卷来源:多忘事我哦 </view>
				<view class="youhuijulist"> 消费门槛:多忘事我哦 </view>
				<view class="youhuijulist"> 获得时间:多忘事我哦 </view>
				<view class="youhuijulist"> 适用范围:多忘事我哦 </view>
			</view>

			<view class="youhuilists">
				<image :src="erweima" class="youhuilists0"></image>
				<view class="youhuilists1">
					<view class="youhuilists2">多忘事我哦多忘事我哦 </view>
					<view class="youhuilists3">多忘事我哦多忘事我哦 </view>
				</view>
			</view>

			<view class="fixbooo">
				<button class="share-btn fixbooo1" open-type="share">
					<view class="fixbooo1">
						转发好友
					</view>
				</button>
				<view class="fixbooo2" @click="usermaidang">
					输入金额买单
				</view>
			</view>


			<view class="infoscall" @click="callTel('18328536664')">
				<image :src="infos" class="infos"></image>
				<view class="">
					联系店主
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	// import comtopbanner from "../../common/comusershangjia/comtopbanner";

	export default {
		name: "youhuijuandetail",
		components: {},
		props: [],
		data() {
			return {
				goo_back: require("../../static/img/xin/goo_back.png"),
				huodong: require("../../static/img/xin/huodong.png"),
				erweima: require("../../static/img/xin/erweima.png"),
				infos: require("../../static/img/xin/infos.png"),
			}
		},
		created() {

		},
		methods: {
			gooback() {
				uni.navigateBack()
			},
			callTel(v) {
				uni.makePhoneCall({
					phoneNumber: v
				});
			},
			usermaidang() {
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
	@import "huodongdetail.css";
</style>
