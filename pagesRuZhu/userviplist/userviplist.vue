<template>
	<view class="youhuijuanxiaodetail">
		<view class="youhuijzuobottom">
			<zuobottom></zuobottom>
			<view class="youhuijzuobottom2">我的会员卡
			</view>
		</view>
		<view class="viplist0">


			<view class="viplist">
				<image :src="viplists" class="viplistimg"></image>
				<view class="viplist1"> 小马拉客直播间 </view>
				<view class="viplist2"> VIP1 </view>
				<view class="viplist3"> 每月权益： 9折券 x 5张 </view>
				<view class="viplist6">
					<view class="viplist4"> 有效期至 2021.04.25</view>
					<view class="viplist5">
						延长有效期
					</view>
				</view>
            </view>
			<view class="viplist">
				<image :src="viplists" class="viplistimg"></image>
				<view class="viplist1"> 小马拉客直播间 </view>
				<view class="viplist2"> VIP1 </view>
				<view class="viplist3"> 每月权益： 9折券 x 5张 </view>
				<view class="viplist6">
					<view class="viplist4"> 有效期至 2021.04.25</view>
					<view class="viplist5">
						延长有效期
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import zuobottom from "../../common/commain/zuobottom";
	import uniPopup from '../../components/uni-popup/uni-popup.vue'
	export default {
		name: "userviplist",
		components: {
			zuobottom,
			uniPopup
		},
		props: [],
		data() {
			return {
				status: 'UN_USE',
				pageSize: 10,
				pageNo: 1,
				direction: 'ASC',
				keyword: '',
				wenDaData:[],
				viplists: require("../../static/img/xin/vip.png"),
			}
		},
		created() {

		},

		onShow() {
			this.isScloll = true
			this.pageNo = 1
			this.wenDaData = []
			this.getyouhuijuan()
		},
		methods: {
			getyouhuijuan() {
				let _this = this;

				uni.getStorage({
					key: 'token',

					success: function(res) {
						let logoparams = {
							"status": _this.status,
							direction: 'ASC',
							keyword: res.data.phone,
							pageSize: _this.pageSize,
							pageNo: _this.pageNo,
						}
						
						_this.RESQUESTHTTP.url_Request_post(
							'/applet/member/page',
							logoparams,
							(res) => {

								if (res.data.code == 200) {


									_this.wenDaData = _this.wenDaData.concat(res.data.data);
									_this.juanlength = _this.wenDaData.length
									if (res.data.data.length < 10) {
										_this.isScloll = false
										_this.isdaodi = true

									}

								}

							},
							(err) => {

							},
						)



					},
					fail(res) {


					}
				});


			},
			usermaidang() {
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
			/**
			 * 滚动条触底事件  bottomScrolltolower
			 * **/
			bottomScrolltolower() {
				var _this = this;

				if (_this.isScloll) {
					_this.getyouhuijuan()
					_this.pageNo++
				}


				console.log('0000')
			}


		},
		mounted() {}
	};
</script>

<style scoped>
	@import "userviplist.css";
</style>
