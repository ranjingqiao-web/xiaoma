<template>
	
	<view class="buttonchackedcss">
      <!--  <view class="bottomList" v-for="(item,index) in buttonData" :key="index" :item='item' :class="isbuttonid==index?'isActivebottomList':''"
		 @click="changeAddButton(item,index)">
			{{item.title}}
		</view> -->
		 
		<view  class="bottomList"  v-for="c,index of cities" :class="{checked:arr.includes(index)}" @click="checkedBox(index)">{{c}}</view>
		 
    </view>
</template>

<script>
	export default {
		props: [],
		data() {
			return {
				  cities : ["上海","北京","广州","重庆","西安"],
				 arr : []
			}
		},

		methods: {
		 
		   checkedBox(i){
		            if(this.arr.includes(i)){
		                /**
						 * includes()方法判断是否包含某一元素,返回true或false表示是否包含元素，对NaN一样有效
		                 *   filter()方法用于把Array的某些元素过滤掉，filter()把传入的函数依次作用于每个元素，
						 *   然后根据返回值是true还是false决定保留还是丢弃该元素：生成新的数组
						 * 
						 */ 
		                this.arr=this.arr.filter(function (ele){return ele != i;});
		            }else{
		                this.arr.push(i);
		            }
					console.log(this.arr)
		        }
			 
		}

	}
</script>

<style scoped>
	/**
	 * 父组件加上此代码就可以了
	 * 
	 **/

	/* .buttonchackedcss{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		font-size: 24rpx;
	
	} */




	.bottomList {
		border: 1upx solid #D2D2D2;
		color: #D2D2D2;
		padding: 10rpx 20rpx;
		border-radius: 7rpx;
		margin-top: 20rpx;
		margin-right: 20rpx;
	}

 
	
	 /**
	  * 多选样式
	 **/
	  
	 ul{
	     padding:0; 
	     list-style:none;
	 }
	 .bottomList{ 
		 display:inline-block;
	     text-align:center;  
	     cursor:pointer; 
	 }
	 .bottomList:before{ 
	      display:inline-block; 
	     line-height:10px; 
		 content:"";
		  border:1px #000 solid; 
	     margin-right:2px;
		  transition:all 0.3s linear;
	 }    
	 .bottomList.checked:before{ 
	     background-color:#00C6C2; 
	     border:1px #fff solid;
	 }
	 .bottomList.checked{color:#00C6C2;		border: 1upx solid #00C6C2; }
</style>
