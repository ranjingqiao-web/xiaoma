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
					店铺商品
				</view>
				<view class="dianpushangpin2">
					更多

					<img :src='nextto' class='dianpushangpin2img' />
				</view>
			</view>
			<view class="dianpushangpin3">
				<img :src='erweima' class='dianpushangpin3img' />

			</view>
			<view class="dianpushangpin40">


				<view class="dianpushangpin41">
					钥匙
				</view>
				<view class="dianpushangpin42">
					￥7
				</view>
				<view class="dianpushangpin43">
					已售0件
				</view>
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
		name: "youhuijuanxiaodetail",
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


			// onShareAppMessage: function(res) {
			//   var that = this;
			//   //console.log('res=====',res);
			//   if (res.from === 'button') {
			// 	//console.log('来自页面内转发按钮');
			//   } else if (res.from === 'menu'){
			// 	//console.log('右上角菜单转发按钮');
			//   }
			//   // 返回数据    
			//   return { 
			// 	path: '/pagesRuZhu/youhuijuanxiaodetail/youhuijuanxiaodetail', 
			// 	success: function(res) {
			// 	  // 转发成功，可以把当前页面的链接发送给后端，用于记录当前页面被转发了多少次或其他业务
				   
			// 	},
			// 	fail: function(res) {
			// 	  // 转发失败
			// 	}
			//   }
			// }, 

		},
		mounted() {}
	};
</script>

<style scoped>
	@import "youhuijuanxiaodetail.css";
</style>
