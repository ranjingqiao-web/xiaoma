<template>
	<view class="mainswi">
		<zuoshangjiao title="活动参与"></zuoshangjiao>
		 
		<view class="mainswitop" v-if="iconlistall.length==0 && isiconlistall">
			<comnodata cont='暂无活动'></comnodata>
		</view> 
		<view class="mainswi12" v-if="iconlistall.length>0">
			<view class="huodonglist" @click="toyouhuijuandetailpage" v-for="(item,index) of iconlistall" :key="index">
				<view class="huodonglist0">
					<view class="huodonglist00">
						<image v-if="item.imageUrl ==null" :src="touxiang" class="huodonglist1"></image>
						<image v-if="item.imageUrl !=null" :src="item.imageUrl" class="huodonglist1"></image>
						<view class="huodonglist2"> {{item.title}} </view>
					</view>
					<image :src="nextto" class="huodonglist3"></image>
				</view>

				<view class="huodonglist4">
					<view class="huodonglist6">
						<image :src="item.storeImageUrl" class="huodonglist7"></image>
					</view>
					<view class="huodonglist7">
						<view class="huodonglist8">
							<view class="huodonglist80"> {{item.description}} </view>
							<view class="huodonglist81"> {{item.rule}} </view>
						</view>
						<view class="huodonglist9" v-if="item.pre_at > 0">
							 {{time(item.pre_at)}}
						</view>
					</view>
				</view>
			</view>
             
				 <nomoredata :isdaodi='isdaodi'></nomoredata>
			 

		</view>
	</view>
</template>

