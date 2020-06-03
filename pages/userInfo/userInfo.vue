<template>
	<view class="mainswi">
		<zuoshangjiao title='我的优惠券'> </zuoshangjiao>
		<div class="infocontenttext">

			<div>
				<comuserinfoheader :status='status' :juanlength='juanlength' @wendainfotongzhi='wendainfotongzhi'></comuserinfoheader>
			</div>
			<scroll-view scroll-y @scrolltolower="bottomScrolltolower" class="scrollYHeigth">
				<div class='margintop100'>

					<comfuwulist class="listscss" v-for="(listitem,listindex) in wenDaData" :key="listindex" :listitem="listitem"></comfuwulist>


				</div>


				<nomoredata :isdaodi='isdaodi'></nomoredata>
			</scroll-view>
		</div>
	</view>
</template>

<script>
	import comuserinfoheader from '../../common/comuserInfo/comuserinfoheader';
	import comfuwulist from '../../common/comuserInfo/comfuwulist';
	import zuoshangjiao from "../../common/commain/zuoshangjiao";
	import nomoredata from "../../common/nomoredata";
	export default {
		components: {
			comuserinfoheader,
			comfuwulist,
			zuoshangjiao,
			nomoredata
		},
		data() {
			return {
				countTab: 0,
				goodTask: 0,
				wenDaData: [],
				huodong: require("../../static/img/xin/huodong.png"),
				status: 'UN_USE',
				pageSize: 10,
				pageNo: 1,
				juanlength: 0,
				isScloll: true,
				isdaodi: false

			}
		},

		onShow() {
			this.isScloll = true
			this.pageNo = 1
			this.wenDaData = []
			this.getyouhuijuan()
		},
		methods: {
			/**
			 * 
			 *  
			 * 
			 * **/
			getyouhuijuan() {
				let _this = this;


				let logoparams = {
					"status": _this.status,
					pageSize: _this.pageSize,
					pageNo: _this.pageNo,
				}
				// https://xiaomalake.com/ps/applet-service/applet/user/userCoupon/pag
				_this.RESQUESTHTTP.url_Request_post(
					'/applet/user/userCoupon/page',
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








			wendainfotongzhi(v) {
				this.countTab = v
				if (v == 0) {
					this.status = 'UN_USE'
				} else if (v == 1) {
					this.status = 'HAS_USE'
				} else {
					this.status = 'INVALID'
				}
				this.isScloll = true
				this.pageNo = 1
				this.wenDaData = []
				this.getyouhuijuan()
			},

			toImmediatel() {
				let url = '../../pagesRuZhu/youhuijuandetail/youhuijuandetail'
				let param = {}
				this.$navTo.togo(url, param)
			},
			/**
			 * 0 评论 ，1 收藏，2粉丝
			 * */
			getchangeInfowx(v) {
				this.goodTask = v
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
		}
	}
</script>

<style scoped>
	@import "userInfo.css";
</style>
