<template>
	<view class="pageImmeAll">

		<view class="pageImme">
			<view class="pageImme0">
				<img :src='personImg' class="pageImme1">
			</view>
			<view class="pageImme2">
				<view class="pageImme3"> 洗剪吹 </view>
				<view class="pageImme4 pageImme5">
					<view class="pageImme50">

						服务: <view class="pageImme51">稀饭+裁剪+造型</view>

					</view>
					<view class="pageImme6">
						￥890
					</view>
				</view>
				<view class="pageImme4 pageImme55">
					<view class="pageImme50">

						用时: <view class="pageImme51">预计1小时</view>

					</view>
					<view class="pageImme6">
						x1
					</view>
				</view>

			</view>
		</view>
		<div class="pageImme10">
			<div class="pageImme11">
				<div class="pageImme11-1">服务评价</div>
				<div class="pageImme11-2">6.9分</div>
			</div>
			<div class="pageImme12">

				<starswrapper title='专业'></starswrapper>
				<starswrapper title='服务'></starswrapper>
				<starswrapper title='环境'></starswrapper>
				<starswrapper title='效果'></starswrapper>
			</div>
		</div>
		<view>
			<comtextarea></comtextarea>
		</view>
		<view>
			<buttonduoxuan @changeAddButtons='changeAddButtons'></buttonduoxuan>
		</view>

		<view class="pageImmesBottom">
            提交
		</view>
	</view>

</template>
<script>
	import starswrapper from '../../common/pageImmeLation/starswrapper'
	import comtextarea from '../../common/pageImmeLation/comtextarea'
	import buttonduoxuan from '../../common/pageImmeLation/buttonduoxuan'

	export default {
		components: {
			starswrapper,
			comtextarea,
			buttonduoxuan
		},
		data() {
			return {

				personImg: require('../../static/img/all/logosjs.png'),

			}
		},
		onLoad() {},
		methods: {
			/***
			 * 方法接收选择的内容 changeAddButtons
			 **/
			changeAddButtons(v) {
				console.log(v)
			}
		},
	}
</script>

<style>
	.pageImmesBottom{
		margin-top: 100rpx;
		background-color: #00c6c2;
		color: #fff;
		font-size: 29px;
		text-align: center;
		height: 80px;
		line-height: 80px;
		border-radius: 6px;
	}
	.pageImmeAll {
		width: 100%;
		height: calc(100vh);
		padding: 0 10px;

	}

	.pageImme {
		padding: 40px 0px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.pageImme0 {
		width: 173px;
		height: 173px;
		overflow: hidden;
		border-radius: 6px;
	}

	.pageImme1 {
		width: 100%;
		height: 100%;
	}

	.pageImme2 {
		flex: 1;
		height: 50px;
		margin-left: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.pageImme3 {
		font-size: 30px;
		font-weight: bold;
		color: #000000;
	}

	.pageImme4 {
		font-size: 28px;
		color: #282828;

	}

	.pageImme4 .pageImme51 {
		color: #8E8E8E;
		font-size: 28px;
	}

	.pageImme50 {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.pageImme5 {
		margin: 18px 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.pageImme55 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.pageImme6 {
		color: #000;
		font-size: 28px;
		padding-right: 10px;
	}

	.pageImme10 {
		width: 100%;
		padding: 20px 0;
		background-color: #F4F4F4;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.pageImme11 {
		width: 30%;
		text-align: center;

		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.pageImme12 {
		width: 70%;
		display: flex;
		flex-direction: column;
		text-align: left;
	}

	.pageImme11-1 {
		font-size: 30px;
		color: #333333;
	}

	.pageImme11-2 {
		margin-top: 20px;
		font-size: 34px;
		color: #000000;
		font-weight: bold;
	}

	.buttonchackedcss {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		font-size: 24rpx;

	}
</style>