<script>
	import comnodata from "../../common/comnodata";
	import zuoshangjiao from "../../common/commain/zuoshangjiao";
	import nomoredata from "../../common/nomoredata";
	 

	export default {
		data() {
			return {
				wenDaData: [],
				pageSize: 10,
				pageNo: 1,
				juanlength: 0,
				isScloll: true,
				isdaodi: false,
				isiconlistall:false,

				nextto: require("../../static/img/xin/nextto.png"),
				touxiang: require("../../static/img/xin/touxiang.png"),
				touxiangleft: require('../../static/img/xin/touxiangleft.png'),
				iconlist: [],
				ticker: null,
				d: "",
				h: "",
				m: "",
				s: ""
			};
		},

		components: {
			zuoshangjiao,
			comnodata,
			nomoredata
		},
		computed: { //这里是监听自定义数组的变化 因为有一个计时器每秒都会减去数组中字段的时间 所以 数组是每秒更新的
			iconlistall: {
				get() {
					return this.iconlist
				}
			}
		},
		methods: {
			/**
			 * 跳转到支付详情   youhuijuandetail
			 * 
			 * ***/
              toyouhuijuandetailpage(){
				let url ='../../pagesRuZhu/youhuijuanxiaodetail/youhuijuanxiaodetail' 
				//商户
				// let url ='../../pagesRuZhu/youhuishanghudetail/youhuishanghudetail' 
				 let param={}
				 this.$navTo.togo(url,param)
			  },

			beginTimer() { //这个计时器是每秒减去数组中指定字段的时间
				this.ticker = setInterval(() => {
					for (let i = 0, len = this.iconlist.length; i < len; i++) {
						const item = this.iconlist[i];
						if (item.pre_at > 0) {
							item.pre_at = item.pre_at - 1000;
						}
					}
				}, 1000);
			},
			time(time) { //这个函数是每秒把时间重新计算下
				if (time >= 0) {
					let d = Math.floor(time / 1000 / 60 / 60 / 24);
					let h = Math.floor((time / 1000 / 60 / 60) % 24);
					let m = Math.floor((time / 1000 / 60) % 60);
					let s = Math.floor((time / 1000) % 60);
					  if(d<10){ d='0'+d }
					  if(h<10){ h='0'+h }
					  if(m<10){ m='0'+m }
					  if(s<10){ s='0'+s }
					return '距结束  ' + d + '天  ' + h + ':' + m + ':' + s ;
				}
			},
			/**
			* 
			* /applet/user/activitiesParticipate/page

			* ***/

			activitiesParticipate() {
				let _this = this;


				let logoparams = {
					"direction": "ASC", 
					pageSize: _this.pageSize,
					pageNo: _this.pageNo,
				}
				// https://xiaomalake.com/ps/applet-service/applet/user/userCoupon/pag
				_this.RESQUESTHTTP.url_Request_post(
					'/applet/user/activitiesParticipate/page',
					logoparams,
					(res) => {
                        _this.isiconlistall=true
						if (res.data.code == 200) {
                         

							var thiswenDaData = _this.wenDaData.concat(res.data.data);
							var preat = thiswenDaData

							preat.forEach(function(item, index) {
								// preat[index].pre_at=item.endDate
								preat[index].pre_at = '2020-06-2'+(index+1)+' 18:5'+(index+1)+':49'
							})
							console.log('thiswenDaData', preat)
							 







							//这里是假的数据
							let list = preat

							//首先循环数组 在 正常的情况下这个数组是后台传递过来的 然后将这个数组中的最后截止时间减去当前时间获得时间戳
							for (let i = 0, len = list.length; i < len; i++) {
								const item = list[i];
								item.pre_at = new Date(item.pre_at).getTime() - new Date().getTime();
							}
							_this.iconlist = list; //将改变后的数组赋值给自定义的数组 然后调用计时器 每秒减去指定字段的时间戳 -1000毫秒
							if (_this.ticker) { //这一段是防止进入页面出去后再进来计时器重复启动
								clearInterval(_this.ticker);
							}
							_this.beginTimer(); //启动计时器减指定字段的时间 

















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
			/**
			 * 日期转时间撮
			 * **/
			// dayTime(v){
			//  var date = new Date(v );
			//   var time1 = date.getTime();
			//   return time1
			// },

			bottomScrolltolower() {
				var _this = this;

				if (_this.isScloll) {
					_this.activitiesParticipate()
					_this.pageNo++
				}


				console.log('0000')
			}
		},
		 
		onShow() {
			let _this = this 
			_this.pageNo = 1 
			_this.iconlist = []
			  
			_this.activitiesParticipate()

            uni.hideLoading()

            uni.onNetworkStatusChange(function(res) {
            	console.log("网络类型:" + res.networkType + ",网络连接:" + res.isConnected);
            	if (!res.isConnected) {
            		uni.showToast({
            			title: "网络未连接"
            		});
            		return;
            	}
            })


			// _this.dayTime ('2014-04-23 18:55:49:123')
			// _this.$time.getInfo(1591977600)



		},

	};
</script>

<style scoped>
	.mainswi {
		width: 100%;
		background-color: #F5F7FA;
	}

	.daohan0huodogn {
		font-size: 32rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #000000;
	}

	.mainswi12 {
		margin-top: 180rpx;
	}

	.mainswitop {
		margin-top: 289rpx;
	}

	.margintop10000 {
		color: #818181;
		font-size: 26rpx;

		text-align: center;
		padding: 30rpx 0;

	}



	.huodonglist {
		width: 100%;
		background-color: #fff;
		margin-top: 20rpx;

	}

	.huodonglist00 {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.huodonglist0 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 6rpx 20rpx;
		border-bottom: 1px solid #F6F6F6;

	}

	.huodonglist1 {
		width: 60rpx;
		height: 60rpx;
		border-radius: 30rpx;
	}

	.huodonglist2 {
		font-size: 30rpx;
		font-family: PingFang-SC-Bold, PingFang-SC;
		font-weight: bold;
		color: #333;
		margin-left: 10rpx;
	}

	.huodonglist3 {
		width: 40rpx;
		height: 40rpx;
	}

	.huodonglist4 {
		display: flex;
		flex-direction: row;

		padding: 10rpx 20rpx;
	}

	.huodonglist6 {
		width: 319rpx;
		height: 150rpx;
		overflow: hidden;
		border-radius: 6rpx;
		margin-right: 20rpx;
	}

	.huodonglist7 {
		width: 100%;
		height: 100%;
		background-size: cover;
	}

	.huodonglist8 {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.huodonglist80 {
		color: #FA6400;
		border: 1px solid #FA6400;
		border-radius: 10rpx;
		font-size: 24px;
	}

	.huodonglist81 {
		color: #000;
		font-weight: 400;
		font-size: 32rpx;
		margin-left: 20rpx;
	}

	.huodonglist9 {
		font-size: 28rpx;
		font-family: PingFang-SC-Bold, PingFang-SC;
		font-weight: bold;
		color: #F32330;
		margin-top: 56rpx;

	}
</style>
