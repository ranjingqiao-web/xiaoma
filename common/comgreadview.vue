<template>
  <div class="se0">
    <div class="se1">
       

      <div class="se4 margintops">
        <div class="se31center bacruzhu">
          <div class="se4left">
            <div class="se4lefttop">整体形象服务开创 享受时尚生活</div>
            <div class="se4leftbto">
              <div class="se4leftbtorow">
                <img :src="weizhi" alt class="weizhistyle" />
                <div>双证认证</div>
              </div>
              <div class="se4leftbtorow">
                <img :src="weizhi" alt class="weizhistyle" />
                <div>服务优先</div>
              </div>
              <div class="se4leftbtorow">
                <img :src="weizhi" alt class="weizhistyle" />
                <div>品牌保障</div>
              </div>
            </div>
          </div>
          <div class="se4lright">设计师入住</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pinpaijingxuan",
  data() {
    return { 
      weizhi: require("../../../static/images/wz1.png"),
       
    };
  },
  mounted() {},
  methods: {
   
  }
};
</script>
 
<style scoped>
.margintops{
  margin-top: 20px;
}
.weizhistyle {
  width: 18rpx;
  height: 18rpx;
}
.se4leftbtorow {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.se4leftbto {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 20rpx;
  color: #ccc;
  margin-top: 8rpx;
}
.se4lefttop {
  font-weight: 600;
  font-size: 22rpx;
}
.se4 {
  background-color: #f6f6f6;
}

.se4lright {
  background-color: #22ddb8;
  color: #fff;
  padding: 10rpx 15rpx;
  border-radius: 4rpx;
  font-size: 24rpx;
}
.se31center {
  width: 94%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 24rpx;
  padding: 40rpx 0;
}

 
.se0 {
  width: 100%; 
  position: relative;
  background-color: #fff;
}
.se1 {
  width: 94%;
  margin: 0 auto; 

  background-color: #fff;
  position: absolute;
  top: -40rpx;
  left: 0;
  right: 0;
  border-top-left-radius: 40rpx;
  border-top-right-radius: 40rpx;
}
  
 
</style> 