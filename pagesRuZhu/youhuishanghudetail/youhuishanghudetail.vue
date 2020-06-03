<template>
	<view class="youhuijuanxiaodetail">
		<zuobottom></zuobottom>
		<view class="youhutop">
			<image :src="bannn" class="youhutopimg"></image>
		</view>
		<view class="youhutopcontent">
			<view class="youhutopcontent0">
				<view class="youhutopcontent1">
					小马拉客火锅店（活动模版）
				</view>

				<view class="youhutopcontent2">
					<button class="share-btn  " open-type="share">
						<image :src="sharexi" class="sharexisharexi"></image>

						分享
					</button>
				</view>


			</view>

			<view class="youhutopcontentop">
				1302.31
			</view>

			<view class="youhutopcontentopb">
				<view class="youhutopcontentopb1">四川省成都市武侯区大源北一街25好远7栋1单元 </view>
				<view class="youhutopcontentopb2">
					<img :src='wx1' class='youhutopcontentopb3' @click='showdianhua' />
					<img :src='wx2' class='youhutopcontentopb3' @click='callTel("18328536666")' />
				</view>
			</view>
		</view>

		<view class="dianpushangpin">
			<view class="dianpushangpin0">
				<view class="dianpushangpin1">
					联盟会员专属券
				</view>
				 
			</view>
			<view class="dianpushshanghu"   >
			<!-- <view class="dianpushshanghu"  > -->
				
				<view class="meijiayici">
					<text>美甲一次</text>  
					<text>美甲一次</text>  
					<text>美甲一次</text>  
					<text>美甲一次</text>  
					<text>美甲一次</text>  
					<text>美甲一次</text>  
					<text>美甲一次</text>  
				</view>
				
				
				<view class="dianpushshanghu0">
					 <view class="dianpushshanghu00">
					 	<view class="dianpushshanghu1">税率为色 </view>
					 	<view class="dianpushshanghu2"> 其味无穷</view>
					 </view>
					 <view class="dianpushshanghu3">
					 	免费领取联盟会员
					 </view>
				</view>
				
				<img :src='shanghu' class='shanghushanghu' />

			</view>
		 
		</view>
		<view class="dianpushangpin">
			<view class="dianpushangpin0">
				<view class="dianpushangpin1">
					我的优惠券
				</view>

			</view>
			<view class="dianpushangpin333">
				可添加店主微信随时抢内部优惠～

			</view>


		</view>

		<view class="dianpushangpin marginbottom">
			<view class="dianpushangpin0">
				<view class="dianpushangpin1">
					如何用券
				</view>

			</view>
			<view class="dianpushangpin529">
				<view class="coocss1">
					<img :src='coo1' class='coocss' />
					<view class=""> 到店消费 </view>
				</view>
				<img :src='coo' class='coocsst' />
				<view class="coocss1">
					<img :src='coo2' class='coocss' />
					<view class=""> 用券买单 </view>
				</view>
				<img :src='coo' class='coocsst' />
				<view class="coocss1">
					<img :src='coo3' class='coocss' />
					<view class=""> 享券后价 </view>
				</view>

			</view>


		 
		<view class="yongyouhuijuanmaidang" @click="usermaidang">
			用优惠券买单
		</view>

		<uni-popup ref="refdadianhau" type="bottom">
			<view class="refdadianhau0">
				<view class="refdadianhau01">
					<img :src="infos" class="refdadianhau02" />
				</view>
				<view class="refdadianhau03">
					联系店主
				</view>
				<view class="refdadianhau04">
					店主手机：18328930038
					<text class="refdadianhauright" @click='callTel("18328536666")'>拨打</text>
				</view>

				<view class="refdadianhau04">
					微信号：WX88888
					<text class="refdadianhauright" @click="fuzhicontent('WX888888')">复制</text>
				</view>
			</view>
		</uni-popup>
	</view>
	</view>
</template>

<script>
	import zuobottom from "../../common/commain/zuobottom";
	import uniPopup from '../../components/uni-popup/uni-popup.vue'
	export default {
		name: "youhuishanghudetail",
		components: {
			zuobottom,
			uniPopup
		},
		props: [],
		data() {
			return {
				goo_back: require("../../static/img/xin/goo_back.png"),
				bannn: require("../../static/img/xin/bannn.png"),
				sharexi: require("../../static/img/xin/sharexi.png"),
				wx1: require("../../static/img/xin/wx1.png"),
				wx2: require("../../static/img/xin/wx2.png"),
				infos: require("../../static/img/xin/infos.png"),
				nextto: require("../../static/img/xin/nextto.png"),
				erweima: require("../../static/img/xin/erweima.png"),
				coo1: require("../../static/img/xin/coo1.png"),
				coo2: require("../../static/img/xin/coo2.png"),
				coo3: require("../../static/img/xin/coo3.png"),
				coo: require("../../static/img/xin/coo.png"),
				shanghu: require("../../static/img/xin/shanghu.png"),
				imageURL:require("../../static/img/xin/beijing.png"),
			}
		},
		created() {

		},
		methods: {
			usermaidang(){
				let url = '../usermaidang/usermaidang'
				let param = {}
				this.$navTo.togo(url, param)
			},
			fuzhicontent(v) {
				let _this = this
				uni.setClipboardData({
					data: v,
					success: function() {
						_this.$refs.refdadianhau.close()
						uni.showToast({
							title: '复制成功'
						})
					}
				});
			},
			showdianhua() {
				// this.$refs.refdadianhau.close()
				this.$refs.refdadianhau.open()
			},


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



		},
		mounted() {}
	};
</script>

<style scoped>
	@import "youhuishanghudetail.css";
</style>
