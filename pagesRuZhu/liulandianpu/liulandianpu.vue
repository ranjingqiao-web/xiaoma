<template>
	<view class="youhuijuanxiaodetail">
		<view class="youhuijzuobottom">
			<zuobottom></zuobottom>
			<view class="youhuijzuobottom2">浏览的店铺
			</view>
		</view>
		<view class="lldianpu">
			
		 
		<view class="lldianpu0">
			<view class="lldianpu1">
				<image :src="touxiang" class="lldianpu2"></image>
				<view class="lldianpu3">
					延长有效期
				</view>
			</view>
			 
			<view class="lldianpu4">
				<image :src="dinwei" class="dinwei9"></image>
				 
				小马拉客直播间 </view>
			 
			 
			 
			 
		</view>
         </view>
	</view>
</template>

<script>
	import zuobottom from "../../common/commain/zuobottom";
	import uniPopup from '../../components/uni-popup/uni-popup.vue'
	export default {
		name: "liulandianpu",
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
				direction:'ASC',
				keyword:'',
				 wenDaData:[],
				dinwei: require("../../static/img/xin/dinwei.png"),
				touxiang: require("../../static/img/xin/touxiang.png"),
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
						 
						pageSize: _this.pageSize,
						pageNo: _this.pageNo,
					}
					 _this.RESQUESTHTTP.url_Request_post(
						'/applet/dynamic/page',
						logoparams,
						(res) => {
								
							if (res.data.code == 200) {
								
								
								_this.wenDaData = _this.wenDaData.concat(res.data.data);
								// _this.juanlength = _this.wenDaData.length
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
	@import "liulandianpu.css";
</style>
