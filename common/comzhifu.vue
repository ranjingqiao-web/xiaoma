<template >
    <div class="newzhifu"   @click="tonowzhifu" >立即支付</div>
</template>
<script>
export default {
    props:[''],
    methods: {
      tonowzhifu(){
        this.$emit("getnowzhifu",true)
      }
      
    },
}
</script>
<style scope>
.newzhifu {
  position: fixed; 
   left: 0;
  bottom: 0;
  right: 0;
  padding: 30rpx 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
   background-color: #22ddb8; 
   z-index: 99;
   color: #fff;
}

 
</style>