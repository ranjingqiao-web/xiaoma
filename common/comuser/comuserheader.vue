<template>
	 <div>
	<div class="comuserheader">
		<div class='comuserheaderleft'>
			<div class='logosjstyle'>
				<img :src='logosjs'  >
			</div>
			 <div class='logostext'>
				 <div  class='logostext0'>java js</div>
				 <div  class='logostext1'>java js</div>
				 <div  class='logostext1'>java js</div>
			 </div>
		</div> 
		<div class='comuserheaderright' @click='jumpToErWeiMaPage'>
			<div class="comrightposition" @click="getxiaoxilist">
				<!-- <div class="comrightpositionnum">99</div> -->
				<img :src='zmshezhi1' class="comright" >
			</div>
			  
			<img :src='zmshezhi'  @click="getshezhi" class="comright" >
		</div> 
		  
   
	</div>
	<div class='comuserheadersige'>
		<!-- <div>
			<div class='comuserheadersige1'>2</div>
			<div class='comuserheadersige2'>粉丝</div>
		</div> -->
		<div>
			<div class='comuserheadersige1'>2</div>
			<div class='comuserheadersige2'>关注</div>
		</div>
		<div>
			<div class='comuserheadersige1'>2</div>
			<div class='comuserheadersige2'>收藏</div>
		</div>
		<div>
			<div class='comuserheadersige1'>2</div>
			<div class='comuserheadersige2'>浏览</div>
		</div>
	</div>
	</div>
</template>
<script>
	export default {
		name: 'comuserheader',
		props: ['listitem'],
		data() {
			return {

				logosjs: require("../../static/img/all/logosjs.png"),
				zmshezhi: require("../../static/img/all/mine/zmshezhi.png"),
				zmshezhi1: require("../../static/img/all/mine/zmshezhi1.png"),

			}
		},
		watch: {},
		created: function() {},
		methods: { 
			 
			 jumpToErWeiMaPage( ){ 
			         let url = '../../pagesChild/userErWeiMa/userErWeiMa'  
			         let param = {  
			              
			         }  
			 		  this.$navTo.togo(url,param)  
			 		 
			     },
         getxiaoxilist(){
			 console.log('llll')
		 },
		  getshezhi(){		
			  console.log('333')
			  }
		}
	}
</script>
<style scoped>
	
	.comuserheader {
		width: 98%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between; 
		padding-bottom: 20px;
        padding-top: 9rpx;
		 
	}
     .comuserheaderleft{
		 display: flex;
		 flex-direction: row;
		 align-items: center; 
	 }
	 .comuserheaderright{
		 display: flex;
		 flex-direction: row;
		 align-items: center; 
	 }
	 .logosjstyle{
		 width: 140rpx;
		 height: 140rpx;
		 border-radius: 70rpx;
 
		 overflow: hidden;
	 }
    .logosjstyle img{
		background-size: cover;
		width: 100%;
		height: 100%;
	}
	.logostext{
		margin-left: 10px;
		color: #fff;
	}
	.logostext0{
		font-size: 36rpx;
		
	}
	.logostext1{
		font-size: 28rpx;
		
	}
	.comrightposition{
		position: relative;
	}
	.comrightpositionnum{
		position: absolute;
		color: #fff;
		font-size: 26px;
		background-color: #000000;
		border-radius: 100px;
		left: 30px;
		top: -12px; 

	}
	.comright{
		width: 50rpx;
		height: 50rpx;
		margin-right: 40rpx;
	}
	.comuserheadersige{
		color: #fff;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		text-align: center;
		padding-bottom: 30px;
	}
	.comuserheadersige1{font-size: 28px;}
	.comuserheadersige2{font-size: 24px;}
</style>
