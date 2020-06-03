<template >
    <div class="mask" v-if="dialog" @click="getdialog"></div>
</template>
<script>
export default {
    props:['dialog'],
    methods: {
      getdialog(){
        this.$emit("isshowmask",false)
      }
      
    },
}
</script>
<style scope>
.mask {
  position: fixed;
  top: 200rpx;

  left: 0;
  bottom: 0;

  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
   -webkit-animation:show 1s ease-in;
  animation:show 1s ease-in;
}


 
@-webkit-keyframes show  
{
0% {opacity:0;}
10% {opacity:.1;}
20% {opacity:.2;}
30% {opacity:.3;}
40% {opacity:.4;}
50% {opacity:.5;}
60% {opacity:.6;}
70% {opacity:.7;}
80% {opacity:.8;}
90% {opacity:.9;}
100% {opacity:1;}
}
@keyframes show  
{
0% {opacity:0;}
10% {opacity:.1;}
20% {opacity:.2;}
30% {opacity:.3;}
40% {opacity:.4;}
50% {opacity:.5;}
60% {opacity:.6;}
70% {opacity:.7;}
80% {opacity:.8;}
90% {opacity:.9;}
100% {opacity:1;}
}
</style>