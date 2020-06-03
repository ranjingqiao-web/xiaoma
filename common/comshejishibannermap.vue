<template >
  <div>
 
    <!-- <div class="shejishibannerall" :style="{backgroundImage:'url('+bgImg+')',backgroundSize:cover}"> -->
      <div  class="shejishibannerall" >  
      <img :src="bgImg" alt="" class="shejishibanner0">

      <div class="bannerright9">
        <div class="pinpaiguan">品牌馆</div>
        <div>
          <div class="texts1">成都阿豪好倒计时谁说的</div>
          <div class="texts2">详情</div>
        </div>
      </div>
      <div class="banne">地图</div>
    </div>   
  </div>
</template>
<script> 
import bgImgs from "../static/img/all/maps.png"
 
export default {
  props: [""],
  data() {
    return {  
      yueyue: require("../static/img/all/yueyue.png"),
 
      bgImg: bgImgs
    };
  },
  methods: {}
};
</script>
<style scope>
.shejishibannerall {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 94%;
  margin: 0 auto;
  padding: 20rpx  0;
  height: 124rpx;
  position: relative; 
}

.bannerright9 {
  margin-left: 10rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  position: absolute;
}
.logosjscss {
  width: 100%;
  height: 100%;
}
.bannerright1 {
  font-size: 26rpx;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.texts1 {
  font-size: 28rpx;
  color: #707070;
}
.texts2 {
  font-size: 28rpx;
  color: #707070;
}
.banne {
  font-size: 28rpx;
  color: #707070; 
  position: absolute;
  right: 10rpx;
}
.pinpaiguan {
  color: #fff;
  background-color: #22ddb8;
  border-radius: 4rpx;
  font-size: 20rpx;
  margin-right: 10rpx;
  padding: 4rpx 10rpx;
}
.shejishibanner0{
  width: 100%;
  height: 100%;
}
</style>