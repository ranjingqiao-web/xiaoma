<template>
 <div class="vipdengji">
      <div class="vipdengji90">
	   {{prams}} 
	   </div>
      
    </div>
</template>
<script>
export default {
  name: 'comrigthbtn',
  props:  ['prams' ],
  data () {
    return {
      // imgaes: require("../../assets/quanyishuomin.png"), 
    }
  },
  watch: { 
  },
 created:function(){
		 
	    },
  mounted () {
    
  },
  methods: {
   
  }
}
</script>
<style   scoped>
 .quanyishuomi{
   width: 10px;
   height: 10px;
 }
.vipdengji{ 
  width: 100%;
  padding: 20px 0;
  height: 50px;
  background-color: #fff; 
  display: flex;flex-direction: row;
  justify-content: flex-start;
  align-items: center
}
.vipdengji90{
  font-size: 36px;
  font-weight:bold; 
  color: #282828;
  width: 94%;
  margin: 0 auto;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center
}
.vipdengji90:before{
  content: "";
    float: left;
        width: 8px;
    height: 40rpx;
    background-color: #00C6C2;
    border-radius: 4px;
    margin: 0 10px 0 0;
}

</style>