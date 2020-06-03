<template>
	  
			 
			<div class='comuserheadersige5'>
				<div @click="jumpToPage(item)">
					<div class='comuserheadersige3'>
						<img :src="item.zmyu1" class="comuseimg"/>
					</div>
					<div class='comuserheadersige4'> {{item.name}}</div>
				</div>
				 
			</div> 
	 
</template>
<script>
	export default {
		name: 'comusertab',
		props: ['title', 'item'],
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
			
			jumpToPage(item){  
				    // ../../pagesChild/pageZiChang/pageZiChang
			        let url = '../../pagesChild/pageMine/mineOrder'  
			        let url_pageYouHuiJuan = '../../pagesChild/pageYouHuiJuan/pageYouHuiJuan'  
			        let url_pageZiChang = '../../pagesChild/pageZiChang/pageZiChang'  
			        let url_pageMB = '../../pagesChild/pageMB/pageMB'  
					  
			        let param = {  
			            id:item.id 
			        }  
					  if(item.id==4){
						  this.$navTo.togo(url_pageYouHuiJuan,param) 
					  }else if(item.id==5){
						  this.$navTo.togo(url_pageZiChang,param) 
					  }else if(item.id==6){
						  this.$navTo.togo(url_pageMB,param) 
					  }{
						this.$navTo.togo(url,param)   
					  }
			          
					 
			    }  
		 

		}
	}
</script>
<style scoped>
	.comuseimg{
		width: 40rpx;
		height: 40rpx;
	}
	 
	.comuserheadersige50 {}

	.comuserheadersige5 { 
		color: #808080;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		text-align: center;
		padding-bottom: 30px; 
		padding-top: 30px;
		 
		/* box-shadow: 0 0px 0px 10px 0 rgba(0, 0, 0, 0.1); */
	}

	.comuserheadersige3 {}

	.comuserheadersige4 {
		font-size: 28px;
	}
</style>
