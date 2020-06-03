<template >
    <div class="meifalist">
      <div class="meifalist0">
       <img :src="start" alt="" srcset="">
      </div>   
      <div class="meifalist1">
        <div class="meifalist11"><div class="meifalist110">成都影视好看</div>  <div class="meifalist111">舒适型</div></div>
        <div class="meifalist12"><div class="meifalist121">4.7分</div><div class="meifalist122">122条点评</div><div  class="meifalist122">122次服务</div></div>
        <div class="meifalist13">距我4.1km</div>
        <div class="meifalist13all">
          <div>
              <div class="meifalist13">开业:2018年</div>
              <div class="meifalist13">性质:专业店、连锁店、品牌店</div>

          </div>
          <div class="meifalicenter">
            <div class="meifalist15">￥ <span class="meifalist151">269</span>均</div>
              <div class="meifalist16">预约享优惠</div>
          </div>
        </div>
        <div class="meifalist20">
             <div class="meifalist21">
                <div>免费茶点</div>
                <div>技术专业</div>
                <div>网红打卡</div>
             </div>
          <div  class="meifalist22">   在线预订  </div>

          </div>
         
         
         
      </div>
     

    </div>
</template>
<script>
export default {
    props:['dialog'],
    data() {
      return {
      start: require("../../static/images/over/1.png")
        
      }
    },
    methods: {
      getdialog(){
        this.$emit("isshowmask",false)
      }
      
    },
}
</script>
<style scope>
.meifalist20{
   display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 26rpx;
  margin-top: 10rpx;
}
.meifalist21{
    display: flex;
  flex-direction: row;
  align-items: center; 
}
.meifalist21 div{
  color: #22ddb8;
  border: 1rpx solid #22ddb8;
 margin-right: 17rpx;
font-size: 20rpx;
padding: 4rpx 8rpx;
border-radius: 8rpx;
display: flex;
align-items: center;

}
.meifalist22{
  color: #fff;
border-radius: 8rpx;
padding: 4rpx 8rpx;

  background-color:#22ddb8 ;
  border: 1rpx solid #22ddb8;

}
.meifalist0{
 width: 26%;
height: 260rpx;
 overflow: hidden;
  margin-right: 18rpx;
}
.meifalist0 img{
  width: 100%;
  height: 100%;
  border-radius: 10rpx;

}

 .meifalist1{
   width: 74%; 
 }
.meifalist11{
  font-size: 26rpx;
  color: #000;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.meifalist111{
  margin-left: 20rpx;
  font-size: 24rpx;
  color: #707070;
}
.meifalist12{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.meifalist121{
  font-size: 30rpx;
  color: #000;
}
.meifalist122{
  font-size: 22rpx;
  color: #707070;
  margin: 0 20rpx;
}
.meifalist13all{
  width: 100%;
    display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.meifalist13{
  font-size: 24rpx;
  color: #707070;
  margin: 6rpx 0;
}
.meifalist0{
 width: 30%;
height: 260rpx;

  overflow: hidden;
  margin-right: 18rpx;

 
}
.meifalist110{
  font-size: 30rpx;
}
.meifalist0 img{
  width: 100%;
  height: 100%;
  border-radius: 10rpx;

}
.meifalist15{
  font-size: 22rpx;
  color: #707070;
}
.meifalist151{
  font-size: 34rpx;
  font-weight: 600;
  color: #000;

}
.meifalist16{
  font-size: 20rpx;
  color: #22ddb8;
}
.meifalicenter{
  text-align: center;
}
  .meifalist{ 
    display: flex;
    flex-direction: row; 
    background-color: #fff;
    padding: 20rpx;
    border-bottom: 1rpx solid #f6f6f6;
  }
</style>