<template>
    <!-- <comleftbtton prams1='设计师' prams2='WORKS' :boedertom=false :showyou='true'/>  -->
 <div class="vipdengji" :class="[boedertom?'borderBotto':'']">
      <div class="vipdengji90"  >
        <div>
           <div class="title">{{prams1}} </div>
           <div class="titles">{{prams2}} </div>
        </div>
         </div>
       <img v-if="showyou" :src="you1" class="quanyishuomi"/> 
    </div>
</template> 
<script>
export default {
  name: 'comleftbtton',
  props:  ['prams1','prams2','isprams','boedertom','showyou'],
  data () {
    return {  
      you1: require("../static/img/all/you1.png"),

    }
  },
  watch: { 
  },
 created:function(){ 
	    },
  mounted () {
    
  },
  methods: {
   quanYidaig(){
     this.$emit('dalogsquanyi')
   }
  }
}
</script>
<style  scoped>
 .quanyishuomi{
   width: 32rpx;
   height: 32rpx;
 }
 .borderBotto{
   border-bottom: 1px solid #f6f6f6;
 }
.vipdengji{
  margin-top: 10px; 
  height: 80rpx;
  background-color: #fff;
     padding: 0 20rpx;
  display: flex;flex-direction: row;
  justify-content: flex-start;
  align-items: center;
 

}
.title{
font-size: 26rpx;
  font-weight: 800;
}
.titles{
font-size: 20rpx;
color: #9a9a9a;
   
}
.vipdengji90{
   width: 94%;
  height: 20rpx;
  margin: 0 auto;
  text-align: left;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between;  */
  align-items: center
}
.vipdengji90:before{
  content: "";
float: left;
width: 8rpx;
height: 50rpx;
background-color: #000;
border-radius: 2rpx;
margin: 0 10rpx 0 0;

}

</style>