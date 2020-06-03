<template>
	  <view> 
	            <view class="uni-textarea">
	               <textarea
				   class="textareacss"
					@input="bindTextAreaBlur" 
					placeholder="分享你的体验感受，可以帮助更多人哦！"  
					placeholder-class="placeholderclass"
					auto-height />
	            </view>
	          
	        </view>
</template>

<script>
	export default {
		props:['title'],
		data() {
			return {
				 
			}
		},
	 
		methods: {
			 bindTextAreaBlur: function (e) {
			            console.log(e.detail.value)
			        }
		}

	}
	/* background-image:url("../../static/img/all/mine/xing1.png") */
	/* background-image:url("../../static/img/all/mine/xing2.png")   */
</script>

<style scoped>
	.textareacss{
		width: 100%;
		margin: 0 auto;
		border: 1rpx solid #f0f0f0;
		padding: 20px 0;
		text-indent: 11px;
		margin-top: 10px;
		border-radius: 5px;
		min-height: 56px;
        padding: 10px 0px 10px 0;

	}
	 .placeholderclass{
		 color: #979797;
		 font-size: 24rpx;
	 }
</style>
