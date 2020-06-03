<template>

	<div style='width:100%'>
		<div class="comuserinfoheader">
			<div class="comuserinfoheadercon">
				<div v-for="(item,index) in infoData" :key="index" class="comuserinftext" :class="infoCount==index?'isinfoCount':''"
				 @click="changeInfoTab(index)">
					<text class="isinfoCounttextall" :class="infoCount==index?'isinfoCounttext':''"> {{item.name}} 
					
					<text v-if="infoCount==index">({{juanlength}})</text>
					</text>
				</div>
			</div>


		</div>
	</div>
</template>
<script>
	export default {
		name: 'comuserinfoheader',
		props: ['juanlength','status'],
		data() {
			return {
				infoCount: 0,
				infoData: [{
						name: '待使用',
						id: 0
					},
					{
						name: '已使用',
						id: 1
					},
					{
						name: '已失效',
						id: 2
					},
				]
				// you1: require("../../static/img/all/you1.png"),

			}
		},
		watch: {},
		created: function() {},
		mounted() {

		},
		methods: {
			changeInfoTab(index) {
				this.infoCount = index;
				this.$emit('wendainfotongzhi', this.infoCount)
			},

		}
	}
</script>
<style scoped>
	.comuserinfoheader {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center; 
		position: fixed;
		left: 0;
		top: 144rpx;
        right: 0;
		background-color: #fff;
		z-index: 8;
		box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);

	}

	.heightStyles {
		height: 20rpx;
		width: 100%;
		background-color: #f6f6f6;
	}

	.comuserinfoheadercon {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color: #606060;
		font-weight: 0;
		font-size: 30rpx;
		padding-bottom: 15px;

	}

	.comuserinftext {
		padding-top: 40rpx;
		position: relative;

	}

	.isinfoCount {
		font-weight: 800;

	}

	.isinfoCounttextall {
		padding-bottom: 10px;

		color: #000000;

	}

	.isinfoCounttext {
		border-bottom: 6rpx solid #F32330;
		color: #F32330;
	}
</style>
