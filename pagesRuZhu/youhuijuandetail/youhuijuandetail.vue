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
				<view class="youhuijuandetail01"> {{detailData.amount}}</view>
				<view class="youhuijuandetail02"> 折优惠券</view>
			</view>
			<view class="youhuijuandetail0">
				<image class="youhuijuandetail0img" :src="'data:image/jpeg;base64,'+detailData.qrCodeData"
				 mode=""></image>
			</view>

			<view class="youhuijuandetail0">
				<view class="youhuijuandetail0chus">
					买单前出示即可享受优惠
				</view>
			</view>

			<view class="youhuijuandetailcol">
				<view class="youhuijulist"> 卷来源:{{detailData.source}} </view>
				<view class="youhuijulist"> 消费门槛:{{detailData.blnThreshold ? '有':'无'}} </view>
				<view class="youhuijulist"> 获得时间: {{detailData.startDate}} </view>
				<view class="youhuijulist"> 适用范围:{{detailData.blnThreshold ? '部分通用':'全店通用'}}</view>
			</view>

			<view class="youhuilists">
				<image v-if="detailData.imageUrl !=null "   :src="detailData.imageUrl" class="youhuilists0"></image>
				<image v-if="detailData.imageUrl ==null "   :src="touxiangleft" class="youhuilists0"></image>
				<view class="youhuilists1">
					<!-- <view class="youhuilists2">  </view> -->
					<view class="youhuilists3">{{detailData.storeName}} </view>
				</view>
			</view>

			<view class="fixbooo">
				<button class="share-btn fixbooo1" open-type="share">
					<view class="fixbooo1">
						转发好友
					</view>
				</button>
				<view class="fixbooo2" @click="usermaidang(detailData)">
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
				detailData: {amount:''},
				goo_back: require("../../static/img/xin/goo_back.png"),
				huodong: require("../../static/img/xin/huodong.png"),
				erweima: require("../../static/img/xin/erweima.png"),
				infos: require("../../static/img/xin/infos.png"),
				touxiangleft:require("../../static/img/xin/touxiangleft.png"),
				paramId: null
			}
		},
		created() {

		},
		onLoad: function(option) {
			this.paramId = option

			this.getyouhuijuandetail()
		},
		methods: {
			/**
			 * get youhuijuan detail
			 * */
			getyouhuijuandetail() {
				let _this = this;


				let logoparams = {
					id: _this.paramId.id

				}
				_this.RESQUESTHTTP.url_Request_get(
					'/applet/user/userCoupon/get',
					logoparams,
					(res) => {
						console.log('paid===', res)
						if (res.data.code == 200) {
							_this.detailData = res.data.data
						}

					},
					(err) => {

					},
				)
			},
			gooback() {
				uni.navigateBack()
			},
			callTel(v) {
				uni.makePhoneCall({
					phoneNumber: v
				});
			},
			usermaidang( ) {
				let paramId=this.paramId
				let url = '../usermaidang/usermaidang'
				let param = paramId
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
	@import "youhuijuandetail.css";
</style>
