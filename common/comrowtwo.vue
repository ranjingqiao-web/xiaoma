<template>
<!-- rowsantwo -->
  <div class="rowsan margintop">
    <div class="rowsan94">




       <div class="rowsanlist margintop">
        <div class="rowsantop">
          <div class="rowsanstart">
          
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
              <span class="rowsan1">JAVEN</span> 
            </div>
          </div>
          <div class="rowsan2">总监 | 从业10年</div>
           
          <div class="rowsan2">
            <div> 
              ￥<span class="rowsan1">99 </span> <span class="rowsanrow">最低优惠30%</span> 
            </div>
            <div>2.3km</div>
          </div>
          <div class="rowsan2">
            <div class="column">
               <img :src="persen" alt="" class="startss">
               <div>
                 <div class="rowsan2">KJSL理发师</div>
                 <div>
                 <img :src="start" alt="" class="startimg">

                 </div>
               </div>
            </div>
            <div>2.3km</div>
          </div>
        </div>
      </div>
      
     
       
    </div>
  </div>
</template> 
<script>
export default {
  name: "comrowtwo",
  props: ["startnum"],
  data() {
    return {
      start: require("../static/img/all/start.png"),
      persen: require("../static/img/all/persen.png"),
       
    };
  },
  watch: {},
  created: function() {},
  mounted() {},
  methods: {}
};
</script>
<style  scoped>
 
.startss{
  width: 50rpx;
  height: 50rpx;
  border-radius: 100rpx;
}
.column{
   display: flex;
  flex-direction: row; 
  align-items: center;
}
.rowsanrow{
  font-size: 18rpx;
  color: #22ddb8;
}
.margintop{
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
  padding: 4rpx 6rpx;
  color: #9a9a9a;
}
.startimg {
  width: 18rpx;
  height: 18rpx;
  margin-left: 2rpx;
}
.rowsan {
  background-color: #fff;
  width: 98%;

}
 
.rowsanlist {
   
  border-radius: 8rpx;
  overflow: hidden;
  background-color: #fff;
  
  box-shadow:5rpx 5rpx 5rpx 0 rgba(0, 0, 0, 0.1);
 
}
.rowsantop {
  height: 250rpx;
  background-color: #22ddb8;
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
 
</style>