<template>
  <div class="se0">
    <div class="se1">
      <div class="se2">
        <div class="se2-1">
          <div
            class="se2-2"
            :class="index==count?'seactive':''"
            v-for="(item,index) in shedata"
            :key="index"
            @click="ontabsan(index)"
          >
            <div class="se2-2-2">{{item.title}}</div>
            <div class="circle4" v-if="index==count"></div>
          </div>
        </div>
        <div class="se2list borderBottoms">
          <div class="se2listleft">
            <div>成都市</div>
            <img :src="xia1" alt class="se2listimg" />
          </div>
          <div class="se2listright">
            <img :src="weizhi" alt class="se2listimg" />
            <div>成都市</div>
          </div>
        </div>
        <div class="se2list borderBottoms">
          <input type="text" v-model="keywords" class="keywordstyle" placeholder="关键词/美发师/美容师/美妆师" />
        </div>
        <div class="se2list borderBottoms">
          <input type="text" v-model="keywordsstart" class="keywordstyle" placeholder="设计星级" />
        </div>
        <div class="se2list borderBottoms bac">搜索</div>
      </div>
      <div class="se3">
        <div class="se31center">
          <div v-for="(item,index) in meilist" :key="index" class="se31">
            <img :src="item.m1" alt class="se3img" />
            <div>{{item.title}}</div>
          </div>
        </div>
      </div>
      <div class="se4">
        <div class="se31center bacruzhu" @click='tousershangjia'>
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
      count: 0,
      shedata: [{ title: "设计师" }, { title: "品牌馆" }, { title: "精选" }],
      weizhi: require("../../static/img/all/wz1.png"),
      xia1: require("../../static/img/all/xia1.png"),
      keywords: "",
      keywordsstart: "",
      meilist: [
        { m1: require("../../static/img/all/m1.png"), title: "美发" },
        { m1: require("../../static/img/all/m1.png"), title: "美容" },
        { m1: require("../../static/img/all/m1.png"), title: "美妆" },
        { m1: require("../../static/img/all/m1.png"), title: "美甲" },
        { m1: require("../../static/img/all/m1.png"), title: "美体" }
      ]
    };
  },
  mounted() {},
  methods: {
	  tousershangjia(){
		  let url='../../pagesRuZhu/usershangjia/usershangjia'
		  let param={}
		  this.$navTo.togo(url,param)
	  },
    ontabsan(v) {
      this.count = v;
      this.$emit('getpinpaijingxuan',v)
    }
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
  font-size: 26rpx;
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
.se31 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.se3img {
  width: 60rpx;
  height: 60rpx;
  margin-bottom: 10rpx;
}
.se3 {
  background-color: #fff;
  margin: 10px 0 0 0;
}
.se2listleft {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 26rpx;
}
.borderBottoms {
  border-bottom: 2rpx solid #f6f6f6;
}
input {
  font-size: 24rpx;
  width: 100%;
}
.keywordstyle::-webkit-input-placeholder {
  font-size: 20rpx;
  color: #f6f6f6;
}
.se2listright {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20rpx;
}
.se2listimg {
  width: 28rpx;
  height: 28rpx;
}
.se2list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 20rpx;
  padding: 16rpx 0;
}
.se2-2-2 {
  font-size: 28rpx;
}
.se2-1 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #f6f6f6;
  border-top-left-radius: 30rpx;
  border-top-right-radius: 30rpx;
}
.se2 {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  padding-bottom: 16rpx;
  border-bottom-left-radius: 6rpx;
  border-bottom-right-radius: 6rpx;
}
.se0 {
  width: 100%;
  /* height: 600rpx; */
  position: relative;
  background-color: #fff;
}
.se1 {
  width: 94%;
  margin: 0 auto;
  /* height: 600rpx; */

  background-color: #fff;
  position: relative;
  top: -40rpx;
  left: 0;
  right: 0;
  border-top-left-radius: 40rpx;
  border-top-right-radius: 40rpx;
}
.se2-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80rpx;
  flex: 1;
}

.seactive {
  background-color: #fff;
  border-top-left-radius: 30rpx;
  border-top-right-radius: 40rpx;
  border-bottom-right-radius: 60px 1px;
}
.bac {
  background-color: #22ddb8;
  border-radius: 10rpx;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-top: 10rpx;
}
/* https://www.cnblogs.com/nullman/p/6743582.html  弧形线*/
.circle4 {
  width: 40rpx;
  height: 10rpx;
  border: 4rpx solid #22ddb8;
  border-radius: 0 0 50% 50%/0 0 100% 100%;
  border-top: none;
}
</style> 