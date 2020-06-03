<template> 
  <div class="scrolls">
    <scroll-view scroll-x  >
      <div class="green contents marleft" >
        <div class="rowsanlist">
          <div class="rowsantop">
            <div class="rowsanstart">
              5.0分
              <img
                :src="start"
                :alt="item"
                class="startimg"
                v-for="(item,index) in startnum"
                :key="index"
              />
            </div>
          </div>
          <div class="rowsanbottom">
             <div class="rowsan2">
              <div>
                <span class="rowsan1">成都影视沙龙</span>  
              </div>
               <div>服务299</div>
            </div> 
            <div class="rowsan2">
              <div>服务234</div>
              <div>2.3km</div>
            </div>
          </div>
        </div>
      </div>

      <div  class="green contents marleft">
        <div class="rowsanlist">
          <div class="rowsantop">
            <div class="rowsanstart">
              5.0分
              <img
                :src="start"
                :alt="item"
                class="startimg"
                v-for="(item,index) in startnum"
                :key="index"
              />
            </div>
          </div>
          <div class="rowsanbottom">
             <div class="rowsan2">
              <div>
                <span class="rowsan1">成都影视沙龙</span>  
              </div>
               <div>服务299</div>
            </div> 
            <div class="rowsan2">
              <div>服务234</div>
              <div>2.3km</div>
            </div>
          </div>
        </div>
      </div>


      <div  class="green contents marleft">
        <div class="rowsanlist">
          <div class="rowsantop">
            <div class="rowsanstart">
              5.0分
              <img
                :src="start"
                :alt="item"
                class="startimg"
                v-for="(item,index) in startnum"
                :key="index"
              />
            </div>
          </div>
          <div class="rowsanbottom">
            <div class="rowsan2">
              <div>
                <span class="rowsan1">成都影视沙龙</span>  
              </div>
               <div>服务299</div>
            </div> 
            <div class="rowsan2">
              <div>服务234</div>
              <div>2.3km</div>
            </div>
          </div>
        </div>
      </div>
    </scroll-view>
  </div>
</template> 
<script>
export default {
  name: "comrowppaiguan",
  props: ["startnum"],
  data() {
    return {
      start: require("../static/img/all/start.png")
    };
  },
  watch: {},
  created: function() {},
  mounted() {},
  methods: {}
};
</script>
<style  scoped>
.scrolls{
  width: 94%; white-space: nowrap; margin: 0 auto;
}
.contents{
  display: inline-block; width: 70%; height: 300rpx; 
   
}
.rowzuoscoll {
  width: 100%;
  white-space: nowrap;
}
.marleft {
  margin-right: 10rpx;
}
.margintop {
  margin-top: 10rpx;
}
.rowzuo1 {
  width: 100%;
  /* display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between; */
}
.margintop {
  margin-top: 10rpx;
}
.rowsan1 {
  font-weight: 600;
  font-size: 24rpx;
  color: #333;
}
.rowsan2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 20rpx;
  padding: 4rpx 10rpx;
  color: #9a9a9a;
}
.startimg {
  width: 20rpx;
  height: 20rpx;
  margin-left: 2rpx;
}
.rowsan {
  background-color: #fff;
}
.rowsan94 {
  width: 94%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.rowsanlist {
  flex: 1;
  border-radius: 8rpx;
  overflow: hidden;
  background-color: #fff;

  box-shadow: 5rpx 5rpx 5rpx 0 rgba(0, 0, 0, 0.1);
}
.rowsantop {
  height: 250rpx;
  background-color: #00C6C2;
  position: relative;
}
.rowsanstart {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20rpx;
  color: #fff;
  position: absolute;
  bottom: 4rpx;
  left: 10rpx;
}
.rowsantwo {
  margin: 0 10rpx;
}
</style>