<template>
<!-- rowsantwo -->
  <div class="rowsan margintop">
    <div class="rowsan94">
     <div class="rowsanlist margintop">
        <div class="rowsantop" @click="jumptopersondetail">
            <img    class="startimg" :src="items.persen" />
          
        </div>
       
      </div>
      
     
       
    </div>
  </div>
</template> 
<script>
export default {
  name: "comrowtwoimg",
  props: ["items"],
  data() {
    return { 
      start: require("../static/img/all/start.png"),  
       
    };
  },
  watch: {},
  created: function() {},
  mounted() {},
  methods: {
    jumptopersondetail(){
      this.$emit("jumptopersondetails",1)
    }
  }
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
  width: 100%;
  height: 100%;
  
}
.rowsan {
  background-color: #fff;
 

}
 
.rowsanlist { 
  

}
 
.rowsanlist { 
  border-radius: 8rpx;
  overflow: hidden;
  background-color: #fff;
  
  box-shadow:5rpx 5rpx 5rpx 0 rgba(0, 0, 0, 0.1);
 
}
.rowsantop {
  height: 404rpx;
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