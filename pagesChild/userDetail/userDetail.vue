<template>
	<view class="content">
	 77777777777777777777777777
	</view>
</template>  

<script> 
	import {
		mapState,
		mapMutations
	} from 'vuex'
	// import mInput from '../../components/m-input.vue'
 
	export default {
		name:'mineOrder',
		components: {

		},
		data() {
			return {
			 
			}
		},
		computed: mapState(['forcedLogin']),
		methods: {
			...mapMutations(['login']),
			 
		},
		onLoad() { 
        }
	}
</script>

<style scoped>
	.content2 {
		margin-top: 6rem;
	}

	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.action-row navigator {
		color: #007aff;
		padding: 0 20upx;
	}

	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.oauth-image {
		width: 100upx;
		height: 100upx;
		border: 1upx solid #dddddd;
		border-radius: 100upx;
		margin: 0 40upx;
		background-color: #ffffff;
	}

	.oauth-image image {
		width: 60upx;
		height: 60upx;
		margin: 20upx;
	}

	.navigetors {
		color: #666;
	}
</style>
