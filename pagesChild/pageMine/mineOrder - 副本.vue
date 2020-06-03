<template>
	<view style="width: 100%;">
		<view>
			<wuc-tab textFlex="true" :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab>
			<swiper  class="swiper-items"  :current="TabCur" duration="300" @change="swiperChange">
				<!-- v-for="(item,index) in countTabList" :key="index"  -->

				<swiper-item v-for="(items,index) in countTabList " :key="index">
					<view class="listOrder">
						<view class="listOrder1">会员产品自营店</view>
						<view class="listOrder2">
							<view class="listOrder21">
								<img src="https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=2569200539,4021024536&fm=74&app=80&f=JPEG?w=200&h=200"
								 class="listOrder23">
							</view>
							<view class="listOrder22">
								<view class="listOrder221"> {{items.title}}</view>
								<view class="listOrder222">再次预定再次预定</view>
								<view class="listOrder223">500ML + 300ML</view>
							</view>
						</view>
						<view class="listOrder3">
							<view>分享</view>
							<view>删除</view>
							<view>点评</view>
							<view>再次预定</view>
							<view>待收货</view>
							<view>已退款</view>
						</view>
					</view>
				</swiper-item>


			</swiper>
		</view>
	</view>
</template>
<script>
	/**
	 *     tabList	Array	空	tab 数组，数据基本格式为[{name:'名称',icon:'图标'}]
	 *   tabCur	Number	0	被选中的 tab 位置
	 *   tabClass	String	空	tab 的基础样式
	 *   tabStyle	String	空	tab 的基础样式  tabStyle='color: red;background-color: #fff; '
	 *   selectClass	String	text-blue	tab 被选中项的基础样式
	 *   textFlex	String	false	是否平分
	 *   tabCur	被选中位置（双向）
	 *   change	点击事件
	 *   https://ext.dcloud.net.cn/plugin?id=300
	 * */
	import WucTab from '@/components/swiper-tab-head/wuc-tab/wuc-tab.vue';
	export default {
		components: {
			WucTab
		},
		data() {
			return {
				TabCur: 0,
				tabList: [{
						name: '全部'
					},
					{
						name: '待付款'
					}, {
						name: '待收款'
					}, {
						name: '待点评'
					},
					{
						name: '退款/售后'
					}
				],

				countTabList: [{
						title: '全部eeeeeeeeee1',
						 
					},
					{
						title: '全部eeeeeeeeee1'
					},
					{
						title: '全部eeeeeeeeee1'
					},
					{
						title: '全部eeeeeeeeee1'
					},
					{
						title: '全部eeeeeeeeee1'
					},
				],

			}
		},
		onLoad() {
			/*
			 * 接口uni.getSystemInfo：获取系统信息（屏幕高度，窗口高度等）
			 * 1.style动态绑定样式不支持px单位，要用uni.upx2px()转换成px
			 * 2.scroll-view里的scroll-y属性要设置高度才能纵向滚动
			 * 3.动态计算出swiper高度并通过style绑定
			 * 		:style="{height: swiperheight + 'px' }"
			 * */
			// uni.getSystemInfo({
			// 	success: (res) => {
			// 		// 减去头部tab高度
			// 		let height = res.windowHeight - uni.upx2px(100)
			// 		this.swiperheight = height;
			// 	}
			// });
		},
		methods: {

			tabChange(index) {
				this.TabCur = index

			},
			swiperChange(e) {
				let {
					current
				} = e.target;
				console.log('----', current)
				this.TabCur = current;
			},

		},
	}
</script>

<style>
	.swiper-items {
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
		/* padding: 30rpx 20px; */
	}

	.listOrder {
		width: 100%;

	}

	.listOrder1 {
		font-size: 30px;
		color: #333333;

	}

	.listOrder2 {
		padding: 9px 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.listOrder22 {
		flex: 1;
		margin-left: 20px;
	}

	.listOrder221 {
		font-size: 30px;
		font-weight: 600;
		color: #333;
	}

	.listOrder222 {
		font-size: 26px;
		color: #606060;
	}

	.listOrder223 {
		font-size: 26px;
		color: #606060;
	}

	.listOrder3 {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	.listOrder3 view {
		border: 1px solid #606060;
		color: #606060;
		font-size: 26px;
		border-radius: 10px;
		margin-right: 20px;
		padding: 2px 6px;

	}

	.listOrder21 {
		width: 150rpx;
		height: 150rpx;
		border-radius: 10px;
		overflow: hidden;
	}

	.listOrder23 {
		width: 100%;
		height: 100%;
		background-size: cover;
	}
</style>
