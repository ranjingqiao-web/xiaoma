<template >
    <div class="comnodata"   >
		<img :src='nodata' class='comnodata0'/> 
		<view class="comnodata1">
			 {{cont}}
		</view>
	</div>
</template>
<script> 
export default {
  name: "comnodata",
  props: ["cont"],
  data() {
    return {
      nodata: require("../static/img/xin/nodata.png"),
       
    };
  },
  watch: {},
  created: function() {},
  mounted() {},
  methods: {
    
  }
};
</script> 
<style scope>
.comnodata {
   
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    
}
.comnodata0{
	width: 50%;
	height: 200rpx;
	margin: 0 auto;
}
 
.comnodata1{
	margin-top: 20rpx;
	font-size: 24rpx;
	color: #333;
}
 
</style>