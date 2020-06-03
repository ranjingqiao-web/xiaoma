<template>
	
	<view class="">
		<swiper
		style="height: 194px;"
		:indicator-dots="indicatorDots" 
		:autoplay="autoplay" 
		:interval="interval" 
		:duration="duration">
		    <swiper-item>
				<image :src="ims" class="imgesStyle"></image>
		        <!-- <view class="swiperView">22323333232A</view> -->
		    </swiper-item>
		    <swiper-item>
				<image :src="ims" class="imgesStyle"></image> 
		    </swiper-item>
		    <swiper-item>
				<image :src="ims" class="imgesStyle"></image> 
		    </swiper-item>
		</swiper> 
		
	</view>  
</template>
<script> 

export default {
  name: "sweiprbanner",
  data() {
    return {
		ims:require('../../static/img/all/persen.png'),
      background: ['color1', 'color2', 'color3'],
                 indicatorDots: true,
                 autoplay: true,
                 interval: 2000,
                 duration: 500
    };
  },
  mounted() {},
  methods: {
         // changeIndicatorDots(e) {
         //     this.indicatorDots = !this.indicatorDots
         // },
         // changeAutoplay(e) {
         //     this.autoplay = !this.autoplay
         // },
         // intervalChange(e) {
         //     this.interval = e.target.value
         // },
         // durationChange(e) {
         //     this.duration = e.target.value
         // }
     }
};
</script>
 
<style scoped> 
 

  .imgesStyle{ 
 width: 100%;
 height: 400rpx;
 } 
</style> 