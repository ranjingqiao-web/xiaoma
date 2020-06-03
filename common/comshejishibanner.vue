<template >
     <div>
 <div class="shejishibanner">
      <div class="bannerleft">
        <img :src="logosjs" alt class="logosjscss" />
      </div>
      <div class="bannerright">
        <div class="bannerright1">
          <div>成都阿豪好倒计时谁说的</div>
          <div class="bannerright1right">+关注</div>
        </div>
        <div class="bannerright2">专业店 | 2012年开业 粉丝数122万</div>
        <div class="bannerright3">
          <div>
            <img :src="yueyue" alt class="yueyues" />
            预约服务
            <img :src="yueyue" alt class="yueyues" />
            免费茶点
            <img :src="yueyue" alt class="yueyues" />
            私密空间
            <img :src="yueyue" alt class="yueyues" />
            停车方便
          </div> 
          <div @click='navigatetoshejishidetail'>详情></div>
 
        </div>
      </div>
    </div>
     </div>
</template>
<script>
export default {
    props:[''],
    data() {
      return { 
         logosjs: require("../static/img/all/logosjs.png"),
         yueyue: require("../static/img/all/yueyue.png")
      }
    },
    methods: {
     /**
	  * 设计师详情
	  * 
	  * ***/
      navigatetoshejishidetail(){
		  let url='../../pagesRuZhu/userSheJishiDetail/userSheJishiDetail'
		  let param={}
		  this.$navTo.togo(url,param);
	  }
 
      
    },
 
}
</script>
<style scope>
.yueyues {
  width: 20rpx;
  height: 20rpx;
}
.shejishibanner {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 94%;
  margin: 0 auto;
  padding: 10rpx 0;
}
.bannerleft {
  width: 100rpx;
  height: 100rpx;
  border-radius: 8rpx;
  overflow: hidden;
}
.bannerright {
  width: 90%;
  margin-left: 10rpx;
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
.bannerright1right {
  border: 1rpx solid #22ddb8;
  font-size: 24rpx;
  border-radius: 50rpx;
  padding: 6rpx 20rpx;
  color: #22ddb8;
}
.bannerright2 {
  font-size: 24rpx;
  margin: 8rpx 0;
}
.bannerright3 {
  font-size: 20rpx;
  color: #707070;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}


 
</style>