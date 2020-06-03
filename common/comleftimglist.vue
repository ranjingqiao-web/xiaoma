<template>
  <view class="comcontentlist0" @click="tohezuopage(items)">
  	<view class="comcontentlist1">
  		<view class="comcontentlist2">
            
  		</view>
  
  		<view class="comcontentlist3">
  			<view class="comcontentlist4">
  				 {{items.title}}
  			</view>
  			<view class="comcontentlist5">
  				{{items.cont}}
  			</view>
  		</view>
  	</view>
  	<image :src="imgaes" class="youstyle"></image>
  </view>
</template>
<script>
export default {
  name: 'comleftimglist',
  props:  ['items' ],
  data () {
    return {
      imgaes: require("../static/img/all/you1.png"), 
    }
  },
  watch: { 
  },
 created:function(){
		 
	    },
  mounted () {
    
  },
  methods: {
   tohezuopage(items){
	   /**  
		* 0 设计师入住 useresidentdesigner，1 实体门店入驻，2 渠道代理加盟，3教育拍档
		* 
		* **/
		let url=''
		if(items.id==0){
			url='../../pagesRuZhu/useresidentdesigner/useresidentdesigner' 
		}
	     
	  let param={}
	  this.$navTo.togo(url,param)
   }
  }
}
</script>
<style   scoped>
  .comcontentlist0 {
  	padding:30rpx 20px;
  	display: flex;
  	flex-direction: row;
  	justify-content: space-between;
  	align-items: center;
  
  }
  
  .youstyle {
  	width: 40rpx;
  	height: 40rpx;
  }
  
  .comcontentlist1 {
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  }
  
  .comcontentlist2 {
  	width: 80rpx;
  	height: 80rpx;
  	border-radius: 40rpx;
  
  	background-color: #ccc;
  	overflow: hidden;
  }
  
  .comcontentlist3 {
  	margin-left: 20px;
  }
  
  .comcontentlist4 {
  	font-size: 32px;
  	font-weight: 500;
  	margin-bottom: 10px;
  
  	color: #282828;
  }
  
  .comcontentlist5 {
  	font-size: 24px;
  	font-weight: 400;
  	color: #8E8E8E;
  }
</style>