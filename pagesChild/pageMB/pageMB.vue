<template>
	<view style="width: 100%;">
		<view class="listOrderTopStyle">
			79889 M币
		</view>
		<view class="topPosittion">
			<wuc-tab textFlex="true" :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab>
        </view>
		<view >
			<pagezichang></pagezichang>
			<pagezichang></pagezichang> 
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
	import pagezichang from '../../common/pageZiChang/pageZiChang';
	 
	export default {
		components: {
			WucTab,pagezichang
		},
		data() {
			return {
				TabCur: 0,
				tabList: [{
						name: '本月'
					},
					{
						name: '待付款'
					}, {
						name: '待确认'
					}, {
						name: '待使用'
					},
					{
						name: '待评价'
					}
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
			_previewImage(image) {
				var imgArr = [];
				imgArr.push(image);
				//预览图片
				uni.previewImage({
					urls: imgArr,
					current: imgArr[0]
				});
			},
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
	.listOrderTopStyle{
		height: 200px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 34px;
		font-weight: bold;
		color: #fff;
		background-color: #00C6C2;
	}
 
  
</style>
