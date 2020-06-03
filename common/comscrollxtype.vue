<template>
  <div class="scrolls">
    <scroll-view scroll-x class="scrollse">
      <div class="typenumber" >
        <div class="typenumber0"
         @click="getporsentype(index)" 
        v-for="(item,index) in numberuser"
        :class="isactives==index?'actives':''"
         :key="index">
          <div class="typenumber1"   v-if="index==0"  :class="isactives==index?'borderactives':''"></div>
          <div class="typenumber2" v-if="index==1"  :class="isactives==index?'borderactives':''"></div>
          <div class="typenumber3" v-if="index==2"  :class="isactives==index?'borderactives':''"></div>
          <div class="typenumber4" v-if="index==3"  :class="isactives==index?'borderactives':''"></div>
           <div class="border-up" v-if="index==4">
            <span></span>
          </div>

           <div class="typenumber6" v-if="index==5"  :class="isactives==index?'borderactives':''"></div>
        </div>


        <!-- <div class="typenumber0" @click="getporsentype(2)">
          <div class="typenumber2"></div>
        </div>
        <div class="typenumber0" @click="getporsentype(3)">
          <div class="typenumber3"></div>
        </div>
        <div class="typenumber0" @click="getporsentype(4)">
          <div class="typenumber4"></div>
        </div>
        
        <div class="typenumber0" @click="getporsentype(5)">
          <div class="border-up">
            <span></span>
          </div>
        </div>
         <div class="typenumber0" @click="getporsentype(6)">
          <div class="typenumber6"></div>
        </div> -->
      </div>
    </scroll-view>
  </div>
</template> 
<script>
export default {
  name: "comscrollxtype",
  props: [""],
  data() {
    return {
      numberuser:6,
      isactives:0, 
      start: require("../static/img/all/start.png"), 
      listData: []
    };
  },
  watch: {},
  created: function() {},
  mounted() {},
  methods: {
    getporsentype(usertype) {
      this.isactives=usertype
      this.$emit("getuserfacetype", usertype);
    }
  }
};
</script>
<style  scoped>
.scrolls {
  background-color: #fff;

  width: 100%;
  white-space: nowrap;
  margin: 0 auto; 
}

.rowzuoscoll {
  width: 100%;
  white-space: nowrap;
}

.typenumber {
  width: 94%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
.typenumber0 {
  border: 1rpx solid #ccc;
  width: 80rpx;
  height: 80rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.typenumber1 {
  width: 50rpx;
  height: 60rpx;
  border: 1rpx solid #ccc;
  border-radius: 50%/50%;
}
.typenumber2 {
  width: 50rpx;
  height: 50rpx;
  border: 1rpx solid #ccc;
  border-radius: 50%;
}
.typenumber3 {
  width: 50rpx;
  height: 50rpx;
  border: 1rpx solid #ccc;
}
.typenumber4 {
  width: 30rpx;
  height: 30rpx;
  transform: rotateZ(45deg) skew(30deg, 30deg);

  border: 1rpx solid #ccc;
}

.border-up {
  width: 0;
  height: 0;
  border-left: 34rpx solid transparent;
  border-right: 34rpx solid transparent;
  border-bottom: 30rpx solid #ccc;
  position: relative;
  margin: 50rpx auto;
}
.border-up span {
  display: block;
  width: 0;
  height: 0;
  border-left: 28rpx solid transparent;
  border-right: 28rpx solid transparent;
  border-bottom: 28rpx solid #fff;
  position: absolute;
  left: -28rpx; 
}

.typenumber6 {
  width: 40rpx;
  height: 60rpx;
  border: 1rpx solid #ccc;
}
.sanjiaoactive {
  border-color: transparent transparent #22ddb8 transparent;
}
.actives{
  background-color: #22ddb8;
    border: 1rpx solid #fff;
}

.borderactives{
  border: 1rpx solid #fff;

}
</style>