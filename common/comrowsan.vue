<template>  
	<div class="rowsan margintop">
		<div class="rowsan94">
			<div class="rowsanlist" @click='shejishipage'>
				<div class="rowsantop">
					<div class="rowsanstart">
						5.0分
						<img :src="start" :alt="item" class="startimg" v-for="(item,index) in startnum" :key="index" />
					</div>   
				</div>
				<div class="rowsanbottom">
					<div class="rowsan2">
						<div>
							<span class="rowsan1">JAVEN</span> 美发师 | 高级
						</div>
					</div>
					<div class="rowsan2">总监 | 从业10年</div>
					<div class="rowsan2">
						<div>服务234</div>
						<div>2.3km</div>
					</div>
				</div>
			</div>
			<div class="rowsanlist rowsantwo">
				<div class="rowsantop">
					<div class="rowsanstart">
						5.0分
						<img :src="start" :alt="item" class="startimg" v-for="(item,index) in startnum" :key="index" />
					</div>
				</div>
				<div class="rowsanbottom">
					<div class="rowsan2">
						<div>
							<span class="rowsan1">JAVEN</span> 美发师 | 高级
						</div>
					</div>
					<div class="rowsan2">总监 | 从业10年</div>
					<div class="rowsan2">
						<div>服务234</div>
						<div>2.3km</div>
					</div>
				</div>
			</div>
			<div class="rowsanlist">
				<div class="rowsantop">
					<div class="rowsanstart">
						5.0分
						<img :src="start" :alt="item" class="startimg" v-for="(item,index) in startnum" :key="index" />
					</div>
				</div>
				<div class="rowsanbottom">
					<div class="rowsan2">
						<div>
							<span class="rowsan1">JAVEN</span> 美发师 | 高级
						</div>
					</div>
					<div class="rowsan2">总监 | 从业10年</div>
					<div class="rowsan2">
						<div>服务234</div>
						<div>2.3km</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
	export default {
		name: "comrowsan",
		props: ["startnum"],
		data() {
			return {
				start: require("../static/img/all/start.png")
			};
		},
		watch: {},
		created: function() {},
		mounted() {},
		methods: {

			shejishipage() { 
				let url = '../../pagesRuZhu/userSheJiDetail/userSheJiDetail'
				let param = {}
				this.$navTo.togo(url, param)
			},

		}
	};
</script>
<style scoped>
	.margintop {
		margin-top: 10rpx;
	}

	.rowsan1 {
		font-weight: 600;
		font-size: 24rpx;
		color: #333;
	}

	.rowsan2 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 20rpx;
		padding: 4rpx 10rpx;
		color: #9a9a9a;
	}

	.startimg {
		width: 20rpx;
		height: 20rpx;
		margin-left: 2rpx;
	}

	.rowsan {
		background-color: #fff;
	}

	.rowsan94 {
		width: 94%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.rowsanlist {
		flex: 1;
		border-radius: 8rpx;
		overflow: hidden;
		background-color: #fff;

		box-shadow: 5rpx 5rpx 5rpx 0 rgba(0, 0, 0, 0.1);

	}

	.rowsantop {
		height: 250rpx;
		background-color: #22ddb8;
		position: relative;
	}

	.rowsanstart {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 20rpx;
		color: #fff;
		position: absolute;
		bottom: 4rpx;
		left: 10rpx;
	}

	.rowsantwo {
		margin: 0 10rpx;
	}
</style>  
